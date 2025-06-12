import {useState} from 'react';

import Image from 'next/image';

import styles from '../styles/Pages.module.css';

import { creations, types } from '../data/arts-crafts.js';

import Sidebar from './components/Sidebar.js';
import Content from './components/Content.js';

export default function Party() {
  const [creationsFiltered, setCreationsFiltered] = useState(creations);

  const onTypePress = (type) => {
    if (!type) setCreationsFiltered(creations);
    else setCreationsFiltered(creations.filter((image) => image.type === type));
  }

  return (
    <div className='subPage'>
      <Sidebar />
      <Content title='Arts & Crafts'>
        <div>
          {'Filter: '}
          <select className={styles.filter} onChange={(e) => onTypePress(e.target.value)}>
            {types.map((type) => (
              <option value={type.value}>{type.text}</option>
            ))}
          </select>
        </div>
        <div className={styles.container}>
          {creationsFiltered.map((creation) => (
            <div>
              <div className={styles.titleImage}>
                <Image src={`/art/${creation.src}`} alt={creation.title} width={creation.width*100} height={creation.height*100} priority={true} />
              </div>
              <div className={styles.descMed}>{creation.title}</div>
              <div className={styles.descSml}>{creation.description}</div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  )
}
