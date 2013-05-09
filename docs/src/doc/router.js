
KISSY.add(function (S,Node,MVC) {
    var $ = S.Node.all;


    function MainRouter() {
        var self = this;
        MainRouter.superclass.constructor.apply(self, arguments);
		
		this.load = function(url,panel){
			S.io({
				url:url,
				dataType:'html',
				cache:false,
				success:function (d) {
					$(panel).html(d,true);
					$1k.highlight.init({    //组件初始化
						skin:'crm',//默认皮肤
						edit:true,//开启编辑运行
						JsRequire:''//导入js
					});
	
				},
				error: function(data, textStatus, io){
					$(panel).html(textStatus);
				}
			})
		}
    }


    S.extend(MainRouter, MVC.Router, {
		
		home: function(){
			this.load("home.html",$("#content"))
		},
		
		basestyle: function(path,query){
			// if(path && path.mod){
				// this.load("basestyle/"+path.mod+".html",$(".mainbody"));
			// }else{
				// this.load("basestyle.html",$("#content"));
			// }
			this.load("basestyle.html",$("#content"));
		},
		
		widget: function(){
			this.load("widget.html",$("#content"))
		},
		
		business: function(){
			this.load("business.html",$("#content"))
		},
		
		std: function(){
			this.load("std.html",$("#content"))
		}
		
    }, {
        ATTRS:{
            routes:{
                value:{
					'':'home',
					'/home.html/':'home',
					'/basestyle.html/*mod':'basestyle',
					'/widget.html/':'widget',
					'/business.html/':'business',
					'/std.html/':'std'
                }
            }
        }
    });

    return MainRouter;
}, {
    requires:['node', 'mvc']
});