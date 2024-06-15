import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (method, endpoint, datass) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: method,
            url: endpoint,
            data: datass,
        };

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.request(options);
                console.log(response)
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [method, endpoint, datass]);

    return { data, isLoading, error };
}

export default useFetch;