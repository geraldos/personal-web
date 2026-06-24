import type { LanguageCode } from "./homeContent";

export type ExperienceContent = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  roles: Array<{
    role: string;
    period: string;
    company: string;
    location: string;
    highlights: string[];
  }>;
};

export const experienceContent: Record<LanguageCode, ExperienceContent> = {
  en: {
    eyebrow: "Experience",
    titleTop: "Built in",
    titleBottom: "production.",
    description: "A career shaped by production banking systems, internal platforms, and a sustained focus on thoughtful frontend engineering.",
    roles: [
      {
        role: "Software Engineer",
        period: "Aug 2022 — Present",
        company: "Maybank Indonesia",
        location: "South Jakarta, DKI Jakarta, Indonesia",
        highlights: [
          "Led outsourced squads for M2U Web revamp development and maintenance in a production banking environment.",
          "Built the Back Office MCM (Open API platform) from scratch using React for a production banking environment.",
          "Built Back Office RDN Offline features across frontend and backend, delivering scalable enterprise solutions.",
          "Contributed to the development and maintenance of M2U apps using Spring Boot in production.",
        ],
      },
      {
        role: "Frontend Engineer",
        period: "Nov 2020 — Aug 2022",
        company: "PT. Traders Family International",
        location: "North Jakarta, DKI Jakarta, Indonesia",
        highlights: [
          "Developed and maintained web applications for product and business teams.",
          "Collaborated across product and business teams while writing clean, maintainable code.",
        ],
      },
    ],
  },
  id: {
    eyebrow: "Pengalaman",
    titleTop: "Dibangun di",
    titleBottom: "lingkungan produksi.",
    description: "Karier yang dibentuk oleh sistem perbankan produksi, platform internal, dan fokus berkelanjutan pada frontend engineering yang matang.",
    roles: [
      {
        role: "Software Engineer",
        period: "Agu 2022 — Sekarang",
        company: "Maybank Indonesia",
        location: "Jakarta Selatan, DKI Jakarta, Indonesia",
        highlights: [
          "Memimpin squad outsourcing untuk pengembangan dan maintenance revamp M2U Web di lingkungan perbankan produksi.",
          "Membangun Back Office MCM (platform Open API) dari nol menggunakan React untuk lingkungan perbankan produksi.",
          "Membangun fitur Back Office RDN Offline di frontend dan backend untuk menghadirkan solusi enterprise yang scalable.",
          "Berkontribusi pada pengembangan dan maintenance aplikasi M2U menggunakan Spring Boot di lingkungan produksi.",
        ],
      },
      {
        role: "Frontend Engineer",
        period: "Nov 2020 — Agu 2022",
        company: "PT. Traders Family International",
        location: "Jakarta Utara, DKI Jakarta, Indonesia",
        highlights: [
          "Mengembangkan dan memelihara aplikasi web untuk kebutuhan produk dan bisnis.",
          "Berkolaborasi lintas tim produk dan bisnis sambil menulis kode yang rapi dan maintainable.",
        ],
      },
    ],
  },
  ja: {
    eyebrow: "職務経歴",
    titleTop: "本番環境で",
    titleBottom: "積み上げた経験。",
    description: "本番稼働する銀行システム、社内プラットフォーム、そしてフロントエンドエンジニアリングへの継続的な集中によって培ったキャリアです。",
    roles: [
      {
        role: "ソフトウェアエンジニア",
        period: "2022年8月 — 現在",
        company: "Maybank Indonesia",
        location: "インドネシア、ジャカルタ南部、DKI Jakarta",
        highlights: [
          "本番の銀行環境で、M2U Web のリニューアル開発・保守を担当する外部チームをリード。",
          "本番銀行環境向けに、React を使用した Back Office MCM（Open API プラットフォーム）をゼロから構築。",
          "Back Office RDN Offline のフロントエンド・バックエンド機能を開発し、スケーラブルなエンタープライズソリューションを提供。",
          "本番環境で Spring Boot を用いた M2U アプリの開発・保守に貢献。",
        ],
      },
      {
        role: "フロントエンドエンジニア",
        period: "2020年11月 — 2022年8月",
        company: "PT. Traders Family International",
        location: "インドネシア、ジャカルタ北部、DKI Jakarta",
        highlights: [
          "プロダクトチームおよびビジネスチーム向けのWebアプリケーションを開発・保守。",
          "プロダクト・ビジネスチームと連携し、クリーンで保守しやすいコードを作成。",
        ],
      },
    ],
  },
  zh: {
    eyebrow: "工作经历",
    titleTop: "在生产环境中",
    titleBottom: "沉淀的经验。",
    description: "职业经历来自生产级银行系统、内部平台，以及对高质量前端工程的持续专注。",
    roles: [
      {
        role: "软件工程师",
        period: "2022年8月 — 至今",
        company: "Maybank Indonesia",
        location: "印度尼西亚，雅加达南区，DKI Jakarta",
        highlights: [
          "领导外包团队，在生产银行环境中负责 M2U Web 改版的开发与维护。",
          "使用 React 从零构建 Back Office MCM（Open API 平台），服务于生产银行环境。",
          "构建 Back Office RDN Offline 的前端与后端功能，交付可扩展的企业级解决方案。",
          "参与使用 Spring Boot 开发与维护生产环境中的 M2U 应用。",
        ],
      },
      {
        role: "前端工程师",
        period: "2020年11月 — 2022年8月",
        company: "PT. Traders Family International",
        location: "印度尼西亚，雅加达北区，DKI Jakarta",
        highlights: [
          "为产品与业务团队开发和维护 Web 应用。",
          "与产品和业务团队协作，编写清晰且易维护的代码。",
        ],
      },
    ],
  },
};
