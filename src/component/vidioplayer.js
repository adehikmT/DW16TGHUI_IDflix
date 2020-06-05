import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../styles/vidio.css' 
import Data from '../api/filem'

class Vidio extends Component {
  constructor(props){
    super(props)
    //state
    this.state={
      id:this.props.id,
      url:'' 
    }
  }

componentDidMount(){

//props.id 1 = vidio 1 || props.id >1 vidio 2
var databyid=Data.filter(dt=>dt.id===this.state.id)
// console.log('ini id '+this.state.id)
// if(this.state.id === '1'){ urlini='https://www.youtube.com/watch?v=BK0rbzLk0YI' }else{ urlini='https://www.youtube.com/watch?v=kYZut3DWvek'}
    
this.setState({
      url:databyid[0].vidioUrl
    })
  }
 
componentDidUpdate(prevProps,prepState){
  console.log(prepState)
}

  render () {
    const style={
      paddingLeft:195,
      marginTop:65,
      backgroundColor:'#000000'
    }
    console.log(this.state.url+"    ini render")
    return(
       <div style={style}>
            <div className='player-wrapper' style={{backgroundColor:'#000000',marginBottom:-100}}>
              <ReactPlayer style={{backgroundColor:'#000000'}}
                className='react-player'
                url={this.state.url}
                width='80%'
                height='80%'
              />
            </div>
        </div>    
    )
  }
}

export default Vidio