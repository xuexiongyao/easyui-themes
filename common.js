/**
 * Created by christ on 2016/3/25.
 */

//改变按钮移入icon
function changeLinkButtonIcon(){
    var oldClass;
    $(".l-btn").hover(
        function () {
            var tmp = $(this).find('.l-btn-icon').attr('class');
            var disNum = $(this).attr('class').indexOf('l-btn-disabled');
            if(tmp && disNum == -1){
                var pos = tmp.indexOf('icon-');
                var str = tmp.substring(pos);
                oldClass = str;
                $(this).find('.l-btn-icon').removeClass(str).addClass(str+"-hover");
            }

        },
        function () {
            var tmp = $(this).find('.l-btn-icon').attr('class');
            var disNum = $(this).attr('class').indexOf('l-btn-disabled');
            if(tmp  && disNum == -1){
                var str = tmp.substring(tmp.indexOf('icon-'));
                $(this).find('.l-btn-icon').removeClass(str).addClass(oldClass);
            }
        }

    )
}
