import type ModuleInstance from './main.js'

export type FeedbacksSchema = {
	fbkInput1: {
		type: 'boolean'
		options: Record<string, never>
	}
	fbkInput2: {
		type: 'boolean'
		options: Record<string, never>
	}
	fbkInput3: {
		type: 'boolean'
		options: Record<string, never>
	}
	fbkInput4: {
		type: 'boolean'
		options: Record<string, never>
	}
}

export function UpdateFeedbacks(self: ModuleInstance): void {
	self.setFeedbackDefinitions({
		fbkInput1: {
			name: 'Input 1 Connected',
			type: 'boolean',
			defaultStyle: {
				bgcolor: 0xff0000,
				color: 0x000000,
			},
			options: [],
			callback: () => self.getVariableValue('input1Connected') === 'connected',
		},
		fbkInput2: {
			name: 'Input 2 Connected',
			type: 'boolean',
			defaultStyle: {
				bgcolor: 0xff0000,
				color: 0x000000,
			},
			options: [],
			callback: () => self.getVariableValue('input2Connected') === 'connected',
		},
		fbkInput3: {
			name: 'Input 3 Connected',
			type: 'boolean',
			defaultStyle: {
				bgcolor: 0xff0000,
				color: 0x000000,
			},
			options: [],
			callback: () => self.getVariableValue('input3Connected') === 'connected',
		},
		fbkInput4: {
			name: 'Input 4 Connected',
			type: 'boolean',
			defaultStyle: {
				bgcolor: 0xff0000,
				color: 0x000000,
			},
			options: [],
			callback: () => self.getVariableValue('input4Connected') === 'connected',
		},
	})
}
