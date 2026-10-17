# React Currency Converter — Concepts & File Explanation

## 1. `App.jsx` — Main Component
**Concepts:** `useState`, Props, Event Handling, API Data Usage

- `useState`: Amount, selected currencies aur converted amount ko store karta hai.
- `useCurrencyInfo(from)`: Selected source currency ki exchange rates fetch karne ke liye custom hook call karta hai.
- `Object.keys(currencyInfo)`: API data se currency names ki array banata hai.
- `convert()`: Amount ko exchange rate se multiply karke converted value calculate karta hai.
- `swap()`: Source aur destination currencies ko exchange karta hai.
- `onSubmit`: Form submit hone par page reload hone se rokta hai aur conversion function call karta hai.

## 2. `InputBox.jsx` — Reusable Component
**Concepts:** Props, Controlled Components, `useId`, Event Handling, `map()`

- `props`: Parent component se amount, currency options aur callback functions receive karta hai.
- `useId()`: Input aur label ko uniquely connect karne ke liye ID generate karta hai.
- `value`: Input ki value React state ke according display hoti hai.
- `onChange`: Amount ya selected currency change hone par parent component ko update karta hai.
- `map()`: Currency options ko dropdown ke `<option>` elements mein convert karta hai.
- `amountDisable`: Output field mein amount editing ko disable karta hai.

## 3. `useCurrencyInfo.js` — Custom Hook
**Concepts:** Custom Hooks, `useState`, `useEffect`, Fetch API, Promises, JSON

- `useState`: API se milne wale exchange rates store karta hai.
- `useEffect`: Selected currency change hone par API request chalata hai.
- `fetch()`: External currency API se data request karta hai.
- `.then()`: API response ko JSON mein convert karke process karta hai.
- `setData()`: Received exchange rates ko state mein save karta hai.
- `.catch()`: API request fail hone par error handle karta hai.
- `return data`: Exchange rates ko `App.jsx` mein available karata hai.

## 4. `src/components/index.js` — Export File
**Concepts:** Named Exports, Module Reusability

- `export { InputBox }`: `InputBox` ko ek central file se import karna possible banata hai.
- Isse multiple components ko ek hi file se export aur import kiya ja sakta hai.

## 5. `main.jsx` — Application Entry Point
**Concepts:** `createRoot`, React DOM, Component Rendering

- React application ko browser ke HTML element ke saath connect karta hai.
- `createRoot()` React rendering root create karta hai.
- `root.render()` ke through `App` component screen par render hota hai.

## Main React Concepts Used

- **Components:** UI ko reusable parts mein divide karna.
- **Props:** Components ke beech data aur functions pass karna.
- **State:** Changing data ko manage karna.
- **Hooks:** React features use karna, jaise `useState` aur `useEffect`.
- **Custom Hook:** API-fetching logic ko separate reusable function mein rakhna.
- **API Integration:** External source se exchange rates lena.
- **Event Handling:** Button clicks, form submission aur input changes handle karna.
- **Array Methods:** `map()` aur `Object.keys()` se data process karna.
- **Conditional UI Behaviour:** Props ke through input fields ko disable karna.