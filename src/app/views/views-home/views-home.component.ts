import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  states = [
    { value: 22, label: '# of Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ];

  items = [
    { image: '/assets/images/couch.jpg', title: 'Couch', description:'This is a fantastic couch grey to sit on' },
    { image: '/assets/images/couch_blue.webp', title: 'Couch Blue', description:'This is a fantastic couch blue to sit on' }
  ];  

  constructor() { }

  ngOnInit(): void {
  }

}
