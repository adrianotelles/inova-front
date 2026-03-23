import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import Choose from "./components/Choose";
import Product from "./components/Product";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Peças para Caminhões e Máquinas Pesadas | Inova Peças</title>
        <meta name="description" content="Peças para tratores, caminhões e máquinas pesadas com qualidade e agilidade. Consulte compatibilidade e compre na Inova Peças." />
        <link rel="canonical" href="https://inova-pecas.com/" />
      </Helmet>
      <Banner />
      <Choose />
      <Product />
    </>
  )
}

export default HomePage;