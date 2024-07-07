import "@/app/styles/vivo/_index.vivo.scss";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="vivoFontFamily">{children}</body>
    </html>
  );
}
