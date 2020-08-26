"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("./product");
function getProducts() {
    let p = new product_1.Products();
    p.Id = "sde123";
    p.Title = "The hating game";
    p.price = 200;
    return p;
}
const app = express_1.default();
const port = 3000;
let bookinfo = getProducts();
console.log(bookinfo);
app.get('/products', (req, res) => {
    res.send(bookinfo);
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log("server is running on Port " + port);
});
//# sourceMappingURL=app.js.map