import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useCallback } from 'react';

import { useAppContext } from '../context/context';
import { links } from '../data/common'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { playing, setPlaying } = useAppContext();
  const musicPlayer = useRef(
    typeof Audio !== "undefined" ? new Audio("/common/PowerRangers.mp3") : undefined
  );

  const clickPlay = useCallback(() => {
    if (!playing) {
      musicPlayer.current?.play();
      setPlaying(true);
    }
  }, [playing, setPlaying]);

  useEffect(() => {
    document.addEventListener('click', playMusic);
    function playMusic() {
      clickPlay();
      document.removeEventListener('click', playMusic);
    }
  }, [clickPlay])

  return (
    <div className={styles.container}>
      <Head>
        <title>Amy Eddins</title>
        <meta name='description' content='Resume website' />
        <link rel='icon' href='/common/programming-code-cyan.webp' />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          <Image src='/home/title.gif' alt='Amy Eddins' width={1000} height={100} />
        </h1>

        <div className={styles.grid}>
          {links.map((link) => (
            <Link className={styles.link} href={link.href} key={link.title}>
              <div className={styles.card}>
                <div className='rainbowText'>
                  <Image src={link.image} alt={link.title} width={300} height={300} priority={true} />
                  <div>{link.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
