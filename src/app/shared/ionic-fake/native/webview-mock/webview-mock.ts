import { IonicNativePlugin } from '@ionic-native/core';

export  class WebViewMock extends IonicNativePlugin {

    convertFileSrc: (url: string) => string;
}
