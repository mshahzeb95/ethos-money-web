import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  imageSrc1: String = '../../assets/ethos-footer-logo.png';
  imageSrc2: String = '../../assets/ethos-footer-logo-name.png';
  success: string = '../../assets/sign-up-success.png';

  footerForm!: FormGroup;
  submitted = false;
  showNotification = true;
  notificationName: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.footerForm = this.formBuilder.group({
      preferredName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.footerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.footerForm.invalid) {
      return;
    }

    // Logging field values to console
    console.log('Preferred Name: ' + this.footerForm.value.preferredName);
    console.log('Email Address: ' + this.footerForm.value.emailAddress);
    this.showNotification = false;
    this.notificationName = this.footerForm.value.preferredName;
  }
}
