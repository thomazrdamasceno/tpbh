import {ToastMock}  from './toast';

export class ToastControllerMock {
    public static instance(toast?: ToastMock): any {

        const instance = jasmine.createSpyObj('ToastController', ['create']);
        instance.create.and.returnValue(toast || ToastMock.instance());

        return instance;
    }
}
