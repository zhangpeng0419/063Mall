(function(){var e=$("#__mall_search_kw__"),t=location.protocol+"//search.mall.360.com",n="__search_id__",r="\u8bf7\u8f93\u5165\u5173\u952e\u5b57",i=function(e){return e=e.toString(),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/"/g,"&quot;"),e=e.replace(/'/g,"&#39;"),e},s=function(){function e(){function e(e){var e=e||window.event;return e.target||e.srcElement}function t(e){var t=e.hintEl;return t&&g(t)}function n(t){var n=e(t);if(!n||n.tagName!="INPUT"&&n.tagName!="TEXTAREA")return;var r=n.__emptyHintEl;r&&(n.value?r.style.display="none":r.style.display="")}function r(t){var n=e(t);if(!n||n.tagName!="INPUT"&&n.tagName!="TEXTAREA")return;var r=n.__emptyHintEl;r&&(r.style.display="none")}if("placeholder"in document.createElement("input"))return;document.addEventListener?(document.addEventListener("focus",r,!0),document.addEventListener("blur",n,!0)):(document.attachEvent("onfocusin",r),document.attachEvent("onfocusout",n));var i=[document.getElementsByTagName("input"),document.getElementsByTagName("textarea")];for(var s=0;s<2;s++){var o=i[s];for(var u=0;u<o.length;u++){var a=o[u],f=a.getAttribute("placeholder"),l=a.__emptyHintEl;f&&!l&&(l=document.createElement("span"),l.innerHTML=f,l.className="emptyhint",l.onclick=function(e){return function(){try{e.focus()}catch(t){}}}(a),a.value&&(l.style.display="none"),a.parentNode.insertBefore(l,a),a.__emptyHintEl=l)}}}e()},o=function(e){try{if(!window.localStorage)return;localStorage.setItem(n,e)}catch(t){}},u=function(e,t){var n=utils.path.queryUrl(location.href,"q");e.attr("placeholder",t),s()},a=function(){try{return window.localStorage?localStorage.getItem(n):""}catch(e){return""}},f=function(n){n=n===undefined?"index":n;var i=t+"/text/module/"+n,s=a();s&&(i+="/id/"+s),$.ajax({url:i,dataType:"jsonp",timeout:2e3}).then(function(t){t=typeof t=="string"?$.parseJSON(t):t;if(t.errno==0&&t.data&&t.data.id&&t.data.text){var n=t.data.id,i=t.data.text;u(e,i),o(n)}else u(e,r)},function(){u(e,r)})},l=function(){var n,r=!1;configs={data_url:t+"/suggest/%KEYWORD%",item_hover_style:"hover",item_selectors:"li",auto_submit:!0,auto_fix_list_pos:!0,pos_adjust:{top:1,"z-index":310},render_data_fun:function(e,t){var n=[],r,i,s=1;for(var o in t)r=o.replace(e,"<em>"+e+"</em>"),t[o].is_recommend?(monitorField="home_search_xiala"+(s<10?"0"+s:s),n.push('<li data-monitor="'+monitorField+'">'),++s):n.push('<li data-monitor="home_search_pipei">'),n.push('<div class="sug-item">'+r+"</div>"),t[o].is_recommend?n.push('<div class="desc">\u7ea6\u6709'+t[o].str+"\u4ef6</div></li>"):n.push('<div class="desc">\u7ea6\u6709'+t[o]+"\u4ef6</div></li>");return n.join("")},fill_data_fun:function(t){var n=$(t).find(".sug-item"),r=$.trim(n.html().stripTags());e.val(r)},onaftergetdata:function(e){var t=e.rawdata;t.errno?e.rawdata={}:e.rawdata=e.rawdata.data},recommend_fun:function(){var e=this;if(n!==undefined){e._initList(n);return}if(r)return;r=!0,$.ajax({url:t+"/suggest/",dataType:"jsonp",timeout:2e3}).then(function(t){t=typeof t=="string"?$.parseJSON(t):t;var r={},i=0;for(var s in t.data)r[s]={str:t.data[s],is_recommend:!0},++i;t.errno==0&&i&&(n=r,e._initList(r))}).always(function(){r=!1})}};var s=new MallSuggest(e,configs);$(".__mall_suggest__").css({width:$("#__mall_search_kw__").width()+28+"px"}),$("#__mall_search_form__").on("submit",function(){var e=utils.path.queryUrl(location.href);delete e.q,delete e.sort,delete e.cate,delete e.stock,delete e.props,delete e.page,delete e.status;for(var t in e){if($("input[type=hidden][name="+i(t)+"]").length)continue;var n=$("<input type='hidden'/>");n.attr("name",i(t)),n.attr("value",i(e[t])),$("#__mall_search_form__").append(n)}if(!$("input[type=hidden][name=utm_search]").length){var r=$("<input type='hidden' name='utm_search'/>"),s=window.location.host;s&&s!="mall.360.com"&&(r.val(i(s)),$("#__mall_search_form__").append(r))}$("#__mall_search_kw__").val()==""&&($("span.emptyhint").hide(),$("#__mall_search_kw__").val($("#__mall_search_kw__").attr("placeholder")||o))});var o="";$("#__mall_search_kw__").focus(function(){o=$(this).attr("placeholder"),$(this).attr("placeholder","")}),$("#__mall_search_kw__").blur(function(){$(this).attr("placeholder",o)}),$(".__mall_suggest__").delegate("li","click",function(){setTimeout(function(){$("#__mall_search_form__").submit()},500)})},c=function(e){f(e),l()};c()})();