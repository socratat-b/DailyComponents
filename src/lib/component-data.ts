// place files you want to import through the `$lib` alias in this folder.
interface Components {
	id: number;
	componentName: string;
	pathName: string;
}

export const componentData: Components[] = [
	{ id: 1, componentName: 'Dropdown', pathName: '/dropdown' },
	{ id: 2, componentName: 'Button', pathName: '/button' },
	{ id: 3, componentName: 'Modal', pathName: '/modal' },
	{ id: 4, componentName: 'Table', pathName: '/table' },
	{ id: 5, componentName: 'Card', pathName: '/card' },
	{ id: 6, componentName: 'Form', pathName: '/form' },
	{ id: 7, componentName: 'Tabs', pathName: '/tabs' },
	{ id: 8, componentName: 'Accordion', pathName: '/accordion' },
	{ id: 9, componentName: 'Tooltip', pathName: '/tooltip' },
	{ id: 10, componentName: 'Spinner', pathName: '/spinner' },
	{ id: 11, componentName: 'Alert', pathName: '/alert' },
	{ id: 12, componentName: 'Breadcrumb', pathName: '/breadcrumb' },
	{ id: 13, componentName: 'Navbar', pathName: '/navbar' },
	{ id: 14, componentName: 'Pagination', pathName: '/pagination' },
	{ id: 15, componentName: 'Slider', pathName: '/slider' },
	{ id: 16, componentName: 'Datepicker', pathName: '/datepicker' },
	{ id: 17, componentName: 'ProgressBar', pathName: '/progressbar' },
	{ id: 18, componentName: 'Checkbox', pathName: '/checkbox' },
	{ id: 19, componentName: 'RadioButton', pathName: '/radiobutton' },
	{ id: 20, componentName: 'Switch', pathName: '/switch' }
];

export const getComponentName = (pathname: string): string => {
	const component = componentData.find((c) => c.pathName === pathname);
	return component ? component.componentName : '';
};
