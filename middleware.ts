import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const nextInterMiddleware = createMiddleware({
  locales: ["en", "fr"],

  defaultLocale: "en",
});

export default function (req: NextRequest): NextResponse {
  return nextInterMiddleware(req);
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
