import { Component, inject, signal, OnInit } from '@angular/core';
import { HarryPotterService } from '../../services/harry-potter';
import { Character } from '../../models/character';
import { CharacterfilterComponent } from '../characterfilter/characterfilter';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CharacterfilterComponent, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class CharacterlistComponent implements OnInit {
  private hpService = inject(HarryPotterService);
  characters = signal<Character[]>([]);

  ngOnInit() { this.loadAll(); }

  loadAll() {
    this.hpService.getAllCharacters().subscribe(data => this.characters.set(data.slice(0, 48)));
  }

  applyFilter(house: string) {
    if (house === 'All') {
      this.loadAll();
    } else if (house === 'None') {
      this.hpService.getAllCharacters().subscribe(data => this.characters.set(data.filter(c => !c.house).slice(0, 48)));
    } else {
      this.hpService.getCharactersByHouse(house).subscribe(data => this.characters.set(data));
    }
  }
}