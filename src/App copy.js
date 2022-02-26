import React from "react";
import PropeTypes from 'prop-types';

function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>);
}

const foodLike = [
    {
        id:1,
        name: 'Kimchi',
        image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
        rating:5,
    },
    {
        id:2,
        name: 'Samgyeopsal',
        image: 'https://firebasestorage.googleapis.com/v0/b/mochaclass-intro-web-4e0c0.appspot.com/o/FCMImages%2F1637208013330_6190a441a6f0394e051b46d4_400x400?alt=media',
        rating:4.6,
    },
    {
        id:3,
        name: 'Bibimbap',
        image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
        rating:4.4,
    },
    {
        id:4,
        name: 'Doncasu',
        image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
        rating:4.8,
    },
    {
        id:5,
        name: 'Kimbap',
        image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
        rating:4.0,
    },
];

// function renderFood(dish) {
//     return <Food name={dish.name} picture={dish.image} />;
// }

function App() {
    // return;
    // <div className="App" />;

    return (
        <div>
             {foodLike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
            ))}
        </div>

    );
}

Food.PropeTypes = {
    name : PropeTypes.string.isRequired,
    picture: PropeTypes.string.isRequired,
    rating:PropeTypes.number
};

export default App;
