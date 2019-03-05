import { Component, OnInit, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { Options } from 'selenium-webdriver/edge';
import { SimpleChooseItem } from './simple-choose.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-simple-choose',
  templateUrl: './simple-choose.component.html',
  styleUrls: ['./simple-choose.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SimpleChooseComponent),
    multi: true
  }]
})
export class SimpleChooseComponent implements OnInit, ControlValueAccessor {

  @Input() options: Array<SimpleChooseItem> | Array<any>;


  selectedOption: any = '';

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() {

  }

  selectOption(item: SimpleChooseItem) {
    this.selectedOption = item.value;
    this.onChange(item.value);
    this.onTouched(item.value);
  }


  // From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.selectedOption) {
          this.selectedOption = value;
      }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
     this.onChange = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
     this.onTouched = fn;
  }

}
