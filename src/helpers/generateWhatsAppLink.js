/**
 * Generate a WhatsApp link with the preconfigured message for an order.
 *
 * @param {string} phone - Recipient's telephone number in international format.
 * @param {string} location - Location or link to the location of the order.
 * @param {string} status - Current order status.
 * @param {number} cost - Order cost.
 * @returns {string} - WhatsApp link with the message.
 */
export function generateWhatsAppLink(name, phone, location, status, cost) {
  const baseUrl = "https://wa.me/";
  const message = `Hola ${name} !!, \n La Ubicación del pedido es: ${location}. \n tiene el estado ${status}. \n Costo: $${cost}`;
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}${phone}?text=${encodedMessage}`;
}
