import test from 'ava';
import '../node_modules/babel-core/register';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as solver from '../rosalind_ini6';
let sampleData, sampleAnswer;

test.before(t => {
    sampleData = fs.readFileSync('./sample_data/ini6_data.txt', {encoding: "utf8"});
    sampleAnswer = fs.readFileSync('./sample_data/ini6_answer.txt', {encoding: "utf8"});
});

test('solves ini6', t => {
    t.is(solver.main(sampleData), sampleAnswer)
});