import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

import { FormGroup, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-json-id',
  templateUrl: './json-id.component.html',
  styleUrls: ['./json-id.component.scss']
})
export class JsonIdComponent implements OnInit {
  users: any[] = []; 
  showDialog: boolean = false;
  userForm!: FormGroup;
  editmode: boolean = false;
  editingUserId: any;
  add: boolean = false;
  edited: boolean = false;
  message: string = 'User Form';
  showDeleteConfirm: boolean = false;
deleteId: number | null = null;


  constructor(private myservice: MyserviceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: [''],
      stock: ['']
    });
    this.getusers();
  }


  show() {
    this.message="Add Form";
    this.userForm.reset();
    this.showDialog = true;
    this.edited = false;
    this.add = true;
  }

  getusers() {
    this.myservice.getitems().subscribe(
      (response) => {
        this.users = response;
      });
  }

  update() {

    const formdata = this.userForm.value;
    this.editmode && this.editingUserId !== null
      this.myservice.updateUser(this.editingUserId, formdata).subscribe(() => {
        this.getusers();
        this.showDialog = false;
        this.userForm.reset();
        this.editingUserId = null;
        this.editmode = false;
      });
    
  } 
    addusers(){
      const formdata= this.userForm.value;
      this.myservice.createUser(formdata).subscribe(() => {
        this.getusers();
        this.showDialog = false;
        this.userForm.reset();
      });
    }
  delete(id: number) {
    this.myservice.deleteuser(id).subscribe(() => {
      this.getusers();
    })
  }
  // fetch data
  edit(id: number) {
    this.message="Edit Form";
    this.add =false;
    this.userForm.enable();
    this.edited = true;
    this.showDialog = true
    this.myservice.fetchdata(id).subscribe((data: any) => {
      this.userForm.patchValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      });
      this.editmode = true;
      this.editingUserId = id;
    })
  }

  view(id: number) {
    this.message="View Form";
    this.userForm.disable();
    this.add =false;
    this.edited = false;
    this.showDialog = true;
    
    this.myservice.fetchdata(id).subscribe((data: any) => {
      this.userForm.patchValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
      });
      
      this.editmode = true;
      this.editingUserId = id;
    })
  }
  cancel(){
    this.showDialog=false;
  }
}

