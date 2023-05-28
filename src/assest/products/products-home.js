import hw1 from '../images/home/hw1.webp'
import hw2 from '../images/home/hw2.webp'
import hw3 from '../images/home/hw3.webp'

import np1 from '../images/home/new_product1.jpg'
import np2 from '../images/home/new_product2.jpg'
import np3 from '../images/home/new_product3.jpg'

import pp1 from '../images/home/price_product1.webp'
import pp2 from '../images/home/price_product2.webp'
import pp3 from '../images/home/price_product3.webp'

import fp1 from '../images/home/family_product1.webp'
import fp2 from '../images/home/family_product2.webp'
import fp3 from '../images/home/family_product3.webp'

import dp1 from '../images/home/dissun_product1.webp'
import dp2 from '../images/home/dissun_product2.webp'
import dp3 from '../images/home/dissun_product3.webp'

import ca1 from '../images/home/canifalife1.webp';
import ca2 from '../images/home/canifalife2.webp';
import ca3 from '../images/home/canifalife3.webp';

const happyWeekend = [
    {
        id : 1,
        productImg: hw1,
        productName: "Áo phông nam in hình",
        productPrice: "249000",
        category: "hw",
        productColor: [
            "#046bc7", "#dfb6e3", "#FFDB11"
        ]
    },
    {
        id : 2,
        productImg: hw2,
        productName: "Áo phông nam kẻ",
        productPrice: "399000",
        category: "hw",
        productColor: [
            "#046bc7", "#2c2c56", "#8c5f2f"
        ]
    },
    {
        id : 3,
        productImg: hw3,
        productName: "Áo phông nam in Winnie th Pooh",
        productPrice: "279000",
        category: "hw",
        productColor: [
            "#b882d6", "#4682ba", "#8170a0"
        ]
    }
]
const newProduct = [
    {
        id : 1,
        productImg: np1,
        productName: "Áo phông unisex lớn có hình",
        productPrice: "279000",
        category: "home-np",
        productColor: [
            "#779dd6", "#496058", "#070507"
        ]
    },
    {
        id : 2,
        productImg: np2,
        productName: "Áo phông unisex lớn có hình",
        productPrice: "279000",
        category: "home-np",
        productColor: [
            "#e683ef", "#dd409c", "#21161a"
        ]
    },
    {
        id : 3,
        productImg: np3,
        productName: "Áo phông unisex lớn có hình",
        productPrice: "279000",
        category: "home-np",
        productColor: [
            "#24562a", "#62d6c2", "#0f8226"
        ]
    }
]
const priceProduct = [
    {
        id : 1,
        productImg: pp1,
        productName: "Áo polo bé giá in nhỏ",
        productPrice: "279000",
        category: "home-pp",
        productColor: [
            "#360f42", "#720337", "#c7ff3a"
        ]
    },
    {
        id : 2,
        productImg: pp2,
        productName: "Áo polo nữ",
        productPrice: "279000",
        category: "home-pp",
        productColor: [
            "#3b5141", "#4f79bc", "#efa913"
        ]
    },
    {
        id : 3,
        productImg: pp3,
        productName: "Áo polo bé trai",
        productPrice: "279000",
        category: "home-pp",
        productColor: [
            "#436348", "#5b2984", "#8c1e29"
        ]
    }
]
const familyProduct = [
    {
        id : 1,
        productImg: fp1,
        productName: "Áo phông nữ in Winnie the Pooth",
        productPrice: "279000",
        category: "home-fp",
        productColor: [
            "#ace082", "#9ebee5", "#a06b6f"
        ]
    },
    {
        id : 2,
        productImg: fp2,
        productName: "Áo phông nữ in Winnie the Pooth",
        productPrice: "169000",
        category: "home-fp",
        productColor: [
            "#046313", "#2fb7ae", "#95889b"
        ]
    },
    {
        id : 3,
        productImg: fp3,
        productName: "Áo phông unisex trẻ em",
        productPrice: "169000",
        category: "home-fp",
        productColor: [
            "#959ea0", "#37375b", "#f966c1"
        ]
    }
]
const dissunProduct  = [
    {
        id : 1,
        productImg: dp1,
        productName: "Áo khoác chống nắng nam",
        productPrice: "449000",
        category: "home-dsp",
        productColor: [
            "#350916", "#f430ba", "#070c06"
        ]
    },
    {
        id : 2,
        productImg: dp2,
        productName: "Áo khoác chống nắng nữ",
        productPrice: "449000",
        category: "home-dsp",
        productColor: [
            "#f966c1", "#6e773f", "#d7d9e8"
        ]
    },
    {
        id : 3,
        productImg: dp3,
        productName: "Áo khoác chống nắng nam",
        productPrice: "449000",
        category: "home-dsp",
        productColor: [
            "#d3bbb3", "#e3f2e1", "#ce5644"
        ]
    }
]

const messages = [
    {
        id: 1,
        img: ca1,
        mes: '[CẢNH BÁO] Chiểu trò lừa dảo, mạo danh CANIFA tuyển mẫu nhí, CTV và nhân sự',
        time: '18:52 29/01/2023'
    },
    {
        id: 2,
        img: ca2,
        mes: 'Chương trình Lì xì Tết năm 2023',
        time: '21:34 16/01/2023'
    },
    {
        id: 3,
        img: ca3,
        mes: 'Lịch giao hàng cho các đơn Online Tết Nguyên Đán 2023',
        time: '04:26 13/01/2023'
    }
]
export {happyWeekend, newProduct, priceProduct, familyProduct, dissunProduct, messages}