/**
 * @author  coderlwh
 * @createDate  2025/1/10 14:43
 * @description anythings
 * @version 1.0
 */
import ip from 'ip';
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const host = ip.address();
console.log('host', host);

app.use(express.static(__dirname + "/public"));

app.listen(9527, host);
console.log(`server start at http://${host}:9527`)