import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  rout = "main"
  user: string
  pagh: number
  workerslist

  updateWorker = { car: "", gender: "", id: 0, manId: "", manPower: "", name: "", note: null, shifts: "", startDate: "", workingType: "", workingstatus: "" }
  ///////!!!!!!!!!!!!!!!!!!any
  historylist
  ///////!!!!!!!!!!!!!!!!!!!any
  workersforshift = ['worker1', 'worker2', 'worker3']
  // profil = { name: '', manId: 0, workingType: '', startDate: '', manPower: false }
  // arr
  date = new Date()
  correntfulldate = `${this.date.getUTCDate()}/${this.date.getUTCMonth()}/${this.date.getFullYear()}`
  correntfulldat1e2 = `${this.date.getFullYear()}-${this.date.getUTCMonth()}-${this.date.getUTCDate()}`
  // correntweekdate=this.getweekdate()
  tagsTabalMonth=['מחלקה ג',"מחלקה ב","מחלקה א","משמרות","תאריך"]
  week = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת',]
  numofshifts = [1, 2, 3]
  shiftsday = ['בוקר', 'ערב', 'לילה']
  departments = ['מחלקה ג', 'מחלקה ב', 'מחלקה א']

  allshiftsarr = []

  workerslistByType
  constructor(public http: HttpClient) {
    for (let index = 0; index < 189; index++) {
      this.allshiftsarr.push('')
    }
    this.gethistorylist()

    this.http.get('https://nursinghome2020.herokuapp.com/findAll')
      .subscribe((result) => {
        this.workerslist = result
      })
  }
  
  ////////////////////profile////////////////////
  public adds(profile) {
    return this.http.post('https://nursinghome2020.herokuapp.com/create', profile)
  }
  public updateProfile(profile){
    return this.http.patch('https://nursinghome2020.herokuapp.com/update-profile',profile)
  }

  public async deleteworker(id) {
    await this.http.delete(`https://nursinghome2020.herokuapp.com/delete/${id}`)
      .subscribe((d) => {
        this.refres()
      })
  }
 
  refres() {
    this.http.get('https://nursinghome2020.herokuapp.com/findAll')
      .subscribe((result) => {
        this.workerslist = result
      })
  }
public  getWorkerslistByType(type="אח/ות"){
 return  this.http.get(`http://localhost:3000/findType/${encodeURIComponent(type)}`)
}


  //////////////////////////date////////////////////
  getweekdate(num = 0) {
    let day = this.date.getDay()
    let startweekdate = `${new Date(Date.now() - (day - (num * 7)) * 24 * 60 * 60 * 1000).getDate()}.${new Date(Date.now() - (day - (num * 7)) * 24 * 60 * 60 * 1000).getMonth() + 1}.${new Date(Date.now() - (day - (num * 7)) * 24 * 60 * 60 * 1000).getFullYear()}`
    let endweek = `${new Date(Date.now() + (7 * 24 * 60 * 60 * 1000) - ((day - (num * 7)) * 24 * 60 * 60 * 1000)).getDate()}.${new Date(Date.now() + (7 * 24 * 60 * 60 * 1000) - ((day - (num * 7)) * 24 * 60 * 60 * 1000)).getMonth() + 1}.${new Date(Date.now() + (7 * 24 * 60 * 60 * 1000) - ((day - (num * 7)) * 24 * 60 * 60 * 1000)).getFullYear()}`
    let stringfullweekdate = `${startweekdate}-------${endweek}`

    return [startweekdate, endweek]
  }
  allweek(num = 0) {
    let weekarr = []
    let daynum = 0
    let day = this.date.getDay()
    while (daynum < 7) {
      weekarr.push(`${new Date(Date.now() - (day - (num * 7) - daynum) * 24 * 60 * 60 * 1000).getDate()}.${new Date(Date.now() - (day - (num * 7) - daynum) * 24 * 60 * 60 * 1000).getMonth() + 1}.${new Date(Date.now() - (day - (num * 7) - daynum) * 24 * 60 * 60 * 1000).getFullYear()}`)
      daynum++ }
    return weekarr
  }
  //////////////////////historylist////////////////////
  public getWorker(id): Observable<any> {
    return this.http.get(`https://nursinghome2020.herokuapp.com/findOne/${id}`)
  }

  public gethistorylist() {
    this.http.get('https://nursinghome2020.herokuapp.com/findAll2')
      .subscribe((result) => {
        this.historylist = result
      })
  }

  public getHistory(filter?: string): Observable<any> {
    return this.http.get(`https://nursinghome2020.herokuapp.com/oneHistoryOnWorker/${filter}`);
  }
  // ///////////////////////note///////////////////
  public addNote(note, week) {
    return this.http.post("https://nursinghome2020.herokuapp.com/noteCreate", { note: note, date: week })
  }
  public getNotes(week: string): Observable<any> {
    return this.http.get(`https://nursinghome2020.herokuapp.com/findAllNotes/${encodeURIComponent(week)}`);
  }
  public deleteNote(id) {
    return this.http.delete(`https://nursinghome2020.herokuapp.com/deleteNote/${id}`);
  }

}



