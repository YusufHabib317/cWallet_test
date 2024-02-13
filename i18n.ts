// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// const locales = ["en", "fr"];

// export default getRequestConfig(async ({ locale }) => {
//   const baseLocal = new Intl.Locale(locale).baseName;
//   // if (!locales.includes(locale as any)) notFound();
//   if (!locales.includes(baseLocal)) notFound();

//   return {
//     messages: (await import(`@/messages/${baseLocal}.json`)).default,
//   };
// });

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
type Locale = "en" | "fr";
export const locales: Locale[] = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
