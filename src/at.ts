// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// // import { cookiesEnum } from './utils/constants'
// // import { isTokenExpired } from './utils/isTokenExpired'

// export function middleware(request: NextRequest) {
//   // const userCookie = request.cookies.get(cookiesEnum.userCookie)
//   // const hasUserCookie = !!userCookie
//   // const token = userCookie?.value
//   // const hasTokenExpired = isTokenExpired(token)

//   if (request.nextUrl.pathname === '/') {
//     return NextResponse.redirect(new URL('/home', request.url))
//   }

//   // if (
//   //   request.nextUrl.pathname.startsWith('/admin') &&
//   //   !hasUserCookie &&
//   //   hasTokenExpired
//   // ) {
//   //   return NextResponse.redirect(new URL('/login', request.url))
//   // }

//   // if (
//   //   ['/admin', '/login'].includes(request.nextUrl.pathname) &&
//   //   hasUserCookie
//   // ) {
//   //   return NextResponse.redirect(new URL('/admin/home', request.url))
//   // }

//   return NextResponse.next()
// }

// // export const config = {
// //   matcher: [
// //     /*
// //      * Match all request paths except for the ones starting with:
// //      * - api (API routes)
// //      * - _next/static (static files)
// //      * - _next/image (image optimization files)
// //      * - favicon.ico (favicon file)
// //      */
// //     '/((?!api|_next/static|_next/image|favicon.ico).*)',
// //   ],
// // }
