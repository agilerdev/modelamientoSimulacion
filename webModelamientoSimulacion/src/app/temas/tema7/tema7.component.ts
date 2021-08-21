import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tema7',
  templateUrl: './tema7.component.html',
  styleUrls: ['./tema7.component.css'],
})
export class Tema7Component implements AfterViewInit {
  displayedColumns: string[] = [
    'index',
    'semanas',
    'estudiantes',
    'MMO_3',
    'MMO_4',
    'e_MM3',
    'e_MM4',
  ];
  dataSource = new MatTableDataSource();
  mostrar = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {}
  pressed() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = dataPrueba;
    this.mostrar = true;
  }
}

const dataPrueba = [
  {
    semanas: 1,
    estudiantes: 688,
    MMO_3: null,
    MMO_4: null,
    e_MM3: null,
    e_MM4: null,
  },
  {
    semanas: 2,
    estudiantes: 745,
    MMO_3: null,
    MMO_4: null,
    e_MM3: null,
    e_MM4: null,
  },
  {
    semanas: 3,
    estudiantes: 780,
    MMO_3: 737.7,
    MMO_4: null,
    e_MM3: 42.3,
    e_MM4: null,
  },
  {
    semanas: 4,
    estudiantes: 790,
    MMO_3: 771.7,
    MMO_4: 750.8,
    e_MM3: 18.3,
    e_MM4: 39.2,
  },
  {
    semanas: 5,
    estudiantes: 1050,
    MMO_3: 873.3,
    MMO_4: 841.2,
    e_MM3: 176.7,
    e_MM4: 208.8,
  },
  {
    semanas: 6,
    estudiantes: 870,
    MMO_3: 903.3,
    MMO_4: 872.5,
    e_MM3: -33.3,
    e_MM4: -2.5,
  },
  {
    semanas: 7,
    estudiantes: 650,
    MMO_3: 856.7,
    MMO_4: 840,
    e_MM3: -206.7,
    e_MM4: -190,
  },
  {
    semanas: 8,
    estudiantes: 670,
    MMO_3: 730,
    MMO_4: 810,
    e_MM3: -60,
    e_MM4: -140,
  },
  {
    semanas: 9,
    estudiantes: 750,
    MMO_3: 690,
    MMO_4: 735,
    e_MM3: 60,
    e_MM4: 15,
  },
  {
    semanas: 10,
    estudiantes: 794,
    MMO_3: 738,
    MMO_4: 716,
    e_MM3: 56,
    e_MM4: 78,
  },
  {
    semanas: 11,
    estudiantes: 820,
    MMO_3: 788,
    MMO_4: 758.5,
    e_MM3: 32,
    e_MM4: 61.5,
  },
  {
    semanas: 12,
    estudiantes: 1120,
    MMO_3: 911.3,
    MMO_4: 871,
    e_MM3: 208.7,
    e_MM4: 249,
  },
  {
    semanas: 13,
    estudiantes: 970,
    MMO_3: 849.65,
    MMO_4: 814.75,
    e_MM3: 120.35,
    e_MM4: 155.25,
  },
];
