import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Contact = () => {


    return (
        <div className="contact-page">
            <div className="contact">
                <div className="contact__title">
                    <h1>CONTACTO</h1>
                    <div className="contact__info">
                        <p>Si tienes cualquier consulta, ¡no dudes en preguntarnos!</p>
                    </div>
                    <div className="icons">
                        <p><FontAwesomeIcon icon="fa-solid fa-envelope" /> proyectos@lateua.es</p>
                        <br />
                        <p><FontAwesomeIcon icon="fa-solid fa-phone" /> 623 001 833</p>           
                    </div>
                </div>

                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.2606740773817!2d-0.3242503226982868!3d39.46343937706002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488f372defa3%3A0xcafa5cd672a8178!2sLanzadera!5e0!3m2!1ses!2ses!4v1666601793415!5m2!1ses!2ses" width="500" height="450" loading="lazy" ></iframe>
                </div>

            </div>
        </div>
    )
}