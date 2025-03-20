// FAVORITE STORAGE
function saveToLocalFav(place: any){
    let placeArr = getFromLocalFav();
    if (!placeArr.includes(place)){
        placeArr.push(place);
    }
    localStorage.setItem('Favorites', JSON.stringify(placeArr));
}

function getFromLocalFav(){
    let localStorageData = localStorage.getItem('Favorites');
    if (localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}


function removeFromLocalFav(place: any){
    let localStorageData = getFromLocalFav();
    let placeIndex = localStorageData.indexOf(place);
    localStorageData.splice(placeIndex, 1);
    localStorage.setItem('Favorites', JSON.stringify(localStorageData));
}




// the one they visited last
function saveToLocalSeen(last: any){
    let lastArr = getFromLocalSeen();
    if (!lastArr.includes(last)){
        lastArr.push(last);
    }
    localStorage.setItem('Last Seen', JSON.stringify(lastArr));
}

function getFromLocalSeen(){
    let localStorageData = localStorage.getItem('Last Seen');
    if (localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}


function removeFromLocalSeen(last: any){
    let localStorageData = getFromLocalSeen();
    let seenIndex = localStorageData.indexOf(last);
    localStorageData.splice(seenIndex, 1);
    localStorage.setItem('Last Seen', JSON.stringify(localStorageData));
}




export { saveToLocalFav, getFromLocalFav, removeFromLocalFav, saveToLocalSeen, getFromLocalSeen, removeFromLocalSeen }