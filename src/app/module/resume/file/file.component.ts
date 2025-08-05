import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  // Personal Information
  username: string = '';
  lastname: string = '';
  city: string = '';
  email: string = '';
  postal: number | null = null;
  phonenumber: number | null = null;
  address: string = '';
  
  // Professional Information
  role: string = '';
  summary: string = '';
  skillsArray: string[] = [];
  language1: string = '';
  language2: string = '';
  
  // Experience
  experiences: any[] = [{
    company: '',
    position: '',
    joinyear: null,
    ending: null,
    companyaddress: '',
    companycity: '',
    content: ''
  }];
  
  // Education
  educations: any[] = [{
    type: '',
    degree: '',
    ejoinyear: null,
    eending: null,
    university: '',
    college: ''
  }];

  // UI State
  activetab: number = 0;
  addmode: boolean = false;
  temp1: boolean = false;
  temp2: boolean = false;
  showfilter: boolean = false;
  template: string = '';
  
  // Section Visibility
  contactSaved: boolean = true;
  experience: boolean = false;
  education: boolean = false;
  skill: boolean = false;
  about: boolean = false;
  finish: boolean = false;

  // Data from Resume Parser
  extractedText: string = '';
  resumeSections: any = {};

  constructor(private router: Router) {
    this.loadResumeData();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.setTemplate();
    this.processResumeData();
  }

  private loadResumeData(): void {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.template = state['template'] || '';
      this.extractedText = state['extractedText'] || '';
      this.resumeSections = state['resumeSections'] || {};
    }
  }

  private initializeForm(): void {
    if (this.experiences.length === 0) this.addExperience();
    if (this.educations.length === 0) this.addEducation();
  }

  private setTemplate(): void {
    this.temp1 = this.template === 'template1';
    this.temp2 = this.template === 'template2';
  }

  private processResumeData(): void {
    if (Object.keys(this.resumeSections).length > 0) {
      this.attachContactInfo();
      this.attachExperience();
      this.attachEducation();
      this.attachSkills();
      this.attachSummary();
      this.attachLanguages();
    }
  }

  // AI-Powered Data Attachment Methods
  private attachContactInfo(): void {
    if (this.resumeSections.contact) {
      const contact = this.resumeSections.contact;
      this.username = contact.firstName || this.parseName(contact.name)[0] || '';
      this.lastname = contact.lastName || this.parseName(contact.name)[1] || '';
      this.email = contact.email || '';
      this.phonenumber = contact.phone || null;
      this.address = contact.address || '';
      this.city = contact.city || '';
      this.postal = contact.postalCode || null;
    } else if (this.resumeSections.basicInfo) {
      const basicInfo = this.resumeSections.basicInfo;
      this.email = basicInfo.email || '';
      this.phonenumber = basicInfo.phone || '';
      [this.username, this.lastname] = this.parseName(basicInfo.name);
    }
    this.contactSaved = true;
  }

  private attachExperience(): void {
  if (!this.resumeSections.experience) return;

  this.experiences = [];
  if (Array.isArray(this.resumeSections.experience)) {
    this.resumeSections.experience.forEach((exp: any) => {
      const desc = exp.description || '';
      if (/engineer|developer|intern|20\d{2}|present|aug|nov|jan|feb|mar|apr|may|jun|jul|sep|oct|dec/i.test(desc)) {
        const years = this.extractYearsNear(desc);
        this.experiences.push({
          company: this.extractCompany(desc),
          position: this.extractPosition(desc),
          joinyear: years.start,
          ending: years.end,
          companyaddress: '',
          companycity: '',
          content: desc
        });
      }
    });
  }
  this.experience = this.experiences.length > 0;
}


  private attachEducation(): void {
  if (!this.resumeSections.education) return;

  this.educations = [];
  if (Array.isArray(this.resumeSections.education)) {
    this.resumeSections.education.forEach((edu: any) => {
      const desc = edu.description || '';
      if (/college|school|bachelor|class|completed|science/i.test(desc)) {
         const years = this.extractYearsNear(desc);
        this.educations.push({
          type: this.determineDegreeType(desc),
          degree: this.extractDegree(desc),
          ejoinyear: years.start,
          eending: years.end,
          university: this.extractInstitution(desc),
          college: ''
        });
      }
    });
  }
  this.education = this.educations.length > 0;
}


  private attachSkills(): void {
    if (!this.resumeSections.skills) return;
    
    if (Array.isArray(this.resumeSections.skills)) {
      this.skillsArray = [...this.resumeSections.skills];
    } else if (typeof this.resumeSections.skills === 'string') {
      this.skillsArray = this.parseSkillText(this.resumeSections.skills);
    }
    this.skill = true;
  }

  private attachSummary(): void {
    if (this.resumeSections.summary) {
      this.summary = this.resumeSections.summary;
      this.about = true;
    }
  }

  private attachLanguages(): void {
    if (!this.resumeSections.languages) return;
    
    if (Array.isArray(this.resumeSections.languages)) {
      [this.language1, this.language2] = this.resumeSections.languages;
    } else if (typeof this.resumeSections.languages === 'string') {
      [this.language1, this.language2] = this.parseLanguageText(this.resumeSections.languages);
    }
    this.about = true;
  }

  // AI Parsing Utilities
  private parseName(fullName: string): [string, string] {
    if (!fullName) return ['', ''];
    const names = fullName.trim().split(/\s+/);
    return [names[0] || '', names.slice(1).join(' ') || ''];
  }

  

  private determineDegreeType(degree: string): string {
    if (!degree) return '';
    degree = degree.toLowerCase();
    if (degree.includes('bachelor') || degree.includes('b.') || degree.includes('b.sc') || degree.includes('b.tech')) {
      return 'Bachelor';
    } else if (degree.includes('master') || degree.includes('m.') || degree.includes('m.sc') || degree.includes('m.tech')) {
      return 'Master';
    } else if (degree.includes('phd') || degree.includes('doctor')) {
      return 'PhD';
    }
    return '';
  }

  

  private parseSkillText(text: string): string[] {
    return text.split(/[,•·\n]/)
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0);
  }

  private parseLanguageText(text: string): [string, string] {
    const languages = text.split(/[,•]/)
      .map(lang => lang.trim())
      .filter(lang => lang.length > 0);
    return [languages[0] || '', languages[1] || ''];
  }

  // UI Navigation Methods
  opentab() {
    this.contactSaved = true;    
    this.experience = true;
    this.activetab = 1;
    this.education = false;
  }

  openedu() {
    this.education = true;
    this.activetab = 2;
  }

  openskill() {
    this.skill = true;
    this.activetab = 3;
  }

  openabout() {
    this.about = true;
    this.activetab = 4;
  }

  openfinish() {
    this.finish = true;
    this.activetab = 5;
  }

  // Form Management
  addExperience() {
    this.experiences.push({
      company: '',
      position: '',
      joinyear: null,
      ending: null,
      companyaddress: '',
      companycity: '',
      content: ''
    });
  }

  addEducation() {
    this.educations.push({
      type: '',
      degree: '',
      ejoinyear: null,
      eending: null,
      university: '',
      college: ''
    });
  }

  // Template Selection
  template1() {
    this.temp2 = false;
    this.temp1 = true;
    this.showfilter = false;
  }
  
  template2() {
    this.temp1 = false;
    this.temp2 = true;
    this.showfilter = false;
  }

  filter() {
    this.showfilter = true;
  }

  // PDF Generation
  async downloadresume(): Promise<void> {
    try {
      const templateId = this.temp1 ? 'resume-content' : 
                        this.temp2 ? 'resume-content2' : 
                        null;
      
      if (!templateId) return;
      const element = document.getElementById(templateId);
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${this.username || 'resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }
  private extractCompany(desc: string): string {
  const match = desc.match(/(Vyasaka Technologies|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/);
  return match ? match[0] : '';
}

private extractPosition(desc: string): string {
  if (/engineer/i.test(desc)) return 'Software Engineer';
  if (/developer/i.test(desc)) return 'Developer';
  if (/intern/i.test(desc)) return 'Intern';
  return '';
}

private extractInstitution(desc: string): string {
  const match = desc.match(/(PSY Engineering College|Milton matric Hr\.sec school|Srv Hr\.sec school)/i);
  return match ? match[0] : '';
}

private extractDegree(desc: string): string {
  const match = desc.match(/(Bachelor of Science in Computer Science|Class XII|Class X)/i);
  return match ? match[0] : '';
}

private extractYearsNear(desc: string): { start: number | null, end: number | null } {
  const yearMatches = desc.match(/\b(19|20)\d{2}\b/g);
  let start: number | null = null;
  let end: number | null = null;

  if (yearMatches) {
    start = parseInt(yearMatches[0]);
    end = yearMatches.length > 1 ? parseInt(yearMatches[1]) : null;
  }

  return { start, end };
}

}