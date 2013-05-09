KISSY.add(function(S,sizzle){
	var $=S.all;
	
	return function(){
		var panel = $("#basestyle");
	
		$("#basestyle .demosection .demo h5").each(function(item){
			var tg = $(this);
			tg.append('<a class="sourcecode">查看源码</a>');
		});
		
		panel.delegate("click", ".sourcecode", function(ev){
			var tg = $(ev.currentTarget),
				demo = tg.parent().parent(),
				code = demo.one(".hlwrap");
			console.log(code);
			if(code){
				code.css("display")=="none"?code.show():code.hide();
			}
		});
		
		
		
		var mainbody = panel.one(".mainbody"),
			nav = panel.all(".subnav li"),
			demosection = mainbody.all(".demosection"),
			len = demosection.length;
		
		mainbody.on("scroll", function(){
			var scrollTop = mainbody[0].scrollTop,
				r=0,lt0 = [], gt0 = [],
				currentEl;
			demosection.each(function(item,index){
				r = item[0].offsetTop-scrollTop;
				r>0?gt0.push([r,item]):lt0.push([r,item]);
			});

			if(lt0.length<1){
				currentEl = $(demosection[0]);
			}else if(gt0.length<1){
				currentEl = $(demosection[len-1]);
			}else{
				var x=lt0[lt0.length-1][0],y=gt0[0][0];
				if(y<50){
					currentEl = gt0[0][1];
				}else{
					currentEl = lt0[lt0.length-1][1];
				}
			}
			
			//console.log(currentEl);
			
			var href= currentEl.one("h3 a").attr("data-href");
			nav.removeClass("current");
			nav.one('a[data-href="'+href+'"]').parent().addClass("current");
			
		});
		
		nav.all("a").on("click", function(ev){
			var href=$(this).attr("data-href"),
				mod = demosection.one('h3 a[data-href="'+href+'"]');
			if(mod){
				//console.log(.);
				mod = mod.parent().parent();
				mainbody.scrollTop(mod[0].offsetTop);
			}
		})
		
		
		
		
	}
	
	
	
	
	
	

},{
	requires:["sizzle"]
});