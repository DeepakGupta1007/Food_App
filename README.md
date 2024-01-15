# PracticeReact

Episode-2
1. Two types of packages -dev dependencies and normal depend.
//Parcel 
2. Diff between tilde and caret in package.json- minor version for caret
3. What is package-lock.json?
Keep a track of exact version that is being installed. Have records, can say a logs of each version installed.
The integrity field consist of hash value to verify whatever is there in dev machine is same as deployed in production.
4. Differenec between package.json and package-lock.json?
package.json is configuration for the packages.


5. What does there in node modules?
This node module contains all the code of all dependencies(can have its own nested dependencies-trasit dependencies)  installed.

Some packages- parcel
npm install -D parcel

6. In case of one package -parcel how some other packages (dependent) are installed?

Dependency tree is developed. Each dependencies have its own package.json.

7. Should I put this whole node_modules to github?
No

8. Should I Push package.json and package-lock.json.
Yes, It maintains all the pckages installed- versions ,hash.
Whatever you can regenerate , you don't push.



7. Command to convert this into app. 
npx parcel index.html Baically this will ignite our app.
npx used to executae that package.

8. React
React is a js package.

cdn is not a good way to create application.
For react-
npm install react 
For react-dom-
npm install react-dom


9. parcel package works same as nodemon, creates a local server for you.Refreshing a page
HMR- hot module replacement
parcel- uses File Watching Algorithms- written in C++
parcel is caching things to give faster dev experience.
This is caching things in .parchel-cache files.
Parcel also do image optimization.
Parcel will do minification,compress,bundling also.
React is not making fast ,tree shaking- remove unused code, some credit to parcel app,consistent hashing(r&d),code splitting.It will do differential bundling-support older browsers,better error suggestion
Parcel gives you the way to host your app on https.
Documentation -parcel.org Must visit
Parcel.cache, Different build for dev and production.


10. How to create a prod build?
npx parcel build  index.html
Line 5. // "main": "app.js", Removed for dev build, this is entry point but we are assuming index.html. of pacckage.json

This "dist folder is storing builds.
"dist" and "parcel-cache" are automatically generated.
See dist files and analyse parcel.

11. Build your app all browser supported. How?
Refer browseslist.
// "browsersList":{
//   "Last 2 Chrome versions",
//   "Last 2 firebox versions"
// }

Episode-3
1. How to add scripts in projects ?

"start": "parcel index.html",
"build": "parcel build index.html"
Used to run project for beginners, npm run 'script_key'
2. React.createElement creates a JS Object,when we render this to DOM then it becomes HTML Element.
3. JSX- Java Script Syntax comes into the picture after the long code used from the below approach.
Example- Below code is not readable.
const heading = React.createElement("h1",{id: "heading"},"Deepak Gupta");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
4. JSX is not a HTML inside Js,it is html like syntax.JSX is not react.Parcel is doing job behind the scenes.

JSX code is transpiled before it reaches JS engine.JS Engine supports Tranpiled code.Transpile is done by parcel- to be specific Bebel (package is installed at the time of package.)

5. Babel is a js compiler.

//React.createElement =>ReactElement JS Object=> HTML Element(render)
//JSX code=>Babel tranpiles it to React.createElement =>JS Object=> HTML Element.
JSX is React.createElement at EOD.
 
 #Try Babe
 Properties of JSX-
 //JSX-This is not HTML,let's put example of class and className for JSX.
//JSX- Attributes in JSX needs to be in camelcase.l

6. What is component?
There are two types components-
a. Class Based compnents- Old way 
b. Functional Based components- New Way
A Javascript normal function which returns some JSX.

7. Component Composition
 Nesting compnents- composing two component into one another.

 8. A component cannot be called before initialization because it is concept of hoisting- cannot call const variable before initialization. 

 9. How to render components?

    1. <HeadingComponent />
    2. <HeadingComponent>
       </HeadingComponent>
10. 