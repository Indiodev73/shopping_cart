import { API_URL } from "../config/config"

export async function getAllProducts() {
    try {
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        return data
    } catch (e) {
        // throw new Error('error api response')
        console.error(e)
    }
    
}