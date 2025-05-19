# Monsters Rolodex

Monsters Rolodex is a React application that displays a list of "monsters" fetched from an API. Users can filter the list using a search box. This project demonstrates the use of React hooks like `useState` and `useEffect` for state management and side effects.

## Features

-   Fetches and displays a list of monsters from an external API.
-   Provides a search box to filter monsters by name.
-   Built with Vite for fast development and optimized builds.

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
     npm run dev
    ```

3. Open the app in your browser at http://localhost:5173.

## Technologies Used

-   React
-   Vite
-   CSS for styling

## Folder Structure

-   src/components: Contains reusable components like Card, CardList, and SearchBox.
-   src/assets: Stores static assets.
-   public: Contains public files like the app's favicon.

## License

This project is for educational purposes as part of the "Complete React Developer" course.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
