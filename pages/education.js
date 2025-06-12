import Image from 'next/image';

import styles from '../styles/Pages.module.css';

import { education } from '../data/education.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Education() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Education'>
        <div className={styles.container}>
          {education.map((school) => (
            <div>
              <div className={styles.titleMain}>
                <Image src={`/education/${school.image}`} alt={school.name} width={525} height={350} priority={true} />
              </div>
              <Image src={`/education/${school.gif.name}.gif`} alt='on' width={school.gif.width * 100} height={school.gif.height * 100} priority={true} />
              <div className={styles.descMed}>{school.dates}</div>
              <div className={styles.descMed}>{school.location}</div>
              <div className={styles.descMed}>{school.degree}</div>
              <div className={styles.descSml}>{school.description}</div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}
