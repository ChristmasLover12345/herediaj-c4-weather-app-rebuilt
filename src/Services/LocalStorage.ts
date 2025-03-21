// FAVORITE STORAGE
function saveToLocalFav(place: string){
    const placeArr = getFromLocalFav();
    if (!placeArr.includes(place)){
        placeArr.push(place);
    }
    localStorage.setItem('Favorites', JSON.stringify(placeArr));
}

function getFromLocalFav(){
    const localStorageData = localStorage.getItem('Favorites');
    if (localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}


function removeFromLocalFav(place: string){
    const localStorageData = getFromLocalFav();
    const placeIndex = localStorageData.indexOf(place);
    localStorageData.splice(placeIndex, 1);
    localStorage.setItem('Favorites', JSON.stringify(localStorageData));
}




// the one they visited last
function saveToLocalSeen(last: string){
    const lastArr = getFromLocalSeen();
    if (!lastArr.includes(last)){
        lastArr.push(last);
    }
    localStorage.setItem('Last Seen', JSON.stringify(lastArr));
}

function getFromLocalSeen(){
    const localStorageData = localStorage.getItem('Last Seen');
    if (localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}


function removeFromLocalSeen(last: string){
    const localStorageData = getFromLocalSeen();
    const seenIndex = localStorageData.indexOf(last);
    localStorageData.splice(seenIndex, 1);
    localStorage.setItem('Last Seen', JSON.stringify(localStorageData));
}




export { saveToLocalFav, getFromLocalFav, removeFromLocalFav, saveToLocalSeen, getFromLocalSeen, removeFromLocalSeen }