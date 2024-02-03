
Episode-8
1. Functional based components which we studied earlier, are modern way of creating components. While class based components are used at the very begining.
2. Class based compnent is a normal js class while functional based component is a normal js function.
3. How to create state variables in class based components.
4. Earlier there used to be no hooks.
5. Loading a class based component on a web page means creating an instance of that class.
Best place to create and receiev prop and state in constructor.
6. In functional component, BTS react creats a single state object of all state variables.
7. (MMI)What are react component lifecycle methods in class based components?
First constructor is called , then render is called
8. React.Component can also be write as Component in {Component}
9. In what order the functions will be called in class based componet approach-> render(),componentdidMOunt(),constructur().

10. componentdidMount() use cases->
To make API calls , but why? Reason->Because we render initial UI first through render() and then make an API call.

11. In class based component, state variables are defined inside constructor.

13. How lifecycle will work in case of two same component from parent class component.

Expected which is wrong-

-Parent Cons.
-Parent Rend.
    -Child1 Cons.
    -Child1 rend.
    -Child1 Component did mount

    -Child2 Cons.
    -Child2 rend.
    -Child2 Component did mount
-Parent component did mount


Actual-


   -Parent Cons.
-Parent Rend.
    -Child1 Cons.  
    -Child1 rend.
    -Child2 Cons.->renderPhase
    -Child2 rend.
    <=DOM updated in a single batch=>
    -Child1 Component did mount
    -Child2 Component did mount->commitPhase
-Parent component did mount
 
 14. Must read ReactLifeCycle Diagram.
 `https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/`

 First constructor->render->DOM changes->componentDidMOunt()

 React used to merge the DOM rendering of the sibling components.

 15. Flow diagram when API call is made in componentdidMount()

 -Constructor called
 -Render(dummy data)
 ****//HTML Dummy
 -Component did Mount 
 *****//API call
 *****//Change in state variable

-render(API data)
-componentdidUpdate()

16. useEffect is not equivalent to componentDidMount().
These are not comparable.

useEffect is called after every render if dependency array is not there.
If it is empty , then it will be called once. ([]).

In class based ,after evry render-ComponentdidUPdate() called.

17. How to call API on state variable changes-
componentDidMount(prevProps,prevState){
    if(this.state.var_name = prevState.var_name){
        //Call API
    }
}
Reason behind dependency array, that thare are multiple conditions.

Functional based components have enabled different API calls easier way, because of useEffect for two different with dependency array.
Previouly need to add condition if else if else for component didUpdate.

18. What is the use of  componentwillUnmount?
This is called when another componet is rendered.

19. Class based component has 5 lifecycle methds.
20. why do we write super props and constructr rops?
21.  Why useEffect cant be async but componentDidUpdate is .