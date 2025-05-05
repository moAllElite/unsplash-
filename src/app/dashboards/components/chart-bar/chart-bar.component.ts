import { isPlatformBrowser } from '@angular/common';
import { Component,inject, input, InputSignal, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { StatsModel } from '../../model/stats.model';

@Component({
  selector: 'app-chart-bar',
  imports: [ChartModule,CardModule],
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.scss'
})
export class ChartBarComponent {

  stats: InputSignal<StatsModel |undefined> = input<StatsModel | undefined>();
  data:any;
    options: any;

    platformId = inject(PLATFORM_ID);

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
                labels:  this.stats()?.downloads.historical.values
                .map((item)=> item.date.toString().toUpperCase()),
                datasets: [
                    {
                        label: 'Historique des téléchargements',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data:  this.stats()?.downloads.historical.values
                        .map((item)=> item.value)
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
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
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
        }
    }


}
