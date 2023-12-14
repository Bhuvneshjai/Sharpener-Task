const fs = require('fs');

function loadJSONFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function saveJSONFile(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8');
}

module.exports = { loadJSONFile, saveJSONFile };
