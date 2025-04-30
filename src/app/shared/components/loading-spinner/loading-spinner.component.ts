import { Component, input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-loading-spinner',
  imports: [ProgressSpinnerModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  strokeWidth = input.required<string>();
  animationDuration = input.required<string>();
}
