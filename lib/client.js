import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: "0wewglb1",
    dataset: "production",
    apiVersion: "2022-07-19",
    useCdn: true,
    token: "skqcvso9i9xMbtTMhVMFSXdL44P0rtZLLNPUvo00jpps1Xy4KdN2aFWsjpgU7CQB3R6wZpsSJTjCzdfC8UQ145bQ6ck3uDIcFiebGHFcMYOJGfKSfxbylMRqzPDSTN0mEEylUsKlXt0MPXKwUvX3OVftcytgPRpoBkC4q1hm5jXXZ5zM9cgM"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)