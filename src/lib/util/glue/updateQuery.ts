import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import type { Page } from '@sveltejs/kit';

interface IUpdateQuery {
	key: string;
	value: string | null;
	$page: Page;
}

const updateQuery = ({ key = 'query', value = null, $page }: IUpdateQuery) => {
	if (browser) {
		const newSearchParams = new URLSearchParams($page?.url?.searchParams);
		console.log('key, value, $page', key, value, $page);
		if (value && value?.length > 0) {
			newSearchParams?.set(key, value);
			goto(`?${newSearchParams.toString()}`, {
				keepFocus: true
			});
		} else {
			newSearchParams?.delete(key);
			goto(`?${newSearchParams.toString()}`, {
				keepFocus: true
			});
		}
	}
};

export default updateQuery;