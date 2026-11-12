---
loom_kind: requirement
id: 4c8a5d31-9e2f-4b07-a6c3-7d15e8b2f904
title: 新增 isNonEmptyPlainObject 命名导出
work_items:
  - id: impl
    title: 实现 isNonEmptyPlainObject 命名导出
    deliverable: is-plain-object.js
    completion: is-plain-object.js 新增命名导出，现有导出与行为不变
    effort: 0.3
    depends_on: []
  - id: types
    title: 补充类型声明
    deliverable: is-plain-object.d.ts
    completion: d.ts 增加与 isPlainObject 同形式的 type guard 声明
    effort: 0.2
    depends_on: []
  - id: tests
    title: 新增测试用例
    deliverable: test.js
    completion: test.js 覆盖 {a:1}/{}、Object.create(null) 正反例、symbol 键、数组/函数/null/Date/Foo 反例
    effort: 0.3
    depends_on: []
  - id: readme
    title: README 用法示例
    deliverable: README.md
    completion: README 增加 API 段落与用法示例
    effort: 0.2
    depends_on: []
  - id: verify
    title: 构建与测试自检
    deliverable: dist/is-plain-object.js、dist/is-plain-object.mjs 与 npm test 结果
    completion: npm install、npm run build、npm test 全部通过，版本仍 5.1.0
    effort: 0.3
    depends_on: []
---
# 新增 isNonEmptyPlainObject 命名导出

## 目标
在 is-plain-object 包中新增命名导出 `isNonEmptyPlainObject(value)`：仅当现有 `isPlainObject(value)` 为 `true` 且该值的自身可枚举字符串键数量大于零时返回 `true`，否则返回 `false`。

## 范围与决定
- 以命名导出形式与现有 `isPlainObject` 并列；现有函数的行为、导出方式与 API 完全不变。
- 键计数按「自身可枚举字符串键」（`Object.keys` 语义），不含 symbol 键、不含继承键。
- 同步补充 TypeScript 类型声明（`is-plain-object.d.ts`）、测试用例（`test.js`）、README 用法文档。
- package.json 版本号保持 5.1.0 不变，由后续发布流程再定。
- 不引入额外依赖。

## 验收（acceptance）
- `isNonEmptyPlainObject({})` 为 `false`；`isNonEmptyPlainObject({ foo: 'bar' })` 与 `isNonEmptyPlainObject(Object.create(null))`（带自有键时）为 `true`。
- 数组、函数、`null`、`new Date()`、自定义构造函数实例等非普通对象返回 `false`。
- 仅有 symbol 键的普通对象返回 `false`。
- `isPlainObject` 现有测试全部不变且继续通过。
- 本地 `npm run build` 构建 CJS/ESM 产物成功，`npm test` 全部通过。

## 工作事实
- 当前阶段：需求共创
- 已完成：目标、行为边界、版本与自检方式已与用户确认；正式需求文档已建立
- 阻碍：无
- 剩余工作：实现、类型、测试、README；构建+测试自检
- 事实来源：仓库源码 `is-plain-object.js`、`test.js`、`package.json`（v5.1.0）；本轮问答
