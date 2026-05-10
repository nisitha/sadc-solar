import wpData from "@/data/wp-data.json";

export async function getPosts() {
  return wpData.allPosts;
}

export async function getProducts() {
  return wpData.products.sort((a: any, b: any) => {
    if (a.menu_order !== b.menu_order) return a.menu_order - b.menu_order;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getSolutions() {
  return wpData.solutions.sort((a: any, b: any) => {
    if (a.menu_order !== b.menu_order) return a.menu_order - b.menu_order;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPages() {
  return wpData.pages;
}

export async function getNews() {
  return wpData.news.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getMenus() {
  return wpData.menus;
}

export async function getPostBySlug(slug: string) {
  return wpData.allPosts.find((p: any) => p.slug === slug) || 
         wpData.pages.find((p: any) => p.slug === slug);
}

export async function getProductsByCategory(category: string) {
  const normalizedCategory = category.toLowerCase().replace(/-/g, " ");
  return wpData.products
    .filter((p: any) => p.categories.some((c: string) => {
      const normalizedC = c.toLowerCase().replace(/-/g, " ");
      return normalizedC === normalizedCategory || normalizedC.includes(normalizedCategory);
    }))
    .sort((a: any, b: any) => {
      if (a.menu_order !== b.menu_order) return a.menu_order - b.menu_order;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
