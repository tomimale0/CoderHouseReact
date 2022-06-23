import Image from './Image'
const productosDB = [
    {
        id: 1,
        nombre: 'Iphone 11 Pro Max',
        precio: 1300.,
        desc: '10% OFF',
        condicion: 'Contado',
        precio2: 1170.,
        stock: 10,
        imagen: Image['Iphone11pro'],
        descripcion: '64GB-128GB SpaceGrey-Silve-Gold',
        category: '13-12-11'
      },
    {
        id: 2,
        nombre: 'Iphone 12',
        precio: 1000.,
        desc: '10% OFF',
        condicion: 'Contado',
        precio2: 900.,
        stock: 10,
        imagen: Image['Iphone12'],
        descripcion: '64GB-128GB-512GB SpaceGrey-Silve-Gold',
        category:'13-12-11'
      },
    {
        id: 3,
        nombre: 'Iphone XR',
        precio: 500,
        desc: '10% OFF',
        condicion: 'Contado',
        precio2: 450.,
        stock: 7,
        imagen: Image['Iphonexr'],
        descripcion: '64GB-128GB Black-White-Red',
        category:'XR-X'
      },
    {
        id: 4,
        nombre: 'Iphone X',
        precio: 600,
        desc: '10% OFF',
        condicion: 'Contado',
        precio2: 540.,
        stock: 4,
        imagen: Image['Iphonex'],
        descripcion: '64GB-128GB SpaceGrey-Silver',
        category:'XR-X'
      },
    {
        id: 5,
        nombre: 'Iphone SE',
        precio: 650.,
        desc: '20% OFF',
        condicion: 'Contado',
        precio2: 520.,
        stock: 8,
        imagen: Image['Iphonese'],
        descripcion: '64GB-128GB Black-White-Red',
        category:'SE-8'
      },
    {
        id: 6,
        nombre: 'Iphone 8 Plus',
        precio: 500,
        desc: '10% OFF',
        condicion: 'Contado',
        precio2: 450.,
        stock: 7,
        imagen: Image['Iphone8plus'],
        descripcion: '64GB-128GB Black-White-Red-Rose',
        category:'SE-8'
      },


    {
        id: 7,
        nombre: 'Iphone 8',
        precio: 450,
        desc: '10% OFF',
        condicion: 'Contado',
        precio2: 405.,
        stock: 7,
        imagen: Image['Iphone8'],
        descripcion: '64GB-128GB Black-White-Red',
        category:'SE-8'
      },
]

export const traerProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productosDB)
        }, 2000)
    })
}

export const traerProductoPorId = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productosDB.find(producto => producto.id === id))
        }, 500)
    })
}

export const traerProductosPorCategory = (category) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productosDB.filter(producto => producto.category === category))
        }, 500)
    })
}