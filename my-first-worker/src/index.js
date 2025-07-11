/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request) {
	  //const base = "https://keycloak.test.flexi.nesi.org.nz/realms/public/device";
	  const base = "https://iam.nesi.org.nz/realms/public/device";
	  const statusCode = 301;
  
	  const url = new URL(request.url);
	  const { pathname, search } = url;
  
	  const destinationURL = `${base}${pathname}${search}`;
	  console.log(destinationURL);
  
	  return Response.redirect(destinationURL, statusCode);
	},
  };
