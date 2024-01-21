Episode -5
1. General practice- There should be a folder src where all the files should be.->Common convention

2. Projct Structure-
//Food ordering website
/*Components--
Header
    -Logo
    -Navbar
Body
    -Search component
    -Restaurant container
        -Restaurant card
            -Img
            -Name
            -Star
            -Cuisines
            -Time of delivery
Footer
    -Copyright
    -Links
    -Address
    -Contact

    A component is a function that returns a JSX object.
*/

3. By the end, parcel combines all the code to a single file.
File module in React project.(Must visit).


4. Some give components files extension to .js or .jsx.


5. For any component to import we need to export that file.

6. import Body from './components/Body';
same as
import Body from './components/Body.js';

7. Never keep your data in component file.
8. Never ever keep hardcoded thing in Component file.
9. Components file name should be in upper case.
10. There are two types of export 
Default and Named
Only one file have one default export.
A module cannot have multiple default exports.

a. default export/import
export default Body;
import Body from './components/Body';

b. named export/import
export const Component;
import {Component} from "path"

11. Can i use named export with default export?

12. React is faster due to DOM manipulation.

13. State variable is a super powerful variable.React element is a plain js function.

14. Hooks
A hook is just a normal js function provided by react with some superpower.

a. useState() =>Superpowerful state varibles in React, Naming convention-[varName,setvarName]
b. useEffect()

c. useRef()
d. useCallback()
e. useMemo()



"Whenever state variable changes , react usually re-renders the component."

15. Reconciliation algorithm(React fiber)->
React Fiber - Introduced in React -16

16. Virtual DOM and Actual DOM

Actual Dom-
<div>
<img src=""/>
<div/>

Virtual DOM- representation of Actual DOM

The diff alogorithm finds out the differenec between old and new dom and re-render accordingly.


useState returns an array, thats why we use array destructure.
 Way-1
 const [listData, setData] = useState(listOfRest);
Way-2
const arr = useState(listOfRest);
const listObj = arr[0];
const setlistOnj=arr[1];

