# Salty Fruit — Interactive Portfolio Homepage

Concept and build notes for the new creative portfolio section of the Salty Fruit website.

## The Idea

The homepage hero is a playable 3D scene: a **pyramid of stacked fruit**. The visitor clicks it, the stack collapses with real physics, and the fruit tumbles and scatters across the bottom of the screen. Each piece of fruit is a project — hover to see its name, click to open the case study.

The scatter is deliberately left chaotic: fruit stays wherever it lands, so every visitor gets their own arrangement. The playfulness *is* the brand.

### Interaction flow

1. **Stacked** — fruit pyramid sits on a plinth, slowly lit, hint says "Click the pyramid"
2. **Collapse** — any click knocks it down; fruit tumbles with physics (gravity, collisions, rolling)
3. **Scatter** — fruit settles where it lands, biased toward the lower part of the screen
4. **Menu** — hint changes to "Pick a fruit"; hover = glow + project name, click = project card opens
5. **Restack** — a button rebuilds the pyramid

### Ideas explored and parked

- **Slot machine** — pull a handle, fruit reels spin, a random project is revealed on the machine's screen. Legible but random; more moving parts. Parked.
- **Bite pyramid** — a rotating fruit on a pyramid; each click takes a bite (pre-modeled bite states / morph targets) and reveals a project inside. Distinctive; may revisit.
- **Falling fruit pyramid** — chosen direction (this document).

## Current Prototype

A single self-contained HTML file: `salty-fruit-pyramid.html`

- **Three.js r128** (from CDN) for rendering
- **Custom sphere physics** — no physics library; gravity, sphere–sphere collisions, floor/wall bounds, rolling resistance. Good enough for the prototype; swap for **Rapier** if fruit shapes get complex
- 14 placeholder fruits (colored spheres + stems), each mapped to a placeholder project name and description
- Project card opens as an HTML overlay; camera has a subtle mouse parallax

### Bugs found and fixed along the way

- **Settle timer** counted capped frame-time instead of wall-clock, so slow frames delayed the clickable "menu" state indefinitely → now wall-clock based
- **Retina displays** rendered the canvas at 2× size, pushing the scene into the corner → canvas CSS pinned to viewport (`width/height: 100%`)
- Fruit rolled too far toward the camera → tighter bounds + rolling damping

## The Blender → Web Pipeline

Placeholder spheres get replaced with real modeled fruit.

1. **Model** fruit in Blender (styled to reference images — art direction TBD)
2. **Bake** lighting/detail into textures where possible
3. **Export** each fruit as `.glb` (glTF binary)
4. **Compress** with Draco or meshopt — whole scene should stay under ~2–3 MB
5. **Load** in Three.js in place of the spheres; physics keeps treating them as spheres for collision

Key principle: **Blender builds the machine, the browser makes it behave.** Models and materials come from Blender; all motion and interaction stay in code for tight interactive feel.

## Tooling: Claude + Blender (blender-mcp)

Using [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) so Claude can drive Blender directly — create/modify objects, apply materials, run Python in Blender, pull assets from Poly Haven / Sketchfab, and screenshot the viewport to compare against reference images and iterate.

### Setup (Mac)

1. Install Blender — blender.org or `brew install --cask blender`
2. Install uv — `brew install uv`
3. Download `addon.py` from the blender-mcp repo → Blender: Edit → Preferences → Add-ons → Install from Disk → enable "Interface: Blender MCP"
4. Register the MCP server with Claude Code:
   ```bash
   claude mcp add blender -- uvx blender-mcp
   ```
5. In Blender: `N` sidebar → **BlenderMCP** tab → Connect to MCP server

### Division of labor

- **Claude Code** (terminal, local): the production loop — Blender modeling, GLB export, website repo, Three.js integration, git
- **Cowork** (chat): concept prototypes, design direction, reference-image discussion

## Next Steps

- [ ] Gather reference images for the fruit art direction (style, palette, shading, lighting mood)
- [ ] Set up blender-mcp on the Mac (steps above)
- [ ] Model the fruit set in Blender to match references
- [ ] Export GLBs, swap into the prototype, replace placeholder projects with real case studies
- [ ] Decide: keep custom physics or move to Rapier
- [ ] Mobile pass — touch interaction, performance on lower-end devices
- [ ] Accessibility fallback — a plain list of projects for no-WebGL / reduced-motion visitors
