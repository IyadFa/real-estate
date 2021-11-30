import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '599a352fc2msh2339b5c48640295p1fabedjsnc9f836af3f6a'
            }
    })

    return data;
}