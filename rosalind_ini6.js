'use strict';
import * as _ from "lodash";

export function main(data) {
    return _.trim(_.reduce(_.countBy(_.words(data)), (result, value, key) => {
        return result + `${key} ${value}\n`;
    }, ""))
}
