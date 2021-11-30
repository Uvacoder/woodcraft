import { products } from "../../../productList";

export default async (req, res) => {
    const product = products.find(({ id }) => id === req.query.id);

    if (product) {
        res.status(200).json(product);
    } else if (res.status !== 200) {
        res.status(400).json({ message: "product not found" });
    } else if (res.status === 401) {
        throw new Error(res.status)
    }
}