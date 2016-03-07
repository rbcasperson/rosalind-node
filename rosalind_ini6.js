'use strict';
import * as _ from "lodash";

export function main(data) {
    var count = _.reduce(_.words(data), (count, word) => {
        if (count[word]) {
            count[word] += 1
        } else {
            count[word] = 1
        };
        return count
    }, {});
    return _.trim(_.reduce(count, (result, value, key) => {
        return result + `${key} ${value}\n`;
    }, ""))
}
