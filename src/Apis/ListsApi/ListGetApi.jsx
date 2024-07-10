import { useSelector } from "react-redux";

export const getApi = async (url,headers) => {

    try {

        const response = await fetch(`${process.env.BASE_URL}${url}`, {
            method: 'GET',
            headers:{
                'Authorization' : headers
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}