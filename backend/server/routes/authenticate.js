// Middleware to check for the API key
const authenticateAPIKey = (req, res, next) => {
    const encodedApiKey = req.headers['x-api-key'];
    
    if (!encodedApiKey) {
      return res.status(403).json({ error: 'No API key provided' });
    }
  
    // Decode the API key from Base64
    const decodedApiKey = Buffer.from(encodedApiKey, 'base64').toString('utf8');
  
    // Compare with the original API key
    if (decodedApiKey !== process.env.API_KEY) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
};
module.exports=authenticateAPIKey;