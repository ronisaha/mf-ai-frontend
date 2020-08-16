import {Component} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {LoanDataProviderService} from './loan-data-provider.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ai-tool';
  response = null;
  loanId = 2908;

  constructor(private spinner: NgxSpinnerService, private loanProvider: LoanDataProviderService) {
  }
  // tslint:disable-next-line:typedef
  public loadDetails() {
    this.spinner.show();
    this.loanProvider.get(this.loanId)
      .subscribe((data) => {
        this.response = data;
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
      });
    console.log('ok');
  }

  // tslint:disable-next-line:typedef
}
