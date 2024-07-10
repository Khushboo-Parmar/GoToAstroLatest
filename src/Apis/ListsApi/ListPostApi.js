export const getData = async (url, body, headers) => {
    // const formData = new FormData();
    // for (const key in body) {
    //     formData.append(key, body[key]);
    // }

    // console.warn(formData)
    try {
        const response = await fetch(`${process.env.BASE_URL}${url}`, {
            method: 'POST',
            body: Object.keys(body).length > 0 ? JSON.stringify(body) : undefined,
            headers: {
                'Content-Type':'multipart/form-data',
                'Authorization': headers
            }
        });

        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
