import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { Department } from '../../model/department';
import {Observable, Subscription, tap} from 'rxjs';
import { DepartmentService } from '../../service/department.service';
import { ActivatedRoute } from '@angular/router';
import {AsyncPipe, NgForOf} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule,
    MatRadioModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatListModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public currentCategoryId: string = '01';
  public departments$: Observable<Department[]> = this.departmentService.getDepartments();


  constructor(private departmentService: DepartmentService) {
  }
}
