import headerStyles from '../styles/Header.module.css';


const Header = () => {
  return (
    <div className={headerStyles.title}>
      <h1><span>WebDev</span> News</h1>
      <p className={headerStyles.description}>Keep up to date with latest news</p>
    </div>
  )
}

export default Header;