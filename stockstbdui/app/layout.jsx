import Header from "@components/Header";
import "@styles/globals.css";

export const metadata = {
  title: "stocksTBD",
  description: "Discover AI Stock Predictions",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
