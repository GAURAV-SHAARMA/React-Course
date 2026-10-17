// now we will create a custom hook anfd these custom hooks can use buuilt in hooks

import {useEffect , useState} from "react"

function useCurrencyInfo(currency){ // currency info must be provided in custom hook
    const[data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //api call using link (https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json) it results in string format so we have to convert into json format
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data)
    },[currency])//dependency it will be called when currency get changed
    console.log(data)
    return data
}

export default useCurrencyInfo


// readme.md
// # useCurrencyInfo Custom Hook

// 1. `useCurrencyInfo` is a custom React hook used to fetch currency exchange rates from an API.
// 2. It takes a currency code such as `usd` or `inr` as an argument.
// 3. `useState({})` stores the fetched currency information in an object.
// 4. `useEffect` runs the API request when the component loads or the currency changes.
// 5. `fetch()` sends a request to the currency API using the selected currency.
// 6. `.then((res) => res.json())` converts the API response into JSON data.
// 7. `res[currency]` extracts the exchange rates for the selected currency.
// 8. `setData()` updates the state with the fetched exchange rates.
// 9. `return data` makes the currency information available to other components.
// 10. `export default useCurrencyInfo` allows the custom hook to be imported and reused in other files.
