import PropTypes from 'prop-types';

const Card = ({ coffee }) => {
    // console.log(coffee)
    const { category, name, rating, image, type, origin,popularity } = coffee;
    return (
        <div className="card bg-base-100 hover:shadow-md border-2 border-gray-100">
            <figure>
                <img className='h-48 w-full object-cover' src={image} />
            </figure>
            <div className="p-4">
                <h2 className="text-xl">Name: {name}</h2>
                <p>Types: {type}</p>
                <p>Category: {category}</p>
                <p>Origin: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popularity: {popularity}</p>
                
               
            </div>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired,
}



export default Card;