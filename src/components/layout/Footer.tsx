import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-center pt-1" id="footer">
      <span className="font-manrope text-xs font-light" style={{ color: '#b0bfab' }}>
        Calculator App — crafted with calm
      </span>
    </footer>
  );
};

export default Footer;
