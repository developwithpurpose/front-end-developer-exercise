function Social(){function a(){var a=new window.XMLHttpRequest;if(window.ActiveXObject)try{a=new window.ActiveXObject("Msxml2.XMLHTTP")}catch(c){a=new window.ActiveXObject("Microsoft.XMLHTTP")}a&&(a.open("GET","/app/assets/javascripts/baby-steps.json"),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var c=JSON.parse(a.responseText);if(c.friends){var d,e={};for(d=1;7>=d;d++)e[d]=[];for(d=0;d<c.friends.length;d++)e[c.friends[d].babyStep].push(c.friends[d]);for(d=1;7>=d;d++)e[d].length>0&&(e[d]=window.Utils.alphabetizeFriends(e[d]));b(e)}}},a.send())}function b(a){for(var b=1;7>=b;b++){var c,d=a[b],e=null,f="";if(1===d.length)e="<span class='friend'>"+d[0].firstName+" "+d[0].lastName+"</span> is also in Baby Step "+b;else if(2===d.length){for(f="",c=0;2>c;c++)f+="<span class='friend'>"+d[c].firstName+" "+d[c].lastName+"</span> and ";e=f.substring(0,f.length-4)+" are also in Baby Step "+b}else if(d.length>2){for(f="",c=0;2>c;c++)f+="<span class='friend'>"+d[c].firstName+" "+d[c].lastName+"</span>, ";f+=" and "+(d.length-2)+" other ",f+=3===d.length?"friend":"friends",e=f+" are also in Baby Step "+b}if(e){var g=document.getElementById("baby-step-"+b);g.innerHTML+="<p style='webkit-margin-before:0;'>"+e+"</p>"}}}return{loadSocialInfo:a}}function Utils(){function a(c){if(1===c.length)return c;var d,e=[],f=[],g=Math.floor(c.length/2);for(d=0;g>d;d++)e.push(c[d]);for(d=g;d<c.length;d++)f.push(c[d]);return e=a(e),f=a(f),b(e,f)}function b(a,b){for(var c=[],d=0,e=0;d<a.length&&e<b.length;)a[d].lastName[0]<=b[e].lastName[0]?(c.push(a[d]),d++):(c.push(b[e]),e++);if(d<a.length)for(;d<a.length;)c.push(a[d]),d++;else if(e<b.length)for(;e<b.length;)c.push(b[e]),e++;return c}return{alphabetizeFriends:a}}window.Social=new Social,window.Utils=new Utils,function(){function a(a,c){return function(){b(a,c)}}function b(a,b){c(document.getElementById("baby-step-1").style.marginTop,465*a*-1,0,!0);var d=document.querySelectorAll(".active")[0];d.className="",d.children[1].src=d.children[1].src.replace("_blue.png",".png"),b.className="active",b.children[1].src=b.children[1].src.replace(".png","_blue.png")}function c(a,b,d,e){if(!d&&b>a-5)return void(document.getElementById("baby-step-1").style.marginTop=b+"px");if(d&&a+5>b)return void(document.getElementById("baby-step-1").style.marginTop=b+"px");a&&"string"==typeof a&&(a=parseInt(a.replace("px",""))),e&&b>a&&(d=1);var f=-5;d&&(f=5),a+=f,document.getElementById("baby-step-1").style.marginTop=a+"px",window.setTimeout(function(){c(a,b,d)},1)}for(var d=document.querySelectorAll("li"),e=0;e<d.length;e++)d[e].onclick=a(e,d[e]);window.setTimeout(window.Social.loadSocialInfo)}();