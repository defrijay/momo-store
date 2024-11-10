// Middleware yang menangani error untuk fungsi asynchronous (async/await) di Express
const asyncHandler = (fn) => (req,res,next) => {
    Promise.resolve(fn(req,res,next)).catch((error) => {
        res.status(500).json({ message: error.message });
    });
};
export default asyncHandler;