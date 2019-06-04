import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CatsList.css';

 class CatsList extends Component{
 	render(){
 		const {cats} = this.props;
 		const catsBrief = cats.map((cat, i) => (
 			<div className="Cat col-xs-12 col-md-4 mb-3 text-center" key={i}>
	 				<img src={cat.src} alt={cat.breed}/>
	 				<Link to={`/cats/${cat.breed}`} className="underline">
	 					<p>{cat.breed}</p>
	 				</Link>
 			</div>
 		))
 		return(
 			<div className="container CatsList">
 				<h1 className="display-1 mt-3 mb-3">Cats List!</h1>
 				<div className="row">
 					{catsBrief}
 				</div>
 			</div>
 		)
 	}
 }

 export default CatsList;