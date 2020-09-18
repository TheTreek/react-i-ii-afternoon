import React, { Component } from 'react';

class Menu extends Component{
    

    render(){

        return(
            <div className='menu-flex'>
                <span className='back txt-btn' onClick={this.props.back}>{this.props.id === 1 ? '' : '\<Previous'}</span>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                </span>
                <span className='next txt-btn' onClick={this.props.next} >{this.props.id === this.props.length ? '' : 'Next>'}</span>
            </div>
        );
    }


}

export default Menu;