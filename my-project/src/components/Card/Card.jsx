import PropTypes from 'prop-types';

const Card = ({ coffee }) => {
    // console.log(coffee)
    const { category, name, description, image, making_process, origin } = coffee;
    return (
        <div className="card bg-base-100 hover:shadow-md border-2 border-gray-100">
            <figure>
                <img className='h-[300px] w-full object-cover' src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired,
}



export default Card;