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
        productPrice: "349000",
        category: "male-dp",
        productPricez: "699000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 2,
        productImg: dc2,
        productName: "Áo phông nam cotton USA in hình",
        productPrice: "124000",
        category: "male-dp",
        productPricez: "249000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 3,
        productImg: dc3,
        productName: "Áo phông nam cotton in hình",
        productPrice: "149000",
        category: "male-dp",
        productPricez: "299000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]
const tshirtProducts = [
    {
        id : 1,
        productImg: tshirt1,
        productName: "Áo phông nam có hình in",
        category: "male-tp",
        productPrice: "169000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 2,
        productImg: tshirt2,
        productName: "Áo phông nam có hình in nhỏ",
        category: "male-tp",
        productPrice: "169000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 3,
        productImg: tshirt3,
        productName: "Áo phông nam",
        category: "male-tp",
        productPrice: "169000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]

const trouserProdcuts = [
    {
        id : 1,
        productImg: quan1,
        productName: "Quần soóc nam",
        category: "male-trs",
        productPrice: "249000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 2,
        productImg: quan2,
        productName: "Quần soóc active nam",
        category: "male-trs",
        productPrice: "199000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 3,
        productImg: quan3,
        productName: "Quần soóc nỉ nam",
        category: "male-trs",
        productPrice: "249000",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]

export {discountProducts, tshirtProducts, trouserProdcuts}