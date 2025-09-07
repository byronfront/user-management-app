export class User {
    /**
     * 
     * @param {Like<User>} userDataLike 
     */
    constructor({id, isActive, balance, firstName, lastName, gender, avatar}) {
        this.id         = id;
        this.isActive   = isActive;
        this.balance    = balance;
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.gender     = gender;
        this.avatar     = avatar;
    }
}
