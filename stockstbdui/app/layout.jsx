import "@styles/globals.css";
import Header from "@components/Header";
import Providers from "@components/Providers";

export const metadata = {
  title: "stocksTBD",
  description: "Discover AI Stock Predictions",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
        <main className="app">
          <Header />
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
