import * as React from 'react';
import type { Metadata } from 'next';
import ContactMainUI from '../../ui/pages/contact/contactMainUI';

export interface IContactProps {
}

const metaTitle = 'Contact';
const metaDescription = 'This is the web page containing the contact information of Frontend Developer Muhammet ÇELİK.';

export const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
    },
}

export default function Contact (props: IContactProps) {
  return (
    <div className="pt-16">
     <ContactMainUI/>
    </div>
  );
}
