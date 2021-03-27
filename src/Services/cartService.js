export async function getCart()  {
    return fetch(`${process.REACT_APP_API_BASE_URL}cartOst26`,
    {
        method: 'GET',
       mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.REACT_APP_API_BASE_URL}cartOst26`
        
        },
    })
    .then (response => response.json())
}

export async function addItem(data)  {
    return fetch(`${process.REACT_APP_API_BASE_URL}cartOst26`,
    {
        method: 'POST',
       mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.REACT_APP_API_BASE_URL}cartOst26`
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function deleteItem(data)  {
    return fetch(`${process.REACT_APP_API_BASE_URL}cartOst26`,
    {
        method: 'DELETE',
       mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.REACT_APP_API_BASE_URL}cartOst26`
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}

export async function checkout(data)  {
    return fetch(`${process.REACT_APP_API_BASE_URL}/checkoutOst26`,
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":`${process.REACT_APP_API_BASE_URL}/checkoutOst26`
        },
        body: JSON.stringify(data)
    })
    .then (response => response.json())
}
