
const option = prompt("¿Que operacion quieres utilizar?:\n1. Sumar\n2. Restar\n3. Multiplicacion\n4. Dividir");
const num1 = +prompt("Ingresa el primer numero");
const num2 = +prompt("Ingresa el segundo numero");
switch(option){
case "1":
  alert("suma" + (num1 + num2));
    break;
  case "2":
    alert("resta" + (num1 - num2));
    break;
  case "3":
    alert("multiplica" + (num1 + num2));
    break;
  case "4":
    if (num2 !== 0){
      alert("Division:" + (num1 / num2));
    } else {
      alert("Error");
    }
    break;
    default:
      alert(No)
}