const { Schema, model } = require('mongoose');


// Creating a user schema//
const UserSchema = new Schema(
    {
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
            },
            message: "Please enter a valid email address"
        }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        {
            toJSON: {
                virtuals: true,
        },
        id: false
    }
    ],


});

UserSchema
.virtual ('friendCount')
.get(function() {
    return this.friends.length;
}
);

const User = model('User', UserSchema);
module.exports = User;