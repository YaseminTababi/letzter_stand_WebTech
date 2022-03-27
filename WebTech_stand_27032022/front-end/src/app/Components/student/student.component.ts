import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: any ={};
  constructor(public dialogRef: MatDialogRef<StudentComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }
  
  ngOnInit(): void {
    this.student = this.data.student;
    this.student.geburtsdatum = new Date(this.student.geburtsdatum);
    if(this.student.praktikum){
      this.student.praktikum_ende = new Date(this.student.praktikum_ende);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
