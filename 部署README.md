# 🚀 AI-Global 推广系统 - 快速部署指南

> 最后更新：2024-11-21

## 📖 简介

这是一个完整的AI+自媒体创业推广系统，支持：
- ✅ 多语言（繁中/简中/英文）
- ✅ 动态推广代码（根据 ref 参数发送到不同邮箱）
- ✅ 动态评估地点（根据国家显示不同活动场次）
- ✅ Google Sheet 数据存储
- ✅ 自动邮件通知

---

## 🎯 三种部署方式

### 方式 1：使用配置向导（推荐）⭐

**最简单、最直观的方式！**

1. 在浏览器中打开 `config-wizard.html`
2. 按照步骤填写配置信息
3. 复制生成的代码到相应文件
4. 运行部署命令

**优点：**
- 图形界面，直观易用
- 自动生成所有配置代码
- 不会出错

---

### 方式 2：使用快速部署脚本

**如果您已经配置好所有文件，只需要推送到 GitHub：**

双击运行 `快速部署脚本.bat`，脚本会自动：
1. 检查 Git 状态
2. 添加所有更改
3. 提交更改
4. 推送到 GitHub

---

### 方式 3：手动部署

**如果您喜欢完全控制每一步：**

参考 `完整部署指南.md` 或 `部署检查清单.md`

---

## 📋 部署前检查清单

### Google Sheet（必须完成）
- [ ] 已创建 Google Sheet
- [ ] 已添加 3 个页签：
  - [ ] **推广人员**（推广代码、邮箱、姓名）
  - [ ] **客户报名记录**（时间戳记、姓名、邮件等）
  - [ ] **评估地点**（ID、国家、地点描述、是否启用）
- [ ] 已复制 Sheet ID

### Google Apps Script（必须完成）
- [ ] 已在 Sheet 中打开 Apps Script
- [ ] 已粘贴 `google-apps-script-updated.js` 代码
- [ ] 已修改 SPREADSHEET_ID（第 22 行）
- [ ] 已修改 DEFAULT_EMAIL（第 24 行）
- [ ] 已保存代码
- [ ] 已部署为「网页应用程序」
- [ ] 已授权（允许存取权限）
- [ ] 已复制部署 URL

### 网站配置（必须完成）
- [ ] 已更新 script.js 的 GOOGLE_SCRIPT_URL（第 326 行）

---

## 🛠️ 详细步骤

### 第一步：创建 Google Sheet

1. 前往：https://sheets.google.com
2. 创建新的 Sheet，命名为「AI-Global-推广系统」
3. 创建 3 个页签（详见 `部署检查清单.md`）
4. 复制 Sheet ID

### 第二步：部署 Google Apps Script

1. 在 Sheet 中：**扩展功能** → **Apps Script**
2. 复制 `google-apps-script-updated.js` 的内容
3. 粘贴到 Apps Script 编辑器
4. 修改第 22 行和第 24 行的配置
5. 保存
6. **部署** → **新增部署作业** → **网页应用程序**
7. 设置：
   - 执行身份：**我**
   - 存取权限：**所有人**
8. 授权并复制 URL

### 第三步：更新网站配置

打开 `script.js`，找到第 326 行：

```javascript
const GOOGLE_SCRIPT_URL = '你的Apps_Script_URL';
```

替换为刚才复制的 URL。

### 第四步：推送到 GitHub

**选项 A：使用快速部署脚本**
```
双击运行：快速部署脚本.bat
```

**选项 B：手动执行**
```bash
git add .
git commit -m "Update configuration for deployment"
git push origin master
```

### 第五步：等待并测试

1. 等待 1-3 分钟（GitHub Pages 更新时间）
2. 访问：https://ifittw01-ai.github.io/Love/
3. 测试功能（可使用 `test-connection.html`）

---

## 🧪 测试工具

### test-connection.html

一个完整的测试页面，可以测试：
- ✅ Google Apps Script 连接
- ✅ 获取台湾评估地点
- ✅ 获取马来西亚评估地点
- ✅ 表单提交功能

**使用方法：**
1. 在浏览器中打开 `test-connection.html`
2. 点击各个测试按钮
3. 查看测试结果

---

## 📂 文件说明

### 核心文件
- `index.html` - 主页面
- `script.js` - 前端逻辑（需要配置 GOOGLE_SCRIPT_URL）
- `styles.css` - 样式
- `translations.js` - 多语言翻译
- `google-apps-script-updated.js` - 后端脚本（需要配置 SPREADSHEET_ID 和 DEFAULT_EMAIL）

### 部署工具
- `config-wizard.html` - 配置向导（推荐使用）
- `快速部署脚本.bat` - 一键部署脚本
- `test-connection.html` - 连接测试工具

### 文档
- `部署README.md` - 本文件
- `完整部署指南.md` - 详细部署说明
- `部署检查清单.md` - 部署检查清单
- `Google-Sheet-最终结构说明.md` - Sheet 结构说明
- `问题排查指南.md` - 常见问题解决

---

## 🆘 常见问题

### Q1: 提交表单后没有反应？

**检查步骤：**
1. 按 F12 打开控制台，查看错误信息
2. 确认 GOOGLE_SCRIPT_URL 是否正确
3. 确认 Apps Script 是否正确部署
4. 使用 `test-connection.html` 测试连接

### Q2: 评估地区没有选项？

**检查步骤：**
1. 确认「评估地点」页签有数据
2. 确认「国家」列填写 `TW` 或 `MY`（大写）
3. 确认「是否启用」列填写 `是` 或留空
4. 使用 `test-connection.html` 测试地点加载

### Q3: 没有收到邮件？

**检查步骤：**
1. 检查垃圾邮件文件夹
2. 确认「推广人员」页签中的邮箱正确
3. 确认 DEFAULT_EMAIL 配置正确
4. 查看 Apps Script 执行记录

### Q4: GitHub Pages 没有更新？

**解决方法：**
1. 等待 2-5 分钟
2. 按 Ctrl+F5 强制刷新
3. 清除浏览器缓存
4. 检查 GitHub Actions 是否有错误

---

## 🌐 访问链接

### 主网站
```
https://ifittw01-ai.github.io/Love/
```

### 带推广代码
```
https://ifittw01-ai.github.io/Love/?ref=001
https://ifittw01-ai.github.io/Love/?ref=jordantsai777
```

---

## 📊 系统架构

```
用户填写表单
    ↓
GitHub Pages 网站（index.html + script.js）
    ↓
Google Apps Script（处理逻辑）
    ↓
Google Sheet（存储数据）
    ↓
Gmail（发送邮件通知）
```

---

## 🎉 部署成功后

您可以：
1. ✅ 在「推广人员」页签中添加更多推广员
2. ✅ 在「评估地点」页签中添加/修改活动场次
3. ✅ 在「客户报名记录」页签中查看客户数据
4. ✅ 分享推广链接给推广员
5. ✅ 导出客户数据为 Excel

---

## 💡 专业建议

1. **定期备份 Google Sheet**
   - 文件 → 建立副本

2. **监控邮件配额**
   - Google 免费账号每天有发信限制（约 100 封）

3. **测试推广链接**
   - 确保每个推广代码都对应正确的邮箱

4. **更新活动信息**
   - 及时在「评估地点」中更新场次信息

---

## 📞 技术支持

如果遇到问题：
1. 查看 `问题排查指南.md`
2. 使用 `test-connection.html` 诊断
3. 检查 Apps Script 执行记录
4. 查看浏览器控制台错误

---

**祝您部署成功！🎉**

