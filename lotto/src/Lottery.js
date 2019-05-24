import React, {Component} from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';
import lottery from './lottery.png';


class Lottery extends Component{
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    // making array of empty numBalls(6: default)
    this.state={nums:Array.from({length: this.props.numBalls})}
  }
  handleClick = () => {
      // updating the state with random numbers
      this.setState(currState => ({
        nums: currState.nums.map(res => Math.floor(Math.random() * this.props.maxNum) + 1)
      }))
  }
  render(){
    const {title} = this.props;
    return(
      <section className="Lottery">
        <h1>
          <img alt="lottery" src={lottery} 
          style={{width: 70, height: 70, verticalAlign:'middle'}}/> 
            {title}
        </h1>
        <div>
          {this.state.nums.map((res, i) => <LotteryBall nums={res} key={i}/>)}
        </div>
        <button onClick={this.handleClick} className="Lottery-button">Generate</button>
      </section>
    )
  }
}

export default Lottery;
