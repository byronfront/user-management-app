import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
    const {id, isActive, balance, first_name, last_name, gender, avatar} = localhostUser;

    return new User({
        id,
        isActive,
        balance,
        firstName: first_name,
        lastName: last_name,
        gender,
        avatar,
    })
}