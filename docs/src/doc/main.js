KISSY.add(function(S,MVC,Router){
	var $=S.all;
	
	new Router();
	
	//start
    MVC.Router.start({
        success:function() {
			S.log('start..');
        }
    });


	$("#mainnav a").on("click", function(ev){
		ev.halt();
		MVC.Router.navigate($(this).attr("href"));
	})
	
	$(document.body).delegate("click","#basestyle a",function(ev){
		var tg = $(ev.currentTarget);
		if(tg.attr("data-mod")){
			MVC.Router.navigate("/basestyle.html/"+tg.attr("data-mod"));
		}
	});
	
	function switchnav(){
		//console.log();
		var hash = location.hash;
		$("#mainnav li").removeClass("current");
		$("#mainnav a").each(function(item){
			if(~hash.indexOf(item.attr("href"))){
				item.parent().addClass("current");
				return false;
			}
		});
	}
	
	$(window).on("hashchange", function(ev){
		switchnav()
	});

	S.ready(function(){
		switchnav()
	});

},{
	requires:["mvc","./router"]
});