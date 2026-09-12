Devstack Builder WebApp

A modern and interactive Developer Stack Builder WebApp built with React.
The application allows users to explore developer technologies and build their own personalized tech stack by selecting the technologies they want to use.

🚀 Live Demo

🔗 Live Website: https://devstack-builder-b14.netlify.app/


<h3>Features</h3>
<ul>
<li>Build Your Tech Stack — Select technologies and create your own developer stack.</li>
<li>Selected Stack Management — View the technologies you have selected and easily remove them when needed.</li>
<li>Technologies Used</li>
<li>React.js</li>
<li>JavaScript</li>
<li>TypeScript</li>
<li>CSS / Tailwind CSS / Daisy Ui</li>
<li>React Hooks</li>
<li>React Toastify</li>
<li>JSON Data</li>
<li>React Concepts Used</li>
<li>Fully Mobile Responsive, Laptop / Desktop Responsive</li>
</ul>
</br>
<ol>
  <li>Components</li>
  <li>Props</li>
  <li>State</li>
  <li>useState</li>
  <li>Conditional Rendering</li>
  <li>.map()</li>
  <li>Unique key props</li>
  <li>Parent-to-child data passing</li>
  <li>Child-to-parent communication</li>
  <li>Event Handling</li>
</ol>
React Questions & Answers
1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.
It makes React components easier to read and helps us create the UI more easily.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.
State is data managed inside a component that can change over time.
Props → Pass data between components
State → Manage changing data

3. What does the useState hook do, and where did you use it in this project?

useState allows a component to store and update data.
In this project, I used it to manage the selected technologies in my developer stack.
const [addStack, setAddStack] = useState([]);
When a user selects a technology, it is added to the stack using the state setter.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects, such as loading data when a component starts.
I used it to load the technology data from the JSON file.

useEffect(() => {
  fetch("/data.json")
    .then(res => res.json())
    .then(data => setTechnologies(data));
}, []);

The empty dependency array [] means the effect runs when the component loads.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

It helps React efficiently update the correct item when the list changes.

technologies.map(tech => (
  <TechCard
    key={tech.id}
    tech={tech}
  />
))

The key should be unique and stable.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.
For example, I used it to show a message when no technology has been selected:
If the stack is empty, the user sees the empty-stack message.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.
<TechCard tech={tech} />
The child receives the data:
function TechCard({ tech }) {
  return <h2>{tech.name}</h2>;
}
To send information back to the parent, the parent can pass a function as a prop.
