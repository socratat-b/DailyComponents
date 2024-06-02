import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const componentData = [
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

componentData.forEach((component) => {
	const dir = join(__dirname, 'src', 'routes', component.pathName.substring(1));
	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true });
	}
	const filePath = join(dir, '+page.svelte');
	const content = ``; // Empty content

	writeFileSync(filePath, content, 'utf8');
});

console.log('Routes created successfully!');
