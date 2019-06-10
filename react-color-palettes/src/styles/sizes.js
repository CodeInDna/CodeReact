
export default{
	up(){

	},
	down(size){
		const sizes = {
			xs: "576px",
			sm: "768px",
			md: "992px",
			lg: "1200px",
			xl: "1600px"
		}
		return `@media (max-width: ${sizes[size]})`
	}
}