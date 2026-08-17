import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../app';
import {DecimalPipe, UpperCasePipe} from '@angular/common';
import {CustomPipePipe} from '../pipes/custom-pipe-pipe';

@Component({
  selector: 'app-list-item',
  imports: [
    DecimalPipe,
    UpperCasePipe,
    CustomPipePipe
  ],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem implements OnInit {
  ngOnInit(): void {
    console.log("Hallo2");
  }

  // Normalerweise muss das Feld beschrieben sein vor dem abschicken mit bspw index! oder todo! sagen wir:
  // Vertrau mir es ist bereits beschrieben, arbeite einfach damit !
  // Mit @Input bekommt er die Infos rein:
  // Description: Ich habe hunger, done: false und index: 3
  @Input({required: true}) todo!: TodoItem;
  @Input() index!: number;

  //Emitter ruf die Logik zum löschen im Parent
  @Output() deleteItem = new EventEmitter<number>();


}
