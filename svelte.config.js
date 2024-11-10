import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: undefined,
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	}
};

export default config;