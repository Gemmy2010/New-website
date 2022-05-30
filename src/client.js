import client from "@sanity/client";

export default client({
  projectId: "xvhh2esg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});
