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

  prediction = ['Bad', 'Good'];

  type = 'Good';
  score = '';

  constructor(private spinner: NgxSpinnerService, private model: ModelConsumerService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public predict() {
    this.spinner.show();
    this.model.predict(this.data).subscribe(data => {
      this.type = this.prediction[parseInt(data.prediction, 10)];
      this.score = data['score_' + data.prediction];
    },
      error => {
          this.spinner.hide();
          this.reset();
      });
  }

  reset() {
    console.log('reset');
  }
}
