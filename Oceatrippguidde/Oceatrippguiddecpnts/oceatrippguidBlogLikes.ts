import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'oceatrippguid_blog_likes_v1';

export async function getLikedBlogIds(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter(x => typeof x === 'string');
    }
    return [];
  } catch {
    return [];
  }
}

export async function setLikedBlogIds(ids: string[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
}

export async function toggleLikedBlogId(blogId: string): Promise<boolean> {
  const ids = await getLikedBlogIds();
  const next = ids.includes(blogId)
    ? ids.filter(id => id !== blogId)
    : [...ids, blogId];
  await setLikedBlogIds(next);
  return next.includes(blogId);
}

