const db = require('../../../config/db');

exports.createUser = async ({ name, email, age }) => {
	const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
	const [result] = await db.execute(sql, [name, email, age]);
	return result;
};

exports.getAllUsers = async () => {
	const [rows] = await db.execute('SELECT * FROM users');
	return rows;
};

exports.getUserById = async (id) => {
	const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
	return rows[0];
};

exports.getUserByEmail = async (email) => {
	const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
	return rows[0];
};

exports.updateUser = async (id, { name, email, age }) => {
	const sql = 'UPDATE users SET name=?, email=?, age=? WHERE id=?';
	const [result] = await db.execute(sql, [name, email, age, id]);
	return result;
};

exports.deleteUser = async (id) => {
	const [result] = await db.execute('DELETE FROM users WHERE id=?', [id]);
	return result;
};
