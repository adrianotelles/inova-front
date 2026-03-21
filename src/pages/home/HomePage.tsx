import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import Choose from "./components/Choose";
import Product from "./components/Product";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - INOVA</title>
        <meta name="description" content="Consulte compatibilidade e especificações." />
        <link rel="canonical" href="https://inova-pecas.web.app/home" />
      </Helmet>
      <Banner />
      <Choose />
      <Product />
    </>
  )
}

export default HomePage;