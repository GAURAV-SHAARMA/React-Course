# Understanding React Elements and Custom Rendering

This project is a small learning exercise to understand **how React elements work internally**, how JSX is converted into React elements, and how a custom renderer can convert a JavaScript object into a DOM element.

---

## 📌 What We Are Learning

The main concepts covered in this project are:

* JSX
* React Elements
* JavaScript Objects
* Props
* Children
* `document.createElement()`
* `setAttribute()`
* `appendChild()`
* `createRoot()`
* `StrictMode`
* Basic idea behind React's rendering process

---

## 1. Normal JavaScript Object

We can manually create an object that describes an HTML element:

```js
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}
```

This is **just a normal JavaScript object**.

JavaScript itself does not know that this object is supposed to be a React element.

For example:

```js
console.log(reactElement)
```

will simply print the object.

---

## 2. React Element Using JSX

Now consider:

```jsx
const anotherElement = (
    <a href="https://google.com" target="_blank">
        Click me to visit Google
    </a>
)
```

This looks like HTML, but it is actually **JSX**.

JSX is transformed into JavaScript that creates a React element.

Conceptually, it is similar to:

```js
const anotherElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me to visit Google'
)
```

The result is a **React element object**.

---

## 🔥 Important Difference

### `reactElement`

```js
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}
```

This is a **normal JavaScript object**.

### `anotherElement`

```jsx
const anotherElement = (
    <a href="https://google.com">
        Click me
    </a>
)
```

This is a **React element created using JSX**.

So:

```text
reactElement
     ↓
Normal JavaScript Object
```

while:

```text
JSX
 ↓
React's JSX transformation
 ↓
React Element Object
```

---

# 🛠️ Custom Renderer

A simplified custom renderer can take our manually created object and convert it into a real DOM element.

```js
function customRender(reactElement, container) {

    const domElement =
        document.createElement(reactElement.type)

    domElement.innerHTML =
        reactElement.children

    domElement.setAttribute(
        'href',
        reactElement.props.href
    )

    domElement.setAttribute(
        'target',
        reactElement.props.target
    )

    container.appendChild(domElement)
}
```

---

## 🔍 How `customRender()` Works

### Step 1 — Create DOM element

```js
document.createElement(reactElement.type)
```

If:

```js
reactElement.type === 'a'
```

then:

```js
document.createElement('a')
```

creates:

```html
<a></a>
```

---

### Step 2 — Add children

```js
domElement.innerHTML = reactElement.children
```

If the children are:

```text
Click me
```

the result becomes:

```html
<a>Click me</a>
```

---

### Step 3 — Add properties

```js
domElement.setAttribute(
    'href',
    reactElement.props.href
)
```

and:

```js
domElement.setAttribute(
    'target',
    reactElement.props.target
)
```

The final element becomes:

```html
<a href="https://google.com" target="_blank">
    Click me
</a>
```

---

### Step 4 — Add it to the page

```js
container.appendChild(domElement)
```

This inserts the element into the actual DOM.

---

# ⚛️ Rendering With React

React uses:

```jsx
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MyApp />
        {anotherElement}
    </StrictMode>
)
```

Here:

```jsx
<MyApp />
```

is a React component.

And:

```jsx
{anotherElement}
```

means:

> Evaluate this JavaScript variable and render the React element stored inside it.

---

## ❌ Why Doesn't `reactElement` Work?

This:

```jsx
{reactElement}
```

does not work as a normal React element because `reactElement` is simply an object that **we created ourselves**.

We created it for learning how an element can be represented as an object.

Our `customRender()` function understands this structure:

```js
{
    type,
    props,
    children
}
```

React's renderer does not treat an arbitrary object as a valid React element.

---

# 🧠 Simple Mental Model

Think of it this way:

```text
Normal JavaScript Object
        ↓
{ type, props, children }
        ↓
customRender()
        ↓
Real DOM Element
```

Whereas React does:

```text
JSX
  ↓
React Element
  ↓
React Renderer
  ↓
Real DOM
  ↓
Browser UI
```

---

# 📊 Quick Comparison

| Code                       | Meaning                    |
| -------------------------- | -------------------------- |
| `const obj = {}`           | Normal JavaScript object   |
| `<a>...</a>`               | JSX                        |
| `anotherElement`           | React element object       |
| `{anotherElement}`         | Render the React element   |
| `customRender()`           | Our simplified renderer    |
| `createRoot()`             | React's root rendering API |
| `document.createElement()` | Creates a real DOM element |

---

# 🎯 Learning Goal

The purpose of this project is **not to recreate React**.

It is to understand the basic concept of how:

```text
JSX
 ↓
React Element
 ↓
Renderer
 ↓
DOM
 ↓
Browser
```

works conceptually.

This makes it easier to understand what React is doing behind the scenes instead of treating JSX and React rendering as magic.
