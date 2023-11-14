// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import './App.css';


function App() {
  let [input, setInput] = useState([]);
  let [numero, setNumero] = useState(0);
  let [signo, setSigno] = useState(0);
  let [punto, setPunto] = useState(0);


  const manejo = (e) => {
    let algo = document.getElementById(e.target.getAttribute('id')).innerHTML;
  
    // Copiar el array actual usando spread operator
    let nuevo = [...input];
    
    if (algo === '1' || algo === '2' || algo === '3' || algo === '4' || algo === '5' || algo === '6' || algo === '7' || algo === '8' || algo === '9') { setNumero(++numero)};
    if (algo == '+' || algo == '-' || algo == '*' || algo == "/") {setSigno(++signo); setPunto(0)}
    if (algo == '.') {setPunto(++punto);}

    if (nuevo[0] == '0' && nuevo.indexOf('.') < 0 && numero == 0 && signo == 0 && punto == 0) {
      console.log('para cero inical')

    } else if ((nuevo[nuevo.length-1] == '+' && algo == '+') || (nuevo[nuevo.length-1] == '-' && algo == '-') || (nuevo[nuevo.length-1] == '*' && algo == '*') || (nuevo[nuevo.length-1] == '/' && algo == '/')) {
      console.log('dos igualres')

    } else if (nuevo[nuevo.length-1] == '+' &&  (algo == '-' || algo == '*' || algo == '/' ) || nuevo[nuevo.length-1] == '-' &&  (algo == '+' || algo == '*' || algo == '/' ) || nuevo[nuevo.length-1] == '*' &&  (algo == '-' || algo == '+' || algo == '/' ) || nuevo[nuevo.length-1] == '/' &&  (algo == '-' || algo == '*' || algo == '+' )) {
      console.log('cambio signo')      
      nuevo[nuevo.length-1] = algo
      setInput(nuevo)

    } else if ((nuevo[nuevo.length-1] == '.' && algo == '.') ) {      
      console.log('doble punto')

    } else if (punto >= 0 && signo == 0) {
      console.log('mas de un punto en el mismo')
    }
     else {
      // if (nuevo[0] == '0') {nuevo[0] = ''}
      nuevo.push(algo)
      setInput(nuevo)
    }
        
  }
  

  return (
    <div className='container col-4'>
      <div className='row'>
        <div id="display" className='col text-end'>
          {input}

        </div>
      </div>
      <div className='row'>
        <div id="add" className='col pad oper' onClick={manejo}>+</div>
        <div id="subtract" className='col pad oper' onClick={manejo}>-</div>
        <div id="multiply" className='col pad oper' onClick={manejo}>*</div>
        <div id="divide" className='col pad oper' onClick={manejo}>/</div>
      </div>
      <div className='row'>
        <div id="seven" className='col pad' onClick={manejo}>7</div>
        <div id="eight" className='col pad'onClick={manejo}>8</div>
        <div id="nine" className='col pad' onClick={manejo}>9</div>
        <div id="clear" className='col pad ac' onClick={() => {setInput(''); setNumero(0); setSigno(0);setPunto(0)}}>AC</div>        
      </div>
      <div className='row'>
        <div id="four" className='col pad' onClick={manejo}>4</div>
        <div id="five" className='col pad' onClick={manejo}>5</div>
        <div id="six" className='col pad' onClick={manejo}>6</div>
        <div className='col pad '></div>
      </div>
      <div className='row'>
        <div id="one" className='col pad' onClick={manejo}>1</div>
        <div id="two" className='col pad' onClick={manejo}>2</div>
        <div id="three" className='col pad' onClick={manejo}>3</div>
        <div id="equals" className='col pad' onClick={manejo}>=</div>
      </div>
      <div className='row'>
        <div id="zero" className='col pad' onClick={manejo}>0</div>
        <div id="decimal" className='col pad' onClick={manejo}>.</div>        
        <div className='col pad'></div>
      </div>
    </div>
  );
}

export default App;
