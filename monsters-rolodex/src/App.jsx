import { useState, useEffect } from "react"; // useState is a hook that allows you to add state to functional components
import "./App.css";
import CardList from "./components/card-list/card-list.component";

function App() {
    // https://react.dev/reference/react/useState
    // useState is a hook that allows you to add state to functional components
    // It returns an array with two elements: the current state value and a function to update it
    // set functions, like setSomething(nextState):
    // The set function returned by useState lets you update the state to a different value and trigger a re-render.
    // You can pass the next state directly, or a function that calculates it from the previous state
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    // useEffect is a hook that allows you to perform side effects in functional components
    // if an empty array is passed, it will run only once after the first render
    // useEffect is used in this case to fetch data only once when the component mounts
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setMonsters(data);
                setFilteredMonsters(data);
            });
    }, []);

    return (
        <>
            <input
                type="search"
                onChange={(event) => {
                    const searchString = event.target.value.toLocaleLowerCase();
                    const filteredMonsters = monsters.filter((monster) =>
                        monster.name.toLocaleLowerCase().includes(searchString)
                    );
                    setFilteredMonsters(filteredMonsters);
                }}
            />
            <CardList monsters={filteredMonsters}></CardList>
        </>
    );
}

export default App;
