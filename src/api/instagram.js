const fetch = require("node-fetch").default;

const url =
  "https://www.instagram.com/graphql/query/?query_hash=396983faee97f4b49ccbe105b4daf7a0&variables=" +
  encodeURIComponent(
    '{"id":"36560492","first":12,"after":"QVFES2Y4WTZyTnI5c0Y2YjBTWEhmRXhmN3hnVDBDbjdwX1FWQnQyWHp4bU9hQ04zaFNNQXZRNHRUV0V0dlFQQVRja1V1b3VLSGkwbVVWTVRCSWJiZVcwYQ=="}'
  );

const cache = {
  lastFetch: 0,
  posts: [],
};

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    biggie: edge.node.thumbnail_src,
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption:
      edge.node.edge_media_to_caption.edges.length > 0
        ? edge.node.edge_media_to_caption.edges[0].node.text
        : "",
    id: edge.node.id,
  }));
}
async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }
  const data = await fetch(url).then((res) => res.json());
  const posts = slimUpPosts(data);
  // const posts = data;
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return posts;
}

module.exports = async function handler(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
};
