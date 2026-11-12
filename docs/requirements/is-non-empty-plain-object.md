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
    status: done
    self_check: is-plain-object.js 新增命名导出 isNonEmptyPlainObject(o)：isPlainObject(o) 为真且 Object.keys(o).length > 0 时返回 true；现有 isPlainObject 函数体与导出未改动；ESM 冒烟验证行为正确（{a:1}=true、{}=false）。
  - id: types
    title: 补充类型声明
    deliverable: is-plain-object.d.ts
    completion: d.ts 增加与 isPlainObject 同形式的 type guard 声明
    effort: 0.2
    depends_on: []
    status: done
    self_check: 'is-plain-object.d.ts 新增 export function isNonEmptyPlainObject(value: unknown): value is Record<PropertyKey, unknown>，与 isPlainObject 同为 type guard 形式；原声明未改动。'
  - id: tests
    title: 新增测试用例
    deliverable: test.js
    completion: test.js 覆盖 {a:1}/{}、Object.create(null) 正反例、symbol 键、数组/函数/null/Date/Foo 反例
    effort: 0.3
    depends_on: []
    status: done
    self_check: test.js 引入 isNonEmptyPlainObject 并新增用例：{a:1}/{foo:'bar'} 为 true、{} 与空 Object.create(null) 为 false、Object.create(null) 带自有键为 true、仅 symbol 键对象为 false、数组/[]/函数/null/new Date()/new Foo() 为 false；原有 isPlainObject 用例全部保持不变，npm test 通过。
  - id: readme
    title: README 用法示例
    deliverable: README.md
    completion: README 增加 API 段落与用法示例
    effort: 0.2
    depends_on: []
    status: done
    self_check: README.md 新增 isNonEmptyPlainObject 导入示例、API 段落与正反例代码块；现有 isPlainObject 文档保持不变。
  - id: verify
    title: 构建与测试自检
    deliverable: dist/is-plain-object.js、dist/is-plain-object.mjs 与 npm test 结果
    completion: npm install、npm run build、npm test 全部通过，版本仍 5.1.0
    effort: 0.3
    depends_on: []
    status: done
    self_check: is-plain-object.js 新增命名导出 isNonEmptyPlainObject（isPlainObject 为真且 Object.keys 长度>0），现有 isPlainObject 行为与导出未改；is-plain-object.d.ts 增加同形式 type guard；test.js 覆盖 {a:1}/{}、Object.create(null) 正反例、symbol-only、数组/函数/null/Date/Foo 反例且原有用例未改；README 增加 API 与示例。npm install --cache /tmp/.npm-cache-loom（默认缓存 root 属主报 EPERM，属环境问题，改用临时缓存成功）、npm run build 生成 dist CJS/ESM、npm test 通过（exit 0）；另用 node ESM 冒烟验证导出行为正确。版本保持 5.1.0，未改 package.json 依赖。
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
