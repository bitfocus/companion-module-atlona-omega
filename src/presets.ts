import type { ModuleSchema } from './main.js'
import type ModuleInstance from './main.js'
import type { CompanionPresetDefinitions, CompanionPresetSection } from '@companion-module/base'

export function UpdatePresets(self: ModuleInstance): void {
	const structure: CompanionPresetSection[] = [
		/* {
			id: 'ome-ms42',
			name: 'AT-OME-MS42',
			definitions: [
				{
					id: 'debugging_tools',
					name: 'Debugging Tools',
					description: 'Get Status commands and other tools',
					type: 'simple',
					presets: ['mylabel'],
				},
			],
		}, */
	]

	const presets: CompanionPresetDefinitions<ModuleSchema> = {}
	/* presets['mylabel'] = {
		type: 'simple',
		name: 'Name',
		style: {
			text: 'TEST',
			size: 'auto',
			color: 0xffffff,
			bgcolor: 0x000000,
			show_topbar: false,
		},
		steps: [],
		feedbacks: [],
	} */

	self.setPresetDefinitions(structure, presets)
}
