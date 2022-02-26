import React from "react";
import axios from "axios";
import React from "./Movie";

class App extends React.Component {

    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                date: { movies },
                // movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");    
            },

        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        // setTimeout( ()=>{
        //     this.setState({isLoading : false, });
        // }, 6000 );

        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return <div>
            {isLoading
                ? 'Loading...'
                : movies.map( (movie) => {
                    console.log(movie);
                    return <Movie />;
                })}
        </div>
    
    }

}

export default App;
