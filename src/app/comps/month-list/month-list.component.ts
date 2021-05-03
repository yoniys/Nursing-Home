import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.css']
})
export class MonthListComponent implements OnInit {
  week
  changeweeknum = 0
  dayNumChecke = 0
  numweek
  alldaysintheweek

  // exsistweek = false
  // num = -1
  // arr = []
  // startagin
  // doubleclickcheck =0
  // emptyProfil = { name: '', manId: 0, workingType: '', startDate: '', manPower: false }

  history

  afterViewCheckednum = 0

  savedb = []
  doubleclickid

  workerslist
  workerstype = "אח/ות"
  switchType = "מטפלים/ות"


  constructor(public s: MainService, private elementRef: ElementRef, private cd: ChangeDetectorRef) {
    this.week = s.getweekdate()
    this.alldaysintheweek = this.s.allweek()
    this.s.getWorkerslistByType().subscribe((r) => {
      this.workerslist = r
    })

    // for (let index = 0; index < 189; index++) {
    //   this.arr.push(this.num += 1)
    // }
    // this.startagin=true
  }

  ngOnInit(): void {
    this.s.gethistorylist()
  }


  ngAfterViewChecked(): void {
    this.afterViewCheckednum++
    let num = -1
    const selects = this.elementRef.nativeElement.querySelectorAll('select');
    selects.forEach(select => {
      num += 1
      select.id = num
      this.cd.detectChanges();
    });

    if (this.afterViewCheckednum == 5 || this.afterViewCheckednum == 3) { this.getallshifts2() }

  }


  op(name, id) {
    this.afterViewCheckednum = 8
    if (this.doubleclickid != id) {
      this.doubleclickid = id
      return
    }
    this.doubleclickid = ''
    let existsdb = false
    let day = Math.floor(id / 27);
    let shiftsdaynum = (Math.floor(id / 9))
    shiftsdaynum = shiftsdaynum - (shiftsdaynum - (shiftsdaynum % 3))
    let expertise
    let workernum = id % 3
    let departmentnum = id % 27
    departmentnum = Math.floor((departmentnum / 3) % 3)
    for (let i of this.savedb) {
      if (i.date == this.alldaysintheweek[day] && i.department == this.s.departments[departmentnum]
        && i.shift == this.s.shiftsday[shiftsdaynum]
      ) {
        i.name = name
        existsdb = true

      }
    }
    if (!existsdb) {
      this.savedb.push({
        date: this.alldaysintheweek[day], expertise: expertise,
        department: this.s.departments[departmentnum], shift: this.s.shiftsday[shiftsdaynum],
        workernum: this.s.workersforshift[workernum], name: name, shiftid: id
      })
    }

    
  }
  changeweek(num) {
    this.changeweeknum += num
    this.week = this.s.getweekdate(this.changeweeknum)
    this.alldaysintheweek = this.s.allweek(this.changeweeknum)
    this.afterViewCheckednum = 4
    this.getallshifts2()
  }

  public async save() {
    this.s.http.post('https://nursinghome2020.herokuapp.com/create2',
      this.savedb).subscribe(() => {
        this.s.gethistorylist()
        this.afterViewCheckednum = 3
      })


  }
  claerselect() {
    const selects = this.elementRef.nativeElement.querySelectorAll('select');
    selects.forEach(select => {
      select.value = ''
    });
  }

  getallshifts2() {

    this.s.allshiftsarr = this.s.allshiftsarr.map(x => "")

    for (let i of this.s.historylist) {
      if (this.alldaysintheweek.includes(i.date)) {
        this.s.allshiftsarr[i.shiftid] = i.name
      }
    }
    this.refresh()
  }

  refresh() {
    let num = 0

    const selects = this.elementRef.nativeElement.querySelectorAll('select');

    selects.forEach(select => {

      select.value = this.s.allshiftsarr[num]
      num++
      this.cd.detectChanges();
    });
  }

  switchWorker() {
    if (this.workerstype == "אח/ות") {
      this.workerstype = "מטפל/ת"
      this.switchType = "אחים/ות"
    }
    else {
      this.workerstype = "אח/ות"
      this.switchType = "מטפלים/ות"
    }
    this.s.getWorkerslistByType(this.workerstype).subscribe((r) => {
      this.workerslist = r
    })
  }
 
}
