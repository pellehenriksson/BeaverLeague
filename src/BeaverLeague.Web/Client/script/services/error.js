"use strict";
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.reportError = function (error) {
        alert(error.message);
    };
    ErrorHandler.prototype.reportMessage = function (message) {
        alert(message);
    };
    return ErrorHandler;
}());
exports.errorHandler = new ErrorHandler();
//# sourceMappingURL=error.js.map