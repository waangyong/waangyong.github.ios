$(function () {
    var $audio = $('audio');
    var player = new Player($audio);
    //进度条
    //找到背景前景小圆点
    var $progressBar = $('.music_progress_bar');
    var $progressLine = $('.music_progress_line');
    var $progressDot = $('.music_progress_dot');
    //new一个对象
    var progress = new Progress($progressBar,$progressLine,$progressDot);
    progress.prgressClick(function (value) {
        player.musicSeekTo(value);
    });
    progress.progressMove(function (value) {
        player.musicSeekTo(value);
    });
    //监听list_title
    $('body').delegate('.list_music','mouseenter',function () {
        $(this).find('.list_menu').stop().fadeIn(100);
        $(this).find('.list_time a').stop().fadeIn(100);
        $(this).find('.list_time span').stop().fadeOut(100);
    });
    $('body').delegate('.list_music','mouseleave',function () {
        $(this).find('.list_menu').stop().fadeOut(100);
            $(this).find('.list_time a').stop().fadeOut(100);
            $(this).find('.list_time span').stop().fadeIn(100);
    });
    //监听复选框
    $('body').delegate('.list_check','click',function () {
        $(this).toggleClass('list_checked');
    });
    //创建歌曲列表
    function createItem(index,music) {
        var indexed = index+1
        var $item = $("<li class=\"list_music\">\n" +
            "                        <div class=\"list_check\"><i></i></div>\n" +
            "                        <div class=\"list_number\">"+indexed+"</div>\n" +
            "                        <div class=\"list_name\">"+music.name +"" +
            "                            <div class=\"list_menu\">\n" +
            "                                <a class='list_menu_play' href=\"javascript:;\"title=\"播放\"></a>\n" +
            "                                <a href=\"javascript:;\"title=\"添加\"></a>\n" +
            "                                <a href=\"javascript:;\"title=\"分享\"></a>\n" +
            "                                <a href=\"javascript:;\"title=\"分享\"></a>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"list_singer\">"+music.singer+"</div>\n" +
            "                        <div class=\"list_time\">\n" +
            "                            <span>"+music.time+"</span>\n" +
            "                            <a class='list_menu_del' href=\"javascript:;\"title=\"删除\"></a>\n" +
            "                        </div>\n" +
            "                    </li>");
        //返回值用于歌曲判断
           $item.get(0).index = index;
           $item.get(0).music = music;
        return $item;
    }
    //3.加载歌曲列表
    function getPlayerList() {
        $.ajax({
            type:"get",
            url:"./source/music.json",//文件加载地址
            dataType:"json",
             contentType:"application/x-www-form-urlencoded;charset=utf-8",
            // scriptCharset: 'utf-8',
            success:function (data) {
                player.musicList=data;
               $.each(data,function (index,ele) {
                   //index是索引
                   //ele是音乐对象
                   var item = createItem(index,ele);
                   //找到ul节点
                   var $music = $('.containt_list ul');
                   //把动态创建的音乐放入ul节点中
                   $music.append(item);
               });
                initMusicInfo(data[0]);
            },
            error:function (e) {
                console.log(e)
            }
        });
    }
    getPlayerList();
    //初始化歌曲信息
    function initMusicInfo(music) {
        //获取对应的元素
        var $musicImage = $('.song_info_pic');
        var $musicName = $('.song_info_name a');
        var $musicAlbum = $('.song_info_album a');
        var $musicSinger = $('.song_info_singer a');
        var $musicProgressName = $('.music_progress_name');
        var $musicProgressTime = $('.music_progress_time');
        var $maskBg = $('.mask_bg');
        //给获取的元素赋值
        $musicImage.css("background","url('"+music.cover+"')");
        $musicName.text(music.name);
        $musicAlbum.text(music.album);
        $musicSinger.text(music.singer);
        $musicProgressName.text(music.name + "/" + music.singer);
        $musicProgressTime.text("00:00" +"/"+music.time);
        $maskBg.css("background","url('"+music.cover+"')");
    }
    var $musicPlay = $('.music_play');
    //3.子菜单监听
$('.containt_list').delegate('.list_menu_play','click',function () {
    var $item = $(this).parents('.list_music');
    $(this).toggleClass("list_menu_play2");
    $(this).parents(".list_music").siblings().find(".list_menu_play").removeClass("list_menu_play2");
    if($(this).attr("class").indexOf("list_menu_play2")!=-1){
        $musicPlay.addClass('music_play2');
    }else{
        $musicPlay.removeClass('music_play2');
    }
    $(this).parents(".list_music").find(".list_number").toggleClass("list_number2");
     $(this).parents(".list_music").siblings().find(".list_number").removeClass("list_number2");
        //调用播放方法
    player.playMusic( $item.get(0).index, $item.get(0).music);
    //3.6切换歌曲信息
    initMusicInfo($item.get(0).music);
});
    //4监听底部播放按钮点击
    $('.music_play').click(function () {
        //判断有没有播放过音乐
        if(player.currentIndex==-1){
            //没有播放过音乐
            $('.list_music').eq(0).find('.list_menu_play').trigger('click')
        }else {
            $('.list_music').eq(player.currentIndex).find('.list_menu_play').trigger('click')
        }
    });
    //5.监听上一首
    $('.music_pre').click(function () {
        $('.list_music').eq(player.preindex()).find('.list_menu_play').trigger('click')
    });
    //6。监听下一首
    $('.music_next').click(function () {
        $('.list_music').eq(player.nextindex()).find('.list_menu_play').trigger('click')
    });
    //7.监听删除按钮
    $('.containt_list').delegate('.list_menu_del','click',function (){
        //找到被点击的音乐
        //var $item = $(this).parents('.list_music');
        //$item.remove();
        //判断删除的是否当前的
        // if ($item.get(0).index==player.currentIndex){
        //     $('.music_next').trigger('click');
        // }
        //删除后台音乐
        // player.changeMusic($item.get(0).index);
        //删除之后重新排序
        // $('.list_music').each(function (index,ele){
        //     ele.index  = index;
        //     $(ele).find('.listnumber').text(index+1);
        // })
    })
    // //8.监听播放得到进度
    player.musicTimeupdate(function (duration,currentTime,timeStr) {
        $('.music_progress_time').text(timeStr);
        //同步进度条
        //同步播放比例
        var value = currentTime / duration * 100;
        progress.setProgress(value);
    });
    //9.监听声音按钮点击
    $('.music_voice_icon').click(function () {
        $(this).toggleClass('music_voice_icon2');
        //声音切换
        if ($(this).attr("class").indexOf('music_voice_icon2')!=-1){
        //变为没有声音
            player.musicVoiceSeekTo(0);
        }else{
            //变为有声音
            player.musicVoiceSeekTo(1);

        }
    })
})