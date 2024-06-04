import { page } from '$app/stores';
import { derived } from 'svelte/store';
import { breadcrumbs } from './store';

export const createBreadcrumbs = (path: string) => {
	const segments = path.split('/').filter(Boolean);
	const breadcrumbPaths = segments.map((segment, index) => {
		const url = '/' + segments.slice(0, index + 1).join('/');
		return { name: segment, url };
	});
	return breadcrumbPaths;
};

export const pageStore = derived(page, ($page) => {
	breadcrumbs.set(createBreadcrumbs($page.url.pathname));
});
