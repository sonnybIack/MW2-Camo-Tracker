import defaultHandgunsProgress from '../defaults/progress/handguns'

const base = ['P890', '.50 GS', 'X12', 'Basilisk', 'X13 Auto']

const dlc = []

export default [...base, ...dlc].map((weapon) => ({
	category: 'Pistolen',
	name: weapon,
	dlc: dlc.includes(weapon),
	progress: {
		...defaultHandgunsProgress[weapon],
		Gold: false,
		Polyatomic: false,
	},
}))
