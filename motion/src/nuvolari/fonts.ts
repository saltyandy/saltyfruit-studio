import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

/* Geist variable font (latin), same family the app loads via next/font/google */
loadFont({
  family: 'Geist',
  url: staticFile('fonts/Geist-latin.woff2'),
  weight: '100 900',
});
