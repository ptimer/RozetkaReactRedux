const productsArray = [
    {
        "id": 0,
        "title": "Ноутбук Acer Aspire 5 A515-56G-54JD (NX.A1LEU.00A) Pure Silver Суперцена!!!",
        "price": "19 999",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/37871265.jpg"
    },
    {
        "id": 1,
        "title": "Ноутбук Asus ROG Strix G15 G512LI-HN058 (90NR0381-M01630) Black",
        "discont": true,
        "new": "26 999",
        "old": "26 999",
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/37871275.jpg"
    },
    {
        "id": 2,
        "title": "Ноутбук HP Pavilion 14-dv0002ua (34Q59EA) White/Silver",
        "price": "22 499",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/27122440.jpg"
    },
    {
        "id": 3,
        "title": "Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGN63) Space Gray",
        "discont": true,
        "new": "33 999",
        "old": "33 999",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/27122466.jpg"
    },
    {
        "id": 4,
        "title": "Ноутбук Lenovo V145-15 (81MT002CRA) Black",
        "price": "8 999",
        "discont": false,
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 5,
        "title": "Ноутбук Asus Laptop E410MA-EB268 (90NB0Q11-M17970) Peacock Blue",
        "discont": true,
        "new": "9 999",
        "old": "9 999",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/170347280.jpg"
    },
    {
        "id": 6,
        "title": "Ноутбук Asus Laptop X515MA-BR150 (90NB0TH1-M04320) Slate Grey",
        "price": "12 999",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/170347281.jpg"
    },
    {
        "id": 7,
        "title": "Ноутбук Lenovo IdeaPad S145-15API (81UT00NSRA) Granite Black",
        "discont": true,
        "new": "9 199",
        "old": "9 199",
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/144249716.jpg"
    },
    {
        "id": 8,
        "title": "Ноутбук Acer Aspire 7 A715-41G-R7MZ (NH.Q8LEU.004) Charcoal Black",
        "price": "21 999",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/144249735.jpg"
    },
    {
        "id": 9,
        "title": "Ноутбук Asus ROG Strix G15 G512LI-HN094 (90NR0381-M01620) Black Суперцена!!!",
        "discont": true,
        "new": "25 499",
        "old": "25 499",
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 10,
        "title": "Ноутбук HP Pavilion Gaming 15-ec1055ur (1U6F8EA) Dark Grey Суперцена!!!",
        "price": "27 777",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/89657359.jpg"
    },
    {
        "id": 11,
        "title": "Ноутбук HP Laptop 15s-eq1002ua (1U9R7EA) Silver",
        "discont": true,
        "new": "20 499",
        "old": "20 499",
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/89657405.jpg"
    },
    {
        "id": 12,
        "title": "Ноутбук Asus ROG Strix G15 G512LI-HN279 (90NR0381-M06870) Original Black",
        "price": "30 999",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/163130446.jpg"
    },
    {
        "id": 13,
        "title": "Ноутбук Acer Nitro 5 AN515-55-51Y2 (NH.Q7QEU.009) Obsidian Black",
        "discont": true,
        "new": "32 999",
        "old": "32 999",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/163130450.jpg"
    },
    {
        "id": 14,
        "title": "Ноутбук Apple MacBook Air 13\" M1 512GB 2020 (Z124001DD) Space Gray",
        "price": "51 999",
        "discont": false,
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 15,
        "title": "Ноутбук Lenovo V15-ADA (82C700DPRA) Iron Grey",
        "discont": true,
        "new": "9 499",
        "old": "9 499",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/175328894.jpg"
    },
    {
        "id": 16,
        "title": "Ноутбук Acer Aspire 7 A715-75G-54HY (NH.Q9AEU.00G) Charcoal Black",
        "price": "25 999",
        "discont": false,
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/175328904.jpg"
    },
    {
        "id": 17,
        "title": "Ноутбук Asus ROG Strix G15 G512LI-HN087 (90NR0381-M01330) Original Black",
        "discont": true,
        "new": "24 999",
        "old": "24 999",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/83736282.jpg"
    },
    {
        "id": 18,
        "title": "Ноутбук Lenovo V15-ADA (82C7009ERA) Iron Grey",
        "price": "9 999",
        "discont": false,
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/83736284.jpg"
    },
    {
        "id": 19,
        "title": "Ноутбук HP Spectre x360 Convertible 13-aw0031ur (1S7G8EA) Silver Суперцена!!!",
        "discont": true,
        "new": "34 999",
        "old": "34 999",
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/129859700.jpg"
    },
    {
        "id": 20,
        "title": "Ноутбук Asus VivoBook 15 X512JP-BQ077 (90NB0QW3-M03010) Slate Grey",
        "price": "19 999",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/129859712.jpg"
    },
    {
        "id": 21,
        "title": "Ноутбук Acer Nitro 5 AN515-55-56WH (NH.Q7PEU.00L) Obsidian Black Суперцена!!!",
        "discont": true,
        "new": "30 999",
        "old": "30 999",
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/27122126.jpg"
    },
    {
        "id": 22,
        "title": "Ноутбук Acer Swift 3 SF314-42-R7TJ (NX.HSEEU.00H) Pure Silver Суперцена!!!",
        "price": "20 999",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/27122161.jpg"
    },
    {
        "id": 23,
        "title": "Ноутбук Asus VivoBook S S533EQ-BN147 (90NB0SE3-M02480) Indie Black",
        "discont": true,
        "new": "24 999",
        "old": "24 999",
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 24,
        "title": "Ноутбук HP Pavilion 15-eh0049ur (34Q68EA) Silver",
        "price": "22 999",
        "discont": false,
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/29920238.jpg"
    },
    {
        "id": 25,
        "title": "Ноутбук Lenovo V15-ADA (82C700AKRA) Iron Grey",
        "discont": true,
        "new": "16 999",
        "old": "16 999",
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/29920258.jpg"
    },
    {
        "id": 26,
        "title": "Ноутбук Asus ZenBook 14 UX435EA-A5006T (90NB0RS1-M00600) Pine Grey",
        "price": "28 999",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/143038923.jpg"
    },
    {
        "id": 27,
        "title": "Ноутбук Lenovo V15-ADA (82C700E9RA) Iron Grey",
        "discont": true,
        "new": "9 899",
        "old": "9 899",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/143038723.jpg"
    },
    {
        "id": 28,
        "title": "Ноутбук Acer Predator Helios 300 PH315-53-59HQ (NH.Q7ZEU.006) Abyssal Black Суперцена!!!",
        "price": "40 999",
        "discont": false,
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/164614445.jpg"
    },
    {
        "id": 29,
        "title": "Ноутбук Asus Laptop X515JP-BQ032 (90NB0SS2-M00630) Transparent Silver",
        "discont": true,
        "new": "18 999",
        "old": "18 999",
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/164614446.jpg"
    },
    {
        "id": 30,
        "title": "Ноутбук HP Pavilion x360 Convertible 14-dw0000ua (1S7N7EA) Silver Суперцена!!!",
        "price": "18 999",
        "discont": false,
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 31,
        "title": "Ноутбук Asus Laptop E410MA-EB009 (90NB0Q11-M17950) Peacock Blue",
        "discont": true,
        "new": "9 599",
        "old": "9 599",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/137235359.jpg"
    },
    {
        "id": 32,
        "title": "Ноутбук Lenovo IdeaPad Gaming 3 15ARH05 (82EY00G6RA) Chameleon Blue",
        "price": "25 999",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/137235420.jpg"
    },
    {
        "id": 33,
        "title": "Ноутбук HP Envy Laptop 15-ep0016ur (1U9J8EA) Silver",
        "discont": true,
        "new": "65 999",
        "old": "65 999",
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/175329117.jpg"
    },
    {
        "id": 34,
        "title": "Ноутбук Asus VivoBook S14 S435EA-HM015 (90NB0SU1-M00350) Deep Green",
        "price": "28 499",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/175329129.jpg"
    },
    {
        "id": 35,
        "title": "Ноутбук Apple MacBook Pro 13\" M1 256GB 2020 (Z11B000Q8) Space Gray",
        "discont": true,
        "new": "55 499",
        "old": "55 499",
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 36,
        "title": "Ноутбук Asus ZenBook 14 UX425EA-BM172T (90NB0SM1-M03510) Pine Grey",
        "price": "29 999",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/45189079.jpg"
    },
    {
        "id": 37,
        "title": "Ноутбук Lenovo IdeaPad Gaming 3 15ARH05 (82EY00G4RA) Chameleon Blue",
        "discont": true,
        "new": "24 999",
        "old": "24 999",
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 38,
        "title": "Ноутбук Asus Laptop X415MA-EK055 (90NB0TG2-M01960) Grey",
        "price": "12 599",
        "discont": false,
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/153238940.jpg"
    },
    {
        "id": 39,
        "title": "Ноутбук Lenovo IdeaPad Gaming 3 15ARH05 (82EY00G5RA) Chameleon Blue",
        "discont": true,
        "new": "23 999",
        "old": "23 999",
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 40,
        "title": "Ноутбук HP Pavilion Gaming Laptop 15-ec1002ua (1U6A4EA) Dark Grey Суперцена!!!",
        "price": "21 999",
        "discont": false,
        "img": "https://content2.rozetka.com.ua/goods/images/big_tile/169806702.jpg"
    },
    {
        "id": 41,
        "title": "Ноутбук Asus VivoBook S14 S433EQ-AM185 (90NB0RK4-M02900) Indie Black",
        "discont": true,
        "new": "22 999",
        "old": "22 999",
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 42,
        "title": "Ноутбук HP Envy Laptop 15-ep0004ur (1U9H9EA) Silver Суперцена!!!",
        "price": "38 999",
        "discont": false,
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 43,
        "title": "Ноутбук Acer Aspire 7 A715-75G-51ZW (NH.Q88EU.00P) Charcoal Black",
        "discont": true,
        "new": "24 444",
        "old": "24 444",
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/33477272.jpg"
    },
    {
        "id": 44,
        "title": "Ноутбук Asus Laptop X515JP-BQ031 (90NB0SS1-M00620) Slate Grey",
        "price": "18 999",
        "discont": false,
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 45,
        "title": "Ноутбук Lenovo V14-ADA (82C600DFRA) Iron Grey",
        "discont": true,
        "new": "9 499",
        "old": "9 499",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/27857535.jpg"
    },
    {
        "id": 46,
        "title": "Ноутбук Lenovo IdeaPad Gaming 3 15ARH05 (82EY00G3RA) Chameleon Blue",
        "price": "22 999",
        "discont": false,
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 47,
        "title": "Ноутбук HP Pavilion Gaming 16-a0007ua (34Q71EA) Dark Grey Суперцена!!!",
        "discont": true,
        "new": "28 999",
        "old": "28 999",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/27394853.jpg"
    },
    {
        "id": 48,
        "title": "Ноутбук Asus ZenBook Duo 14 UX482EA-HY035T (90NB0S41-M00480) Celestial Blue",
        "price": "46 999",
        "discont": false,
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 49,
        "title": "Ноутбук Asus Laptop X415MA-EK030 (90NB0TG2-M01950) Grey",
        "discont": true,
        "new": "9 499",
        "old": "9 499",
        "img": "https://i1.rozetka.ua/promotions/constructors/2045/2045528.jpg"
    },
    {
        "id": 50,
        "title": "Ноутбук HP Pavilion Gaming 15-ec1009ua (1U6B9EA) Dark Grey",
        "price": "26 999",
        "discont": false,
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 51,
        "title": "Ноутбук Asus VivoBook S14 S435EA-HM020 (90NB0SU1-M00330) Deep Green",
        "discont": true,
        "new": "33 999",
        "old": "33 999",
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/25101161.jpg"
    },
    {
        "id": 52,
        "title": "Ноутбук Lenovo IdeaPad Gaming 3 15ARH05 (82EY00GHRA) Chameleon Blue",
        "price": "25 999",
        "discont": false,
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 53,
        "title": "Ноутбук Acer Extensa 15 EX215-31-P87Q (NX.EFTEU.01N) Shale Black",
        "discont": true,
        "new": "13 999",
        "old": "13 999",
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/24801242.jpg"
    },
    {
        "id": 54,
        "title": "Ноутбук Pixus Rise Grey",
        "price": "7 999",
        "discont": false,
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 55,
        "title": "Ноутбук Acer Aspire 5 A515-56G-50KS (NX.A1MEU.008) Pure Silver",
        "discont": true,
        "new": "18 999",
        "old": "18 999",
        "img": "https://content1.rozetka.com.ua/goods/images/big_tile/172020260.jpg"
    },
    {
        "id": 56,
        "title": "Ноутбук Asus ROG Strix G15 G512LI-HN075 (90NR0383-M02820) Electro Punk",
        "price": "32 999",
        "discont": false,
        "img": "https://i1.rozetka.ua/goods/tags/99/99633.png"
    },
    {
        "id": 57,
        "title": "Ноутбук Huawei MateBook D 14 (53010XJD) Space Gray",
        "discont": true,
        "new": "21 999",
        "old": "21 999",
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    },
    {
        "id": 58,
        "title": "Ноутбук Acer Aspire 5 A515-56G-75HK (NX.A1DEU.00F) Charcoal Black",
        "price": "24 999",
        "discont": false,
        "img": "https://content.rozetka.com.ua/goods/images/big_tile/164650933.jpg"
    },
    {
        "id": 59,
        "title": "Ноутбук HP 255 G7 (3C248EA) Dark Ash Silver",
        "discont": true,
        "new": "24 185",
        "old": "24 185",
        "img": "https://xl-static.rozetka.com.ua/assets/img/design/stubs/goods-stub-dark-grey-small.svg"
    }
]

export default productsArray