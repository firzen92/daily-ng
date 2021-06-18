import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-algorithms",
  templateUrl: "./algorithms.component.html",
  styleUrls: ["./algorithms.component.scss"],
})
export class AlgorithmsComponent implements OnInit {
  smallestNumber: number;
  altArr: number[];
  originalArray = [-4, -6, 4, 22, -10, -56, 76, 11, 5, -99];
  numbersArr = [8,9,9];
  frequency: number[];
  addOneResult: number [];

  constructor() {}

  ngOnInit(): void {
    this.smallestNumber = this.getSmallest([1, 2, -3, 4, 4, 5, 5, 5, 5]);
    this.altArr = this.altArray(this.originalArray);
    this.frequency = this.getFreq([2, 3, 2, 3, 4, 5]);
    this.rotateArray(this.originalArray, 3);
    this.addOneResult = this.addOne([...this.numbersArr], this.numbersArr.length);
  }


  addOne(arr, n) {
    let newArr = [0, ...arr];
    function add(a, i) {
      if(a[i] < 9) {
        a[i] = a[i] + 1;
        return;
      }
      a[i] = 0;
      i--;
      add(a, i);
    }
    add(newArr, n);
    return newArr[0] == 0?newArr.slice(1):newArr;
  }



  rotateArray(arr, d) {
    arr.push(...arr.splice(0, d));
  }

  getFreq(A) {
    let temp = new Array(A.length).fill(0);

    A.forEach((val, ind, arr) => {
      temp[val]++;
    });

    return temp;
  }

  // Find the smallest positive number missing from an unsorted Array
  getSmallest(A) {
    let tempArr = new Array(A.length);

    let n = A.length;

    for (let i = 0; i < A.length; i++) {
      if (A[i] > 0 && A[i] < n) {
        tempArr[A[i]] = true;
      }
    }

    for (let i = 0; i < tempArr.length; i++) {
      if (!tempArr[i + 1]) {
        return i + 1;
      }
    }

    return n + 1;
  }

  //Alternate positive and negative numbers]

  altArray(A) {
    let pos = [];
    let neg = [];

    A.forEach((val, ind, arr) => {
      let temp = val > -1 ? pos.push(val) : neg.push(val);
    });

    return A.map((val, ind, arr) => {
      if (ind % 2 == 0) {
        return pos.length ? pos.shift() : neg.shift();
      } else {
        return neg.length ? neg.shift() : pos.shift();
      }
    });
  }
}
