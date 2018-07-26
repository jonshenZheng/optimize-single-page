/**
 * Created by luoyiming on 2016/8/31.
 */
define([''],function(){

    return {
        //局部加载
        partAjaxFn:function(box,url,model,cb) {
            var leng=arguments.length;
            if(typeof(box)=="object"&typeof(url)=="string")
            {

                //需要根据数据（model）来输出HTML内容用returnAjaxFn

                switch (leng)
                {
                    case 2:
                        //box.load(url);
                        this.loadPage.call(box,url);
                        break;
                    case 3:
                        var strhtml=this.returnAjaxFn(url,model);
                        if(strhtml!="error")
                        {
                            box.html(strhtml);
                        }
                        else
                        {
                            alert("异常，或者缺少页面！")
                        }
                        break;
                    case 4:
                        if(model == null){
                            /*box.load(url,null,function(){
                                if(cb && typeof cb === 'function'){
                                    cb();
                                }
                            });*/

                            this.loadPage.call(box,url,null,function(){
                                cb();
                            });


                        }
                        else{
                            var strhtml=this.returnAjaxFn(url,model);
                            if(strhtml!="error")
                            {
                                box.html(strhtml);
                                cb();
                            }
                            else
                            {
                                alert("异常，或者缺少页面！")
                            }
                        }
                        break;
                }
            }
        },

        loadPage : function(url,params,callback){
            if(!url || typeof url !== 'string'){
                return false;
            }

            var selector, response, type,rdm,
                self = this,
                off = url.indexOf(" ");

                if ( off >= 0 ) {
                    selector = jQuery.trim( url.slice( off, url.length ) );
                    url = url.slice( 0, off );
                }

                // If it's a function
                if ( jQuery.isFunction( params ) ) {

                    // We assume that it's the callback
                    callback = params;
                    params = undefined;

                // Otherwise, build a param string
                } else if ( params && typeof params === "object" ) {
                    type = "POST";
                }

                // If we have elements to modify, make the request
                if ( self.length > 0 ) {

                    //rdm = Math.floor(Math.random()*10000);

                    jQuery.ajax({
                        //url: url+'?rdm='+rdm,
                        url: url,

                        // if "type" variable is undefined, then "GET" method will be used
                        type: type,
                        dataType: "html",
                        //cache: false,
                        data: params,
                        error : function() {
                                    //登录超时跳转登录页
                                    //window.location.href = 'login.html';
                                    return "error";
                                }
                    }).done(function( responseText ) {

                        response = arguments;

                        self.html( selector ?

                            jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

                            responseText );

                    }).complete( callback && function( jqXHR, status ) {
                        self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
                    });
                }

        },

        returnAjaxFn:function(url,model){
            var strbody="";
            $.ajax({
                url:url,
                type:'get',
                cache:true,
                data:model,
                async:false,
                success:function(data) {
                    strbody=data;
                },
                error : function() {
                    //登录超时跳转登录页
                    window.location.href= 'login.html';
                    return "error";
                }
            });
            return strbody;
        }
    }

});
