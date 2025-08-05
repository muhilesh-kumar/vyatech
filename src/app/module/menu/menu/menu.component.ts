import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  options: string[] = ['Invoice', 'Seller', 'Buyer',"Mukilesh"];
  selectedOption: string = '';

  tableData: { [key: string]: any[] } = {
    
  };
  existingRecordId: { [key: string]: number | null } = {
   
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  onSelectChange() {
    console.log('Selected:', this.selectedOption);
    this.loadTableData(this.selectedOption);
  }

  loadTableData(type: string) {
  this.apiService.getAll().subscribe((data: any[]) => {
    const filtered = data.find(d => d.application === type);
    if (filtered) {
      this.tableData[type] = filtered.subscription.map((item:any) => ({
        ...item,
        commaValue: item.type === 'array'
          ? (Array.isArray(item.value) ? item.value.join(', ') : item.value)
          : ''
      }));
      this.existingRecordId[type] = filtered.id;
    } else {
      this.tableData[type] = [];
      this.existingRecordId[type] = null;
      this.addRow(type);
    }
  });
}


  addRow(type: string) {
    this.tableData[type].push({
      key: '',
      type: '',
      value: '',
      commaValue:''
    });
  }

  onKeyTypeChange(type: string, rowIndex: number) {
    const row = this.tableData[type][rowIndex];
    if (row.type === 'array') {
      row.value = [];
    } else if (row.type === 'boolean') {
      row.value = true;
    } else {
      row.value = '';
    }
  }

 
  onCommaValueChange(row: any) {
  row.value = row.commaValue
    .split(',')
    .map((v: string) => v.trim())
    .filter((v: string) => v !== '');
}


  submitTable(type: string) {
    const payload = {
      application: type,
      subscription: this.tableData[type].map(d => ({
        key: d.key,
        type: d.type,
        value: d.value
      }))
    };

    if (this.existingRecordId[type]) {
      this.apiService.update(this.existingRecordId[type]!, payload).subscribe(
        () => {
          this.loadTableData(type);
        },
      );
    } else {
      this.apiService.create(payload).subscribe(
        () => {
         
          this.loadTableData(type);
        }
      );
  }
}
deletecommand(index: number): void {
  this.tableData[this.selectedOption].splice(index, 1);
  const payload = {
    application: this.selectedOption,
    subscription: this.tableData[this.selectedOption].map(d => ({
      key: d.key,
      type: d.type,
      value: d.value
    }))
  };

  if (this.existingRecordId[this.selectedOption]) {
    this.apiService.update(this.existingRecordId[this.selectedOption]!, payload).subscribe(() => {
      this.loadTableData(this.selectedOption);
    });
  }
}



}