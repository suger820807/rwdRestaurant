$(document).ready(function () {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 22.605365344766657, lng: 120.30125211141132 },
        zoom: 17
    });
    var marker = new google.maps.Marker({
        map: map,
        position: { lat: 22.60573676619307, lng: 120.30098389051415 },
        title: "六角西餐廳"
    });

    // 偵聽a click
    $(".menu a").bind("click", function () {

        var id = $(this).attr("data-id");

        // 取得目標區塊的y座標
        var target_top = $("#area" + id).offset().top;

        // 取得body物件 這種寫法在各瀏覽器上最保險
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        // 移動捲軸無動畫效果
        //$body.scrollTop(target_top);

        // 移動捲軸有動畫效果
        $body.animate({
            scrollTop: target_top
        }, 800);

    })

    $(".menu_icon").on("click", function (e) {
        $(".menu").slideToggle();
    });
});