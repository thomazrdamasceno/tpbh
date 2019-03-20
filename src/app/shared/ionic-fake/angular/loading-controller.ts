import {LoadingMock} from './loading';

export class LoadingControllerMock {
    public static instance(loading?: LoadingMock) {

        const instance = jasmine.createSpyObj('LoadingController', ['create']);
        instance.create.and.returnValue(loading ||  new LoadingMock());
        return instance;
    }
}
