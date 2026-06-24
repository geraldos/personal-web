import type { LanguageCode } from "./homeContent";

export function getLocalizedGreeting(language: LanguageCode, date: Date): string | null {
  const hour = date.getHours();

  if (language === "ja") {
    const greeting = hour < 5 || hour >= 18 ? "こんばんは" : hour < 11 ? "おはようございます" : "こんにちは";
    return `${greeting}、ジェラルドです。`;
  }

  if (language === "zh") {
    const greeting = hour < 5 ? "凌晨好" : hour < 11 ? "早上好" : hour < 18 ? "你好" : "晚上好";
    return `${greeting}，我是杰拉尔多。`;
  }

  return null;
}
