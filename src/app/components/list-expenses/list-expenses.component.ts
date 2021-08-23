
import { ExpenseService } from './../../services/expense.service';
import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  expenses: Expense[] = [];
  constructor(private _expenseService: ExpenseService) { }

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe(
      data => this.expenses = data
    )
  }

}
