import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    author: new FormControl(null, [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }
  submit() {
    console.log('submoit')
  }
}
