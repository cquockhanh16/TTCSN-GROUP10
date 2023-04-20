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
        productPrice: "99.000 đ",
        productDiscount: "299.000 đ",
        productColor: "#046bc7"
    },
    {
        id : 2,
        productImg: dp2,
        productName: "Áo phông nữ xoắn xéo",
        productPrice: "199.000 đ",
        productDiscount: "399.000 đ",
        productColor: "#a98a79"
    },
    {
        id : 3,
        productImg: dp3,
        productName: "Áo phông nữ thắt dây",
        productPrice: "124.000 đ",
        productDiscount: "249.000 đ",
        productColor: "#a8b6e3"
    }
]
const tshirtProducts = [
    {
        id : 1,
        productImg: tp1,
        productName: "Áo phông nữ in nhỏ",
        productPrice: "159.000 đ",
        productColor: "#046bc7"
    },
    {
        id : 2,
        productImg: tp2,
        productName: "Áo phông nữ",
        productPrice: "169.000 đ",
        productColor: "#a98a79"
    },
    {
        id : 3,
        productImg: tp3,
        productName: "Áo phông nữ",
        productPrice: "169.000 đ",
        productColor: "#a8b6e3"
    }
]

const dissunProducts = [
    {
        id : 1,
        productImg: dsp1,
        productName: "Áo phông nam in hình",
        productPrice: "449.000 đ",
        productColor: "#046bc7"
    },
    {
        id : 2,
        productImg: dsp2,
        productName: "Áo phông nam kẻ",
        productPrice: "499.000 đ",
        productColor: "#a98a79"
    },
    {
        id : 3,
        productImg: dsp3,
        productName: "Áo phông nam in Winnie th Pooh",
        productPrice: "479.000 đ",
        productColor: "#a8b6e3"
    }
]

export {discountProducts, tshirtProducts, dissunProducts}