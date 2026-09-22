import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Flores Amarillas - Proyecto POE',
  description: 'Jardín animado de flores amarillas construido con Next.js y CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}