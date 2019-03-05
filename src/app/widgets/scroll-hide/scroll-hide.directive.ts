import {DomController, IonContent } from '@ionic/angular';
import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[scrollHide]'
})
export class ScrollHideDirective {

    @Input('scrollHide') config: ScrollHideConfig;
    @Input('scrollContent') scrollContent: IonContent;

    contentHeight: number;
    scrollHeight: number;
    lastScrollPosition: number;
    lastValue = 0;

    constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController) {

      this.renderer.setStyle(this.element.nativeElement, 'webkitTransition', 'top 200ms');
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.scrollContent && this.config) {
            this.scrollContent.ionScrollStart.subscribe(async (ev) => {
                const el = await this.scrollContent.getScrollElement();
                this.contentHeight = el.offsetHeight;
                this.scrollHeight = el.scrollHeight;
                if (this.config.maxValue === undefined) {
                    this.config.maxValue = this.element.nativeElement.offsetHeight;
                }
                this.lastScrollPosition = el.scrollTop;
            });
            this.scrollContent.ionScroll.subscribe((ev) => this.adjustElementOnScroll(ev));
            this.scrollContent.ionScrollEnd.subscribe((ev) => this.adjustElementOnScroll(ev));
        }
    }

    private adjustElementOnScroll(ev) {
        if (ev) {
            this.domCtrl.write(async () => {
                const el = await this.scrollContent.getScrollElement();
                const scrollTop: number = el.scrollTop > 0 ? el.scrollTop : 0;
                const scrolldiff: number = scrollTop - this.lastScrollPosition;
                this.lastScrollPosition = scrollTop;
                let newValue = this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, this.config.maxValue));
                this.renderer.setStyle(this.element.nativeElement, this.config.cssProperty, `-${newValue}px`);
                this.lastValue = newValue;
            });
        }
    }
}
export interface ScrollHideConfig {
    cssProperty: string;
    maxValue: number;
}
