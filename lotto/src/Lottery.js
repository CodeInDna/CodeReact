import React, {Component} from 'react';
import LotteryBall from './LotteryBall';
// import './App.css';

class Lottery extends Component{
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    this.state={nums:Array.from({length: this.props.numBalls})}
  }
  handleClick = () => {
     this.setState(currState => ({
      nums: currState.nums.map(res => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
  }
  render(){
    const {title, numBalls, maxNum} = this.props;
    return(
      <section className="Lottery">
        <h1>{title}</h1>
        <div>
          {this.state.nums.map(res => <LotteryBall nums={res}/>)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}

export default Lottery;
