import beKingLogoBlanco from '../assets/beKingLogoBlanco.png';

function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src={beKingLogoBlanco} alt="BeKind Logo" className="header-logo" />
      </div>
      
      <div className="header-right">
        <div className="user-profile">
          <div className="avatar">A</div>
        </div>
      </div>
    </header>
  );
}

export default Header;