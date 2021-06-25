import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  arr1 = [2, 3, 7, 6, 8, -1, -10, 15];
  arr2 = [2, 3, -7, 6, 8, 1, -10, 15];
  originalArray = [-4, -6, 4, 22, -10, -56, 76, 11, 5, -99];
  ans1 = null;
  ans2 = null;

  constructor() { }

  ngOnInit(): void {
    this.ans1 = this.altArray(this.originalArray);
    console.log('ans1 ', this.ans1);
  }

  altArray(A) {
    let pos = [];
    let neg = [];
    A.forEach(val => {
      let temp = val > -1?pos.push(val):neg.push(val);
    });

    return A.map((val, ind, arr) => {
      if(ind%2 == 0) {
        return pos.length?pos.shift():neg.shift();
      } else {
        return neg.length?neg.shift():pos.shift();
      }
    });

  }


}
