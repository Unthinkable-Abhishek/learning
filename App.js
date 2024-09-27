const heading = React.createElement(
    "h1",
    {id: "heading", xyz:"abc"},
    "Hello World"
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//createElement makes an object which has following things
    // 1- type - h1
    // 2- props
    //     1- attributes- id - objects
    //     2- children
    //     for multiple children pass it as array 

// createRoot is responsible to assign a root inside react

// render , converts the JS object into html which browser understands and render in on the screen
    // putting the heading in the root, render will replace that and will put this in there 

// Library and framework - react can only work in the place where we intends to like here root
    // react can be applied to a small porting of a page, whatever place we make root as
    // independently, some piece of code in js, gives helper methods to develop fast methods.
    // framework comes with all lots of things
    // framework may not be applied to the existing application, but we can use react in small section of a page