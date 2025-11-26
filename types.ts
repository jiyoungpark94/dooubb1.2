import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface Brand {
  id: string;
  name: string;
  logoText: string;
}