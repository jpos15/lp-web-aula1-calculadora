function calc(){
    var n1 = 0, n2 = 0, result = 0;
  var output = document.querySelector('#result')
    if (document.querySelector('#sum').onclick = function(evt) {
      alert('Sum');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1 + n2;
      output.innerHTML = "Result: " + result;
    }){
    }
    if (document.querySelector('#multi').onclick = function(evt) {
      alert('Multiply');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1 * n2;
      output.innerHTML = "Result: " + result;
    }){
    }
    if (document.querySelector('#div').onclick = function(evt){
      alert('Divide');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1/n2;
      output.innerHTML = "Result: " + result;
    }){
    }
    if (document.querySelector('#sub').onclick = function(evt){
      alert('Subtract');
      var n1 = parseFloat(document.querySelector('#numb1').value);
      var n2 = parseFloat(document.querySelector('#numb2').value);
      result = n1-n2;
      output.innerHTML = "Result: " + result;
    }){
    }
  }