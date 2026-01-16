import Image from 'next/image';

import styles from '../styles/Pages.module.css';

import { aboutMe } from '../data/about-me.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function AboutMe() {
  return (
    <div className="subPage">
      <Sidebar />
      <Content title="About Me">
        <div className="colorParagraph">
          <div className={styles.titleMain}>
            <Image
              src={`/aboutMe/Headshot.jpg`}
              alt={'Amy Eddins'}
              width={480}
              height={500}
              priority={true}
            />
          </div>
          {aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Content>
    </div>
  );
}
