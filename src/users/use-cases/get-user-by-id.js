import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from '../models/user';

/**
 * 
 * @param {String|Number} id 
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const rest = await fetch(url);
    const data = await rest.json();

    const users = localhostUserToModel(data);

    return users;
}