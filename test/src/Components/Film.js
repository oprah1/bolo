import React, {Component} from 'react';
import Headers from './Header.js';
import './css/searchFilm.css';




class Film extends Component {
    render (props) {
        return(
            <div>
                <Headers />
                    <div className='carte'>
                        <h1>Bon film</h1>
                        <p>{this.props.suggestion}</p>
                    </div>

                <Headers />
            </div>
        )
    }
}

export default Film;