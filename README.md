
#Esta aplicación cumple los requisitos de la prueba solicitada. 

En los requerimientos se indica que al recibir un numero N, este debe pasar por una serie de operaciones para 
finalmente ejecutar una formula que corresponde a: 
serie(n) = 3primo(n) * triangular(n) / fibonacci(n-2) 

## Operacions
En el archivo calculator.ts podemos encontras las funciones que se ejecutan cuando se llama a la función calculator
Una que consigue el numero primo de N, otra el numero fibonacci y por ultimo el numero triangular. 

## Componentes 
Como se solicitó, se integran tres componentes en el archivo app, uno de ellos solo se renderizará hasta que el numero 
ingresado sea superior a 2 
Esto con el propósito de evitar resultados nulos o que por la naturaleza de la función no permitan un resultado mostrable
Adicional a esto, para evitar problemas de renderizado y consumo excesivo de recursos, se cambia el valor de retorno 
por un encabezado h1 y un boton para resetear el valor cuando este ha superado la cantidad que se indica como número máximo.

## Test
Por último se incorpora un archivo test que se ejecuta con el comando npm run test, este evalua los numeros naturales 
para garantizar los resultados esperados. 
El caso del numero 9 se maneja con el la funcion  toBeCloseTo() debido a que el numero resultante es muy largo, por ello 
se pide que se acerque, siendo la variación de centésimas. 


