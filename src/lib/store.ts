import { writable } from 'svelte/store';

export const isOpen = writable(true);
interface AccordionState {
	[key: number]: boolean;
}
export const isAccordionItemOpen = writable<AccordionState>({});
