import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../styles/vidio.css' 
import Data from '../api/filem'

class Vidio extends Component {
  constructor(props){
    super()
}
  render () {
    const style={
      paddingLeft:195,
      marginTop:65,
      backgroundColor:'#000000'
    }

    var url= this.props.id === 1 ? 'https://www.youtube.com/watch?v=kYZut3DWvek' : 'https://www.youtube.com/watch?v=M1bS7YZniRk'

    return(
       <div style={style}>
            <div className='player-wrapper' style={{backgroundColor:'#000000',marginBottom:-100}}>
              <ReactPlayer style={{backgroundColor:'#000000'}}
                className='react-player'
                url={url}
                width='80%'
                height='80%'
              />
            </div>
        </div>    
    )
  }
}

export default Vidio