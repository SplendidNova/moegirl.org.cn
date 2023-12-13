//accelerator highlight
$('#content *').each(function () {
	if ($(this).clone().children().remove().end().text().includes("♯")) {
		$(this).html($(this).html().replace(/(♯{2,})/g, '<span style="background:yellow;color:black !important;border:0.25em dotted red;">$1</span>'));
	}
});

