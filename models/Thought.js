const {Schema , model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
       reactionSchema : new Schema(
            {
                reactionId: {
                    type: Schema.Types.ObjectId,
                    default: () => new Types.ObjectId()
                },
                reactionBody: {
                    type: String,
                    required: true,
                    maxlength: 280
                },
                username: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal)
                }
            },
            {
                toJSON: {
                    getters: true
                }
            }
        ),
    });

    thoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    });

    const Thought = model('Thought', thoughtSchema);
    module.exports = Thought;