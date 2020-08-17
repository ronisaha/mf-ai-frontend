import {Component, Input, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ModelConsumerService} from '../model-consumer.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  @Input() data: any;
  pending: boolean;

  prediction = ['Good', 'Bad'];

  result: {type: string, score: string};
  type = '';
  score = '';

  constructor(private spinner: NgxSpinnerService, private model: ModelConsumerService) {
  }

  ngOnInit(): void {
    this.pending = true;
  }

  public predict(): void {
    this.spinner.show();
    this.pending = true;
    this.model.predict(this.data).subscribe(data => {
      this.result = data;
      this.pending = false;
      this.spinner.hide();
    },
      error => {
          this.spinner.hide();
      });
  }

  reset(): void {
    this.pending = true;
  }
}
