import Image from 'next/image';

import styles from '../styles/Pages.module.css';

import { jobs } from '../data/experience.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Experience() {
  return (
    <div className="subPage">
      <Sidebar />
      <Content title="Experience">
        <div className={styles.container}>
          {jobs.map((job, index) => (
            <div key={`${job.name}-${job.position}`}>
              <div className={styles.titleMain}>
                <Image
                  src={`/experience/${job.image}`}
                  alt={job.name}
                  width={525}
                  height={350}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={index < 2}
                />
              </div>
              <Image
                src={`/experience/${job.gif.name}.gif`}
                unoptimized
                alt={job.name}
                width={job.gif.width * 100}
                height={job.gif.height * 100}
                priority={index < 2}
              />
              {job.extraInfo && (
                <div className={styles.descLrg}>{job.extraInfo}</div>
              )}
              <div className={styles.descMed}>{job.dates}</div>
              <div className={styles.descMed}>{job.location}</div>
              <div className={styles.descMed}>{job.title}</div>
              <div className={styles.descSml}>{job.description}</div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}
