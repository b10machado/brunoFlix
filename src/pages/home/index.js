import React from 'react';
import dadosIniciais from "../../data/dados_iniciais_bruno"
import MenuBrunoFlix from "../../components/MenuBrunoFlix";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer";


function Home() {
  return (
    <div>
        <MenuBrunoFlix />

        <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                    url={dadosIniciais.categorias[0].videos[0].url}
                    videoDescription={"Crack Neto"} />

         <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

         <Carousel category={dadosIniciais.categorias[1]} />

         <Carousel category={dadosIniciais.categorias[2]} />

         <Footer/>

    </div>
  );
}

export default Home;
