import { AnimatedContainerBase } from "@/common/AnimatedContainerBase";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
// import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AthenaPro",
  description: "Athena Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Disable Pinch Zoom on Mobile Web */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="HandheldFriendly" content="true" />
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background:
            "linear-gradient(183deg, rgb(27 80 133 / 5%) 0%, rgb(135 206 232 / 5%) 100%)",
        }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58NX6JGH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-58NX6JGH');
            `,
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D65P85JJLW');
            `,
          }}
        />

        {/* End Google Tag Manager */}

        <AnimatedContainerBase>
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={25}
            color="27, 80, 113"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            trailingSpeed={3}
            clickables={["a", "h2", "h1", "h3"]}
            showSystemCursor={false}
            innerStyle={{
              zIndex: 9999, // Set a high z-index for the inner dot
            }}
            outerStyle={{
              zIndex: 9998, // Set a high z-index for the outer circle
            }}
          /> */}
          {children}
        </AnimatedContainerBase>
      </body>
    </html>
  );
}
