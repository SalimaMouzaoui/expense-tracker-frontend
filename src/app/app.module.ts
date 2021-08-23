import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

const routers: Routes = [
  {
    path: "expenses",
    component: ListExpensesComponent
  },
  {
    path: "addExpense",
    component: AddExpenseComponent
  },
  {
    path: "editExpense/:id",
    component: AddExpenseComponent
  },
  {
    path: "",
    redirectTo: '/expenses',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
