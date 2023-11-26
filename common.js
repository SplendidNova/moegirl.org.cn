//歌词注音
mw.loader.load('/index.php?title=User:東東君/js/ruby.js&action=raw&ctype=text/javascript');

//查找链入
mw.loader.load('https://fastly.jsdelivr.net/gh/lovelyCARDINAL/wikitool@main/searchLinks.min.js');

//快速差异
mw.loader.load('/index.php?title=User:Nzh21/js/QuickDiff.js&action=raw&ctype=text/javascript');

//用户状态
//mw.loader.load('https://zh.moegirl.org/index.php?title=User:AnnAngela/js/userStatus.js&action=raw&ctype=text/javascript');

//wikiplus
//mw.loader.load('https://wikiplus-app.com/Main.js');

//wikiplus查找替换
mw.loader.load('/index.php?title=User:東東君/js/Wikiplus-replace.js&action=raw&ctype=text/javascript');

//标记讨论串
//mw.loader.load('/index.php?title=User:Leranjun/js/MarkAsResolved.js&action=raw&ctype=text/javascript');

//批量挂删
//mw.loader.load('/index.php?title=User:星海子/js/MassDelete.js&action=raw&ctype=text/javascript');
//window.MassDelete=true;

//批量移动
//mw.loader.load('/index.php?title=User:星海子/js/MassMove.js&action=raw&ctype=text/javascript');
//window.MassMove=true;

//w+高亮
//mw.loader.load('//cdn.jsdelivr.net/npm/wikiplus-highlight');
mw.loader.load('//unpkg.com/wikiplus-highlight/dist/main.min.js');

//usermessage
//mw.loader.load(mw.config.get("wgServer") + mw.config.get("wgScriptPath") + '/index.php?title=U:栀梦/welcome.js&action=raw&ctype=text/javascript');

//高亮一方通行
$('#content *').each(function () {
	if ($(this).clone().children().remove().end().text().includes("♯")) {
		$(this).html($(this).html().replace(/(♯{2,})/g, '<span style="background:yellow;color:black !important;border:0.25em dotted red;">$1</span>'));
	}
});
