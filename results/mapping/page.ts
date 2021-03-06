import {diffElementMapper} from "./diffElement";
import {mappingOptions} from "../mapping";
export class Page {
    public id: string;
    public name: string;
    public url: string;
    public elementsWithStyleChangesCount: KnockoutComputed<number>;
    public elementsWithElementChangesCount: KnockoutComputed<number>;
    public elementsToTest: diffElementInterface[] = [];
    constructor(
        data:IPageSource
    ){
        ko.mapping.fromJS(data, mappingOptions, this);
        this.elementsWithStyleChangesCount = ko.computed(()=>{
            let count = 0;
            for(let diffElement of this.elementsToTest){
                if(!!diffElement.styleDiffs) {
                    count += diffElement.styleDiffsCount();
                }
            }
            return count;
        });
        this.elementsWithElementChangesCount = ko.computed(()=>{
            let count = 0;
            for(let diffElement of this.elementsToTest){
                if(!!diffElement.elementDiffs) {
                    count += diffElement.elementDiffs.length;
                }
            }
            return count;
        });
    }
}


interface IPageSource {
    id: string;
    name: string;
    url: string;
    elementsToTest: diffElementInterface[];
}

export const pageMapper = {
    create: function (options: KnockoutMappingCreateOptions) {
        return new Page(options.data)
    }
}