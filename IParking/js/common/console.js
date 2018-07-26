/*页面交互js*/
define(['js/common/pageEvents','js/common/route'],function(pageEvents,route){


         var into={

             runFn:function(){


                //$.ajaxSetup({ cache: false });   

                 //头部 左边菜单加载  +动画效果
                 pageEvents.consoleCommonAction();
                 

                //表格浮层
                /*(function(){
                    //使鼠标放在表格上，浮层的表格也会有背景颜色
                    var source_tr = $('.table-source tbody tr'),
                        clone_tr = $('.table-clone tbody tr'),
                        show_tr,
                        ind = 0;

                    //contorl 类型（boject）
                    //action 类型（jq regx string）
                    function hoverEffect(contorl,action){
                       	contorl.hover(
                            function(){
                                var that = $(this),
                                    father = that.parents('.tableBox').eq(0);

                                show_tr = father.find(''+action+' tbody tr');
                                ind = that.index();
                                show_tr.eq(ind).addClass('active');
                            },
                            function(){
                                show_tr.eq(ind).removeClass('active');
                            }
                        ); 


                       	contorl.on('mouseover',function(){

                       	});
                    }

                    hoverEffect(source_tr,'.table-clone');
                    hoverEffect(clone_tr,'.table-source');

                    function tableLayer(){
                        //表格有滚动条就显示操作浮层
                        var tab_box = $('.tableBox'),
                            len =  tab_box.length,
                            i = len;

                        for(i;i--;){
                            var that = tab_box.eq(i),
                                box_wid = that.innerWidth(),
                                clone_tab = that.find('.table-clone'),
                                table_wid = that.find('.table-source').innerWidth();

                            if(table_wid > box_wid){
                                clone_tab.show();
                            }
                            else{
                                clone_tab.hide();
                            }
                        }   
                    }
                     
                    tableLayer();

                    $(window).resize(function(){
                        tableLayer();
                    });
                })();*/

             }



        }
    into.runFn();
    //route.routeObj.callFn(location.hash);
});


