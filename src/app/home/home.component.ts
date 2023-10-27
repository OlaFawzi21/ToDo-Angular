import { Component } from '@angular/core';


@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent {
  toDos: string[] = [];
  newToDO: string = '';
  searchText: string = '';

  constructor() {
    this.toDos = JSON.parse( localStorage.getItem( 'todos' ) || '[]' );
  }

  addToDO() {
    if ( this.newToDO.trim() !== '' ) {
      this.toDos.push( this.newToDO );
      localStorage.setItem( 'todos', JSON.stringify( this.toDos ) );
      this.newToDO = '';
      console.log( this.toDos );

    }
  }


  completeToDo( i: number ) {
    this.toDos.splice( i, 1 );
    localStorage.setItem( 'todos', JSON.stringify( this.toDos ) );
  }

  filterToDo() {
    if ( this.searchText !== '' ) {
      const filterToDos = this.toDos.filter( ele => {
        return ele.toLowerCase().includes( this.searchText.toLowerCase() );
      } );
      this.toDos = filterToDos;
    } else {
      this.toDos = JSON.parse( localStorage.getItem( 'todos' ) || '[]' );
    }
  }
}
