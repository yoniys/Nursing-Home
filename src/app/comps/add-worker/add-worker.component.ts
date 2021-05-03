import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  updatBoolean = false
 
  profile = new FormGroup({
    name: new FormControl(),
    manId: new FormControl(),
    gender: new FormControl("?"),
    workingType: new FormControl("מטפל/ת"),
    manPower: new FormControl("?"),
    car: new FormControl( "לא"),
    workingstatus: new FormControl("עובד"),
    shifts: new FormControl(null),
    startDate: new FormControl(""),
    note:new FormControl(""),
    
  })
  constructor(public s: MainService,public router:Router) {


    
    if (s.updateWorker.id > 0) {
      this.updatBoolean=true
      this.profile.setValue(
        {
          name: s.updateWorker.name,
          manId: s.updateWorker.manId,
          gender: s.updateWorker.gender,
          workingType:  s.updateWorker.workingType,
          manPower: s.updateWorker.manPower,
          car: s.updateWorker.car,
          workingstatus: s.updateWorker.workingstatus,
          shifts: s.updateWorker.shifts,
          startDate: s.updateWorker.startDate,
          note:s.updateWorker.note
        })
    }


  }
 


  ngOnInit(): void {
  }
  
 



  



  log() {
    this.profile.value.id=this.s.updateWorker.id
    if(this.updatBoolean){this.s.updateProfile(this.profile.value).subscribe((r) => {
      this.s.refres()
    })}
    else if(this.profile.value.name && this.profile.value.manId){
       this.s.adds(this.profile.value).subscribe((r) => {
      this.s.refres()
    })}
    else{alert("בבקשה מלא שם וסיסמה")
  return}
    this.router.navigate(['/main screen/workers'])
  }
}
 