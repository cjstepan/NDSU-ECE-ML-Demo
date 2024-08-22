import { Component} from '@angular/core';
import { Process } from '../model/process';
import { PROCESSES } from '../data/process-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-card.component.html',
  styleUrl: './process-card.component.css'
})
export class ProcessCardComponent {
  processes: Process[] = PROCESSES;
}
