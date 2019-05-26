import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }
  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    // TODO: create array-of-arrays of true/false values
    let board = [];
    for(let i = 0; i < this.props.nrows; i++){
      let rows = [];
      for (var j = 0; j < this.props.ncols; j++) {
        rows.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(rows);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
      // if this coord is actually on board, flip it
        board[y][x] = !board[y][x];
      }
    }


    // flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y-1, x);
    flipCell(y+1, x);
    flipCell(y, x-1);
    flipCell(y, x+1);


    // win when every cell is turned off
    let hasWon = board.every(rows => rows.every(cell => !cell));

    this.setState({board, hasWon});
  }



  /** Render game board or winning message. */
  render() {
    // if the game is won, just show a winning msg & render nothing else
    if(this.state.hasWon){
      return (
        <div className="Board-title win">
          <div className="neon-yellow">You</div>
          <div className="neon-blue">WON!</div>
        </div>
      )
    }
    let tblBoard = [];
    for(let x = 0; x < this.props.nrows; x++){
      let rows = [];
      for (let y = 0; y < this.props.ncols; y++) {
        let coord = `${x}-${y}`;
        rows.push(<Cell key={coord} isLit={this.state.board[x][y]} flipCellsAroundMe={() => this.flipCellsAround(coord)}/>)
      }
      tblBoard.push(<tr key={x}>{rows}</tr>);
    }
    return(
      // make table board
      <div>
        <div className="Board-title">
          <div className="neon-yellow">Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        <br/>
        <table className="Board">
          <tbody>
            {tblBoard}
          </tbody>
        </table>
      </div>
    )
  }
}


export default Board;
