import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyConverter(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

        axios.get(url)
            .then((res) => setData(res.data[currency]))

    }, [currency])
    return data;
}

export default useCurrencyConverter;
