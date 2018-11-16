import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { MyGreeterService } from './services/my-greeter.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreeterComponent implements OnChanges {
  @Input() name: string;

  public result: string;

  public formGroup = new FormGroup({
    input: new FormControl('')
  });

  constructor(private myGreeterService: MyGreeterService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges() {
    if (this.name) {
      this.inputCtrl.patchValue(this.name);
      this.onGreet();
      this.changeDetectorRef.detectChanges();
    }
  }

  public onGreet(): void {
    this.result = this.myGreeterService.greet(this.inputCtrl.value);
    this.changeDetectorRef.detectChanges();
  }

  public get inputCtrl(): FormControl {
    return this.formGroup.get('input') as FormControl;
  }
}
