(function () {
    function Player($audio) {
        return new Player.prototype.init($audio);
    }
    Player.prototype= {
        musicList:[],//保存ajax返回歌曲数据
        constructor:Player,
        init:function ($audio) {
            this.$audio = $('audio');
            this.audio = $audio.get(0)  ;
        },
        currentIndex : -1,
        playMusic:function (index,music) {
            // var $audio = $('audio')
            //     $audio.attr("src",music.link_url)
            // var audio = document.getElementsByTagName('audio')[0]
            //     audio.play()

            if (this.currentIndex == index){
                if (this.audio.paused){
                    this.audio.play()
                }else {
                    this.audio.pause()

                }
            }else {
                this.$audio.attr("src",music.link_url);
                this.audio.play();
                this.currentIndex=index;
            }
        },
        preindex:function () {
            var index=this.currentIndex-1;
            if (index<0){
                index = this.musicList.length-1;
            }
            return index;
            },
        nextindex:function () {
            var index=this.currentIndex+1;
            if (index>=this.musicList.length){
                index = 0;
            }
            return index;
        },
        changeMusic:function(index){
            this.musicList.splice(index,1);
            //判断删除的音乐是否是正在播放前面的音乐
            if(index<this.currentIndex){
                this.currentIndex=this.currentIndex-1;
            }
        },
        //8.监听播放得到进度
        musicTimeupdate:function (callBack) {
            var $this = this;
            this.$audio.on("timeupdate",function () {
                var duration = $this.audio.duration;
                var currentTime = $this.audio.currentTime;
                var timeStr = $this.formatDate(currentTime,duration);
                callBack(duration,currentTime,timeStr);
            })
        },
        formatDate:function(currentTime,duration){
            var endMin = parseInt(duration / 60);
            var endSec = parseInt(duration % 60);
            if(endMin<10){
                endMin="0"+endMin;
            }
            if(endSec<10){
                endSec="0"+endSec;
            }
            var startMin = parseInt(currentTime / 60);
            var startSec = parseInt(currentTime % 60);
            if(startMin<10){
                startMin="0"+startMin;
            }
            if(startSec<10){
                startSec="0"+startSec;
            }
            return startMin+":"+startSec+"/"+endMin+":"+endSec;
        },
        musicSeekTo:function (value) {
            this.audio.currrntTime = this.audio.duration * value;
        },
        musicVoiceSeekTo:function (value) {
            //0-1
            this.audio.volume = value;
        }
    };
    Player.prototype.init.prototype=Player.prototype;
    window.Player=Player;
})(window);
