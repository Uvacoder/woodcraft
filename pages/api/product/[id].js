import { products } from "../../../productList";

export default async (req, res) => {
    const product = products.find(({ id }) => id === req.query.id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(400).json({ message: "product not found" });
    }
}