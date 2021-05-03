import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  hedtable=["","","הערות","הסעות","?כח אדם","תאריך הצטרפות","סוג עובד","משמרות","מין",".ת.ז","שם","סטטוס"]
  constructor(public s:MainService,public router: Router) { }

  ngOnInit(): void {
  }
  delete(id){
    this.s.deleteworker(id)
  }
  edit(id){

    this.s.getWorker(id)
  .subscribe((worker)=>{
    
    this.s.updateWorker=worker
    this.router.navigateByUrl('/main screen/add-worker')
    
})
  }
}
