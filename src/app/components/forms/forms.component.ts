import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  exampleForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  colorControl = new FormControl('primary');

  constructor(private fb: FormBuilder) {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      select: ['', Validators.required],
      text: ['', Validators.required],
      color: this.colorControl
    });
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return "This field is required.";
  }

}
