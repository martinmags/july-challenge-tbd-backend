import { UserModel } from "../models/user_schema";

const connect = async () => {
  const usersTemp = [
    {
      first_name: "Alexa",
      last_name: "Lewis",
      dept: "Engineering",
      title: "QA Engineer",
      skill: ["Cypress", "TestRail", "Testim"],
      googleId: "123",
    },
    {
      first_name: "Aiesha",
      last_name: "Brown",
      dept: "Engineering",
      title: "Full Stack Developer 1",
      skill: ["OAuth", "React"],
      googleId: "321",
    },
    {
      first_name: "Martin",
      last_name: "Magsombol",
      dept: "Engineering",
      title: "Full Stack Developer 1",
      skill: ["Olympus", "OMS"],
      googleId: "456",
    },
    {
      first_name: "Nicole",
      last_name: "Gooden",
      dept: "Engineering",
      title: "Full Stack Developer 1",
      skill: ["React", "Unit Testing"],
      googleId: "654",
    },
    {
      first_name: "Ben",
      last_name: "Schein",
      dept: "Product",
      title: "Senior Product Manager",
      skill: "Product Ops",
      googleId: "789",
    },
    {
      first_name: "Tiffany",
      last_name: "Haltom",
      dept: "Product",
      title: "Product Manager",
      skill: "eCommerce",
      googleId: "987",
    },
    {
      first_name: "Meg",
      last_name: "Carreau",
      dept: "Product",
      title: "Associate Director, Product Design",
      skill: "Figma",
      googleId: "036",
    },
    {
      first_name: "Marty",
      last_name: "Hauck",
      dept: "Data Analytics",
      title: "Manager, Business Intelligence",
      skill: "Segment",
      googleId: "802",
    },
    {
      first_name: "Kim",
      last_name: "Vandrilla",
      dept: "Creative",
      title: "Associate Director, Brand & Creative",
      skill: "Objective Wellness",
      googleId: "159",
    },
  ];

  try {
    const usersMongoDB = await UserModel.find();
    for (const user of usersTemp) {
      // Check if users are in database already; hard coded
      const existingUser = await UserModel.findOne({
        googleId: [
          "123",
          "321",
          "456",
          "654",
          "789",
          "987",
          "036",
          "802",
          "159",
        ],
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
  console.warn("Database seeded!");
};

export default connect;
