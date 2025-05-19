import { useState, useEffect } from "react"; // useState is a hook that allows you to add state to functional components
import "./App.css";

const Card = (props) => {
    return <div>{props.name}</div>;
};

function App() {
    // https://react.dev/reference/react/useState
    // useState is a hook that allows you to add state to functional components
    // It returns an array with two elements: the current state value and a function to update it
    // set functions, like setSomething(nextState):
    // The set function returned by useState lets you update the state to a different value and trigger a re-render.
    // You can pass the next state directly, or a function that calculates it from the previous state
    const [arr, setArr] = useState(["a", "b", "c"]);

    // useEffect is a hook that allows you to perform side effects in functional components
    // if an empty array is passed, it will run only once after the first render
    useEffect(() => {
        console.log("useEffect");
    }, []);

    // <> is a shorthand for <React.Fragment>
    // React.Fragment is a component that allows you to group multiple elements without adding extra nodes to the DOM
    // It is useful when you want to return multiple elements from a component without wrapping them in a div or other element
    // It could be replaced with <React.Fragment> and </React.Fragment> or <Fragment> and </Fragment>
    return (
        <>
            {arr.map((name, idx) => {
                return <Card key={`${name}-${idx}`} name={name}></Card>;
            })}

            <button
                onClick={() => {
                    setArr((arr) => [...arr, "d"]);
                }}
            >
                add letter
            </button>
        </>
    );
}

export default App;
