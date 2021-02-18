import { Injectable } from '@angular/core';
import { START_MONDAY } from 'src/app/constants/constants';
import { CalendarData } from 'src/app/interfaces/calendar-data';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private date = new Date();

  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  currentDay = this.date.getDay();

  constructor() { }

  getStartingDayOfMonth(year: number, month: number): number {
    return new Date(year, month).getDay();
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getDaysArray(year: number, month: number): number[] {
    let daysInMonth = this.getDaysInMonth(year, month);
    let startingDayOfMonth = this.getStartingDayOfMonth(year, month);
    let daysInMonthArray:number[] = new Array(START_MONDAY[startingDayOfMonth]);

    for(let i = 0; i < daysInMonth; i++){
      daysInMonthArray.push(i + 1);
    }

    return daysInMonthArray;
  }

  getCurrentMonthData(): CalendarData {
    return { 
      year: this.currentYear,
      month: this.currentMonth,
      daysArray: this.getDaysArray(this.currentYear, this.currentMonth)
    }
  }
}
