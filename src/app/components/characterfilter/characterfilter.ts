import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class CharacterfilterComponent {
  houseControl = new FormControl('All');
  @Output() filterChanged = new EventEmitter<string>();

  onHouseChange() {
    this.filterChanged.emit(this.houseControl.value || 'All');
  }
}