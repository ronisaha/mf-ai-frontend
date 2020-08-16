import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-load-details',
  templateUrl: './load-details.component.html',
  styleUrls: ['./load-details.component.scss']
})
export class LoadDetailsComponent implements OnInit {
  @Input() data: object;

  constructor() { }

  ngOnInit(): void {
  }

}
