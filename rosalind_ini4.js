module.exports = function (data) {
    var lo = require('lodash');
    var nums = lo.map(data.split(" "), lo.parseInt),
        a = nums[0],
        b = nums[1],
        total = 0;

    if (!(a % 2)) {
        a++;
    };

    for (i = a; i <= b; i+= 2) {
        if (i % 2) {
            total += i;
        };
    };

    return total;
};
