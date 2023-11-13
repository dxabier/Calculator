// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState('');

  const manejo = (e) => {
    // let vari = input.slice(1)
    // setInput(eval(vari))
    let algo = document.getElementById(e.target.getAttribute('id')).innerHTML;
    let cadena = '';
    console.log(cadena[0] == '0', (cadena.indexOf('.') < 0))
    console.log(cadena)
    if (cadena[0] === '0' && (cadena.indexOf('.') < 0) ) {
      console.log('pasa')
      cadena += ''
    } else {
      console.log(algo, 'algo')
      cadena += algo
    }
    console.log(cadena, 'cad')
    
    
    setInput(input.splice(0,100,cadena))
  }

  return (
    <div className='container col-4'>
      <div className='row'>
        <div id="display" className='col text-end'>{input}</div>
      </div>
      <div className='row'>
        <div id="add" className='col pad' onClick={manejo}>+</div>
        <div id="subtract" className='col pad' onClick={manejo}>-</div>
        <div id="multiply" className='col pad' onClick={manejo}>x</div>
        <div id="divide" className='col pad' onClick={manejo}>/</div>
      </div>
      <div className='row'>
        <div id="seven" className='col pad' onClick={manejo}>7</div>
        <div id="eight" className='col pad'onClick={manejo}>8</div>
        <div id="nine" className='col pad' onClick={manejo}>9</div>
        <div id="clear" className='col pad ac' onClick={() => setInput('')}>AC</div>        
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
