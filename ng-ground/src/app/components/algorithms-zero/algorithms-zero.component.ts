import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-algorithms-zero",
  templateUrl: "./algorithms-zero.component.html",
  styleUrls: ["./algorithms-zero.component.scss"],
})
export class AlgorithmsZeroComponent implements OnInit {
  arrayElements = [3, 3, 3, 4, 5];
  majorityElement: number;

  constructor() {}

  ngOnInit(): void {
    this.majorityElement = this.getMajElement(
      this.arrayElements,
      this.arrayElements.length
    );
  }

  getMajElement(arr, n: number) {
    arr = arr.sort((a, b) => a - b);
    let max_count: number = 0,
      max_ele = -1,
      temp = arr[0],
      count = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] == temp) {
        count++;
      } else {
        count = 0;
        temp = arr[i];
      }
      if (count > max_count) {
        max_count = count;
        if (max_count > n / 2) {
          max_ele = arr[i];
          break;
        }
      }
    }
    return max_ele;
  }
}
