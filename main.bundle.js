webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_sass__);


const recommends = [
	{
		title: '成大',
		imgUrl: 'img/ncku.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '6:00~17:30',
		category: 'nosugar'
	},
	{
		title: '虎山步道',
		imgUrl: 'img/tigar.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '14:30~17:30',
		category: 'nosugar'
	},
	{
		title: '巴克禮公園',
		imgUrl: 'img/barkely.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '6:00~17:30',
		category: 'nosugar'
	},
	{
		title: '納涼屋',
		imgUrl: 'img/japan.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '10:00~20:00',
		category: 'nosugar'
	},
	{
		title: '奇美博物館',
		imgUrl: 'img/musium.jpg',
		period: 'one-helf',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '10:00~17:00',
		category: 'nosugar'
	},
	{
		title: '知事官邸',
		imgUrl: 'img/knowledge.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '11:00~19:00',
		category: 'nosugar'
	},
	{
		title: '台南神學院',
		imgUrl: 'img/god.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '13:00~17:00',
		category: 'nosugar'
	},
	{
		title: '十鼓糖廠',
		imgUrl: 'img/sugar.jpg',
		period: 'two-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '10:00~21:00',
		category: 'sugar'
	},
	{
		title: '台南甜點',
		imgUrl: 'img/desert.jpg',
		period: 'one-hour',
		style: {
			position: 'relative',
			backgroundColor: 'white',
			top: '0px',
			left: '0px'
		},
		time: '11:00~15:30',
		category: 'sugar'
	}
]

Vue.component('travel-element',{
	template: '#travel-element',
	props: [
		'title'
	]
})


var app = new Vue({
	el: '#app',
	data: {
		recommendedSpot: recommends,
		mousePos: {
			x: 0,
			y: 0
		},
		nowId : -1,
		nowframe: -1,
		frameWork: [
			{
				title: 'morning',
				active: false,
				style: {
					border: 'none'
				}
			},
			{
				title: 'afternoon',
				active: false,
				style: {
					border: 'none'
				}
			},
			{
				title: 'evening',
				active: false,
				style: {
					border: 'none'
				}
			}
		],
		myList: [
			{
				list: []
			},
			{
				list: []
			},
			{
				list: []
			}
		],
		isActive: true
	},
	watch: {
		mousePos() {
			if ( this.nowId != -1) {
				this.recommendedSpot[this.nowId].style = {
					position: 'absolute',
					left: `${this.mousePos.x}px`,
					top: `${this.mousePos.y}px`
				}
				//console.log(this.nowId)
			}
		}
	},
	methods: {
		select(i) {
			this.nowId = i
		},
		hover(i) {
			this.frameWork[i].active = !this.frameWork[i].active

			if (this.frameWork[i].active){
				this.nowframe = i
				this.frameWork[i].style = {
					border: '1px solid #dfb079'
				}
			}else{
				this.nowframe = -1
				this.frameWork[i].style = {
					border: 'none'
				}
			}
		},
		remove(i,j) {
			this.myList[i].list.splice(j,1)
		}
	}
})


window.onmousemove = (event) => {
	//let id = app.nowId
	app.mousePos = { x: event.pageX , y: event.pageY}
	//console.log(app.mousePos) 
}
window.onmouseup = ()=> {
	if( app.nowframe != -1 && app.nowId != -1 ){
		app.recommendedSpot[app.nowId].style = {
			position: 'relative',
			backgroundColor: 'gray'
		}
		app.myList[app.nowframe].list.push(app.recommendedSpot[app.nowId])
		/*let title = app.recommendedSpot[app.nowId].title
		let frameWork = app.frameWork[app.nowframe].title
		let url = app.recommendedSpot[app.nowId].imgUrl
		let time = app.recommendedSpot[app.nowId].time
		let period = app.recommendedSpot[app.nowId].period
		let element = `<li class="ui-state-default ui-widget-content ${period}">`
					+ `<h3 >${title}</h3>`
					+ `<div class="time">${time}</div>`
					+ `<div class="note"><img src="img/note.png"></div>`
					+ `<img src="img/close.png" class="close" alt="" @click = "remove">`
					+ '</li>'
		$(`.${frameWork} > .sortable`).append(element)*/
	}else{
		app.recommendedSpot[app.nowId].style = {
			position: 'relative',
			backgroundColor: 'white'
		}
	}
	app.nowId = -1
}
/*
window.onmouseup = ()=>{
	if(app.nowId != -1){
		app.postits[app.nowId].locked = false
		let projectId = app.projects[app.nowProjectId].id
		let content = {}
		content.index = app.nowId
		content.x = app.mousePos.x
		content.y = app.mousePos.y
		$.ajax({
		        	type: 'post',
			        data: JSON.stringify(content),
			        contentType: 'application/json',
			        url: './position/'+projectId+'',
			        success: function(data) {
			        	console.log('update position')
			        }
			    })
		socket.emit('stop',{id: app.nowId})
	}
	app.nowId = -1
	//console.log(app.nowId)
}
*/
window.onmousedown = ()=>{
	let x = app.mousePos.x
	let y = app.mousePos.y

	//use position to avoid form area
	if( (x >= 350 && y >= 350) || ( x >= 350 && y <= 350) || ( x <= 350 && y >= 350)){
		app.profileForm = {
			display: "none"
		}
	}
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\n#app {\n  display: inline-flex;\n  position: relative;\n  width: 100%;\n  padding-top: 100px; }\n  #app header {\n    position: absolute;\n    display: inline-flex;\n    max-width: 2000px;\n    top: 0px;\n    left: 0px;\n    width: calc(100% - 40px);\n    padding: 0px 20px;\n    justify-content: flex-start;\n    background-color: white;\n    z-index: 99; }\n    #app header > img {\n      width: 120px;\n      height: 120px;\n      margin: 20px; }\n    #app header .header {\n      display: inline-flex;\n      flex-direction: row-reverse;\n      justify-content: flex-start;\n      width: calc(100% - 180px);\n      height: 50px;\n      padding-left: 20px;\n      border-bottom: 0.6px solid; }\n      #app header .header a {\n        text-decoration: none;\n        color: black;\n        margin: 16px 22px 5px 5px;\n        font-size: 14px; }\n  #app #main-board {\n    display: inline-flex;\n    width: calc(100% - 40px);\n    flex-direction: row;\n    padding: 100px 20px 150px 20px; }\n    #app #main-board #myframe {\n      display: inline-flex;\n      max-width: 1200px;\n      width: calc(55% - 20px);\n      padding: 10px;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n      #app #main-board #myframe .period-board {\n        display: inline-flex;\n        width: 80%;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n        #app #main-board #myframe .period-board .period {\n          display: inline-flex;\n          position: relative;\n          flex-direction: column;\n          width: 100%;\n          height: 280px;\n          margin-top: 20px;\n          background-color: rgba(249, 235, 197, 0.43); }\n          #app #main-board #myframe .period-board .period > h2 {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            color: #e0dbcf; }\n          #app #main-board #myframe .period-board .period .element {\n            display: inline-flex;\n            width: 100%;\n            height: 150px;\n            border-radius: 7px;\n            border: 1px solid; }\n          #app #main-board #myframe .period-board .period .sortable {\n            display: inline-flex;\n            width: 100%;\n            flex-direction: column; }\n            #app #main-board #myframe .period-board .period .sortable li {\n              display: inline-flex;\n              position: relative;\n              width: calc(100% - 20px);\n              margin-right: 10px;\n              padding: 10px;\n              height: 70px;\n              border-radius: 7px;\n              margin-bottom: 2px;\n              list-style-type: none;\n              background-color: #FDEBC7;\n              cursor: pointer;\n              justify-content: flex-start; }\n              #app #main-board #myframe .period-board .period .sortable li > * {\n                display: inline-flex;\n                justify-content: center;\n                align-items: center; }\n              #app #main-board #myframe .period-board .period .sortable li h3 {\n                width: 35%; }\n              #app #main-board #myframe .period-board .period .sortable li .time {\n                width: 40%; }\n              #app #main-board #myframe .period-board .period .sortable li .note {\n                width: 25%; }\n                #app #main-board #myframe .period-board .period .sortable li .note img {\n                  width: 30px;\n                  height: 30px; }\n              #app #main-board #myframe .period-board .period .sortable li .close {\n                position: absolute;\n                width: 15px;\n                height: 15px;\n                right: 0px;\n                top: 0px;\n                transform: translate(50%, -50%);\n                transition: all 0.4s; }\n                #app #main-board #myframe .period-board .period .sortable li .close:hover {\n                  width: 18px;\n                  height: 18px; }\n            #app #main-board #myframe .period-board .period .sortable .one-hour {\n              height: 100px; }\n            #app #main-board #myframe .period-board .period .sortable .one-helf {\n              height: 150px; }\n            #app #main-board #myframe .period-board .period .sortable .two-hour {\n              height: 200px; }\n            #app #main-board #myframe .period-board .period .sortable .two-helf {\n              height: 250px; }\n            #app #main-board #myframe .period-board .period .sortable .sugar {\n              background-color: #c4a15b; }\n          #app #main-board #myframe .period-board .period .evening {\n            height: 200px; }\n    #app #main-board #experience-board {\n      display: inline-flex;\n      width: calc(45% - 20px);\n      margin-top: 50px;\n      padding: 10px;\n      flex-wrap: nowrap;\n      justify-content: flex-start;\n      align-content: flex-start; }\n      #app #main-board #experience-board .col {\n        display: inline-flex;\n        flex-direction: column;\n        width: 150px;\n        justify-content: flex-start;\n        margin-right: 10px; }\n        #app #main-board #experience-board .col .spot {\n          display: inline-flex;\n          width: 150px;\n          height: 150px;\n          margin-top: 10px;\n          margin-right: 10px;\n          position: relative;\n          cursor: pointer; }\n          #app #main-board #experience-board .col .spot img {\n            position: absolute;\n            top: 0px;\n            left: 0px;\n            width: 100%;\n            height: 100%; }\n        #app #main-board #experience-board .col .one-hour {\n          height: 100px; }\n        #app #main-board #experience-board .col .one-helf {\n          height: 140px; }\n        #app #main-board #experience-board .col .two-hour {\n          height: 180px; }\n        #app #main-board #experience-board .col .two-helf {\n          height: 220px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[0]);