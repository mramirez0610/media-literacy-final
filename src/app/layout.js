import "@styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>{children}</section>
      </body>
    </html>
  );
}
