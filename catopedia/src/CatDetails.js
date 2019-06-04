import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CatDetails.css';
class CatDetails extends Component{
	render(){
		const {cat} = this.props;
		return(
			<div className="container">
 				<div className="row">
 					<div className="col-md-4 offset-md-4 mt-3 ">
 						<div className="card text-white bg-info CatDetails">
 							<div className="CatDetails-img">
 								<img src={cat.src} className="card-img-top" alt={cat.breed}/>
 							</div>
 							<h4 className="card-header CatDetails-header"><i className="fas fa-paw"></i> &nbsp;{cat.breed}&nbsp; <i className="fas fa-paw"></i></h4>
 							<div className="card-body">
 								<p className="card-text">{cat.desc}</p>
 							</div>
							 <ul className="list-group list-group-flush text-info">
							    <li className="list-group-item CatDetails-info"><span className="CatDetails-title text-muted">LifeSpan :</span> {cat.life}</li>
							    <li className="list-group-item CatDetails-info"><span className="CatDetails-title text-muted">Origin :</span> {cat.origin}</li>
							    <li className="list-group-item CatDetails-info">💡 <span className="CatDetails-title text-muted">Did you know :</span> {cat.fact}</li>
							 </ul>
							 <div className="card-footer CatDetails-footer">
							  <Link to='/cats'>
							  	 <i className="fas fa-long-arrow-alt-left"></i>
							  	 &nbsp;Go Back
							  </Link>
							 </div>
 						</div>
 					</div>
 				</div>
 			</div>
		)
	}
}

export default CatDetails;