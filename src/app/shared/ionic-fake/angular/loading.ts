import { BaseMock } from '../base.mock';

const METHODS = ['present', 'dismiss', 'setContent', 'setSpinner'];
export class LoadingMock extends BaseMock {
    constructor() {
        super('Loading', METHODS);
        this.spyObj.present.and.returnValue(Promise.resolve());
    }


}
