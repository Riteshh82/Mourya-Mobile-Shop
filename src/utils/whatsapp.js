import { shopInfo } from "../config/shopConfig";

/**
 * Builds a wa.me link with a pre-filled message.
 * @param {string} message - the message to pre-fill in WhatsApp
 * @returns {string} full wa.me URL
 */
export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${shopInfo.whatsapp}?text=${text}`;
}

export function productEnquiryMessage(productName) {
  return `Hi, I want to know the price and availability of ${productName}.`;
}
