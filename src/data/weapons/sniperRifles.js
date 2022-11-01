import defaultSniperRiflesProgress from '../defaults/progress/sniperRifles'

const base = ['MCPR-300', 'Signal 50', 'LA-B 330', 'SP-X 80']

const dlc = []

export default [...base, ...dlc].map((weapon) => ({
	category: 'Snipergewehre',
	name: weapon,
	dlc: dlc.includes(weapon),
	progress: {
		...defaultSniperRiflesProgress[weapon],
		Gold: false,
		Polyatomic: false,
	},
}))
