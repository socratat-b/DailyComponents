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
