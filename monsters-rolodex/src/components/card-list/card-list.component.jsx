import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
    // <> is a shorthand for <React.Fragment>
    // React.Fragment is a component that allows you to group multiple elements without adding extra nodes to the DOM
    // It is useful when you want to return multiple elements from a component without wrapping them in a div or other element
    // It could be replaced with <React.Fragment> and </React.Fragment> or <Fragment> and </Fragment>
    return (
        <div className="card-list-container">
            {monsters.map(({ name, email, id }, idx) => {
                return (
                    <Card
                        key={`${name}-${idx}`}
                        name={name}
                        email={email}
                        id={id}
                    ></Card>
                );
            })}
        </div>
    );
};

export default CardList;
