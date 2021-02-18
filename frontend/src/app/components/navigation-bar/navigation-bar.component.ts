import { Component, OnInit } from '@angular/core';
import { CalendarData } from 'src/app/interfaces/calendar-data';
import { CalendarDataService } from 'src/app/services/calendar-data/calendar-data.service';

@Component({
  selector: 'ca-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  data: CalendarData;

  constructor(private calendarDataService: CalendarDataService) {
    this.data = this.calendarDataService.getData();
  }

  ngOnInit(): void {
  }

  onNextClick(): void {
    this.calendarDataService.nextMonth();
  }

  onPreviousClick(): void {
    this.calendarDataService.previousMonth();
  }

  onTodayClick(): void {
    this.calendarDataService.currentDate();
  }
}
