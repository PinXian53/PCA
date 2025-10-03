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
        "description": `
### 1. 案例背景 / 業務情景

從整理的第三方資料來看，JencoMart 的重點在於其用戶資料庫與應用系統遷移的過程與安全性控制：

JencoMart 計畫把 User Profiles (用戶個人資料) 移到 Google Cloud Datastore（或等價 NoSQL 資料庫），應用伺服器 (Application servers) 則要遷移至 Google Compute Engine (GCE) 
在遷移過程中，舊有系統仍必須能訪問新的資料庫 (on-premises 與雲端共存) ，要確保最小權限 (least privilege)、分離職責 (separation of duties)，在 IAM 和金鑰管理上要謹慎設計 

### 2. 核心議題 / 考慮事項

- 金鑰管理 / 認證方式：如何讓 on-premise 系統與雲端 VM 安全地訪問 Datastore，而不暴露過度權限或長期金鑰？ 
- 監控與成功指標 (Metrics / KPI)：在亞洲地區提供服務，需要監控延遲、錯誤率、使用者訪問量等指標來衡量系統效能 
- 漸進遷移與混合運作：在遷移期可能要同時維持 on-premise 與雲端系統共存，需考慮網路連線、安全邊界、流量導向等策略
- 資料一致性 / 延遲考量：對於用戶資料與資料存取可能要考慮一致性、延遲、讀寫頻率等因素

### 3. 題目 / 練習題線索

從練習題 / 題庫中可見：
題目會要求選擇在雲端資料庫 (Datastore / Cloud SQL / Spanner) 的適當選項。 
在監控時，要選擇對應於亞洲用戶的「總訪問量 + 平均延遲」等指標 
在金鑰管理／ IAM 設計上，題目可能要求使用最小權限原則，為 on-premise 和 VM 提供適當認證方式`,
        "links": []
    },
    {
        "id": ["#3"],
        "name": "Helicopter Racing League",
        "description": `### Company overview

Helicopter Racing League (HRL) is a global sports league for competitive helicopter racing. Each year HRL holds the world championship and several regional league competitions where teams compete to earn a spot in the world championship. HRL
offers a paid service to stream the races all over the world with live telemetry and predictions throughout each race.

直升機賽事聯盟 (HRL) 是一個全球性的競技直升機賽車體育聯盟。每年，HRL 都會舉辦世界錦標賽以及多個地區聯賽競賽，參賽隊伍在這些比賽中競逐世界錦標賽的參賽資格。HRL 提供了一項付費服務，讓全球觀眾能夠觀看賽事直播，並在每場比賽中實時獲取遙測數據和比賽預測。

### Solution concept

HRL wants to migrate their existing service to a new platform to expand their use of managed AI and ML services to facilitate race predictions. Additionally, as new fans engage with the sport, particularly in emerging regions, they want to move the serving of
their content, both real-time and recorded, closer to their users.

HRL 希望將其現有服務遷移到一個新平台，以擴展使用託管的人工智慧 (AI) 和機器學習 (ML) 服務，從而促進比賽預測。此外，隨著新粉絲，特別是來自新興地區的粉絲，對這項運動的參與度增加，他們希望將實時和錄製的內容分發位置更接近用戶，以提升觀看體驗。

### Existing technical environment

HRL is a public cloud-first company; the core of their mission-critical applications runs on their current public cloud provider. Video recording and editing is performed at the race tracks, and the content is encoded and transcoded, where needed, in the cloud.

HRL 是一家優先採用公共雲的公司，其關鍵任務應用的核心運行在他們當前的公共雲提供商上。比賽場地進行視頻錄製和編輯，並根據需要在雲端進行編碼和轉碼。

Enterprise-grade connectivity and local compute is provided by truck-mounted mobile data centers. Their race prediction services are hosted exclusively on their existing public cloud provider. Their existing technical environment is as follows:

企業級連接性和本地計算能力由安裝在卡車上的移動數據中心提供。他們的比賽預測服務完全託管在現有的公共雲提供商上。他們當前的技術環境如下：

- Existing content is stored in an object storage service on their existing public cloud provider.
- Video encoding and transcoding is performed on VMs created for each job.
- Race predictions are performed using TensorFlow running on VMs in the current public cloud provider
- 現有內容存儲在他們現有公共雲提供商的對象存儲服務中。
- 視頻編碼和轉碼在為每個任務創建的虛擬機（VM）上執行。
- 比賽預測使用 TensorFlow 在現有公共雲提供商的虛擬機上運行。

### Business requirements

HRL’s owners want to expand their predictive capabilities and reduce latency for their viewers in emerging markets. Their requirements are:

- Support ability to expose the predictive models to partners.
- Increase predictive capabilities during and before races:
    - Race results
    - Mechanical failures
    - Crowd sentiment
- Increase telemetry and create additional insights.
- Measure fan engagement with new predictions.
- Enhance global availability and quality of the broadcasts.
- Increase the number of concurrent viewers.
- Minimize operational complexity.
- Ensure compliance with regulations.
- Create a merchandising revenue stream.

HRL 的擁有者希望擴展其預測能力並降低新興市場觀眾的延遲。其需求包括：

- 支持向合作夥伴公開預測模型的能力。
- 提高比賽期間和比賽前的預測能力：
    - 比賽結果
    - 機械故障
    - 群眾情緒
- 增加遙測數據並創建額外的洞察。
- 測量粉絲對新預測的參與度。
- 提升全球直播的可用性和質量。
- 增加同時觀看的觀眾數量。
- 減少操作複雜性。
- 確保遵守相關法規。
- 創建一個商品銷售收入來源。

### Technical requirements

- Maintain or increase prediction throughput and accuracy.
- Reduce viewer latency.
- Increase transcoding performance.
- Create real-time analytics of viewer consumption patterns and engagement.
- Create a data mart to enable processing of large volumes of race data.

- 保持或提高預測的吞吐量和準確性。
- 降低觀眾延遲。
- 提高轉碼性能。
- 創建實時分析工具，以分析觀眾的消費模式和參與度。
- 建立一個數據集市，以支持大規模比賽數據的處理。

### Executive statement

Our CEO, S. Hawke, wants to bring high-adrenaline racing to fans all around the world. We listen to our fans, and they want enhanced video streams that include predictions of events within the race (e.g., overtaking). Our current platform allows us to predict race outcomes but lacks the facility to support real-time predictions during races and the capacity to process season-long results.

我們的首席執行官 S. Hawke 希望將高肾上腺素的賽車比賽帶給全世界的粉絲。我們傾聽粉絲的聲音，他們希望看到增強的視頻流，其中包括比賽中事件的預測（例如超車）。我們當前的平台允許我們預測比賽結果，但缺乏支持比賽期間實時預測的功能以及處理整個賽季結果的能力。`,
        "links": ["https://www.youtube.com/watch?v=659bnT9A2X8"]
    },
    {
        "id": ["#4"],
        "name": "EHR Healthcare",
        "description": `### Company overview

EHR Healthcare is a leading provider of electronic health record software to the medical industry. EHR Healthcare provides their software as a service to multi-national medical offices, hospitals, and insurance providers.

EHR Healthcare 是電子健康記錄軟體的領先供應商，專門服務於醫療行業。EHR Healthcare 以軟體即服務的方式，為跨國的醫療診所、醫院和保險提供商提供其軟體服務。

### Solution concept

Due to rapid changes in the healthcare and insurance industry, EHR Healthcare’s business has been growing exponentially year over year. They need to be able to scale their environment, adapt their disaster recovery plan, and roll out new continuous deployment capabilities to update their software at a fast pace. Google Cloud has been chosen to replace their current colocation facilities.

由於醫療保健和保險行業的快速變化，EHR Healthcare 的業務正以每年成倍增長的速度發展。他們需要具備擴展環境的能力，適應災難恢復計劃，並推出新的持續部署功能，以快速更新他們的軟體。Google Cloud 已被選中來取代他們當前的託管設施。

### Existing technical environment

EHR’s software is currently hosted in multiple colocation facilities. The lease on one of the data centers is about to expire.
Customer-facing applications are web-based, and many have recently been containerized to run on a group of Kubernetes clusters. Data is stored in a mixture of relational and NoSQL databases (MySQL, MS SQL Server, Redis, and MongoDB).
EHR is hosting several legacy file- and API-based integrations with insurance providers on-premises. These systems are scheduled to be replaced over the next several years.
There is no plan to upgrade or move these systems at the current time.
Users are managed via Microsoft Active Directory. Monitoring is currently being done via various open source tools. Alerts are sent via email and are often ignored.

EHR 的軟體目前託管在多個託管設施中，其中一個資料中心的租約即將到期。面向客戶的應用程式是基於網頁的，且許多應用最近已經容器化，以在一組 Kubernetes 集群上運行。資料存儲在關聯式和 NoSQL 資料庫的混合體系中（如 MySQL、MS SQL Server、Redis 和 MongoDB）。EHR 正在內部託管與保險提供商的幾個基於文件和 API 的舊系統集成，這些系統計劃在未來幾年內被替換。目前沒有計劃對這些系統進行升級或遷移。用戶管理通過 Microsoft Active Directory 進行，監控目前是通過各種開源工具完成的，警報通常通過電子郵件發送，但經常被忽略。

### Business requirements

- On-board new insurance providers as quickly as possible.
- Provide a minimum 99.9% availability for all customer-facing systems.
- Provide centralized visibility and proactive action on system performance and usage.
- Increase ability to provide insights into healthcare trends.
- Reduce latency to all customers.
- Maintain regulatory compliance.
- Decrease infrastructure administration costs.
- Make predictions and generate reports on industry trends based on provider data.
- 盡可能快速地接入新的保險提供商。
- 為所有面向客戶的系統提供至少 99.9% 的可用性。
- 提供集中式的系統性能和使用情況的可見性並進行主動措施。
- 提高提供醫療趨勢洞察的能力。
- 降低所有客戶的延遲。
- 保持法規合規性。
- 減少基礎設施管理成本。
- 基於提供者的數據做出預測並生成行業趨勢報告。

### Technical requirements

- Maintain legacy interfaces to insurance providers with connectivity to both on-premises systems and cloud providers.
- Provide a consistent way to manage customer-facing applications that are container-based.
- Provide a secure and high-performance connection between on-premises systems and Google Cloud.
- Provide consistent logging, log retention, monitoring, and alerting capabilities.
- Maintain and manage multiple container-based environments.
- Dynamically scale and provision new environments.
- Create interfaces to ingest and process data from new providers.

- 維持與保險提供商的舊有介面，並確保與本地系統和雲端提供商的連接。
- 提供一致的方式來管理基於容器的面向客戶的應用程式。
- 提供在本地系統與 Google Cloud 之間的安全且高效的連接。
- 提供一致的日誌記錄、日誌保留、監控和警報功能。
- 維持和管理多個基於容器的環境。
- 動態擴展並提供新的環境。
- 創建介面以從新提供商那裡接收並處理數據。

### Executive statement

Our on-premises strategy has worked for years but has required a major investment of time and money in training our team on distinctly different systems, managing similar but separate environments, and responding to outages. Many of these outages have been a result of misconfigured systems, inadequate capacity
to manage spikes in traffic, and inconsistent monitoring practices. We want to use Google Cloud to leverage a scalable, resilient platform that can span multiple environments seamlessly and provide a consistent and stable user experience that positions us for future growth

我們的本地部署策略已經運行多年，但這需要在培訓團隊、管理相似但獨立的環境以及應對停機事件上投入大量的時間和金錢。許多停機事件都是由於系統配置錯誤、處理流量高峰的能力不足以及監控實踐不一致所導致的。我們希望利用 Google Cloud 來建立一個可擴展且具備韌性的平臺，這個平臺能夠無縫地跨越多個環境，提供一致且穩定的用戶體驗，並為我們的未來增長奠定基礎。`,
        "links": ["https://www.youtube.com/watch?v=tSTDaMV8ZFc"]
    },
    {
        "id": ["#5", "#6", "#7"],
        "name": "Mountkirk Games",
        "description": `### Company overview

Mountkirk Games makes online, session-based, multiplayer games for mobile platforms.They have recently started expanding to other platforms after successfully migrating their on-premises environments to Google Cloud.
Their most recent endeavor is to create a retro-style first-person shooter (FPS) game that allows hundreds of simultaneous players to join a geo-specific digital arena from multiple platforms and locations. A real-time digital banner will display a global leaderboard of all the top players across every active arena.

Mountkirk Games 是一家專門為移動平台製作在線會話式多人遊戲的公司。他們最近成功將本地環境遷移到 Google Cloud，並開始擴展到其他平台。

他們最近的目標是創建一款復古風格的第一人稱射擊 (FPS) 遊戲，該遊戲允許數百名玩家同時從多個平台和地點加入一個特定地區的數字競技場。比賽期間，一個實時數字橫幅將顯示所有活躍競技場中頂尖玩家的全球排行榜。

### Solution concept

Mountkirk Games is building a new multiplayer game that they expect to be very popular. They plan to deploy the game’s backend on Google Kubernetes Engine so they can scale rapidly and use Google’s global load balancer to route players to the closest regional game arenas. In order to keep the global leader board in sync, they plan to use a multi-region Spanner cluster.

Mountkirk Games 正在開發一款預計會非常受歡迎的多人遊戲。他們計劃將遊戲後端部署在 Google Kubernetes Engine (GKE) 上，以便能夠快速擴展，並使用 Google 的全球負載均衡器將玩家路由到最近的區域性遊戲競技場。為了保持全球排行榜的同步，他們計劃使用多區域的 Spanner 集群。

### Existing technical environment

The existing environment was recently migrated to Google Cloud, and five games came across using lift-and-shift virtual machine migrations, with a few minor exceptions.
現有的環境最近已遷移至 Google Cloud，其中包括五款遊戲使用了“提取-遷移”虛擬機遷移方式進行遷移，只有一些小的例外情況。

Each new game exists in an isolated Google Cloud project nested below a folder that maintains most of the permissions and network policies. Legacy games with low traffic have been consolidated into a single project. There are also separate environments for development and testing.

每個新遊戲都存在於一個獨立的 Google Cloud 專案中，這些專案位於一個文件夾下方，該文件夾保留了大部分的權限和網路策略。流量較低的舊遊戲已經合併到一個單一的專案中。此外，還有分別用於開發和測試的獨立環境。

### Business requirements

- Support multiple gaming platforms.
- Support multiple regions.
- Support rapid iteration of game features.
- Minimize latency.
- Optimize for dynamic scaling.
- Use managed services and pooled resources.
- Minimize costs.

**業務需求**

- 支持多個遊戲平台。
- 支持多個地區。
- 支持遊戲功能的快速迭代。
- 將延遲降至最低。
- 優化以實現動態擴展。
- 使用託管服務和共用資源。
- 將成本降至最低。

### Technical requirements

- Dynamically scale based on game activity.
- Publish scoring data on a near real–time global leaderboard.
- Store game activity logs in structured files for future analysis.
- Use GPU processing to render graphics server-side for multi-platform support.
- Support eventual migration of legacy games to this new platform.
- 根據遊戲活動動態擴展系統。
- 在接近實時的全球排行榜上發布得分數據。
- 將遊戲活動日誌存儲在結構化文件中，以便日後分析。
- 使用 GPU 處理在伺服器端渲染圖形，以支持多平台。
- 支持將舊有遊戲最終遷移到這個新平台。

### Executive statement

Our last game was the first time we used Google Cloud, and it was a tremendous success. We were able to analyze player behavior and game telemetry in ways that we never could before. This success allowed us to bet on a full migration to the cloud and to start building all-new games using cloud-native design principles. Our new game is our most ambitious to date and will open up doors for us to support
more gaming platforms beyond mobile. Latency is our top priority, although cost management is the next most important challenge. As with our first cloud-based game, we have grown to expect the cloud to enable advanced analytics capabilities so we can rapidly iterate on our deployments of bug fixes and new functionality

我們的上一款遊戲是我們首次使用 Google Cloud，並且取得了巨大的成功。我們能夠以之前無法做到的方式分析玩家行為和遊戲遙測數據。這次成功使我們決定全面遷移到雲端，並開始使用雲原生設計原則來構建全新的遊戲。我們的新遊戲是迄今為止最具野心的一款，它將為我們開啟支持更多遊戲平台（不僅限於移動平台）的機會。延遲是我們的首要優先事項，儘管成本管理也是接下來最重要的挑戰。正如我們的第一款基於雲端的遊戲一樣，我們希望雲端能夠支持先進的分析功能，讓我們可以快速迭代部署修補程式和新功能。`,
        "links": ["https://www.youtube.com/watch?v=1w1olPjlPZY"]
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
        "description": `
### 1. 公司背景 / 業務模式

Dress4Win 是一家以網路與行動 App 為主的平台，讓使用者整理／管理個人衣櫥，同時建立社交網絡，與設計者與零售商互動。 
收益來源：廣告、電商、推薦（referral）、Freemium 模式（部分功能免費、部分付費） 
最初運行在創辦人的車庫伺服器，後來擴張到數百台伺服器與設備，在 colocated 資料中心運作。 
隨著成長，現有基礎設施已無法滿足需求，需全面遷移至雲端。 

### 2. 技術／架構挑戰與需求

以下是第三方整理的重點需求／挑戰：
| **類別**             | **挑戰 / 要求**                      |
| ------------------ | -------------------------------- |
| **效能與可伸縮性**        | 在高流量時段（如週末、早晨）流量高；用量低谷期間則有大量閒置資源 |
| **快速資源配置 / 自動化**   | 希望能快速佈署新資源，以支援快速創新               |
| **成本優化**           | 在流量低谷期減少資源用量，降低閒置成本              |
| **分區部署 / 全球分佈**    | 若用戶分布於不同地理區域，需考慮多區域佈署與負載平衡設計     |
| **備份 / 災難復原 / 歸檔** | 需具備低成本的備份與異地歸檔策略                 |

### 3. 設計方向與建議（第三方分析）

以下是一些常見在該案例中被提及的架構建議：
- 選用 Managed Instance Groups + Global Load Balancer 來做跨區域的流量導向與故障切換 
- 使用 區域自動擴縮 (autoscaling) 來因應流量高峰與閒置期，減少成本
- 備份資料庫與日誌至冷存儲或歸檔儲存，做離線或冷備份 
- 在現有資料中心與雲端之間建立 VPN 或專線互連，以確保資料傳輸的安全與穩定性`,
        "links": ["https://medium.com/%40bincysjames/dress4win-sample-case-study-explained-9247979ee742"]
    }
]
