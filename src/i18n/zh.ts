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
    ilaunch: string;
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
    ilaunch: AppEntry;
  };
}

export const zh: Translations = {
  nav: {
    home: '首页',
    arcanekey: '星枢令',
    winterFortress: '无尽冬日活动',
    lumibox: '拾光匣',
    autovolume: '网络磁盘挂载',
    autoprint: '自动打印',
    ilaunch: '启动台',
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
      desc: '星枢令是一款基于 TOTP 标准的双因素身份验证器，兼容 Gmail、GitHub、Microsoft、支付宝等所有支持 Google Authenticator 协议的平台，提供鸿蒙原生应用与微信小程序两种版本，密钥仅保存在本地设备，支持扫码添加账户、10 款主题与加密备份导出，换机也不会丢数据。',
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
      tagline: '私有相册同步与浏览，你的照片始终留在你的设备之间',
      platform: ['HarmonyOS'],
      icp: '京ICP备2026021298号-5A',
      desc: '拾光匣连接你的群晖 NAS、Immich 自建服务，将本机相册中的照片、视频和动态照片自动增量同步到你的服务端，仅传输未上传的文件并支持断点续传，可在手机上按年月日时间线流畅浏览、预览已上传的媒体，目录结构完整保留，照片数据始终由你自己掌控，并支持 HDR Vivid 预览，支持缩略图缓存可视化清理。',
      downloadLabel: '华为 AppGallery',
      features: [
        { icon: '🖥️', title: '开源相册 Immich支持', desc: '支持群晖 NAS 与 Immich（自建或云主机私有实例），流畅同步与浏览' },
        { icon: '🔄', title: '增量同步', desc: 'Delta 同步策略，仅传输未上传文件，断点续传，节省流量与时间' },
        { icon: '📅', title: '相册时间线', desc: '按年、月、日浏览服务端中的全部照片，目录结构完整保留' },
        { icon: '✨', title: 'HDR Vivid 预览', desc: '在支持的华为设备上以 HDR Vivid 渲染意图播放媒体，色彩更真实' },
        { icon: '🌅', title: '动态照片', desc: '完整支持华为动态照片的上传、同步与播放预览' },
        { icon: '📁', title: '目录结构', desc: '按本地相册目录上传，服务端与手机相册保持一致的目录树' },
        { icon: '📦', title: '缓存管理', desc: '可视化缓存占用，一键清理缩略图与预览缓存，自由掌控存储' },
        { icon: '🎯', title: '真正的「可控备份」', desc: '你可以自己决定照片备份范围，而不是让备份工具替你做决定。它把选择权还给你，这是其他工具几乎都做不到的。' },
      ],
      scenarios: '适合使用群晖 NAS 或 Immich 的华为手机用户，希望将本地相册自动备份到私有服务端，并随时在手机上流畅浏览、下载已上传内容，照片数据始终在自己掌控之中。',
    },
    winterFortress: {
      name: '无尽冬日活动',
      nameEn: 'Winter Fortress Activity',
      tagline: '游戏联盟活动报名管理小程序，五种活动类型一站搞定',
      platform: ['微信小程序'],
      desc: '专为《无尽冬日》游戏玩家打造的联盟活动报名管理小程序，支持堡垒、兵工厂、峡谷会战、国战、官职五种联盟活动的统一报名，配以四级角色权限管理，满员自动置灰防止重复报名，管理员可查看按联盟统计的报名数据，并一键截图保存到相册分享给盟友，另支持在线申请入盟审核、多分区配置与自定义报名时间段，过期数据自动清理。',
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
      name: '网络磁盘挂载',
      nameEn: 'NetDiskMount',
      tagline: '让 NAS、网盘和移动硬盘在 Mac 上一直在线——网络磁盘自动挂载与断线重连',
      platform: ['macOS'],
      version: '1.0.9',
      desc: '网络磁盘挂载（NetDiskMount）是一款 macOS 菜单栏工具，专注网络磁盘自动挂载与断线重连：让 NAS、网盘和 SMB/WebDAV/AFP/NFS 共享一次配置长期在线，休眠或切换 Wi-Fi 后静默重连，NTFS 移动硬盘也能读写，并支持自动更新、多语言界面与一键诊断导出，适合长期挂载影音媒体库。',
      downloadLabel: '下载 DMG',
      downloadUrl: 'https://github.com/mengyuefeitian/AutoVolume/releases',
      features: [
        { icon: '🔁', title: '自动重连', desc: '断网恢复、休眠唤醒、切换 Wi-Fi 后自动把网络文件夹重新挂上，不用再去 Finder 连接服务器' },
        { icon: '🗂️', title: '一次配置长期可用', desc: '服务器地址、账号、密码和挂载位置保存一次就好，之后开机即用，不必反复输入' },
        { icon: '💽', title: 'NTFS 移动硬盘读写', desc: '插上 NTFS 格式的移动硬盘自动以可读写方式挂载，突破 macOS 只能读不能写的限制' },
        { icon: '🔗', title: 'SMB / WebDAV / AFP / NFS', desc: '四种网络协议全覆盖，群晖、威联通、坚果云网盘、Linux 服务器与老款 Time Capsule 都能挂' },
        { icon: '⚡', title: 'SMB3 多通道', desc: '默认 SMB2–SMB3 自动协商、不启用不安全的 SMB1，可开启 SMB3 多通道等高级选项' },
        { icon: '🔄', title: '自动更新', desc: '每天自动检查新版本，一键安装并重新打开，升级后配置与密码全部保留' },
        { icon: '🌏', title: '多语言界面', desc: '跟随系统或手动切换中文、English、한국어、日本語、Русский，切换即时生效' },
        { icon: '🩺', title: '一键诊断导出', desc: '出问题时一键导出诊断包，压缩包里不含任何密码，账号名也会自动隐去' },
      ],
      scenarios: '适合用 Mac 长期连接群晖、威联通等 NAS 的用户与小团队，也适合 WebDAV 网盘、公司文件服务器和 NFS 影视媒体库。配置一次后常驻菜单栏静默运行，网络恢复即自动重连，密码本地加密保存、不依赖钥匙串。',
    },
    autoprint: {
      name: '自动打印',
      nameEn: 'AutoPrint',
      tagline: 'macOS 自动打印工具，监控文件夹有新文件就自动发送打印机',
      platform: ['macOS'],
      desc: '自动打印是一款 macOS 桌面应用，用于自动化本地打印工作流：把文件放入指定文件夹，应用定期扫描并发送到配置好的打印机，支持 PDF、图片与 Office 文档转换，转换工具可选 LibreOffice、Word 或 Pages，并记录每次打印的文件名与完成时间，适合 NAS 同步目录批量打印场景。',
      downloadLabel: '下载 DMG',
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
    ilaunch: {
      name: '启动台',
      nameEn: 'iLaunch',
      tagline: '把 macOS 26 拿走的 Launchpad 找回来——原生、飞快',
      platform: ['macOS'],
      desc: '启动台是一款 macOS 原生应用，找回经典 Launchpad 的全屏应用网格体验，支持文件夹分组、拼音即时搜索和手动拖拽布局，布局自动保存，默认 ⌥ Space 全局热键唤起，是 macOS 26 移除 Launchpad 后的原生替代方案，行列与图标大小均可调整，也可从 Dock 与菜单栏打开。',
      downloadLabel: '下载 DMG',
      downloadUrl: 'https://github.com/mengyuefeitian/iLaunch/releases',
      features: [
        { icon: '🖥️', title: '全屏网格', desc: '无边框 overlay，真实系统图标，行列与图标大小可调' },
        { icon: '🔍', title: '即时搜索', desc: '实时过滤，完整拼音支持，键盘导航' },
        { icon: '📁', title: '文件夹', desc: '拖拽成组，3×3 预览，放大后可直点迷你图标启动' },
        { icon: '🍎', title: 'Apple 智能成夹', desc: '系统应用自动收入「Apple」文件夹，不打乱你的布局' },
        { icon: '✋', title: '实时拖拽', desc: '瓦片自动让位，跨页移动，布局自动保存' },
        { icon: '⌨️', title: '全局热键', desc: '默认 ⌥ Space，设置中可改；菜单栏与 Dock 亦可唤起' },
      ],
      scenarios: '适合怀念经典 Launchpad 全屏应用网格、需要空间记忆和拼音搜索的 macOS 用户，是 macOS 26 移除 Launchpad 后的原生替代方案。',
    },
  },
};
