import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Employees from './employees';
//import Employee from './employees';
//import Tutorial from '../bar-chart/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private dbPath = '/employees';

  employeesRef: AngularFireList<Employees> = null;

  constructor(private db: AngularFireDatabase) {
    this.employeesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Employees> {
    return this.employeesRef;
  }
}