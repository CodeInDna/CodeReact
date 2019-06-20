// import {withRouter} from 'next/router';
import axios from 'axios';
const Post = ({id, comments}) => (
	<div>
		<h1>Comments for post id: {id}</h1>
		{comments.map(comment => (
			<div key={comment.id}>
			<h5>{comment.email}</h5>
			<p>{comment.body}</p>
			</div>
		))}
	</div>
);

Post.getInitialProps = async({query}) =>{
	const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
	const {data} = res;
	return {...query, comments: data};
}
// export default withRouter(Post);
export default Post;