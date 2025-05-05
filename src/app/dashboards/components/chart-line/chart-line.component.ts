import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, input, InputSignal, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { StatsModel } from '../../model/stats.model';

@Component({
  selector: 'app-chart-line',
  imports: [ChartModule],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.scss'
})
export class ChartLineComponent {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);
  stats: InputSignal<StatsModel |undefined> = input<StatsModel | undefined>();


  constructor(private readonly cd: ChangeDetectorRef) {}



  ngOnInit() {
      this.initChart();
  }

  initChart() {
      if (isPlatformBrowser(this.platformId)) {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
          const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

          this.data = {
              labels: this.stats()?.views.historical.values.map((item)=> item.date.toString().toUpperCase()),
              datasets: [
                  {
                      label: 'Historique des vues',
                      fill: false,
                      borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                      yAxisID: 'y1',
                      tension: 0.4,
                      data: this.stats()?.views.historical.values.map((item)=> item.value)
                  }
              ]
          };

          this.options = {
              stacked: false,
              maintainAspectRatio: false,
              aspectRatio: 0.6,
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder
                      }
                  },
                  y: {
                      type: 'linear',
                      display: true,
                      position: 'left',
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder
                      }
                  },
                  y1: {
                      type: 'linear',
                      display: true,
                      position: 'right',
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          drawOnChartArea: false,
                          color: surfaceBorder
                      }
                  }
              }
          };
          this.cd.markForCheck();
      }
  }
}
