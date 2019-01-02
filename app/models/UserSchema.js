const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UserSchema = new Schema(
        {
            name: String,
            password: String,
            emailId: String,
            userType: {
                type: Schema.Types.String,
                enum: ['USER', 'MAKER', 'CHECKER']
            },
            userToken: String
        },
        {
            timestamps: {
                createdAt: 'createdOn',
                updatedAt: 'updatedOn'
            },
            collection: 'users',
            versionKey: false
        }
    );

module.exports = mongoose.model('users', UserSchema);
