import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-query-display',
  templateUrl: './query-display.component.html',
  styleUrls: ['./query-display.component.css']
})
export class QueryDisplayComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
