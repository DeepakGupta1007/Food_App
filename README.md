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


