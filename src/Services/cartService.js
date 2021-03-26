export async function getCart()  {
    return fetch(`http://localhost:8000/cartOst26`,
    {
        method: 'GET',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/cartOst26"
        
        },
    })
    .then (response => response.json())
}

export async function addItem(data)  {
    return fetch(`http://localhost:8000/cartOst26`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/cartOst26"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function deleteItem(data)  {
    return fetch(`http://localhost:8000/cartOst26`,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/cartOst26"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function checkout(data)  {
    return fetch(`http://localhost:8000/checkoutOst26`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:8000/checkoutOst26"
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}
