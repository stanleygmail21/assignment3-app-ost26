async function getInventory()  {
    return fetch(`http://localhost:8000/inventoryOst26`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/inventoryOst26"
        
        }
    })
    .then (response => response.json())
}

export default getInventory;