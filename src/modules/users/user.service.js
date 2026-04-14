const userRepo = require('./user.repository');

exports.createUser = async (data) => {
	const { name, email, age } = data;

	if (!name || !email) {
		throw new Error('Name and email are required');
	}

	const existingUser = await userRepo.getUserByEmail(email);
	if (existingUser) {
		throw new Error('User already exists');
	}

	const result = await userRepo.createUser({ name, email, age });
	return { id: result.insertId, name, email, age };
};

exports.getUsers = async () => {
	return await userRepo.getAllUsers();
};

exports.getUserById = async (id) => {
	const user = await userRepo.getUserById(id);
	if (!user) throw new Error('User not found');
	return user;
};

exports.updateUser = async (id, data) => {
	const user = await userRepo.getUserById(id);
	if (!user) throw new Error('User not found');

	await userRepo.updateUser(id, data);
	return { message: 'User updated' };
};

exports.deleteUser = async (id) => {
	const user = await userRepo.getUserById(id);
	if (!user) throw new Error('User not found');

	await userRepo.deleteUser(id);
	return { message: 'User deleted' };
};
