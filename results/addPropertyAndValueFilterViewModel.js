define(["require", "exports", "./propertyAndValueFilter"], function (require, exports, propertyAndValueFilter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AddPropertyAndValueFilterViewModel {
        constructor($addPropertyAndValueFilter) {
            this.$addPropertyAndValueFilter = $addPropertyAndValueFilter;
            this.propertyName = ko.observable('');
            this.isPropertyNameRegExp = ko.observable();
            this.value = ko.observable('');
            this.isValueRegExp = ko.observable();
            this.valueTypeString = ko.observable('');
            this.propertyAndValueFilters = ko.observableArray();
            this.add = () => {
                this.propertyAndValueFilters.push(new propertyAndValueFilter_1.PropertyAndValueFilter(this.propertyName(), this.isPropertyNameRegExp() == "true", this.value(), this.isValueRegExp() == "true", this.valueType(), `Filter where <mark>${this.propertyName()}</mark> of <mark>${this.valueTypeString()}</mark> is ${this.value()}`));
            };
            this.openDialog = () => {
                this.$addPropertyAndValueFilter.modal('show');
            };
            this.valueType = ko.computed(() => {
                switch (this.valueTypeString()) {
                    case 'original':
                        return propertyAndValueFilter_1.valueType.original;
                    case 'comparand':
                        return propertyAndValueFilter_1.valueType.comparand;
                    case 'either':
                        return propertyAndValueFilter_1.valueType.either;
                    default:
                        return propertyAndValueFilter_1.valueType.original;
                }
            });
        }
    }
    exports.AddPropertyAndValueFilterViewModel = AddPropertyAndValueFilterViewModel;
});
//# sourceMappingURL=addPropertyAndValueFilterViewModel.js.map