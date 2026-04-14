import React from 'react';
import './PhoneFrame.css';

interface PhoneFrameProps {
  children: React.ReactNode;
  label?: string;
  tone?: 'default' | 'accent';
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  label,
  tone = 'default',
  className = '',
}) => {
  return (
    <div className={`phone-frame phone-frame--${tone} ${className}`}>
      <div className="phone-frame__body">
        <div className="phone-frame__notch" aria-hidden />
        <div className="phone-frame__status" aria-hidden>
          <span>9:41</span>
          <span className="phone-frame__status-dots">●●●</span>
        </div>
        <div className="phone-frame__screen">{children}</div>
      </div>
      {label && <div className="phone-frame__label mono">{label}</div>}
    </div>
  );
};
