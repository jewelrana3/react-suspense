import waperFetch from "../utils/waperFetch";

export default function fetchPost(url) {
  const response = fetch(url).then((res) => res.json());
  return waperFetch(response);
}
