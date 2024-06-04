import { writable } from 'svelte/store';

export const isOpen = writable(true);
interface AccordionState {
	[key: number]: boolean;
}

interface Breadcrumb {
	name: string;
	url: string;
}
export const isAccordionItemOpen = writable<AccordionState>({});

export const breadcrumbs = writable<Breadcrumb[]>([]);
