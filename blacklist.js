//username blacklist
$(function () {
    var shieldedUser = ["%E5%B9%B3%E5%B9%B3%E5%87%A1%E5%87%A1%E5%B0%8F%E5%B0%8F%E9%9E%A0"];
    for (var i = 0; i < shieldedUser.length; i++) {
        $('a[href*="User:' + shieldedUser[i] + '"], a[href*="User:' + shieldedUser[i] + '"]+sup, a[href*="User:' + shieldedUser[i] + '"]+sup+sup').remove();
    }
});
