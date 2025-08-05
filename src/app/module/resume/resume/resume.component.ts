  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import * as pdfjsLib from 'pdfjs-dist';
  import { ToastrService } from 'ngx-toastr';

  @Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
  })
  export class ResumeComponent implements OnInit {
    first: boolean = true;
    uploadresume: boolean = false;
    uploaded: boolean = false;
    uploadDate: string = '';
    selectedFile: File | null = null;
    isLoading: boolean = false;
    extractedText: string = '';

    constructor(
      private router: Router,
      private toastr: ToastrService,
      private route: ActivatedRoute
    ) {
      (pdfjsLib as any).GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.min.js';
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if (params['triggerUpload'] === 'true') {
          this.upload();
        }
      });
    }

    navigate() {
      this.router.navigate(['/resume/createcv']);
    }

    upload() {
      this.first = false;
      this.uploadresume = true;
      this.uploaded = true;
    }

    create() {
      this.router.navigate(['/resume/createcv']);
    }

    async onFileSelected(event: any) {
      const file: File = event.target.files[0];

      if (file) {
        this.isLoading = true;
        try {
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          this.extractedText = '';

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map(item => (item as any).str)
              .join(' ');
            this.extractedText += pageText + '\n';
          }

          if (!this.extractedText.trim()) {
            this.toastr.error('No content found in PDF!', 'Error');
            this.isLoading = false;
            return;
          }

          const resumeSections = this.parseResumeWithAI(this.extractedText);
          console.log('Parsed Resume Sections:', resumeSections);

          this.router.navigate(['/resume/createcv'], {
            state: {
              extractedText: this.extractedText,
              resumeSections: resumeSections
            }
          });

        } catch (err) {
          console.error('Error reading PDF:', err);
          this.toastr.error('Error reading PDF. Please try another file', 'Error');
        } finally {
          this.isLoading = false;
        }
      }
    }

    private parseResumeWithAI(text: string): any {
      // Normalize text by replacing multiple spaces/newlines
      text = text.replace(/\s+/g, ' ').trim();
      
      return {
        contact: this.extractContactInfo(text),
        summary: this.extractProfessionalSummary(text),
        skills: this.extractSkillsSection(text),
        experience: this.extractWorkExperience(text),
        education: this.extractEducationSection(text),
        languages: this.extractLanguagesSection(text)
      };
    }

    private extractContactInfo(text: string): any {
    const email = this.extractEmail(text);
    const phone = this.extractPhone(text);
    const website = this.extractWebsite(text);
    let name = '';

    const commonFalsePositives = ['Curriculum Vitae', 'Resume', 'Page', 'Vyasaka', 'Technologies', 'Software', 'Engineer', 'Developer'];

    // Split text into lines
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);

    // Look for the first line that looks like a name
    for (const line of lines) {
      // Skip lines that contain false positives (e.g., company names, job titles)
      if (commonFalsePositives.some(fp => line.toLowerCase().includes(fp.toLowerCase()))) {
        continue;
      }

      // Match multi-word capitalized line
      if (line.match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z']+){1,3})$/)) {
        name = line;
        break;
      }

      // Alternatively: match ALL CAPS multi-word line
      if (line.match(/^([A-Z]+(?:\s+[A-Z]+)+)$/)) {
        name = line
          .split(' ')
          .map(word => word.charAt(0) + word.slice(1).toLowerCase())
          .join(' ');
        break;
      }
    }

    // Fallback: use email prefix
    if (!name && email) {
      const emailNamePart = email.split('@')[0];
      if (emailNamePart.includes('.')) {
        name = emailNamePart.split('.')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
      }
    }

    return {
      name: name,
      email: email,
      phone: phone,
      website: website
    };
  }


    private extractProfessionalSummary(text: string): string {
      const summaryMatch = text.match(/(?:description|summary|about|profile)[:\s-]*([^.]+\.)/i);
      return summaryMatch ? summaryMatch[1].trim() : '';
    }

    private extractSkillsSection(text: string): string[] {
      const skills: string[] = [];
      const skillsSectionMatch = text.match(/(?:skills|expertise|competencies)[:\s-]*(.*?)(?=(?:experience|education|projects|$))/is);
      
      if (skillsSectionMatch) {
        const skillsText = skillsSectionMatch[1];
        skills.push(...skillsText.split(/[,•·\n-]/)
          .map(skill => skill.trim())
          .filter(skill => skill.length > 1 && !/^\d+$/.test(skill) && !skill.match(/\b\d{4}\b/)));
      }
      
      return skills;
    }

   private extractWorkExperience(text: string): any[] {
  const experiences: any[] = [];
  const expMatches = text.match(/((?:[A-Z][a-z]+ )*(?:Developer|Engineer|Intern).*?(?:\d{4}.*?(Present|\d{4})))+/gi);
  
  if (expMatches) {
    expMatches.forEach(match => {
      experiences.push({ description: match.trim() });
    });
  }

  return experiences;
}



  private extractEducationSection(text: string): any[] {
  const education: any[] = [];
  const eduMatches = text.match(/((?:[A-Z][a-z]+ )*(?:College|School|University).*?(?:\d{4}))/gi);
  
  if (eduMatches) {
    eduMatches.forEach(match => {
      education.push({ description: match.trim() });
    });
  }

  return education;
}



    private extractLanguagesSection(text: string): string[] {
      const languages: string[] = [];
      const langSectionMatch = text.match(/(?:languages|language proficiency)[:\s-]*(.*?)(?=(?:references|$))/is);
      
      if (langSectionMatch) {
        languages.push(...langSectionMatch[1].split(/[,•]/)
          .map(lang => lang.trim())
          .filter(lang => lang.length > 2));
      }
      
      return languages;
    }

    private extractEmail(text: string): string {
      const emailMatch = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
      return emailMatch ? emailMatch[0] : '';
    }

    private extractPhone(text: string): string {
      const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/);
      return phoneMatch ? phoneMatch[0] : '';
    }

    private extractWebsite(text: string): string {
      const websiteMatch = text.match(/(?:www\.|https?:\/\/)[^\s]+/);
      return websiteMatch ? websiteMatch[0] : '';
    }
  }