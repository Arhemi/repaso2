console.log('Conectado...')

const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque officiis a doloremque sed reiciendis nesciunt corrupti dolores suscipit porro dolore ut, cumque perspiciatis, minima, nobis illum facere exercitationem odit?'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img1.jpg',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque officiis a doloremque sed reiciendis nesciunt corrupti dolores suscipit porro dolore ut, cumque perspiciatis, minima, nobis illum facere exercitationem odit?'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img1.jpg',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque officiis a doloremque sed reiciendis nesciunt corrupti dolores suscipit porro dolore ut, cumque perspiciatis, minima, nobis illum facere exercitationem odit?'
    },
]

const nextBtn = document.querySelector('.nxt-btn')

let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')
let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')
let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')
//console.log('Boton', nextBtn)

let currentProduct = 0

nextBtn.addEventListener('click', () => {
   // alert('hola')
   if (currentProduct >= productData.length - 1 ) {
    currentProduct = 0 
   } else {
    currentProduct++
   }
   productIndex.innerHTML = productData[currentProduct].index 
   smProductDes.innerHTML = productData[currentProduct].des.slice(0, 20)
   smImgContainer.classList.add('slide')
   productImgContainer.classList.add('slide')
   backdropImg.classList.add('fade')
   productDetail.classList.add('fade')
})





