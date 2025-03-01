import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";



const CoffeCard = () => {
    const navigate=useNavigate();
    const data = useLoaderData();
    const { category } = useParams();

    const [coffee, setCoffee] = useState([]);
    useEffect(() => {
        if (category) {
            if (data && category) {
                const filterByCategory = [...data].filter(coffee => coffee.category === category);
                setCoffee(filterByCategory)
            }
        }
        else {
            setCoffee(data.slice(0, 6));
        }
    }, [data, category]);


    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    coffee.length > 0 ?
                        (coffee.map(coffee => <Card key={coffee.id} coffee={coffee} />))
                        : (<h1>Category has no found</h1>)
                }

            </div>
            <div>
                <button onClick={()=>navigate('/coffee')} className="btn btn-warning mt-6">View All</button>
            </div>

        </>
    );
};

export default CoffeCard;
