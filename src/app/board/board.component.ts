import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares:any
  xIsNext:boolean
  winner:string
  c:number = 0
  constructor() { }
  //ngOnInit can help with initial setup work
  ngOnInit(): void {
    this.newGame()
  }

  newGame(){
    this.squares = Array(9).fill(null)
    this.winner =null
    this.xIsNext = true
    this.c = 0
  }

  get player(){
    return this.xIsNext ? 'X' : 'O'
  }

  makemove(idx:number){
    //console.log(idx)
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player)
      this.c++;
      console.log(this.c)
      this.xIsNext  = !this.xIsNext
    }

    this.winner = this.calculateWinner()
    if(this.c === 9){
      this.checkIfWon()
    }
  }

  calculateWinner(){
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let i=0;i<WINNING_COMBINATIONS.length; i++){
      const [a,b,c] = WINNING_COMBINATIONS[i];
      if(
        this.squares[a]&&
        this.squares[a] === this.squares[b]&&
        this.squares[a] === this.squares[c]
      ){
        return this.squares[a];
      }
    }
    return null
  }

  checkIfWon(){
    if(this.winner !== 'X' && this.winner !=='O'){
      return this.winner = 'DRAW'
    }
  }

}
