const Hello = (props) => {
	return (
		<div> 
			<p> Oi, {props.name}, your age is {props.age}</p>
		</div>
	)
}

const App = () => {
   return (
	 <div>
		<h1> Greetings </h1>
		<Hello name = "Victor" age="22" />

	 </div>
   )
}

export default App;