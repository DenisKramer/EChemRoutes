export class Eligibility {

  // Eligibility
  isResident: boolean;
  hasPhD: boolean;
  hasRecentPhD: boolean;
}

export class Person {
  // Person
  title: string;
  givenName: string;
  familyName: string;
  gender: string;
  englishAbility: string;
  position: string;
  institution: string;
  postalAddress: string;
  country: string;
  email: string;
  phoneNumber: string;
  bio: string;
}

export class ApplicationDetail {
  // Application
  research: string;
  motivation: string;
  development: string;
  dissemination: string;
  comment: string;
}

export class Application {
  eligibility: Eligibility;
  person: Person;
  detail: ApplicationDetail;
}


export class SubmissionResponse {
  status: string;
  applicationId: string;
}
