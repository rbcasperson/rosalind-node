module.exports = function (data) {
    var lo = require('lodash');
    var datas = lo.split(data, "\n"),
        nums = lo.map(lo.split(datas[1], " "), lo.parseInt),
        text1 = datas[0].slice(nums[0], nums[1] + 1),
        text2 = datas[0].slice(nums[2], nums[3] + 1);

    return text1 + " " + text2;
};
