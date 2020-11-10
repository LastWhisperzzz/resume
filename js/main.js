/**********************************文档区*****************************************/
var text1=`/*
* 大家好，我是LastWhisper。
* 下面我来简单介绍一下我自己。
* 但是文字介绍过于单调。
* 今天，来点不一样的。
* 来做一个动态简历。
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* 这样太单调了，给代码来点颜色 */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 在加上动态阴影吧 */
#code{
  animation: glow 800ms ease-out infinite alternate;
}

/* 现在正式开始 */

/* 我需要一张白纸 */
#paper {
  position: fixed;
  right: 0;
  width: 48%;
  height: 100vh;
  padding: 16px;
  background: #ccc;
}
#paper>.content{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* 于是我就可以在白纸上写字了，请看右边 */

`;

var text2=`# 自我介绍

Last Whisper
----
26岁，Java软件工程师，三年Java EE 从业经验，目前在杭州工作。
有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控。
<br/>


技能
----
* 后端开发
* 前端开发
* 小程序开发
* API接口开发
* Linux
* 开源爱好者
* 博客系统

技术及语言
----
  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis、Shiro、Freemarker
  - **前端**: JS、Node.js、Vue.js、Webpack、Bootstrap、ElementUI、jQuery 
  - **数据库**: MySQL、SQLServer、Oracle、MongoDB、redis
  - **web 服务器**: Nginx、Tomcat、Apache、Jetty
  - **OS**: Linux、Windows
  - **Others**: Git、Svn、Maven、XMind、Visio、IDEA

工作经历
----
1. [杭州诚智天扬科技有限公司](http://www.witsky.cn//) 
2. [浙江网仓科技有限公司](http://wangcang-v2.ibeimen.com/)

开源项目
----
1. [基于vuepress+reco的个人博客](https://www.lastwhisper.net)
2. [vue商城后台管理系统](https://github.com/LastWhisperzzz/vue-mall)
3. [Web网易云音乐](https://github.com/LastWhisperzzz/music)
4. [2048game](https://github.com/LastWhisperzzz/2048)
5. [动态简历](https://github.com/LastWhisperzzz/resume)
6. [仿星巴克官网首页](https://github.com/LastWhisperzzz/starbucks)
7. [技术博客网站](http://www.lastwhisper.net)

链接
----
* [个人博客](http://lastwhisper.net)
* [GitHub](https://github.com/LastWhisperzzz)
* [码云](https://gitee.com/LastWhisterzzz)
* [CSDN](https://blog.csdn.net/qq_37894476)
* [知乎](https://www.zhihu.com/people/xu-xiang-zhong)

[归档文章]
----
1. [Vue](https://github.com/LastWhisperzzz/vue-learning-notes)
2. [CSS](https://github.com/LastWhisperzzz/css_tricks)
3. [JavaScript](https://github.com/LastWhisperzzz/js_tricks)

联系我
----
* Email：**xxzworkmail@gmail.com** 
* Twitter：**https://twitter.com/LastWhisperzzz**
* 主要涉及技术：**Web后端开发**、**通讯业务**、**仓储系统**、**开源爱好者**、**Linux** 

> 这就是我的个人简介,如果感兴趣欢迎关注我的GitHub和个人博客\\ (•◡•) /
`;

var text3=`
/* 由于使用的是Mmarkdown格式 */
/* 需要转换为Html */

/*
* 接下来使用一个优秀的库
* 将我们的Mmarkdown转换为Html
*/

`;
var text4=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

/**********************************执行代码区*****************************************/
writeLeft(()=>{
  qx(()=>{
      createPaper(()=>{
      writeRight(()=>{
        mdHtml(()=>{
          md(()=>{
            end()
          })
        })
      })
    })
  })
})




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },10)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },10)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },10)
}



