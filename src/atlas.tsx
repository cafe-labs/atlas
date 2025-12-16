import { createContext } from 'react'
import { AtlasDesktop } from './core/desktop'
import { AtlasWindowManager } from './core/wm'

export const Atlas = {
	wm: new AtlasWindowManager(),
	desktop: new AtlasDesktop()
}

Atlas.wm.createWindow(100, 100)

export default () => {
	const AtlasContext = createContext(Atlas)
	return (
		<AtlasContext value={Atlas}>
			<Atlas.desktop.render />
		</AtlasContext>
	)
}
