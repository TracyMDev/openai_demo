// app.config.js
import "dotenv/config";

export default ({ config }) => ({
  ...config,
  name: "openai-demo", // you can customize this
  slug: "openai-demo",
  extra: {
    // These will be accessible via Constants.expoConfig.extra
    openaiApiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
  },
});
