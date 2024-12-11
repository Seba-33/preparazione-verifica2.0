import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule,ContainerComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  names: string[]; 
  constructor() { 
     this.names = ['Betoniera', 'Pala meccanica', 'Escavatore', 'Gru cingolata', 'Trivella', 'Rullo compressore', 'Carroponte', 'Dozer', 'Miniescavatore', 'Fresatrice'  ]; 
  }
  ngOnInit() {
  }
}


