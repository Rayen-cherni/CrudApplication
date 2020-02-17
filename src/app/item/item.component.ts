import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() fonctionName: string;
  @Input() Name: string ;
 @Input() cas: string;
 @Input() cas2: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
