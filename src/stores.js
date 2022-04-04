import { writable } from 'svelte/store';

export let TaskStore = writable([])
export let incrementId = writable([])

