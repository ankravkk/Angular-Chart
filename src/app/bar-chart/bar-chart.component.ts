import { Component,OnInit  } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { from } from 'rxjs';
import Employee from './employees';
import {EmployeeService} from '../bar-chart/employee.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit{
  employee: any;
  currentemployee = null;
  currentIndex = -1;
  title = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  refreshList(): void {
    this.currentemployee = null;
    this.currentIndex = -1;
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.employee = data;
    });
  }

  setActiveTutorial(tutorial, index): void {
    this.currentemployee = tutorial;
    this.currentIndex = index;
  }
}
  // removeAllTutorials(): void {
  //   this.employeeService.deleteAll()
  //     .then(() => this.refreshList())
  //     .catch(err => console.log(err));
  // }

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];
  
  // barChartColors: Color[] = [
  //   {
  //     borderColor: 'blue',
  //     backgroundColor: '',
  //   },
  // ];

  // barChartData: ChartDataSets[] = [
  //   { 
  //     data: [10000, 37, 60, 70, 46, 33], 
  //     label: 'Best Fruits' 
  //   }
  // ];

