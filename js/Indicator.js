var nau=nau||{};!function(){"use strict";var i={$el:null,timeline:null,labelList:[],init:function(i){var e=this.$el=$(".js-indicator");if(this.timeline=i,null!==this.$el){var t=i.getLabelsArray();this.labelList=t,t.forEach(function(i){e.innerHTML+='<li class="indicator__item"><a href="javascript:void(0)" title="'+i.name+'" data-label="'+i.name+'"></a></li>'}),$$(".indicator__item").forEach(function(e,a){e.querySelector("a").addEventListener("click",function(){var e=(t[a].time+.25)/i.duration()*(1e3-window.innerHeight+11e3);TweenLite.to(window,2,{scrollTo:{y:e},ease:Power2.easeOut})})})}},updateIndicator:function(i){for(var e=this.timeline.duration()*i,t=this.$el,a=0;a<this.labelList.length;a++){if(this.labelList[a].time>e)return $$(".indicator__item").forEach(function(i){Vanilla.removeClass(i,"active")}),void Vanilla.addClass(t.querySelector("li:nth-child("+a+")"),"active");$$(".indicator__item").forEach(function(i){Vanilla.removeClass(i,"active")}),Vanilla.addClass(t.querySelector("li:last-child"),"active")}}};nau.Indicator=i}();