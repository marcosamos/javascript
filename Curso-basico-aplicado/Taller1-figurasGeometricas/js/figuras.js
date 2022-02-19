// Codigo cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado * 4;

console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(3)} cm`)

const areaCuadrado = (lado) => lado * lado;
console.log(`El area del cuadrado es: ${areaCuadrado(5)} cm^2`)

console.groupEnd();

// Codigo de triangulo

const perimetroTriangulo = (lado1,lado2,base) => lado1 + base + lado2;

const areaTriangulo = (base,altura) => (base * altura) / 2;
console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo}cm`)

// Diametro
const diametroCirculo = (radio) => radio * 2;

// PI
const PI = Math.PI;

// Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

// Area
const areaCirculo = (radio) => PI * (radio**2);

console.groupEnd();


// Aqui interactuamos con HTML

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    alert(perimetroCuadrado(input));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    alert(areaCuadrado(input));
}