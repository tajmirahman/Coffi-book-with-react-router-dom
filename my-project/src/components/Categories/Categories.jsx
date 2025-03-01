
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import PropTypes from 'prop-types';


const Categories = () => {

    const categories = useLoaderData();
    // console.log(categories);
    return (
        <div className="flex justify-evenly mt-10">

            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }

        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.object.isRequired,
}

export default Categories;