Learning React JS

*** Chapter - 1  ***

1- createElement makes an JS object which has following things
    1- type - h1
    2- props
        1- attributes- id - objects
        2- children
        for multiple children pass it as array

    React.createElement("h1", {id: 'hello'}, "Hello World");

2- createRoot is responsible to assign a root inside react

3- render , converts the JS object into html which browser understands and render in on the screen
    putting the heading in the root, render will replace that and will put this in there 

4- Library and framework - react can only work in the place where we intends to like here root, 
    react can be applied to a small portion of a page, whatever place we make root as
    independently, some piece of code in js, gives helper methods to develop fast methods.
    framework comes with all lots of things
    framework may not be applied to the existing application, but we can use react in small section of a page

5- order of the script matters in index.html, react cdn link and then reactDOM cdn link
   as reactDOM wants react to render on the page first


***  Chapter-2  ***

1- package.json - it has everything what we write while doing npm init - metadata dependencies script , 
it also ensure that project uses the correct version of dependencies (packages), 

2- package-lock.json  - keeps track of exact version is installed, for the packages it has integrity which has the hash of package to verify that same version of package is deployed on the production and that is in our local.

3- most important package is bundler, it cleans & minifies the code before going into the production which is done by bundler, prominent bundler are webpack, parcel, vite etc.

4- bundler - it bundles our app which can be shipped to the production, we will be using parcel, 
    npm i -D parcel : -D dev_dependencies generally requires in development phase , normal can be for production 
    chunking, bundling, clean, minify cache - 0all this is done by bundler

    ^ -> caret - upgrade the minor version 1.2.3 < 2.0.0
    ~ -> tilde - upgrade the patch version 1.2.3 < 1.3.

5- node_modules - dependencies will have its own dependencies i.e transitive (direct object) dependencies, parcel need more package or dependencies, it need babel then babel will get installed, all the code and peer dependencies code are in node_modules

6- npm vs npx - npm calls just npm command, npx executes a package

7- npx parcel index.html - parcel goes to source and builds an development build

8- import React from 'react' - importing React in file from 'react' which is in node_modules now as we have installed it in our project

9- Browser scripts can't have imports and exports - write type="modules" in script tag while referring to script of index.html file, as it will not be a normal browserscript it will be a module.

10- Parcel - Dev Build, Local Server, HMR (Hot module replacement), File Watching Algo (C++), 
             Caching Faster build, Image Optimization, Minification, Bundling, Compress, Consistent Hashing, Code Splitting, Differential Bundling, Diagnostic, Error Handling, Host your app on https, Tree Shaking Algo

             Parcel uses file watching algo (C++), Keeps track and it gets build once again, faster build because of cache. parcel-cache have files, caching things so build get developed fast

             Support older browsers by differential bundling for eg we have type="module" can generate no module for older browser

             Tree Shaking Algo - Parcel will remove unused code for you, eliminate dead code i.e code that is not actually used by the application — from the final bundle. Analyze import & export if something is not used it will eliminate it. Also it eliminate dead code.

             Less time for dev build then prod build, need more things for prod
        Uses other libraries for making build 

11- npx parcel build index.html - it makes a prod build which has dist folder, 

12- BrowserList- Support old broweser list

13- This is what npx create-react-app does


***  Chapter  3  ***

1- scripts - in package.json , write short form of command and for that write the command and now we can use like npm run ***, eg for start - npm run start or npm start

2- JSX - js syntax makes easy to create react element, we merge HTML and JS.
const heading = <h1>Hello World</h1> -> this is jsx, jsx is html like syntax, more closer to XML, JSX is different
Its a mix of html and js. In jsx attributes are written in camel case , use brackets for multiple line.

JSX is not JS, JS Engine understands Ecmascript, 
parcel does this job of transpiling jsx to js, actually babel does this job which is js compiler, it take jsx and converts to js which js engine understands

JSX to React.createElement (JS Objects) and it gets rendered as html.

3- React.createElement makes an object and when it get rendered onto DOM it convert this object into html
React Element => Object => HTML

4- Browser doesn't understand jsx but parcel transpiled it into the code which is understandable by the browser. Parcel doesn't do a lot of things by itself, it gives this responsbility to the babel (parcel installs it). Its babel job (its a package), it converted the code which is understand by react.
JS Engine understands ES6, which is a valid pure js understandable by browsers JS engine. And this transpilation is done by Parcel behind the scenes. And actually babels does this.

5- jsx code is converted to react.createElement (makes an js element). React Element is just a jsx.

6- Everything is component in React eg heading, btn, title, list of card. What is Component ? -> 2 types of Comp or 2 ways of creating comp
   1- Class Based Component  (Old)
   2- Functional Based Comp  (New)

7- React Func Comp - Name it with Capital letter, React way to understand its an component.
    Its just a JS function that return a react element (or some piece of jsx). 
    3 Ways of writing Func Comp 
        1- const MyHeading = () => {
            return <h1 id="heading">Hello</h1>;
        }

        2- const MyHeading = () => {
            <h1 id="heading">Hello</h1>;
        }

        3- const MyHeading = () => (
            <h1 id="heading">Hello</h1>
        );
    
    root.render(MyHeading) We cannot render a comp like this
    root.render(<MyHeading />) This is how we render an react comp. This is how babel understands

    Component Composition - A Comp inside a comp
        const MyHeading = () => {
            return (
                <div id="container">
                    <Title />   
                    <h1 id="heading">Hello</h1>
                </div>
            )
        }
    
    We can also use simple function, but in that we have to write return 
    <Title></Title> can we written like this too but they both have different use
    {Title()} function, can be called like this too as this is js at the end of the day.

8- We can use functional comp in react element and vice varsa.
    root.render(title); -> title is react element 
    root.render(MyHeading()) -> it can also be written like this

9- jsx takes care of the cross side attacks, as it sanitizes the code before running and it doesn't blindly runs it. 
    const data = api.getData();

*** Chapter - 4 ***

1- Swiggy data - config driven UI, based on location everything changes as the products list, caraousel etc. 
2- Using Map instead of for loop, provide unique id to all the item.
3- Key is important because if we don't provide then react will render all the list item.

*** Chapter - 5 ***
1-  export default <variable_name>, This is default export
    import <variable_name> <path>;

    We cannot have multiple default

2-  export const <variable_declaration> , This is named export
    import {<variable_name>} from <path>;

3-  useState hook
    gives us current state and method to update the state
    normal JS utility function's, written inside react by FB developers 
    if i use a variable without useState hook and if i update it then the UI will not update
    whenever a state variable gets update, react re-render the component
    keeps the data layer in sync with UI layer

    Eg - Button with name login and when clicked on it will change to logut
    a- Using a js variable, we will change the name to logout on a click of a button, but the UI will not change the name, as react doesn't monitors the change of an state.

    b- Using useState hook, react monitors change of the variable binds with the state, and when we change it will re-render the component, and then will compare the changes and will only change the name of the btn.


4-  Reconciliation Algorithm (React Fiber comes in React 16 is a new way of finding diff)
    7 res cards to 3 res cards
    virtual dom is rep of actual dom, DOM is just tags
    virtual dom is just react elements
    Diff algo - finds out the difference between the updated virtual dom and previous dom then its update the DOM

    This whole algo in React Fiber (React 16), whenever something changes on UI this is known as Reconciliation.
    RF is new way of finding diff and updating DOM. 
    Finds out the difference between 2 VD i.e 2 objects.

    Eg - 7 res cards initially and when we click btn we get 3 res cards, now react compares these 2 VD i.e 2 objects and then updates the real dom.

    React can effeciently finds out the differnce between VD's and updates the UI, this is the core algo of React.

    React creates a virtual dom , VD is actually react element, so the header component is a VD, its an object basically.
    VD is nothing but a JS object.

    Diff algo - finds out the diff between 2 VD,  previous VD and updated VD. 

    prev VD                 New VD
    7 res cards             3 res cards

    Read - Incremental rendering, 


*** Chapter - 6 ***
1- Monolith Architecture and Microservice Architecture

Monolith - Earlier we used to work with this, code which has api , UI code inside, auth code, DB connectivity code, sending sms code in the same project.
All code in same project. Even for a small change we have to build the whole project.
Work on same repo.

Microservice - We have different service for different jobs.
Backend Service, UI Service, Auth Service, DB Service, SMS Service, Gmail Service.
For each and every service we had a different projects.
This is separation of concerns and single responsibility principle, and each and every service has its own jobs.
Team work on different repo with own deployment cycle.
We can use multiple tech stack, multiple language, we can decide which tech stack is suitable for that and can use the same.
Each service run on there specific ports i.e /api /sms 
These service interacts by making a call to different port.

2- Fetching Data from api

a-  As soon as page loads we can make api call
    Loads -> Api() -> Render
    If api takes 500ms then app will wait for that then will render the page.
    We can use a state for rendering a loader rather that our component.
b - Recommend approach 
    Loads -> Render -> Api -> Render(using data from api)
    Better UX , yes we rerender but in react rendering is fast so no need to bother about.

3-  useEffect hook
    2 arguments - callback function and dependency array,
    this function is called after the component renders,
    when it sees the useEffect it registers the callback function to call it after render.

    using fetch we will call an api, given to us by browsers, and JS engine has this.
    Our browser block us to call an api from one origin to another origin and gives an error of CORS.

    integrating live api like swiggy, then rendering the component with new data.

    Implement shimmer ui effect on the basis of the length of restaurant cards, 

4 - useState
    whenever state gets update, react triggers a reconcialition cycle i.e re-rendering the component


*** Chapter - 7 ***
1-  react-router-dom
    Its an Library which we use for managing the route.
    We are following the data based approach for defining the route, we also have declarative and framework method, which we can use for the same purpose.

    a- createBrowserRouter - helps in creating the router, we can call this function and can give an array of json which will have a path, element. path will be the route which we will call and element will be rendered when we will call that route.

    Helps in creating routing configuration for our app router
    Takes a list of configuration, in which each obj defines a path , and what will happen on that path.

    So now while rendering, I will not render a component we will render the routes
    const AppRouter = createBrowserRouter([
        {
            path : "/",
            element: <AppLayout />,
            errorElement: <ErrorComponent />
        }, 
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact-us",
            element: <ContactUs />
        }
    ]); 
    Also we can give childrens to the path: "/" rather than defining the separate paths for About and ContactUs Component.

    b- RouterProvider- this will used to render the routes element. so we will render this by passing the router obj which we get from createBrowserRouter, so now all the routes will be render on to the screen.
    Eg- <RouterProvider router={AppRouter} />

    Creating Children for an path
    1- use children properties to define a list of children for the parent path.

    The children will take the same configuration.

    Suppose I want the header to be rendered for every children of path "/", then I can define the childrens including the path "/", "/about", "/contact-us" and I can have Outlet component in the element of the parent of these childrens.

    We have to provide <Outlet /> component in the parent component which will be replaced by the children element 

2-  Types of Routing in Web App 
    2 Types 
    Client Side Routing and Server Side Routing

    Note - Rendering is different than routing
    a-  Client Side Routing
        When we create a react app which is actually a single source application, which has all the component but when we go to the route it renders that component.
        This is Client Side Routing.

    b-  Server Side Routing
        When we make a call to "/about", it makes a call to server from where we get html page then it is rendered on to the screen and the whole page is rendered again.
        This is Server Side Routing.

3-  Dynamic Routing

    Dynamice routing means when we want to route the user to an page which is common but depends on an id, or same value and for eg "/restaurants/:resId"


*** Chapter - 8 ***

1 - Class based Components
    Its a class that extends React.Component whereas functional comp returns jsx

    render() - returns a piece of jsx 
    constructor - define state, bind methods, 

2 - Lifecycle Methods

    When the class instance is created, constructor method is called.
    After that render is called

    RENDER PHASE - 
    parent constructor then parent render
    child constructor then child render
    these render phase is batched because DOM manipulation is expensive and react optimize by doing this. happens in single batch

    COMMIT PHASE - 
    child componentDidMount is called 
    parent componentDidMount is called

    React Lifecycle Methods studied with also compared with the new Functional Component


*** Chapter - 9 ***
1 - Optimize Our App

    Below are the techniques which we can use to optimize our app.
    Divide Component into small small components , i.e Single Responsibility principle. Code become modular, readable, maintainneable, testable.

    Custom Hooks - Hooks are just utility functions created by us. We can take responsibility from some comp and can make our own custom hooks. 

    We can make a custom hook for checking the online/offline status of the user.

    Optimization Techniques
    1 - Code Splitting, Dynamic Bundling, Chunking
    Make App in small chunks i.e split your code 

    2 - Lazy loading - using lazy and suspense api provided by react. or dynamic loading/import
    import an component using lazy and then wrap it in Suspense, now the separate bundle will be created for that and will only be called when we will react on to that page.