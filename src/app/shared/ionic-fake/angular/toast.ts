export class ToastMock {
    public static instance(): any {
        const instance = jasmine.createSpyObj('Toast', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());

        return instance;
    }
}
