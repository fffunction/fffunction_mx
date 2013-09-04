// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.querySelectorAll('.gridsetoverlaywrap, #gridsetoverlaystyles, #gridscreenwidthwrap');
					
						if (gw.length == 0) gs.show();
						else { window.location.href = window.location.href.replace('?gridset=show', '') }
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var b = document.getElementsByTagName('body')[0],
				gridareas = document.querySelectorAll('[class*=-showgrid]'),
				areacount = gridareas.length,
				wrapper = document.querySelectorAll('.wrapper'),
			
				styles = '.gridsetoverlaywrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;}.gridsetnoareas .gridsetoverlaywrap{position:fixed;}.gridwrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;font-family:Helvetica, Arial, sans-serif !important;}.gridoverlay{padding:0 !important;position:relative;height:100%;overflow:hidden !important;background:none !important;}.gridoverlay .gridset{padding:0 !important;position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.8; display:block;}.gridoverlay .gridset div{padding:0;text-align:left;font-size:10px !important;border:1px solid #FFD800 !important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;}.gridoverlay .gridset > div{border:none !important;height:100%;position:absolute;top:0;left:0;width:100%;}.gridoverlay div small{width:100%;display:block;text-align:center;font-weight:400 !important;letter-spacing: 1px !important;padding-top:0 !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;border-bottom:1px solid #FFD800 !important;color:#333 !important;background-color:#FFF79F !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2){padding-top:23px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2) small{border-bottom:1px dashed #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2) > div{border:1px dashed #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3){padding-top:45px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3) small{border-bottom:1px dotted #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3) > div{border:1px dotted #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4){padding-top:67px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4) small{border-bottom:1px double #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4) > div{border:1px double #FFD800 !important;}.gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{margin:0 !important;padding:0 !important;display:none;width:100%;position:fixed !important;z-index:10000 !important;bottom:0 !important;left:0 !important;height:30px !important;opacity:0.95;border-top:1px solid #FFD800 !important;color:#333;background-color:#FFF79F !important;font-family:Helvetica, Arial, sans-serif !important;}#gridscreenwidth{margin:0 !important;display:block;width:100% !important;max-width:none !important;text-align:center !important;font-size:12px;line-height:1;padding-top:8px !important;}#gridscreenwidth strong{text-transform:none;}',
				
				newstyles = document.createElement('style'),
				newwidth = document.createElement('div'),
				head = document.getElementsByTagName('head'),
				newfavicon = document.createElement('link'),
				newgsstyles = document.createElement('link');
		
		newstyles.id = 'gridsetoverlaystyles';
		newstyles.innerHTML = styles;
		newstyles.type = 'text/css';
		
		newwidth.id = 'gridscreenwidthwrap';
		newwidth.innerHTML = '<p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p>';
		
		b.appendChild(newstyles);
		b.appendChild(newwidth);
		
		var newwidthdisplay = (newwidth.currentStyle) ? newwidth.currentStyle.display : getComputedStyle(newwidth, null).display;
		
		newfavicon.rel = "shortcut icon";
		newfavicon.id = "gridsetfavicon";
		newfavicon.href = "http://dev.gridsetapp.com/app/img/favicon.ico";
		
		head[0].appendChild(newfavicon);
		
		if (newwidthdisplay != 'block') {
		
			newgsstyles.rel = "stylesheet";
			newgsstyles.id = "gridsetstyles";
			newgsstyles.href = "https://get.gridsetapp.com/18282/";
			head[0].appendChild(newgsstyles);
		
		}
		
		if (areacount) {
			
			var j = areacount;
			
			while (j-- > 0) {
			
				var area = gridareas[j];
			
				gs.buildgrid(area, j, areacount);
				
				if (window.getComputedStyle(area,null).getPropertyValue("position") == 'static') area.style.position = 'relative';
				
			}
			
		}
		else {
			
			if (!b.className.match('gridsetnoareas')) b.className += ' gridsetnoareas';
			
			gs.buildgrid(b, j, areacount);
		
		}
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	buildgrid: function (area, j, showgrid) {
		
		var set = JSON.parse('{"id":"18282","name":"prototyping","widths":{"1024":{"width":1024,"grids":{"da":{"name":"Desktop A","prefix":"da","width":1024,"columns":{"da1":{"name":"da1","unit":"%","percent":8.32926432,"px":85.29},"da2":{"name":"da2","unit":"%","percent":8.32926432,"px":85.29},"da3":{"name":"da3","unit":"%","percent":8.32926432,"px":85.29},"da4":{"name":"da4","unit":"%","percent":8.32926432,"px":85.29},"da5":{"name":"da5","unit":"%","percent":8.32926432,"px":85.29},"da6":{"name":"da6","unit":"%","percent":8.32926432,"px":85.29},"da7":{"name":"da7","unit":"%","percent":8.32926432,"px":85.29},"da8":{"name":"da8","unit":"%","percent":8.32926432,"px":85.29},"da9":{"name":"da9","unit":"%","percent":8.32926432,"px":85.29},"da10":{"name":"da10","unit":"%","percent":8.32926432,"px":85.29},"da11":{"name":"da11","unit":"%","percent":8.32926432,"px":85.29},"da12":{"name":"da12","unit":"%","percent":8.32926432,"px":85.29}},"gutter":{"unit":"px","px":0,"percent":0},"ratio":{"name":"even","value":1}}}},"990":{"width":990,"grids":{"db":{"name":"Desktop B","prefix":"db","width":990,"columns":{"db1":{"name":"db1","unit":"%","percent":12.49368687,"px":123.69},"db2":{"name":"db2","unit":"%","percent":12.49368687,"px":123.69},"db3":{"name":"db3","unit":"%","percent":12.49368687,"px":123.69},"db4":{"name":"db4","unit":"%","percent":12.49368687,"px":123.69},"db5":{"name":"db5","unit":"%","percent":12.49368687,"px":123.69},"db6":{"name":"db6","unit":"%","percent":12.49368687,"px":123.69},"db7":{"name":"db7","unit":"%","percent":12.49368687,"px":123.69},"db8":{"name":"db8","unit":"%","percent":12.49368687,"px":123.69}},"gutter":{"unit":"px","px":0,"percent":0},"ratio":{"name":"even","value":1}}}},"768":{"width":768,"grids":{"t":{"name":"Tablet","prefix":"t","width":768,"columns":{"t1":{"name":"t1","unit":"%","percent":12.49186198,"px":95.94},"t2":{"name":"t2","unit":"%","percent":12.49186198,"px":95.94},"t3":{"name":"t3","unit":"%","percent":12.49186198,"px":95.94},"t4":{"name":"t4","unit":"%","percent":12.49186198,"px":95.94},"t5":{"name":"t5","unit":"%","percent":12.49186198,"px":95.94},"t6":{"name":"t6","unit":"%","percent":12.49186198,"px":95.94},"t7":{"name":"t7","unit":"%","percent":12.49186198,"px":95.94},"t8":{"name":"t8","unit":"%","percent":12.49186198,"px":95.94}},"gutter":{"unit":"px","px":0,"percent":0},"ratio":{"name":"even","value":1}}}},"320":{"width":320,"grids":{"m":{"name":"Mobile","prefix":"m","width":320,"columns":{"m1":{"name":"m1","unit":"%","percent":49.921875,"px":159.75},"m2":{"name":"m2","unit":"%","percent":49.921875,"px":159.75}},"gutter":{"unit":"px","px":0,"percent":0},"ratio":{"name":"even","value":1}}}}},"prefixes":{"index":["da","db","t","m"],"1024":["da"],"990":["db"],"768":["t"],"320":["m"]}}'),
		
				gridwrap = document.createElement('div'),
				gridinner = (showgrid) ? '<div class="gridwrap"><div class="gridoverlay">' : '<div class="gridwrap"><div class="gridoverlay wrapper">',
				
				awidth = area.clientWidth,
				apadleft = (parseFloat(gs.getstyle(area, 'padding-left')) / awidth) * 100,
				apadright = (parseFloat(gs.getstyle(area, 'padding-right')) / awidth) * 100;
		
		if (showgrid) gridwrap.className = 'gridsetoverlaywrap';
		else gridwrap.className = 'gridsetoverlaywrap';
		
		for (w in set.widths) {
			
			var width = set.widths[w],
					hides = '';
			
			for (p in set.prefixes) {
				
				if (p != w && p != 'index') hides += set.prefixes[p][0] + "-hide ";
				
			}
			
			gridinner += '<div class="gridset ' + hides + '">';
			
			for (j in width.grids) {
			
				var grid = width.grids[j],
						showreg = new RegExp('(^| )' + grid.prefix + '-showgrid( |$)');
				
				if (!showgrid || area.className.match(showreg)) {
				
					gridinner += '<div style="padding-left:' + apadleft + '%;padding-right:' + apadright + '%;">';
					
					for (k in grid.columns) {
						
						var col = grid.columns[k];
						
						gridinner += '<div class="' + col.name + '"><small>' + col.name + '</small></div>';
					
					}
					
					gridinner += '</div>';
				
				}
			}
			
			gridinner += '</div>';
		
		}
		
		gridinner += '</div></div>';
		
		gridwrap.innerHTML = gridinner;
		
		area.appendChild(gridwrap);
		
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	},
	
	getstyle : function (t, p){
	
	 if (t.currentStyle) return t.currentStyle[p];
	 else if (document.defaultView && document.defaultView.getComputedStyle) return document.defaultView.getComputedStyle(t, "").getPropertyValue(p);
	 else return t.style[p];
	 
	}


};

gs.init();