
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../data/productos.json'
import ImageGallery from './ImageGallery'
import '../styles/productosRender.css'
import Talles from '../componentes/Talles'


export const ProductosRender = () => {
	const [item, setItem] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		const buscarProducto = productos.find(p => p.id === Number(id))
		setItem(buscarProducto || null)
	}, [id])

	if (!item) return <div style={{ padding: 12 }}>Cargando...</div>

	return (
		<main className='container-producto'>
			<h1> {item.nombre} </h1>
			<article className='info-producto'>
				<ImageGallery images={item.galeria} />
				<div className='detalles-producto'>
					<p className='info-categoria'>Categoría: {item.categoria}</p>
					<p className='info-marca'>Marca: {item.marca}</p>
					<p className='info-genero'>Género: {item.genero}</p>
					<Talles talles={item.talles}/>
					<p className='info-precio'>Precio: ${item.precio}</p>
				</div>
			</article>
		</main>
	)
}

export default ProductosRender

