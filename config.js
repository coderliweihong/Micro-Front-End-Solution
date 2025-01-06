/**
 * @author  coderlwh
 * @createDate  2025/1/6 13:24
 * @description anythings
 * @version 1.0
 */
import ip from 'ip';
import * as path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
    port: {
        main: 4000,
        micro: 3000
    },
    host: ip.address(),
    __dirname
};