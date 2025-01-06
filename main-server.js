/**
 * @author  coderlwh
 * @createDate  2025/1/6 13:23
 * @description anythings
 * @version 1.0
 */
import * as path from 'path';
import express from 'express';
import ejs from 'ejs';
import config from './config.js';
const {port, host, __dirname} = config;
const app = express();
// express 遇到以.html结尾的文件，使用ejs模版引擎处理文件
app.engine('.html', ejs.__express);
// 设置ejs模版文件存放目录
app.set('views', path.join(__dirname, 'views'));
// 设置默认的视图引擎为html
app.set('view engine', 'html');

app.get('/', function (req, res){
    res.render('main_template', {
        iframeUrl: `http://${host}:${port.micro}`
    })
})
app.listen(port.main, host)
console.log(`main server start at http://${host}:${port.main}`)
