(function (window, undefined) {
	if (!window.old && (/.*\/\d+\/\d+\/\d+\/\d+\/$/.test(location.href)))
	{
        let token = document.location.href.split('/').filter(function (x) {return (x != '');}).pop();
        let el = document.getElementsByClassName('post-content').item(0);
        jQuery.get('/old/out/' + token + '.html', function (str) {
            window.old = true;
            el.innerHTML = el.innerHTML.replace('旧文章转移，点击查看详情…', str);
        });
    }
})(window);
