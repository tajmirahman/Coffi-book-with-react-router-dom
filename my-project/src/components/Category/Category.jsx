import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    // console.log(category)
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted py-12">

                <NavLink to={`/category/${category.category}`} role="tab" className={({ isActive }) => `tab lg:text-2xl font-thin ${isActive ? "tab-active" : ""}`}>{category.category}</NavLink>

            </div>

        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
}

export default Category;