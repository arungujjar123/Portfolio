import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "t9sys8qd";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";
const token = import.meta.env.VITE_SANITY_READ_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !token, // CDN okay for public data; disable when using token/private dataset
  token,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
