/**
 * Created by luoyiming on 2016/8/31.
 */
require.config({
    baseUrl:'',
    paths:{
        'jquery':'js/libs/jquery-1.9.1.min',
        'bootstrap':'js/libs/bootstrap.min',
        'BootstrapDialog':'js/libs/dialog/bootstrap-dialog',
        'console':'js/common/console',
        'My97DatePicker':'js/libs/My97DatePicker/WdatePicker',
        'fileImageShow':'js/common/fileImageShow',
        'kindeditor_all':'js/libs/kindeditor-master/kindeditor-all',
        'kindeditor_ZH_CN':'js/libs/kindeditor-master/lang/zh-CN',
        'prettify':'js/libs/kindeditor-master/plugins/code/prettify',
        'popJs':'js/common/popJs',
        'myProsess':'js/common/myProsess',
        'SuperSlide':'js/libs/SuperSlide/jquery.SuperSlide.2.1.1',
        'BMap':'http://map.qq.com/api/js?v=2.exp',
        'Qamin':'http://open.map.qq.com/apifiles/2/4/21/main.js'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        bootstrap: {
            deps : [ 'jquery' ]
        },
        BootstrapDialog:{
            deps: ['jquery'],
            deps: ['bootstrap'],
            exports : 'BootstrapDialog'
        },
        console: {
            deps: ['jquery']
        },
        kindeditor_all:{
            exports: 'kindeditor_all'
        },
        kindeditor_ZH_CN:{
            deps: ['kindeditor_all']
        },
        prettify:{
            deps: ['kindeditor_all'],
            deps: ['kindeditor_ZH_CN']
        },
        popJs : {
            deps: ['jquery'],
            deps: ['BootstrapDialog'],
            exports : 'popJs'
        },
        myProsess : {
            deps: ['jquery'],
            exports : 'myProsess'
        },
        SuperSlide : {
            deps: ['jquery'],
            exports : 'SuperSlide'
        },
        Qamin:{
            deps: ['BMap']
        }


    },
    waitSeconds: 0


});
require(['jquery','bootstrap','BootstrapDialog','console','My97DatePicker','fileImageShow','kindeditor_all','kindeditor_ZH_CN','BMap','myProsess','SuperSlide','popJs'],
    function(jquery,bootstrap,BootstrapDialog,console,My97DatePicker,fileImageShow,kindeditor_all,kindeditor_ZH_CN,BMap,myProsess,SuperSlide,popJs){

});