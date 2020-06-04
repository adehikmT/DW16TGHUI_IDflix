import React, { Component } from 'react';
import Header from '../component/header';
import VidioPlay from '../component/vidioplayer'
import Detail from '../component/detailfilem'
import Foo from '../component/foooter'

class Detailvidio extends Component {
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