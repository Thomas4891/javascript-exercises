const repeatString = function (string, num) {
    let concatString = string;
    for (let i = 1; i < num; ++i) {
        concatString += string;
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
