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
        "description": `### Company overview

JencoMart is a major e-commerce retailer operating primarily in the Asia region. They provide an online marketplace platform for various products and services.

JencoMart 是一家主要在亞洲地區營運的大型電子商務零售商，他們提供各種產品和服務的線上市場平台。

### Solution concept

JencoMart wants to migrate their user profile database to Google Cloud Datastore and migrate their application servers to Google Compute Engine to improve scalability and reduce operational overhead.

JencoMart 希望將他們的用戶個人資料資料庫遷移到 Google Cloud Datastore，並將應用伺服器遷移到 Google Compute Engine，以提高可擴展性並減少營運開銷。

### Existing technical environment

JencoMart currently operates on-premises infrastructure with traditional database systems for storing user profiles. Their application servers are hosted in physical data centers, which limits their ability to scale during peak traffic periods common in e-commerce.

JencoMart 目前使用本地基礎設施，採用傳統資料庫系統儲存用戶個人資料。他們的應用伺服器託管在實體資料中心，這限制了他們在電子商務常見的流量高峰期間的擴展能力。

### Business requirements

- Migrate user profiles to a scalable NoSQL database solution.
- Maintain high availability for customer-facing applications.
- Ensure secure access to data during the hybrid migration period.
- Monitor system performance and user metrics in the Asia region.
- Implement proper access control and security measures.

- 將用戶個人資料遷移至可擴展的 NoSQL 資料庫解決方案。
- 為面向客戶的應用程式維持高可用性。
- 在混合遷移期間確保資料的安全存取。
- 監控亞洲地區的系統效能和用戶指標。
- 實施適當的存取控制和安全措施。

### Technical requirements

- Enable gradual migration with on-premises systems accessing cloud databases.
- Implement least privilege access and separation of duties.
- Secure key management and authentication between on-premises and cloud systems.
- Monitor latency, error rates, and user access metrics.
- Ensure data consistency and optimize for read/write patterns.

- 支援漸進式遷移，讓本地系統能夠存取雲端資料庫。
- 實施最小權限存取和職責分離。
- 在本地和雲端系統之間建立安全的金鑰管理和認證。
- 監控延遲、錯誤率和用戶存取指標。
- 確保資料一致性並針對讀寫模式進行優化。

### Executive statement

We need to modernize our infrastructure to handle our growing customer base in Asia while maintaining the security and reliability our customers expect. The migration should allow us to scale efficiently during peak shopping periods while keeping costs under control during quieter times.

我們需要現代化基礎設施以處理亞洲不斷增長的客戶群，同時維持客戶期望的安全性和可靠性。這次遷移應該讓我們在購物高峰期高效擴展，同時在流量較少時控制成本。

### 案例分析 / Architecture Analysis

**常見架構建議:**

- **數據庫遷移策略**: 使用 Cloud Datastore 或 Firestore 作為 NoSQL 解決方案，支援自動擴展和全球分佈
- **混合雲架構**: 在遷移期間使用 Cloud VPN 或 Cloud Interconnect 連接本地系統與 GCP
- **身份與存取管理**: 實施 Service Account 和 IAM 角色，遵循最小權限原則
- **金鑰管理**: 使用 Cloud KMS 管理加密金鑰，避免在應用程式中硬編碼憑證
- **監控與可觀測性**: 部署 Cloud Monitoring 和 Cloud Logging 監控亞洲地區的效能指標
- **安全性**: 實施 VPC 網路隔離、防火牆規則和 Cloud Security Command Center
- **漸進式遷移**: 採用藍綠部署或金絲雀發佈策略，確保零停機時間遷移`,
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

我們的首席執行官 S. Hawke 希望將高肾上腺素的賽車比賽帶給全世界的粉絲。我們傾聽粉絲的聲音，他們希望看到增強的視頻流，其中包括比賽中事件的預測（例如超車）。我們當前的平台允許我們預測比賽結果，但缺乏支持比賽期間實時預測的功能以及處理整個賽季結果的能力。

### 案例分析 / Architecture Analysis

**常見架構建議:**

- **全球內容分發**: 使用 Cloud CDN 和 Global Load Balancer 將直播內容分發到全球觀眾
- **實時數據處理**: 採用 Cloud Pub/Sub + Dataflow 處理即時遙測數據和預測
- **AI/ML 預測服務**: 利用 Vertex AI 和 TensorFlow Serving 部署機器學習模型
- **多媒體處理**: 使用 Cloud Video Intelligence API 和 Transcoder API 處理視頻編碼轉碼
- **實時分析**: 結合 BigQuery 和 Cloud Bigtable 進行大規模數據分析
- **低延遲架構**: 採用邊緣計算和區域部署策略減少觀眾延遲
- **擴展性設計**: 使用 GKE Autopilot 實現自動擴展，應對觀眾數量波動
- **數據管道**: 建立 ETL 管道處理歷史賽事數據，支援季節性分析`,
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

我們的本地部署策略已經運行多年，但這需要在培訓團隊、管理相似但獨立的環境以及應對停機事件上投入大量的時間和金錢。許多停機事件都是由於系統配置錯誤、處理流量高峰的能力不足以及監控實踐不一致所導致的。我們希望利用 Google Cloud 來建立一個可擴展且具備韌性的平臺，這個平臺能夠無縫地跨越多個環境，提供一致且穩定的用戶體驗，並為我們的未來增長奠定基礎。

### 案例分析 / Architecture Analysis

**常見架構建議:**

- **容器化架構**: 使用 GKE 管理容器化的微服務架構，提升部署一致性
- **混合雲連接**: 透過 Cloud VPN 或 Cloud Interconnect 連接本地系統與雲端
- **身份整合**: 與 Microsoft Active Directory 整合，使用 Cloud Identity 進行統一身份管理
- **託管數據庫**: 遷移至 Cloud SQL、Cloud Spanner 或 Firestore 等託管數據庫服務
- **CI/CD 管道**: 建立 Cloud Build 和 Cloud Deploy 實現持續整合與部署
- **監控與警報**: 部署 Cloud Monitoring、Cloud Logging 和 Error Reporting 取代開源工具
- **合規性**: 實施 HIPAA 合規的安全控制和資料治理措施
- **災難復原**: 建立跨區域備份和自動故障轉移機制`,
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

我們的上一款遊戲是我們首次使用 Google Cloud，並且取得了巨大的成功。我們能夠以之前無法做到的方式分析玩家行為和遊戲遙測數據。這次成功使我們決定全面遷移到雲端，並開始使用雲原生設計原則來構建全新的遊戲。我們的新遊戲是迄今為止最具野心的一款，它將為我們開啟支持更多遊戲平台（不僅限於移動平台）的機會。延遲是我們的首要優先事項，儘管成本管理也是接下來最重要的挑戰。正如我們的第一款基於雲端的遊戲一樣，我們希望雲端能夠支持先進的分析功能，讓我們可以快速迭代部署修補程式和新功能。

### 案例分析 / Architecture Analysis

**常見架構建議:**

- **全球遊戲架構**: 使用 GKE 和 Global Load Balancer 部署多區域遊戲伺服器
- **實時排行榜**: 採用 Cloud Spanner 的多區域配置實現全球一致的排行榜同步
- **低延遲網絡**: 利用 Google Cloud 的全球網絡基礎設施減少玩家延遲
- **自動擴展**: 根據遊戲活動使用 GKE Autopilot 進行動態擴縮容
- **GPU 渲染**: 使用 GPU-enabled GKE nodes 進行伺服器端圖形渲染
- **遊戲分析**: 結合 BigQuery 和 Dataflow 進行實時和批次遊戲數據分析
- **成本優化**: 使用 Preemptible VMs 和 Spot instances 降低運算成本
- **項目隔離**: 採用分層組織結構和 IAM 策略管理多個遊戲項目`,
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

我們的競爭優勢一直是我們對客戶的專注，憑藉我們提供優秀的客戶服務並將車輛停機時間降到最低的能力。在將多個系統遷移到 Google Cloud 後，我們正在尋求新的方法，為我們的客戶提供一流的線上車隊管理服務並改善經銷商的運營。我們的五年戰略計劃是通過開放我們的數據訪問、增加車輛自主運行能力以及為剩餘的遺留系統遷移到雲端創造一條道路，來打造一個新產品的合作夥伴生態系統。

### 案例分析 / Architecture Analysis

**常見架構建議:**

- **IoT 數據處理**: 使用 Cloud IoT Core 和 Pub/Sub 處理大量車輛遙測數據
- **大數據分析**: 採用 BigQuery 和 Dataflow 分析車輛性能和預測維護需求
- **混合雲架構**: 使用 Cloud Interconnect 連接本地製造系統與雲端分析平台
- **機器學習**: 部署 Vertex AI 進行預測性維護和故障檢測模型
- **API 管理**: 使用 Cloud Endpoints 和 API Gateway 為合作夥伴提供安全的 API 服務
- **數據湖**: 建立 Cloud Storage 數據湖存儲歷史遙測數據供長期分析
- **開發者平台**: 建立 Cloud Marketplace 和開發者入口支援合作夥伴生態系統
- **成本優化**: 根據季節性需求使用 Compute Engine preemptible instances 和自動擴展`,
        "links": ["https://www.youtube.com/watch?v=0G8hx9HUnbk"]
    },
    {
        "id": ["#11", "#12"],
        "name": "Dress4Win",
        "description": `### Company overview

Dress4Win is a web-based company that helps their users organize and manage their personal wardrobe using a website and mobile application. The company also cultivates an active social network that connects their users with designers and retailers. They monetize their services through advertising, e-commerce, referrals, and a freemium app model.

Dress4Win 是一家基於網路的公司，透過網站和行動應用程式幫助用戶整理和管理個人衣櫥。該公司還培育一個活躍的社交網絡，連接用戶與設計師和零售商。他們透過廣告、電子商務、推薦和免費增值應用模式獲利。

### Solution concept

The company is growing rapidly and has decided to move fully to the cloud. They are currently running servers in a colocation facility and want to migrate to Google Cloud to take advantage of managed services, improved scalability, and cost optimization.

該公司正在快速成長，並決定完全遷移到雲端。他們目前在託管設施中運行伺服器，希望遷移到 Google Cloud 以利用託管服務、改善的可擴展性和成本優化。

### Existing technical environment

The application started in the founder's garage and has grown to hundreds of servers and appliances in a colocation facility. The current infrastructure includes:
- Web servers and application servers running on physical hardware
- MySQL databases for user data and content
- Image and media storage on local storage systems
- Manual deployment processes and limited automation

應用程式最初在創辦人的車庫中開始，現已成長為託管設施中數百台伺服器和設備。目前的基礎設施包括：
- 在實體硬體上運行的網頁伺服器和應用伺服器
- 用於用戶資料和內容的 MySQL 資料庫
- 在本地儲存系統上的圖像和媒體儲存
- 手動部署流程和有限的自動化

### Business requirements

- Implement cloud services to support rapid development and deployment.
- Support multiple environments (development, staging, production).
- Leverage managed services to reduce operational overhead.
- Maintain high availability during peak traffic periods (weekends, mornings).
- Optimize costs by scaling resources based on demand.
- Improve disaster recovery and backup capabilities.

- 實施雲端服務以支援快速開發和部署。
- 支援多個環境（開發、測試、生產）。
- 利用託管服務減少營運開銷。
- 在流量高峰期（週末、早晨）維持高可用性。
- 根據需求擴展資源以優化成本。
- 改善災難復原和備份能力。

### Technical requirements

- Migrate to a microservices architecture using containers.
- Implement auto-scaling to handle variable traffic patterns.
- Use managed databases and storage services.
- Establish proper CI/CD pipelines for automated deployment.
- Implement multi-region deployment for global availability.
- Set up monitoring, logging, and alerting systems.

- 遷移到使用容器的微服務架構。
- 實施自動擴展以處理可變的流量模式。
- 使用託管資料庫和儲存服務。
- 建立適當的 CI/CD 管道以進行自動部署。
- 實施多區域部署以實現全球可用性。
- 設定監控、日誌和警報系統。

### Executive statement

Our success has outgrown our current infrastructure. We need a cloud platform that can scale with our business, reduce our operational complexity, and enable our development teams to innovate faster. We want to focus on our core business rather than managing infrastructure, while ensuring we can handle our growing user base effectively.

我們的成功已經超出了當前基礎設施的能力。我們需要一個能夠與業務一同擴展的雲端平台，減少營運複雜性，並讓開發團隊更快速創新。我們希望專注於核心業務而非管理基礎設施，同時確保能夠有效處理不斷增長的用戶群。

### 案例分析 / Architecture Analysis

**常見架構建議:**

- **微服務架構**: 使用 GKE 部署容器化微服務，提升開發和部署靈活性
- **自動擴展**: 實施 Managed Instance Groups 和 Horizontal Pod Autoscaler 應對流量波動
- **全球負載平衡**: 使用 Global Load Balancer 和 Cloud CDN 提升全球用戶體驗
- **託管數據庫**: 遷移至 Cloud SQL 或 Cloud Spanner 獲得高可用性和自動備份
- **CI/CD 自動化**: 建立 Cloud Build 和 Cloud Deploy 管道實現快速部署
- **監控與日誌**: 部署 Cloud Monitoring 和 Cloud Logging 取代人工監控
- **成本優化**: 使用 Committed Use Discounts 和 Sustained Use Discounts 降低長期成本
- **多區域部署**: 建立多區域災難復原策略確保業務連續性`,
        "links": ["https://medium.com/%40bincysjames/dress4win-sample-case-study-explained-9247979ee742"]
    }
]
