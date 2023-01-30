const Thought = require('../models/Thought');
 
const thoughtControl = {
    getAllThought(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .sort({_id: -1})
        .then(thought=> res.json(thought))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }
        );
    },
    // get one thought by id
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.id})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(async thought => {
            // If no thought is found, send 404
            if(!thought) {
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
    // create thought
    createThought({body}, res) {
        Thought.create(body)
        .then((thought) => res.json(dbThoughtData))
        .catch(err => res.status(400).json(err));

    },
};

module.exports = thoughtControl;