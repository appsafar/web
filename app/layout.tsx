import { Amplitude } from "@/analytics/amplitude";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Amplitude />
      {children}
    </>
  );
}
