import { useState } from 'react'
import '../styles/talles.css'

function Talles({ talles = [], onSeleccion }) {
    const [seleccionado, setSeleccionado] = useState(null)

    let tallesList = []
    if (!talles) tallesList = []
    else if (Array.isArray(talles)) {
        if (talles.length > 0 && typeof talles[0] === 'string') {
            tallesList = talles.map(v => ({ valor: v, disponible: true }))
        } else {
            tallesList = talles.map(t => ({ valor: t.valor ?? t, disponible: (t.disponible ?? true) }))
        }
    } else if (typeof talles === 'object' && talles.valor && Array.isArray(talles.valor)) {

        const vals = talles.valor
        const avail = Array.isArray(talles.disponible) ? talles.disponible : vals.map(() => true)
        tallesList = vals.map((v, i) => ({ valor: v, disponible: !!avail[i] }))
    }

    const handleClick = (talle) => {
        if (!talle.disponible) return
        setSeleccionado(talle.valor)
        if (onSeleccion) onSeleccion(talle.valor)
    }

    return (
        <div className="talles-container" role="list" aria-label="Talles disponibles">
            {tallesList.map((t) => (
                <button
                    key={t.valor}
                    type="button"
                    role="listitem"
                    className={
                        `talle ${t.disponible ? '' : 'talle--no-disponible'} ` +
                        `${t.valor === seleccionado ? 'talle--seleccionado' : ''}`
                    }
                    onClick={() => handleClick(t)}
                    disabled={!t.disponible}
                    aria-pressed={t.valor === seleccionado}
                    aria-label={`Talle ${t.valor} ${t.disponible ? '' : 'no disponible'}`}
                >
                    {t.valor}
                </button>
            ))}
        </div>
    )
}

export default Talles