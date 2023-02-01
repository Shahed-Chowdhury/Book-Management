import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit { 

  @Input() entity!: string
  @Input() route!: string

  constructor() { }

  ngOnInit(): void {
  }


}
