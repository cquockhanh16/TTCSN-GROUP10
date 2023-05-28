import dp1 from '../images/female/product-discount1.webp'
import dp2 from '../images/female/product-discount2.webp'
import dp3 from '../images/female/product-discount3.webp'

import tp1 from '../images/female/ao-phong1.webp'
import tp2 from '../images/female/ao-phong2.webp'
import tp3 from '../images/female/ao-phong3.webp'

import dsp1 from '../images/female/dissun-product1.webp'
import dsp2 from '../images/female/dissun-product2.webp'
import dsp3 from '../images/female/dissun-product3.webp'


const discountProducts = [
    {
        id : 1,
        productImg: dp1,
        productName: "Quần legging nữ",
        productPrice: "99000",
        productPricez: "299000",
        category: "fm-dc",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 2,
        productImg: dp2,
        productName: "Áo phông nữ xoắn xéo",
        productPrice: "199000",
        productPricez: "399000",
        category: "fm-dc",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 3,
        productImg: dp3,
        productName: "Áo phông nữ thắt dây",
        productPrice: "124000",
        productPricez: "249000",
        category: "fm-dc",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]
const tshirtProducts = [
    {
        id : 1,
        productImg: tp1,
        productName: "Áo phông nữ in nhỏ",
        productPrice: "159000",
        category: "fm-tp",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 2,
        productImg: tp2,
        productName: "Áo phông nữ",
        productPrice: "169000",
        category: "fm-tp",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 3,
        productImg: tp3,
        productName: "Áo phông nữ",
        productPrice: "169000",
        category: "fm-tp",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]

const dissunProducts = [
    {
        id : 1,
        productImg: dsp1,
        productName: "Áo phông nam in hình",
        productPrice: "449000",
        category: "fm-dc",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 2,
        productImg: dsp2,
        productName: "Áo phông nam kẻ",
        productPrice: "499000",
        category: "fm-dc",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    },
    {
        id : 3,
        productImg: dsp3,
        productName: "Áo phông nam in Winnie th Pooh",
        productPrice: "479000",
        category: "fm-dc",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]

export {discountProducts, tshirtProducts, dissunProducts}