
// Middleware to check if the user is an admin
export const isAdminUser = (req, res, next) => {
    // Check if user is an admin (you'll need to implement this logic based on your authentication mechanism)
    const isAdminUser = req.user && req.user.role === 'admin';
  
    if (isAdminUser) {
      // User is an admin, proceed to the next middleware or route handler
      return next();
    } else {
      // User is not an admin, send a forbidden response
      return res.status(403).json({ message: "Forbidden: Admin access required" });
    }
  };
  
  // Middleware to check if the user is a regular user
  export const isRegularUser = (req, res, next) => {
      // Check if user is a regular user (you'll need to implement this logic based on your authentication mechanism)
      const isRegularUser = req.user && req.user.role === 'regular';
    
      if (isRegularUser) {
        // User is a regular user, proceed to the next middleware or route handler
        return next();
      } else {
        // User is not a regular user, send a forbidden response
        return res.status(403).json({ message: "Forbidden: Regular user access required" });
      }
  };
  
  // Middleware to check if the user is the owner of the comment
  export const isCommentOwner = (req, res, next) => {
      // Check if user is the owner of the comment (you'll need to implement this logic based on your authentication mechanism)
      const isCommentOwner = req.user && req.user.id === req.comment.userId;
    
      if (isCommentOwner) {
        // User is the owner of the comment, proceed to the next middleware or route handler
        return next();
      } else {
        // User is not the owner of the comment, send a forbidden response
        return res.status(403).json({ message: "Forbidden: Comment owner access required" });
      }
    };
    
    // Middleware to check if the user is the owner of the post
    export const isPostOwner = (req, res, next) => {
      // Check if user is the owner of the post (you'll need to implement this logic based on your authentication mechanism)
      const isPostOwner = req.user && req.user.id === req.post.userId;
    
      if (isPostOwner) {
        // User is the owner of the post, proceed to the next middleware or route handler
        return next();
      } else {
        // User is not the owner of the post, send a forbidden response
        return res.status(403).json({ message: "Forbidden: Post owner access required" });
      }
    };
    
    // Middleware to check if the user is the owner of the like
    export const isLikeOwner = (req, res, next) => {
      // Check if user is the owner of the like (you'll need to implement this logic based on your authentication mechanism)
      const isLikeOwner = req.user && req.user.id === req.like.userId;
    
      if (isLikeOwner) {
        // User is the owner of the like, proceed to the next middleware or route handler
        return next();
      } else {
        // User is not the owner of the like, send a forbidden response
        return res.status(403).json({ message: "Forbidden: Like owner access required" });
      }
    };
 