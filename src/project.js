window.__require=function t(e,r,n){function i(o,s){if(!r[o]){if(!e[o]){var c=o.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!s&&l)return l(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+o+"'")}}var u=r[o]={exports:{}};e[o][0].call(u.exports,function(t){return i(e[o][1][t]||t)},u,u.exports,t,e,r,n)}return r[o].exports}for(var a="function"==typeof __require&&__require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(t,e,r){e.exports=function(t,e,r){return e<r?t<e?e:t>r?r:t:t<r?r:t>e?e:t}},{}],2:[function(t,e,r){"use strict";var n="undefined"!=typeof Symbol&&Symbol,i=t("./shams");e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&i())))}},{"./shams":3}],3:[function(t,e,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},{}],4:[function(t,e,r){e.exports=function(t){if(!t)return!1;var e=n.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)};var n=Object.prototype.toString},{}],5:[function(t,e,r){"use strict";e.exports=function(t){return null==t}},{}],6:[function(t,e,r){"use strict";e.exports=function(t){return"object"==typeof t&&null!==t}},{}],7:[function(t,e,r){"use strict";var n=Object.prototype.toString;if(t("has-symbols")()){var i=Symbol.prototype.toString,a=/^Symbol\(.*\)$/,o=function(t){return"symbol"==typeof t.valueOf()&&a.test(i.call(t))};e.exports=function(t){if("symbol"==typeof t)return!0;if("[object Symbol]"!==n.call(t))return!1;try{return o(t)}catch(t){return!1}}}else e.exports=function(t){return!1}},{"has-symbols":2}],8:[function(t,e,r){"use strict";e.exports=9007199254740991},{}],9:[function(t,e,r){"use strict";var n=t("is-nil"),i=t("is-object"),a=t("to-str"),o=t("random-natural"),s={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"~!@#$%^&()*_+-={}[]"};s.alpha=s.lower+s.upper,s.all=s.lower+s.upper+s.number+s.symbol,e.exports=function(t){var e;return i(t)||(n(t)?t={pool:s.all}:(t=a(t),t={pool:s[t]||t})),e=t.pool?t.pool:t.lower?s.lower:t.upper?s.upper:t.alpha?s.alpha:t.number?s.number:t.symbol?s.symbol:s.all,(e=a(e)).charAt(o({min:0,max:e.length-1,inspected:!0}))}},{"is-nil":5,"is-object":6,"random-natural":12,"to-str":17}],10:[function(t,e,r){"use strict";var n=t("clamp"),i=t("to-integer"),a=t("max-safe-int"),o=-a;function s(t,e,r,a){return"number"!=typeof t&&(t=i(t)),isNaN(t)||!isFinite(t)?a?e:r:n(t,e,r)}e.exports=function(t){t?t.inspected||(t.min=s(t.min,o,a,!0),t.max=s(t.max,o,a,!1)):t={min:o,max:a};var e=t.min,r=t.max;return e>r&&(e^=r,e^=r^=e),Math.round(Math.random()*(r-e))+e},e.exports.fixme=s},{clamp:1,"max-safe-int":8,"to-integer":16}],11:[function(t,e,r){"use strict";var n=t("clamp"),i=t("random-natural"),a=t("random-syllable");e.exports=function(t){var e=(t=t||{syllables:i({min:1,max:3,inspected:!0})}).length,r=t.syllables,o="";if(r){for(var s=0;s<r;s++)o+=a();return o.substring(0,18)}for(e||!t.min&&!t.max||(e=i({min:t.min||2,max:t.max||18})),e=e||i({min:2,max:18,inspected:!0}),e=n(e,2,18);o.length<e;)o+=a();return o.substring(0,e)}},{clamp:1,"random-natural":12,"random-syllable":15}],12:[function(t,e,r){"use strict";var n=t("random-integral"),i=t("max-safe-int");e.exports=function(t){return t?t.inspected||(t.min=n.fixme(t.min,0,i,!0),t.max=n.fixme(t.max,0,i,!1)):t={min:0,max:i},t.inspected=!0,n(t)},e.exports.fixme=n.fixme},{"max-safe-int":8,"random-integral":10}],13:[function(t,e,r){"use strict";var n=t("clamp"),i=t("random-natural"),a=t("random-sentence");e.exports=function(t){var e=(t=t||{sentences:i({min:3,max:7,inspected:!0})}).sentences;e||!t.min&&!t.max||(e=i({min:t.min||2,max:t.max||18})),e=e||i({min:2,max:18,inspected:!0}),e=n(e,2,18);for(var r=[];e--;)r.push(a());return r.join(" ")}},{clamp:1,"random-natural":12,"random-sentence":14}],14:[function(t,e,r){"use strict";var n=t("clamp"),i=t("random-lorem"),a=t("random-natural");e.exports=function(t){var e=(t=t||{words:a({min:12,max:18,inspected:!0})}).words;e||!t.min&&!t.max||(e=a({min:t.min||2,max:t.max||18})),e=e||a({min:2,max:18,inspected:!0}),e=n(e,2,18);for(var r=[];e--;)r.push(i());var o=r[0];return r[0]=o[0].toUpperCase()+o.substr(1),r.join(" ")+"."}},{clamp:1,"random-lorem":11,"random-natural":12}],15:[function(t,e,r){"use strict";var n=t("clamp"),i=t("is-object"),a=t("to-integer"),o=t("random-char"),s=t("random-natural");e.exports=function(t){var e=i(t)?t.length:t;e?(e=a(e),e=n(e,2,3)):e=s({min:2,max:3});for(var r,c="",l=0;l<e;l++)c+=r=0===l?o({pool:"bcdfghjklmnprstvwzaeiou"}):-1==="bcdfghjklmnprstvwz".indexOf(r)?o({pool:"bcdfghjklmnprstvwz"}):o({pool:"aeiou"});return c}},{clamp:1,"is-object":6,"random-char":9,"random-natural":12,"to-integer":16}],16:[function(t,e,r){"use strict";var n=t("is-nil"),i=t("is-symbol"),a=t("is-object"),o=t("is-function");e.exports=function(t){if(n(t))return 0;var e=typeof t;if("number"===e)return t;if("boolean"===e)return t?1:0;if(i(t))return NaN;if(a(t)){var r=o(t.valueOf)?t.valueOf():t;t=a(r)?r+"":r}return"string"!==(e=typeof t)?"number"===e?t:parseInt(t,10):(t=t.replace(/^\s+|\s+$/g,""),/^0b[01]+$/i.test(t)?parseInt(t.slice(2),2):/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),8):/^0x[0-9a-f]+$/i.test(t)?parseInt(t.slice(2),16):/^0b/i.test(t)||/^0o/i.test(t)||/^[\+\-]?0x/i.test(t)?NaN:parseInt(t,10))}},{"is-function":4,"is-nil":5,"is-object":6,"is-symbol":7}],17:[function(t,e,r){"use strict";var n=t("is-nil"),i=t("is-symbol"),a=t("is-object"),o=t("is-function");e.exports=function(t){if("string"==typeof t)return t;if(n(t))return"";if(i(t))return Symbol.prototype.toString.call(t);if(a(t)&&o(t.toString))return t.toString();var e=""+t;return"0"===e&&1/t==-1/0?"-0":e}},{"is-function":4,"is-nil":5,"is-object":6,"is-symbol":7}],GameController:[function(t,e,r){"use strict";cc._RF.push(e,"33b8bIMrxBJa4TKRS2M7oGY","GameController");var n=t("random-paragraph");cc.Class({extends:cc.Component,properties:{_userName:"",userNameEditBox:cc.EditBox,_avatar:"",avatarImageNode:cc.Button,buttonStart:cc.Button,atlasAvatar:cc.SpriteAtlas,_indexAtlas:0,_spriteFrameAvatar:cc.SpriteFrame,layoutSignIn:cc.Layout,layoutGame:cc.Layout,layoutResult:cc.Layout,_timePlay:60,_timer:0,_isDrawClock:!1,hoverClock:cc.Sprite,_context:String,_stringResults:[String],_stringTypings:[String],editBox:cc.EditBox,avatars:cc.Node},onLoad:function(){this._timePlay=60,this._indexAtlas=0,this.layoutSignIn.node.active=!0,this.layoutGame.node.active=!1,this.layoutResult.node.active=!1,this.avatars.active=!1,this._isDrawClock=!1,this._spriteFrameAvatar=this.atlasAvatar.getSpriteFrames()[this._indexAtlas]},onUsernameEditBoxChange:function(){this._userName=this.userNameEditBox.getComponent(cc.EditBox).string,this._spriteFrameAvatar=this.atlasAvatar.getSpriteFrames()[this._indexAtlas]},nextAvatar:function(){this._indexAtlas=(this._indexAtlas+1)%this.atlasAvatar.getSpriteFrames().length,this.avatarImageNode.node.getChildByName("AvatarSprite").getComponent(cc.Sprite).spriteFrame=this.atlasAvatar.getSpriteFrames()[this._indexAtlas],this._spriteFrameAvatar=this.atlasAvatar.getSpriteFrames()[this._indexAtlas]},previousAvatar:function(){this._indexAtlas=(this._indexAtlas-1)%this.atlasAvatar.getSpriteFrames().length,this._indexAtlas<0&&(this._indexAtlas=this.atlasAvatar.getSpriteFrames().length-1),this.avatarImageNode.node.getChildByName("AvatarSprite").getComponent(cc.Sprite).spriteFrame=this.atlasAvatar.getSpriteFrames()[this._indexAtlas],this._spriteFrameAvatar=this.atlasAvatar.getSpriteFrames()[this._indexAtlas]},chooseAvatar:function(t){this._spriteFrameAvatar=t.currentTarget.getChildByName("Avatar").getComponent(cc.Sprite).spriteFrame,this.avatarImageNode.node.getChildByName("AvatarSprite").getComponent(cc.Sprite).spriteFrame=t.currentTarget.getChildByName("Avatar").getComponent(cc.Sprite).spriteFrame,this.toggleAvatars()},toggleAvatars:function(){this.avatars.active=!this.avatars.active},starGame:function(){this.layoutSignIn.node.active=!1,this.layoutGame.node.active=!0,this.layoutGame.node.getChildByName("UserName").getComponent(cc.Label).string=this._userName,this.layoutGame.node.getChildByName("Avatar").getComponent(cc.Sprite).spriteFrame=this._spriteFrameAvatar,this._isDrawClock=!0,this.newParagraph(),this.editBox.focus()},drawClock:function(t){if(this.hoverClock.fillRange=t,t<.6){var e=255*t*100/60;this.hoverClock.node.color=cc.color(e,255,0)}else if(t<.9){var r=255-255*(t-.6)*100/30;this.hoverClock.node.color=cc.color(255,r,0)}},newParagraph:function(){var t=this;this._context=n({sentences:1}),this._context.split(" ").forEach(function(e){t._stringResults.push(e)}),this.layoutGame.node.getChildByName("Text").getComponent(cc.Label).string=this._context},textChange:function(){" "==this.editBox.string[this.editBox.string.length-1]&&(this._stringTypings.push(String(this.editBox.string).trim()),this._stringResults.length==this._stringTypings.length&&this.newParagraph(),this.editBox.string="",this.editBox.blur(),this.editBox.focus())},showResult:function(){var t=this;this.layoutGame.node.active=!1,this.layoutResult.node.active=!0;var e=0;this._stringTypings.forEach(function(r,n){r==t._stringResults[n]&&e++}),this.layoutResult.node.getChildByName("Avatar").getComponent(cc.Sprite).spriteFrame=this.atlasAvatar.getSpriteFrames()[this._indexAtlas],this.layoutResult.node.getChildByName("UserName").getComponent(cc.Label).string=this._userName,this.layoutResult.node.getChildByName("WPM").getComponent(cc.Label).string=e/(this._timePlay/60)+" WPM"},start:function(){},update:function(t){if(this._isDrawClock){this._timer+=t;var e=this._timer/this._timePlay;e<1?this.drawClock(e):(this._isDrawClock=!1,this.showResult())}}}),cc._RF.pop()},{"random-paragraph":13}],UserName:[function(t,e,r){"use strict";cc._RF.push(e,"4c8b2mAZUpIT6hLemcbUsFY","UserName"),cc.Class({extends:cc.Component,properties:{},start:function(){},onUsernameChanged:function(){this.node.getComponent(cc.EditBox).string}}),cc._RF.pop()},{}]},{},["GameController","UserName"]);