import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			assets: "https://apps.arohan.dev/testkit",
			base: "/testkit"
		},
		prerender: {
			handleHttpError: ({ status, path, referrer }) => {
			  // This function can log errors, return a fallback, or simply ignore 404s.
			  if (status === 404) {
				// For example, return a custom response or simply allow the error.
				return { status, body: 'Page not found' };
			  }
			}
		  }
	}
};