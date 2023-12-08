import LoadingModal from "./components/LoadingModal";
import ProfileDrawer from "./components/ProfileDrawer";
import AuthContext from "./context/AuthContext";
import { GlobalContextProvider } from "./context/GlobalContext";
import { SettingsContextProvider } from "./context/SettingsContext";
import { SocketContextProvider } from "./context/SocketContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger Clone",
  description: "Messenger Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <SettingsContextProvider>
            <GlobalContextProvider>
              <LoadingModal />
              <ToasterContext />
              <SocketContextProvider>
                {children}
                <ProfileDrawer />
              </SocketContextProvider>
            </GlobalContextProvider>
          </SettingsContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
