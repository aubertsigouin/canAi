!function(){"use strict";var o={addFooterInfoComponent:function(o,t){var n=$(".js-footer__info"),e=t;return o.set(".footer",{display:"none",opacity:0},0),0,o.set(".footer",{display:"block"},e),o.to(".footer",.5,{opacity:1},e),o.to(n,2,{top:"-150%"},e+1.5),e+2}};nau.FooterInfoAnimation=o}();