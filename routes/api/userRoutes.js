const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUserId,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);


router
    .route('/:id')
    .get(getUserById)
    .put(updateUserId)
    .delete(deleteUser)


router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)


module.exports = router;
