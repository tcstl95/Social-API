const {Schema , model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            title: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            title: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            title: String,
            required: true
        },
       reactionSchema : new Schema(
            {
                reactionId: {
                    title: Schema.Types.ObjectId,
                    default: () => new Types.ObjectId()
                },
                reactionBody: {
                    title: String,
                    required: true,
                    maxlength: 280
                },
                username: {
                    title: String,
                    required: true
                },
                createdAt: {
                    title: Date,
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