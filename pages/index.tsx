import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import Link from 'next/link'
import charactersImg from '../public/images/characters-large.webp'
import nintendoImg from '../public/images/nintendo.svg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a la tienda oficial de Amiibos
        </h1>

        <div className={styles.characters}>
          <Image src={charactersImg} alt="Imagen Personajes" />
        </div>

        <div className={styles.grid}>
          <Link href="/products">
            <a className={styles.card}>
              <h2>Productos &rarr;</h2>
              <p>
                Aquí podrá encontrar una amplia gama de productos ajustado a sus
                necesidades.
              </p>
            </a>
          </Link>

          <a
            href="https://nintendo.com"
            target={'_blank'}
            className={styles.card}
            rel="noreferrer"
          >
            <h2>Partner de Nintendo &rarr;</h2>
            <p>Somos socios oficiales de Nintendo para Latinoamérica</p>
          </a>

          <div className={styles.card}>
            <h2>Síguenos &rarr;</h2>
            <p>Descubre las ofertas y promociones que tenemos para tí.</p>
            <div></div>
          </div>

          <div className={styles.card}>
            <h2>Contáctanos &rarr;</h2>
            <p>
              Nos puede llamar al Call Center (900-222-333-22) ó escribirnos en
              nuestras plataformas digitales
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <Image src={nintendoImg} alt="Nintendo Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default Home
