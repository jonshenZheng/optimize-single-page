// 弹窗说明
	//til 标题
	//tpls 弹窗内容
	//size 弹窗尺寸 值为'wide'时为宽尺寸
	//btnNum 按钮数量 默认为2（有确定和取消按钮，里面，确定按钮里面有回调） ，1只有确定按钮（没有回调）
	//btnName 按钮名字 小标为零的为确认按钮，小标为1的为取消按钮 类型为数组 
	//ready 弹窗展示时执行的回调
	//fasleFn 点击弹窗取消按钮的回调  (回调报错是能关闭弹窗，改功能未测试)
	//trueFn 点击弹窗确认按钮的回调 (回调报错是能关闭弹窗，改功能未测试)
	//cb 弹窗关闭执行的回调

/*Popbox({
    til : til,
    tpls : tpl,
    size : '',
    btnNum : 2,
    btnName : [],
    ready : function($tpl){
	
    },
    fasleFn : function(){
        
    },
    trueFn : function(){
        
    },
    cb : function(){
	
    }
});*/


//新增账户
    //til    标题
function addUser(til){

    var $tpl ='<form class="table-formBox"> <table> <tbody> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>手机号码：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <input id="title" class="form-control" type="text" name=""  value=""> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>登录密码：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <input id="title" class="form-control" type="text" name=""  value=""> </div> <div class="units-fl color999">6-16位，含字母和数字</div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>启用状态：</span></label> </td> <td class="clearfix"> <div class="col-xs-6 form-r-wp form-control-static"> <label class="option-lab"><input type="radio" name="optionsRadios" value="option1" ><span>启用</span></label> <label class="option-lab"><input type="radio" name="optionsRadios" value="option1" ><span>不启用</span></label> </div> </td> </tr> </tbody> </table> <div class="form-conmit-btn"><a class="btn btn-primary">确认</a> <a class="btn btn-default btn-fasle">取消</a> </div> </from>';

    Popbox({
        til : til,
        tpls : $tpl,
        size : 'wide',
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}

//拉黑
    //til    标题
function defriend(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-black-tb left-ico"></i><div class="first-line">确认拉黑用户 【手机号】？</div><div class="text-tips color999">注：拉黑后，用户将不能登录APP</div></div> <div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}


//解除拉黑
    //til    标题
function removeDefriend(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-black-tb left-ico"></i><div class="first-line">确认解除用户 【手机号】的拉黑状态？</div></div> <div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}

//注销
    //til    标题
function logout(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-black-tb left-ico"></i><div class="first-line">确认注销巡检员 [姓名 - 工号] ？</div></div> <div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}


//停用
    //til    标题
function count_disable(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-blue-tb left-ico"></i><div class="first-line" style="font-size:14px">确认停用该停车路段？停用后，该路段下所有泊位将不允许用户绑定！</div></div><form action="" class="form-horizontal padding-l-30 padding-r-40"> <div class="form-group margin-top-3"> <label class="col-xs-2 text-right control-label"><span>备注：</span></label> <div class=col-sm-10 row" style="padding-left:0"> <textarea class="form-control" rows="4" placeholder="200字"></textarea> </div> </form></div><div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}

//批量停用
    //til    标题
function batch_count_disable(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-blue-tb left-ico"></i><div style="font-size:14px">确认停用这10个泊位：</div><div style="font-size:14px">[泊位编号1]、[泊位编号2]、[泊位编号3]、[泊位编号19]、[泊位编号20]</div></div><form action="" class="form-horizontal padding-l-30 padding-r-40"> <div class="form-group margin-top-3"> <label class="col-xs-2 text-right control-label"><span>备注：</span></label> <div class=col-sm-10 row" style="padding-left:0"> <textarea class="form-control" rows="4" placeholder="200字"></textarea> </div> </form></div><div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}


//批量启用
    //til    标题
function batch_count_use(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-blue-tb left-ico"></i><div style="font-size:14px">确认启用这10个泊位：</div><div style="font-size:14px">[泊位编号1]、[泊位编号2]、[泊位编号3]、[泊位编号19]、[泊位编号20]</div></div><form action="" class="form-horizontal padding-l-30 padding-r-40"> <div class="form-group margin-top-3"> <label class="col-xs-2 text-right control-label"><span>备注：</span></label> <div class=col-sm-10 row" style="padding-left:0"> <textarea class="form-control" rows="4" placeholder="200字"></textarea> </div> </form></div><div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}

//批量生成网关地址
    //til    标题
function batch_add_gateway(til){

    var $tpl = '<form class="table-formBox margin-b-30"> <table> <tbody> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>网关地址：</span></label> </td> <td class="autoDrag"> <div class="clearfix"> <div class="col-xs-7 form-r-wp"> <textarea class="form-textarea" name="content" class="form-control" > 0x9abfcca  连接成功，覆盖20个地磁设备  0x9abfqcb  连接失败  0x9abfccc  连接成功，覆盖20个地磁设备  0x9abfccd  连接成功，覆盖20个地磁设备 </textarea> </div> <div class="btn-wp"> <a class="btn-a display-ib btn-textarea">测试连接</a> </div> </div> <p class="tips-line">一行为一个网关MAC地址，最多可同时添加XX个。确认后，网关编号 和名称自动生成</p> </td> </tr> </tbody> </table> <div class="form-conmit-btn"> <a class="btn btn-primary">确认</a> <a class="btn btn-default">取消</a> </div> </form>';

    Popbox({
        til : til,
        tpls : $tpl,
        size : 'wide',
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}


//添加到采集器
    //til    标题
function addTo_collector(til){

    var $tpl = '<form class="table-formBox margin-b-30"> <table> <tbody><tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>采集器：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <select class="form-control" name="" id=""> <option value="">测试1</option> </select> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>网关地址：</span></label> </td> <td class="autoDrag"> <div class="clearfix"> <div class="col-xs-7 form-r-wp"> <textarea class="form-textarea" name="content" class="form-control" > 0x9abfcca  连接成功，覆盖20个地磁设备  0x9abfqcb  连接失败  0x9abfccc  连接成功，覆盖20个地磁设备  0x9abfccd  连接成功，覆盖20个地磁设备 </textarea> </div> <div class="btn-wp"> <a class="btn-a display-ib btn-textarea">测试连接</a> </div> </div> <p class="tips-line">一行为一个网关MAC地址，最多可同时添加XX个。确认后，网关编号 和名称自动生成</p> </td> </tr> </tbody> </table> <div class="form-conmit-btn"> <a class="btn btn-primary">确认</a> <a class="btn btn-default">取消</a> </div> </form>';

    Popbox({
        til : til,
        tpls : $tpl,
        size : 'wide',
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}




//重置密码
    //til    标题
function resetPassW(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-black-tb left-ico"></i><div class="first-line">确认重置巡检员 [姓名 - 工号] 的密码？</div></div> <div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}



//重置登录错误数
    //til    标题
function resetLogin(til){

    var $tpl ='<div class="popBox-tips-box hasIco"><div class="sort-tips"><i class="public-tubiao gantanhao-black-tb left-ico"></i><div class="first-line">当前分组巡检员数量不为空，确认删除？</div></div> <div class="form-conmit-btn"><a class="btn btn-primary">确认</a><a class="btn btn-default btn-fasle">取消</a></div> </div>';
    
    Popbox({
        til : til,
        tpls : $tpl,
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}


//添加巡检员
    //til    标题
function addIPQC(til){

    var $tpl = '<form class="table-formBox"> <table> <tbody> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>姓名：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <input id="title" class="form-control" type="text" name=""  value=""> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>手机号：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <input id="title" class="form-control" type="text" name=""  placeholder="请输入手机号" value=""> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>身份证号：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <input id="title" class="form-control" type="text" name=""  placeholder="请输入身份证号" value=""> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>性别：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <span class="form-lable">男/女</span> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>联系地址：</span></label> </td> <td class="clearfix"> <div class="col-xs-5 form-r-wp"> <input id="title" class="form-control" type="text" name=""  placeholder="请输入详细地址" value=""> </div> </td> </tr> <tr> <td> <label class="form-lable"><span class="text-danger">*</span><span>白天：</span></label> </td> <td class="clearfix select-range"> <div class="col-xs-5 form-select-sm form-r-wp"> <select class="form-control" name="" id=""> <option value="">罗湖区</option> </select> <span class="from-to"></span> <select class="form-control" name="" id=""> <option value="">笋岗片区</option> </select> </div> </td> </tr> <tr> <td> <label class="select-all"><input type="checkbox"><span>全选</span></label> <label class="form-lable"><span class="text-danger">*</span><span>多选按钮：</span></label> </td> <td class="clearfix"> <div class="col-xs-10 col-lg-6 form-r-wp form-control-static"> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>宝安南路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>梨园东路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>东门南路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>解放西路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>笋岗西路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>桂圆路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>果园路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>河边北路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>人民公园路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>红桂路</span></label> <label class="option-lab col-xs-3"><input type="checkbox" name="optionsRadios" value="option1" ><span>蛟湖路</span></label> </div> </td> </tr> </tbody> </table> <div class="form-conmit-btn"> <a class="btn btn-primary">确认</a> <a class="btn btn-primary">取消</a> </div> </form>';

    Popbox({
        til : til,
        tpls : $tpl,
        size : 'wide',
        btnNum : 0,
        ready : function(){
            $('.form-conmit-btn .btn').click(function(){
                $('.bootstrap-dialog .close').click();
            });
            
        }
    });

}




    








