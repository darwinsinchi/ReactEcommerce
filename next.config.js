// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://DarwinM:catherine1@reactreserve-zvsdh.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "mysecret",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/diu0bagaj/image/upload",
    STRIPE_SECRET_KEY: "sk_test_hFPJTTLzeVvrwHjB2sDApuzH00SQJj2Zv4"
  }
};
