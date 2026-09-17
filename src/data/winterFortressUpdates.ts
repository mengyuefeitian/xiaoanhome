// src/data/winterFortressUpdates.ts
// 无尽冬日活动小程序 · 版本更新说明目录
// 新增版本时，在这里追加一条记录即可自动出现在左侧版本列表中。

export interface UpdateVersion {
  version: string;
  slug: string;
  date: string;
  title: string;
  summary: string;
}

export const winterFortressUpdates: UpdateVersion[] = [
  {
    version: 'V1.7.0',
    slug: 'v1-7-0',
    date: '2026-09-17',
    title: '联盟活跃',
    summary: '区管 / 盟管控制台新增「联盟活跃」模块，登记联盟成员每日活跃情况，一周数据一目了然，还能保存截图分享到群里。',
  },
];
