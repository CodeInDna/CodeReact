import React, {Component} from 'react';
import MyApp from './_app';
import axios from 'axios';
import Link from 'next/link';
/*class Index extends Component{
	static async getInitialProps(){
		console.log("FETCH");
	}
	render(){
		return(
			<h1>Index Page</h1>
		)
	}
}*/
const Index = ({posts}) => {
	return(
		<div>
			
			<h1>Index Page</h1>
			{posts.map(post => (
				<li key={post.id}>
					<Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
				</li>
			))}
		</div>
	)
}
Index.getInitialProps = async() => {
	// https://jsonplaceholder.typicode.com/posts
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
	const {data} = res;
	return {posts: data}
}
export default Index