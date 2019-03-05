import { NgModule } from '@angular/core';

import { HeilbaumPhotoswipeComponent } from './components/heilbaum-photoswipe';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        HeilbaumPhotoswipeComponent
    ],
    entryComponents: [
        HeilbaumPhotoswipeComponent
    ],
    exports: [
        HeilbaumPhotoswipeComponent
    ],
    imports: [
        IonicModule
    ],

})
export class HeilbaumPhotoswipeModule {}
