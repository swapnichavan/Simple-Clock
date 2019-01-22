import React from 'react';
import './Clock.css';

class Clock extends React.Component{
	constructor(props){
		super(props);

		this.state={
			Time:new Date().toLocaleTimeString()
		}
	}

	componentDidMount(){
		setInterval(()=>{
			return this.setState({
				Time:new Date().toLocaleTimeString()
			})
		},1000)
	}
	render(){
		return(
			<div className="wrapper">
			<div className="clock">
			<div className="contianer">
			{this.state.Time}
			<br/>
			{new Date().toDateString()}
			</div>
			</div>
			</div>
			)
	}
}

export default Clock;