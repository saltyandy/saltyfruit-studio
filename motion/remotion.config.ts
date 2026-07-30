import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
// The orb is a WebGL shader; headless Chrome needs ANGLE to create a GL context
Config.setChromiumOpenGlRenderer('angle');
Config.setOverwriteOutput(true);
// H.264 with a quality-leaning CRF; the tile renders small on the page,
// so this keeps files light without visible banding on the gradients.
Config.setCodec('h264');
Config.setCrf(18);
