import test from 'ava';
import '../node_modules/babel-core/register';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as solver from '../rosalind_ini4';
let sampleData;

test.before(t => {
    sampleData = fs.readFileSync('./sample_data/ini4_data.txt', {encoding: "utf8"});
});

test('solves ini4', t => {
    t.is(solver.main(sampleData), 7500)
});