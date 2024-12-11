import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { Button } from "@mui/material";
import Link from "next/link";
import { Building, SettingsIcon, Bell } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{   
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <section>
          <nav className="border-b border-gray-300 p-5 bg-white shadow-md">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-primary text-lg">
                Tarakeet
              </span>
              <div className="space-x-4">
                <Button variant="text" href="#">Profile</Button>
              </div>
            </div>
          </nav>

          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <aside className="grow-0 w-[20%] h-screen bg-white shadow-md p-5 space-y-5 border-r border-gray-200">
              <div className="space-y-4">
                <Button
                  variant="contained"
                  className="flex flex-row w-full items-center justify-start transition-transform hover:-translate-x-1"
                  startIcon={<Building className="mr-2 w-5 h-5" />}
                  component={Link}
                  href="/"
                >
                  Facility
                </Button>

                <Button
                  variant="contained"
                  className="flex flex-row w-full items-center justify-start transition-transform hover:-translate-x-1"
                  startIcon={<SettingsIcon className="mr-2 w-5 h-5" />}
                  component={Link}
                  href="#"
                >
                  Settings
                </Button>

                <Button
                  variant="contained"
                  className="flex flex-row w-full items-center justify-start transition-transform hover:-translate-x-1"
                  startIcon={<Bell className="mr-2 w-5 h-5" />}
                  component={Link}
                  href="#"
                >
                  Notification
                </Button>
              </div>
            </aside>

            <main className="grow mr-5 mt-5 p-6 bg-white shadow rounded-lg h-[87vh] overflow-y-auto">
              {children}
            </main>
          </section>
        </section>
      </body>
    </html>
  );
}