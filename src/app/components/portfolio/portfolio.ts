import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

  itemsShow:any=""

  portfolioDetails:string[] = [
    "/images/poert1.png",
    "/images/port2.png",
    "/images/port3.png",
    "/images/poert1.png",
    "/images/port2.png",
    "/images/port3.png",
  ]

  showData(item:string):void{
  this.itemsShow = item 
  }
}
