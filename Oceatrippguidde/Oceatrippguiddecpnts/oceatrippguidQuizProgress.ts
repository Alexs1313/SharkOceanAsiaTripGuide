import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'oceatrippguid_quiz_cursor_v1';

export async function getQuizCursor(): Promise<number> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return 0;
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
}

export async function setQuizCursor(next: number): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, String(next));
}

