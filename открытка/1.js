function resizeFrame(){
	var WX,WY,BX,BY;
	var o=document.getElementById("iFaYYfBpK_"),t,d;
	if (!o) return;
	d=o.contentDocument;
	if (!(t=d.getElementById("wrapperXaYYfBpK_"))) WX=0;
	else WX=t.value;
	if (!(t=d.getElementById("wrapperYaYYfBpK_"))) WY=0;
	else WY=t.value;
	if (!(t=d.getElementById("bannerXaYYfBpK_"))) BX=0;
	else BX=t.value;
	if (!(t=d.getElementById("bannerYaYYfBpK_"))) BY=0;
	else BY=t.value;
	BX=parseInt(BX)+parseInt(WX);
	BY=parseInt(BY)+parseInt(WY);
	if (BX<0) o.style.width="100%";
	else if (BX>0) o.style.width=BX+"px";
	if (BY<0) o.style.height="100%";
	else if (BY>0) o.style.height=BY+"px";
}
document.write('<iframe style="position:fixed;right:0px;top:0px;z-index:10000;" height="0" width="0" onload="resizeFrame();" id="iFaYYfBpK_" frameborder="0" scrolling="no" src="/abnl/?adsdata=f4Ww3!8821t9k^awwSEcMlscu2z4!9^OTd;1S^huRkK1FmGQF;O3T6IHscqTyr8;189ZMQ1Gj9XaKFyVmXbg5QiTOVxcJnP7hGuJxW!j2hUo"></iframe>');new Image().src = "http://counter.yadro.ru/hit;narodadst1?r"+escape(document.referrer)+((typeof(screen)=="undefined")?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+";"+Math.random();