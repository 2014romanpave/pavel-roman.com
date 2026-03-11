export const BOT_TOKEN = "8722545714:AAHfsYgr1_5b6CynwV5cripErkvYOGb7GJ4";
export const CHAT_ID = "222550638";

export async function sendTelegramMessage(text: string, file?: File) {
  if (file && file.size > 0) {
    const formData = new FormData();
    formData.append("chat_id", CHAT_ID);
    formData.append("caption", text);
    formData.append("document", file);

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
      method: 'POST',
      body: formData,
    });
    return response.ok;
  } else {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: text }),
    });
    return response.ok;
  }
}
