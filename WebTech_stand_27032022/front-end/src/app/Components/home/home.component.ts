import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { StudentComponent } from '../student/student.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: any = [];
  viewType: string = 'all';
  student: any;

  constructor(private apiService: ApisService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.apiService.getAllStudents().subscribe(data => {
      console.log('data', data);
      this.students = data.data;
    })
  }

  updateStudent(event) {
    if (event === '') {
      this.viewType = 'all';
    }
    var index = this.students.findIndex(student => { return event._id === student._id });
    this.viewType = 'all';
    console.log("index", index);
    if (index !== -1) {
      this.students[index] = event;
    }
  }

  addStudent(event) {
    this.students.push(event);
  }



  studentAction(student, type) {
    if (type === 'delete') {
      this.apiService.deleteStudent(student._id).subscribe(result => {
        console.log(result);
        if (result.success) {
          this.students = this.students.filter(stud => { return stud._id !== student._id });
        }
      })
    }
    else if (type === 'update') {
      this.viewType = 'update';
      this.student = student;
    }
    else if (type === 'view') {
      const dialogRef = this.dialog.open(StudentComponent, {
        width: '500px',
        height: '600px',
        disableClose: true,
        data: { student }
      })
    }
  }
}
