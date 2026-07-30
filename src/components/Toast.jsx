import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="custom-toast-float">
      <Sparkles className="text-gold" size={20} />
      <div>
        <h6 className="mb-0 font-serif text-gold">{toastMessage.title}</h6>
        <small className="text-muted">{toastMessage.message}</small>
      </div>
    </div>
  );
};
