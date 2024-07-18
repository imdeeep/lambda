<<<<<<< HEAD
import { faker } from "@faker-js/faker";
import { User } from "../models/user.js";

const createUser = async (numUsers) => {
  try {
    const usersPromise = [];

    for (let i = 0; i < numUsers; i++) {
      const tempUser = User.create({
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        bio: faker.lorem.sentence(10),
        password: "password",
        avatar: {
          url: faker.image.avatar(),
          public_id: faker.system.fileName(),
        },
      });
      usersPromise.push(tempUser);
    }

    await Promise.all(usersPromise);

    console.log("Users created", numUsers);
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { createUser };
=======
import { User } from "../models/user.js";
import {faker} from "@faker-js/faker"

export const createUser = async(numUser)=>{
    try {
        const usersPromise =[];
        for(let i=0;i<numUser;i++){
            const tempUser = User.create({
                name:faker.person.fullName(),
                username:faker.internet.userName(),
                bio:faker.lorem.sentence(),
                email:faker.internet.email(),
                password:"password",
            })
            usersPromise.push(tempUser)
        }
        await Promise.all(usersPromise)
        console.log("User Created",numUser)
        process.exit(1);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
>>>>>>> be44749 (revertChanges)
