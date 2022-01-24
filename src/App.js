import logo from './logo.svg';
import './App.css';
import React from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";


// const IdCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <div className="avatar">
//         <img src={props.picture} alt={props.name} />
//       </div>
//       {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
//       <div className="infos">
//         <p>First name: {props.firstName}</p>
//         <p>Last name: {props.lastName}</p>
//         <p>Height: {props.heigth}</p>
//         <p>Birth: {props.birth.toString()}</p>
//       </div>
//     </div>
//   );
// };



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* iteration 1 */}
      <h2>IdCard</h2>
      <div className="container-Idcard">
        <IdCard lastName="Doe" firstName="John" gender="male" heigth={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName="Delores" firstName="Obrien" gender="female" heigth={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>

      {/* ieration 2 */}
      <h2>Greetings</h2>
      <div className="container-greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      {/* ieration 3 */}
      <h2>Random</h2>
      <div className="container-random">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      {/* ieration 4 */}
      <h2>BoxColor</h2>
      <div className="container-boxcolor">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/* ieration 5 */}
      <h2>CreditCard</h2>
      <div className="container-creditcard">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

    </div>
  );
}

export default App;
