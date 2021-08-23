import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl: string = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveExpense(expense: Expense): Observable<Expense>{
    return this._httpClient.post<Expense>(this.getUrl, expense);
  }

  getExpense(id: number): Observable<Expense> {
    return this._httpClient.get<Expense>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }
}
