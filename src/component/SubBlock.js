import React, { Component } from 'react'

class SubBlock extends Component {



    render() {
        return (
            <div id={this.props.idName} title={this.props.DivTitle} className="subblock" style={this.props.divStyle}>
                {React.Children.toArray(this.props.children)[1] === 1 && this.props.children[0]}
            </div>
        )
    }
}

export default SubBlock
