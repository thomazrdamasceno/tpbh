import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Provider } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';



export const mockImports: Provider[] = [

    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterTestingModule

];
