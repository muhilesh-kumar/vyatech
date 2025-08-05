import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Mustache from 'mustache';

@Component({
  selector: 'app-root',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.scss']
})
export class RealComponent {
  finalHtml: SafeHtml = '';
  companyLogo: string = 'https://dashboard.vedna.in/assets/logo/vedna.jpg';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.data();
  }
  template(): string {
    return `
    <div class="container p-4" style="background-color: white; font-family: Arial, sans-serif; max-width: 800px; margin: auto; border: 1px solid #000;">
    <div style="padding: 15px;">
      <div class="row mb-4 align-items-center justify-content-between">
        <div class="col-auto text-start">
          <h2 class="mb-0"><strong>{{companyName}}</strong></h2>
          <h3 class="mt-2"><strong>{{companyType}}</strong></h3>
          <h3 class="mt-0"><strong>{{pvd}}</strong></h3>
        </div>
        <div class="col-auto mt-3 mt-md-0">
           <img 
    class="company-logo" 
    src="{{companyLogo}}"
    alt="staff photo" 
    style="width: 150px !important; height: auto; border-radius: 0.25rem;">

        </div>
      </div>
      <div class="my-3" style="height: 4px; background: #000; border: 0;"></div><br>
      <p class="fw-bold" style="color: #d6007b;">Ref: {{reference}}</p><br>
      <h4 class="text-center">To Whomsoever it may concern</h4><br><br>
      <p class="fs-6 lh-lg">
        This is to certify that <strong>{{name}}</strong> was working as <strong>{{role}}</strong> with {{companyName}}, {{location}}.<br>
        His intern particulars are as given below.
      </p>
      <table class="table table-bordered w-100 mb-4 border border-dark border-2">
        <thead class="table-light">
          <tr>
            <th class="border border-dark border-2">Designation</th>
            <th class="border border-dark border-2">Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-dark border-2">{{designation}}</td>
            <td class="border border-dark border-2">{{period}}</td>
          </tr>
        </tbody>
      </table>
      <p class="fs-6 lh-lg">
        {{his}} responsibilities were in {{responsibilities}}. {{he}} has gained good knowledge in the technology, application development, integration process and customization.
      </p>
      <p class="fs-6">We have found him to be a good learner.</p>
      <p class="fs-6">
        We at {{companyShort}}, {{location}} wish him all success in his future endeavors.
      </p>
      <p class="fs-6 mt-3">
        For {{companyShort}}, {{location}}, India
      </p>
      <br>
      <p class="fs-6 mt-4">{{signName}}<br><strong>{{signRole}}</strong></p><br>
      <br>
      <div class="my-3" style="height: 4px; background: #000; border: 0;"></div><br>
      <p class="fs-6">  
        {{ street }}, {{ address }}, {{ district }} - {{ postal }}, {{ state }}, {{ country }}<br><br>
        Contact: {{phone}} / Email: {{email}}
      </p>
      </div>
      </div> `;
  }

  data(): void {
    const data = {
      companyName: 'Vyasaka',
      companyType: 'Technologies',
      pvd: 'Pvt Ltd',
      companyLogo: this.companyLogo,
      he: 'He',
      his: 'His',
      companyShort: 'Vyasaka Technologies',
      location: 'Chennai',
      reference: 'IN25/HR/I01 dated 08,May 25',
      name: 'Mr.Mohamed Salman',
      role: 'Project Intern',
      designation: "Master's Project Internship Trainee",
      period: '23, Dec 24 to 03, May 25 (70 days)',
      responsibilities: 'Angular application development and integration',
      signName: 'Alex Mathews',
      signRole: 'HR Manager',
      street: 'Plot No 5179,Ram Nagar North Extn, 8th St' ,
      address: 'Puzhuthivakkam',
      district: 'Chennai',
      postal: '600 091',
      state: 'TamilNadu',
      country: 'India',
      phone: '+91-789562900',
      email: 'hr@vyasaka.in',
    };

    const template = this.template();
    const renderedHtml = Mustache.render(template, data);
    this.finalHtml = this.sanitizer.bypassSecurityTrustHtml(renderedHtml);
  }
}