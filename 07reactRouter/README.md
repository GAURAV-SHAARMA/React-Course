# React Router Project

## Overview
A React application demonstrating client-side routing, nested routes, shared layouts, dynamic URL parameters, and data loading using React Router.

## Features
- **Home, About, Contact:** Multiple pages managed through routing.
- **Shared Layout:** Header and Footer remain consistent across pages.
- **Nested Routes:** Child pages render inside the parent layout.
- **Dynamic Routing:** The User page accepts a dynamic `userid` parameter.
- **GitHub API Integration:** Fetches GitHub profile information, including follower count.
- **Route Loaders:** Loads GitHub data before rendering the associated route.

## Concepts Used

### 1. `main.jsx`
The application's entry point and routing configuration.

- `createBrowserRouter()` creates the router.
- `createRoutesFromElements()` defines routes using JSX.
- `Route` maps URL paths to components.
- `RouterProvider` provides routing functionality to the application.
- `StrictMode` helps identify potential problems during development.

### 2. `Layout.jsx`
Defines the common page structure.

- `Header`: Displays the navigation section.
- `Outlet`: Renders the currently matched child route.
- `Footer`: Displays the common footer.

This avoids repeating the Header and Footer in every page component.

### 3. Dynamic Routing
The route `user/:userid` accepts different user IDs through the URL.

Example: `/user/42`

The `useParams()` hook retrieves the `userid` value inside the User component.

### 4. GitHub API and Loaders
The GitHub page fetches profile information from the GitHub REST API.

- `githubInfoLoader`: Fetches and returns GitHub profile data.
- `useLoaderData()`: Accesses the data returned by the route loader.
- `data.followers`: Displays the profile's follower count.

### 5. React Hooks
- `useState()`: Stores component state.
- `useEffect()`: Runs side effects, such as API requests.
- `useParams()`: Reads dynamic route parameters.
- `useLoaderData()`: Reads data provided by a route loader.

## Routes

| URL | Component |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/user/:userid` | User |
| `/github` | Github |

## Technologies Used
- React
- JavaScript
- React Router DOM
- Vite
- Tailwind CSS
- GitHub REST API

## Installation and Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL displayed in the terminal.

## Project Structure

```text
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── User/
│   └── Github/
├── Layout.jsx
├── main.jsx
└── index.css
```

**Note:** The GitHub loader and `useLoaderData()` approach should be used consistently if the route loader is responsible for fetching the GitHub profile data.