/**
 * Created by christ on 2016/4/7.
 */


/*textarea输入框高度自增长*/
(function ($) {
    // 最小高度 | 最大高度，超过则出现滚动条
    var minRows = 1,maxRows = 12;

    $('textarea').off('keyup').on('keyup', function () {
        var t = $(this)[0];
        if (t.scrollTop == 0) t.scrollTop = 1;

        while (t.scrollTop == 0) {
            if (t.rows > minRows)
                t.rows--;
            else
                break;
            t.scrollTop = 1;
            if (t.rows < maxRows)
                t.style.overflowY = "hidden";
            if (t.scrollTop > 0) {
                t.rows++;
                break;
            }
        }

        while (t.scrollTop > 0) {
            if (t.rows < maxRows) {
                t.rows ++;

                if (t.scrollTop == 0) t.scrollTop = 1;
            }
            else {
                t.style.overflowY = "auto";
                break;
            }
        }
    })
})(jQuery);

/*input输入框长度自增长*/
(function ($) {
    //获取文本宽度
    var textWidth = function(text){
        var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'});
        $('body').append(sensor);
        var width = sensor.width();
        sensor.remove();
        return width;
    };

    //input宽度自适应
    $("input").off('keyup').on('keyup', function(){
        var fs = parseInt($(this).css('font-size'));
        var w = parseInt(textWidth($(this).val())/6 * (fs/1.8));
        if(w == 0){
            $(this).width(50);
        }else if(w > 0){
            $(this).width(w);
        }
    });

})(jQuery);

