import { Component } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../service/department.service';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule,
    MatRadioModule, MatFormFieldModule, MatInputModule, MatSelectModule,MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public departments : Department[] = [];
  public currentCategoryId: number = 1;
  private subscriptions: Subscription[] = [];
  
  constructor( private departmentService : DepartmentService,
                private route : ActivatedRoute) { }

ngOnInit(): void {
  this.route.paramMap.subscribe(() => {
    this.listeDepartments();
  });
  }

  private listeDepartments() : void {
    this.departmentService.getDepartmentsById(this.currentCategoryId)
    .subscribe( 
      data => { this.departments = data })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
