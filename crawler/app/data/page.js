"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    constructor(id, name, path, elementsToTest, elementsToIgnore) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.elementsToTest = elementsToTest;
        this.elementsToIgnore = [];
        this.isProcessed = false;
        if (Array.isArray(elementsToIgnore) && elementsToIgnore.length > 0)
            this.elementsToIgnore = elementsToIgnore;
    }
}
exports.Page = Page;
//# sourceMappingURL=Page.js.map