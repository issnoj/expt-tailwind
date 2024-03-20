type Data = {
  year: number;
  title: string;
  desc: string;
  remark?: string;
};

export const timelineSampleColumns = [
  {
    accessorKey: 'year',
    header: '年',
  },
  {
    accessorKey: 'event',
    header: '出来事',
  },
  {
    accessorKey: 'remark',
    header: '補足',
  },
];

export const timelineSampleData: Data[] = [
  {
    year: 1850,
    title: 'フーコーの実験',
    desc: '水中の光速度が空気中より遅いことが実験で示された。',
    remark: '光の波動説がほぼ確立',
  },
  {
    year: 1865,
    title: '電磁場の動力学的理論',
    desc: 'マクスウェル方程式から導かれる電磁波の速度が光速度と一致した。',
    remark: '光が電磁波の一種である可能性の示唆',
  },
  {
    year: 1888,
    title: 'ヘルツの実験',
    desc: '電磁波が反射、屈折、干渉、偏光といった光と同じ性質を持つことが分かった。',
    remark: '光が電磁波の一種であることがほぼ確実に',
  },
];
