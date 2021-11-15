const fs = require("fs");
const Logger = require('./utils/logger');
const logger = new Logger('[ Oreo.db ]')

module.exports = class ASC {
    constructor(dbName) {
        this.json = dbName || "./database.json";
        this.db = {};
        if (!fs.existsSync(this.json)) {
            fs.writeFileSync(this.json, "{}", "utf-8");
        } else {
            this.file();
        }
    }
    file() {
        const savedData = JSON.parse(fs.readFileSync(this.json));
        if (typeof savedData === "object") {
            this.db = savedData;
        }
    }
    save() {
        return fs.writeFileSync(this.json, JSON.stringify(this.db, null, 2), "utf-8");
    }
    get(key) {
        if (!key) return logger.error('You have not specified the key you will be looking for!');
        return this.db[key];
    }
    fetch(key) {
        if (!key) return logger.error('You have not specified the key you will be fetching!');
        return this.db[key];
    }
    has(key) {
        if (!key) return logger.error('You have not specified the key!');
        return Boolean(this.db[key]);
    }
    set(key, value) {
        if (!key) return logger.error('You have not specified the key you will be set!');
        if (!value) return logger.error('You have not specified a value to be set!');
        this.db[key] = value;
        return this.save();
    }
    delete(key) {
        if (!key) return logger.error('You have not specified the key you will be delete!');
        delete this.db[key];
        return this.save();
    }
    add(key, count) {
        if (!key) return logger.error('You have not specified the key you will be add!');
        if (!count) return logger.error('You have not specified the count which one will you add before the current!');
        if (!this.db[key]) this.db[key] = 0;
        this.db[key] += count;
        return this.save();
    }
    sub(key, count) {
        if (!key) return logger.error('You have not specified the key you will be sub!');
        if (!count) return logger.error('You have not specified the count which one will you sub from the current!');
        if (!this.db[key]) this.db[key] = 0;
        this.db[key] -= count;
        return this.save();
    }
    push(key, element) {
        if (!key) return logger.error('You have not specified the key to which you will push!');
        if (!element) return logger.error('You have not specified the element to push!');
        if (!this.db[key]) this.db[key] = [];
        this.db[key].push(element);
        return this.save();
    }
    clear() {
        this.db = {};
        this.save();
    }
    all() {
        return this.db;
    }
};
