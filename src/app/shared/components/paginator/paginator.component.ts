import { Component, input } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
@Component({
  selector: 'app-paginator',
  imports: [PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

  row= input.required<number>();
  total_records= input.required<number>();
  first= input.required<number>();
  onPageChange= input.required<(event: PaginatorState) => void>();
}
