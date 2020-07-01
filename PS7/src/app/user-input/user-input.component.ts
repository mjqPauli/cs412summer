import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  zipcode: FormControl = new FormControl('',[Validators.required, Validators.minLength(1)]);
  data: any;
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  // tslint:disable-next-line:typedef
  transmit(){
    this.emitter.emit(this.zipcode.value);
  }
  ngOnInit(): void {
  }

}
