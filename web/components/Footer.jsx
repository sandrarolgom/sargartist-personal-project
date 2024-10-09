function Footer() {
  const instagram = "https://www.instagram.com/sargartist/";
  const twitter = "https://x.com/sargartist";
  return (
    <footer className="footer">
      <ul className="footer__icons">
        <li>
          <a href={instagram} target="_blank">
            <i className="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href={twitter} target="_blank">
            <i className="fa-brands fa-x-twitter" />
          </a>
        </li>
      </ul>
      <ul className="footer__name">
        <a href={instagram} target="_blank">@sargartist</a>
      </ul>
    </footer>
  );
}

export default Footer;
