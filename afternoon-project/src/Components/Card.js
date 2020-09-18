import React, { Component } from 'react';

class Card extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='card'>
                <h1 className='name'>{this.props.info.name.first} {this.props.info.name.last}</h1>

                <p><span className='bold'>From: </span>{this.props.info.city},{this.props.info.country}</p>
                <p><span className='bold'>Job Title: </span>{this.props.info.title}</p>
                <p><span className='bold'>Employer: </span>{this.props.info.employer}</p>

                <span className='bold'>Favorite Movies:</span>
                <ol>
                    <li>{this.props.info.favoriteMovies[0]}</li>
                    <li>{this.props.info.favoriteMovies[1]}</li>
                    <li>{this.props.info.favoriteMovies[2]}</li>
                </ol>

                <h1 className='counter'>{this.props.id}/{this.props.count}</h1>
            </div>
        );
    }
}

export default Card;