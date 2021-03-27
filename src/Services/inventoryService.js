async function getInventory()  {
    return fetch(`https://34.204.15.216:8000/inventoryOst26`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"https://34.204.15.216:8000/inventoryOst26"
        
        }
    })
    .then (response => response.json())
}

export default getInventory;
