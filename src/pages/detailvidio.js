import React, { Component } from 'react';
import Header from '../component/header';
import VidioPlay from '../component/vidioplayer'
import Detail from '../component/detailfilem'
import Foo from '../component/foooter'


class Detailvidio extends Component {
    // constructor(props){
    //     super(props)
    //     //state
    //     this.state={
    //         id:'',
    //         imgUrl:'',
    //         judul:'',
    //         detail:'',
    //         imgSlide:'' 
    //     }
    //   }

    //   componentDidMount(){
    //       const {id}=this.props.match.params
    //     var databyid=Data.filter(dt=>dt.id===id)
    //     const data=databyid[0]
    //     this.setState({
    //         id:data.id,
    //         imgUrl:data.imgUrl,
    //         judul:data.judul,
    //         detail:data.detail,
    //         imgSlide:data.imgSlide
    //         })
    //         console.log(data.id)
    //       }


    render() {
        return (
            <div>
                 <Header token={this.props.token}/>
                 <VidioPlay id={this.props.match.params.id} />
                 <Detail id={this.props.match.params.id}/>
                 <Foo created=" DumpWays Ade"/>
            </div>
        );
    }
}

export default Detailvidio;