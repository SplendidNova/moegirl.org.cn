$(function () {
    $('img[srcset*=".svg"]').each(function () {
        if ($(this).attr("srcset").indexOf("img.moegirl.org.cn/") > -1) {
            $(this).attr("src", $(this).attr("src").replaceAll("thumb/", "").replaceAll(/\.svg\/.*/g, ".svg"));
            $(this).attr("srcset", $(this).attr("srcset").replaceAll("thumb/", "").replaceAll(/\.svg\/[^ ]*/g, ".svg"));
        }
    });
    $("img[data-lazy-src*='.svg']").each(function () {
        var _a;
        if ($(this).attr("data-lazy-src").indexOf("img.moegirl.org.cn/") > -1) {
            $(this)
                .attr("src", $(this).attr("data-lazy-src").replaceAll("thumb/", "").replaceAll(/\.svg\/.*/g, ".svg"))
                .attr("srcset", (_a = $(this).attr("data-lazy-srcset")) === null || _a === void 0 ? void 0 : _a.replaceAll("thumb/", "").replaceAll(/\.svg\/[^ ]*/g, ".svg"))
                .removeAttr("data-lazy-state");
            $(this).replaceWith($(this).clone());
        }
    });
});
