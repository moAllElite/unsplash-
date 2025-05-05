import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ChartBarComponent } from "../chart-bar/chart-bar.component";
import { StatiticsService } from '../../services/statitics.service';
import { environment } from '../../../../environments/environment.development';
import { rxResource } from '@angular/core/rxjs-interop';
import { StatsModel } from '../../model/stats.model';
import { ActivatedRoute } from '@angular/router';
import { ChartLineComponent } from "../chart-line/chart-line.component";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  imports: [ChartBarComponent,CardModule, ChartLineComponent, LoadingSpinnerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  photo_id: string = '';
  router = inject(ActivatedRoute);

  // Inject the ActivatedRoute to access route parameters
  ngOnInit(): void {
      this.photo_id = this.router.snapshot.params['id'];// Get the photo ID from the route parameters
  }

  stats = signal<StatsModel | undefined>(undefined); // Initialize the stats signal

  statsService : StatiticsService = inject(StatiticsService);

  client_id = environment.clientId;

  // Photo ID for which you want to fetch statistics
  statsResources = rxResource({
    request:()=> this.photo_id,
    loader:({request:photo_id}) => this.statsService.getAllStatisticsByPhotoId(this.photo_id, this.client_id)      }
  );

  


}
