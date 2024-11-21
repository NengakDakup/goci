'use client';

import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>GOCI - Global Outreach for Christ International</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/fonts/font-awesome/4.7.0/css/font-awesome.min.css" />

        <link rel="stylesheet" href="/css/animate.css" />

        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />


        <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/css/jquery.timepicker.css" />

        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header />
        {children}
        {/* <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
            <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
          </svg>
        </div> */}

        <Script src="/js/jquery.min.js"></Script>
        <Script src="/js/jquery-migrate-3.0.1.min.js"></Script>
        <Script src="/js/popper.min.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        <Script src="/js/jquery.easing.1.3.js"></Script>
        <Script src="/js/jquery.waypoints.min.js"></Script>
        <Script src="/js/jquery.stellar.min.js"></Script>
        <Script src="/js/jquery.animateNumber.min.js"></Script>
        <Script src="/js/bootstrap-datepicker.js"></Script>
        <Script src="/js/jquery.timepicker.min.js"></Script>
        <Script src="/js/owl.carousel.min.js"></Script>
        <Script src="/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/scrollax.min.js"></Script>
        <Script src="/js/main.js"></Script>
      </body>
    </html>
  );
}
