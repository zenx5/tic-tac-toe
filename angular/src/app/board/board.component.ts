import { Component } from '@angular/core';

const winsArray = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,4,2],
  [6,7,8]
]
const USER_X = 1
const USER_O = 2

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  winner:number = 0;
  user:number = USER_X
  positions:Array<number> = Array(9).fill(0)

  setTag( index:number ){
    if( this.positions[ index]==0 ) {
      this.positions[ index ] = this.user
      this.check()
      if( this.winner==0 ) {
        if( this.user === USER_X ) this.user = USER_O
        else this.user = USER_X
      }
      if( !this.positions.includes( 0 ) ) {
        this.winner = 3
      }
    }
  }

  renderTag( value:number ): string {
    switch( value ) {
      case USER_X: return "X";
      case USER_O: return "O";
      default: return "";
    }
  }

  check() {
    winsArray.forEach( line => {
      const [p1, p2, p3] = line
      const row = this.positions.filter( (tag, index) => (index==p1 || index==p2 || index==p3) )
      if( !row.map( tag => tag===this.user ).includes(false) ) {
        this.winner = this.user;
        return
      }
    })
  }

  reset(){
    this.winner = 0
    this.user = USER_X
    this.positions = Array(9).fill(0)
  }

}
