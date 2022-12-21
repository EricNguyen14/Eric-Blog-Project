export function mappingPost(post) {
  return {
    id: post.id,
    authorAvatar: post?.author_data?.avatar,
    authorName: post?.author_data?.nickname,
    thumb: post?.featured_media_url,
    title: post?.title?.rendered,
    date: post?.modified,
    desc: post?.excerpt,
    slug: post?.slug,
    categories: post?.categories,
    authorId: post?.author,
    content: post?.content.rendered,
  };
}

export function mappingMenu(menu) {
  let childItems = [];
  if (menu.child_items) {
    childItems = menu.child_items.map(mappingMenu);
  }
  return {
    id: menu?.ID,
    childItems: childItems,
    title: menu?.title,
    link: menu?.url,
  };
}
