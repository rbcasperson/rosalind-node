import test from 'ava';
import '../node_modules/babel-core/register';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as solver from '../rosalind_dna';
let sampleData;

test.before(t => {
    sampleData = fs.readFileSync('./sample_data/dna_data.txt', {encoding: "utf8"});
});

test('solves dna', t => {
    t.is(solver.main(sampleData), '20 12 17 21')
});