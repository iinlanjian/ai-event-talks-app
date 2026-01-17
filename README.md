# AI Agent 技术交流日

这是一个为期一天的技术讲座活动网站。该网站以单页形式展示了全天的活动日程安排。

## ✨ 功能

- **活动日程展示**: 清晰地展示了所有技术讲座的时间、主题、主讲人、描述和分类。
- **分类搜索**: 用户可以根据分类（例如 "入门", "安全", "多模态"）快速筛选和查找感兴趣的讲座。
- **响应式设计**: 页面布局能够适应不同尺寸的屏幕。

## 🛠️ 技术栈

- **后端**: Node.js + Express
- **前端**: HTML, CSS, JavaScript (无框架)

## 🚀 如何在本地运行

1.  **克隆仓库**
    ```bash
    git clone https://github.com/iinlanjian/ai-event-talks-app.git
    cd ai-event-talks-app
    ```

2.  **安装依赖**
    在项目根目录下，运行以下命令来安装所有必要的依赖项：
    ```bash
    npm install
    ```

3.  **启动服务器**
    运行以下命令来启动本地开发服务器：
    ```bash
    node server.js
    ```

4.  **访问网站**
    服务器启动后，在您的浏览器中打开以下地址即可查看网站：
    [http://localhost:3000](http://localhost:3000)

## 📝 API

- `GET /api/talks`: 返回一个包含所有讲座信息的JSON数组。
