'use strict';
module.exports = data => {
    const _ = require('lodash');
    return _.reduce(_.split(data, ' '), (accumulator, item) => {
        return accumulator + (item * item);
    }, 0);
};
