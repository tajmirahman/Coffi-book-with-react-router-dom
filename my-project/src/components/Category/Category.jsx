import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    // console.log(category)
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <Link to={`/category/${category.category}`} role="tab" className="tab">{category.category}</Link>

            </div>

        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
}

export default Category;