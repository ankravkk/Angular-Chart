import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../bar-chart/employee.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeList implements OnInit {
  employee: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.retrieveEmployee();
  }

  refreshList() {
    this.currentTutorial = null;
    this.currentIndex = -1;
    this.retrieveEmployee();
  }
  setActiveTutorial(tutorial, index): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  retrieveEmployee() {
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

  setActiveEmployee(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
   // this.employeeService.deleteAll()
     // .then(() => this.refreshList())
    //  .catch(err => console.log(err));
  }
}