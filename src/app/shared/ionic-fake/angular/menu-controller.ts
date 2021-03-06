import {MenuMock} from './menu';

export class MenuControllerMock {
    public static instance(menu?: MenuMock): any {
        const m = menu || MenuMock.instance();
        const instance = jasmine.createSpyObj('MenuController', ['close', 'enable', 'get', 'getMenus', 'getOpen', 'isEnabled', 'isOpen', 'open', 'swipeEnable', 'toggle']);
        instance.close.and.returnValue(Promise.resolve());
        instance.enable.and.returnValue(m);
        instance.get.and.returnValue(m);
        instance.getMenus.and.returnValue([m]);
        instance.getOpen.and.returnValue(m);
        instance.isEnabled.and.returnValue(true);
        instance.isOpen.and.returnValue(false);
        instance.open.and.returnValue(Promise.resolve());
        instance.swipeEnable.and.returnValue(m);
        instance.toggle.and.returnValue(Promise.resolve());

        return instance;
    }
}
