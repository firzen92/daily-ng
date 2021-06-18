import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.scss']
})
export class AlgorithmsComponent implements OnInit {

  answer: number;

  constructor() { }

  ngOnInit(): void {
    this.answer = this.getAns([1,2,-3,4,4,5,5,5,5]);
  }

  // Find the smallest positive number missing from an unsorted Array
  getAns(A) {

    let tempArr = new Array(A.length);

    let n = A.length;

    for(let i=0; i<A.length; i++) {
      if(A[i] > 0 && A[i] < n) {
        tempArr[A[i]] = true;
      }
    }

    for(let i=0; i<tempArr.length; i++) {
      if(!tempArr[i+1]) {
        return i+1;
      }
    }

    return n+1;



  }

}
