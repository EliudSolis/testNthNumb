import { expect, test } from 'vitest';
import { calculator} from '../functions/calculator.ts';

test('Calculadora de enesimo numero de 0', () => { 
    expect(calculator(0)).toBe(0);
 })

test('Calculadora de enesimo numero de 1', () => {
    expect(calculator(1)).toBe(0);
})
test('Calculadora de enesimo numero de 2', () => {
    expect(calculator(2)).toBe(0);
})
test('Calculadora de enesimo numero de 3', () => {
    expect(calculator(3)).toBe(90);
})
test('Calculadora de enesimo numero de 4', () => {
    expect(calculator(4)).toBe(210);
})
test('Calculadora de enesimo numero de 5', () => {
    expect(calculator(5)).toBe(247.5);
})
test('Calculadora de enesimo numero de 6', () => {
    expect(calculator(6)).toBe(273);
})
test('Calculadora de enesimo numero de 7', () => {
    expect(calculator(7)).toBe(285.6);
})
test('Calculadora de enesimo numero de 8', () => {
    expect(calculator(8)).toBe(256.5);
})
test('Calculadora de enesimo numero de 9', () => {
    expect(calculator(9)).toBeCloseTo(238.85);
})