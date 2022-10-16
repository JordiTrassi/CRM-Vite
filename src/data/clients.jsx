export async function getClients() {
    const resp = await fetch(import.meta.env.VITE_API_URL)
    const result = await resp.json()
    return result;
}