import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NpsComponent } from './nps/nps.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { FavoriteToggleComponent } from './favorite-toggle/favorite-toggle.component';
import { NextStepButtonComponent } from './next-step-button/next-step-button.component';
import { HelpPageButtonComponent } from './help-page-button/help-page-button.component';
import { SimpleChooseComponent } from './simple-choose/simple-choose.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ImageSelectComponent } from './image-select/image-select.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ScrollHideDirective } from './scroll-hide/scroll-hide.directive';
import { ProductCardItemComponent } from './product-card-item/product-card-item.component';
import { VarDirective } from '../lazy-widgets/var/var.directive';
import { ShareAppComponent } from './share-app/share-app.component';
import { ProductSlideItemComponent } from './product-slide-item/product-slide-item.component';
import { ProductThumbItemComponent } from './product-thumb-item/product-thumb-item.component';
import { CompileAttribute } from './html-compiler/html-compile';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  entryComponents:[ShareAppComponent],
  declarations: [
    VarDirective,
    ScrollHideDirective,
    StarRatingComponent,
    NpsComponent,
    DefaultHeaderComponent,
    FavoriteToggleComponent,
    NextStepButtonComponent,
    HelpPageButtonComponent,
    SimpleChooseComponent,
    SpinnerComponent,
    ImageSelectComponent,
    ProductCardItemComponent,
    ProgressBarComponent,
    ShareAppComponent,
    ProductSlideItemComponent,
    ProductThumbItemComponent,
    CompileAttribute
  ],
  exports: [
    ScrollHideDirective,
    IonicModule,
    VarDirective,
    CommonModule,
    StarRatingComponent,
    NpsComponent,
    DefaultHeaderComponent,
    FavoriteToggleComponent,
    NextStepButtonComponent,
    HelpPageButtonComponent,
    SimpleChooseComponent,
    SpinnerComponent,
    ImageSelectComponent,
    ProgressBarComponent,
    ProductCardItemComponent,
    ShareAppComponent,
    CompileAttribute,
    ProductThumbItemComponent
  ]
})
export class WidgetsModule { }
