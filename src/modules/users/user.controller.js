const userService = require('./user.service');

exports.createUser = async (req, res, next) => {
	try {
		const data = await userService.createUser(req.body);
		res.status(201).json(data);
	} catch (err) {
		next(err);
	}
};

exports.getUsers = async (req, res, next) => {
	try {
		const data = await userService.getUsers();
		res.json(data);
	} catch (err) {
		next(err);
	}
};

exports.getUserById = async (req, res, next) => {
	try {
		const data = await userService.getUserById(req.params.id);
		res.json(data);
	} catch (err) {
		next(err);
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const data = await userService.updateUser(req.params.id, req.body);
		res.json(data);
	} catch (err) {
		next(err);
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		const data = await userService.deleteUser(req.params.id);
		res.json(data);
	} catch (err) {
		next(err);
	}
};
