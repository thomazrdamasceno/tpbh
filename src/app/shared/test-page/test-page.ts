import { ComponentFixture } from '@angular/core/testing';

export class TestPage<T> {


    constructor(private fixture: ComponentFixture<T>) {

    }

    public query<T>(selector: string): T {
        return this.fixture.debugElement.nativeElement.querySelector(selector);
    }

    public queryAll<T>(selector: string): T[] {
        return this.fixture.debugElement.nativeElement.querySelectorAll(selector);
    }

}
