import {Directive, ElementRef, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as moment from 'moment';

declare  var $:any;

export const CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatetimePickerDirective),
  multi: true
};

@Directive({
  selector: '[datetime-picker]',
  host: {'(blur)': 'onTouched($event)'},
  providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class DatetimePickerDirective implements ControlValueAccessor {
  private element: HTMLInputElement;
  private innerValue: string;

  @Input('changeMonth') changeMonth:boolean = true;
  @Input('changeYear') changeYear:boolean = true;
  @Input('format') format:string = 'mm/dd/yyyy hh:ii';

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  ngAfterViewInit() {
    $(this.el.nativeElement.parentElement).datetimepicker({
      changeMonth: true,
      changeYear: true,
      format: this.format
    }).on('change', e => this.onChange(e.target.value));
  }

  public onChange: any = (_) => { /*Empty*/ }
  public onTouched: any = () => { /*Empty*/ }

  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  writeValue(val: string) : void {
    this.element.value = val ? moment(val).format('MM/DD/YYYY HH:mm') : '';
    this.innerValue = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}