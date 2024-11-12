Learning React JS

*** Chapter - 1  ***

1- createElement makes an object which has following things
    1- type - h1
    2- props
        1- attributes- id - objects
        2- children
        for multiple children pass it as array 

2- createRoot is responsible to assign a root inside react

3- render , converts the JS object into html which browser understands and render in on the screen
    putting the heading in the root, render will replace that and will put this in there 

4- Library and framework - react can only work in the place where we intends to like here root, 
    react can be applied to a small portion of a page, whatever place we make root as
    independently, some piece of code in js, gives helper methods to develop fast methods.
    framework comes with all lots of things
    framework may not be applied to the existing application, but we can use react in small section of a page

5- order of the script matters in index.html , react cdn link and then reactDOM cdn link
   as reactDOM wants react to render on the page first


***  Chapter-2  ***

1- package.json - it has everything what we write while doing npm init - metadata dependencies script , 
it also ensure that project uses the correct version of dependencies (packages), 

2- package-lock.json  - keeps track of exact version is installed, for the packages it has integrity which has the hash of package to verify that same version of package is deployed on the production and that is in our local.

3- most important package is bundler, it cleans & minifies the code before going into the production which is done by bundler, prominent bundler are webpack, parcel, vite etc.

4- bundler - it bundles our app which can be shipped to the production, we will be using parcel, 
    npm i -D parcel : -D dev_dependencies generally requires in development phase , normal can be for production 
    chunking, bundling, clean, minify cache - all this is done by bundler

    ^ -> caret - upgrade the minor version 1.2.3 < 2.0.0
    ~ -> tilde - upgrade the patch version 1.2.3 < 1.3.0

5- node_modules - dependencies will have its own dependencies i.e transitive (direct object) dependencies  , parcel need more package or dependencies , it need babel then babel will get installed, all the code and peer dependencies code are in node_modules

6- npm vs npx - npm calls just npm command, npx executes a package

7- npx parcel index.html - parcel goes to source and builds an development build

8- import React from 'react' - importing React in file from 'react' which is in node_modules now as we have installed it in our project

9- Browser scripts can't have imports and exports - write type="modules" in script tag while referring to script of index.html file, as it will not be a normal browserscript it will be a module

10- Parcel - Dev Build, Local Server, HMR (Hot module replacement), File Watching Algo (C++), 
             Caching Faster build, Image Optimization, Minification, Bundling, Compress, Consistent Hashing, Code Splitting, Differential Bundling, Diagnostic, Error Handling, Host your app on https, Tree Shaking Algo

             Parcel uses file watching algo (C++), Keeps track and it gets build once again, faster     build because of cache. parcel-cache have files, caching things so build get developed fast

             Support older browsers by differential bundling for eg we have type="module" can generate no module for older browser

             Tree Shaking Algo - Parcel will remove unused code for you, eliminate dead code i.e code that is not actually used by the application — from the final bundle. Analyze import & export if something is not used it will eliminate it. Also it eliminate dead code.

             Less time for dev build then prod build, need more things for prod
        Uses other libraries for making build 

11- npx parcel build index.html - it makes a prod build which has dist folder, 

12- BrowserList- Support old broweser list


***  Chapter  3  ***

1- scripts - in package.json , write short form of command and for that write the command and now we can use like npm run ***, eg for start - npm run start or npm start

2- JSX - js syntax makes easy to create react element, we merge HTML and JS.
const heading = <h1>Hello World</h1> -> this is jsx, jsx is html like syntax, more closer to XML
Its a mix of html and js. In jsx attributes are written in camel case , use brackets for multiple line.

3- React.createElement makes an object and when it get rendered onto DOM it convert this object into html

4- Browser doesn't understand jsx but parcel transpiled it into the code which is understandable by the browser. Parcel doesn't do a lot of things by itself, it gives this responsbility to the babel (parcel installs it). Its babel job (its a package), it converted the code which is understand by react

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
    {Title()} can be called like this too as this is js at the end of the day.

8- We can use functional comp in react element and vice varsa.
    root.render(title); -> title is react element 
    root.render(MyHeading()) -> it can also be written like this

9- jsx takes care of the cross side attacks, as it sanitizes the code before running and it doesn't blindly runs it. 
    const data = api.getData();

*** Chapter - 4 ***

1- Swiggy data - config driven UI, based on location everything changes as the products list, caraousel etc. 

*** Chapter - 5 ***
1-  export default <variable_name>
    import <variable_name> <path>;

2-  export const <variable_declaration>
    import {<variable_name>} from <path>;

3-  Reconciliation Algorithm (React Fiber comes in React 16 is a new way of finding diff)
    7 res cards to 3 res cards
    virtual dom is rep of actual dom, DOM is just tags
    virtual dom is just react elements
    Diff algo - finds out the difference between the updated virtual dom and previous dom then its update the DOM

