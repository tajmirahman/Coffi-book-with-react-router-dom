import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";
import { useState } from "react";


const Coffee = () => {
    const data = useLoaderData();
    const [coffees,setCoffees]=useState(data);

    const handlesort=(sortBy)=>{
        if(sortBy === 'popularity'){
            //sort by popularity
            const sortPopularity=[...data].sort((a,b)=>b.popularity-a.popularity);
            setCoffees(sortPopularity);
        }
        else if(sortBy === 'rating'){
            //sort by rating
            const sortRating=[...data].sort((a,b)=>b.rating-a.rating);
            setCoffees(sortRating)

        }
    }

    return (
        <>
        <div className="flex justify-between items-center mb-12">
            <div className="text-3xl font-thin">Sort Coffee&apos;s by Popularity & Rating&gt;</div>
            <div className="space-x-4">
                <button onClick={()=>handlesort('popularity')} className="btn btn-warning">Sort By Popularity</button>
                <button onClick={()=>handlesort('rating')} className="btn btn-warning">Sort By Rating</button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
            }

        </div>
        
        </>
    );
};

export default Coffee;