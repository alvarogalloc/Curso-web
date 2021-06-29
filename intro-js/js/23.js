// Switch Statement

const MetodosDePago = {
  EFECTIVO: 'efectivo',
  BITCOIN: 'bitcoin',
  TARJETA: 'tarjeta',
  PAYPAL: 'paypal',
};
Object.freeze(MetodosDePago);

const metodoPago = MetodosDePago.BITCOIN;

switch (metodoPago) {
  case MetodosDePago.EFECTIVO:
    console.log('Se pagara en efectivo');
    break;
  case MetodosDePago.BITCOIN:
    console.log('Se pagara con bitcoin');
    break;
  case MetodosDePago.PAYPAL:
    console.log('Se pagara con PayPal');
    break;
  default:
    console.log('Metodo de pago no definido');
    break;
}
