import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };

  @Input() barCharLabels: string[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  @Input() barChartData: ChartData<'bar'> = {
    labels: this.barCharLabels,
    datasets: [
      // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#F4975B', hoverBackgroundColor: 'red' },
      // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#69CCFF', hoverBackgroundColor: 'red' },
      // { data: [8, 38, 30, 29, 56, 17, 100], label: 'Series C', backgroundColor: '#32FF4D', hoverBackgroundColor: 'red' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'line'
    }
  }

}
