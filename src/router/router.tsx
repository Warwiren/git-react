import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='home' element={<Home />} />

					{/*catch all routes*/}
					{/* <Route path='403' element={<Page403 />} />
					<Route path='*' element={<Page404 />} /> */}
				</Route>
			</Routes>
		</div>
	)
}

export default Router
