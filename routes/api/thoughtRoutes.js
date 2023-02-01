const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');
// referencing controllers//


router.route('/').get(getAllThought);


//establishing api routes//
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:userId').post(createThought);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);



module.exports = router;

