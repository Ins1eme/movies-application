import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviewForm: FormGroup
  @Output() onSubmitForm: EventEmitter<FormGroup> = new EventEmitter();
  @Input() reviewCount

  constructor() { }

  ngOnInit() {
    this.reviewForm = new FormGroup({
      comment: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required])
    })
  }

  onSubmit() {
    this.onSubmitForm.emit(this.reviewForm)
  }

}
