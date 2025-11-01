export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  description,
  slug, 
  mainImage, 
  publishedAt,
  categories[]->{
    _id,
    title,
    slug
  }
}`;

export const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
