export function main(data) {
    var lo = require("lodash");
    var evens = [],
        lines = lo.split(data, "\n");
    lines.pop();

    for (var i = 1; i < lines.length; i += 2) {
        evens.push(lines[i]);
    };

    return lo.join(evens, "\n");
};
