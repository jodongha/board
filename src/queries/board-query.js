exports.board_insert = 'insert into db_board (title, writer, content) value (?, ?, ?)';
exports.board_read = 'select board_id, title, content from topic where board_id = ?';
exports.board_update = 'update db_board set title = ?, content = ?, writer = ? where board_id = ?';
exports.board_delete = 'delete from topic where id = ?';
