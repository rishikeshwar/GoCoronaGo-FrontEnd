import { Component, OnInit } from '@angular/core';
import { Name } from './models/names';
import { DataService } from './services/data.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'Angular-Frontend';
  name: Name[];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data.getnames().subscribe(names => {
      this.name = names;
      console.log(this.name);
    })
  }
}

