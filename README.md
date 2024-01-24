Episode -6

1. Monolith architecture-
Earlier , apps was developed using monolithic architecture.
Means- Authentication code, db connectivity, api, Ui all written inside one.
If need a single change, we have to build and deploy this whole project.
Thats costly.

2. Microservice architecture

Everything in separate project-
Like service for UI, SMS , Auth,Db connectivity

a. How do these services interact with each other?
UI talks to backend which talks to db , auth.

The react project that we are making is a microservice written in react. 
One more advantage of using microservice that, each service can have separate language.
All these services run on their specific ports.
All these ports can be mapped to a domain.
Example- /sms, /api

3. How react application will interact with the API s? This was covered in this episode.


4. How to fetch data from API?
There are two ways that can be followed-
a. When app loads,make an api call , wait for data and when we will get the data then we render the UI.

Loads-----> API Calls-----> Render UI
b.As soon as page loads , we will just render the ui,now will make an api call as sson as we will get the result , we will now rerender the app from the data we will get from API.


Page loads----->Render whatever we have----->API---->Re-render the Page
Always prefer second approach,this gives better UX. Number of rendering a page occurs does not matter, because rect renders UI very fast.
5. useEffect Hook- Based on second approach
There are two arguments needed by useEffect(), that is arrow function and dependency array. Arrow function is a callback function.

When component will be rendered successfully, after rendering it will quickly call callback function, if dependency array is empty.

6. fetch() method is provided by JS Engine.

Swiggy API can be seen in network tab ad from there.

7. OPtional chaining

8. Load a simmer UI for inital UI vefore making an API call

9. Need of state variables

10. Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)



11. Before fetching any url , one should include CORS proxy url to the url that you are going to fetch.
This has a limit 50-60 API calls in a minute.



