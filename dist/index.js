"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function MockProvider(options) {
    var fakeProvider = Array.isArray(options.methods)
        ? createFakeProviderWithMethods(options.methods)
        : {};
    return {
        provide: options.provider,
        useValue: __assign({}, fakeProvider, options.overwrite)
    };
}
exports.MockProvider = MockProvider;
function createFakeProviderWithMethods(methods) {
    return methods.reduce(function (memo, curr) {
        return __assign({}, memo, (_a = {}, _a[curr] = function () { }, _a));
        var _a;
    }, {});
}
