import { redirect } from "@sveltejs/kit";
import { ROUTES } from "$lib/links";

export const load = () => {
  redirect(308, ROUTES.privacy);
};
