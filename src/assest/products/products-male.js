import dc1 from '../images/male/discount1.webp'
import dc2 from '../images/male/discount2.webp'
import dc3 from '../images/male/discount3.webp'

import tshirt1 from '../images/male/ao-phong1.webp'
import tshirt2 from '../images/male/ao-phong2.webp'
import tshirt3 from '../images/male/ao-phong3.webp'

import quan1 from '../images/male/quan-shorts1.webp'
import quan2 from '../images/male/quan-shorts2.webp'
import quan3 from '../images/male/quan-shorts3.webp'


const discountProducts = [
    {
        id : 1,
        productImg: dc1,
        productName: "Quần jeans nam slimfit cotton USA",
        productPrice: "349.000 đ",
        productDiscount: "699.000 đ",
        productColor: "#046bc7"
    },
    {
        id : 2,
        productImg: dc2,
        productName: "Áo phông nam cotton USA in hình",
        productPrice: "124.000 đ",
        productDiscount: "249.000 đ",
        productColor: "#a98a79"
    },
    {
        id : 3,
        productImg: dc3,
        productName: "Áo phông nam cotton in hình",
        productPrice: "149.000 đ",
        productDiscount: "299.000 đ",
        productColor: "#a8b6e3"
    }
]
const tshirtProducts = [
    {
        id : 1,
        productImg: tshirt1,
        productName: "Áo phông nam có hình in",
        productPrice: "169.000 đ",
        productColor: "#046bc7"
    },
    {
        id : 2,
        productImg: tshirt2,
        productName: "Áo phông nam có hình in nhỏ",
        productPrice: "169.000 đ",
        productColor: "#a98a79"
    },
    {
        id : 3,
        productImg: tshirt3,
        productName: "Áo phông nam",
        productPrice: "169.000 đ",
        productColor: "#a8b6e3"
    }
]

const trouserProdcuts = [
    {
        id : 1,
        productImg: quan1,
        productName: "Quần soóc nam",
        productPrice: "249.000 đ",
        productColor: "#046bc7"
    },
    {
        id : 2,
        productImg: quan2,
        productName: "Quần soóc active nam",
        productPrice: "199.000 đ",
        productColor: "#a98a79"
    },
    {
        id : 3,
        productImg: quan3,
        productName: "Quần soóc nỉ nam",
        productPrice: "249.000 đ",
        productColor: "#a8b6e3"
    }
]

export {discountProducts, tshirtProducts, trouserProdcuts}