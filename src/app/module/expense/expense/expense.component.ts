import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { ConfirmationService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  show: boolean = false;
  img: boolean = false;
  viewMode = false;
  expenses: any[] = [];
  formGroup!: FormGroup;
  tabs: boolean = false;
  grids: boolean = false;
  cards: boolean = false;
  lists: boolean = false;
  snowns: boolean = false;
  first: number = 0;
  rows: number = 8;
  paged: any[] = [];
  page: number = 1;
  pageSize: number = 6;
  itemTypes: string[] = ['Business', 'Personal', 'Project', 'Travel', 'Equipment', 'Other'];
  categories: string[] = ['Travel', 'Meals', 'Supplies', 'Other'];
  types: string[] = ['Business', 'Personal', 'Project'];
  status: string[] = ['Pending', 'Approved', 'Rejected'];
  ImageUrl: string = '';
  isEditMode: boolean = false;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private modalservice: ConfirmationService,
    private toastr: ToastrService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadExpenses();
    this.table();
  }

  private initializeForm(): void {
    this.formGroup = this.fb.group({
      
      name: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      expBy: [''],  
      type: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      status: ['Pending'],
      submittedBy: [''],
      amount: [0],
      items: this.fb.array([], Validators.required),
      modifiedOn: [''],
      modifiedBy: [''],
      createdOn: [''],
      createdBy: ['']
    });
  }


  get items(): FormArray {
    return this.formGroup.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      date: ['', Validators.required],
      image: [[]],
      amount: [0, [Validators.required, Validators.min(1)]]
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
    if (this.formGroup.value.id) {
      this.updateExpenseItems();
    }
  }

  private updateExpenseItems(): void {
    const updatedData = { ...this.formGroup.value, items: this.formGroup.value.items };
    this.api.update(this.formGroup.value.id, updatedData).subscribe();
  }


  onFileChange(event: any, index: number): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      Promise.all(fileArray.map(file => this.convertToBase64(file)))
        .then(base64Images => {
          const newImages = base64Images.map((base64, i) => ({
            url: base64,
            file:{
              name: fileArray[i].name,
            type: fileArray[i].type,
            size: fileArray[i].size
            }
          }));
          const currentImages = this.items.at(index).get('image')?.value || [];
        const updatedImages = [...currentImages, ...newImages];

        this.items.at(index).get('image')?.setValue(updatedImages);
        });
    }
  }

  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }


  open(): void {
    this.resetForm();
    this.viewMode = false;
    this.show = true;
  }

  close(): void {
    this.show = false;
    this.viewMode = false;
    this.isEditMode = false;
    this.resetForm();
  }

  resetForm(): void {
    this.formGroup.reset({
      status: 'Pending',
      items: []
    });
    this.formGroup.setControl('items', this.fb.array([]));
    this.addItem();
  }


  loadExpenses(): void {
    this.api.getAll().subscribe({
      next: (data) => {
        this.expenses = data;
        this.updatePagedData();
      },

    });
  }

  saveExpense(): void {
    this.markFormGroupTouched(this.formGroup);

    if (this.formGroup.invalid) {
      this.toastr.error('Please fill all required fields correctly');
      return;
    }

    const formattedItems = this.items.value.map((item: any) => ({
      ...item,
      image: (item.image || []).map((img: any) => 
      typeof img === 'string' ? { url: img } : { url: img.url || img })
    }));

    const totalAmount = formattedItems.reduce((sum: number, item: any) => sum + (+item.amount || 0), 0);
    const isEdit = !!this.formGroup.get('id')?.value;
    if (isEdit) {
      this.formGroup.patchValue({
        
        modifiedOn: new Date().toISOString(),
        modifiedBy: "Muhilesh Kumar"
      });
    }else {
      this.formGroup.patchValue({
      createdOn: new Date().toISOString(),
      createdBy: "Muhilesh kumar"
    });
    }

    const formData = {
      ...this.formGroup.value,
      amount: totalAmount,
      items: formattedItems
    };
    if (!isEdit) {
      delete formData.modifiedOn;
  delete formData.modifiedBy;
  delete formData.id;
}

    const request = this.formGroup.value.id
      ? this.api.update(this.formGroup.value.id, formData)
      : this.api.create(formData);

    request.subscribe({
      next: () => {
        this.toastr.success(
          `Expense ${this.formGroup.value.id ? 'updated' : 'added'} successfully!`
        );
        this.close();
        this.loadExpenses();
      },
      error: () => {
        this.toastr.error('Failed to save expense', 'Error');
      }
    });
  }


  edit(expense: any): void {
    if (!this.formGroup.contains('id')) {
    this.formGroup.addControl('id', this.fb.control(expense.id));
  }
     this.formGroup.patchValue({
    ...expense,
    id: expense.id 
  });
  
    this.viewMode = false;
    this.show = true;
    this.formGroup.setControl('items', this.fb.array([]));

    if (expense.items?.length) {
      expense.items.forEach((item: any) => {
        const images = (item.image || []).map((img: any) =>
          typeof img === 'string' ? { url: img } : img
        );
        this.items.push(this.fb.group({
          type: [item.type, Validators.required],
          date: [item.date, Validators.required],
          image: [images],
          amount: [item.amount, [Validators.required, Validators.min(1)]]
        }));
      });
    } else {
      this.addItem();
    }
  }

  view(expense: any): void {
    this.edit(expense);
    this.viewMode = true;
  }

  delete(id: number): void {
    this.modalservice.confirm({
      message: 'Are you sure you want to delete this expense?',
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.api.delete(id).subscribe({
          next: () => {
            this.toastr.success('Expense deleted successfully!', 'Success');
            this.loadExpenses();
          },
          error: () => {
            this.toastr.error('Failed to delete expense', 'Error');
          }
        });
      }
    });
  }


  private markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  Total(): number {
    return this.items.controls.reduce((total, group) => {
      return total + +(group.get('amount')?.value || 0);
    }, 0);
  }


  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePagedData();
  }

  private updatePagedData(): void {
    const start = this.first;
    const end = start + this.rows;
    this.paged = this.expenses.slice(start, end);
  }


  table(): void {
    this.tabs = true;
    this.grids = this.cards = this.lists = this.snowns = false;
  }

  grid(): void {
    this.grids = true;
    this.tabs = this.cards = this.lists = this.snowns = false;
  }

  card(): void {
    this.cards = true;
    this.tabs = this.grids = this.lists = this.snowns = false;
  }

  list(): void {
    this.lists = true;
    this.tabs = this.grids = this.cards = this.snowns = false;
  }

  snow(): void {
    this.snowns = !this.snowns;
  }

  get pagedExpenses(): any[] {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.expenses.slice(start, end);
  }
  removeImage(itemIndex: number, imageIndex: number): void {
  const images = this.items.at(itemIndex).get('image')?.value || [];
  images.splice(imageIndex, 1); // remove the selected image
  this.items.at(itemIndex).get('image')?.setValue(images); // update the form control
}

}