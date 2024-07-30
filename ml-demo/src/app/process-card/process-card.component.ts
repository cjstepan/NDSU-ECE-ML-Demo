import { Component, Input } from '@angular/core';
import { Process } from '../model/process';

@Component({
  selector: 'app-process-card',
  standalone: true,
  imports: [],
  templateUrl: './process-card.component.html',
  styleUrl: './process-card.component.css'
})
export class ProcessCardComponent {
  @Input() process!: Process;
}
