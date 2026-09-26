// Greeting Service abstraction
// Validates guest blessings and formats a direct WhatsApp link or server dispatch

import { weddingData } from '../data/weddingData';

export async function sendBlessing({ name, message, isWhatsApp = true }) {
  if (!name || name.trim() === '') {
    throw new Error("Please enter your name.");
  }
  if (!message || message.trim() === '') {
    throw new Error("Please enter a warm blessing or message.");
  }

  // Simulate network latency for luxury UX loading state
  await new Promise((resolve) => setTimeout(resolve, 800));

  const cleanName = name.trim();
  const cleanMessage = message.trim();
  const rawPhone = weddingData.greetings.whatsappNumber || "919999999999";

  if (isWhatsApp) {
    const formattedText = `*Wedding Blessing for ${weddingData.couple.brideName} & ${weddingData.couple.groomName}*\n\n*From:* ${cleanName}\n*Message:* ${cleanMessage}\n\n_Sent via digital wedding invitation_`;
    const encodedText = encodeURIComponent(formattedText);
    const waUrl = `https://wa.me/${rawPhone}?text=${encodedText}`;

    return {
      success: true,
      message: "Thank you for your beautiful blessing!",
      whatsappUrl: waUrl
    };
  }

  return {
    success: true,
    message: "Thank you for your beautiful blessing!"
  };
}
