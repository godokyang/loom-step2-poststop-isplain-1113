---
shared_work:
  - id: planning-non-empty-plain-object
    title: isNonEmptyPlainObject 需求共创与规划
    deliverable: docs/requirements/is-non-empty-plain-object.md 与 .loom/version-plan.md
    completion: 用户已确认目标、行为边界、版本与自检方式，正式需求文档 docs/requirements/is-non-empty-plain-object.md 与版本计划已建立
    effort: 1
    kind: planning
    depends_on: []
    expected_seconds: 900
    status: done
    self_check: '需求文档 docs/requirements/is-non-empty-plain-object.md 含 loom_kind: requirement、固定 ID 4c8a5d31-9e2f-4b07-a6c3-7d15e8b2f904、范围与验收条件完整；.loom/version-plan.md 已写入该需求 scope/effort 及 planning/validation 两项公共工作；总结已获用户确认（digest dad77bcc…）。'
  - id: validation-build-test
    title: 版本独立验收：构建与测试
    deliverable: 可运行的 dist CJS/ESM 产物与通过测试的证明
    completion: npm install、npm run build 生成 dist 产物，npm test 全部通过且 isPlainObject 原有用例不变
    effort: 1
    kind: validation
    depends_on:
      - planning-non-empty-plain-object
    expected_seconds: 600
requirements:
  - requirement_id: 4c8a5d31-9e2f-4b07-a6c3-7d15e8b2f904
    scope: 新增命名导出 isNonEmptyPlainObject：仅当 isPlainObject 为真且自身可枚举字符串键数量大于零时返回 true；现有 isPlainObject 行为与导出不变；同步补类型声明、测试和 README；版本号保持 5.1.0；本地构建并跑 npm test 通过。
    effort: 1
    expected_seconds: 1200
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
