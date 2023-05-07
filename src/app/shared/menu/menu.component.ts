import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();
  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;

  constructor() {
    console.log('constructor called.');
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  menuSwitch(){
    this.selectedPage.emit(this.currentPage);
  }

  close(logout?: boolean){
    this.onCloseSidenav.emit(true);
    if(logout === true){
      this.onLogout.emit(logout);
    }
  }
}
