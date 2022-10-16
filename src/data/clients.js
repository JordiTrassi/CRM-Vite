export async function getClients() {
    const resp = await fetch(import.meta.env.VITE_API_URL)
    const result = await resp.json()
    return result;
}

export async function postClient(datos) {
    
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        await resp.json();
       
    } catch (error) {
        console.log(error)
    }
}