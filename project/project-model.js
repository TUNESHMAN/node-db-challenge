const db = require('../datas/db-config');

function find(table) {
    if (table === 'resources') {
        return db('resources');
    } else if ( table === 'projects') {
        return db('projects');
    } else {
        return null;
    }
}

function insert(table, data) {
    if (table === 'resources') {
        return db('resources').insert(data);
    }
}

module.exports = {
    find,
    insert
}