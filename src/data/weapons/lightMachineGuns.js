import defaultLightMachineGunsProgress from '../defaults/progress/lightMachineGuns'

const base = ['Sakin MG38', 'HCR 56', '556 Icarus', 'Raal MG', 'RPK', 'Rapp H']

const dlc = []

export default [...base, ...dlc].map((weapon) => ({
	category: 'LMG',
	name: weapon,
	dlc: dlc.includes(weapon),
	progress: {
		...defaultLightMachineGunsProgress[weapon],
		Gold: false,
		Polyatomic: false,
	},
}))
