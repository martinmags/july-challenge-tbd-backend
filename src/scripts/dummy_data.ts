import { UserModel } from '../models/user_schema';

const connect = async () => {
	const usersTemp = [
		{
			first_name: 'Alexa',
			last_name: 'Lewis',
			dept: 'Engineering',
			title: 'QA Engineer',
			skill: 'Cypress',
		},
	];

	try {
		const usersMongoDB = await UserModel.find();
		for (const user of usersTemp) {
			// Check if users are in database already; hard coded
			const existingUser = await UserModel.findOne({
				first_name: 'Alexa',
				last_name: 'Lewis',
			});

			// Only create users that do not exist already
			if (!existingUser) {
				await UserModel.create(user);
				console.log(`Created user ${user.first_name} ${user.last_name}`);
			}
		}
	} catch (e) {
		console.log(e);
	}
	console.warn('Database seeded!');
};

export default connect;
