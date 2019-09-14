import { utility } from '../../optimus-automation';
import {
  OUTPUT_DIRECTORY_NAME,
  SCREENSHOT_DIRECTORY_NAME,
} from './constants';

(async function createOutputDirectory() {
  await utility.mkdir(`${process.cwd()}/${OUTPUT_DIRECTORY_NAME}`);
  await utility.mkdir(`${process.cwd()}/${OUTPUT_DIRECTORY_NAME}/${SCREENSHOT_DIRECTORY_NAME}`);
}());
