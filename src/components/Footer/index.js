import React from 'react';
import * as S from './styles';

function Footer() {
  return (
    <S.Footer>
      <p className="footer-item">
        Projeto desenvolvido por Laura Gusmão.
      </p>
      <nav className="footer-item">
        <a
          className="footer-item"
          href="https://www.linkedin.com/in/laurargusmao/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        {/* <p>{' '}</p> */}
        <a
          className="footer-item"
          href="https://github.com/LauraGusmao"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </nav>
    </S.Footer>
  );
}

export default Footer;
