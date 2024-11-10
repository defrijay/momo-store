// verifies if a provided ID in the request parameters is a valid MongoDB ObjectId
import { isValidObjectId } from "mongoose";

// Middleware function to check if an ID in the request parameters is valid
function checkId(req, res, next) {
  // Check if the provided ID (req.params.id) is a valid MongoDB ObjectId
  if (!isValidObjectId(req.params.id)) {
    // If the ID is invalid, set the status to 404 (Not Found) and throw an error with a message
    res.status(404);
    throw new Error(`Invalid Object of: ${req.params.id}`);
  }
  // If the ID is valid, proceed to the next middleware or route handler
  next();
}

// Export the checkId function for use in other parts of the application
export default checkId;
