const topics = [
    {
        "id": ["#1"],
        "name": "Default",
        "description": "無",
        "links": []
    },
    {
        "id": ["#2"],
        "name": "JencoMart",
        "description": "",
        "links": []
    },
    {
        "id": ["#3"],
        "name": "Helicopter Racing League",
        "description": "",
        "links": ["https://www.youtube.com/watch?v=659bnT9A2X8"]
    },
    {
        "id": ["#4"],
        "name": "EHR Healthcare",
        "description": "",
        "links": ["https://www.youtube.com/watch?v=tSTDaMV8ZFc"]
    },
    {
        "id": ["#5", "#6", "#7"],
        "name": "Mountkirk Games",
        "description": "https://www.youtube.com/watch?v=1w1olPjlPZY",
        "links": []
    },
    {
        "id": ["#8", "#9", "#10"],
        "name": "TerramEarth",
        "description": `### Company overview

TerramEarth manufactures heavy equipment for the mining and agricultural industries.
They currently have over 500 dealers and service centers in 100 countries. Their mission
is to build products that make their customers more productive

TerramEarth 製造用於礦業和農業的重型設備。他們目前在 100 個國家擁有超過 500 家經銷商和服務中心。他們的使命是製造讓客戶更高效的產品。

### Solution concept

There are 2 million TerramEarth vehicles in operation currently, and we see 20% yearly
growth. Vehicles collect telemetry data from many sensors during operation. A small
subset of critical data is transmitted from the vehicles in real time to facilitate fleet
management. The rest of the sensor data is collected, compressed, and uploaded daily
when the vehicles return to home base. Each vehicle usually generates 200 to 500
megabytes of data per day.

目前有 200 萬輛 TerramEarth 的車輛在運行中，我們看到每年有 20% 的增長。車輛在運行期間會從多個傳感器收集遙測數據。一小部分關鍵數據會即時從車輛傳輸，以便於車隊管理。其餘的傳感器數據會在車輛返回基地時進行收集、壓縮，並每日上傳。每輛車通常每天生成 200 到 500 兆字節的數據。

### Existing technical environment

TerramEarth’s vehicle data aggregation and analysis infrastructure resides in Google
Cloud and serves clients from all around the world. A growing amount of sensor data is
captured from their two main manufacturing plants and sent to private data centers that
contain their legacy inventory and logistics management systems. The private data
centers have multiple network interconnects configured to Google Cloud.
The web frontend for dealers and customers is running in Google Cloud and allows
access to stock management and analytics.

TerramEarth 的車輛數據聚合和分析基礎設施位於 Google Cloud，為來自世界各地的客戶提供服務。越來越多的傳感器數據從他們的兩個主要製造廠捕獲，並發送到包含其舊有庫存和物流管理系統的私有數據中心。這些私有數據中心配置了多個與 Google Cloud 的網路互連。經銷商和客戶使用的網頁前端運行在 Google Cloud 上，允許他們訪問庫存管理和分析功能。

### Business requirements

- Predict and detect vehicle malfunction and rapidly ship parts to dealerships for just-intime repair where possible.
- Decrease cloud operational costs and adapt to seasonality.
- Increase speed and reliability of development workflow.
- Allow remote developers to be productive without compromising code or data security.
- Create a flexible and scalable platform for developers to create custom API services for
dealers and partners.
- **預測並檢測車輛故障，並在可能的情況下快速將零件運送到經銷商處，實現及時維修。**
- **降低雲端運營成本並適應季節性變化。**
- **提高開發工作流程的速度和可靠性。**
- **允許遠程開發人員在不妥協代碼或數據安全的情況下保持高效工作。**
- **創建一個靈活且可擴展的平台，供開發人員為經銷商和合作夥伴創建自定義 API 服務。**

### Technical requirements

- Create a new abstraction layer for HTTP API access to their legacy systems to enable a
gradual move into the cloud without disrupting operations.
- Modernize all CI/CD pipelines to allow developers to deploy container-based workloads
in highly scalable environments.
- Allow developers to run experiments without compromising security and governance
requirements
- Create a self-service portal for internal and partner developers to create new projects,
request resources for data analytics jobs, and centrally manage access to the API
endpoints.
- Use cloud-native solutions for keys and secrets management and optimize for identitybased access.
- **為其舊系統創建一個新的 HTTP API 訪問抽象層，以便逐步遷移到雲端，而不影響業務運營。**
- **現代化所有 CI/CD 管道，使開發人員能夠在高度可擴展的環境中部署基於容器的工作負載。**
- **允許開發人員在不妥協安全性和治理要求的情況下進行實驗。**
- **創建一個自助服務入口，供內部和合作夥伴開發人員創建新項目、請求數據分析作業的資源，並集中管理對 API 端點的訪問。**
- **使用雲原生解決方案來管理密鑰和機密，並優化基於身份的訪問控制。**

### Executive statement

Our competitive advantage has always been our focus on the customer, with our
ability to provide excellent customer service and minimize vehicle downtimes. After
moving multiple systems into Google Cloud, we are seeking new ways to provide
best-in-class online fleet management services to our customers and improve
operations of our dealerships. Our 5-year strategic plan is to create a partner
ecosystem of new products by enabling access to our data, increasing
autonomous operation capabilities of our vehicles, and creating a path to move the
remaining legacy systems to the cloud

我們的競爭優勢一直是我們對客戶的專注，憑藉我們提供優秀的客戶服務並將車輛停機時間降到最低的能力。在將多個系統遷移到 Google Cloud 後，我們正在尋求新的方法，為我們的客戶提供一流的線上車隊管理服務並改善經銷商的運營。我們的五年戰略計劃是通過開放我們的數據訪問、增加車輛自主運行能力以及為剩餘的遺留系統遷移到雲端創造一條道路，來打造一個新產品的合作夥伴生態系統。`,
        "links": ["https://www.youtube.com/watch?v=0G8hx9HUnbk"]
    },
    {
        "id": ["#11", "#12"],
        "name": "Dress4Win",
        "description": "",
        "links": []
    }
]
