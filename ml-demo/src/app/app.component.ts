import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PROCESSES } from './data/process-data';
import { Process } from './model/process';
import { ProcessCardComponent } from './process-card/process-card.component';
import { CommonModule } from '@angular/common';
CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProcessCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ml-demo';
  process1 = PROCESSES[0]
  process2 = PROCESSES[1]
  process3 = PROCESSES[2]
  process4 = PROCESSES[3]
  process5 = PROCESSES[4]
  process6 = PROCESSES[5]
}
