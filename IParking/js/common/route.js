/**
 * Created by luoyiming on 2016/9/22.
 */
define(['js/common/partAjax'], function (partAjax) {

    var routeObj = {
        oldparameter : '', //前一条URL的参数
        brokenWidth : 1580,
        //参数
        parameter:function(){
            this.para={}
        },

        //事件方法
        routeEvent: function () {

            this.oldhash = ""; //前一条URL
            

            if (("onhashchange" in window) && ((typeof document.documentMode === "undefined") || document.documentMode == 8)) {
                // 浏览器支持onhashchange事件

                window.onhashchange = function () {
                    routeObj.callFn();
                };  // TODO，对应新的hash执行的操作函数
            } else {
                // 不支持则用定时器检测的办法
                setInterval(function () {
                    var ischanged = isHashChanged();  // TODO，检测hash值或其中某一段是否更改的函数
                    if (ischanged) {
                        //hashChangeFire();  // TODO，对应新的hash执行的操作函数
                        routeObj.callFn(location.hash);
                    }
                }, 150);
            }
            //不支持onhashchange下的情况下判断hash有没有改变
            function isHashChanged() {
                var newurl = location.hash;
                if (newurl != this.oldhash) {
                    this.oldhash = newurl;
                    return true;
                } else {
                    return false;
                }
            }
        },
        callFn: function () {

            var urlHash = location.hash.replace("#", "").split("?"),
                url,
                parameter;

            if (urlHash == "" || urlHash == "#") {
                url = "include/right.html";
                /*$(".viewFramework-product").removeClass("viewFramework-product-col-1");
                $(".viewFramework-product .product-navbar-collapse .glyphicon").removeClass("glyphicon-arrow-left").addClass("glyphicon-arrow-right");
                $(".viewFramework-product-navbar-collapse").hide();*/
            }
            else{
                url = urlHash[0];
                /*$(".viewFramework-product").addClass("viewFramework-product-col-1");
                $(".viewFramework-product-navbar-collapse").show();*/
            }

            routeObj.oldparameter = parameter=routeObj.getParameter(urlHash[1]);

            if(parameter){
                partAjax.partAjaxFn($(".viewFramework-product-body"), url, parameter,routeObj.laodComplete);
            
            }else{
                partAjax.partAjaxFn($(".viewFramework-product-body"), url,null,routeObj.laodComplete);
            }

        },
        tabBox : function(cb){
            var selectBox = $('.public-tabBox .clearfix.three-cols,.public-selectArea .clearfix'),
                selectBox_len = selectBox.length,
                wp_len = [], 
                ture_len = [],
                blankbox = {},
                winObj = $(window),
                window_wid,
                token = '',
                cb = (typeof cb === 'function') ? cb : function(){};

            if(selectBox_len === 0){
                return;
            }

            for(var i2 = 0;i2 < selectBox_len;i2++){
                ture_len[i2] = selectBox.eq(i2).find('.wp_box').length-2;
                blankbox[i2] = selectBox.eq(i2).find('.blankbox');
            }

            function Drection(cb){
                window_wid = winObj.innerWidth();

                if(window_wid>=routeObj.brokenWidth){

                    if(token !== 'three-col'){

                        token = 'three-col';

                        for (var i = 0; i < selectBox_len;i++ ) {
                            //空白列
                            if(ture_len[i]%3 === 0){
                              $(blankbox[i]).hide();
                            }
                            else if(ture_len[i]%3 === 1){
                                $(blankbox[i]).show();
                            }
                            else{
                                $(blankbox[i]).eq(0).hide();
                                $(blankbox[i]).eq(1).show();
                            }
                        }

                        //console.log('3col');

                        cb();

                    }

                }
                else{

                    if(token !== 'tow-col'){

                        token = 'tow-col';

                        for (var i = 0; i < selectBox_len;i++ ) {
                            if(ture_len[i]%2 === 1){
                                $(blankbox[i]).eq(0).hide();
                                $(blankbox[i]).eq(1).show();
                            }
                            else{
                                $(blankbox[i]).hide();
                            }
                        }
                        //console.log('2col');

                        cb();
                    }
                }

            }    

            Drection(cb);

            winObj.resize(function(){
                Drection(cb);
            });
        },
        tabBoxTowCol : function(cb){
            var selectBox = $('.public-tabBox .clearfix.tow-cols'),
                selectBox_len = selectBox.length,
                wp_len = [], 
                ture_len = [],
                blankbox = {},
                cb = (typeof cb === 'function') ? cb : function(){};

            if(selectBox_len === 0){
                return;
            }

            for(var i2 = 0;i2 < selectBox_len;i2++){
                ture_len[i2] = selectBox.eq(i2).find('.wp_box').length-2;
                blankbox[i2] = selectBox.eq(i2).find('.blankbox');
            }

            function Drection(cb){

                for (var i = 0; i < selectBox_len;i++ ) {
                    if(ture_len[i]%2 === 1){
                        $(blankbox[i]).eq(0).hide();
                        $(blankbox[i]).eq(1).show();
                    }
                    else{
                        $(blankbox[i]).hide();
                    }
                }

                cb();
            }    

            Drection(cb);
        },
        laodComplete : function () {
            var hash = location.hash,
                $nav_index = $('#nav-index'),
                nav_ind,
                $nav_mode,
                js_mode,
                $a_active,
                js_file;

            if($nav_index.length !== 0){
                nav_ind = $nav_index.val();
            }
            else{
                if(navigator.userAgent.indexOf("Firefox")>0){
                    nav_ind = decodeURIComponent(hash);
                }
                else{
                    nav_ind = hash;
                }
                
            }

            if(!nav_ind || nav_ind ==='#' || !hash){
                $('.viewFramework-sidebar .nav-item').removeClass("active");
                $(".viewFramework-product").removeClass("viewFramework-product-col-1");
                $(".viewFramework-product .product-navbar-collapse .glyphicon").removeClass("glyphicon-arrow-left").addClass("glyphicon-arrow-right");
                $(".viewFramework-product-navbar-collapse").hide();
            }
            else{

                //获取二级或三级菜单相应位置,给父级Li加.active,其他li去掉.active,找到该模块后显示，其他模块隐藏，
                $a_active = $('.product-nav-stage a[href="'+nav_ind+'"]');

                $nav_mode = $a_active.parents('.product-nav-main-scene');

                if($nav_mode.length>0){

                    js_mode = $nav_mode[0].id;

                    //左边菜单选中背景
                    $('.viewFramework-sidebar .sidebar-trans[data-title='+js_mode+']').parent().addClass("active").siblings(".nav-item").removeClass("active");

                    //显示二级菜单对应的模块
                    $nav_mode.removeClass("hide").siblings(".product-nav-scene").addClass("hide");

                    var a_list=$nav_mode.find("a");
                    a_list.parent().removeClass("active");
                    $a_active.parent().addClass('active');
                    $a_active.parents("ul").show();
                    $a_active.parents("ul").prev(".title-control").find("span").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");

                    $(".viewFramework-product-navbar-collapse").show(); 

                    //列数变化时触发的方法
                    function brokenWithFn(){
                        routeObj.mapSetMarginT();
                    }

                    //处理类似表格的布局(三列)
                    routeObj.tabBox(brokenWithFn);

                    //处理类似表格的布局(两列)
                    routeObj.tabBoxTowCol(brokenWithFn);

                    //右边渐显效果
                    $(".viewFramework-product-body").addClass("animated fadeInRight");
                    setTimeout(function(){$(".viewFramework-product-body").removeClass("animated fadeInRight");},1000);
                }

            }

            //IE9表格兼容
            routeObj.ie9tabSc();

        },
        getFileName :　function(str){
            if(str == '' || str == null || str == undefined){
                return false;
            }
            var file,
                len,
                js_file;
            file = str.split('?')[0].split('/');
            len = file.length;
            js_file = file[len-1].split('.')[0];
            return js_file;
        },
        ie9tabSc : function(){
        },
        mapSetMarginT: function(){
        },
        UserMap : function(){
            var $map_wp = $('#container'),
                $til = $('.console-container .console-title'),
                $infoBox = $('.public-infoTab.public-tabBox').eq(0),
                $window = $(window),
                isstatus = 'lg',
                til_hei = $til.outerHeight(true),
                infoBox_hei = 0,
                mTop = 0,
                paddT = 50,
                window_wid = 0; 

            function setTop(){

                infoBox_hei = $infoBox.outerHeight(true);

                mTop = til_hei + infoBox_hei + paddT;

                $map_wp.css({marginTop:mTop+'px'});

            }

            routeObj.mapSetMarginT = setTop;

            setTop();
            $map_wp.fadeIn();

        },
        init : function(){
            routeObj.routeEvent();
            routeObj.callFn();

            function isIE9(){
                var version = navigator.userAgent,
                regx = new RegExp('MSIE 9.0');

                return regx.test(version);
            }

            if(isIE9()){

                routeObj.ie9tabSc = function(){
                    var scTab = $('.scroll-bar-table'),
                        tab = $('.scroll-bar-table .table'),
                        scTab_len = scTab.length,
                        i;

                    if(!scTab_len){
                        return;
                    };

                    function IE9tabScroll(){
                        for(i = scTab_len;i--;){
                            if(scTab.eq(i).innerWidth() < tab.eq(i)[0].scrollWidth){
                                scTab.eq(i).addClass('Scroll');
                            }
                            else{
                                scTab.eq(i).removeClass('Scroll');
                            }

                        } 
                    };

                    IE9tabScroll();

                    $(window).resize(function(){
                        IE9tabScroll();
                    });
                }
            }

            //公告滚动
            jQuery(".Top-scroll-notice .s-notice").slide({titCell:".hd ul",mainCell:".bd ul",easing:'swing',autoPage:true,scroll:1,effect:"top",autoPlay:true,vis:1});

        },
        //获取get方式参数
        getParameter: function (parameter) {
            if(typeof parameter =="undefined")
            {
                return false;
            }
            var patt1 = new RegExp("&");
            var result = patt1.test(parameter);
            var para = {};
            if(result)
            {
                var paraList=parameter.split('&');
                for(var i = 0;i<paraList.length;i++){
                    var str = paraList[i].split('=');
                    para[str[0]]=str[1];
                }
            }
            else
            {
                var str = parameter.split('=');
                para[str[0]]=str[1];
            }
            return para;
        }

    };
    return {
    	routeObj : routeObj
    }
});