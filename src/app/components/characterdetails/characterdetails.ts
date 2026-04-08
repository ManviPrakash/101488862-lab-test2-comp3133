import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HarryPotterService } from '../../services/harry-potter';
import { Character } from '../../models/character';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class CharacterdetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private hpService = inject(HarryPotterService);
  character = signal<Character | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe(data => {
        if (data && data.length > 0) this.character.set(data[0]);
      });
    }
  }
}