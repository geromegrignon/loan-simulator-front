import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';
import { Department } from '../model/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentUrl = './assets/mock/department.json';
  private department$ = new BehaviorSubject<Department[]>([]);

  constructor(private http : HttpClient) { }

  public loadInitialData() {
    return this.http.get<Department[]>(this.departmentUrl).pipe(
      map((value) => this.department$.next(value)),
      catchError((error, caught) => {
        alert('An occured error');
        console.error(error);
        this.department$.next([]);
        return caught;
      })
    );
  }

  public getDeparments() : Observable<Department[]> {
    return this.department$.asObservable();
  }

  public getDepartmentsById(id : number): Observable<Department[]> {
    return this.department$
      .asObservable()
      .pipe(
        map((departments : Department[]) =>
          departments.filter((d: Department) => d.id  === id)
          )
      );
  }
}
