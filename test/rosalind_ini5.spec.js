import test from 'ava';
import '../node_modules/babel-core/register';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as solver from '../rosalind_ini5';
let sampleData, sampleAnswer;

test.before(t => {
    sampleData = fs.readFileSync('./sample_data/ini5_data.txt', {encoding: "utf8"});
    sampleAnswer = fs.readFileSync('./sample_data/ini5_answer.txt', {encoding: "utf8"});
});

test('solves ini5', t => {
    t.is(solver.main(sampleData), sampleAnswer)
});