const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://darwin-marketplace.now.sh"
    : "http://localhost:3000";

export default baseUrl;
