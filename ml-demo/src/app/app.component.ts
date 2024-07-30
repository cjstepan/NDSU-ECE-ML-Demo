import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PROCESSES } from './data/process-data';
import { Process } from './model/process';
import { ProcessCardComponent } from './process-card/process-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProcessCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ml-demo';
  // use ngFor to iterate over the processes array
  process1: Process = PROCESSES[0];
  process2: Process = PROCESSES[1];
  process3: Process = PROCESSES[2];
  process4: Process = PROCESSES[3];
  process5: Process = PROCESSES[4];
  process6: Process = PROCESSES[5];
  process7: Process = PROCESSES[6];
  process8: Process = PROCESSES[7];
  process9: Process = PROCESSES[8];
  process10: Process = PROCESSES[9];
}
