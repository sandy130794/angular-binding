import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
	  <h2>
		  Welcome Sandeep
	  </h2>
	  `,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
