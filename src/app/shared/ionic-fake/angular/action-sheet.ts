import { BaseMock } from '../base.mock';


const METHODS: string[] = [
    'present',
    'dismiss'
];

export class ActionSheetMock extends BaseMock {

    constructor(actionSheet?: ActionSheetMock) {
        super('ActionSheet', METHODS);

        this.spyObj.present.and.returnValue(Promise.resolve());
        this.spyObj.dismiss.and.returnValue(Promise.resolve());
    }


}
