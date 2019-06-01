import React, {Component} from 'react';
import axios from 'axios';
import smiley from './laughing.svg';
import Jokes from './Jokes';
import uuid from 'uuid/v4';
import './JokeList.css';

class JokeList extends Component{
	static defaultProps = {
		numOfJokes: 10
	}

	constructor(props){
		super(props);
		// getItem from localStorage if present otherwise set it to an empty array
		this.state = {jokes: JSON.parse(window.localStorage.getItem("jokes") || '[]'), 
					loading: false};

		this.uniqueJokes = new Set(this.state.jokes.map(j => j.joke));
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		if(this.state.jokes.length === 0){
			this.getJokes();
		}
	}

	async getJokes(){
		try{
			const jokes = [];
			const JOKES_API = 'https://icanhazdadjoke.com/';
			let jokeDrawn;
			while(jokes.length < this.props.numOfJokes){
				jokeDrawn = await axios.get(JOKES_API, {headers: { Accept: "application/json"}});

				let newJoke = jokeDrawn.data.joke;
				if(!this.uniqueJokes.has(newJoke)){
					jokes.push({id: uuid(), joke: newJoke, votes:0});
				}
			}
			this.setState(currState => ({
				loading: false,
				jokes: [...currState.jokes, ...jokes]
			}),
				() => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
			);
		}catch(err){
			alert(err);
			this.setState({loading: false});
		}
	}

	handleVote(id, vote){
		this.setState(currState=>({
			jokes: currState.jokes.map(j => 
				j.id === id ? {...j, votes: j.votes + vote} : j
			)
		}),
		() => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
		);
	}

	handleClick(){
		this.setState({loading:true}, this.getJokes);
	}
	render(){
		if(this.state.loading){
			return (
				<div className="JokeList-spinner">
					<i className="far fa-8x fa-laugh fa-spin"></i>
					<h1 className="JokeList-title">Loading...</h1>
				</div>
			)
		}
		const jokes = this.state.jokes.sort((a,b) => b.votes - a.votes).map((j, i) => <Jokes key={j.id} votes={j.votes} jokeText={j.joke} 
			upVote={() => this.handleVote(j.id, 1)} downVote={() => this.handleVote(j.id, -1)}></Jokes>); 

		return(
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title">
						<span>Dad</span> Jokes
					</h1>
					<img src={smiley}/>
					<button className="JokeList-more" onClick={this.handleClick}>More Jokes</button>
				</div>

				<div className="JokeList-jokes">
					{jokes}
				</div>
			</div>
		)
	}
}

export default JokeList; 