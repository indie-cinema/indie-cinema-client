export type ZIndex = typeof zIndex;

export const zIndex = {
  component1: { value: 10 },
  component2: { value: 20 },
  component3: { value: 30 },
  page1: { value: 100 },
  page2: { value: 200 },
  page3: { value: 300 },
  global1: { value: 1000 },
  global2: { value: 2000 },
  global3: { value: 3000 },
} as const;
