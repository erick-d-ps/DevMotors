import { Suspense } from "react";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Metadata } from "next";
import { Content } from "./components";
import { LoadingPost } from "./components/loading"

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

  return (
    <>
      <Suspense fallback={ <LoadingPost/> }>
        <Content slug={slug} />
      </Suspense>
    </>
  );
}
