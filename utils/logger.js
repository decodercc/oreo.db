const chalk = require('chalk');

module.exports = class Logger {
    constructor(pref) {
        this.pref = pref;
    }
    log(txt) {
        return console.log(`${chalk.grey(this.pref)} ${txt}`);
    }
    warn(txt) {
        return console.warn(`${chalk.yellow(this.pref)} ${txt}`);
    }
    error(txt) {
        return console.error(`${chalk.red(this.pref)} ${txt}`);
    }
    success(txt) {
        return console.log(`${chalk.green(this.pref)} ${txt}`);
    }
};
