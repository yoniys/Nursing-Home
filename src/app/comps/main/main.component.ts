import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  chece = 0
  changeweeknum = 0
  week
  alldaysintheweek


  
  constructor(public s: MainService, private elementRef: ElementRef, private cd: ChangeDetectorRef) {
    this.alldaysintheweek = this.s.allweek()
    this.week = s.getweekdate()
    
    
  
    let num = -1
    this.updethistorylist()

  }

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    if (this.chece > 0 && this.s.rout == "main") {
      // this.getallshifts() 
      this.getallshifts2()
    }
    // this.allshiftsarr = []
    // for (let index = 0; index < 189; index++) {
    //   this.allshiftsarr.push('')
    // }
    let num = -1
    const selects = this.elementRef.nativeElement.querySelectorAll('p');
    selects.forEach(select => {
      num += 1
      select.id = num

      this.cd.detectChanges();
    });
    this.chece++

  }

  changeweek(num) {
    this.changeweeknum += num
    this.week = this.s.getweekdate(this.changeweeknum)
    this.alldaysintheweek = this.s.allweek(this.changeweeknum)



  }

  //////////////????????????????????????????
  public async updethistorylist() {
    await this.s.gethistorylist()
  }
  ///////////////////////?????????????

  refresh() {
    let num = 0
    const selects = this.elementRef.nativeElement.querySelectorAll('p');
    
    selects.forEach(select => {

      select.innerHTML = this.s.allshiftsarr[num]
      num++
      this.cd.detectChanges();
    });
  }

  getallshifts2() {
    this.s.allshiftsarr= this.s.allshiftsarr.map(x=>"")

    for (let i of this.s.historylist) {
      if (this.alldaysintheweek.includes(i.date)) {
        this.s.allshiftsarr[i.shiftid] = i.name
        // this.s.allshiftsarr[i.shiftid] = {name:i.name,car:i.car}
      }
    }
    this.refresh()
  }
}


 // getallshifts() {
  //   for (let id = 0; id < this.allshiftsarr.length; id++) {
  //     let day = Math.floor(id / 27);
  //     let shiftsdaynum = (Math.floor(id / 9))
  //     shiftsdaynum = shiftsdaynum - (shiftsdaynum - (shiftsdaynum % 3))
  //     let expertise
  //     let workernum = id % 3
  //     let departmentnum = id % 27
  //     departmentnum = Math.floor((departmentnum / 3) % 3)
  //     for (let i of this.s.historylist) {
  //       if (i.date == this.alldaysintheweek[day] && i.department == this.s.departments[departmentnum]
  //         && i.shift == this.s.shiftsday[shiftsdaynum]
  //         && i.workernum == this.s.workersforshift[workernum]
  //       ) {
  //         this.allshiftsarr[id] = i.name
  //       }
  //     }



  //   }
  //   this.refresh()
  // }