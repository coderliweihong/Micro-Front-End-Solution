/**
 * @author  coderlwh
 * @createDate  2025/1/6 13:24
 * @description anythings
 * @version 1.0
 */
import path from 'path';
import express from 'express';
import ejs from 'ejs';
import config from './config.js';
const {port, host, __dirname} = config;
const app = express()
// express 遇到以.html结尾的文件，使用ejs模版引擎处理文件
app.engine('.html', ejs.__express);
// 设置ejs模版文件存放目录
app.set('views', path.join(__dirname, 'views'));
// 设置默认的视图引擎为html
app.set('view engine', 'html');
app.get('/', function (req, res){
    res.render('iframe_template')
});
app.listen(port.micro, host);
console.log(`micro server start at http://${host}:${port.micro}`)