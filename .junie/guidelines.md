# 考試練習網站 - 專案開發規範

## 📋 專案概述
- **專案名稱**: 考試練習網站
- **技術堆疊**: 純 HTML + CSS + Vanilla JavaScript（不使用任何框架）
- **架構**: 單一 HTML 檔案，內嵌 CSS 和 JavaScript
- **目標**: 建立簡潔、高效、易維護的考試練習系統

---

## 🎨 視覺設計規範

### 配色方案

#### 主色調
- **主綠色**: `#00C851` - 主要品牌色，用於按鈕、重點標示
- **深綠色**: `#00A843` - 懸停狀態、深度層次
- **淺綠色**: `#E8F5E8` - 背景色、輕微強調

#### 輔助色調
- **純白色**: `#FFFFFF` - 主要背景色
- **淺灰色**: `#F8F9FA` - 次要背景色
- **中性灰**: `#6C757D` - 輔助文字
- **深灰色**: `#343A40` - 主要文字色
- **黑色**: `#000000` - 強調文字、標題

#### 狀態色彩
- **成功色**: `#28A745` - 正確答案、成功狀態
- **錯誤色**: `#DC3545` - 錯誤答案、警告狀態
- **警告色**: `#FFC107` - 提醒、注意事項
- **資訊色**: `#17A2B8` - 一般資訊、提示

### 字體規範

#### 字體族
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
```

#### 字體大小階層
- **超大標題 (h1)**: `2.5rem` (40px) - 頁面主標題
- **大標題 (h2)**: `2rem` (32px) - 區塊標題
- **中標題 (h3)**: `1.5rem` (24px) - 子標題
- **小標題 (h4)**: `1.25rem` (20px) - 次級標題
- **正文**: `1rem` (16px) - 一般內容
- **小文字**: `0.875rem` (14px) - 輔助說明
- **超小文字**: `0.75rem` (12px) - 細節資訊

#### 字重規範
- **極粗**: `900` - 超重要標題
- **粗體**: `700` - 重要標題、按鈕文字
- **中粗**: `600` - 次要標題
- **一般**: `400` - 正文內容
- **細體**: `300` - 輔助文字

### 間距系統

#### 基礎間距單位
- **基礎單位**: `8px`
- **微小間距**: `4px` (0.5倍)
- **小間距**: `8px` (1倍)
- **中間距**: `16px` (2倍)
- **大間距**: `24px` (3倍)
- **超大間距**: `32px` (4倍)
- **特大間距**: `48px` (6倍)

#### 組件間距規範
- **按鈕內邊距**: `12px 24px`
- **卡片內邊距**: `24px`
- **容器邊距**: `16px` (手機), `32px` (桌面)
- **行間距**: `1.6` (相對單位)

### 圓角與陰影

#### 圓角規範
- **微小圓角**: `4px` - 小按鈕、標籤
- **標準圓角**: `8px` - 一般按鈕、輸入框
- **大圓角**: `12px` - 卡片、容器
- **超大圓角**: `16px` - 特殊容器
- **圓形**: `50%` - 頭像、圓形按鈕

#### 陰影系統
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
```

### 響應式斷點
- **手機**: `< 768px`
- **平板**: `768px - 1024px`
- **桌面**: `> 1024px`
- **大螢幕**: `> 1440px`

---

## 🏗️ 程式碼架構規範

### HTML 結構規範

#### 基礎結構
```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>考試練習網站</title>
    <style>/* CSS 代碼 */</style>
</head>
<body>
    <!-- 主要內容 -->
    <script>/* JavaScript 代碼 */</script>
</body>
</html>
```

#### 命名規範
- **ID 命名**: 使用 camelCase，具體描述功能
  ```html
  <div id="questionContainer"></div>
  <button id="submitAnswerBtn"></button>
  ```

- **Class 命名**: 使用 kebab-case，語義化命名
  ```html
  <div class="question-card"></div>
  <button class="btn-primary"></button>
  ```

- **語義化標籤**: 優先使用 HTML5 語義化標籤
  ```html
  <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
  ```

### CSS 撰寫規範

#### CSS 組織結構
```css
/* 1. CSS Reset & Base */
/* 2. CSS Variables */
/* 3. Typography */
/* 4. Layout Components */
/* 5. UI Components */
/* 6. Utility Classes */
/* 7. Responsive Design */
/* 8. Animations */
```

#### CSS Variables 定義
```css
:root {
  /* Colors */
  --color-primary: #00C851;
  --color-primary-dark: #00A843;
  --color-primary-light: #E8F5E8;
  --color-white: #FFFFFF;
  --color-gray-50: #F8F9FA;
  --color-gray-600: #6C757D;
  --color-gray-900: #343A40;
  --color-black: #000000;

  /* Success, Error, Warning, Info */
  --color-success: #28A745;
  --color-error: #DC3545;
  --color-warning: #FFC107;
  --color-info: #17A2B8;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 50%;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.5rem;
}
```

#### CSS 撰寫風格
```css
/* 選擇器命名使用 BEM 方法論的簡化版 */
.component-name {} /* 組件 */
.component-name__element {} /* 元素 */
.component-name--modifier {} /* 修飾符 */

/* 屬性排序規則 */
.example {
  /* 1. 定位 */
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  /* 2. 盒模型 */
  display: flex;
  width: 100%;
  height: auto;
  margin: 0;
  padding: var(--spacing-md);

  /* 3. 邊框 */
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);

  /* 4. 背景 */
  background-color: var(--color-white);

  /* 5. 文字 */
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--color-gray-900);
  text-align: center;

  /* 6. 其他 */
  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s ease;
}
```

### JavaScript 撰寫規範

#### 程式碼組織結構
```javascript
// 1. 常數定義
// 2. 全域變數
// 3. DOM 元素引用
// 4. 工具函數
// 5. 主要功能函數
// 6. 事件監聽器
// 7. 初始化函數
```

#### 命名規範
- **變數/函數**: camelCase
- **常數**: UPPER_SNAKE_CASE
- **類別**: PascalCase
- **私有變數**: 以 `_` 開頭

```javascript
// 常數
const MAX_QUESTIONS = 10;
const API_ENDPOINTS = {
  QUESTIONS: '/api/questions',
  SUBMIT: '/api/submit'
};

// 變數
let currentQuestionIndex = 0;
let userAnswers = [];
let _privateVariable = null;

// 函數
function loadQuestion(questionId) {}
function calculateScore() {}
function _privateHelper() {}

// 類別
class QuizManager {}
```

#### 函數撰寫規範
```javascript
/**
 * 載入指定的題目
 * @param {number} questionIndex - 題目索引
 * @returns {Object|null} 題目物件或 null
 */
function loadQuestion(questionIndex) {
  // 參數驗證
  if (typeof questionIndex !== 'number' || questionIndex < 0) {
    console.error('Invalid question index:', questionIndex);
    return null;
  }

  // 邊界檢查
  if (questionIndex >= questions.length) {
    console.warn('Question index out of bounds');
    return null;
  }

  // 主要邏輯
  const question = questions[questionIndex];
  displayQuestion(question);

  return question;
}
```

#### 錯誤處理規範
```javascript
// 使用 try-catch 處理可能的錯誤
function submitAnswer(answerId) {
  try {
    validateAnswer(answerId);
    const result = processAnswer(answerId);
    updateUI(result);
  } catch (error) {
    console.error('提交答案時發生錯誤:', error);
    showErrorMessage('提交失敗，請重試');
  }
}

// 驗證函數
function validateAnswer(answerId) {
  if (!answerId) {
    throw new Error('答案 ID 不能為空');
  }
  if (typeof answerId !== 'string') {
    throw new Error('答案 ID 必須是字串');
  }
}
```

### 組件設計規範

#### 按鈕組件
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--large {
  padding: 16px 32px;
  font-size: var(--font-size-lg);
}

.btn--small {
  padding: 8px 16px;
  font-size: var(--font-size-sm);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
```

#### 卡片組件
```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.card__header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-gray-100);
}

.card__body {
  padding: var(--spacing-lg);
}

.card__footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-gray-100);
  background-color: var(--color-gray-50);
}
```

#### 表單組件
```css
.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  color: var(--color-gray-900);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 200, 81, 0.1);
}

.form-input--error {
  border-color: var(--color-error);
}

.form-error {
  margin-top: var(--spacing-xs);
  color: var(--color-error);
  font-size: var(--font-size-sm);
}
```

---

## 📱 響應式設計規範

### 行動裝置優先
```css
/* 預設樣式（手機） */
.container {
  padding: var(--spacing-md);
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-lg);
    max-width: 768px;
    margin: 0 auto;
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-xl);
    max-width: 1024px;
  }
}

/* 大螢幕 */
@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}
```

### 觸控友善設計
- **最小點擊區域**: 44px × 44px
- **按鈕間距**: 至少 8px
- **滑動手勢**: 支援左右滑動切換題目

---

## ⚡ 效能優化規範

### 圖片優化
- 使用適當的圖片格式（WebP > JPEG > PNG）
- 實作圖片懶載入
- 提供不同解析度版本

### JavaScript 優化
```javascript
// 避免重複的 DOM 查詢
const elements = {
  questionTitle: document.getElementById('questionTitle'),
  optionsList: document.getElementById('optionsList'),
  submitBtn: document.getElementById('submitBtn')
};

// 使用事件委託
document.getElementById('optionsList').addEventListener('click', function(e) {
  if (e.target.matches('.option-btn')) {
    selectOption(e.target.dataset.optionId);
  }
});

// 防抖函數
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

---

## 🧪 測試與品質保證

### 瀏覽器相容性
- **現代瀏覽器**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **行動瀏覽器**: iOS Safari 14+, Chrome Mobile 90+

### 無障礙設計 (A11y)
- 使用語義化 HTML
- 提供適當的 ARIA 標籤
- 確保鍵盤導航功能
- 維持足夠的顏色對比度 (4.5:1)

```html
<button aria-label="選擇選項 A" class="option-btn" data-option="A">
  <span class="option-letter">A</span>
  <span class="option-text">選項內容</span>
</button>
```

