import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";
import { title } from "process";

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const params = await paramsPromise;
    const { slug } = params;

    const { objects }: PostProps = await getItemBySlug(slug).catch(() => {
      return {
        title: "DevMotors - sua oficina especializada!",
        description: "Oficina de carros em Paraníba",
      };
    });

    return {
      title: `Devmotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: [
        "DevMotors",
        `${objects[0].title}`,
        `DevMotors ${objects[0].title}`
      ],
      openGraph: {
        title: `Devmotors - ${objects[0].title}`,
        images: [`${objects[0].metadata.description.button_url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DevMotors - sua oficina especializada!",
      description: "Oficina de carros em Paraníba",
    };
  }
}

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = await paramsPromise;
  const { slug } = params;

  const { objects }: PostProps = await getItemBySlug(slug);

  return (
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
  );
}
