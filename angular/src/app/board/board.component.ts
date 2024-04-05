import { Component } from '@angular/core';
import { winsArray, USER_X, USER_O, USER_NONE, DRAW, TAG_X, TAG_O, TAG_NONE } from '../../tools/constants'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  winner:number = USER_NONE;
  user:number = USER_X
  positions:Array<number> = Array(9).fill(USER_NONE)

  handlerSetTag( index:number ){
    const result = this.setTag( index )
    this.check(result)
  }

  setTag( index:number ){
    if( this.positions[ index]==USER_NONE && this.winner==USER_NONE ) {
      this.positions[ index ] = this.user
      this.user = this.user===USER_X ? USER_O : USER_X
    }
    return this.positions
  }

  renderTag( value:number ): string {
    switch( value ) {
      case USER_X: return TAG_X;
      case USER_O: return TAG_O;
      default: return TAG_NONE;
    }
  }

  check(newPositions:Array<number>) {
    const procesedArray = winsArray.map( ([position1, position2, position3]) => {
        if(
            newPositions[position1]===USER_X &&
            newPositions[position2]===USER_X &&
            newPositions[position3]===USER_X
        ) return USER_X
        else if (
            newPositions[position1]===USER_O &&
            newPositions[position2]===USER_O &&
            newPositions[position3]===USER_O
        ) return USER_O
        else return USER_NONE
    })
    if( procesedArray.includes(USER_X) ) this.winner = USER_X
    else if( procesedArray.includes(USER_O) ) this.winner = USER_O
    else if( !newPositions.includes( USER_NONE ) ) this.winner = DRAW
  }

  reset(){
    this.winner = USER_NONE
    this.user = USER_X
    this.positions = Array(9).fill(USER_NONE)
  }

}
