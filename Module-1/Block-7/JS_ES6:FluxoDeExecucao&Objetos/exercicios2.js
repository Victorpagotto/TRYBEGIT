const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: 
      [{
        name: 'marguerita',
        amount: 1,
        price: 25
      },
      {
        name: 'pepperoni',
        amount: 1,
        price: 20
      }],
    drinks: [
      {
        name: 'coke',
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1
      }
    ],
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  return `Olá ${order.name}, o total do seu pedido de ${order.order.pizza[0].name}, ${order.order.pizza[1].name} e ${order.order.drinks[0].type} é R$ ${order.payment.total}.`

}

console.log(orderModifier(order));