export interface Guide {
	// null = folder
	url: string | null;
	path: string | null;
	title: string;
	description: string;
	children?: Guide[];
}

// Add url of files for guide (.md and .pdf are supported)
const guides: Guide[] = [
	{
		url: '/guides//displays/displays.md',
		path: 'displays',
		title: 'Displays in the Lab',
		description: 'Learn how to mirror your laptop, change inputs and reset displays once finished'
	},
	{
		url: null,
		path: null,
		title: 'Using the Visualisation Suite',
		description: 'How to use the suite and its associated visualistation tools',
		children: [
			{
				url: '/guides/vis-suite/photogrammetry.md',
				path: 'photogrammetry',
				title: 'Photogrammetry Cell',
				description: 'How to setup camera and turntable to create 3D objects with photogrammetry'
			},
			{
				url: '/guides/vis-suite/projector.md',
				path: 'projector',
				title: 'Projector, Motion Controller and IR Glasses',
				description: 'Using the visualisation suite, setting up the projector, motion controllers and IR glasses'
			},
			{
				url: '/guides/vis-suite/vis-ren.md',
				path: 'vis-ren',
				title: 'Visionary Render',
				description: 'Using the visionary render with the visualistaion suite'
			},
		]
	},
	{
		url: null,
		path: null,
		title: 'Operational Technology',
		description: 'How to program the Operational Technology',
		children: [
			{
				url: '/guides/OT/Smart-tool-User-Guide.pdf',
				path: 'smart-tool',
				title: 'Smart Tools',
				description: 'User guide to program and use the Smart Tool'
			}
		]
	},
	{
		url: 'https://code.kx.com/insights/1.2/platform/index.html',
		path: 'kx-insights',
		title: 'KX Insights Platform',
		description:
			'Learn how to use the KX Insights platform to ingest, query, analyse and visualise data'
	}
];

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		guides
	};
}
