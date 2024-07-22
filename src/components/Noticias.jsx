import { useEffect, useState } from "react";
import './Noticias.css'



function Noticias() {

    const [noticia, setNoticia] = useState(null);
    
    useEffect(() => {
        const fetchNoticiaData = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias`)
            const noticiaData = await response.json();
            const length = await  noticiaData.items.length;
            let ramdomNoticia = parseInt(Math.random() * length);
            const newNoticia = await noticiaData.items[ramdomNoticia];
            console.log(newNoticia);
            setNoticia(newNoticia);
        }
        setInterval(fetchNoticiaData, 10000);
        // fetchNoticiaData();
        clearInterval();
        return () => {setNoticia(null)};
    }, [])
    
    return (
        <div className="conteudo">
            {noticia ?
            (
                <div className="noticia">
                    <h1>{noticia.titulo}</h1>
                    <h2>{noticia.introducao}</h2>
                </div>
            ) : (
                <div className="noticia">
                    <h1>Carregando notícia</h1>
                </div>
            ) }
        </div>
    )
}

export default Noticias;