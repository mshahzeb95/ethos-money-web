import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;
  success: string = '../../assets/sign-up-success.png';
  submitted = false;
  showNotification: boolean = true;
  notificationName: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      preferredName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }
  get f() {
    return this.signupForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    // Logging field values to console
    console.log('Preferred Name: ' + this.signupForm.value.preferredName);
    console.log('Email Address: ' + this.signupForm.value.emailAddress);
    this.showNotification = false;
    this.notificationName = this.signupForm.value.preferredName;
  }
}
