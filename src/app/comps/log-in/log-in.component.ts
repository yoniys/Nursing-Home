import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  code=new FormGroup({
    pessworde:new FormControl(null,[Validators.pattern("1234")]),
    name:new FormControl(null,[Validators.pattern("יוסי")]),
    try:new FormControl(),
  })

  submit(){;
  }
  constructor(public router:Router,public s:MainService) { }

  ngOnInit(): void {
  
  }
  log(){
      this.router.navigate(['/main screen/requests'])
  }

}
