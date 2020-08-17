import {Component, ViewChild} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {LoanDataProviderService} from './loan-data-provider.service';
import {catchError} from 'rxjs/operators';
import {PredictionComponent} from './prediction/prediction.component';
import {MatDialog} from '@angular/material/dialog';
import {NotFoundDialogComponent} from './not-found-dialog/not-found-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ai-tool';
  response = null;
  @ViewChild(PredictionComponent) child: PredictionComponent;
  loanId = null;

  constructor(private spinner: NgxSpinnerService, private loanProvider: LoanDataProviderService, private dialog: MatDialog) {
  }

  public loadDetails(): void {
    this.response = null;
    this.child.reset();

    if (this.loanId === '' || this.loanId === null) {
      return;
    }

    this.spinner.show();
    this.loanProvider.get(this.loanId)
      .subscribe((data) => {
        this.response = data;
        this.spinner.hide();
      }, err => {
        this.dialog.open(NotFoundDialogComponent);
        this.spinner.hide();
      });
  }

  // tslint:disable-next-line:typedef
}
