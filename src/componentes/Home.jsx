
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import productos from '../data/productos.json'
import '../styles/productos.css'

const Home = () => {
	const [items, setItems] = useState([])
	const [loading, setLoading ] = useState(false)
	const { categoryId, marca, genero } = useParams()


	const fetchProductosSimulado = (categoria) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (categoria) {
					const catFiltrada = decodeURIComponent(categoria)
					resolve(productos.filter(p => p.categoria === catFiltrada))
				} else {
					resolve(productos)
				}
			}, 500)
		})
	}
	useEffect(() => {
		let activo = true
		setLoading(true)


		if (marca) {
			const marcaFiltrada = decodeURIComponent(marca)

			const idT = setTimeout(() => {
				if (!activo) return
				setItems(productos.filter(p => p.marca === marcaFiltrada))
				setLoading(false)
			}, 500)
			return () => { activo = false; clearTimeout(idT) }
		}

		if (genero) {
			const generoFiltrado = decodeURIComponent(genero)

			const idT = setTimeout(() => {
				if (!activo) return
				setItems(productos.filter(p => p.genero === generoFiltrado))
				setLoading(false)
			}, 500)
			return () => { activo = false; clearTimeout(idT) }
		}


		fetchProductosSimulado(categoryId).then(result => {
			if (!activo) return
			setItems(result)
			setLoading(false)
		})

		return () => { activo = false }
	}, [categoryId, marca, genero])



	
	const titulo = genero ? decodeURIComponent(genero) : (marca ? decodeURIComponent(marca) : (categoryId ? decodeURIComponent(categoryId) : 'Productos'))

	return (
		<main className='main-container' style={{ padding: 12 }}>
			<h1 style={{textAlign:"center", marginTop:"2rem"}}>{titulo}</h1>
			<div className='productos-container'>
				{loading ? (
					<div style={{ padding: 24 }}>Cargando productos...</div>
				) : (
					items.map(p => (
						<Link key={p.id} to={`/products/${p.id}`}>
							<article className='producto-card'>
								<div className='producto-img-container'>
									<img className='producto-img' src={p.img} alt={p.nombre} />
								</div>
								<p className='producto-marca'>{p.marca}</p>
								<h3 className='producto-nombre'>{p.nombre}</h3>
								<p className='producto-precio'>$ {p.precio}</p>
								<p className='producto-categoria'>{p.genero} · {p.categoria}</p>
							</article>
						</Link>
					))
				)}
			</div>
		</main>
	)
}

export default Home
