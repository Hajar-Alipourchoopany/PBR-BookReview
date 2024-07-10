import React from 'react';
import Header from '../components/Header.jsx';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Über uns</h1>
        <p className="mb-4">
          Willkommen bei MyBookApp! Diese Anwendung ermöglicht es Benutzern, nach Büchern zu suchen, Rezensionen zu lesen und zu schreiben sowie ihre Lieblingsrezensionen zu markieren.
          Unsere Plattform bietet eine spannende Möglichkeit, Bucherfahrungen zu entdecken und zu teilen.
        </p>
        <p className="mb-4">
          Als Absolvent der WBS Coding School habe ich diese Full-Stack-Webanwendung im Rahmen meines Abschlussprojekts entwickelt.
          Unser Projekt basiert auf dem MERN-Stack (MongoDB, Express.js, React und Node.js).
        </p>
        <p>
          Ein großer Dank geht an das gesamte WBS Coding School Team, insbesondere an meinen Instructor Onur, für ihre Unterstützung und Anleitung während dieses Projekts.
        </p>
        <p>Hajar Alipourchoopany</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
