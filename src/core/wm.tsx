import { useStore } from '@nanostores/react'
import clsx from 'clsx'
import interact from 'interactjs'
import { atom } from 'nanostores'
import { useEffect, useRef } from 'react'

class AtlasWindow {
	private $coordinates = atom<{ x: number; y: number }>({
		x: 0,
		y: 0
	})

	constructor(x: number, y: number) {
		this.$coordinates.set({ x, y })
	}

	public move({ x, y }: { x?: number; y?: number }) {
		if (x) {
			this.$coordinates.set({
				...this.$coordinates.get(),
				x
			})
		}

		if (y) {
			this.$coordinates.set({
				...this.$coordinates.get(),
				y
			})
		}
	}

	public render() {
		const coordinates = useStore(this.$coordinates)
		const titlebarRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			const that = this
			if (!titlebarRef.current) return
			interact(titlebarRef.current).draggable({
				listeners: {
					move(event: { dx: number; dy: number }) {
						that.move({
							x: coordinates.x + event.dx,
							y: coordinates.y + event.dy
						})
					}
				}
			})
		}, [coordinates])

		return (
			<div
				style={
					{
						'--position-x': `${coordinates.x}px`,
						'--position-y': `${coordinates.y}px`
					} as React.CSSProperties
				}
				className={clsx([
					// position
					`absolute touch-none select-none`,
					`top-(--position-y) left-(--position-x)`,

					// styling
					`bg-gray-200 h-32 w-64`
				])}
			>
				<div className="h-8 w-full bg-gray-400" ref={titlebarRef}></div>
				atlas window
			</div>
		)
	}
}

class AtlasWindowManager {
	private $activeWindows = atom<AtlasWindow[]>([])

	createWindow(x: number, y: number) {
		this.$activeWindows.set([
			...this.$activeWindows.get(),
			new AtlasWindow(x, y)
		])
	}

	getWindows() {
		return this.$activeWindows.get()
	}

	getWindowStore() {
		return this.$activeWindows
	}
}

export { AtlasWindowManager }
