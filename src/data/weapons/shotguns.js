import defaultSchrotflintenProgress from '../defaults/progress/shotguns'

const base = ['Lockwood 300', 'Expedite 12', 'Bryson 800', 'Bryson 890']

const dlc = []

export default [...base, ...dlc].map((weapon) => ({
	category: 'Schrotflinten',
	name: weapon,
	dlc: dlc.includes(weapon),
	progress: {
		...defaultSchrotflintenProgress[weapon],
		Gold: false,
		Polyatomic: false,
	},
}))
