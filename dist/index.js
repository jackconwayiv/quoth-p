"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/api/quotes", (_, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield prisma.quote.findMany({});
        res.send(allUsers);
        yield prisma.$disconnect();
    }
    catch (e) {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }
}));
app.post("/api/quotes/new", (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const newQuoteRequest = req.body;
        console.log(newQuoteRequest);
        const newQuoteResponse = yield prisma.quote.create({
            data: newQuoteRequest,
        });
        res.send(newQuoteResponse);
        yield prisma.$disconnect();
    }
    catch (e) {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }
}));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Quoth API hath begun listening on port 3000...");
});
