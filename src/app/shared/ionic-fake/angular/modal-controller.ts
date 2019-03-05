import {ModalMock}  from './modal';

export class ModalControllerMock {
    public static instance(modalMock?: ModalMock): any {
        const instance = jasmine.createSpyObj('ModalController', ['create']);
        instance.create.and.returnValue(modalMock || ModalMock.instance());

        return instance;
    }
}
