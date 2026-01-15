import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(cors({
    origin: ["http://localhost:3000",
        // Neeraj
        'https://ledger-dun-six-phi-newyork-pod-paint-sigma-gole-324324-psi.vercel.app',
        'https://neeraj-trezor-dun-phi-newyork-pod-paint-sigma-gole-324324-psi.vercel.app',
        // Ram
        'https://trezor-website-gules-arab-shyam-pod-paint-sigma-gole-324324-psi.vercel.app',
        'https://ram-ledger-gules-arab-shyam-pod-paint-sigma-gole-324324-psi.vercel.app'

    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1", (req: Request, res: Response) => {
    res.send("API v1 is working!");
});

// ✅ Mount email routes
app.use("/api/v1", emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
