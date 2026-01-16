import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from '../styles/Pages.module.css';

import { education } from '../data/education.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Education() {
  const [loadedGifs, setLoadedGifs] = useState({});

  useEffect(() => {
    education.forEach((school) => {
      const img = new window.Image();
      img.onload = () => {
        setLoadedGifs((prev) => ({ ...prev, [school.gif.name]: true }));
      };
      img.src = `/education/${school.gif.name}.gif`;
    });
  }, []);

  return (
    <div className="subPage">
      <Sidebar />
      <Content title="Education">
        <div className={styles.container}>
          {education.map((school, index) => (
            <div key={school.name}>
              <div className={styles.titleMain}>
                <Image
                  src={`/education/${school.image}`}
                  alt={school.name}
                  width={525}
                  height={350}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={index < 2}
                />
              </div>
              <Image
                src={loadedGifs[school.gif.name] ? `/education/${school.gif.name}.gif` : `/education/${school.gif.name}-static.webp`}
                unoptimized
                alt={school.name}
                width={school.gif.width * 100}
                height={school.gif.height * 100}
                priority={index < 2}
              />
              <div className={styles.descMed}>{school.dates}</div>
              <div className={styles.descMed}>{school.location}</div>
              <div className={styles.descMed}>{school.degree}</div>
              <div className={styles.descSml}>{school.description}</div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}
