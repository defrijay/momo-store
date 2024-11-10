import {
    createUser,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile,
    deletedUserById,
    getUserById,
    updateUserById
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Define route with endpoint '/'
router
    .route("/")                                     
    .post(createUser)   // Handle request POST for craete new user

// Define route with endpoint 'auth' for user login
router.post("/auth", loginUser);

// Define route with endpoint 'logout' for user logout
router.post("/logout", logoutCurrentUser);

// Define route with endpoint 'profile' for
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)     // Get the current activate user profile
  .put(authenticate, updateCurrentUserProfile); // Updating the existing user profile


// 😁ADMIN ROUTES😁 //
// Define route with endpoint '/' for get all list user
router.get("/", authenticate, authorizeAdmin, getAllUsers);    

// Define route with endpoint 'profile'
router
    .route("/:id")
    .delete(authenticate, authorizeAdmin, deletedUserById)  // Handle request DELETE for delete user by id for admin
    .get(authenticate, authorizeAdmin, getUserById)         // Handle request GET for fecth user by id for admin
    .put(authenticate, authorizeAdmin, updateUserById);     // Handle request PUT for update user by id for admin

export default router;


