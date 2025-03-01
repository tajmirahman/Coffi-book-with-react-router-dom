import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";


const Coffee = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                    data.map(coffee => <Card key={coffee.id} coffee={coffee} />)
            }

        </div>
    );
};

export default Coffee;