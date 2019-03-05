import {
    Component, OnInit, AfterViewInit, ElementRef, Renderer, ViewEncapsulation,
    ChangeDetectionStrategy,
    Renderer2
} from '@angular/core';

import { PhotoswipeDefaultSkin, PhotoswipeStyles } from './styles';
import { PhotoswipeTemplate } from './template';
import { ModalController } from '@ionic/angular';
declare const PhotoSwipe: any;
declare const PhotoSwipeUI_Default: any;


@Component({
    selector: 'heilbaum-photoswipe',
    styles: [PhotoswipeStyles, PhotoswipeDefaultSkin],
    template: PhotoswipeTemplate,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HeilbaumPhotoswipeComponent implements OnInit, AfterViewInit {

    /**
     * Constructor of class
     *
     * @param elementRef
     * @param navParams
     * @param renderer
     * @param viewCtrl
     */
    constructor(private elementRef: ElementRef, private renderer: Renderer, private modalController: ModalController ) {
        this.id = ++heilBaumPhotoSwipeId;
        this.heilBaumPhotoSwipeId = 'heilbaum-photoswiper-' + this.id;

        this.renderer.setElementClass(this.elementRef.nativeElement, this.heilBaumPhotoSwipeId, true);
    }

    PhotoSwipeUI_Default: any;
    private id: number;
    private heilBaumPhotoSwipeId: string;

     items = [];
    options: Object = {};

    public gallery: any = null;

    ngOnInit() {

    }



    /**
     * Angular 2 Lifecycle Hook
     */
    ngAfterViewInit() {
        const pswpElement: HTMLElement = this.elementRef.nativeElement.firstElementChild;

        this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.items, this.options);



        this.gallery.init();

        this.gallery.listen('destroy', () => {
            console.log('O Component foi fechado');
           this.modalController.dismiss();
        });
    }

}

let heilBaumPhotoSwipeId = -1;
