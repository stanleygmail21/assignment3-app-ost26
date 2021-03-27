export async function getCart()  {
    return fetch(`https://34.204.15.216:8000/cartOst26`,
    {
        method: 'GET',
       // mode: 'cors',
        headers: { 
        "Content-Type": "application/json"
        //"Access-Control-Allow-Origin":"https://34.204.15.216:8000/cartOst26"
        
        },
    })
    .then (response => response.json())
}

export async function addItem(data)  {
    return fetch(`https://34.204.15.216:8000/cartOst26`,
    {
        method: 'POST',
       // mode: 'cors',
        headers: { 
        "Content-Type": "application/json"
        //"Access-Control-Allow-Origin":"https://34.204.15.216:8000/cartOst26"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function deleteItem(data)  {
    return fetch(`https://34.204.15.216:8000/cartOst26`,
    {
        method: 'DELETE',
       // mode: 'cors',
        headers: { 
        "Content-Type": "application/json"
        //"Access-Control-Allow-Origin":"https://34.204.15.216:8000/cartOst26"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function checkout(data)  {
    return fetch(`https://34.204.15.216:8000/checkoutOst26`,
    {
        method: 'POST',
       // mode: 'cors',
        headers: { 
        "Content-Type": "application/json"
      //  "Access-Control-Allow-Origin":"https://34.204.15.216:8000/checkoutOst26"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}
