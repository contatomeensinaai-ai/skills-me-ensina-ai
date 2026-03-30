import React, { useState } from 'react';
import GateSection from '@/components/GateSection';
import PortalSection from '@/components/PortalSection';

const Index: React.FC = () => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <>
      <div className="atmosphere" />
      <div className="grid-pattern" />
      {!showPortal ? (
        <GateSection onSubmit={() => { setShowPortal(true); window.scrollTo(0, 0); }} />
      ) : (
        <PortalSection />
      )}
    </>
  );
};

export default Index;
