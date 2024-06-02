// place files you want to import through the `$lib` alias in this folder.
interface Components {
	id: number;
	componentName: string;
	pathName: string;
}

export const componentData: Components[] = [
	{ id: 1, componentName: 'Accordion', pathName: '/accordion' },
	{ id: 2, componentName: 'Alert', pathName: '/alert' },
	{ id: 3, componentName: 'Breadcrumb', pathName: '/breadcrumb' },
	{ id: 4, componentName: 'Button', pathName: '/button' },
	{ id: 5, componentName: 'Card', pathName: '/card' },
	{ id: 6, componentName: 'Checkbox', pathName: '/checkbox' },
	{ id: 7, componentName: 'Datepicker', pathName: '/datepicker' },
	{ id: 8, componentName: 'Dropdown', pathName: '/dropdown' },
	{ id: 9, componentName: 'Form', pathName: '/form' },
	{ id: 10, componentName: 'Modal', pathName: '/modal' },
	{ id: 11, componentName: 'Navbar', pathName: '/navbar' },
	{ id: 12, componentName: 'Pagination', pathName: '/pagination' },
	{ id: 13, componentName: 'ProgressBar', pathName: '/progressbar' },
	{ id: 14, componentName: 'RadioButton', pathName: '/radiobutton' },
	{ id: 15, componentName: 'Slider', pathName: '/slider' },
	{ id: 16, componentName: 'Spinner', pathName: '/spinner' },
	{ id: 17, componentName: 'Switch', pathName: '/switch' },
	{ id: 18, componentName: 'Table', pathName: '/table' },
	{ id: 19, componentName: 'Tabs', pathName: '/tabs' },
	{ id: 20, componentName: 'Tooltip', pathName: '/tooltip' }
];

export const getComponentName = (pathname: string): string => {
	const component = componentData.find((c) => c.pathName === pathname);
	return component ? component.componentName : '';
};

interface AccordionItem {
	id: number;
	title: string;
	content: string;
}
interface AccordionItem {
	id: number;
	title: string;
	content: string;
}

export const accordionItems: AccordionItem[] = [
	{
		id: 1,
		title: 'What is Svelte?',
		content:
			'Svelte is a component framework for building user interfaces. It is a compiler that takes your components and generates highly optimized JavaScript code to run in the browser. Svelte is designed to be simple, performant, and lightweight.'
	},
	{
		id: 2,
		title: 'What is SvelteKit?',
		content:
			'SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. It is designed to work seamlessly with Svelte components and provides features like server-side rendering, file-based routing, code-splitting, and static site generation out of the box.'
	},
	{
		id: 3,
		title: 'What are the advantages of SvelteKit?',
		content:
			'Some key advantages of SvelteKit include:\n\n1. Excellent Developer Experience: SvelteKit provides a great developer experience with features like hot module replacement, file-based routing, and built-in support for TypeScript.\n\n2. Server-Side Rendering: SvelteKit supports server-side rendering out of the box, improving initial load times and SEO.\n\n3. Static Site Generation: SvelteKit can generate static sites, making it suitable for building blogs, documentation sites, and other content-heavy websites.\n\n4. Flexible Rendering: SvelteKit allows you to choose between server-side rendering, static site generation, or client-side rendering for each page, giving you control over the rendering strategy.'
	}
];
