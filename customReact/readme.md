# Custom React Renderer

A simple implementation to understand how React can convert a JavaScript object representing an element into a real DOM element.

## 📌 Overview

This project demonstrates the basic idea behind React's rendering process.

Instead of directly writing HTML like:

```html
<a href="https://google.com" target="_blank">Click Me</a>
```

we create a JavaScript object that describes the element:

```js
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click Me"
};
```

Then `customRender()` converts this object into an actual DOM element.

## 🧩 Custom Render Function

```js
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    domElement.setAttribute(
        "href",
        reactElement.props.href
    );

    domElement.setAttribute(
        "target",
        reactElement.props.target
    );

    container.appendChild(domElement);
}
```

## 🔍 How It Works

### 1. Create the DOM element

```js
document.createElement(reactElement.type);
```

If `type` is `"a"`, it creates:

```html
<a></a>
```

### 2. Add children

```js
domElement.innerHTML = reactElement.children;
```

This adds the content inside the element.

### 3. Add attributes

```js
domElement.setAttribute("href", reactElement.props.href);
domElement.setAttribute("target", reactElement.props.target);
```

These add properties such as `href` and `target`.

### 4. Add the element to the page

```js
container.appendChild(domElement);
```

The newly created element is finally inserted into the container.

## 🧪 Example

```js
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Visit Google"
};

const root = document.querySelector("#root");

customRender(reactElement, root);
```

HTML:

```html
<div id="root"></div>
```

After rendering:

```html
<div id="root">
    <a href="https://google.com" target="_blank">
        Visit Google
    </a>
</div>
```

## 🎯 Purpose

The purpose of this project is **not to recreate React**, but to understand the basic concept of:

* React elements
* DOM elements
* Props
* Children
* `document.createElement()`
* `setAttribute()`
* `appendChild()`
* The basic idea behind React's rendering process

## ⚠️ Limitations

This is a simplified renderer. It currently:

* Supports only the properties explicitly defined in the code.
* Handles only simple children.
* Does not support nested React elements.
* Does not handle React state or events.
* Does not implement React's Virtual DOM or reconciliation.
* Does not provide React's performance optimizations.

## 🚀 Learning Outcome

This small project helps bridge the gap between:

```text
JavaScript Object
       ↓
React Element
       ↓
DOM Element
       ↓
Browser UI
```

It is a useful exercise for understanding what happens conceptually when React renders an element to the browser.
