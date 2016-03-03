module.exports = {
    main: function (data) {
        var split = require('lodash/split');
        nums = split(data, " ");
        var a = nums[0],
            b = nums[1];
        return a * a + b * b;
    }
};