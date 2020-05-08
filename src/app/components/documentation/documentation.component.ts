import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  index = 0;
  constructor() { }

  ngOnInit(): void {
  }
  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }
}
