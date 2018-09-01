import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';
import simulatedAnnealing from '..';

expect.extend({ toBeDeepCloseTo });

test('one variable polinom', () => {
  function polinom(x) {
    let y = Math.pow(x[0], 4) - 16 * Math.pow(x[0], 2) - x[0] * 5 + Math.pow(x[1], 4) - 16 * Math.pow(x[1], 2) - x[1] * 5;
    return y;
  }

  let simulatedAnnealingInputs = {
    goalFunction: polinom,
    guess: [0, 0],
    neighbour: {
      // lowerBound : [-5, -5] ,
      upperBound: [5, 5],
    },
    maxIterations: 10000,
    quenchingFactor: 2
  };
  expect(simulatedAnnealing(simulatedAnnealingInputs)).toBeDeepCloseTo([[2.9029, 2.9028], -156.66], 2);
});
