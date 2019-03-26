(function () {
    function Progress($progressBar,$progressLine,$progressDot) {
        return new Progress.prototype.init($progressBar,$progressLine,$progressDot);
    }
    Progress.prototype= {
        constructor:Progress,
        init:function ($progressBar,$progressLine,$progressDot) {
            this.$progressBar = $progressBar;
            this.$progressLine = $progressLine;
            this.$progressDot =$progressDot;
        },
        prgressClick:function (callBack) {
            var $this = this;//谁调用此函数this就指向谁
            //监听背景点击
            this.$progressBar.click(function () {
               //获取背景距离窗口默认的位置
                var nomalLeft = $(this).offset().left;
                //获取点击的位置距离窗口的位置
                var eventLeft = event.pageX;
                //设置前景的宽度
                $this.$progressLine.css("width",eventLeft-nomalLeft);
                $this.$progressDot.css("left",eventLeft-nomalLeft);
                //计算进度条的比例
                var value =(eventLeft - nomalLeft) / $(this).width();
                callBack(value);
            });
        },
        progressMove:function (callBack) {
            var $this=this;
            //1.监听鼠标按下事件
            this.$progressBar.mousedown(function () {
                //获取背景距离窗口默认的位置
                //获取点击的位置距离窗口的位置
                var nomalLeft = $(this).offset().left;
                var eventLeft;
                //2.监听鼠标移动事件
                $(document).mousemove(function () {
                    eventLeft = event.pageX;
                    $this.$progressLine.css("width",eventLeft-nomalLeft);
                    $this.$progressDot.css("left",eventLeft-nomalLeft);
                    //计算进度条的比例
                    var value =(eventLeft - nomalLeft) / $(this).width();
                    callBack(value);
                })
            });
            //3.监听鼠标的抬起事件
            $(document).mouseup(function () {
                $(document).off("mousemove")
            })
        },
        setProgress:function (value) {
            if(value<0 || value >100) return;
                this.$progressLine.css({width:value+"%"});

            this.$progressDot.css({left:value+"%"});
        }
    };
    Progress.prototype.init.prototype=Progress.prototype;
    window.Progress=Progress;
})(window);
