function Footer() {
  const instagram = "https://www.instagram.com/sargartist/";
  const twitter = "https://x.com/sargartist";
  return (
    <footer>
      <ul>
        <li>
          <a href={instagram}>
            <i className="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href={twitter}>
            <i className="fa-brands fa-x-twitter" />
          </a>
        </li>
      </ul>
      <ul>
        <a href={instagram}>@sargartist</a>
      </ul>
    </footer>
  );
}

export default Footer;
