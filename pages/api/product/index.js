import { products } from "../../../productList"

export default async (req, res) => {
    res.status(200).json(products)
}