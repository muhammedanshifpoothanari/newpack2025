// WhatsApp utility functions for creating formatted messages

export const WHATSAPP_NUMBER = "966565273087" // +966 56 527 3087

export interface WhatsAppOrderDetails {
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  total: number
  customerName?: string
  phone?: string
  address?: string
}

export function createOrderMessage(details: WhatsAppOrderDetails): string {
  let message = "🛍️ *NEW ORDER FROM NEWPACK WEBSITE*\n\n"

  message += "📦 *Order Details:*\n"
  details.items.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`
    message += `   Qty: ${item.quantity} × ${item.price.toFixed(2)} ر.س = ${(item.quantity * item.price).toFixed(2)} ر.س\n`
  })

  message += `\n💰 *Total: ${details.total.toFixed(2)} ر.س*\n`

  if (details.customerName || details.phone || details.address) {
    message += "\n👤 *Customer Information:*\n"
    if (details.customerName) message += `Name: ${details.customerName}\n`
    if (details.phone) message += `Phone: ${details.phone}\n`
    if (details.address) message += `Address: ${details.address}\n`
  }

  message += "\n_Customer is ready to discuss payment and delivery details_"

  return encodeURIComponent(message)
}

export function createProductInquiry(productName: string, productId: string, quantity = 1): string {
  const message = `Hi! 👋

I'm interested in ordering from your website:

📦 *${productName}*
🔢 Quantity: *${quantity} unit${quantity > 1 ? "s" : ""}*

Could you please help me with:
✓ Best pricing for this quantity
✓ Current availability
✓ Delivery timeframe

Looking forward to your response!`
  return encodeURIComponent(message)
}

export function createSampleKitRequest(): string {
  const message = `Hi! I'd like to request a *Sample Kit* to see your packaging products.\n\nPlease let me know what's available!`
  return encodeURIComponent(message)
}

export function createConsultationRequest(): string {
  const message = `Hi! I'd like to schedule a *consultation* to discuss custom packaging solutions for my business.\n\nWhen would be a good time to talk?`
  return encodeURIComponent(message)
}

export function createGeneralInquiry(subject?: string): string {
  const message = subject
    ? `Hi! I have a question about: ${subject}\n\nCan you help me?`
    : `Hi! I'd like to discuss packaging solutions with your team.`
  return encodeURIComponent(message)
}

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  window.open(url, "_blank")
}
