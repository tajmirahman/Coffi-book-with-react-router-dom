
import { object } from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CoffeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [coffee, setCoffee] = useState({});

    useEffect(() => {
        if (data) {
            const findData = data.find(coffee => coffee.id == id);
            setCoffee(findData);
        }
    }, [data, id])

    console.log(coffee);
    const { ingredients, nutrition_info } = coffee;


    return (
        <div className="space-y-6">
            <h1 className="lg:text-3xl">Coffee Details {coffee.description}</h1>
            <div className="w-full h-[600px] object-cover ">
                <img className="w-full h-[600px]  rounded-lg" src={coffee.image} alt="" />
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl underline">Ingredients</h1>
                <ul>
                    {
                        ingredients && ingredients.map(ing => <li key={ing}>{ing}</li>)

                    }
                </ul>
            </div>
            <div className="space-y-2 ">
                <h1 className="text-2xl underline">Nutrition Info</h1>
                <ul className="text-xl">
                    {
                        nutrition_info && Object.keys(nutrition_info).map(n => <li className="list-disk" key={nutrition_info[n]}>
                            {n}: {nutrition_info[n]}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default CoffeDetails;