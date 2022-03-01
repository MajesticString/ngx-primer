import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  constructor() {}

  @Input() varient!: 'condensed' | 'spacious';

  ngOnInit(): void {}
}
