import React from 'react';

import { GithubLogo, RssLogo } from '../icons';
import { footer as c } from '../../utils/constants';

import s from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>

      <a className={s.footer_link} href={c.authorGitHubLink}>
        <GithubLogo styleClass={s.footer_icon__github} />
        &nbsp;{c.authorGitHubText}
      </a>

      <a className={s.footer_link} href={c.rssLink}>
        <RssLogo styleClass={s.footer_icon__rss}/>
      </a>

    </footer>
  );
}

export default Footer;
