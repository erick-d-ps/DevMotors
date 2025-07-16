import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/home/footer";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.type"
import { Phone } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu()
  // console.log(menu.objects[0]);

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu}/>}
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.baner.url}
        buttonUrl={object.metadata.cta_button.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
