let fs = require('fs');

let files = `_posts/2013-11-18-233026.html _posts/2014-03-15-0523.html   _posts/2016-03-22-115358.html _posts/2016-04-23-142628.html _posts/2016-09-05-082457.html _posts/2013-11-18-233230.html _posts/2014-03-24-232551.html _posts/2016-03-22-225645.html _posts/2016-04-25-22340.html  _posts/2016-09-05-223249.html _posts/2013-11-18-233316.html _posts/2014-04-25-185454.html _posts/2016-03-23-224548.html _posts/2016-06-23-221011.html _posts/2016-09-09-201136.html _posts/2013-11-18-233424.html _posts/2014-04-26-161258.html _posts/2016-03-24-155435.html _posts/2016-06-23-221738.html _posts/2016-09-16-151859.html _posts/2013-11-18-233645.html _posts/2014-04-26-16147.html  _posts/2016-03-24-16170.html  _posts/2016-06-23-22538.html  _posts/2016-09-18-164340.html _posts/2013-11-19-181227.html _posts/2014-04-30-125641.html _posts/2016-03-24-162136.html _posts/2016-06-23-22623.html  _posts/2016-09-24-212743.html _posts/2013-11-27-174045.html _posts/2014-05-12-224246.html _posts/2016-03-24-162318.html _posts/2016-06-23-22654.html  _posts/2016-09-29-205743.html _posts/2013-12-07-12058.html  _posts/2014-07-26-142811.html _posts/2016-03-24-16957.html  _posts/2016-06-23-22923.html  _posts/2016-10-04-153909.html _posts/2013-12-16-145846.html _posts/2014-08-21-93434.html  _posts/2016-03-24-21351.html  _posts/2016-09-02-163958.html _posts/2016-10-26-113715.html _posts/2013-12-17-162016.html _posts/2014-10-12-17411.html  _posts/2016-03-29-21113.html  _posts/2016-09-02-164235.html _posts/2016-11-03-220153.html _posts/2014-01-08-175311.html _posts/2015-12-05-104015.html _posts/2016-04-03-11492.html  _posts/2016-09-02-164335.html _posts/2016-11-14-005841.html _posts/2014-01-19-131135.html _posts/2016-03-14-163016.html _posts/2016-04-05-184334.html _posts/2016-09-02-16438.html  _posts/2016-11-29-164749.html _posts/2014-02-02-131933.html _posts/2016-03-21-10471.html  _posts/2016-04-10-224935.html _posts/2016-09-02-164423.html _posts/2014-02-02-18130.html  _posts/2016-03-21-174230.html _posts/2016-04-11-21525.html  _posts/2016-09-02-164458.html _posts/2014-02-06-175417.html _posts/2016-03-21-21241.html  _posts/2016-04-19-193054.html _posts/2016-09-02-164520.html`.split(' ').filter(f => f != '');

for (let f of files)
{
    let content = fs.readFileSync(f, 'utf-8');
    let render = content.replace(`<h2 id="ttt">{{ page.title }}</h2>`, '').replace('<center><p>| {{ page.date | date_to_string }} | {{ page.tags }} |</p></center>', '');
    let time = /_posts\/(\d+)-(\d+)-(\d+)-(\d+).*/.exec(f);
    let date = `${time[1]}-${time[2]}-${time[3]} 00:00:00`;
    let title = /title:\s*([^\n]*)\n/.exec(render);
    title = title[1].replace(/"/g, '').replace('[', '').replace(']','');
    render = render.replace(`${time[1]}-${time[2]}-${time[3]}`, date).replace(/title:.*\"[^\n]*\"\n/, 'title: ' + title + '\n').replace('---', '---\nlayout: false');
    let arr = render.split('\n');
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    arr.shift();
    render = arr.join('\n');
    fs.writeFileSync(`out/${time[4]}.html`, render);
    let str = 
`---
title: ${title}
date: ${date}
tags:
---

旧文章转移，点击查看详情...
<script src='/old/loader.js'></script>`;
    fs.writeFileSync(`../../source/_posts/${time[4]}.md`, str);
}
