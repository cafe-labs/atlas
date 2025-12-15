import { useStore } from '@nanostores/react'
import { AtlasWindowManager } from './core/wm'

export const Atlas = {
	wm: new AtlasWindowManager()
}

Atlas.wm.createWindow(100, 100)

export default function () {
	const windows = useStore(Atlas.wm.getWindowStore())
	return <div className="relative">{windows.map((win) => win.render())}</div>
}
