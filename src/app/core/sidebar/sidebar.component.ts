import { Component, OnInit } from '@angular/core';
import { Menu } from '../../shared/model/menu.model';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuVoice: Menu[] = [];

  constructor() {
    this.generateMenu();
   }

  ngOnInit(): void {
  }

  private generateMenu(): void{
    this.menuVoice.push({link: '/',name: 'Home'});
    this.menuVoice.push({link: '/user',name: 'Utente'});
    this.menuVoice.push({link: '/my-liquids',name: 'I miei liquidi'});
    this.menuVoice.push({link: '/calculator',name: 'Strumenti'});
    console.log(this.menuVoice);
  }
}
