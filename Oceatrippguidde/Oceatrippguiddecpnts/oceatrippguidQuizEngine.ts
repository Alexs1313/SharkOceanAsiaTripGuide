import type {OceatrippguidQuizItem} from './oceatrippguidQuizData';

export type QuizQuestion = {
  id: string;
  correctId: string;
  image: any;
  options: {id: string; title: string}[];
};

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const buildQuiz = (
  pool: OceatrippguidQuizItem[],
  count: number,
): QuizQuestion[] => {
  const shuffled = shuffle(pool);
  const picked = shuffled.slice(0, Math.min(count, shuffled.length));
  return picked.map(item => {
    const wrong = shuffle(pool.filter(p => p.id !== item.id)).slice(0, 3);
    const options = shuffle([
      {id: item.id, title: item.title},
      ...wrong.map(w => ({id: w.id, title: w.title})),
    ]);
    return {
      id: item.id,
      correctId: item.id,
      image: item.image,
      options,
    };
  });
};

export const buildQuizBatch = (
  pool: OceatrippguidQuizItem[],
  batchSize: number,
  startIndex: number,
): {questions: QuizQuestion[]; nextIndex: number} => {
  if (pool.length === 0) {
    return {questions: [], nextIndex: 0};
  }
  const safeStart = ((startIndex % pool.length) + pool.length) % pool.length;

  const picked: OceatrippguidQuizItem[] = [];
  for (let i = 0; i < Math.min(batchSize, pool.length); i += 1) {
    picked.push(pool[(safeStart + i) % pool.length]);
  }

  const questions = picked.map(item => {
    const wrong = shuffle(pool.filter(p => p.id !== item.id)).slice(0, 3);
    const options = shuffle([
      {id: item.id, title: item.title},
      ...wrong.map(w => ({id: w.id, title: w.title})),
    ]);
    return {
      id: item.id,
      correctId: item.id,
      image: item.image,
      options,
    };
  });

  return {questions, nextIndex: (safeStart + picked.length) % pool.length};
};

