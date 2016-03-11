import test from 'ava';
import '../node_modules/babel-core/register';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as solver from '../rosalind_ini3';
let sampleData;

test.before(t => {
    sampleData = fs.readFileSync('./sample_data/ini3_data.txt', {encoding: "utf8"});
});

test('solves ini3', t => {
    t.is(solver.main(sampleData), 'Humpty Dumpty')
});