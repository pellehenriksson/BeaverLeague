"use strict";
function parameters(element) {
    var value = element.getAttribute("data-parameters");
    if (value) {
        return JSON.parse(value);
    }
    return null;
}
exports.parameters = parameters;
//# sourceMappingURL=parameters.js.map