import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Mustache from 'mustache';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.scss']
})
export class MaintainComponent {
  finalHtml: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.renderTemplate();
  }

  template(): string {
    return `
    <div class="email-container"
      style="font-family: Arial, sans-serif; margin: 0; padding: 0; width: 100%; background-color: #f4f4f4;">
      <!-- Header with Logo -->
      <div class="header" style="text-align: center; padding: 10px;">
          <img src="https://dashboard.vedna.in/assets/logo/vedna.jpg" alt="Company Logo"
              style="max-width: 100%; height: 100px;">
      </div>
      <!-- Content -->
      <div class="content"
          style="padding: 20px; background-color: #ffffff;  width: 100%; max-width: 600px; margin: 0 auto;">
          <p style="font-size: 16px; line-height: 1.5;"> Hello <strong>{{userName}}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.5;">We are currently performing scheduled maintenance to improve our
              services and enhance your experience.</p>
          <div class="card"
              style="border: 2px solid #dee2e6;border-radius: 10px;padding: 20px;margin: 20px auto;max-width: 500px;background-color: #f9f9f9; text-align: center; font-size: 16px; line-height: 1.5; color: #333;">
              <p><i class="fa fa-wrench"></i> Status: <strong>{{status}}</strong></p>
              <p><i class="fa fa-calendar-o"></i> Expected Completion: <strong>{{date}} at {{time}}</strong></p>
          </div>
          <p style="font-size: 16px; line-height: 1.5;">During this time, the platform will be temporarily unavailable. We
              apologize for any inconvenience caused and appreciate your patience.</p>
          <p style="font-size: 16px; line-height: 1.5;">
              If you have any questions or require assistance, feel free to contact us at
              <a href="mailto:support@example.com" style="color: #1a0dab;">{{email}}</a>.
          </p>
          <p style="font-size: 16px; line-height: 1.5;text-align: center;">Thank you for your patience and understanding.
          </p>
          <p class="mb-1 fw-bold">Best Regards,</p>
          <p class="mb-1">{{name}}</p>
          <p class="mb-1">{{position}}</p>
          <p>{{companyName}}</p>
      </div>
      <!-- Footer -->
      <div class="footer" style="text-align: center; padding: 20px; font-size: 14px; color: #888888;">
          <p>&copy; 2024 Inevito. All rights reserved.</p>
          <p style="margin: 10px 0;">
              <a href="https://example.com/privacy-policy"
                  style="color: #1a0dab; text-decoration: none; margin-right: 15px;">Privacy Policy</a>|
              <a href="https://example.com/terms-of-service"
                  style="color: #1a0dab; text-decoration: none; margin-left: 15px; margin-right: 15px;">Terms of
                  Service</a>|
              <a href="https://example.com/contact-us"
                  style="color: #1a0dab; text-decoration: none; margin-left: 15px;">Contact Us</a>
          </p>
      </div>
    </div>`;
  }

  renderTemplate(): void {
    const data = {
      userName: "Mahesh",
      status: 'System Updates in Progress',
      time: '10:00 AM',
      date: 'July 15, 2024',
      email: 'support@gmail.com',
      name: 'Ramesh',
      position: 'Developer',
      companyName: 'Vyasaka Technologies'
    };

    const template = this.template();
    const renderedHtml = Mustache.render(template, data);
    this.finalHtml = this.sanitizer.bypassSecurityTrustHtml(renderedHtml);
  }
}