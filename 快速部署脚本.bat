@echo off
chcp 65001 >nul
echo ========================================
echo    AI-Global 快速部署脚本
echo ========================================
echo.

echo [步骤 1/4] 检查 Git 状态...
git status
echo.

echo [步骤 2/4] 添加所有更改...
git add .
echo ✅ 已添加所有文件
echo.

echo [步骤 3/4] 提交更改...
set /p commit_message="请输入提交信息（直接回车使用默认信息）: "
if "%commit_message%"=="" (
    set commit_message=Update configuration and deploy
)
git commit -m "%commit_message%"
echo ✅ 已提交更改
echo.

echo [步骤 4/4] 推送到 GitHub...
git push origin main
echo.

if %errorlevel% == 0 (
    echo ========================================
    echo    ✅ 部署成功！
    echo ========================================
    echo.
    echo 🌐 GitHub Pages 正在更新中...
    echo 📍 预计 1-3 分钟后可访问
    echo.
    echo 🔗 网站地址：
    echo    https://ifittw01-ai.github.io/Love/
    echo.
    echo 💡 提示：按 Ctrl+F5 强制刷新页面
    echo ========================================
) else (
    echo ========================================
    echo    ❌ 部署失败
    echo ========================================
    echo.
    echo 请检查：
    echo 1. 网络连接是否正常
    echo 2. Git 权限是否配置正确
    echo 3. 是否有未解决的冲突
    echo.
)

echo.
pause

