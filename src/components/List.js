import React from 'react';
import $ from 'jquery'

class List extends React.Component{	
	constructor(){   
		super()		
		this.state={
			abc:[]
		}
	}
	componentDidMount(){
		$(this.refs.s2).animate({
			fontSize:40
		},2000)
		$.ajax({
			type:"get",
			url:"http://47.88.16.225:408/test/",
			async:true,
			dataType:'json',
			success:e=>{
				this.setState({abc:e}) 
			}
		});
	}
	render(){
		return (
			<div>
				<span ref='s' id='aaa'>张瑞</span>
				<span ref='s2'>获取的元素</span>
				<ul>
					{this.state.abc.map(e=><li ref='zr' key={e.id}>{e.name}</li>)}
				</ul>	
			</div>
		)
	}
}

export default List

