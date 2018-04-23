webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".form-container .button-row {\n  text-align: right;\n}\n\n.form-container {\n  text-align: left;\n  font-size: 18px;\n}\n\n.eligibility-container .introduction {\n  margin-bottom: 2em;\n}\n\n.person-container mat-form-field,\n.application-container mat-form-field {\n  width: 100%;\n}\n\n/* Large devices (PCs, 1200px and up) */\n\n@media (min-width: 1200px) {\n  .application-container .description {\n    text-align: right;\n    margin-top: 1em;\n  }\n}\n\n.eligibility-container {\n  margin-top: 1em;\n}\n\n.submit-container .summary {\n    margin-top: 1em;\n    margin-bottom: 1em;\n    text-align: center;\n}\n\n.submit-container .submit-button-row {\n  margin-top: 3em;\n}\n\n/* Small devices (PCs, 768px and up) */\n\n@media (min-width: 768px) {\n  .submit-container .summary {\n    margin-left: 20%;\n    margin-right: 20%;\n  }\n}\n\n.row.introduction {\n  text-align: center;\n}\n\n.summary.error {\n  color: red;\n}\n\nbutton.submit {\n  background: red;\n  color: white;\n  width: 100%;\n}\n\n.submission-pending {\n  text-align: center;\n  margin:3em;\n}\n\n.submission-response {\n  text-align: center;\n  margin:3em;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"form-container\">\n  <div *ngIf=\"!isSubmitting && !isSubmissionComplete\">\n    <form [formGroup]=\"applicationForm\">\n    <mat-horizontal-stepper linear=\"false\" #stepper=\"matHorizontalStepper\">\n\n      <!--\n        Eligibility check\n      -->\n\n      <mat-step label=\"Eligibility\" formGroupName=\"eligibility\">\n        <div class=\"eligibility-container\">\n          <div class=\"row introduction\">\n            <div class=\"col-sm-10 col-sm-offset-1\">\n              It will take you approximately one hour to fill in the application form. You can go forwards and\n              backwards at any point to make changes. However, your work is <b>not</b> saved while you edit the\n              form. If you close your browser window or navigate away, you'll loose your answers. Alternatively,\n              you can prepare your answers using your favorite text editor and then copy-paste into the form.\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-2\">\n              <mat-checkbox formControlName=\"isResident\" name=\"isResident\"\n                            matTooltip=\"Note: you can be resident without being an Indian or UK national\">\n                I am resident in the UK or India\n              </mat-checkbox>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-2\">\n              <mat-checkbox formControlName=\"hasPhD\" name=\"hasPhD\">\n                I have a PhD or equivalent qualification\n              </mat-checkbox>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-2\">\n              <mat-checkbox formControlName=\"hasRecentPhD\" name=\"hasRecentPhD\">\n                I have obtained my PhD less than xx years ago\n              </mat-checkbox>\n            </div>\n          </div>\n        </div>\n        <div class=\"row button-row\">\n          <div class=\"col-sm-12\">\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </div>\n      </mat-step>\n\n      <!--\n        Person Detail\n      -->\n\n      <mat-step label=\"Person\" formGroupName=\"person\">\n        <div class=\"person-container\">\n          <div class=\"row\">\n            <div class=\"col-sm-2\">\n              <mat-form-field><input formControlName=\"title\" matInput placeholder=\"Title\" name=\"title\"></mat-form-field>\n            </div>\n            <div class=\"col-sm-5\">\n              <mat-form-field><input formControlName=\"givenName\" matInput placeholder=\"Given Name\" name=\"givenName\"></mat-form-field>\n            </div>\n            <div class=\"col-sm-5\">\n              <mat-form-field><input matInput placeholder=\"Family Name\" name=\"familyName\" formControlName=\"familyName\"></mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <mat-form-field>\n                <mat-select placeholder=\"Gender\" formControlName=\"gender\" name=\"gender\"\n                            matTooltip=\"for statistical purposes. This will not affect choice of participants\">\n                  <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\n                    {{ gender.viewValue }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col-sm-6\">\n              <mat-form-field>\n                <mat-select placeholder=\"English\" formControlName=\"englishAbility\" name=\"englishAbility\"\n                            matTooltip=\"The workshop will take place in English as standard. Please indicate your\n                            ability to work and communicate in English (Note, translators may be provided if necessary)\">\n                  <mat-option *ngFor=\"let langCap of languageCapabilities\" [value]=\"langCap.value\">\n                    {{ langCap.viewValue }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <!--<mat-divider></mat-divider>-->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <mat-form-field><input formControlName=\"position\" matInput placeholder=\"Position\" name=\"position\"></mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <mat-form-field><input formControlName=\"institution\" matInput placeholder=\"Institution\" name=\"institution\"></mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-9\">\n              <mat-form-field><input formControlName=\"postalAddress\" matInput placeholder=\"Postal Address\" name=\"postalAddress\"></mat-form-field>\n            </div>\n            <div class=\"col-sm-3\">\n              <mat-form-field>\n                <mat-select placeholder=\"Country\" formControlName=\"country\" name=\"country\">\n                  <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\n                    {{ country.viewValue }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <mat-form-field><input formControlName=\"email\" matInput placeholder=\"eMail\" name=\"email\"></mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <mat-form-field><input formControlName=\"phoneNumber\" matInput placeholder=\"Phone number\" name=\"phoneNumber\"></mat-form-field>\n            </div>\n          </div>\n\n          <!--<mat-divider></mat-divider>-->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <mat-form-field>\n                <textarea matInput placeholder=\"Short Bio (max. 300 words)\"\n                          formControlName=\"bio\" name=\"bio\"\n                          matTextareaAutosize matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"20\"\n                          matTooltip=\"academic career, publications, talks, markers of esteem,\n                          and any other relevant information\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row button-row\">\n            <div class=\"col-sm-12\">\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </div>\n        </div>\n      </mat-step>\n\n      <!--\n        Application\n      -->\n\n      <mat-step label=\"Application\" formGroupName=\"application\">\n        <div class=\"application-container\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 description\">Please give a summary of your area of research</div>\n            <div class=\"col-lg-8\">\n              <mat-form-field>\n                  <textarea matInput matTextareaAutosize name=\"research\"\n                            formControlName=\"research\"\n                            matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"20\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-4 description\">\n              Please describe your motivation for attending the workshop and\n              how the workshop matches your professional development needs\n            </div>\n            <div class=\"col-lg-8\">\n              <mat-form-field>\n                  <textarea matInput matTextareaAutosize name=\"motivation\"\n                            formControlName=\"motivation\"\n                            matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"20\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-4 description\">\n              Please describe the expected impact of your participation on your personal and\n              professional development, including your ability to work internationally\n            </div>\n            <div class=\"col-lg-8\">\n              <mat-form-field>\n                  <textarea matInput matTextareaAutosize name=\"development\"\n                            formControlName=\"development\"\n                            matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"20\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-4 description\">\n              Please indicate how you will disseminate the outcomes of the workshops and\n              the new knowledge/skills you have acquired\n            </div>\n            <div class=\"col-lg-8\">\n              <mat-form-field>\n                  <textarea matInput matTextareaAutosize name=\"dissemination\"\n                            formControlName=\"dissemination\"\n                            matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"20\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-4 description\">\n              Please use this space to give any additional information that you feel\n              is relevant for the application\n            </div>\n            <div class=\"col-lg-8\">\n              <mat-form-field>\n                  <textarea matInput matTextareaAutosize name=\"comment\"\n                            formControlName=\"comment\"\n                            matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"20\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row button-row\">\n            <div class=\"col-sm-12\">\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </div>\n        </div>\n\n      </mat-step>\n      <mat-step label=\"Submit\">\n        <div class=\"submit-container\">\n          <div *ngIf=\"!isFormValid()\">\n            <h2>Not quite ...</h2>\n            <div *ngIf=\"!isEligible()\" class=\"summary error\">\n              You don't seem to be eligible. Only applications from the UK or India with a recent PhD (or equivalent)\n              can apply for a fully funded place. If that is not true for you and you like to attend regardless, please\n              contact the organisers by email.\n            </div>\n\n            <div *ngIf=\"!isPersonDetailComplete()\" class=\"summary error\">\n              Your personal details are incomplete. Please fill in all required fields and check that you\n              have provided a valid and correct eMail address.\n            </div>\n\n            <div *ngIf=\"!isApplicationComplete()\" class=\"summary error\">\n              You have not provided required information in the application section. Please check that you have\n              completed all required fields.\n            </div>\n          </div>\n          <div *ngIf=\"isFormValid()\">\n            <h2>Almost done ...</h2>\n            <div class=\"summary\">\n              All looks good. Please press <b>submit</b> after you have reviewed your application one last time.\n              You will not be able to change your application after you have submitted.\n            </div>\n            <div class=\"summary\">\n              You will receive an automated eMail confirming receipt of your application shortly after we\n              have received it. You might want to take a copy of your answers before pressing submit for your reference.\n            </div>\n\n            <div class=\"row justify-content-sm-center submit-button-row\">\n              <div class=\"col-sm-6 col-sm-offset-3\">\n                <button mat-button class=\"submit\" (click)=\"onSubmit()\">Submit ...</button>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n    </form>\n  </div>\n\n  <!-- Submission in progress -->\n\n  <div *ngIf=\"isSubmitting\" class=\"submission-pending\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6\">\n        <mat-spinner></mat-spinner>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-8 message\">\n        Processing submission ...\n      </div>\n    </div>\n  </div>\n\n  <!-- Submission done -->\n  <div *ngIf=\"isSubmissionComplete\" class=\"submission-response\">\n    <div *ngIf=\"submissionResult === 'success'\" class=\"success\">\n      <h2>Submission received</h2>\n      <p>Thanks - We have received your application and will be in touch in due course.</p>\n    </div>\n    <div *ngIf=\"submissionResult === 'resubmission'\" class=\"resubmission\">\n      <h2>Resubmission</h2>\n      <p>You have submitted a previous application. Please contact the organisers to update or revoke your application.</p>\n    </div>\n    <div *ngIf=\"submissionResult === 'error'\" class=\"error\">\n      <h2>Ups ....</h2>\n      <p>Something went wrong! We are unlikely to have received your application. Please contact the organisers if the error persists.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_service__ = __webpack_require__("./src/app/application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(applicationService, fb) {
        this.applicationService = applicationService;
        this.fb = fb;
        this.genders = [
            { value: 'male', viewValue: 'Male' },
            { value: 'female', viewValue: 'Female' },
            { value: 'unspecified', viewValue: 'Unspecified' }
        ];
        this.languageCapabilities = [
            { value: 'native', viewValue: 'Native speaker' },
            { value: 'excellent', viewValue: 'Excellent' },
            { value: 'good', viewValue: 'Good' },
            { value: 'support', viewValue: 'Need support' },
        ];
        this.countries = [
            { value: 'uk', viewValue: 'United Kingdom' },
            { value: 'in', viewValue: 'India' }
        ];
        this.isSubmitting = false;
        this.isSubmissionComplete = false;
        this.createForm();
    }
    AppComponent.prototype.createForm = function () {
        this.applicationForm = this.fb.group({
            eligibility: this.fb.group({
                isResident: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                hasPhD: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                hasRecentPhD: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            }),
            person: this.fb.group({
                title: '',
                givenName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                familyName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                gender: '',
                englishAbility: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                position: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                institution: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                postalAddress: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email],
                phoneNumber: '',
                bio: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            }),
            application: this.fb.group({
                research: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                motivation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                development: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                dissemination: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                comment: ''
            })
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        this.applicationService.submit(this.applicationForm.value)
            .subscribe(function (success) { return _this.onSubmissionSuccess(success); }, function (error) { return _this.onSubmissionError(error); });
    };
    AppComponent.prototype.onSubmissionSuccess = function (response) {
        this.isSubmissionComplete = true;
        this.isSubmitting = false;
        this.submissionResult = response.status;
    };
    AppComponent.prototype.onSubmissionError = function (response) {
        this.isSubmissionComplete = true;
        this.isSubmitting = false;
        this.submissionResult = 'error';
    };
    AppComponent.prototype.isEligible = function () {
        return this.applicationForm.get('eligibility').status === 'VALID';
    };
    AppComponent.prototype.isPersonDetailComplete = function () {
        return this.applicationForm.get('person').status === 'VALID';
    };
    AppComponent.prototype.isApplicationComplete = function () {
        return this.applicationForm.get('application').status === 'VALID';
    };
    AppComponent.prototype.isFormValid = function () {
        return this.applicationForm.status === 'VALID';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__application_service__["a" /* ApplicationService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_stepper__ = __webpack_require__("./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__application_service__ = __webpack_require__("./src/app/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_stepper__["a" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_divider__["a" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_slide_toggle__["a" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__application_service__["a" /* ApplicationService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/application.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ApplicationService = /** @class */ (function () {
    // private applicationsUrl = 'http://localhost:8888/submit';  // URL to web api
    function ApplicationService(http) {
        this.http = http;
        this.applicationsUrl = 'https://xabmfmm6of.execute-api.eu-west-1.amazonaws.com/prod/submit'; // URL to web api
    }
    /**
     * Post new application to API.
     * Uses POST HTTP method and sends application data as json
     * @param application - Application that should be submitted
     */
    ApplicationService.prototype.submit = function (application) {
        console.log(JSON.stringify(application));
        return this.http.post(this.applicationsUrl, application, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (response) { return console.log("Application submission - " + response.status); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('submit', application.person.email)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue by returning the response structure
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ApplicationService.prototype.handleError = function (operation, applicationId) {
        if (operation === void 0) { operation = 'operation'; }
        return function (err) {
            // TODO: send the error to remote logging infrastructure
            console.error(err); // log to console instead
            if (err.error.applicationId && err.error.status) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(err.error);
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])({
                    applicationId: applicationId,
                    status: 'error'
                });
            }
        };
    };
    ApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map