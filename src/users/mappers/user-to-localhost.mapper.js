import { User } from "../models/user";

/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = (user) => {
    const {id, isActive, balance, firstName, lastName, gender, avatar} = user;

    return {
        id,
        isActive,
        balance,
        first_name: firstName,
        last_name: lastName,
        gender,
        avatar,
    }
}