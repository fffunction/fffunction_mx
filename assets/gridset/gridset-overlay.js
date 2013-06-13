// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.getElementById('gridsetoverlaywrap');
					
						if (!gw) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
	
		document.body.removeChild(gw);
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var p = ['da','db','t','m'],
			c = [12,8,8,2],
			w = [1024,990,768,320],
			b = document.getElementsByTagName('body')[0],
			gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',
		
			k = 0, breaks = '',
			
			styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block !important;width:100% !important;position:absolute !important;bottom:0 !important;left:0 !important;height:30px !important;border-top:1px solid #7D80DB !important;opacity:0.7 !important;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block !important;width:100% !important;text-align:center !important;font-size:12px !important;line-height:1 !important;padding-top:8px !important;font-family:Helvetica, Arial, sans-serif !important; margin: 0 !important;color:#7D80DB !important;}@media only screen and (max-width:767px) {#gridsetoverlaywrap [class*=m1],#gridsetoverlaywrap [class*=m2],#gridsetoverlaywrap .m-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=m1]{width:48.4375%;margin-left:0%;}#gridsetoverlaywrap [class*=m2]{width:48.4375%;margin-left:51.5625%;}#gridsetoverlaywrap .m-hide{display:none !important;}}@media only screen and (min-width:768px) and (max-width:989px) {#gridsetoverlaywrap [class*=t1],#gridsetoverlaywrap [class*=t2],#gridsetoverlaywrap [class*=t3],#gridsetoverlaywrap [class*=t4],#gridsetoverlaywrap [class*=t5],#gridsetoverlaywrap [class*=t6],#gridsetoverlaywrap [class*=t7],#gridsetoverlaywrap [class*=t8],#gridsetoverlaywrap .t-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=t1]{width:11.528620429525528%;margin-left:0%;}#gridsetoverlaywrap [class*=t2]{width:11.528620429525528%;margin-left:14.132787099526%;}#gridsetoverlaywrap [class*=t3]{width:11.528620429525528%;margin-left:28.265574199051%;}#gridsetoverlaywrap [class*=t4]{width:11.528620429525528%;margin-left:42.398361298577%;}#gridsetoverlaywrap [class*=t5]{width:8.962362548325935%;margin-left:56.531148398102%;}#gridsetoverlaywrap [class*=t6]{width:8.919110781966982%;margin-left:68.097677616428%;}#gridsetoverlaywrap [class*=t7]{width:8.875201471647912%;margin-left:79.620955068395%;}#gridsetoverlaywrap [class*=t8]{width:8.834572646623739%;margin-left:91.100323210043%;}#gridsetoverlaywrap .t-hide{display:none !important;}}@media only screen and (min-width:990px) and (max-width:1023px) {#gridsetoverlaywrap [class*=db1],#gridsetoverlaywrap [class*=db2],#gridsetoverlaywrap [class*=db3],#gridsetoverlaywrap [class*=db4],#gridsetoverlaywrap [class*=db5],#gridsetoverlaywrap [class*=db6],#gridsetoverlaywrap [class*=db7],#gridsetoverlaywrap [class*=db8],#gridsetoverlaywrap .db-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=db1]{width:12.145045497736335%;margin-left:0%;}#gridsetoverlaywrap [class*=db2]{width:12.145045497736335%;margin-left:14.165247517736%;}#gridsetoverlaywrap [class*=db3]{width:12.145045497736335%;margin-left:28.330495035473%;}#gridsetoverlaywrap [class*=db4]{width:12.145045497736335%;margin-left:42.495742553209%;}#gridsetoverlaywrap [class*=db5]{width:9.392168515078767%;margin-left:56.660990070945%;}#gridsetoverlaywrap [class*=db6]{width:9.334248499173963%;margin-left:68.073360606024%;}#gridsetoverlaywrap [class*=db7]{width:9.277349639316233%;margin-left:79.427811125198%;}#gridsetoverlaywrap [class*=db8]{width:9.22413216356651%;margin-left:90.725362784514%;}#gridsetoverlaywrap .db-hide{display:none !important;}}@media only screen and (min-width:1024px) {#gridsetoverlaywrap [class*=da1],#gridsetoverlaywrap [class*=da2],#gridsetoverlaywrap [class*=da3],#gridsetoverlaywrap [class*=da4],#gridsetoverlaywrap [class*=da5],#gridsetoverlaywrap [class*=da6],#gridsetoverlaywrap [class*=da7],#gridsetoverlaywrap [class*=da8],#gridsetoverlaywrap [class*=da9],#gridsetoverlaywrap [class*=da10],#gridsetoverlaywrap [class*=da11],#gridsetoverlaywrap [class*=da12],#gridsetoverlaywrap .da-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=da1]{width:7.20304513090609%;margin-left:0%;}#gridsetoverlaywrap [class*=da2]{width:7.20304513090609%;margin-left:9.1561701309061%;}#gridsetoverlaywrap [class*=da3]{width:7.20304513090609%;margin-left:18.312340261812%;}#gridsetoverlaywrap [class*=da4]{width:7.20304513090609%;margin-left:27.468510392718%;}#gridsetoverlaywrap [class*=da5]{width:7.20304513090609%;margin-left:36.624680523624%;}#gridsetoverlaywrap [class*=da6]{width:7.20304513090609%;margin-left:45.78085065453%;}#gridsetoverlaywrap [class*=da7]{width:5.953537297735504%;margin-left:54.937020785437%;}#gridsetoverlaywrap [class*=da8]{width:5.922484600344462%;margin-left:62.843683083172%;}#gridsetoverlaywrap [class*=da9]{width:5.88991796390554%;margin-left:70.719292683517%;}#gridsetoverlaywrap [class*=da10]{width:5.858389813165863%;margin-left:78.562335647422%;}#gridsetoverlaywrap [class*=da11]{width:5.827455213434061%;margin-left:86.373850460588%;}#gridsetoverlaywrap [class*=da12]{width:5.796741200978035%;margin-left:94.154430674022%;}#gridsetoverlaywrap .da-hide{display:none !important;}}</style>';
						
		while (p[k]) {
		
			var hides = '', 
				l = 0;
		
			if (w[k] != breaks && k == 0) gw += '<div>';
			else if (w[k] != breaks) gw += '</div><div>';
		
			while (p[l]) {
		
				if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
				l++;			
		
			}
		
			gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
		
			var i = 1;
		
			while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
		
			gw += '</div>';
		
			if (k == w.length - 1) gw += '</div>';
		
			breaks = w[k];
		
			k++;
		
		}
		
		gw += '</div></div>';
		
		var newgw = document.createElement('div');
		
		newgw.id = 'gridsetoverlaywrap';
		
		newgw.innerHTML = gw + styles;
		
		b.appendChild(newgw);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();