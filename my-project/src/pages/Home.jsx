import Banner from "../components/Banner/Banner";
import Title from "../components/HeadingTitle/Title";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner />

            {/* heading Title */}
            <Title 
            title={'Browse Coffees By Category'} 
            subTitle={'Choose your desired coffee category though specific coffes that feet in your test'}/>


            {/* Category tab section */}
            {/* Dinamic nasted components */}

        </div>
    );
};

export default Home;