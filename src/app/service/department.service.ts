import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, catchError, map, tap} from 'rxjs';
import { Department } from '../model/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentUrl = '/assets/department.json';

  constructor(private http : HttpClient) {
  }

  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentUrl);
  }

  public getDepartmentsById(id : string): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentUrl).pipe(
      map((departments : Department[]) =>
        departments.filter((d: Department) => d.id  === id)
      )
    );
  }
}
