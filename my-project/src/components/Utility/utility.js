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
        alert('already added!')
    }
    favorites.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorites));
}



export {addFavorite,getAllFavorites}