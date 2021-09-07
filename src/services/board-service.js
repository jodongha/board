const boardQuery = require('../queries/board-query');
const pool = require('../database/pool');


exports.board_insert = async (req, res) => {
    try {
        pool.query(boardQuery.board_insert, req);
        return;
        
    } catch (err) {
        throw Error(err);
    }
}
exports.board_update = async (req, res) => {
    try {
        pool.query(boardQuery.board_update, req);
        return;
    } catch (err){
        throw Errow(err);s
    }
}

exports.board_read = async () => {
    try {
        let rows = await pool.query(boardQuery.board_read);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.board_content = async (req, res) => {
    try {
        let id = req.params.board_uid;
        let rows = await pool.query(boardQuery.board_content, [id]);
        return rows[0];
    } catch (err) {
        throw Error(err);
    }
}

exports.board_delete = async (req, res) => {
    try{
        var id = req.params.board_uid;
        console.log([id]);
        pool.query(boardQuery.board_delete, [id]);
        return;
    }catch(err){
        throw Error(err);
    }
    
}
