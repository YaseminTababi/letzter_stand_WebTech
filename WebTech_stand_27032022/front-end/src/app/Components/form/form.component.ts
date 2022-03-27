import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() student: any;
  @Output() addStudent: EventEmitter<any> = new EventEmitter();
  studentCreate: FormGroup = new FormGroup({
    studenten_vorname: new FormControl('', [Validators.required]),
    studenten_nachname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    fachbereich_v: new FormControl('', [Validators.required]),
    thema: new FormControl('', [Validators.required]),
    telefonnummer_v: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    postleitzahl_v: new FormControl('', [Validators.required]),
    praktikum: new FormControl('', [Validators.required]),
    praktikum_ende: new FormControl(''),
    geburtsort: new FormControl('', [Validators.required]),
    abschluss_v: new FormControl('', [Validators.required]),
    semesters: new FormControl('', [Validators.required]),
    geburtsdatum: new FormControl('', [Validators.required]),
    betreuer1: new FormControl('', [Validators.required]),
    betreuer_2abfrage: new FormControl('', [Validators.required]),
    betreuer2: new FormControl('')

  });
  studentenVorname: string = '';
  studentenNachname: string = '';
  email: string = '';
  fachBereich: string = '';
  fachbereiche = ['Fachbereich 1', 'Fachbereich 2', 'Fachbereich 3', 'Fachbereich 4'];
  thema: string = '';
  adresse: string = '';
  postleitZahl: string = '';
  geburtsort: string = '';
  geburtsdatum: any = '';
  abschluss_v: string = '';
  semesters: string = '';
  betreuer1 = [{ name: 'Herr Prof. Dr.-Ing. Jörn Freiheit', email: 'Joern.Freiheit@HTW-Berlin.de' }, { name: 'Frau Prof. Dr. Helena Mihaljevic', email: 'Helena.Mihaljevic@HTW-Berlin.de' }, { name: 'Frau Prof. Dr. Selcan Ipek-Ugay', email: 'Selcan.Ipek-Ugay@HTW-Berlin.de'}, { name: 'Frau Prof. Dr. Juliane Siegeris', email: 'Juliane.Siegeris@HTW-Berlin.de'}]
  betreuer2 = [{ name: 'Herr Prof. Dr.-Ing. Jörn Freiheit', email: 'Joern.Freiheit@HTW-Berlin.de' }, { name: 'Frau Prof. Dr. Helena Mihaljevic', email: 'Helena.Mihaljevic@HTW-Berlin.de' }, { name: 'Frau Prof. Dr. Selcan Ipek-Ugay', email: 'Selcan.Ipek-Ugay@HTW-Berlin.de'}, { name: 'Frau Prof. Dr. Juliane Siegeris', email: 'Juliane.Siegeris@HTW-Berlin.de'}]
  profName1: any;
  profName2: any;
  telefonnummer_v: string = '';
  praktikum: boolean = false; // auf false gesetzt
  praktikum_ende: any = '';
  updateStudent: boolean = false;
  buttonText: string = 'Anmelden';
  betreuer_2: boolean = false; //auf false gesetzt

  constructor(private apiService: ApisService) { }

  ngOnInit(): void {
    console.log("student", this.student);
    if (this.student === undefined) {
      this.updateStudent = false;
    }
    else {
      this.updateStudent = true;
      this.buttonText = 'Update';
      this.studentCreate.controls['studenten_vorname'].setValue(this.student.vorname);
      this.studentenVorname = this.student.vorname;
      this.studentCreate.controls['studenten_nachname'].setValue(this.student.nachname);
      this.studentenNachname = this.student.nachname;
      this.studentCreate.controls['email'].setValue(this.student.email)
      this.email = this.student.email;
      this.studentCreate.controls['fachbereich_v'].setValue(this.student.fachbereich)
      this.fachBereich = this.student.fachbereich;
      this.studentCreate.controls['thema'].setValue(this.student.thema)
      this.thema = this.student.thema;
      this.studentCreate.controls['telefonnummer_v'].setValue(this.student.telefonnummer);
      this.telefonnummer_v = this.student.telefonnummer;
      this.studentCreate.controls['adresse'].setValue(this.student.adresse);
      this.adresse = this.student.adresse;
      this.studentCreate.controls['postleitzahl_v'].setValue(this.student.postleitzahl);
      this.postleitZahl = this.student.postleitzahl;
      this.studentCreate.controls['praktikum'].setValue(this.student.praktikum);
      this.praktikum = this.student.praktikum
      // if Praktikum = true, dann Datum eingeben
      if (this.praktikum) {
        this.studentCreate.controls['praktikum_ende'].setValue(this.student.praktikum_ende);
        this.praktikum_ende = new Date(this.student.praktikum_ende);
      }
      this.studentCreate.controls['geburtsort'].setValue(this.student.geburtsort);
      this.geburtsort = this.student.geburtsort;
      this.studentCreate.controls['abschluss_v'].setValue(this.student.abschluss);
      this.abschluss_v = this.student.abschluss;
      this.studentCreate.controls['semesters'].setValue(this.student.semester);
      this.semesters = this.student.semester;
      this.studentCreate.controls['geburtsdatum'].setValue(this.student.geburtsdatum);
      this.geburtsdatum = new Date(this.student.geburtsdatum);
      this.studentCreate.controls['betreuer1'].setValue(this.student.betreuer_1)
      this.profName1 = this.student.betreuer_1;
      this.betreuer_2 = this.student.betreuer_2db
      // if Betreuer2 = True, dann Betreuer2 auswählen
      if (this.betreuer_2) {
        this.studentCreate.controls['betreuer2'].setValue(this.student.betreuer_2);
        this.profName2 = this.student.betreuer_2;
      }



    }


  }

  createStudent(form: any) {
    if (this.studentCreate.invalid) {
      return;
    }
    console.log(form);
    var data = {
      vorname: form.studenten_vorname,
      nachname: form.studenten_nachname,
      email: form.email,
      fachbereich: form.fachbereich_v,
      thema: form.thema,
      telefonnummer: form.telefonnummer_v,
      adresse: form.adresse,
      postleitzahl: form.postleitzahl_v,
      geburtsdatum: form.geburtsdatum,
      geburtsort: form.geburtsort,
      praktikum: form.praktikum,
      abschluss: form.abschluss_v,
      semester: form.semesters,
      betreuer_1: form.betreuer1,
      betreuer_2db: form.betreuer_2abfrage
    }
    if (form.praktikum) {
      data['praktikum_ende'] = form.praktikum_ende
    }
    if (form.betreuer_2abfrage) {
      data["betreuer_2"] = form.betreuer2
    }
    else {
      data["betreuer_2"] = {};
    }
    if (!this.updateStudent) {
      this.apiService.createStudent(data).subscribe(results => {
        console.log('results', results);
        this.addStudent.emit(results.data);
      })
    }
    else {

      this.apiService.updateStudent(this.student._id, data).subscribe(result => {
        console.log("resutl", result);
        this.addStudent.emit(result.data);
      })
    }

  }

  cancel() {
    this.addStudent.emit('');
  }

  onRadioChange(value, type) {
    console.log("value", value, 'type', type);
    if (type === 'intern') {
      this.praktikum = value;
    }
    else if (type === 'abschluss') {
      this.abschluss_v = value;
    }
    else if (type === 'semester') {
      this.semesters = value;
    }
    else if (type === 'betreuer_2') {
      this.betreuer_2 = value;
    }
  }

  selectCourse(value) {
    this.fachbereiche = value;
  }

  selectSp1(value) {
    this.profName1 = value;
  }
  selectSp2(value) {
    this.profName2 = value;
  }


}
