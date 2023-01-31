const {User, Thought} = require('../models/Thought');
 
const thoughtControl = {
    getAllThought(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .sort({_id: -1})
        .then(dbThought=> res.json(dbThought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }
        );
    },
   
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.id})
        .select('-__v')
        .then(async dbThought => {
            if(!dbThought) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(thought);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    createThought({body}, res) {
        Thought.create(body)
        .then((thought) => res.json(thought))
        .catch(err => res.status(400).json(err));

    },
    
    updateThought({params, body}, res) {
        Thought.findOneAndUpdate(
            {_id: params.id},
            body,
            {new: true, runValidators: true}
        )
        .then(dbThought => {
            if(!dbThought) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThought);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteThought({params}, res) {
        Thought.findOneAndDelete({_id: params.id})
        .then(dbThought => {
            if(!dbThought) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(dbThought);
        })
        .catch(err => res.status(400).json(err));
    },
addFriend({params}, res) {
    User.findOneAndUpdate(
        {_id: params.userId},
        {$addToSet: {friends: params.friendId}},
        {new: true}
    )
    .then(dbUser => {
        if(!dbUser) {
            res.status(404).json({message: 'No user found with this id!'});
            return;
        }
        res.json(user);
    })
    .catch(err => res.json(err));
},
deleteFriend({params}, res) {
    User.findOneAndUpdate(
        {_id: params.userId},
        {$pull: {friends: params.friendId}},
        {new: true}
    )
    .then(dbUser => {
        if(!dbUser) {
            res.status(404).json({message: 'No user found with this id!'});
            return;
        }
        res.json(user);
    })
    .catch(err => res.json(err));
},
addReaction({params, body}, res) {
    Thought.findOneAndUpdate(
        {_id: params.thoughtId},
        {$addToSet: {reactions: body}},
        {new: true, runValidators: true}
    )
    .then(dbThought => {
        if(!dbThought) {
            res.status(404).json({message: 'No thought found with this id!'});
            return;
        }
        res.json(dbThought);
    })
    .catch(err => res.json(err));
},
deleteReaction({params}, res) {
    Thought.findOneAndUpdate(
        {_id: params.thoughtId},
        {$pull: {reactions: {reactionId: params.reactionId}}},
        {new: true}
    )
    .then(dbThought => {
        if(!dbThought) {
            res.status(404).json({message: 'No thought found with this id!'});
            return;
        }
        res.json(dbThought);
    })
    .catch(err => res.json(err));
}
};

module.exports = thoughtControl;
