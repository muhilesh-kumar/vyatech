import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { Papa } from 'ngx-papaparse';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  biodata: any[] = [];
  showDialog: boolean = false;
  
  userForm!: FormGroup;
  message = "Add Details";
  editmode: boolean = false;
  addmode: boolean = false;
  editingUserId: any;
  add: boolean = false;
  edited: boolean = false;
  fedited: boolean = false;
  showDeleteConfirm: boolean = false;
  deleteId: number | null = null;
  previewEnabled = false;
  selectedFile: File | null = null;
  fileChosen: boolean = false;
  fileError: string = '';
  shownowDialog: boolean = false;
  templateURL: string = 'assets/data/fb.csv';
  dataSource: any[] = [];
  previewdata: boolean = false;
  first: number = 0;
  rows: number = 10;
  totalRecords: number = 0;
  public limit: number = 25;

  constructor(
    private api: ApiService,
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private modelService: ConfirmationService,
    private papa: Papa,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      dob: [''],
      phonenumber: [''],
      email: [''],
      addresses: this.formbuilder.array([]),
      married: [''],
      gender: [''],
      status: ['']
    });
this.getusers();
  }

  addressgp(): FormGroup {
    return this.formbuilder.group({
      type: [''],
      addressLine: [''],
      district: [''],
      city: [''],
      state: ['']
    });
  }

  get addressar(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  addaddress() {
    this.addressar.push(this.addressgp());
  }
 
  show() {
    this.userForm.enable();
    this.message = "Add Form";
    this.edited = false;
    this.editmode = false;
    this.fedited = true;
    this.addmode = true;
    this.showDialog = true;
    this.userForm.reset();
    this.addressar.clear();
    this.addressar.push(this.addressgp());
  }

  shownow() {
    this.message = "Upload File";
    this.shownowDialog = true;
  }

  getusers(): void {
    this.api.get(this.limit).subscribe({
      next: (response: any) => {
        this.biodata = response;
      }
    });
  }

  adduser() {
    this.api.create(this.userForm.value).subscribe(() => {
      this.toastr.success('Added Successfully!', 'success');
      this.getusers();
      this.showDialog = false;
      this.userForm.reset();
    })
  }

  onDelete(id: number): void {
    this.modelService.confirm({
      message: 'Are you sure you want to delete this user?',
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.api.deleteuser(id).subscribe(
          () => {
            this.toastr.error('Deleted Successfully!', 'Success');
            this.getusers();
          },
          () => {
            this.toastr.error('Failed to delete user.', 'Error');
          }
        );
      },
      reject: () => {
        this.toastr.info('Deletion cancelled.', 'Info');
      }
    });
  }

  edit(id: number) {
    this.userForm.enable();
    this.message = "Edit Form";
    this.edited = true;
    this.editmode = true;
    this.fedited = false;
    this.addmode = true;
    this.editingUserId = id;
    this.showDialog = true;
    this.api.fetchdata(id).subscribe((data: any) => {
      this.userForm.patchValue({
        name: data.name,
        dob: this.formatDate(data.dob),
        phonenumber: data.phonenumber,
        email: data.email,
        married: data.married ? data.married.toLowerCase() : '',
        gender: data.gender ? data.gender.toLowerCase() : '',
        status: data.status ? data.status.toLowerCase() : ''
      });
      const added = this.userForm.get('addresses') as FormArray;
      added.clear();
      data.addresses.forEach((address: any) => {
        added.push(this.formbuilder.group({
          type: [address.type],
          addressLine: [address.addressLine],
          district: [address.district],
          city: [address.city],
          state: [address.state]
        }));
      });
    });
  }
  private formatDate(date: any): string {
    if (!date) return '';
    if (typeof date === 'string') {
      return date.split('T')[0];
    }
    return date;
  }

  view(id: number) {
    this.message = "View Form";
    this.edited = false;
    this.editmode = false;
    this.fedited = false;
    this.addmode = false;
    this.editingUserId = id;
    this.showDialog = true;
    this.api.fetchdata(id).subscribe((data: any) => {
      this.userForm.patchValue({
        name: data.name,
        dob: data.dob,
        phonenumber: data.phonenumber,
        email: data.email,
        married: data.married,
        gender: data.gender,
        status: data.status
      });
      const added = this.userForm.get('addresses') as FormArray;
      added.clear();
      data.addresses.forEach((address: any) => {
        added.push(this.formbuilder.group({
          type: [address.type],
          addressLine: [address.addressLine],
          district: [address.district],
          city: [address.city],
          state: [address.state]
        }));
      });
      this.userForm.disable();
    });
  }

  update() {
    this.edited = true;
    if (this.editmode && this.editingUserId !== null) {
      const formData = this.userForm.value;
      const updateData = {
        ...formData,
        married: formData.married || '',
        gender: formData.gender || '',
        status: formData.status || ''
      };


      this.api.updateUser(this.editingUserId, updateData).subscribe(() => {
        this.toastr.success('Updated Successfully!', 'success');
        this.getusers();
        this.showDialog = false;
        this.userForm.reset();
        this.editingUserId = null;
        this.editmode = false;
      });
    }
  }

  downloadTemplate(): void {
    const link = document.createElement('a');
    link.href = this.templateURL;
    link.download = 'template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  fileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.readFile(this.selectedFile);
    } else {
      this.fileError = 'Please choose a file before previewing.';
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.fileError = 'Please choose a file before uploading.';
      return;
    }
    if (this.isFileFormatValid(this.dataSource)) {
      this.previewdata = true;
      this.previewEnabled = true;
    } else {
      this.fileError = 'The file format is invalid. Please upload a valid expense file.';
      this.previewdata = false;
    }
  }

  private readFile(file: File): void {
    this.papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        console.log('Parsed data:', result.data);
        if (result.data) {
          const parsedData = result.data as any[];
          if (this.isFileFormatValid(parsedData)) {
            this.dataSource = parsedData.map((data: any) => ({
              name: data.name,
              dob: data.dob,
              phonenumber: data.phonenumber,
              email: data.email,
              married: data.married ? data.married.toLowerCase() : '',
              gender: data.gender ? data.gender.toLowerCase() : '',
              status: data.status ? data.status.toLowerCase() : '',
              addresses: [{
                type: data.addressType || 'Current',
                addressLine: data.addressLine || '',
                district: data.district || '',
                city: data.city || '',
                state: data.state || ''
              },
              {
                type: data.paddressType || 'Permanent',
                addressLine: data.paddressLine || '',
                district: data.pdistrict || '',
                city: data.pcity || '',
                state: data.pstate || ''
              }]
            }));
          } else {
            this.fileError = 'The file format is invalid or empty. Please upload a valid expense file.';
            this.dataSource = [];
          }
        }
      },
      error: (error) => {
        console.error('Error Parsing file:', error);
        this.fileError = 'Error parsing file. Please Try again.';
      },
    });
  }

  private isFileFormatValid(data: any[]): boolean {
    const expectedHeaders = ['name', 'dob', 'phonenumber', 'email', 'married', 'gender', 'status'];
    return data.length > 0 && expectedHeaders.every(h => Object.keys(data[0]).includes(h));
  }

  cancelPreview(): void {

    this.shownowDialog = false;
    this.previewEnabled = false;
    this.previewdata = false;
    this.selectedFile = null;
    this.dataSource = [];

    const fileInput = document.getElementById('customFile') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  onSave(): void {
    let savedSuccessfully = false;
    this.dataSource.forEach((blast, index) => {
      this.api.uploadExpenses(blast).subscribe({
        next: () => {
          savedSuccessfully = true;
          if (index === this.dataSource.length - 1) {
            this.finalizeUpload(savedSuccessfully);
            this.getusers();
          }
        },
      });
    });
  }

  private finalizeUpload(success: boolean): void {
    if (success) {
      this.toastr.success('Uploaded successfully!');

      this.shownowDialog = false;
    }
    this.cancelPreview();
  }

  clearError(): void {
    this.fileError = '';
  }
  Page(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getusers();
  }
}