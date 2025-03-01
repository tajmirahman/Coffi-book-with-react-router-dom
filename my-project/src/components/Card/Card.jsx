import PropTypes from 'prop-types';

const Card = ({coffee}) => {
    // console.log(coffee)
    const {category,name,description,image,making_process,origin}=coffee;
    return (
        <div>
            <div >
                <img src={image} alt="" />
                <h1>{name}</h1>

            </div>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object.isRequired,
}



export default Card;