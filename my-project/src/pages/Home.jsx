import { Outlet,  } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Title from "../components/HeadingTitle/Title";
import { Helmet } from "react-helmet-async";


const Home = () => {

    // const categories=useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Coffee | Home</title>
            </Helmet>
            {/* Banner */}
            <Banner />

            {/* heading Title */}
            <Title 
            title={'Browse Coffees By Category'} 
            subTitle={'Choose your desired coffee category though specific coffes that feet in your test'}/>


            {/* Category tab section */}

            <Categories />

            <Outlet />


            {/* Dinamic nasted components */}

        </div>
    );
};

export default Home;