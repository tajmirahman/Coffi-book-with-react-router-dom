import { useEffect, useState } from "react";
import Title from "../components/HeadingTitle/Title";
import { getAllFavorites, removeFavorite } from "../components/Utility/utility";
import Card from "../components/Card/Card";


const Dashboard = () => {

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites);

    }, []);

    const handleRemoveFavorite=id=>{
        removeFavorite(id);
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }
    

    return (
        <>

            <div >
                <Title
                    title={'Wellcome To Dashboard'}
                    subTitle={'Manage Coffee that you have  previously added. You can view and remove them items here.'} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

                {
                    coffees.map(coffee => <Card handleRemoveFavorite={handleRemoveFavorite} key={coffee.id} coffee={coffee} />)
                }

            </div>



        </>
    );
};

export default Dashboard;