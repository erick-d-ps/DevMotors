import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="sericos">
        <article className={styles.inerContainer}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>
        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagerm iluestrativa sobre a empresa"
            quality={100}
            fill={true}
            sizes="100%"
            src={object.metadata.about.banner.url}
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services} >

          {object.metadata.services.map((service) => (
            <article key={service.description} className={styles.service}>
              <div className={styles.inerService}>
                <Image
                  className={styles.imageService}
                  alt="Imagem do serviço"
                  quality={100}
                  fill={true}
                  sizes="100%"
                  src={service.image.url}
                />
              </div>
              <p>{service.description}</p>
            </article>
          ))}

      </section>
    </>
  );
}
