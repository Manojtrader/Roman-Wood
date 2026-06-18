import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { contents } = req.body;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction: "You are the Roman Wood Work Design Assistant, a knowledgeable and friendly virtual concierge for a luxury woodwork and interior design company based in Ludhiana, Punjab. Provide helpful advice, answer questions about our services (wardrobes, kitchen design, interior architecture, panelling), and maintain a professional, helpful tone.",
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process chat message." });
    }
  });

  // Analyze endpoint (for editing/enhancing content)
  app.post("/api/analyze", async (req, res) => {
    try {
      const { prompt, text } = req.body;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview", // Using pro for complex editing/analysis
        contents: `Task: ${prompt}\n\nContent:\n${text}`,
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Analyze error:", error);
      res.status(500).json({ error: "Failed to analyze content." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
