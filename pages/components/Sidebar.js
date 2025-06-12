import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Sidebar.module.css';

import { links } from '../../data/common';
import { ads } from '../../data/sidebar';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link href='/'>
        <div>
          <Image src='/common/back.gif' alt='back' width={200} height={100} priority={true} />
        </div>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.href} key={link.title}>
            <div className={styles.link}>{link.title}</div>
          </Link>
        ))}
      </div>
      {ads.map((ad) => (
        <Image src={`/ads/${ad}.gif`} key={ad} alt={ad} width={'100%'} height={31} priority={true} />
      ))}
    </div>
  )
}