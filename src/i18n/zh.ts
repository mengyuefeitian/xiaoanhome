// src/i18n/zh.ts

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface AppEntry {
  name: string;
  nameEn: string;
  tagline: string;
  platform: readonly string[];
  desc: string;
  downloadLabel?: string;
  downloadUrl?: string;
  mpLabel?: string;
  icp?: string;
  version?: string;
  features: readonly FeatureItem[];
  scenarios: string;
}

export interface Translations {
  nav: {
    home: string;
    arcanekey: string;
    winterFortress: string;
    lumibox: string;
    autovolume: string;
    autoprint: string;
    langSwitch: string;
    langSwitchTarget: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    viewDetail: string;
    appsTitle: string;
    appsSubtitle: string;
  };
  footer: {
    icp: string;
    police: string;
    copyright: string;
    contact: string;
  };
  apps: {
    arcanekey: AppEntry;
    lumibox: AppEntry;
    winterFortress: AppEntry;
    autovolume: AppEntry;
    autoprint: AppEntry;
  };
}

export const zh: Translations = {
  nav: {
    home: '首页',
    arcanekey: '星枢令',
    winterFortress: '无尽冬日活动',
    lumibox: '拾光匣',
    autovolume: '智卷',
    autoprint: '自动打印',
    langSwitch: 'EN',
    langSwitchTarget: '/en',
  },
  home: {
    heroTitle: '小安之家',
    heroSubtitle: '小安工作室 · 独立开发者作品集',
    viewDetail: '了解详情 →',
    appsTitle: '全部应用',
    appsSubtitle: '覆盖 HarmonyOS、macOS 与微信小程序',
  },
  footer: {
    icp: '京ICP备2026021298号-3',
    police: '豫公网安备41018202001348号',
    copyright: '© 2026 小安工作室',
    contact: 'mengyuefeitian@live.cn',
  },
  apps: {
    arcanekey: {
      name: '星枢令',
      nameEn: 'ArcaneKey',
      tagline: '双平台 TOTP 身份验证器，密钥仅存本地，安全无后顾之忧',
      platform: ['HarmonyOS', '微信小程序'],
      icp: '京ICP备2026021298号-4A',
      desc: '星枢令是一款基于 TOTP 标准的双因素身份验证器，兼容 Gmail、GitHub、Microsoft、支付宝等所有支持 Google Authenticator 协议的平台。',
      downloadLabel: '华为 AppGallery',
      mpLabel: '微信小程序',
      features: [
        { icon: '🔑', title: '动态验证码', desc: 'TOTP 标准，每 30 秒刷新，倒计时环可视化，一目了然' },
        { icon: '📷', title: '扫码添加', desc: '相机扫码或相册识别二维码，一键导入账户，操作简单快捷' },
        { icon: '🎨', title: '10 款主题', desc: '海洋蓝、皇室紫、极光绿等精心设计主题，一键切换个性风格' },
        { icon: '💾', title: '数据备份', desc: '加密导出/导入，换机无忧；会员支持云端加密备份与自动同步' },
        { icon: '🔒', title: '本地优先', desc: '密钥仅存储在本地设备，不上传任何服务器，隐私完全掌握在你手中' },
        { icon: '🔍', title: '快速搜索', desc: '按品牌名或账号名实时过滤，账户再多也能秒找目标' },
      ],
      scenarios: '适用于需要管理 Google、GitHub、Microsoft、支付宝等多平台 2FA 验证码的用户。提供鸿蒙手机原生体验和微信小程序免安装两种使用方式。',
    },
    lumibox: {
      name: '拾光匣',
      nameEn: 'LumiBox',
      tagline: 'NAS 相册同步与浏览，你的照片始终留在你的设备之间',
      platform: ['HarmonyOS'],
      desc: '拾光匣连接你的群晖 NAS，将本机相册照片、视频、动态照片自动同步到 NAS，并在手机上流畅浏览、预览已上传媒体。',
      downloadLabel: '华为 AppGallery',
      features: [
        { icon: '🔄', title: '增量同步', desc: 'Delta 同步策略，仅传输未上传文件，断点续传，节省流量与时间' },
        { icon: '📅', title: '相册时间线', desc: '按年、月、日浏览 NAS 中的全部照片，目录结构完整保留' },
        { icon: '✨', title: 'HDR Vivid 预览', desc: '在支持的华为设备上以 HDR Vivid 渲染意图播放媒体，色彩更真实' },
        { icon: '🌅', title: '动态照片', desc: '完整支持华为动态照片的上传、同步与播放预览' },
        { icon: '📁', title: '目录结构', desc: '按本地相册目录上传，NAS 中与手机相册保持一致的目录树' },
        { icon: '📦', title: '缓存管理', desc: '可视化缓存占用，一键清理缩略图与预览缓存，自由掌控存储' },
      ],
      scenarios: '适合使用群晖 NAS 的华为手机用户，希望将本地相册自动备份到 NAS，并随时在手机上流畅浏览、下载已上传内容，照片数据始终在自己掌控之中。',
    },
    winterFortress: {
      name: '无尽冬日活动',
      nameEn: 'Winter Fortress Activity',
      tagline: '游戏联盟活动报名管理小程序，五种活动类型一站搞定',
      platform: ['微信小程序'],
      desc: '专为《无尽冬日》游戏玩家打造的联盟活动报名管理工具，支持堡垒、兵工厂、峡谷会战、国战、官职五种活动的统一报名与权限管理。',
      mpLabel: '微信扫码使用',
      features: [
        { icon: '🏰', title: '堡垒报名', desc: '支持自定义时间段，满员自动置灰，防止重复报名，实时展示状态' },
        { icon: '⚔️', title: '五类活动', desc: '堡垒、兵工厂、峡谷会战、国战、官职五类活动统一在一个小程序管理' },
        { icon: '👥', title: '多角色权限', desc: '普通用户、盟管、区管、超级管理员四级角色，在线申请审核一键生效' },
        { icon: '📊', title: '数据统计', desc: '管理员可查看按联盟统计的报名数据，支持截图保存到相册快速分享' },
        { icon: '🗂️', title: '分区管理', desc: '支持多分区配置，每区最多 12 个联盟，一个分区可设多名区管' },
        { icon: '🧹', title: '自动清理', desc: '定时清理过期数据和失效时间段，数据库始终保持整洁可用' },
      ],
      scenarios: '解决游戏联盟活动人工报名混乱的痛点，支持完整权限申请与审核流程，让联盟管理员从繁杂的群消息统计中解放出来。',
    },
    autovolume: {
      name: '智卷',
      nameEn: 'AutoVolume',
      tagline: 'macOS 网络卷自动挂载工具，断线静默重连，告别手动操作',
      platform: ['macOS'],
      version: '0.1.45',
      desc: '智卷是一款轻量级 macOS 菜单栏工具，自动检查并恢复网络文件服务器挂载，适合 NAS、路由器外接硬盘、公司文件服务器与 WebDAV 云盘场景。',
      downloadLabel: '下载 DMG',
      downloadUrl: 'https://github.com/mengyuefeitian/AutoVolume/releases',
      features: [
        { icon: '🔗', title: '多协议支持', desc: '支持 SMB、WebDAV、AFP、NFS 四种网络文件协议，覆盖主流 NAS 与云存储' },
        { icon: '🔄', title: '自动重连', desc: '网络中断后自动检测服务器恢复，静默重新挂载，无需手动打开 Finder' },
        { icon: '🗂️', title: '子目录挂载', desc: '支持挂载服务器内部子目录，例如 smb://nas.local/share/tools，精准挂载' },
        { icon: '🔒', title: '本地加密存储', desc: '密码保存在本地加密文件，不依赖 macOS 钥匙串，兼容性更好' },
        { icon: '🌐', title: '中英双语', desc: '支持中文和英文界面，根据系统语言自动切换，无需手动设置' },
        { icon: '📋', title: '日志查看', desc: '菜单栏右键快速查看最近 24 小时日志，排查挂载问题得心应手' },
      ],
      scenarios: '适合需要稳定连接 NAS、SMB 文件服务器或 WebDAV 云盘的 Mac 用户，设置一次后静默运行，网络恢复即自动重连，彻底告别手动挂载烦恼。',
    },
    autoprint: {
      name: '自动打印',
      nameEn: 'AutoPrint',
      tagline: 'macOS 自动打印工具，监控文件夹有新文件就自动发送打印机',
      platform: ['macOS'],
      desc: '自动打印是一款 macOS 桌面应用，用于自动化本地打印工作流。用户将文件放入指定文件夹，应用定期扫描并发送到配置的打印机，记录打印结果。',
      downloadLabel: 'GitHub 获取',
      downloadUrl: 'https://github.com/mengyuefeitian/autoprint',
      features: [
        { icon: '📁', title: '监控文件夹', desc: '指定一个或多个本地文件夹作为监控目录，新文件出现自动触发打印任务' },
        { icon: '🖨️', title: '选择打印机', desc: '列出系统全部可用打印机，为不同文件夹配置不同打印机，灵活适配场景' },
        { icon: '📄', title: '多格式支持', desc: '支持 PDF、图片以及 Office 文档（可选配置转换方式后打印）' },
        { icon: '⚙️', title: 'Office 转换', desc: '可选 LibreOffice Headless、Microsoft Word 或 Pages 进行文档转换后打印' },
        { icon: '📜', title: '打印记录', desc: '记录每次打印的文件名和完成时间，便于核查和追溯历史打印任务' },
        { icon: '🏢', title: '轻量方案', desc: '专为小型办公室、教室、家庭 NAS 打印工作流打造，部署简单持续运行' },
      ],
      scenarios: '适合需要将 NAS 同步目录或共享文件夹中的文档自动发送打印机的用户，无需手动打开每个文件，配置一次后持续自动打印，适合周期性批量打印场景。',
    },
  },
};
