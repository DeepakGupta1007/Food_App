Episde-13
1. Manual testing and  QA
2. types of testing(developer)-
Unit testing-testing in isolation
Integration testing
End to end testing-Use selenium
3. React Testing library is used to write test cases.
4. If we are using create react-app ,it is already integrated but for paercel we need to integrate this.
5. Parcelis used for bundling.
6. Zest is a js testing library,react testing lib use thi BTS.Zest in turn uses babel.

7. Steps->
-Install React Testing libarry(npm -install --save-dev @testing-
library/react)
-Install jest(npm i -D jest)
-Install babel dependencies
-Configure babel (npm install --save-dev babel-jes
t @babel/core @babel/preset-env)
-Configure parcel config file to disable default babel transpilation
- Jest configuratio npx jest --init
- Install jsdom library
Visit https://parceljs.org/languages/javascript/
-Install npm i -D  @babel/preset-react for checking componenets previously methods worked. 
- Include @testing-library/jest-dom

8. Where should I write the test cases.

.test.js File will be considered for testing.
Example- Headers.test.js
        Headers.spec.js
        Headers.spect.ts


__text__  Two underscore at the begining and at the end Known as dunder.

9. Babel preset is helping testing library to convert into html code.

10. Testcases can be divided into describe where a finite number of test cases are passed.