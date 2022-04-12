// Import stylesheets
import './style.css';


const  debounceFunction = (getDataFn, time) => {
  let timer;
 return () => {
  clearTimeout(timer);
  console.log("Typed");
  timer =  setTimeout( getDataFn, time); ;
 }
 
};


const getData = () => {
  console.log('Getting Data...!!');
};
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = 
`<div>
<label>Debounce Check Console :</label>
<input id =  3rd></input>
<h1>Calls API "Getting Data...!!" only once after 2 seconds after typing on console</h1>
</div>`;


const thirdInput = document.getElementById('3rd');
thirdInput.addEventListener('input', 
  debounceFunction(getData, 2000)

);












