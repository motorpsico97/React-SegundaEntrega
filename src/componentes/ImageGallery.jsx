import { useState, useEffect } from 'react'
import '../styles/imagegallery.css'

const ImageGallery = ({ images = null, imagenes = null }) => {
    const lista = Array.isArray(imagenes) ? imagenes : (Array.isArray(images) ? images : [])
    const [indice, setIndice] = useState(0)

    useEffect(() => {
        setIndice(0)
    }, [lista])

    useEffect(() => {
        const onKeydown = (evento) => {
            if (evento.key === 'ArrowRight') siguiente()
            if (evento.key === 'ArrowLeft') anterior()
        }
        window.addEventListener('keydown', onKeydown)
        return () => window.removeEventListener('keydown', onKeydown)
    }, [indice, lista])

    if (!lista || lista.length === 0) {
        return <div className="ig-empty">No hay imágenes para mostrar.</div>
    }

    const siguiente = () => setIndice(i => (i + 1) % lista.length)
    const anterior = () => setIndice(i => (i - 1 + lista.length) % lista.length)

    return (
        <div className="ig-root">
            <div className="ig-viewer">
                <button className="ig-btn ig-prev" onClick={anterior} aria-label="Anterior">◀</button>
                <div className="ig-main-wrap">
                    <img
                        src={lista[indice]}
                        alt={`Imagen ${indice + 1}`}
                        className="ig-main"
                        onError={(e) => { e.currentTarget.src = '/imagenes/placeholder.png' }}
                    />
                </div>
                <button className="ig-btn ig-next" onClick={siguiente} aria-label="Siguiente">▶</button>
            </div>

            <div className="ig-thumbs" role="list">
                {lista.map((url, i) => (
                    <button
                        key={i}
                        className={`ig-thumb ${i === indice ? 'active' : ''}`}
                        onClick={() => setIndice(i)}
                        aria-label={`Ver imagen ${i + 1}`}
                        role="listitem"
                    >
                        <img src={url} alt={`mini-${i + 1}`} loading="lazy" onError={(e) => { e.currentTarget.src = '/imagenes/placeholder-small.png' }} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery
