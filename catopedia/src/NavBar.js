import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class NavBar extends Component{
	render(){
		const {cats} = this.props;
		const Links = cats.map(cat => (
			<li className="nav-item" key={cat.breed}>
				<NavLink exact to={`/cats/${cat.breed}`} className="nav-link">
				        {cat.breed}
				</NavLink>
			</li>
		))
		return(
				<nav className="navbar navbar-expand-lg navbar-dark bg-info">
				  <Link className="navbar-brand" to="/cats">Catopedia</Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item">
				      	<NavLink exact to="/cats" className="nav-link">Home</NavLink>
				      </li>
				        {Links}
				    </ul>
				  </div>
				</nav>
		)
	}
}

export default NavBar;