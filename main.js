const calculadora = {
    valorDisplay: '0',
    primeiroNumero: null,
    esperandoNumero: false,
    operador: null,
  };
  
  function digitoInput(digito) {
    const { valorDisplay, esperandoNumero } = calculadora;
  
    if (esperandoNumero === true) {
      calculadora.valorDisplay = digito;
      calculadora.esperandoNumero = false;
    } else {
      calculadora.valorDisplay = valorDisplay === '0' ? digito : valorDisplay + digito;
    }
  }
  
  function osDeciamais(virgula) {
      if (calculadora.esperandoNumero === true) return;
    
    if (!calculadora.valorDisplay.includes(virgula)) {
      calculadora.valorDisplay += virgula;
    }
  }
  
  function cuidaOperador(proxOperando) {
    const { primeiroNumero, valorDisplay, operador } = calculadora
    const ValorInput = parseFloat(valorDisplay);
  
    if (operador && calculadora.esperandoNumero)  {
      calculadora.operador = proxOperando;
      return;
    }
  
    if (primeiroNumero == null) {
      calculadora.primeiroNumero = ValorInput;
    } else if (operador) {
      const currentValue = primeiroNumero || 0;
      const result = fazerCalculo[operador](currentValue, ValorInput);
  
      calculadora.valorDisplay = String(result);
      calculadora.primeiroNumero = result;
    }
  
    calculadora.esperandoNumero = true;
    calculadora.operador = proxOperando;
  }
  
  const fazerCalculo = {
    '/': (primeiroNumero, segundoOperando) => primeiroNumero / segundoOperando,
  
    '*': (primeiroNumero, segundoOperando) => primeiroNumero * segundoOperando,
  
    '+': (primeiroNumero, segundoOperando) => primeiroNumero + segundoOperando,
  
    '-': (primeiroNumero, segundoOperando) => primeiroNumero - segundoOperando,
  
    '=': (primeiroNumero, segundoOperando) => segundoOperando
  };
  
  function resetarCalculadora() {
    calculadora.valorDisplay = '0';
    calculadora.primeiroNumero = null;
    calculadora.esperandoNumero = false;
    calculadora.operador = null;
  }
  
  function atualizarDisplay() {
    const display = document.querySelector('.calculadora-screen');
    display.value = calculadora.valorDisplay;
  }
  
  atualizarDisplay();
  
  const botoes = document.querySelector('.calculadora-botoes');
  botoes.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operador')) {
      cuidaOperador(target.value);
          atualizarDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      osDeciamais(target.value);
          atualizarDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetarCalculadora();
          atualizarDisplay();
      return;
    }
  
    digitoInput(target.value);
    atualizarDisplay();
  });