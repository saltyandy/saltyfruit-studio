import {Composition} from 'remotion';
import {OrbLabTile, LAB_TILE_DURATION_S} from './nuvolari/OrbLabTile';
import {ProcessReel, processReelDuration, FPS} from './process/ProcessReel';
import {CinemaHero, CINEMA_DURATION_S} from './nuvolari/CinemaHero';
import {SchematicFilm, SCHEMATIC_LOOP_S} from './nuvolari/SchematicFilm';
import {OrbBackdrop, BACKDROP_RENDER_S} from './nuvolari/OrbBackdrop';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="OrbNotifications"
        component={OrbLabTile}
        durationInFrames={LAB_TILE_DURATION_S * 30}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="OrbBackdrop"
        component={OrbBackdrop}
        durationInFrames={BACKDROP_RENDER_S * 30}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="CinemaHero"
        component={CinemaHero}
        durationInFrames={CINEMA_DURATION_S * 30}
        fps={30}
        width={1440}
        height={760}
      />
      <Composition
        id="OrbSchematic"
        component={SchematicFilm}
        durationInFrames={SCHEMATIC_LOOP_S * 30}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ProcessReel"
        component={ProcessReel}
        durationInFrames={processReelDuration()}
        fps={FPS}
        width={1080}
        height={1350}
      />
    </>
  );
};
