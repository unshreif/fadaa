import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css'
})
export class Newsletter {
  newsletterForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.newsletterForm.invalid) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // Here you would typically make an HTTP request to your backend
    setTimeout(() => {
      console.log('Submitting form with:', this.newsletterForm.value);
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.newsletterForm.reset();
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }, 1000);
  }
}
