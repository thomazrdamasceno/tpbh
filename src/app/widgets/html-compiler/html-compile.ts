import {
    Component,
    Input,
    Injectable,
    OnInit,
    OnChanges,
    SimpleChanges,
    Type,
    ModuleWithProviders,
    NgModule,
    Compiler,
    NgModuleFactory,
    Inject,
} from '@angular/core';

import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';

let SingletonDefaultModule: NgModule;

import  cloneDeep  from 'lodash';
//import { CorifeusMaterialModule } from 'corifeus-web-material';



//const cache : any = {};

@Component({
    selector: '[p3x-compile]',
    template: `
        <span *ngIf="html && html !== null && html.trim() !== '' && dynamicComponent  && dynamicModule">
        <ng-container *ngComponentOutlet="dynamicComponent;
                            ngModuleFactory: dynamicModule;"></ng-container>
        </span>
    `
})
@Injectable()
export class CompileAttribute implements OnInit, OnChanges{

    @Input('p3x-compile')
    html: string;

    @Input('p3x-compile-ctx')
    context:  any;

    @Input('p3x-compile-error-handler')
    errorHandler: (ex: any) => void = console.error;

    dynamicComponent: any;
    dynamicModule: NgModuleFactory<any> | any;

    @Input('p3x-compile-module')
    module:  NgModule;

    @Input('p3x-compile-imports')
    imports: Array<Type<any> | ModuleWithProviders | any[]>;

    @Input('p3x-compile-declarations')
    declarations: Array<Type<any>>;

    async update() {
        if (!this.html || this.html.trim() === '') {
//            this.container.clear();
            this.dynamicComponent = null;
            this.dynamicModule = null;
            return;
        }
        /*
                const cacheKey = this.html;

                if (Object.keys(cache).indexOf(cacheKey) > -1) {
                    return cache[cacheKey];
                }
        */
        try {
            this.dynamicComponent = this.createNewComponent(this.html, this.context);
            this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
//            cache[cacheKey] = this.dynamicComponent;
        } catch (e) {
            this.errorHandler(e);
        }
        /*
        await this.service.compile({
            template: this.html,
            container: this.container,
            context: this.context,
            imports: this.imports,
            module: this.module
        })
        */
    }

    private createComponentModule (componentType: any) {
        let module : NgModule = {};

        if (this.module) {
            module = cloneDeep(this.module);
        } else if (SingletonDefaultModule  && SingletonDefaultModule !== null) {
            module = cloneDeep(SingletonDefaultModule);
        }
        module.imports = module.imports || [];
        module.imports.push( CommonModule );
        if (this.imports) {
            module.imports = module.imports.concat(this.imports)
        }
        if (!module.declarations) {
            module.declarations = [
                componentType
            ];
        } else {
            module.declarations.push(componentType);
        }
        module.entryComponents = [
            componentType
        ];
        module.declarations = module.entryComponents.concat(this.declarations);
        @NgModule(module)
        class RuntimeComponentModule {
        }
        return RuntimeComponentModule;
    }


    private createNewComponent (html:string, context: any) {

        @Component({
            selector: 'dynamic-component',
            template: html
        })
        class DynamicComponent {
            context: any = context;
        }

        return DynamicComponent;
    }

    async ngOnInit() {
        this.update();
    }

    async ngOnChanges(changes: SimpleChanges) {
        //fixme only update with the required changes
        this.update();
    }

    constructor(
//        private container: ViewContainerRef,
//        private service: CompileService
    private compiler: Compiler,
   // @Inject('config') private config:CompileServiceConfig
    ) {
        
    }
}