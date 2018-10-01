$('.btn').click(function() {
    $('td').removeClass('active none');
    var text = $(':input').val();
    if(text == ""){
        return;
    }
    var t = -1,m = 1;
    if(text == "无课"){
        $('td:empty').addClass('none');
        return;
    }
    text = text.toLowerCase();
    for (var i = 0;i < $("td").length;i++) {
        if(i % 6 == 0){
            continue;
        }
        var text2 = $("td").eq(i).text().toLowerCase();
        t = text2.indexOf(text);
        if(t != -1){
            $('td').eq(i).addClass('active');
            m = -1;
        }
    }

    if(m == 1){
        $('.pop').text('未查找到该课程！').addClass('popactive');
    }
});
$('.pop').click(function(){
    $(this).removeClass('popactive');
})
$('td').click(function(){
    $(this).children('.des').css('display','block');
})
$('td').on('mouseleave',function(){
    $('.des').css('display','none');
})