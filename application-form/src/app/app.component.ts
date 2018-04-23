import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Application, SubmissionResponse} from './application';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'unspecified', viewValue: 'Unspecified'}
  ];

  languageCapabilities = [
    {value: 'native', viewValue: 'Native speaker'},
    {value: 'excellent', viewValue: 'Excellent'},
    {value: 'good', viewValue: 'Good'},
    {value: 'support', viewValue: 'Need support'},
  ];

  countries = [
    {value: 'uk', viewValue: 'United Kingdom'},
    {value: 'in', viewValue: 'India'}
  ];

  applicationForm: FormGroup;

  isSubmitting = false;
  isSubmissionComplete = false;
  submissionResult: string;

  constructor (private applicationService: ApplicationService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.applicationForm = this.fb.group({
      eligibility: this.fb.group({
        isResident: ['', Validators.required ],
        hasPhD: ['', Validators.required ],
        hasRecentPhD: ['', Validators.required ]
      }),
      person: this.fb.group({
        title: '',
        givenName: ['', Validators.required ],
        familyName: ['', Validators.required ],
        gender: '',
        englishAbility: ['', Validators.required ],
        position: ['', Validators.required ],
        institution: ['', Validators.required ],
        postalAddress: ['', Validators.required ],
        country: ['', Validators.required ],
        email: ['', Validators.email ],
        phoneNumber: '',
        bio: ['', Validators.required ]
      }),
      application: this.fb.group({
        research: ['', Validators.required ],
        motivation: ['', Validators.required ],
        development: ['', Validators.required ],
        dissemination: ['', Validators.required ],
        comment: ''
      })
    });
  }

  onSubmit() {
    this.isSubmitting = true;
    this.applicationService.submit(this.applicationForm.value as Application)
      .subscribe(
        success  => this.onSubmissionSuccess(success),
        error => this.onSubmissionError(error)
      );
  }

  onSubmissionSuccess(response: SubmissionResponse) {
    this.isSubmissionComplete = true;
    this.isSubmitting = false;
    this.submissionResult = response.status;
  }

  onSubmissionError(response: SubmissionResponse) {
    this.isSubmissionComplete = true;
    this.isSubmitting = false;
    this.submissionResult = 'error';
  }

  isEligible() {
    return this.applicationForm.get('eligibility').status === 'VALID';
  }

  isPersonDetailComplete() {
    return this.applicationForm.get('person').status === 'VALID';
  }

  isApplicationComplete() {
    return this.applicationForm.get('application').status === 'VALID';
  }

  isFormValid() {
    return this.applicationForm.status === 'VALID';
  }
}
