'use strict';
export function main(data) {
    const _ = require('lodash');
    return _.reduce(_.split(data, ' '), (accumulator, item) => {
        return accumulator + (item * item);
    }, 0);
};
