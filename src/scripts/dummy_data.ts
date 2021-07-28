import { UserModel } from "../models/user_schema";

const connect = async () => {
  const users = [
    {
      first_name: "Alexa",
      last_name: "Lewis",
      dept: "Engineering",
      title: "QA Engineer",
      skill: "Cypress",
    },
  ];

  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.first_name} ${user.last_name}`);
    }
  } catch (e) {
    console.log(e);
  }
  console.warn("Database seeded!");
};

export default connect;
