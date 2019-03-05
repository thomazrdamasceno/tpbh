import { AlertMock } from './alert';
import { BaseMock } from '../base.mock';

const METHODS = ['create'];

export class AlertControllerMock extends BaseMock {

    constructor(alertMock?: AlertMock) {
        super('AlertController', METHODS);
        this.spyObj.create.and.returnValue(alertMock || new AlertMock());
    }


}
