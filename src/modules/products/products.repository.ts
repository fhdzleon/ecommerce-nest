import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [
    {
      id: 1,
      name: 'Laptop Gamer X',
      description:
        'Laptop potente con procesador i7 y tarjeta gráfica RTX 3060.',
      price: 1899.99,
      stock: true,
      imgUrl: 'https://example.com/images/laptop-gamer-x.jpg',
    },
    {
      id: 2,
      name: 'Smartphone Pro Max',
      description: 'Pantalla OLED de 6.7 pulgadas, cámara triple de 108MP.',
      price: 1199.99,
      stock: false,
      imgUrl: 'https://example.com/images/smartphone-pro-max.jpg',
    },
    {
      id: 3,
      name: 'Auriculares Inalámbricos ZX',
      description: 'Cancelación de ruido y batería de hasta 40 horas.',
      price: 199.99,
      stock: true,
      imgUrl: 'https://example.com/images/auriculares-zx.jpg',
    },
  ];

  getProducts() {
    return this.products;
  }
}
