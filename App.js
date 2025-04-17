// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World"
// ); //Object, this is how you create using react

// React Element is just some jsx
// const jsxHeading = <h1 id="heading">Hello World</h1>; // babel transpile it into react.createElement

//React functional Component
// const Title = () => {
//     return <h1>This is title</h1>;
// }

// const num = 1000;

// const title = (
//     <h1>Normal JS Variable</h1>
// )

//This is component composition - composing a comp inside another
// const MyHeading = () => {
//     return (
//         <div id="container">
//             {/* <Title />    */}
//             {/* {<Title></Title>} */}
//             {Title()} {/* functional comp can also be rendered like this as it is func at the end  */}

//             {num}   {/*   injecting normal js inside jsx, can also do computating*/}
//             {100 + 200}
//             {console.log("jcnjncj")}

//             {title}  {/* this is react elememt*/}
//             <h1 id="heading">Hello</h1>
//         </div>
//     )
// }

// const MyHeading = () => {
//     <h1 id="heading">Hello</h1>;
// }

// const MyHeading = () => (
//     <h1>Hello</h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(MyHeading()); //replaces whatever in root and put this into that

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import RestaurantCard from "./src/components/RestaurantCard";
import { resList } from "./src/utils/mockData";

const AppLoyout = () => {
  const [filterData, setFilterData] = React.useState(resList);

  function filterRestaurantList() {
    let filteredList = filterData.filter((item)=> item.rating >= 4);
    setFilterData(filteredList);
  }

  return (
    <div className="app">
      <Header />
      <button className="filter-btn" onClick={filterRestaurantList}>Top Rated Restaurant's</button>
      <div className="res-container">
        {filterData.map((restaurant) => {
          return (
            <RestaurantCard props={restaurant}/>
          )})
        }
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLoyout />); //replaces whatever in root and put this into that
