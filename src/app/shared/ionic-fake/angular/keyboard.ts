

export class IonKeyboardMock {
    public static instance(): any {
        const instance = jasmine.createSpyObj('Keyboard', [
            'close',
            'didHide',
            'didShow',
            'eventsAvailable',
            'hasFocusedTextInput',
            'isOpen',
            'onClose',
            'willHide',
            'willShow'
        ]);

        instance.isOpen.and.returnValue(false);

        return instance;
    }
}
