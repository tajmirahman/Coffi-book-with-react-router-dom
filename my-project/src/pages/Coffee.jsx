import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";


const Coffee = () => {
    const data = useLoaderData();
    return (
        <>
        <div className="flex justify-between items-center mb-12">
            <div className="text-3xl font-thin">Sort Coffee&apos;s by Popularity & Rating&gt;</div>
            <div className="space-x-4">
                <button className="btn btn-warning">Sort By Popularity</button>
                <button className="btn btn-warning">Sort By Rating</button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                    data.map(coffee => <Card key={coffee.id} coffee={coffee} />)
            }

        </div>
        
        </>
    );
};

export default Coffee;