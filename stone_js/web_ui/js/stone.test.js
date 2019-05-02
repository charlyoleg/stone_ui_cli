// stone.test.js

// A black-magic solution from ESM, waiting for the official support for es6-module by nodejs, planned with node-V12.0
require = require("esm")(module/*, options*/);
const stone = require("./stone.js");
// With node V12.0, this will be replaced by
//import * as stone from './stone.js';

test('dummy brick weight computation', () => {
  expect(stone.stone_weight(1, 2, 3, 1)).toBe(6);
});

test('concrete brick weight computation', () => {
  expect(stone.stone_weight(0.4, 0.2, 0.2, 2800)).toBe(0.4*0.2*0.2*2800);
});

test('simple therma conductivity', () => {
  expect(stone.wall_thermal_conductivity(3.1, 0.2)).toBe(15.5);
});

test('looking at stone-api activities', () => {
  expect(stone.call_activities().visit_stat).toMatch(/visit counts:/);
});


