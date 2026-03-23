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
        <meta name="keywords" content="peças para caminhões, peças para tratores, peças automotivas pesadas, peças para máquinas, auto peças online" />
        <link rel="canonical" href="https://inova-pecas.com/" />

        <meta property="og:title" content="Inova Peças - Peças para Caminhões e Máquinas Pesadas" />
        <meta property="og:description" content="Qualidade, agilidade e peças certas para seu equipamento não parar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inova-pecas.com/" />

        <meta name="robots" content="index, follow" />
      </Helmet >
      <Banner />
      <Choose />
      <Product />
    </>
  )
}

export default HomePage;