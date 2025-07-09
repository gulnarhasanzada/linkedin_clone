import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { configDotenv } from "dotenv";


const app =  express();
const PORT = process.env.PORT || 8080;

app.use("/auth", createProxyMiddleware({
    target: "http://auth-service:3000",
    changeOrigin: true,
    pathRewrite: { "^/auth": "" }
}));

app.get("/health", (_, res) => {
  res.send("API Gateway is running");
});

app.listen(PORT, ()=>{
    console.log(`API Gateway running on port ${PORT}`);
})
