import React from 'react';
import { useNavigate } from 'react-router-dom';
import GateSection from '@/components/GateSection';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="atmosphere" />
      <div className="grid-pattern" />
      <GateSection onSubmit={() => navigate('/skills')} />
    </>
  );
};

export default Index;
