import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componentes/Home'
import { ProductosRender } from './componentes/ProductosRender'
import NavBar from './componentes/NavBar'
import Footer from './componentes/Footer'

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:categoryId" element={<Home />} />
					<Route path="/marca/:marca" element={<Home />} />
					<Route path="/genero/:genero" element={<Home />} />
					<Route path="/products/:id" element={<ProductosRender />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App
