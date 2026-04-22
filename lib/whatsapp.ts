export async function sendWhatsApp(phone: string, message: string) {
  await fetch(`https://api.z-api.io/instances/SEU_ID/token/SEU_TOKEN/send-text`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      message,
    }),
  });
}