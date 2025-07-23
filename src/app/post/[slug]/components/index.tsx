import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import Image from "next/image";
import styles from "./content.module.scss"
import { Phone } from "lucide-react";
import { PostProps } from "@/utils/post.type";
import { getItemBySlug } from "@/utils/actions/get-data";


export async function Content({slug}: {slug: string}){
    const { objects }: PostProps = await getItemBySlug(slug);
    return(
        <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        bannerUrl={objects[0].metadata.banner.url}
        buttonUrl={objects[0].metadata.button.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.inerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].metadata.description.title}
              quality={100}
              fill={true}
              sizes="100%"
              src={objects[0].metadata.description.banner.url}
            />
          </div>
        </section>
      </Container>
    </>
    )
}