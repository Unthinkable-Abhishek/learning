Learning React JS

****  Chapter - 1  ****

1- createElement makes an object which has following things
    1- type - h1
    2- props
        1- attributes- id - objects
        2- children
        for multiple children pass it as array 

2- createRoot is responsible to assign a root inside react

3- render , converts the JS object into html which browser understands and render in on the screen
    putting the heading in the root, render will replace that and will put this in there 

4- Library and framework - react can only work in the place where we intends to like here root
    react can be applied to a small porting of a page, whatever place we make root as
    independently, some piece of code in js, gives helper methods to develop fast methods.
    framework comes with all lots of things
    framework may not be applied to the existing application, but we can use react in small section of a page

5- order of the script matters in index.html , react cdn link and then reactDOM cdn link
   as reactDOM wants react to render on the page


****  Chapter-2  ****

1- package.json - it has everything what we write while npm init - metadata dependencies script , ensure that project uses the correct version of dependencies (packages), 

2- package-lock.json  - keeps track of exact version is installed, for the package it has integrity which has the hash of package to verify that same version of package is deployed on the prod which is in our local

3- most important package is bundler, clean minify the code before going into the production which is done by bundler, prominent bundler is webpack, parcel, vite

4- bundler - it bundles our app which can be shipped to the production, we will be using parcel, 
    npm i -D parcel : -D dev_dependencies generally requires in development phase , normal can be for production 
    chunking bundling clean minify cache - all this is done by bundler

    ^ - caret, ~ - tilde -  
    caret - upgrade the minor/patch version 1.2.3 to 1.3.0  , tilde upgrade the patch version 1.2.3 to 1.2.4

5- node_modules - a dependencies will have its own dependencies , transitive dependencies , parcel need more package or dependencies , it need babel then babel will get installed, all the code and peer dependencies code 

6- npm vs npx - npm means called just npm command, npx means executing a package

7- npx parcel index.html - parcel goes to source and builds an development build

8- import React from 'react' - importing React in file from 'react' which is in node_modules now as we have installed it in our project

9- Browser scripts can't have imports and exports - write type="modules" while referring to script in the script tag of index.html file, as it will not be a normal browserscript it will be a module

10- Parcel - Dev Build, Local Server, HMR (Hot module replacement), File Watching Algo (C++), 
             Caching Faster build, Image Optimization, Minification, Bundling, Compress, Consistent Hashing, Code Splitting, Differential Bundling, Diagnostic, Error Handling, Host your app on https, Tree Shaking Algo

             Parcel uses file watching algo (C++), Keeps track and it gets build once again, faster     build because of cache. parcel-cache have files, caching things so build get developed fast

             Support older browsers by differential bundling for eg we have type="module" can generate no module for older browser

             Tree Shaking Algo - Parcel will remove unused code for you

             Less time for dev build then prod build, need more things for prod
        Uses other libraries for making build 

11- npx parcel build index.html - it makes a prod build which has dist folder, 

12- BrowserList- Support old broweser list