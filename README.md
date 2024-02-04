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

Episode-10
Learning styling
CSS/SCSS/SASS
1. style components is another way to write css for components.Refernce stylecomponents.com
2. In this part, we will learn tailwind CSS.
3. Material UI-React Component Library
4. BootStrap - Framework
5. ChakraUI
6. AntDesign

7. Tailwind CSS
It used postcss behind the scenes.
npx - means initializing the tailwind css ,invoking.

//Motive of creating postcssrc file-
//We aretelling post css that we are using tailwind.

It provides class for every sttyle.


Episode -11
1. Higher order components are the nomal js functions that takes component as an argument and return a enhanced version of it.
//Higher order compoment

//Input- RestaurantCard =>Output=> Promoted Restaurant cards
2. Controlled and Uncontrolled components
3. Accordian - a component along with expanded view
Two things-
Accordian Data and According header.
4. virtual DOM is the representation of the react components.
5. How to make controlled compnents?
Controlling data from parent and change it value in child component.
6. Lift state Up is a concept in react.