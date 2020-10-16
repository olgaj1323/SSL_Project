import { Component, OnInit } from '@angular/core'
import { ChartType } from 'chart.js'
import { MultiDataSet, Label } from 'ng2-charts'
import { Form, FormGroup, FormBuilder, FormControlName, FormControl } from '@angular/forms'
import { NgModule } from '@angular/core'
import { ChartDataSets, ChartOptions } from 'chart.js'
import { Color } from 'ng2-charts'
import { AfterViewInit } from '@angular/core'
import c3 from 'c3'

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss'],
})
export class EstadisticasComponent implements OnInit {
  usuarios = [
    {
      cedula: '89876543456',
      nombre: 'Andres',
      apellido: 'Suarez',
      area: 'Comercial',
      estado: 'Finalizado',
    },
    {
      cedula: '89876543456',
      nombre: 'Andres',
      apellido: 'Suarez',
      area: 'Comercial',
      estado: 'No Finalizado',
    },
    {
      cedula: '89876543456',
      nombre: 'Andres',
      apellido: 'Suarez',
      area: 'Comercial',
      estado: 'Finalizado',
    },
    {
      cedula: '89876543456',
      nombre: 'Andres',
      apellido: 'Suarez',
      area: 'Comercial',
      estado: 'No Finalizado',
    },
  ]
  dateFormat = 'yyyy/MM/dd'
  selectedValue: string
  constructor() {}

  ngOnInit(): void {}
  doughnutData = {
    datasets: [
      {
        data: [305, 50], //[completo,falta ]
        backgroundColor: ['#EA931C', '#E4E9F1'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  }
  doughnutOptions = {}
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla']
  doughnutChartData: MultiDataSet = [[55, 25, 20]]
  doughnutChartType: ChartType = 'doughnut'

  //--------------------Bar Chart----------------------
  barChartType: ChartType = 'bar'
  barChartLabels: Label[] = ['25%', '50%', '75%', '100%']
  barChartData: ChartDataSets[] = [
    {
      data: [0.3, 0.8, 0.4, 0.5],
      backgroundColor: [
        'rgba(77, 166, 255, 0.5)',
        'rgba(218, 165, 32, 0.5)',
        'rgba(175, 0, 42, 0.5)',
        'rgba(33, 186, 69, 0.5)',
      ],
    },
  ]
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  }
  colors = []
  // {
  //   label: 'Porcentaje de ususarios'
  //   backgroundColor: [
  //     'rgba(255, 99, 132, 0.2)',
  //     'rgba(54, 162, 235, 0.2)',
  //     'rgba(255, 206, 86, 0.2)',
  //     'rgba(75, 192, 192, 0.2)',
  //   ]
  //   borderColor: [
  //     'rgba(255,99,132,1)',
  //     'rgba(54, 162, 235, 1)',
  //     'rgba(255, 206, 86, 1)',
  //     'rgba(75, 192, 192, 1)',
  //   ]
  // borderWidth: 1

  // },

  // barChartOptions = {

  //   scales: {},
  //   title: {
  //     display: true,
  //     text: 'Custom Chart Title',
  //     position: 'bottom',
  //     fontFamily: 'Ubuntu',
  //   },
  //   tooltips: {
  //     enabled: true,
  //   },
  //   responsive: true,
  // }
  ngAfterViewInit() {
    const colors = {
      complet: '#F79744',
      noComplete: '#F2F4F8',
    }
    const donutChartUno = c3.generate({
      bindto: '#donut-chart1',
      tooltip: {
        grouped: false,
      },
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.complet, colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
    const donutChartDos = c3.generate({
      bindto: '#donut-chart2',
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.complet, colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
    const donutChartTres = c3.generate({
      bindto: '#donut-chart3',
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.complet, colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
    const donutChartCuatro = c3.generate({
      bindto: '#donut-chart4',
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.complet, colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
    const donutChartCinco = c3.generate({
      bindto: '#donut-chart5',
      legend: {
        show: false,
      },
      data: {
        columns: [
          ['completo', 80],
          ['fala', 140],
        ],
        type: 'donut',
      },
      color: {
        pattern: [colors.complet, colors.noComplete],
      },
      donut: {
        title: '28%',
        label: {
          show: false,
        },
      },
    })
  }
}
