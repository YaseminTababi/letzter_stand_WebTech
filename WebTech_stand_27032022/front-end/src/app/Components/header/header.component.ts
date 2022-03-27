import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// Link von der HTW startseite
  openLink(){
    window.open("https://www.htw-berlin.de/studium/studiengaenge/?no_cache=1");
  }

}
