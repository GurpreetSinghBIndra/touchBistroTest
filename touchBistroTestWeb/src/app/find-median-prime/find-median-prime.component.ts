import { Component, OnInit } from '@angular/core';
import { CallNodeAPIService } from '../call-node-api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-median-prime',
  templateUrl: './find-median-prime.component.html',
  styleUrls: ['./find-median-prime.component.scss'],
  providers: [CallNodeAPIService]
})
export class FindMedianPrimeComponent implements OnInit {

  private componentForm: FormGroup;

  constructor(private svc: CallNodeAPIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.componentForm = this.formBuilder.group({
      maxNumbPrime: new FormControl(null, Validators.required),
      medianPrime: new FormControl()
    });
  }

  findMedianPrime = (): void => {
    this.svc.findPrimeMedian(this.componentForm.get('maxNumbPrime').value).then((val: Array<number>) => {
      this.componentForm.get('medianPrime').setValue(val);
    });
  }
}
