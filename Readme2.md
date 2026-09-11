Name: DevStack



Description: This is a website where many technologies like rect vue.js git etc are placed and user can select their technologies which they use.



I use React, JaveScript, TypeScript, TailWind CSS, GitHub



Features: 

1\. It can add technologies one by one according to user selection

2\. It can remove technologies one by one according to user

3\. It can remove all at once





Answers:


1. JSX is extended version of javaScript. React is a tool to use JSX where HTML CSS JavaScript can be used together
2. Props is like a parameter and it is immutable but state is mutable and it changes its value dynamicly
3. UseState hook is used to remember a value and update it dynamicly. It helps to track the process. I used useState in order to track when technologies were added after clicking the add button and also for the remove case.
4. useEffect hook let's to perform side effect in functional components. Data fetching is an asynchronous operation, so useEffect runs once when data comes.
5. React needs unique id to recognize which item was changed so .map() needs unique key props.
6. Condional rendering is used to show user something according to the condition. If condition is false user will see a message or page but if the condition is true then the user will see a different message or page. Example: The empty stack message. In this if stack is empty then the user will see "Your stack is empty" but if stack isn't empty then the user will see the cards of technologies he/she added.
7. To pass data from parent to child, when child is called in parent the data is passed through attribute. Child cannot sent something to parent. Cause react is unidirectional.

