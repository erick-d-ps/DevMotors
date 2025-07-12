export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      baner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      services: ServiceProps[];
      contact: {
        email: string;
        phone: string;
        addres: string;
        time: string;
      }

    };
  };
}

interface ServiceProps {
  image: {
    url: string;
  };
  description: string;
}
