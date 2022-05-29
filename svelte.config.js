import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
	        $lib: path.resolve("./src/lib"),
          $components: path.resolve("./src/components"),
          $animations: path.resolve("./src/animations"),
        }
      }
    },
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
