import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-algorithms-minus",
  templateUrl: "./algorithms-minus.component.html",
  styleUrls: ["./algorithms-minus.component.scss"],
})
export class AlgorithmsMinusComponent implements OnInit {
  reqAns1: any;
  reqAns2: any;
  reqAns3: any;

  constructor() {}

  ngOnInit(): void {
    this.reqAns1 = this.solution1([0,0,0,1,0,0,1,1])
    this.reqAns2 = this.solution1([1,1,0,0,1,0])

    this.reqAns1 = this.solution2("abccbd", [0, 1, 2, 3, 4, 5]);
    this.reqAns2 = this.solution2("aaaa", [3, 4, 5, 6]);
  }


  solution2(S, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let prev = S[0];
    let totalCost = 0;

    for (let i = 1; i < S.length; i++) {
      if (prev == S[i]) {
        if (C[i] < C[i - 1]) {
          totalCost = totalCost + C[i];
        } else {
          totalCost = totalCost + C[i - 1];
        }
      }
      prev = S[i];
    }

    return totalCost;
  }

  solution1(A) {
    let count = 0;
    let n = A.length;
    let prev = A[0];

    for(let i=1; i<n; i++) {
      if(prev == A[i]) {
        count++;
        if(i !== 1) {
          A[i] = A[i]==1?0:1;
        }
        prev = A[i];
      } else {
        prev = A[i];
      }
    }
    return count;
  }
}
