import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/s/main.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(public s:MainService) { }

  ngOnInit(): void {
  }

}
