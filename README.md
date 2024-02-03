1. Modularity is necessary in react application.

2. Custom Hook need?
Creating a custom hook is not mandatory but it will make code reusable, readable.

3. File name starts with use that indicates hook.
4. Can we make hooks for useLocalData,useSessionStorage, can we make the hook for online or offline.
5. Its not  mandatory to use "use keyword hook,but its preferred.
Also for component name, it's preferred to name in camelcase.
6. Study about linters.
7. parcel -> bundles all the code into a single file.
8. chunking -> Code splitting ->Dynamic bundling->We have to chunk your application.
That means, smaller components should be there.
How to do bundling?
Diiferent bundle for separate functionlity.

9. Lazy loading concept comes into the picture.
const Grocery =lazy(()=>
    import('./components/Grocery'));