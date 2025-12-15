import { Atlas } from '@/atlas'
import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import mountainWallpaper from '@/assets/wallpapers/mountain.png'
import { atom } from 'nanostores'

class AtlasDesktop {
	private $wallpaper = atom<string>(mountainWallpaper)

	public setWallpaper(path: string) {
		this.$wallpaper.set(path)
	}

	public render = () => {
		const windows = useStore(Atlas.wm.getWindowStore())
		return (
			<div className={clsx(['h-screen w-screen'])}>
				<img
					alt="wallpaper"
					src={this.$wallpaper.get()}
					className="h-screen w-screen object-cover"
				/>

				<div>
					{windows.map((win) => (
						<win.render key={win.id} />
					))}
				</div>
			</div>
		)
	}
}

export { AtlasDesktop }
