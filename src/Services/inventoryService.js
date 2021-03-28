async function getInventory()  {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}inventoryOst26`,
    { 
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.env.REACT_APP_API_BASE_URL}inventoryOst26`
        
        }
    })
    .then (response => response.json())
}

export default getInventory;
