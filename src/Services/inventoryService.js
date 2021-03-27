async function getInventory()  {
    return fetch(`${process.REACT_APP_API_BASE_URL}inventoryOst26`,
    { 
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.REACT_APP_API_BASE_URL}inventoryOst26`
        
        }
    })
    .then (response => response.json())
}

export default getInventory;
