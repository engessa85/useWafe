import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "ar"];
let defaultLocale = "ar";

function getLocale(request: NextRequest) {
    // Simple logic to check accept-language header or return default
    const acceptLanguage = request.headers.get("accept-language");
    if (acceptLanguage?.includes("en")) return "en";
    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next) and static assets
        "/((?!api|_next/static|_next/image|favicon.ico|logo.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
