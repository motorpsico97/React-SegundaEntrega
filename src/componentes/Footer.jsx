import '../styles/footer.css'   

const Footer = () => {
    return (
        <footer>
            <div className="container__suscribe">
                <h3>¡Suscribite y recibí todas nuestras novedades!</h3>
                <input type="email" name="email" id="email" placeholder="Ingrese su e-mail" />
                <button id="Suscribirse">Suscribirse</button>
            </div>
            <div className="container__infos">
                <div className="container__info-empresa">
                    <h4>EMPRESA</h4>
                    <ul className="list__empresa">
                        <li className="empresa__list-item">Nosotros</li>
                        <li className="empresa__list-item">Contacto</li>
                        <li className="empresa__list-item">Locales</li>
                    </ul>
                </div>
                <div className="container__info-compras">
                    <h4>COMPRAS</h4>
                    <ul className="list__compras">
                        <li className="compras__list-item">Cómo comprar</li>
                        <li className="compras__list-item">Términos y condiciones</li>
                        <li className="compras__list-item">Información destacada</li>
                    </ul>
                </div>
                <div className="container__info-redes">
                    <h4>REDES</h4>
                    <div className="redes-icons">
                        <a href="https://www.facebook.com/?locale=es_LA" target="_blank"> <i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com" target="_blank">
                            <i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div className="container__tarjetas">
                    <h4>MEDIOS DE PAGO</h4>
                    <div className="medios">
                        <img src="src/assets/medios_pagos/bbvanet.svg" alt="" />
                        <img src="src/assets/medios_pagos/master.svg" alt="" />
                        <img src="src/assets/medios_pagos/mercadopago.svg" alt="" />
                        <img src="src/assets/medios_pagos/oca.svg" alt="" />
                        <img src="src/assets/medios_pagos/ebrou.svg" alt="" />
                        <img src="src/assets/medios_pagos/visa.svg" alt="" />
                    </div>
                </div>
            </div>

        </footer>



    )
}

export default Footer