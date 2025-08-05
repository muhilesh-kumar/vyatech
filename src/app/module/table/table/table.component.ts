import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  downloadTable() {
    const doc = new jsPDF();
    doc.text('User Table', 14, 10);

    autoTable(doc, {
      html: '#dataTable',
      startY: 20,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [0, 0, 0] },
      alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    doc.save('table-data.pdf');
  }
}