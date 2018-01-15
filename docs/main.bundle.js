webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title  {\r\n\tbackground-color: #1976d2;\r\n\theight: 100px;\r\n\twidth: 100%;\r\n\tfont-size: 2rem;\r\n\tcolor: white;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\r\n}\r\n\r\n.title > a {\r\n  font-size: 1.1rem;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: start;\r\n\t    -ms-flex-pack: start;\r\n\t        justify-content: flex-start;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground-color: #2196F3;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\theight: 100%;\r\n}\r\n\r\n.centered {\r\n\tmargin-top: 50px;\r\n\theight:70%;\r\n\twidth: 40%;\r\n\tpadding: 5px;\r\n\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n  <div style=\"margin-left: 20px;margin-top: 10px;\">The Insulting ChatBot.</div>\r\n</div>\r\n<div class=\"container\">\r\n\t<div class=\"centered\">\r\n\t    <app-message-list [messages]=\"messages\"></app-message-list>\r\n\t    <app-message-form [message]=\"message\" [messages]=\"messages\"></app-message-form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.botIcon = 'assets/bot.png';
        this.message = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]('', this.botIcon);
        this.messages = [
            new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]('Welcome to the InsultBot', this.botIcon, new Date())
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_item_message_item_component__ = __webpack_require__("../../../../../src/app/message-item/message-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_list_message_list_component__ = __webpack_require__("../../../../../src/app/message-list/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_form_message_form_component__ = __webpack_require__("../../../../../src/app/message-form/message-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_flow_service__ = __webpack_require__("../../../../../src/app/dialog-flow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__message_item_message_item_component__["a" /* MessageItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__message_list_message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__message_form_message_form_component__["a" /* MessageFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__dialog_flow_service__["a" /* DialogFlowService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialog-flow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogFlowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogFlowService = (function () {
    function DialogFlowService(http) {
        this.http = http;
        this.baseURL = "https://console.dialogflow.com/api/query?v=20170712";
        this.token = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].token;
    }
    DialogFlowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '770212345'
        };
        return this.http.post(this.baseURL, data, { headers: this.getHeaders() }).map(function (res) {
            return res.json();
        });
    };
    DialogFlowService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Bearer " + this.token);
        return headers;
    };
    DialogFlowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DialogFlowService);
    return DialogFlowService;
}());



/***/ }),

/***/ "../../../../../src/app/message-form/message-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message-form {\r\n\twidth: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\t-webkit-box-align: end;\r\n\t    -ms-flex-align: end;\r\n\t        align-items: flex-end;\r\n\tbackground-color: #1976d2;\r\n\tbox-sizing: border-box;\r\n  padding:5px;\r\n}\r\n\r\n.keyboard-icon {\r\n  height: 32px;\r\n  width:32px;\r\n  background-image: url(/assets/keyboard.png);\r\n}\r\n\r\n.message-form-input {\r\n\twidth:75%;\r\n  height:25px;\r\n  background-color: #1976d2;\r\n\tborder-radius: 0;\r\n  border: 1px solid white;\r\n  color:white;\r\n}\r\n.message-form-input::-webkit-input-placeholder {\r\n  color: gainsboro;\r\n}\r\n.message-form-input:-ms-input-placeholder {\r\n  color: gainsboro;\r\n}\r\n.message-form-input::placeholder {\r\n  color: gainsboro;\r\n}\r\n\r\n\r\n.message-form-button {\r\n  height:29px;\r\n  box-sizing: border-box;\r\n\tbackground-color: darkorange;\r\n  color: white;\r\n  font-weight: bold;\r\n\twidth:100px;\r\n\tborder: 0;\r\n\tbox-shadow: none;\r\n\tborder-radius: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-form/message-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message-form\">\r\n  <div class=\"keyboard-icon\"></div>\r\n  <input type=\"message-content\" class=\"message-form-input\" (keyup.enter)=\"sendMessage()\"\r\n    [(ngModel)]=\"message.content\" placeholder=\"Type your message here\" />\r\n\t<button class=\"message-form-button\" (click)=\"sendMessage()\">SEND</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/message-form/message-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_flow_service__ = __webpack_require__("../../../../../src/app/dialog-flow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageFormComponent = (function () {
    function MessageFormComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
        this.userUrl = "assets/user.ico";
        this.botURL = "assets/bot.png";
    }
    MessageFormComponent.prototype.ngOnInit = function () { };
    // @ViewChild("listItemRef") contEl: any;
    MessageFormComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.message.avatar = this.userUrl;
        this.messages.push(this.message);
        this.dialogFlowService.getResponse(this.message.content).subscribe(function (res) {
            _this.messages.push(new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */](res.result.fulfillment.speech, _this.botURL, res.timestamp));
        });
        this.message = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]('', this.userUrl);
        if (this.messages.length > 6) {
            this.messages.splice(0, 6);
        }
        // let current = this.contEl.scrollTop;
        // this.contEl.scrollTop = current;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])("message"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */])
    ], MessageFormComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])("messages"),
        __metadata("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-message-form",
            template: __webpack_require__("../../../../../src/app/message-form/message-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-form/message-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dialog_flow_service__["a" /* DialogFlowService */]])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message-item/message-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li.message-item {\r\n\tpadding:5px;\r\n\tborder-bottom: 1px solid gainsboro;\r\n\theight: 70px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: start;\r\n\t    -ms-flex-pack: start;\r\n\t        justify-content: flex-start;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tmargin:0;\r\n\topacity: 1;\r\n}\r\n\r\nli.message-item > .message-content {\r\n\tmargin-left: 20px;\r\n\twidth:80%;\r\n\tfont-size:1.1rem;\r\n\tfont-style: italic;\r\n}\r\n\r\nli.message-item > .avatar {\r\n\tborder: 1px solid white;\r\n\tfloat:left;\r\n\tborder-radius: 50%;\r\n\tpadding:5px;\r\n}\r\n\r\nli.message-item >.timestamp {\r\n\tfont-size: 0.7rem;\r\n\tcolor: gainsboro;\r\n\tfont-style: italic;\r\n\t-ms-flex-item-align: end;\r\n\t    align-self: flex-end;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-item/message-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"message-item\" #listItemRef>\r\n\t<img [src]=\"message.avatar\" class=\"avatar\"/>\r\n\t<div class=\"message-content\">\r\n\t\t{{message.content}}\r\n\t</div>\r\n\t<div class=\"timestamp\">\r\n\t\t<p>\r\n\t\t\tat {{message.timestamp | date : 'dd:MM:yyyy'}}\r\n\t\t</p>\r\n\t</div>\r\n</li>"

/***/ }),

/***/ "../../../../../src/app/message-item/message-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageItemComponent = (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('message'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-message-item',
            template: __webpack_require__("../../../../../src/app/message-item/message-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-item/message-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages {\r\n\theight: 100%;\r\n\tmargin: auto;\r\n\t/*border: 1px solid white;*/\r\n\toverflow-x: hidden;\r\n\toverflow-y: auto;\r\n\tbackground-color: #1976d2;\r\n\r\n}\r\n\r\n.messages-list {\r\n\tlist-style: none;\r\n\tpadding-left: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messages\">\r\n\t<ul class=\"messages-list\">\r\n\t\t<app-message-item *ngFor=\"let msg of messages\" [message]= \"msg\" ></app-message-item>\r\n\t</ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageListComponent = (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])("messages"),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    MessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-message-list",
            template: __webpack_require__("../../../../../src/app/message-list/message-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.avatar = avatar;
        this.timestamp = timestamp;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    token: "6bd62d60de40463fb26405a552abe1f4"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map