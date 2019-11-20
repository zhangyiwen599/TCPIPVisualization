import React, { Component } from 'react'



class Block extends Component {
    render() {
        return (
            <div id={this.props.idName}  className="block">
                {this.props.children}
            </div>
        )
    }
}

export default Block
