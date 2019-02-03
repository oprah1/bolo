import React, {Component} from 'react';
import Headers from './Header.js';
import './css/searchFilm.css';
import { Link } from "react-router-dom";


const url = "https://api.tvmaze.com/search/shows?q=test"

class searchFilm extends Component {

    state = {
        query: '',
        suggestions: []
    }

    componentDidMount() {
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ data: res}))
    }
    
    handleChange = (e) => {
        this.setState({
        query: e.target.value,
        suggestions: this.state.data.filter(x => x.show.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1)
        })
    }
    

    render () {

        const suggestions = this.state.suggestions.map(x => (
            <div>
                <h2>{x.show.name}</h2>
                {
                x.show.image ?
                <img src={x.show.image.medium} /> : <h3>Désolé, aucune image disponible</h3>
                }
            </div> ))
        return(
            <div>
                <Headers />
                    <div  className="carte">
                        <h1>Recherche ton film</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                placeholder='ex: Zoro'
                                type='text'
                                name='Recherche'
                                onChange={this.handleChange}
                            />
                            <Link to={`/Film`}>
                                <button>soumettre</button>
                            </Link>    
                        </form>
                        {suggestions}
                    </div>
                    
                <Headers />        
            </div>
        )
    }
}

export default searchFilm;