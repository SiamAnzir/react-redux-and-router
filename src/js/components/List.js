import React from "react";
import { connect } from "react-redux";

// mapStateToProps:  it connects a part of the Redux state to the props of a React component.
// By doing so a connected React component will have access to the exact part of the store it needs.

const mapStateToProps = (state) => {
    return { articles: state.articles };
};

const connectedList = ({ articles }) => (
    <ul>
        {articles.map( (el,index) => (
            <li key={index}> {el.title} </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(connectedList);

export default List;