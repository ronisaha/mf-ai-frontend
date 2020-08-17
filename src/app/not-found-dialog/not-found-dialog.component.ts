import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-dialog',
  template: `
    <h1 mat-dialog-title>Loan not found</h1>
    <div mat-dialog-content>No data found for given loan ID. Please try with different loan ID.</div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
  styles: [
  ]
})
export class NotFoundDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
