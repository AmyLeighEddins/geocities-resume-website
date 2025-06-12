import Image from 'next/image';

import styles from '../styles/Pages.module.css';

import { jobs } from '../data/experience.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Registry() {
  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Experience'>
        <div className={styles.container}>
          {jobs.map((job) => (
            <div>
              <div className={styles.titleMain}>
                <Image src={`/experience/${job.image}`} alt={job.name} width={525} height={350} priority={true} />
              </div>
              <Image src={`/experience/${job.gif.name}.gif`} alt='on' width={job.gif.width * 100} height={job.gif.height * 100} priority={true} />
              {job.extraInfo && <div className={styles.descLrg}>{job.extraInfo}</div>}
              <div className={styles.descMed}>{job.dates}</div>
              <div className={styles.descMed}>{job.location}</div>
              <div className={styles.descMed}>{job.title}</div>
              <div className={styles.descSml}>{job.description}</div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}
