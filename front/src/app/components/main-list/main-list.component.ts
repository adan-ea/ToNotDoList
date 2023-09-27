import { Component } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent {

  list = [
    {title: 'First task', date: '26.09.2023', priority: 'high'},
    {title: 'Second task', date: '26.09.2023', priority: 'high'},
    {title: 'Third task', date: '26.09.2023', priority: 'middle'},
    {title: 'Fourth task', date: '26.09.2023', priority: 'middle'},
    {title: 'Next task', date: '26.09.2023', priority: 'low'},
    {title: 'Next task', date: '26.09.2023', priority: 'low'},
    {title: 'Next task', date: '26.09.2023', priority: 'low'},
    {title: 'Next task', date: '26.09.2023', priority: 'low'},
    {title: 'Next task', date: '26.09.2023', priority: 'low'},
    {title: 'Next task', date: '26.09.2023', priority: 'low'},
  ]
}
