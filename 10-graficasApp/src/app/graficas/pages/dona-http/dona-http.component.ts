import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
 
  constructor(private graficasService: GraficasService) {}
 
  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   this.doughnutChartData = {
    //     labels: Object.keys(data),
    //     datasets: [{ data: Object.values(data) }],
    //   };
    // });
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        // console.log(data);
        this.doughnutChartData = { labels, datasets };
      });
  }
}
