import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'oceatrippguid_favorites_v1';

export async function getFavoritePlaceIds(): Promise<string[]> {
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

export async function setFavoritePlaceIds(ids: string[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
}

export async function isPlaceFavorite(placeId: string): Promise<boolean> {
  const ids = await getFavoritePlaceIds();
  return ids.includes(placeId);
}

export async function toggleFavoritePlace(placeId: string): Promise<boolean> {
  const ids = await getFavoritePlaceIds();
  const next = ids.includes(placeId)
    ? ids.filter(id => id !== placeId)
    : [...ids, placeId];
  await setFavoritePlaceIds(next);
  return next.includes(placeId);
}

