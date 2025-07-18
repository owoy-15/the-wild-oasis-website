import "@/app/_styles/globals.css";
// font
import { Josefin_Sans } from "next/font/google";
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

// --------------

const Josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

// This layout will actually wrap the entire application
// So it will apply to every single route in the app
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italain Dolomites, surrounded by beautiful mountains and dark forests",
};

// Server Components that run or are rendered right on the server
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <ReservationProvider>{children}</ReservationProvider>
        </div>
      </body>
    </html>
  );
}
