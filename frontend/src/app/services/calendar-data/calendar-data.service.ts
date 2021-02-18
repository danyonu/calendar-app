import { Injectable } from '@angular/core';
import { CalendarData } from 'src/app/interfaces/calendar-data';
import { DateService } from '../date/date.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {
  private calendarDataObj: CalendarData;

  constructor(private dateService: DateService) {
    this.calendarDataObj = this.dateService.getCurrentMonthData();
  }

  getData(): CalendarData {
    return this.calendarDataObj;
  }

  currentDate(): void {
    let currentDate = this.dateService.getCurrentMonthData();
    
    this.calendarDataObj.month = currentDate.month;
    this.calendarDataObj.year = currentDate.year;
    this.calendarDataObj.daysArray = currentDate.daysArray;
  }

  nextMonth() {
    let dataObj = this.calendarDataObj;
    
    if (dataObj.month >= 11) {
      dataObj.month = 1;
      dataObj.year++;
    } else {
      dataObj.month++;
    }

    this.updateMonthDays();
  }

  previousMonth() {
    let dataObj = this.calendarDataObj;
    
    if (dataObj.month < 1) {
      dataObj.month = 11;
      dataObj.year--;
    } else {
      dataObj.month--;
    }
    
    this.updateMonthDays();
  }

  updateMonthDays() {
    const year = this.calendarDataObj.year;
    const month = this.calendarDataObj.month;

    this.calendarDataObj.daysArray = this.dateService.getDaysArray(year, month);
  }
}
