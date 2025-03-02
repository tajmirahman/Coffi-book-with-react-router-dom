import toast from "react-hot-toast";

// get all favorites
const getAllFavorites=()=>{
    const all= localStorage.getItem('favorites');
    if(all){
        const favorites= JSON.parse(all);
        return favorites;
    }
    else{
        return []
    }
    
}
// add to local storage
const addFavorite=(coffee)=>{
    const favorites=getAllFavorites();
    const isExits= favorites.find(fav=> fav.id == coffee.id);
    if(isExits){
        toast.error('Already added in favorite list !!');
        return;
    }
    favorites.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorites));
    toast.success('Successfully created!');
}



export {addFavorite,getAllFavorites}