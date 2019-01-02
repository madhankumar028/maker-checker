const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    MediaSchema = new Schema(
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'users',
                required: true
            },
            title: String,
            pathOfFile: String,
            status: {
                type: Schema.Types.String,
                enum: ['WAITING_FOR_APPROVAL', 'APPROVED', 'REJECTED']
            }
        },
        {
            timestamps: {
                createdAt: 'createdOn',
                updatedAt: 'updatedOn'
            },
            collection: 'media',
            versionKey: false
        }
    );

module.exports = mongoose.model('media', MediaSchema);
