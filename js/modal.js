function diplay_hide(a) {
    "none" == $(a).css("display") ? $(a).animate({
        height: "show"
    }, 1e3) : $(a).animate({
        height: "hide"
    }, 1e3)
}
jQuery(function (a) {
    a("body").on("click", ".login_magic1", function (b) {
        b.preventDefault(), a("#tmodal1").modal().open()
    }), a("body").on("click", ".login_magic2", function (b) {
        b.preventDefault(), a("#tmodal2").modal().open()
    }), a("body").on("click", ".login_magic3", function (b) {
        b.preventDefault(), a("#tmodal3").modal().open()
    }), a("body").on("click", ".login_magic4", function (b) {
        b.preventDefault(), a("#tmodal4").modal().open()
    }), a("body").on("click", ".login_magic0", function (b) {
        b.preventDefault(), a("#tmodal0").modal().open()
    }), a("body").on("click", ".login_magic5", function (b) {
        b.preventDefault(), a("#tmodal5").modal().open()
    }), a("body").on("click", ".login_magic6", function (b) {
        b.preventDefault(), a("#tmodal6").modal().open()
    }), a("body").on("click", ".login_magic7", function (b) {
        b.preventDefault(), a("#tmodal7").modal().open()
    }), a("body").on("click", ".login_magic8", function (b) {
        b.preventDefault(), a("#tmodal8").modal().open()
    }), a("body").on("click", ".login_magic9", function (b) {
        b.preventDefault(), a("#tmodal9").modal().open()
    }), a(".magic_box_video .close_mb").on("click", function (b) {
        b.preventDefault(), a.modal().close()
    }), a(".modal .more-toggle").on("click", function (b) {
        b.stopPropagation(), a(".modal .more").toggle()
    })
});