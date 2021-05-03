import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


resultarr = [];
searchOption="name"
  constructor(public s:MainService) { 
    
  }

  ngOnInit(): void {
    this.filter();
  }
  sarchOption(element1: HTMLElement,element2: HTMLElement){
    element1.className="btn btn-outline-primary active"
    element2.className="btn btn-outline-primary "
this.searchOption=element1.id
this.resultarr=[]
  }

  
  
  


  filter(name?: string): void {
    this.s.getHistory(name).subscribe(res => {
      this.resultarr = res;
    })
  }
  
}
