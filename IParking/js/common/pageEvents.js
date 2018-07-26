/**
 * Created by luoyiming on 2016/9/5.
 */
define(['js/common/partAjax','js/common/route'], function (partAjax,route,PartJSUrl) {
    var $viewFrame = $('.viewFramework-body');
    var pageEventsClass = {
        //头部，左边点击效果

        sideBarAnimate:function(){
            $viewFrame.toggleClass('viewFramework-sidebar-full').toggleClass('viewFramework-sidebar-mini');
        },

        //左边菜单收缩 菜单点击
        sideBarControl: function () {
            var $sideBtn = $('.js-sidebar-fold');
            var that=this,
                $sideBtn_span;
            $(".viewFramework-sidebar").on("click", ".js-sidebar-fold", function (e) {
                $sideBtn_span = $(this).find('span');
                $sideBtn_span.toggleClass('icon-three-open').toggleClass('icon-three-close');

                if($sideBtn_span.hasClass('icon-three-open')){
                    $(this).attr('title','收起');
                }
                else{
                    $(this).attr('title','展开');
                }

                that.sideBarAnimate();
            });

            //点击一级菜单查找二级菜单
            $(".viewFramework-sidebar").on("click", "a.sidebar-trans", function (e) {
                $(".viewFramework-product-navbar-collapse").show();
                $(".viewFramework-product").addClass("viewFramework-product-col-1");
                $(".viewFramework-product .product-navbar-collapse .glyphicon").removeClass("glyphicon-arrow-right").addClass("glyphicon-arrow-left");
                e.preventDefault();
                $(this).parent("li").addClass("active").siblings().removeClass("active");

                var navbarId,
                    $navbarScene,
                    $first_a,
                    url = '',
                    is_sub;

                navbarId = '#'+$(this).data('title');

                $navbarScene = $(navbarId);

                if($navbarScene.length > 0){

                    $navbarScene.find('li').removeClass('active');

                    $navbarScene.removeClass("hide").siblings().addClass("hide");

                    //找到第一个子菜单
                    $first_a = $navbarScene.find('li a').eq(0);
                    if($first_a.length !== 0){

                        //判断三级菜单，以title-control类名下判断有为这两个类名，glyphicon-triangle-bottom 、glyphicon-triangle-right（这个两个类名是三级菜单展开收起的图标）
                        is_sub = $first_a.find('.glyphicon-triangle-bottom').length || $first_a.find('.glyphicon-triangle-right').length;

                        //判断它是否有三级菜单,是的话加载三级菜单的第一个
                        //不是菜单时就直接加高亮
                        if(is_sub > 0){
                            var $menu_sub = $first_a.siblings('ul'),
                                $first_a_menu;

                            $menu_sub.show();

                            $first_a.find('.glyphicon').removeClass('glyphicon-triangle-right').addClass('glyphicon-triangle-bottom'); 

                            $first_a_menu = url = $menu_sub.find('li a').eq(0);

                            if($first_a_menu.length !== 0){
                                $first_a_menu.parent('li').addClass('active');
                                url = $first_a_menu.attr('href');
                            }
                            else{
                                return false;
                            }
                            
                        }
                        else{
                            $first_a.parent('li').addClass('active');
                            url = $first_a.attr('href');
                        }

                        if(url === '' || url == undefined || url == null){
                            return false;
                        }

                        window.location.href = url;

                    }

                }

            });

            //判断当窗口小于1000收缩左边菜单

            $(window).resize(function(){
                if($(window).width()<1300)
                {
                    smallbox();
                }
                else{
                    bigbox();
                }
            }).ready(function(){
                if($(window).width()<1300)
                {
                    smallbox();
                }
                else{
                    bigbox();
                }
            });


            function smallbox(){
                $viewFrame.removeClass("viewFramework-sidebar-full").addClass("viewFramework-sidebar-mini");
                //$viewFrame.find('.viewFramework-product').removeClass('viewFramework-product-col-1');
                $viewFrame.find('.js-sidebar-fold span').removeClass('icon-three-open').addClass('icon-three-close');
            }
            function bigbox(){
                $viewFrame.removeClass("viewFramework-sidebar-mini").addClass("viewFramework-sidebar-full");
                //$viewFrame.find('.viewFramework-product').addClass('viewFramework-product-col-1');
                $viewFrame.find('.js-sidebar-fold span').removeClass('icon-three-open').addClass('icon-three-close');
            }

        },

        //左边菜单收缩状态鼠标滑过显示文字
        sideBarToolTips: function () {
            var $tooltip;
            var $mainNav = $('.main-nav');
            var tooltipsHtml = "<div class='aliyun-console-sidebar-tooltip right fade in' style='left: 50px; display: block;'>" +
                "<div class='tooltip-arrow'></div><div class='tooltip-inner'></div></div>";
            var $navLi = $mainNav.find('li');

            //当做菜只显示图标的时候，鼠标滑上去显示文字
            $(".viewFramework-sidebar").on('mouseenter', '.main-nav .nav-item', function () {
                var top = $(this).offset().top;
                var text = $(this).find('.nav-title').text();
                if ($viewFrame.hasClass('viewFramework-sidebar-mini')) {
                    $('body').append(tooltipsHtml);
                    $tooltip = $('.aliyun-console-sidebar-tooltip');
                    $tooltip.css('top', top);
                    $tooltip.find('.tooltip-inner').text(text);
                }
            });
            //当做菜只显示图标的时候，鼠标离开去除文字
            $(".viewFramework-sidebar").on('mouseleave', '.main-nav .nav-item', function () {
                if ($viewFrame.hasClass('viewFramework-sidebar-mini')) {
                    if ($tooltip.length > 0) {
                        $tooltip.remove();
                    }
                }
            });
        },

        //点击第二级菜单 并判断是否显示第三汲菜单
        titleShowControl: function () {
            //var $productNavList = $('.product-nav-list');
            $(".viewFramework-product-navbar").on('click', 'a', function () {

                if ($(this).next().length > 0) {
                    var $spanIcon = $(this).find('span');
                    $spanIcon.toggleClass('glyphicon-triangle-bottom').toggleClass("glyphicon-triangle-right");
                    $(this).parent().find('ul').toggle();
                    return;
                }
                else {
                    $(this).parents(".product-nav-list").find("li").removeClass("active");
                    $(this).parent("li").addClass("active");
                }

                //二级或三级菜单每次点击自己都能重新加载
                var hash = location.hash,
                    that = $(this),
                    a_hash = that.attr('href');
                    
                if(hash === a_hash){
                    pageEventsClass.reloadPage(a_hash,route.routeObj.oldparameter);
                }    
            });
        },
        //重新加载页面
        reloadPage : function(url,parameter){
            var urlHash = url.replace("#", "").split("?"),
                url,
                param;

            if (urlHash == "" || urlHash == "#") {
                url = "include/right.html";
            }
            else{
                url = urlHash[0];
            }

            param = parameter || route.routeObj.getParameter(urlHash[1]);

            if(param){
                partAjax.partAjaxFn($(".viewFramework-product-body"), url, route.routeObj.oldparameter,route.routeObj.tabBox);
            
            }else{
                partAjax.partAjaxFn($(".viewFramework-product-body"), url,null,route.routeObj.tabBox);
            }

            //右边渐显效果
            $(".viewFramework-product-body").addClass("animated fadeInRight");
            setTimeout(function(){$(".viewFramework-product-body").removeClass("animated fadeInRight");},1000);
        },

        //子菜单收缩
        productNavControl: function () {
            var $product = $('.viewFramework-product');
            var $navConBtn = $('.viewFramework-product-navbar-collapse');
            $navConBtn.click(function () {
                $product.toggleClass('viewFramework-product-col-1');
                $(this).find('span').toggleClass('glyphicon-arrow-left').toggleClass('glyphicon-arrow-right');
            });
        },

        //头部快速入口展开+用户操作
        topAllNavShowControl: function () {
            var that = this;
            //常用菜单
            $(".viewFramework-topbar").on('click', '.topbar-nav-btn', function (eve) {
                $(this).parents(".topbar-nav").addClass("open");
                that.stopBubble(eve);
                $(document).click(function () {
                    $(".viewFramework-topbar .topbar-nav").removeClass("open");
                    $(document).unbind("click");
                });
            });

           //点击关闭
            $("#TopAllNavBox").on('click', 'a', function () {
                $(".viewFramework-topbar .topbar-nav").html().removeClass("open");
            });

        },

        stopBubble: function (e) {
            if (e && e.stopPropagation) {
                e.stopPropagation();  //w3c
            } else {
                window.event.cancelBubble = true; //IE
            }
        },


        //tab菜单效果
        tabNavControl: function () {
            $(".viewFramework-product-body").on("click", '.nav-tabs a', function (e) {
                e.preventDefault();
                $(this).tab('show');
            });

            $(".viewFramework-product-body").on("click", '.nav-pills a', function (e) {
                e.preventDefault();
                $(this).tab('show');
            });


        },
        otherEvent : function(){

        },

        //全局点击链接事件
        AjaxLink: function () {
            $(".viewFramework-product-body").on('click', '.ajax-link', function () {

                var url = $(this).attr("href");
                
                //判断是否是详情页面
                if(route.routeObj.linkMap.indexOf(url) !== -1){
                    window.location.href = url;
                }
                else{
                    var nav_ind = $('.viewFramework-product-body').data('nav_index');
                    //判断是否有跟参数
                    var hasParm = url.split('?').length;
                    if(hasParm === 2){
                        window.location.href = url+'&nav_index='+nav_ind;
                    }
                    else{
                        window.location.href =  url+'?nav_index='+nav_ind;
                    }
                    
                }

                return false;

            });
        }

    };

    var inludehtml={
        //加载头部
        topEvent:function() {
            partAjax.partAjaxFn($(".viewFramework-topbar"), "include/topbar.html",null,topboxeEvnet);


            function topboxeEvnet(){
                //展开用户名

                var $top_user = $('.topbar-right .topbar-info-item'),
                    $showBox = $top_user.find('.dropdown-menu');

                $top_user.hover(function(){
                    $(this).addClass('open');
                    $showBox.show();
                },
                function(){
                    $(this).removeClass('open');
                    $showBox.hide();
                });
            }


        },

        //加载左边主菜单
        leftEvent:function(){
            partAjax.partAjaxFn($(".viewFramework-sidebar"), "include/sidebar.html");
        },

        //加载左边子菜单
        leftnavbarEvent:function(){
            partAjax.partAjaxFn($(".viewFramework-product-navbar"), "include/navbar.html",null,route.routeObj.init);
            
        },

        //右边
        rightcontentEvent:function(){
            partAjax.partAjaxFn($(".viewFramework-product-body"), "include/right.html");
        }
    }

    return {
        reloadPage : pageEventsClass.reloadPage,
        consoleCommonAction: function () {
            inludehtml.topEvent();
            inludehtml.leftEvent();
            inludehtml.leftnavbarEvent();
            //inludehtml.rightcontentEvent();
            pageEventsClass.sideBarControl();
            pageEventsClass.sideBarToolTips();
            pageEventsClass.titleShowControl();
            pageEventsClass.productNavControl();
            pageEventsClass.topAllNavShowControl();
            pageEventsClass.tabNavControl();
            //pageEventsClass.otherEvent();
            //pageEventsClass.AjaxLink();
        }
    }

});