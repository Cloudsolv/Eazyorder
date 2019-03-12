import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  dashboardForm: FormGroup;
  constructor(private dataservice: DataService) { }

  ngOnInit() {

  }
  onSubmit() {
    // this.dataservice.AddData()
  }
}
