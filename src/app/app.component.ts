import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MyLiquids';
  isSidebarOpened = false;

  ngOnInit(): void {
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.sidebar-container');
    sidebar.classList.toggle('open');
    if (this.isSidebarOpened) {
      container.classList.add('sidebar-opened');
      container.classList.remove('sidebar-closed');
    } else {
      container.classList.add('sidebar-closed');
      container.classList.remove('sidebar-opened');
    }
  }

}
