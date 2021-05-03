import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-add-recwest',
  templateUrl: './add-recwest.component.html',
  styleUrls: ['./add-recwest.component.css']
})
export class AddRecwestComponent implements OnInit {
  requestsArr = []
  changeweeknum =0
  week=""
  title:string=""
  constructor(public server: MainService) {this.requestsArr }

  ngOnInit(): void {
    this.changeweek(1)
    this.getNotes(this.week)
  }
  changeweek(num) {
    this.changeweeknum += num
    this.week = `${this.server.getweekdate(this.changeweeknum)[0]} - ${this.server.getweekdate(this.changeweeknum)[1]}`
    this.getNotes(this.week)
  }
  save(req) {
    this.title=''
    this.server.addNote(req,this.week).subscribe(()=>{this.getNotes(this.week)})
    
  }
  
  setbg(color) {
    document.getElementById("notes_input").style.background = color
  }
  getNotes(week) {
    this.server.getNotes(week)
      .subscribe(res => {
        this.requestsArr=res
      })

  }
  deleteNote(id){
    this.server.deleteNote(id).subscribe(()=>{this.getNotes(this.week)})
  }

}
