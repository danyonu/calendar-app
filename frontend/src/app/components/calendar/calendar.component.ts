import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date/date.service';
import { CalendarDataService } from 'src/app/services/calendar-data/calendar-data.service';
import { CalendarData } from 'src/app/interfaces/calendar-data';
import { MONTH, WEEK_DAYS } from 'src/app/constants/constants';

@Component({
  selector: 'ca-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  months = MONTH;
  weekDays = WEEK_DAYS;

  data: CalendarData;
  currentMonth: number;
  currentDay: number;

  constructor(private calendarDataService: CalendarDataService, private dateService: DateService) {
    this.data = this.calendarDataService.getData();
    this.currentMonth = this.dateService.currentMonth;
    this.currentDay = this.dateService.currentDay;
  }

  ngOnInit(): void {
  }

}
