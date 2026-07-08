# RuyiBigScreen｜如意数据大屏

RuyiBigScreen 是一个教学型数据可视化大屏项目，使用 Vue 3、TypeScript 和 ECharts 演示一个完整前端大屏从本地数据集解析、页面布局、状态管理到自动化验证的基本工程结构。

## 项目简介

本项目面向前端初学者、数据可视化学习者和 AI 辅助编程课堂案例。它当前保持纯前端实现，默认使用仓库内 `data/` 目录下的 TSAR 数据集驱动页面，适合用来学习数据大屏的页面拆分、图表封装、数据服务分层和工程化验证流程。

项目不是已经接入真实后端的生产系统，而是一个可继续扩展的教学样例：现在可以通过本地数据集运行，后续也可以平滑切换到 API 数据源。

## 项目预览

- 页面标题：`如意数据大屏 RuyiBigScreen`
- 核心指标：`纳管主机数`、`平均 CPU 使用率`、`内存已用总量`、`最近磁盘时延`
- 截图输出：`docs/screenshots/dashboard-1920x1080.png`

> 运行 `npm run screenshot` 后可生成 README 和课程资料复用的 1920x1080 展示图。

## 核心特性

- 16:9 风格的数据大屏布局，适合课堂演示和项目截图
- Vue 3 + TypeScript 组织页面、组件、图表和服务层
- ECharts 封装访问趋势、分类占比、城市排名、雷达模型和中心态势总览
- Pinia 管理 dashboard 数据加载和页面状态
- 默认使用本地 TSAR 数据集驱动页面
- Axios API 通道已预留，可通过环境变量切换数据源
- Vitest 覆盖工具函数和 dashboard service 基础行为
- Playwright 覆盖首页可见性、实时刷新和控制台错误检查
- ESLint、Prettier、Stylelint 保持代码风格和质量约束
- 自动化截图脚本生成 README 与课程资料可复用的展示图

## 技术栈

- 前端框架：Vue 3、Vite、TypeScript
- 图表渲染：ECharts
- 状态管理：Pinia
- 数据访问：Axios、service 分层
- 本地数据：`data/pref_tsar.dat`、`data/disk_tsar.dat`、`data/host_detail.dat`、`data/mod_detail.dat`
- mock 支撑：MSW、本地回退数据与实时模拟器
- 单元测试：Vitest、Vue Test Utils
- E2E 与截图：Playwright
- 代码质量：ESLint、Prettier、Stylelint

## 页面内容

- 顶部标题与当前时间：展示“如意数据大屏 RuyiBigScreen”和实时钟表
- 核心指标卡片：纳管主机数、平均 CPU 使用率、内存已用总量、最近磁盘时延
- 网络吞吐趋势：展示 `net_in` 与 `net_out` 的时间窗口变化
- 机房分布占比：展示不同机房的主机数量分布
- 机房态势总览：展示监控中枢与各机房节点关系
- 高负载主机排名：展示最新快照下 CPU 使用率最高的主机
- 资源健康雷达：展示 CPU、内存、网络、磁盘等综合评分
- 实时动态与告警：展示高负载主机和磁盘时延窗口生成的动态播报

## 本地数据集

当前项目默认使用仓库内 `data/` 目录的数据文件。页面进入时会加载一次 dashboard 数据：

- `pref_tsar.dat`：提供 CPU、内存、网络、负载等主机性能时序
- `disk_tsar.dat`：提供磁盘读写、利用率、时延等事件流
- `host_detail.dat`：提供主机名、机型、机房位置等静态信息
- `mod_detail.dat`：提供磁盘指标字典与标签说明

这些内容都来自本地数据集，不代表真实在线生产系统。

## 项目结构

```text
src/
  app/                   # 应用入口与全局样式
  charts/                # ECharts 图表组件
  components/            # 通用 UI 组件
  layouts/               # 大屏布局
  logs/                  # 日志封装
  mocks/                 # mock 数据与 MSW handler
  services/              # 数据访问与数据源切换
  stores/                # Pinia store
  tests/                 # 单元测试与 E2E 测试
  types/                 # TypeScript 类型
  utils/                 # 工具函数
data/
  *.dat                  # 本地 TSAR 数据集
docs/
  screenshots/           # README 和课程资料使用的项目截图
scripts/
  capture-dashboard.mjs
```

## 快速开始

环境要求：

- Node.js 版本满足当前依赖要求
- 首次运行 Playwright 前，请先安装浏览器依赖：`npx playwright install`

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

浏览器访问：

```text
http://127.0.0.1:10001/
```

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run test
npm run test:e2e
npm run screenshot
npm run screenshot:dashboard
```

## 数据源说明

项目默认使用本地数据集。`dataset` 模式下，`dashboardService` 会直接解析 `data/*.dat` 并聚合为页面需要的统一 `DashboardPayload`。

- 页面组件只通过 `src/services/dashboardService.ts` 获取数据，不直接读取数据文件
- 如果后续需要接入真实 API，可以设置：

```bash
VITE_DATA_SOURCE=api
VITE_API_BASE_URL=https://your-api.example.com
```

在 API 模式下，服务层会通过 Axios 访问预留接口 `/dashboard`。当前仓库没有附带真实后端服务。

## 自动化截图

项目提供 Playwright 截图脚本，用于生成固定尺寸的大屏展示图。

先启动开发服务：

```bash
npm run dev
```

再执行截图：

```bash
npm run screenshot
```

默认访问地址：

```text
http://127.0.0.1:10001/
```

默认输出文件：

```text
docs/screenshots/dashboard-1920x1080.png
```

截图视口为 `1920x1080`。脚本会等待标题、指标卡片和中心态势总览渲染完成；如果浏览器 console 出现 `error`，截图会保留，但命令会失败并打印错误列表。

## 测试与质量保障

项目包含以下验证手段：

- TypeScript 构建检查
- ESLint 检查 TypeScript 与 Vue 代码
- Stylelint 检查样式
- Vitest 单元测试
- Playwright E2E 测试
- Playwright 自动化截图
- Vite 生产构建验证

推荐在提交前运行：

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

## 适合学习什么

- Vue 3 项目结构和组件拆分
- 数据大屏 16:9 布局与响应式约束
- ECharts 图表封装和 resize 处理
- mock 数据、service 层和 API 切换设计
- Pinia 状态管理与页面数据加载
- TypeScript 类型建模
- Vitest 单元测试和 Playwright E2E 测试
- 自动化截图在 README、课程资料和视觉验收中的用法
- ESLint、Prettier、Stylelint 等前端工程规范

## 后续计划

- 接入真实 API 示例
- 增加更多教学场景图表组件
- 增加主题切换能力
- 增加实时数据模拟和视觉回归测试示例
- 补充部署到静态站点平台的示例流程

## License

本项目使用 MIT License，详见 [LICENSE](./LICENSE)。
