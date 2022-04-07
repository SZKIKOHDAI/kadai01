// ＜やりたかったこと＞
// 時間差のアニメーションを入れたい(①じゃ～ん→②け～ん→③ぽい！」となるように)
// 自分の手をクリックした後、「じゃ～んけ～ん」と表示されている間にグーチョキパーの画像がルーレット的な感じで高速で切り替わりながら表示されるようにしたい


$("#rock").on("click", function (){
    // alert(2);
    const random = Math.floor( Math.random() *3);
    console.log(random, "ランダム数字");
    
    if (random === 0) {
        //時間差でじゃ～ん、け～ん、ぽい！となるようにしたかった。
        //  $.when(
        //     $("h1").text("じゃ～ん"),
        // ).done(function(){
        //     $("h1").delay(1000);
        //     $("h1").text("け～ん");
        // }
        // )
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_gu.png');
        $(".result h2").text("あいこ");
        $(".result h2").css("color", "black");
    } else if (random === 1) {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_choki.png');
        $(".result h2").text("勝ち～！！");
        $(".result h2").css("color", "red");
    } else {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_pa.png');
        $(".result h2").text("負け～…");
        $(".result h2").css("color", "blue");
    }
});

$("#scissors").on("click", function (){
    const random = Math.floor( Math.random() *3);
    console.log(random, "ランダム数字");
    
    if (random === 0) {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_gu.png');
        $(".result h2").text("負け～…");
        $(".result h2").css("color", "blue");
    } else if (random === 1) {
        $("h1").text("ぽい！").css("font-size", "4rem");
        $(".field img").attr('src', 'img/janken_choki.png');
        $(".result h2").text("あいこ");
        $(".result h2").css("color", "black");
    } else {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_pa.png');
        $(".result h2").text("勝ち～！！");
        $(".result h2").css("color", "red");
    }
});

$("#paper").on("click", function (){
    // alert(2);
    const random = Math.floor( Math.random() *3);
    console.log(random, "ランダム数字");
    
    if (random === 0) {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_gu.png');
        $(".result h2").text("勝ち～！！");
        $(".result h2").css("color", "red");
    } else if (random === 1) {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_choki.png');
        $(".result h2").text("負け～…");
        $(".result h2").css("color", "blue");
    } else {
        $("h1").text("ぽい！").css("font-size", "4rem").css("margin-top", "15px");
        $(".field img").attr('src', 'img/janken_pa.png');
        $(".result h2").text("あいこ");
        $(".result h2").css("color", "black");
    }
});