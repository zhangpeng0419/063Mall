function T$(e){return document.getElementById(e)}function T$$(e,t){return t.getElementsByTagName(e)}var TINY={};TINY.slider=function(){function e(e,t){this.n=e,this.init(t)}return e.prototype.init=function(e){var t=this.x=T$(e.id),n=this.u=T$$("ul",t)[0],r=this.m=T$$("li",n),i=r.length,s=this.l=this.c=0;this.b=1,e.navid&&e.activeclass&&(this.g=T$$("li",T$(e.navid)),this.s=e.activeclass),this.a=e.auto||0,this.p=e.resume||0,this.r=e.rewind||0,this.e=e.elastic||!1,this.v=e.vertical||0,t.style.overflow="hidden";for(s;s<i;s++)r[s].parentNode==n&&this.l++;this.v?(n.style.top=0,this.h=e.height||r[0].offsetHeight,n.style.height=this.l*this.h+"px"):(n.style.left=0,this.w=e.width||r[0].offsetWidth,n.style.width=this.l*this.w+"px"),this.nav(e.position||0),e.position?this.pos(e.position||0,this.a?1:0,1):this.a&&this.auto(),e.left&&this.sel(e.left),e.right&&this.sel(e.right)},e.prototype.auto=function(){this.x.ai=setInterval(new Function(this.n+".move(1,1,1)"),this.a*1e3)},e.prototype.move=function(e,t){var n=this.c+e;this.r&&(n=e==1?n==this.l?0:n:n<0?this.l-1:n),this.pos(n,t,1)},e.prototype.pos=function(e,t,n){var r=e;clearInterval(this.x.ai),clearInterval(this.x.si);if(!this.r)if(n){if(e==-1||e!=0&&Math.abs(e)%this.l==0){this.b++;for(var i=0;i<this.l;i++)this.u.appendChild(this.m[i].cloneNode(1));this.v?this.u.style.height=this.l*this.h*this.b+"px":this.u.style.width=this.l*this.w*this.b+"px"}if(e==-1||e<0&&Math.abs(e)%this.l==0)this.v?this.u.style.top=this.l*this.h*-1+"px":this.u.style.left=this.l*this.w*-1+"px",r=this.l-1}else this.c>this.l&&this.b>1&&(r=this.l*(this.b-1)+e,e=r);var s=this.v?r*this.h*-1:r*this.w*-1,o=e<this.c?-1:1;this.c=r;var u=this.c%this.l;this.nav(u),this.e&&(s-=8*o),this.x.si=setInterval(new Function(this.n+".slide("+s+","+o+",1,"+t+")"),10)},e.prototype.nav=function(e){if(this.g)for(var t=0;t<this.l;t++)this.g[t].className=t==e?this.s:""},e.prototype.slide=function(e,t,n,r){var i=this.v?parseInt(this.u.style.top):parseInt(this.u.style.left);if(i==e)clearInterval(this.x.si),this.e&&n<3?this.x.si=setInterval(new Function(this.n+".slide("+(n==1?e+12*t:e+4*t)+","+(n==1?-1*t:-1*t)+","+(n==1?2:3)+","+r+")"),10):((r||this.a&&this.p)&&this.auto(),this.b>1&&this.c%this.l==0&&this.clear());else{var s=i-Math.ceil(Math.abs(e-i)*.1)*t+"px";this.v?this.u.style.top=s:this.u.style.left=s}},e.prototype.clear=function(){var e=T$$("li",this.u),t=i=e.length;this.v?this.u.style.top=0:this.u.style.left=0,this.b=1,this.c=0;for(i;i>0;i--){var n=e[i-1];t>this.l&&n.parentNode==this.u&&(this.u.removeChild(n),t--)}},e.prototype.sel=function(e){var t=T$(e);t.onselectstart=t.onmousedown=function(){return!1}},{slide:e}}();