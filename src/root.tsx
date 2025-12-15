import { createRoot } from 'react-dom/client'
import Atlas from './atlas'

import './styles.css'

createRoot(document.querySelector('#atlas-root') as HTMLDivElement).render(
	<Atlas />
)
