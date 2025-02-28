import PropTypes from 'prop-types';

const Title = ({title, subTitle}) => {
    return (
        <div >
            <h1 className="text-center text-3xl mt-5">{title}</h1>
            <p className="text-center mt-2 font-thin">{subTitle}</p>
        </div>
    );
};

Title.propTypes={
    title:PropTypes.object.isRequired,
    subTitle:PropTypes.object.isRequired,
}

export default Title;