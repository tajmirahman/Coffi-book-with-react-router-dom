import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Title from "../components/HeadingTitle/Title";


const Home = () => {

    const categories=useLoaderData();

    return (
        <div>
            {/* Banner */}
            <Banner />

            {/* heading Title */}
            <Title 
            title={'Browse Coffees By Category'} 
            subTitle={'Choose your desired coffee category though specific coffes that feet in your test'}/>


            {/* Category tab section */}

            <Categories categories={categories}/>
            
            <Outlet />


            {/* Dinamic nasted components */}

        </div>
    );
};

export default Home;