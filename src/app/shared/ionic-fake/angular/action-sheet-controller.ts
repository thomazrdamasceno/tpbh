import { ActionSheetMock } from './action-sheet';
import { BaseMock } from '../base.mock';

const METHODS: string[] = [
    'create'
];

export class ActionSheetControllerMock extends BaseMock {

    constructor(actionSheet?: ActionSheetMock) {
        super('ActionSheet', METHODS);
        this.spyObj.create.and.returnValue(actionSheet || new ActionSheetMock());
    }


}
