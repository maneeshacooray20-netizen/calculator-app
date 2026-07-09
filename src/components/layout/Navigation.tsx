import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faSliders } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <header className="w-full max-w-sm flex items-center justify-between mb-2" id="header">
      <NavLink to="/" className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ background: '#dce5d4', boxShadow: '3px 3px 8px #b5bfae, -3px -3px 8px #ffffff' }}
        >
          <FontAwesomeIcon icon={faCalculator} className="text-xs" style={{ color: '#7d9b76' }} />
        </div>
        <span className="font-sora text-sm font-semibold tracking-tight" style={{ color: '#7d9b76' }}>
          Calculator App
        </span>
      </NavLink>
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center cursor-pointer"
        style={{ background: '#f5f0e8', boxShadow: '3px 3px 8px #c9c4bc, -3px -3px 8px #ffffff' }}
      >
        <FontAwesomeIcon icon={faSliders} className="text-xs" style={{ color: '#a8c0a0' }} />
      </div>
    </header>
  );
};

export default Navigation;
