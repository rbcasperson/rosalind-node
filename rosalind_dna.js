'use strict';
import * as _ from 'lodash';

export function main(data) {
    var results = _.countBy(data);
    return `${results['A']} ${results['C']} ${results['G']} ${results['T']}`
}