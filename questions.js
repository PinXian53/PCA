const questions = [
    {
        "topic": "#1",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/7083-exam-professional-cloud-architect-topic-1-question-1/",
        "question": "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs.\n\nWhat should they do?",
        "question-zh": "您的公司決定對其 API 進行重大修訂，以便為開發人員創造更好的體驗。他們需要保持舊版本 API 的可用性和可部署性，同時允許新客戶和測試人員試用新的 API。他們希望保持相同的 SSL 和 DNS 記錄來服務兩個 API。\n\n他們應該怎麼做？",
        "options": {
            "A": "Configure a new load balancer for the new version of the API",
            "B": "Reconfigure old clients to use a new endpoint for the new API",
            "C": "Have the old API forward traffic to the new API based on the path",
            "D": "Use separate backend pools for each API path behind the load balancer"
        },
        "options-zh": {
            "A": "為新版本的 API 配置新的負載平衡器",
            "B": "重新配置舊客戶端以使用新 API 的新端點",
            "C": "讓舊 API 根據路徑將流量轉發到新 API",
            "D": "在負載平衡器後面為每個 API 路徑使用單獨的後端池"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/7080-exam-professional-cloud-architect-topic-1-question-2/",
        "question": "Your company plans to migrate a multi-petabyte data set to the cloud. The data set must be available 24hrs a day. Your business analysts have experience only with using a SQL interface.\n\nHow should you store the data to optimize it for ease of analysis?",
        "question-zh": "您的公司計劃將多個 PB 級的資料集遷移到雲端。該資料集必須每天 24 小時可用。您的業務分析師只有使用 SQL 介面的經驗。\n\n您應該如何儲存資料以優化分析的便利性？",
        "options": {
            "A": "Load data into Google BigQuery",
            "B": "Insert data into Google Cloud SQL",
            "C": "Put flat files into Google Cloud Storage",
            "D": "Stream data into Google Cloud Datastore"
        },
        "options-zh": {
            "A": "將資料載入 Google BigQuery",
            "B": "將資料插入 Google Cloud SQL",
            "C": "將平面檔案放入 Google Cloud Storage",
            "D": "將資料串流傳輸到 Google Cloud Datastore"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/54378-exam-professional-cloud-architect-topic-1-question-3/",
        "question": "The operations manager asks you for a list of recommended practices that she should consider when migrating a J2EE application to the cloud.\n\nWhich three practices should you recommend? (Choose three.)",
        "question-zh": "營運經理向您詢問在將 J2EE 應用程式遷移到雲端時應該考慮的建議實踐清單。\n\n您應該推薦哪三種做法？（請選擇三項。）",
        "options": {
            "A": "Port the application code to run on Google App Engine",
            "B": "Integrate Cloud Dataflow into the application to capture real-time metrics",
            "C": "Instrument the application with a monitoring tool like Stackdriver Debugger",
            "D": "Select an automation framework to reliably provision the cloud infrastructure",
            "E": "Deploy a continuous integration tool with automated testing in a staging environment",
            "F": "Migrate from MySQL to a managed NoSQL database like Google Cloud Datastore or Bigtable"
        },
        "options-zh": {
            "A": "將應用程式代碼移植到 Google App Engine 上運行",
            "B": "將 Cloud Dataflow 整合到應用程式中以捕獲即時指標",
            "C": "使用 Stackdriver Debugger 等監控工具對應用程式進行檢測",
            "D": "選擇自動化框架以可靠地佈建雲端基礎設施",
            "E": "在預備環境中部署具有自動化測試的持續整合工具",
            "F": "從 MySQL 遷移到受管理的 NoSQL 資料庫，例如 Google Cloud Datastore 或 Bigtable"
        },
        "images": [],
        "answers": [
            "C",
            "D",
            "E"
        ]
    },
    {
        "topic": "#1",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/7085-exam-professional-cloud-architect-topic-1-question-4/",
        "question": "A news feed web service has the following code running on Google App Engine. During peak load, users report that they can see news articles they already viewed.\n\nWhat is the most likely cause of this problem?",
        "question-zh": "一個新聞動態網路服務在 Google App Engine 上運行以下代碼。在高峰負載期間，用戶報告說他們可以看到已經查看過的新聞文章。\n\n此問題最可能的原因是什麼？",
        "options": {
            "A": "The session variable is local to just a single instance",
            "B": "The session variable is being overwritten in Cloud Datastore",
            "C": "The URL of the API needs to be modified to prevent caching",
            "D": "The HTTP Expires header needs to be set to -1 stop caching"
        },
        "options-zh": {
            "A": "會話變數僅限於單一實例的本地範圍",
            "B": "會話變數在 Cloud Datastore 中被覆寫",
            "C": "需要修改 API 的 URL 以防止快取",
            "D": "需要將 HTTP Expires 標頭設定為 -1 以停止快取"
        },
        "images": [
            "images/Question-4.png"
        ],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/6837-exam-professional-cloud-architect-topic-1-question-5/",
        "question": "An application development team believes their current logging tool will not meet their needs for their new cloud-based product. They want a better tool to capture errors and help them analyze their historical log data. You want to help them find a solution that meets their needs.\n\nWhat should you do?",
        "question-zh": "一個應用程式開發團隊認為他們目前的日誌工具無法滿足新的雲端產品的需求。他們想要一個更好的工具來捕獲錯誤並幫助他們分析歷史日誌資料。您希望幫助他們找到滿足其需求的解決方案。\n\n您應該怎麼做？",
        "options": {
            "A": "Direct them to download and install the Google StackDriver logging agent",
            "B": "Send them a list of online resources about logging best practices",
            "C": "Help them define their requirements and assess viable logging tools",
            "D": "Help them upgrade their current tool to take advantage of any new features"
        },
        "options-zh": {
            "A": "指導他們下載並安裝 Google StackDriver 日誌代理",
            "B": "向他們提供一份有關日誌最佳實踐的在線資源清單",
            "C": "幫助他們定義需求並評估可行的日誌工具",
            "D": "幫助他們升級現有工具以利用新功能"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/54383-exam-professional-cloud-architect-topic-1-question-6/",
        "question": "You need to reduce the number of unplanned rollbacks of erroneous production deployments in your company's web hosting platform. Improvement to the QA Test processes accomplished an 80% reduction.\n\nWhich additional two approaches can you take to further reduce the rollbacks? (Choose two.)",
        "question-zh": "您需要減少公司網頁託管平台中錯誤生產部署的未計劃回滾次數。改進質量保證/測試流程已經實現了 80% 的減少。\n\n您還可以採取哪兩種方法進一步減少回滾？（請選擇兩項。）",
        "options": {
            "A": "Introduce a green-blue deployment model",
            "B": "Replace the QA environment with canary releases",
            "C": "Fragment the monolithic platform into microservices",
            "D": "Reduce the platform's dependency on relational database systems",
            "E": "Replace the platform's relational database systems with a NoSQL database"
        },
        "options-zh": {
            "A": "引入綠藍部署模型",
            "B": "將質量保證環境替換為金絲雀版本發布（canary releases）",
            "C": "將單體平台分解為微服務",
            "D": "減少平台對關係型資料庫系統的依賴",
            "E": "用 NoSQL 資料庫替換平台的關係型資料庫系統"
        },
        "images": [],
        "answers": [
            "A",
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#7",
        "link": "https://www.examtopics.com/discussions/google/view/54304-exam-professional-cloud-architect-topic-1-question-7/",
        "question": "To reduce costs, the Director of Engineering has required all developers to move their development infrastructure resources from on-premises virtual machines(VMs) to Google Cloud Platform. These resources go through multiple start/stop events during the day and require state to persist. You have been asked to design the process of running a development environment in Google Cloud while providing cost visibility to the finance department.\n\nWhich two steps should you take? (Choose two.)",
        "question-zh": "為了降低成本，工程總監要求所有開發人員將其開發基礎設施資源從地端虛擬機器（VM）遷移到 Google Cloud Platform。這些資源在白天會經歷多次啟動/停止事件，並且需要持久化狀態。您被要求設計在 Google Cloud 中運行開發環境的流程，同時向財務部門提供成本可見性。\n\n您應該採取哪兩個步驟？（請選擇兩項。）",
        "options": {
            "A": "Use the - -no-auto-delete flag on all persistent disks and stop the VM",
            "B": "Use the - -auto-delete flag on all persistent disks and terminate the VM",
            "C": "Apply VM CPU utilization label and include it in the BigQuery billing export",
            "D": "Use Google BigQuery billing export and labels to associate cost to groups",
            "E": "Store all state into local SSD, snapshot the persistent disks, and terminate the VM",
            "F": "Store all state in Google Cloud Storage, snapshot the persistent disks, and terminate the VM"
        },
        "options-zh": {
            "A": "在所有永久磁碟上使用 --no-auto-delete 標誌並停止 VM",
            "B": "在所有永久磁碟上使用 --auto-delete 標誌並終止 VM",
            "C": "應用 VM CPU 利用率標籤並將其包含在 BigQuery 帳單匯出中",
            "D": "使用 Google BigQuery 帳單匯出和標籤將成本與群組關聯",
            "E": "將所有狀態存儲到本地 SSD，拍攝永久磁碟快照，然後終止 VM",
            "F": "將所有狀態存儲到 Google Cloud Storage，拍攝永久磁碟快照，然後終止 VM"
        },
        "images": [],
        "answers": [
            "A",
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#8",
        "link": "https://www.examtopics.com/discussions/google/view/7126-exam-professional-cloud-architect-topic-1-question-8/",
        "question": "Your company wants to track whether someone is present in a meeting room reserved for a scheduled meeting. There are 1000 meeting rooms across 5 offices on 3 continents. Each room is equipped with a motion sensor that reports its status every second. The data from the motion detector includes only a sensor ID and several different discrete items of information. Analysts will use this data, together with information about account owners and office locations.\n\nWhich database type should you use?",
        "question-zh": "您的公司想要追蹤某人是否在預定會議的會議室內。在三大洲的五個辦公室中共有 1000 間會議室。每個會議室都配備了一個運動傳感器，每秒報告其狀態。運動檢測器收集的數據僅包含傳感器 ID 和幾種不同的離散資訊。分析師將利用這些數據，以及有關帳戶所有者和辦公室位置的資訊。\n\n您應該使用哪種類型的資料庫？",
        "options": {
            "A": "Flat file",
            "B": "NoSQL",
            "C": "Relational",
            "D": "Blobstore"
        },
        "options-zh": {
            "A": "平面文件",
            "B": "NoSQL",
            "C": "關係型",
            "D": "Blob 存儲"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#9",
        "link": "https://www.examtopics.com/discussions/google/view/7130-exam-professional-cloud-architect-topic-1-question-9/",
        "question": "You set up an autoscaling instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address.\n\nYou have verified the appropriate web response is coming from each instance using the curl command. You want to ensure the backend is configured correctly.\n\nWhat should you do?",
        "question-zh": "您設定了一個自動擴展實例群組來為即將推出的產品提供網路流量服務。在將實例群組配置為 HTTP(S) 負載平衡器的後端服務後，您注意到虛擬機器（VM）實例每分鐘都會被終止並重新啟動。這些實例沒有公共 IP 位址。\n\n您已使用 curl 命令驗證每個實例都返回了適當的網頁回應。您希望確保後端配置正確。\n\n您應該怎麼做？",
        "options": {
            "A": "Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.",
            "B": "Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.",
            "C": "Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.",
            "D": "Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination."
        },
        "options-zh": {
            "A": "確保存在防火牆規則以允許 HTTP/HTTPS 上的來源流量到達負載平衡器",
            "B": "為每個實例分配一個公共 IP，並配置防火牆規則以允許負載平衡器到達實例的公共 IP",
            "C": "確保存在防火牆規則以允許負載平衡器健康檢查到達實例群組中的實例",
            "D": "在每個實例上建立一個帶有負載平衡器名稱的標籤。配置防火牆規則，將負載平衡器的名稱作為來源，將實例標籤作為目的地"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#10",
        "link": "https://www.examtopics.com/discussions/google/view/7041-exam-professional-cloud-architect-topic-1-question-10/",
        "question": "You write a Python script to connect to Google BigQuery from a Google Compute Engine virtual machine. The script is printing errors that it cannot connect to BigQuery.\n\nWhat should you do to fix the script?",
        "question-zh": "您編寫了一個 Python 腳本來從 Google Compute Engine 虛擬機器連接到 Google BigQuery。該腳本印出錯誤訊息，表示無法連接到 BigQuery。\n\n您應該如何修復該腳本？",
        "options": {
            "A": "Install the latest BigQuery API client library for Python",
            "B": "Run your script on a new virtual machine with the BigQuery access scope enabled",
            "C": "Create a new service account with BigQuery access and execute your script with that user",
            "D": "Install the bq component for gcloud with the command gcloud components install bq."
        },
        "options-zh": {
            "A": "安裝最新的 Python 版 BigQuery API 用戶端程式庫",
            "B": "在啟用了 BigQuery 存取範圍的新虛擬機器上運行您的腳本",
            "C": "建立一個具有 BigQuery 存取權限的新服務帳戶，並使用該使用者執行您的腳本",
            "D": "使用命令 gcloud components install bq 安裝 gcloud 的 bq 元件"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#11",
        "link": "https://www.examtopics.com/discussions/google/view/7133-exam-professional-cloud-architect-topic-1-question-11/",
        "question": "Your customer is moving an existing corporate application to Google Cloud Platform from an on-premises data center. The business owners require minimal user disruption. There are strict security team requirements for storing passwords.\n\nWhat authentication strategy should they use?",
        "question-zh": "您的客戶正在將現有的企業應用程式從地端資料中心遷移到 Google Cloud Platform。業務負責人要求將使用者干擾降至最低。安全團隊對密碼儲存有嚴格要求。\n\n他們應該使用什麼身份驗證策略？",
        "options": {
            "A": "Use G Suite Password Sync to replicate passwords into Google",
            "B": "Federate authentication via SAML 2.0 to the existing Identity Provider",
            "C": "Provision users in Google using the Google Cloud Directory Sync tool",
            "D": "Ask users to set their Google password to match their corporate password"
        },
        "options-zh": {
            "A": "使用 G Suite Password Sync 將密碼複製到 Google",
            "B": "透過 SAML 2.0 將身份驗證聯合到現有的身份提供者",
            "C": "使用 Google Cloud Directory Sync 工具在 Google 中佈建使用者",
            "D": "要求使用者將其 Google 密碼設定為與其企業密碼相符"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#12",
        "link": "https://www.examtopics.com/discussions/google/view/7134-exam-professional-cloud-architect-topic-1-question-12/",
        "question": "Your company has successfully migrated to the cloud and wants to analyze their data stream to optimize operations. They do not have any existing code for this analysis, so they are exploring all their options. These options include a mix of batch and stream processing, as they are running some hourly jobs and live- processing some data as it comes in.\n\nWhich technology should they use for this?",
        "question-zh": "您的公司已成功遷移到雲端，並希望分析其資料流以優化營運。他們沒有任何現有的分析代碼，因此正在探索所有選項。這些選項包括批次和串流處理的混合，因為他們正在運行一些每小時的工作，並即時處理傳入的資料。\n\n他們應該使用哪種技術？",
        "options": {
            "A": "Google Cloud Dataproc",
            "B": "Google Cloud Dataflow",
            "C": "Google Container Engine with Bigtable",
            "D": "Google Compute Engine with Google BigQuery"
        },
        "options-zh": {
            "A": "Google Cloud Dataproc",
            "B": "Google Cloud Dataflow",
            "C": "Google Container Engine 搭配 Bigtable",
            "D": "Google Compute Engine 搭配 Google BigQuery"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#13",
        "link": "https://www.examtopics.com/discussions/google/view/7137-exam-professional-cloud-architect-topic-1-question-13/",
        "question": "Your customer is receiving reports that their recently updated Google App Engine application is taking approximately 30 seconds to load for some of their users.\n\nThis behavior was not reported before the update.\n\nWhat strategy should you take?",
        "question-zh": "您的客戶收到報告稱，他們最近更新的 Google App Engine 應用程式需要大約 30 秒才能為部分使用者載入。\n\n在更新之前沒有報告過此行為。\n\n您應該採取什麼策略？",
        "options": {
            "A": "Work with your ISP to diagnose the problem",
            "B": "Open a support ticket to ask for network capture and flow data to diagnose the problem, then roll back your application",
            "C": "Roll back to an earlier known good release initially, then use Stackdriver Trace and Logging to diagnose the problem in a development/test/staging environment",
            "D": "Roll back to an earlier known good release, then push the release again at a quieter period to investigate. Then use Stackdriver Trace and Logging to diagnose the problem"
        },
        "options-zh": {
            "A": "與您的 ISP 合作診斷問題",
            "B": "開啟支援工單以請求網路捕獲和流量資料來診斷問題，然後回滾您的應用程式",
            "C": "首先回滾到先前已知的良好版本，然後在開發/測試/預備環境中使用 Stackdriver Trace 和 Logging 來診斷問題",
            "D": "回滾到先前已知的良好版本，然後在較安靜的時段再次推送版本以進行調查。然後使用 Stackdriver Trace 和 Logging 來診斷問題"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#14",
        "link": "https://www.examtopics.com/discussions/google/view/7142-exam-professional-cloud-architect-topic-1-question-14/",
        "question": "A production database virtual machine on Google Compute Engine has an ext4-formatted persistent disk for data files. The database is about to run out of storage space.\n\nHow can you remediate the problem with the least amount of downtime?",
        "question-zh": "Google Compute Engine 上的生產資料庫虛擬機器有一個用於資料檔案的 ext4 格式永久磁碟。該資料庫即將耗盡儲存空間。\n\n您如何以最少的停機時間來解決這個問題？",
        "options": {
            "A": "In the Cloud Platform Console, increase the size of the persistent disk and use the resize2fs command in Linux.",
            "B": "Shut down the virtual machine, use the Cloud Platform Console to increase the persistent disk size, then restart the virtual machine",
            "C": "In the Cloud Platform Console, increase the size of the persistent disk and verify the new space is ready to use with the fdisk command in Linux",
            "D": "In the Cloud Platform Console, create a new persistent disk attached to the virtual machine, format and mount it, and configure the database service to move the files to the new disk",
            "E": "In the Cloud Platform Console, create a snapshot of the persistent disk restore the snapshot to a new larger disk, unmount the old disk, mount the new disk and restart the database service"
        },
        "options-zh": {
            "A": "在 Cloud Platform Console 中增加永久磁碟的大小，並在 Linux 中使用 resize2fs 命令",
            "B": "關閉虛擬機器，使用 Cloud Platform Console 增加永久磁碟大小，然後重新啟動虛擬機器",
            "C": "在 Cloud Platform Console 中增加永久磁碟的大小，並使用 Linux 中的 fdisk 命令驗證新空間已準備好使用",
            "D": "在 Cloud Platform Console 中建立一個連接到虛擬機器的新永久磁碟，格式化並掛載它，並配置資料庫服務將檔案移動到新磁碟",
            "E": "在 Cloud Platform Console 中建立永久磁碟的快照，將快照還原到更大的新磁碟，卸載舊磁碟，掛載新磁碟並重新啟動資料庫服務"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#15",
        "link": "https://www.examtopics.com/discussions/google/view/7147-exam-professional-cloud-architect-topic-1-question-15/",
        "question": "Your application needs to process credit card transactions. You want the smallest scope of Payment Card Industry (PCI) compliance without compromising the ability to analyze transactional data and trends relating to which payment methods are used.\n\nHow should you design your architecture?",
        "question-zh": "您的應用程式需要處理信用卡交易。您希望在不影響分析交易資料和與所使用付款方式相關的趨勢能力的前提下，將支付卡產業（PCI）合規範圍縮至最小。\n\n您應該如何設計架構？",
        "options": {
            "A": "Create a tokenizer service and store only tokenized data",
            "B": "Create separate projects that only process credit card data",
            "C": "Create separate subnetworks and isolate the components that process credit card data",
            "D": "Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data",
            "E": "Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor"
        },
        "options-zh": {
            "A": "建立代幣化服務，僅儲存代幣化資料",
            "B": "建立僅處理信用卡資料的單獨專案",
            "C": "建立單獨的子網路並隔離處理信用卡資料的元件",
            "D": "透過標記所有處理 PCI 資料的虛擬機器（VM）來簡化稽核發現階段",
            "E": "啟用日誌匯出到 Google BigQuery，並使用 ACL 和檢視來限定與稽核員共享的資料範圍"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#16",
        "link": "https://www.examtopics.com/discussions/google/view/20238-exam-professional-cloud-architect-topic-1-question-16/",
        "question": "You have been asked to select the storage system for the click-data of your company's large portfolio of websites. This data is streamed in from a custom website analytics package at a typical rate of 6,000 clicks per minute. With bursts of up to 8,500 clicks per second. It must have been stored for future analysis by your data science and user experience teams.\n\nWhich storage infrastructure should you choose?",
        "question-zh": "您被要求為公司大型網站組合的點擊資料選擇儲存系統。這些資料從自訂網站分析套件以每分鐘 6,000 次點擊的典型速率串流傳入，爆發時最高可達每秒 8,500 次點擊。它必須被儲存以供資料科學和使用者體驗團隊進行未來分析。\n\n您應該選擇哪種儲存基礎設施？",
        "options": {
            "A": "Google Cloud SQL",
            "B": "Google Cloud Bigtable",
            "C": "Google Cloud Storage",
            "D": "Google Cloud Datastore"
        },
        "options-zh": {
            "A": "Google Cloud SQL",
            "B": "Google Cloud Bigtable",
            "C": "Google Cloud Storage",
            "D": "Google Cloud Datastore"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#17",
        "link": "https://www.examtopics.com/discussions/google/view/7150-exam-professional-cloud-architect-topic-1-question-17/",
        "question": "You are creating a solution to remove backup files older than 90 days from your backup Cloud Storage bucket. You want to optimize ongoing Cloud Storage spend.\n\nWhat should you do?",
        "question-zh": "您正在建立一個解決方案，以從備份 Cloud Storage 儲存桶中移除超過 90 天的備份檔案。您希望優化持續的 Cloud Storage 支出。\n\n您應該怎麼做？",
        "options": {
            "A": "Write a lifecycle management rule in XML and push it to the bucket with gsutil",
            "B": "Write a lifecycle management rule in JSON and push it to the bucket with gsutil",
            "C": "Schedule a cron script using gsutil ls ג€\"lr gs://backups/** to find and remove items older than 90 days",
            "D": "Schedule a cron script using gsutil ls ג€\"l gs://backups/** to find and remove items older than 90 days and schedule it with cron"
        },
        "options-zh": {
            "A": "以 XML 格式編寫生命週期管理規則，並使用 gsutil 將其推送到儲存桶",
            "B": "以 JSON 格式編寫生命週期管理規則，並使用 gsutil 將其推送到儲存桶",
            "C": "使用 gsutil ls -lr gs://backups/** 安排 cron 腳本以尋找並移除超過 90 天的項目",
            "D": "使用 gsutil ls -l gs://backups/** 安排 cron 腳本以尋找並移除超過 90 天的項目，並使用 cron 安排它"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#18",
        "link": "https://www.examtopics.com/discussions/google/view/7154-exam-professional-cloud-architect-topic-1-question-18/",
        "question": "Your company is forecasting a sharp increase in the number and size of Apache Spark and Hadoop jobs being run on your local datacenter. You want to utilize the cloud to help you scale this upcoming demand with the least amount of operations work and code change.\n\nWhich product should you use?",
        "question-zh": "您的公司預測在本地資料中心運行的 Apache Spark 和 Hadoop 作業的數量和規模將大幅增加。您希望利用雲端來幫助您擴展這一即將到來的需求，並且以最少的營運工作和程式碼變更。\n\n您應該使用哪種產品？",
        "options": {
            "A": "Google Cloud Dataflow",
            "B": "Google Cloud Dataproc",
            "C": "Google Compute Engine",
            "D": "Google Kubernetes Engine"
        },
        "options-zh": {
            "A": "Google Cloud Dataflow",
            "B": "Google Cloud Dataproc",
            "C": "Google Compute Engine",
            "D": "Google Kubernetes Engine"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#19",
        "link": "https://www.examtopics.com/discussions/google/view/7161-exam-professional-cloud-architect-topic-1-question-19/",
        "question": "The database administration team has asked you to help them improve the performance of their new database server running on Google Compute Engine. The database is for importing and normalizing their performance statistics and is built with MySQL running on Debian Linux. They have an n1-standard-8 virtual machine with 80 GB of SSD persistent disk.\n\nWhat should they change to get better performance from this system?",
        "question-zh": "資料庫管理團隊請您協助改善他們在 Google Compute Engine 上運行的新資料庫伺服器的效能。該資料庫用於匯入和規範化其效能統計資料，並使用在 Debian Linux 上運行的 MySQL 建構。他們擁有一台 n1-standard-8 虛擬機器，配備 80 GB 的 SSD 永久磁碟。\n\n他們應該變更什麼以從此系統獲得更好的效能？",
        "options": {
            "A": "Increase the virtual machine's memory to 64 GB",
            "B": "Create a new virtual machine running PostgreSQL",
            "C": "Dynamically resize the SSD persistent disk to 500 GB",
            "D": "Migrate their performance metrics warehouse to BigQuery",
            "E": "Modify all of their batch jobs to use bulk inserts into the database"
        },
        "options-zh": {
            "A": "將虛擬機器的記憶體增加到 64 GB",
            "B": "建立一台運行 PostgreSQL 的新虛擬機器",
            "C": "動態調整 SSD 永久磁碟大小至 500 GB",
            "D": "將其效能指標倉儲遷移到 BigQuery",
            "E": "修改所有批次作業以使用批次插入資料庫"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#20",
        "link": "https://www.examtopics.com/discussions/google/view/22386-exam-professional-cloud-architect-topic-1-question-20/",
        "question": "You want to optimize the performance of an accurate, real-time, weather-charting application. The data comes from 50,000 sensors sending 10 readings a second, in the format of a timestamp and sensor reading.\n\nWhere should you store the data?",
        "question-zh": "您希望優化準確、即時的天氣圖表應用程式的效能。資料來自 50,000 個感測器，每秒發送 10 個讀數，格式為時間戳記和感測器讀數。\n\n您應該將資料儲存在哪裡？",
        "options": {
            "A": "Google BigQuery",
            "B": "Google Cloud SQL",
            "C": "Google Cloud Bigtable",
            "D": "Google Cloud Storage"
        },
        "options-zh": {
            "A": "Google BigQuery",
            "B": "Google Cloud SQL",
            "C": "Google Cloud Bigtable",
            "D": "Google Cloud Storage"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#21",
        "link": "https://www.examtopics.com/discussions/google/view/7128-exam-professional-cloud-architect-topic-1-question-21/",
        "question": "Your company's user-feedback portal comprises a standard LAMP stack replicated across two zones. It is deployed in the us-central1 region and uses autoscaled managed instance groups on all layers, except the database. Currently, only a small group of select customers have access to the portal. The portal meets a 99,99% availability SLA under these conditions. However next quarter, your company will be making the portal available to all users, including unauthenticated users. You need to develop a resiliency testing strategy to ensure the system maintains the SLA once they introduce additional user load.\n\nWhat should you do?",
        "question-zh": "您公司的使用者回饋入口網站由跨兩個區域複製的標準 LAMP 堆疊組成。它部署在 us-central1 區域，並在除資料庫之外的所有層級上使用自動擴展的受管理實例群組。目前，只有一小群特定客戶可以存取該入口網站。在這些條件下，入口網站達到了 99.99% 的可用性 SLA。然而，下一季度，您的公司將向所有使用者（包括未經身份驗證的使用者）開放該入口網站。您需要制定彈性測試策略，以確保系統在引入額外使用者負載後仍能維持 SLA。\n\n您應該怎麼做？",
        "options": {
            "A": "Capture existing users input, and replay captured user load until autoscale is triggered on all layers. At the same time, terminate all resources in one of the zones",
            "B": "Create synthetic random user input, replay synthetic load until autoscale logic is triggered on at least one layer, and introduce ג€chaosג€ to the system by terminating random resources on both zones",
            "C": "Expose the new system to a larger group of users, and increase group size each day until autoscale logic is triggered on all layers. At the same time, terminate random resources on both zones",
            "D": "Capture existing users input, and replay captured user load until resource utilization crosses 80%. Also, derive estimated number of users based on existing user's usage of the app, and deploy enough resources to handle 200% of expected load"
        },
        "options-zh": {
            "A": "捕獲現有使用者輸入，並重播捕獲的使用者負載，直到所有層級觸發自動擴展。同時，終止其中一個區域中的所有資源",
            "B": "建立合成隨機使用者輸入，重播合成負載直到至少一層觸發自動擴展邏輯，並透過終止兩個區域中的隨機資源向系統引入「混亂」",
            "C": "將新系統暴露給更大的使用者群組，並每天增加群組大小，直到所有層級觸發自動擴展邏輯。同時，終止兩個區域中的隨機資源",
            "D": "捕獲現有使用者輸入，並重播捕獲的使用者負載，直到資源利用率超過 80%。同時，根據現有使用者對應用程式的使用情況推導估計的使用者數量，並部署足夠的資源來處理預期負載的 200%"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#22",
        "link": "https://www.examtopics.com/discussions/google/view/54406-exam-professional-cloud-architect-topic-1-question-22/",
        "question": "One of the developers on your team deployed their application in Google Container Engine with the Dockerfile below. They report that their application deployments are taking too long.\n\nYou want to optimize this Dockerfile for faster deployment times without adversely affecting the app's functionality.\n\nWhich two actions should you take? (Choose two.)",
        "question-zh": "您團隊中的一位開發人員使用下面的 Dockerfile 在 Google Container Engine 中部署了他們的應用程式。他們報告說應用程式部署花費的時間太長。\n\n您希望優化此 Dockerfile 以加快部署時間，而不會對應用程式的功能產生不利影響。\n\n您應該採取哪兩項行動？（請選擇兩項。）",
        "options": {
            "A": "Remove Python after running pip",
            "B": "Remove dependencies from requirements.txt",
            "C": "Use a slimmed-down base image like Alpine Linux",
            "D": "Use larger machine types for your Google Container Engine node pools",
            "E": "Copy the source after he package dependencies (Python and pip) are installed"
        },
        "options-zh": {
            "A": "在運行 pip 後移除 Python",
            "B": "從 requirements.txt 中移除依賴項",
            "C": "使用精簡的基礎映像檔，例如 Alpine Linux",
            "D": "為您的 Google Container Engine 節點池使用更大的機器類型",
            "E": "在安裝套件依賴項（Python 和 pip）後複製原始碼"
        },
        "images": [
            "images/Question-22.png"
        ],
        "answers": [
            "C",
            "E"
        ]
    },
    {
        "topic": "#1",
        "no": "#23",
        "link": "https://www.examtopics.com/discussions/google/view/7167-exam-professional-cloud-architect-topic-1-question-23/",
        "question": "Your solution is producing performance bugs in production that you did not see in staging and test environments. You want to adjust your test and deployment procedures to avoid this problem in the future.\n\nWhat should you do?",
        "question-zh": "您的解決方案在生產環境中產生了效能錯誤，而這些錯誤在預備和測試環境中並未出現。您希望調整測試和部署程序，以避免將來出現此問題。\n\n您應該怎麼做？",
        "options": {
            "A": "Deploy fewer changes to production",
            "B": "Deploy smaller changes to production",
            "C": "Increase the load on your test and staging environments",
            "D": "Deploy changes to a small subset of users before rolling out to production"
        },
        "options-zh": {
            "A": "減少部署到生產環境的變更",
            "B": "將較小的變更部署到生產環境",
            "C": "增加測試和預備環境的負載",
            "D": "在推出到生產環境之前，先將變更部署到一小部分使用者"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#24",
        "link": "https://www.examtopics.com/discussions/google/view/10898-exam-professional-cloud-architect-topic-1-question-24/",
        "question": "A small number of API requests to your microservices-based application take a very long time. You know that each request to the API can traverse many services.\n\nYou want to know which service takes the longest in those cases.\n\nWhat should you do?",
        "question-zh": "您的微服務應用程式中有少數 API 請求需要非常長的時間。您知道每個 API 請求可能會經過許多服務。\n\n您想知道在這些情況下哪個服務花費的時間最長。\n\n您應該怎麼做？",
        "options": {
            "A": "Set timeouts on your application so that you can fail requests faster",
            "B": "Send custom metrics for each of your requests to Stackdriver Monitoring",
            "C": "Use Stackdriver Monitoring to look for insights that show when your API latencies are high",
            "D": "Instrument your application with Stackdriver Trace in order to break down the request latencies at each microservice"
        },
        "options-zh": {
            "A": "在應用程式上設定逾時，以便更快地使請求失敗",
            "B": "將每個請求的自訂指標發送到 Stackdriver Monitoring",
            "C": "使用 Stackdriver Monitoring 尋找顯示 API 延遲高的見解",
            "D": "使用 Stackdriver Trace 檢測您的應用程式，以便分解每個微服務的請求延遲"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#25",
        "link": "https://www.examtopics.com/discussions/google/view/7118-exam-professional-cloud-architect-topic-1-question-25/",
        "question": "During a high traffic portion of the day, one of your relational databases crashes, but the replica is never promoted to a master. You want to avoid this in the future.\n\nWhat should you do?",
        "question-zh": "在一天中的高流量時段，您的其中一個關係型資料庫崩潰了，但複本從未被提升為主資料庫。您希望將來避免這種情況。\n\n您應該怎麼做？",
        "options": {
            "A": "Use a different database",
            "B": "Choose larger instances for your database",
            "C": "Create snapshots of your database more regularly",
            "D": "Implement routinely scheduled failovers of your databases"
        },
        "options-zh": {
            "A": "使用不同的資料庫",
            "B": "為您的資料庫選擇更大的實例",
            "C": "更定期地建立資料庫快照",
            "D": "實施定期排程的資料庫故障轉移"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#26",
        "link": "https://www.examtopics.com/discussions/google/view/7172-exam-professional-cloud-architect-topic-1-question-26/",
        "question": "Your organization requires that metrics from all applications be retained for 5 years for future analysis in possible legal proceedings.\n\nWhich approach should you use?",
        "question-zh": "您的組織要求保留所有應用程式的指標 5 年，以供未來可能的法律訴訟中進行分析。\n\n您應該使用哪種方法？",
        "options": {
            "A": "Grant the security team access to the logs in each Project",
            "B": "Configure Stackdriver Monitoring for all Projects, and export to BigQuery",
            "C": "Configure Stackdriver Monitoring for all Projects with the default retention policies",
            "D": "Configure Stackdriver Monitoring for all Projects, and export to Google Cloud Storage"
        },
        "options-zh": {
            "A": "授予安全團隊存取每個專案中日誌的權限",
            "B": "為所有專案配置 Stackdriver Monitoring，並匯出到 BigQuery",
            "C": "為所有專案配置 Stackdriver Monitoring，使用預設保留政策",
            "D": "為所有專案配置 Stackdriver Monitoring，並匯出到 Google Cloud Storage"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#27",
        "link": "https://www.examtopics.com/discussions/google/view/11781-exam-professional-cloud-architect-topic-1-question-27/",
        "question": "Your company has decided to build a backup replica of their on-premises user authentication PostgreSQL database on Google Cloud Platform. The database is 4TB, and large updates are frequent. Replication requires private address space communication.\n\nWhich networking approach should you use?",
        "question-zh": "您的公司決定在 Google Cloud Platform 上建立其地端使用者身份驗證 PostgreSQL 資料庫的備份複本。該資料庫為 4TB，且大型更新頻繁。複寫需要私有位址空間通訊。\n\n您應該使用哪種網路方法？",
        "options": {
            "A": "Google Cloud Dedicated Interconnect",
            "B": "Google Cloud VPN connected to the data center network",
            "C": "A NAT and TLS translation gateway installed on-premises",
            "D": "A Google Compute Engine instance with a VPN server installed connected to the data center network"
        },
        "options-zh": {
            "A": "Google Cloud Dedicated Interconnect",
            "B": "連接到資料中心網路的 Google Cloud VPN",
            "C": "在地端安裝 NAT 和 TLS 轉譯閘道",
            "D": "安裝了 VPN 伺服器並連接到資料中心網路的 Google Compute Engine 實例"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#28",
        "link": "https://www.examtopics.com/discussions/google/view/6884-exam-professional-cloud-architect-topic-1-question-28/",
        "question": "Auditors visit your teams every 12 months and ask to review all the Google Cloud Identity and Access Management (Cloud IAM) policy changes in the previous 12 months. You want to streamline and expedite the analysis and audit process.\n\nWhat should you do?",
        "question-zh": "稽核員每 12 個月造訪您的團隊一次，並要求審查前 12 個月內所有 Google Cloud Identity and Access Management（Cloud IAM）政策變更。您希望簡化並加快分析和稽核流程。\n\n您應該怎麼做？",
        "options": {
            "A": "Create custom Google Stackdriver alerts and send them to the auditor",
            "B": "Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor",
            "C": "Use cloud functions to transfer log entries to Google Cloud SQL and use ACLs and views to limit an auditor's view",
            "D": "Enable Google Cloud Storage (GCS) log export to audit logs into a GCS bucket and delegate access to the bucket"
        },
        "options-zh": {
            "A": "建立自訂 Google Stackdriver 警示並將其發送給稽核員",
            "B": "啟用日誌匯出到 Google BigQuery，並使用 ACL 和檢視來限定與稽核員共享的資料範圍",
            "C": "使用雲端函式將日誌項目傳輸到 Google Cloud SQL，並使用 ACL 和檢視來限制稽核員的檢視",
            "D": "啟用 Google Cloud Storage（GCS）日誌匯出以將稽核日誌匯出到 GCS 儲存桶，並委派儲存桶的存取權限"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#29",
        "link": "https://www.examtopics.com/discussions/google/view/7200-exam-professional-cloud-architect-topic-1-question-29/",
        "question": "You are designing a large distributed application with 30 microservices. Each of your distributed microservices needs to connect to a database back-end. You want to store the credentials securely.\n\nWhere should you store the credentials?",
        "question-zh": "您正在設計一個具有 30 個微服務的大型分散式應用程式。您的每個分散式微服務都需要連接到資料庫後端。您希望安全地儲存憑證。\n\n您應該將憑證儲存在哪裡？",
        "options": {
            "A": "In the source code",
            "B": "In an environment variable",
            "C": "In a secret management system",
            "D": "In a config file that has restricted access through ACLs"
        },
        "options-zh": {
            "A": "在原始碼中",
            "B": "在環境變數中",
            "C": "在機密管理系統中",
            "D": "在透過 ACL 限制存取的配置檔案中"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#30",
        "link": "https://www.examtopics.com/discussions/google/view/54125-exam-professional-cloud-architect-topic-1-question-30/",
        "question": "A lead engineer wrote a custom tool that deploys virtual machines in the legacy data center. He wants to migrate the custom tool to the new cloud environment.\n\nYou want to advocate for the adoption of Google Cloud Deployment Manager.\n\nWhat are two business risks of migrating to Cloud Deployment Manager? (Choose two.)",
        "question-zh": "一位首席工程師編寫了一個在舊有資料中心部署虛擬機器的自訂工具。他希望將該自訂工具遷移到新的雲端環境。\n\n您希望倡導採用 Google Cloud Deployment Manager。\n\n遷移到 Cloud Deployment Manager 有哪兩個業務風險？（請選擇兩項。）",
        "options": {
            "A": "Cloud Deployment Manager uses Python",
            "B": "Cloud Deployment Manager APIs could be deprecated in the future",
            "C": "Cloud Deployment Manager is unfamiliar to the company's engineers",
            "D": "Cloud Deployment Manager requires a Google APIs service account to run",
            "E": "Cloud Deployment Manager can be used to permanently delete cloud resources",
            "F": "Cloud Deployment Manager only supports automation of Google Cloud resources"
        },
        "options-zh": {
            "A": "Cloud Deployment Manager 使用 Python",
            "B": "Cloud Deployment Manager API 未來可能會被棄用",
            "C": "Cloud Deployment Manager 對公司的工程師來說不熟悉",
            "D": "Cloud Deployment Manager 需要 Google API 服務帳戶才能運行",
            "E": "Cloud Deployment Manager 可用於永久刪除雲端資源",
            "F": "Cloud Deployment Manager 僅支援 Google Cloud 資源的自動化"
        },
        "images": [],
        "answers": [
            "B",
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#31",
        "link": "https://www.examtopics.com/discussions/google/view/54389-exam-professional-cloud-architect-topic-1-question-31/",
        "question": "A development manager is building a new application. He asks you to review his requirements and identify what cloud technologies he can use to meet them. The application must:\n\n1. Be based on open-source technology for cloud portability\n\n2. Dynamically scale compute capacity based on demand\n\n3. Support continuous software delivery\n\n4. Run multiple segregated copies of the same application stack\n\n5. Deploy application bundles using dynamic templates\n\n6. Route network traffic to specific services based on URL\n\nWhich combination of technologies will meet all of his requirements?",
        "question-zh": "一位開發經理正在建構新的應用程式。他要求您審查他的需求並確定可以使用哪些雲端技術來滿足這些需求。應用程式必須：\n\n1. 基於開源技術以實現雲端可攜性\n\n2. 根據需求動態擴展運算容量\n\n3. 支援持續軟體交付\n\n4. 運行同一應用程式堆疊的多個隔離副本\n\n5. 使用動態範本部署應用程式套件\n\n6. 根據 URL 將網路流量路由到特定服務\n\n哪種技術組合將滿足他的所有需求？",
        "options": {
            "A": "Google Kubernetes Engine, Jenkins, and Helm",
            "B": "Google Kubernetes Engine and Cloud Load Balancing",
            "C": "Google Kubernetes Engine and Cloud Deployment Manager",
            "D": "Google Kubernetes Engine, Jenkins, and Cloud Load Balancing"
        },
        "options-zh": {
            "A": "Google Kubernetes Engine、Jenkins 和 Helm",
            "B": "Google Kubernetes Engine 和 Cloud Load Balancing",
            "C": "Google Kubernetes Engine 和 Cloud Deployment Manager",
            "D": "Google Kubernetes Engine、Jenkins 和 Cloud Load Balancing"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#32",
        "link": "https://www.examtopics.com/discussions/google/view/7202-exam-professional-cloud-architect-topic-1-question-32/",
        "question": "You have created several pre-emptible Linux virtual machine instances using Google Compute Engine. You want to properly shut down your application before the virtual machines are preempted.\n\nWhat should you do?",
        "question-zh": "您使用 Google Compute Engine 建立了多個可搶佔的 Linux 虛擬機器執行個體。您希望在虛擬機器被搶佔之前正確關閉您的應用程式。\n\n您應該怎麼做？",
        "options": {
            "A": "Create a shutdown script named k99.shutdown in the /etc/rc.6.d/ directory",
            "B": "Create a shutdown script registered as a xinetd service in Linux and configure a Stackdriver endpoint check to call the service",
            "C": "Create a shutdown script and use it as the value for a new metadata entry with the key shutdown-script in the Cloud Platform Console when you create the new virtual machine instance",
            "D": "Create a shutdown script, registered as a xinetd service in Linux, and use the gcloud compute instances add-metadata command to specify the service URL as the value for a new metadata entry with the key shutdown-script-url"
        },
        "options-zh": {
            "A": "在 /etc/rc.6.d/ 目錄中建立名為 k99.shutdown 的關閉腳本",
            "B": "建立一個在 Linux 中註冊為 xinetd 服務的關閉腳本，並配置 Stackdriver 端點檢查來呼叫該服務",
            "C": "建立一個關閉腳本，並在 Cloud Platform Console 中建立新的虛擬機器執行個體時，將其用作具有 shutdown-script 金鑰的新中繼資料項目的值",
            "D": "建立一個在 Linux 中註冊為 xinetd 服務的關閉腳本，並使用 gcloud compute instances add-metadata 命令將服務 URL 指定為具有 shutdown-script-url 金鑰的新中繼資料項目的值"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#33",
        "link": "https://www.examtopics.com/discussions/google/view/9033-exam-professional-cloud-architect-topic-1-question-33/",
        "question": "Your organization has a 3-tier web application deployed in the same network on Google Cloud Platform. Each tier (web, API, and database) scales independently of the others. Network traffic should flow through the web to the API tier and then on to the database tier. Traffic should not flow between the web and the database tier.\n\nHow should you configure the network?",
        "question-zh": "您的組織在 Google Cloud Platform 的同一網路中部署了一個三層式網頁應用程式。每一層（網頁、API 和資料庫）都可以獨立擴展。網路流量應該從網頁層流向 API 層，然後流向資料庫層。流量不應在網頁層和資料庫層之間流動。\n\n您應該如何配置網路？",
        "options": {
            "A": "Add each tier to a different subnetwork",
            "B": "Set up software based firewalls on individual VMs",
            "C": "Add tags to each tier and set up routes to allow the desired traffic flow",
            "D": "Add tags to each tier and set up firewall rules to allow the desired traffic flow"
        },
        "options-zh": {
            "A": "將每一層加入不同的子網路",
            "B": "在個別 VM 上設定基於軟體的防火牆",
            "C": "為每一層新增標籤並設定路由以允許所需的流量流動",
            "D": "為每一層新增標籤並設定防火牆規則以允許所需的流量流動"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#34",
        "link": "https://www.examtopics.com/discussions/google/view/54535-exam-professional-cloud-architect-topic-1-question-34/",
        "question": "Your development team has installed a new Linux kernel module on the batch servers in Google Compute Engine (GCE) virtual machines (VMs) to speed up the nightly batch process. Two days after the installation, 50% of the batch servers failed the nightly batch run. You want to collect details on the failure to pass back to the development team.\n\nWhich three actions should you take? (Choose three.)",
        "question-zh": "您的開發團隊在 Google Compute Engine（GCE）虛擬機器（VM）的批次伺服器上安裝了新的 Linux 核心模組，以加快夜間批次處理流程。安裝後兩天，50% 的批次伺服器在夜間批次執行時失敗。您想收集失敗的詳細資訊以回報給開發團隊。\n\n您應該採取哪三項行動？（請選擇三項。）",
        "options": {
            "A": "Use Stackdriver Logging to search for the module log entries",
            "B": "Read the debug GCE Activity log using the API or Cloud Console",
            "C": "Use gcloud or Cloud Console to connect to the serial console and observe the logs",
            "D": "Identify whether a live migration event of the failed server occurred, using in the activity log",
            "E": "Adjust the Google Stackdriver timeline to match the failure time, and observe the batch server metrics",
            "F": "Export a debug VM into an image, and run the image on a local server where kernel log messages will be displayed on the native screen"
        },
        "options-zh": {
            "A": "使用 Stackdriver Logging 搜尋模組日誌項目",
            "B": "使用 API 或 Cloud Console 讀取除錯 GCE 活動日誌",
            "C": "使用 gcloud 或 Cloud Console 連接到序列主控台並觀察日誌",
            "D": "使用活動日誌識別失敗伺服器是否發生了即時遷移事件",
            "E": "調整 Google Stackdriver 時間軸以符合失敗時間，並觀察批次伺服器指標",
            "F": "將除錯 VM 匯出為映像檔，並在本地伺服器上運行該映像檔，核心日誌訊息將顯示在本機螢幕上"
        },
        "images": [],
        "answers": [
            "A",
            "C",
            "E"
        ]
    },
    {
        "topic": "#1",
        "no": "#35",
        "link": "https://www.examtopics.com/discussions/google/view/54534-exam-professional-cloud-architect-topic-1-question-35/",
        "question": "Your company wants to try out the cloud with low risk. They want to archive approximately大約 100 TB of their log data to the cloud and test the analytics features available to them there, while also retaining保留 that data as a long-term disaster recovery backup.\n\nWhich two steps should you take? (Choose two.)",
        "question-zh": "您的公司希望以低風險嘗試雲端服務。他們希望將大約 100 TB 的日誌資料歸檔到雲端，並測試可用的分析功能，同時保留這些資料作為長期災難復原備份。\n\n您應該採取哪兩個步驟？（選兩個。）",
        "options": {
            "A": "Load logs into Google BigQuery",
            "B": "Load logs into Google Cloud SQL",
            "C": "Import logs into Google Stackdriver",
            "D": "Insert logs into Google Cloud Bigtable",
            "E": "Upload log files into Google Cloud Storage"
        },
        "options-zh": {
            "A": "將日誌載入到 Google BigQuery",
            "B": "將日誌載入到 Google Cloud SQL",
            "C": "將日誌匯入 Google Stackdriver",
            "D": "將日誌插入 Google Cloud Bigtable",
            "E": "將日誌檔案上傳到 Google Cloud Storage"
        },
        "images": [],
        "answers": [
            "A",
            "E"
        ]
    },
    {
        "topic": "#1",
        "no": "#36",
        "link": "https://www.examtopics.com/discussions/google/view/10522-exam-professional-cloud-architect-topic-1-question-36/",
        "question": "You created a pipeline that can deploy your source code changes to your infrastructure in instance groups for self-healing. One of the changes negatively消極地 affects your key performance indicator指標. You are not sure how to fix it, and investigation調查 could take up to a week.\n\nWhat should you do?",
        "question-zh": "您建立了一個管道，用於將原始碼變更部署到實例組中的基礎架構中，以實現自我修復。其中一項變更對您的關鍵績效指標 (KPI) 產生了負面影響。您不確定如何修復該問題，調查可能需要長達一周的時間。\n\n您應該怎麼做？",
        "options": {
            "A": "Log in to a server, and iterate on the fox locally",
            "B": "Revert the source code change, and rerun the deployment pipeline",
            "C": "Log into the servers with the bad code change, and swap in the previous code",
            "D": "Change the instance group template to the previous one, and delete all instances"
        },
        "options-zh": {
            "A": "登入伺服器，在本地迭代 fox",
            "B": "恢復原始碼更改，並重新運行部署管道",
            "C": "使用錯誤代碼變更登入伺服器，並交換先前的代碼",
            "D": "將實例群組模板變更為先前的模板，並刪除所有實例"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#37",
        "link": "https://www.examtopics.com/discussions/google/view/7208-exam-professional-cloud-architect-topic-1-question-37/",
        "question": "Your organization wants to control IAM policies for different departments independently, but centrally.\n\nWhich approach should you take?",
        "question-zh": "您的組織希望獨立但集中地控制不同部門的 IAM 政策。\n\n您應該採用哪種方法？",
        "options": {
            "A": "Multiple Organizations with multiple Folders",
            "B": "Multiple Organizations, one for each department",
            "C": "A single Organization with Folders for each department",
            "D": "A single Organization with multiple projects, each with a central owner"
        },
        "options-zh": {
            "A": "多個組織和多個資料夾",
            "B": "多個組織，每個部門一個",
            "C": "一個包含每個部門資料夾的組織",
            "D": "一個擁有多個專案的組織，每個專案都有一個中央所有者"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#38",
        "link": "https://www.examtopics.com/discussions/google/view/7209-exam-professional-cloud-architect-topic-1-question-38/",
        "question": "You deploy your custom Java application to Google App Engine. It fails to deploy and gives you the following stack trace.",
        "question-zh": "您將自訂 Java 應用程式部署至 Google App Engine。部署失敗，並顯示下列堆疊追蹤。",
        "options": {
            "A": "Upload missing JAR files and redeploy your application.",
            "B": "Digitally sign all of your JAR files and redeploy your application",
            "C": "Recompile the CLoakedServlet class using and MD5 hash instead of SHA1"
        },
        "options-zh": {
            "A": "上傳遺失的 JAR 檔案並重新部署您的應用程式。",
            "B": "對所有 JAR 檔案進行數位簽署並重新部署您的應用程式",
            "C": "使用 MD5 哈希而不是 SHA1 重新編譯 CLoakedServlet 類別"
        },
        "images": [
            "images/Question-38.png"
        ],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#39",
        "link": "https://www.examtopics.com/discussions/google/view/6844-exam-professional-cloud-architect-topic-1-question-39/",
        "question": "You are designing a mobile chat application. You want to ensure people cannot spoof欺騙 chat messages, by providing a message were sent by a specific user.\n\nWhat should you do?",
        "question-zh": "您正在設計一個行動聊天應用程式。您希望透過提供由特定使用者發送的訊息來確保人們無法偽造聊天訊息。\n\n 您應該怎麼做？",
        "options": {
            "A": "Tag messages client side with the originating user identifier and the destination user.",
            "B": "Encrypt the message client side using block-based encryption with a shared key.",
            "C": "Use public key infrastructure (PKI) to encrypt the message client side using the originating user's private key.",
            "D": "Use a trusted certificate authority to enable SSL connectivity between the client application and the server."
        },
        "options-zh": {
            "A": "在客戶端使用原始使用者識別碼和目標使用者標記訊息。",
            "B": "使用基於區塊的加密和共用金鑰對客戶端訊息進行加密。",
            "C": "使用公鑰基礎架構 (PKI) 透過原始使用者的私鑰加密用戶端訊息。",
            "D": "使用受信任的憑證授權單位來啟用用戶端應用程式和伺服器之間的 SSL 連線。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#40",
        "link": "https://www.examtopics.com/discussions/google/view/7211-exam-professional-cloud-architect-topic-1-question-40/",
        "question": "As part of implementing their disaster災難 recovery plan, your company is trying to replicate their production MySQL database from their private data center to their GCP project using a Google Cloud VPN connection. They are experiencing latency issues and a small amount of packet loss that is disrupting擾亂 the replication.\n\nWhat should they do?",
        "question-zh": "作為實施災難復原計畫的一部分，貴公司正嘗試使用 Google Cloud VPN 連線將其生產 MySQL 資料庫從私有資料中心複製到其 GCP 專案。他們遇到了延遲問題和少量資料包遺失，導致複製中斷。\n\n 他們應該怎麼做？",
        "options": {
            "A": "Configure their replication to use UDP.",
            "B": "Configure a Google Cloud Dedicated Interconnect.",
            "C": "Restore their database daily using Google Cloud SQL.",
            "D": "Add additional VPN connections and load balance them.",
            "E": "Send the replicated transaction to Google Cloud Pub/Sub."
        },
        "options-zh": {
            "A": "配置它們的複製以使用 UDP。",
            "B": "設定 Google Cloud 專用互連。",
            "C": "使用 Google Cloud SQL 每天恢復他們的資料庫。",
            "D": "新增額外的 VPN 連線並對其進行負載平衡。",
            "E": "將複製的交易傳送到 Google Cloud Pub/Sub。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#41",
        "link": "https://www.examtopics.com/discussions/google/view/11803-exam-professional-cloud-architect-topic-1-question-41/",
        "question": "Your customer support tool logs all email and chat conversations to Cloud Bigtable for retention保留 and analysis. What is the recommended approach for sanitizing this data of personally identifiable information or payment card information before initial storage?",
        "question-zh": "您的客戶支援工具會將所有電子郵件和聊天對話記錄到 Cloud Bigtable 中進行保留和分析。在初始儲存之前，建議如何清理這些資料中的個人識別資訊或支付卡資訊？",
        "options": {
            "A": "Hash all data using SHA256",
            "B": "Encrypt all data using elliptic curve cryptography",
            "C": "De-identify the data with the Cloud Data Loss Prevention API",
            "D": "Use regular expressions to find and redact phone numbers, email addresses, and credit card numbers"
        },
        "options-zh": {
            "A": "使用 SHA256 對所有資料進行雜湊處理",
            "B": "使用橢圓曲線密碼術加密所有資料",
            "C": "使用 Cloud Data Loss Prevention API 對資料進行去識別化",
            "D": "使用正規表示式尋找和編輯電話號碼、電子郵件地址和信用卡號碼"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#42",
        "link": "https://www.examtopics.com/discussions/google/view/7212-exam-professional-cloud-architect-topic-1-question-42/",
        "question": "You are using Cloud Shell and need to install a custom utility for use in a few weeks. Where can you store the file so it is in the default execution path and persists across sessions?",
        "question-zh": "您正在使用 Cloud Shell，並且需要安裝自訂實用程式以供幾週後使用。您可以將該檔案儲存在哪裡，以便它位於預設執行路徑中並在會話之間持久保存？",
        "options": {
            "A": "~/bin",
            "B": "Cloud Storage",
            "C": "/google/scripts",
            "D": "/usr/local/bin"
        },
        "options-zh": {
            "A": "~/bin",
            "B": "Cloud Storage",
            "C": "/google/scripts",
            "D": "/usr/local/bin"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#43",
        "link": "https://www.examtopics.com/discussions/google/view/11804-exam-professional-cloud-architect-topic-1-question-43/",
        "question": "You want to create a private connection between your instances on Compute Engine and your on-premises data center. You require a connection of at least 20 Gbps. You want to follow Google-recommended practices. How should you set up the connection?",
        "question-zh": "您想要在 Compute Engine 上的實例和本地資料中心之間建立私有連線。您需要至少 20 Gbps 的連線速度。您想遵循 Google 建議的做法。您應該如何設定連線？",
        "options": {
            "A": "Create a VPC and connect it to your on-premises data center using Dedicated Interconnect.",
            "B": "Create a VPC and connect it to your on-premises data center using a single Cloud VPN.",
            "C": "Create a Cloud Content Delivery Network (Cloud CDN) and connect it to your on-premises data center using Dedicated Interconnect.",
            "D": "Create a Cloud Content Delivery Network (Cloud CDN) and connect it to your on-premises datacenter using a single Cloud VPN."
        },
        "options-zh": {
            "A": "建立一個 VPC 並使用專用互連將其連接到您的本地資料中心。",
            "B": "建立一個 VPC 並使用單一 Cloud VPN 將其連接到您的本地資料中心。",
            "C": "建立雲端內容傳遞網路 (Cloud CDN) 並使用專用互連將其連接到您的本地資料中心。",
            "D": "創建雲端內容分發網路（Cloud CDN）並使用單一 Cloud VPN 將其連接到您的本地資料中心。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#44",
        "link": "https://www.examtopics.com/discussions/google/view/7190-exam-professional-cloud-architect-topic-1-question-44/",
        "question": "You are analyzing and defining business processes to support your startup's trial usage試用 of GCP, and you don't yet know what consumer demand for your product will be. Your manager requires you to minimize GCP service costs and adhere to Google best practices. What should you do?",
        "question-zh": "您正在分析和定義業務流程，以支援您的新創公司試用 GCP，但您尚不清楚消費者對您的產品的需求。您的經理要求您盡量降低 GCP 服務成本，並遵循 Google 的最佳實務。您應該怎麼做？",
        "options": {
            "A": "Utilize free tier and sustained use discounts. Provision a staff position for service cost management.",
            "B": "Utilize free tier and sustained use discounts. Provide training to the team about service cost management.",
            "C": "Utilize free tier and committed use承諾使用 discounts. Provision a staff position for service cost management.",
            "D": "Utilize free tier and committed use承諾使用 discounts. Provide training to the team about service cost management."
        },
        "options-zh": {
            "A": "利用免費套餐和持續使用折扣。為服務成本管理提供員工職位。",
            "B": "利用免費套餐和持續使用折扣。為團隊提供服務成本管理方面的培訓。",
            "C": "利用免費套餐和承諾使用折扣。為服務成本管理提供一名員工職位。",
            "D": "利用免費套餐和承諾使用折扣。為團隊提供服務成本管理方面的培訓。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#45",
        "link": "https://www.examtopics.com/discussions/google/view/8197-exam-professional-cloud-architect-topic-1-question-45/",
        "question": "You are building a continuous連續的 deployment pipeline for a project stored in a Git source repository and want to ensure that code changes can be verified before deploying to production. What should you do?",
        "question-zh": "您正在為儲存在 Git 來源儲存庫中的專案建立連續的部署管道，並希望確保在部署到生產環境之前可以驗證程式碼變更。您應該怎麼做？",
        "options": {
            "A": "Use Spinnaker to deploy builds to production using the red/black deployment strategy so that changes can easily be rolled back.",
            "B": "Use Spinnaker to deploy builds to production and run tests on production deployments.",
            "C": "Use Jenkins to build the staging branches and the master branch. Build and deploy changes to production for 10% of users before doing a complete rollout.",
            "D": "Use Jenkins to monitor tags in the repository. Deploy staging tags to a staging environment for testing. After testing, tag the repository for production and deploy that to the production environment."
        },
        "options-zh": {
            "A": "使用 Spinnaker 透過紅/黑部署策略將建置部署到生產環境，以便輕鬆回滾變更。",
            "B": "使用 Spinnaker 將建置部署到生產環境並在生產部署上執行測試。",
            "C": "使用 Jenkins 建置暫存分支和主分支。在全面部署之前，先為 10% 的使用者建置並部署變更到生產環境。",
            "D": "使用 Jenkins 監控倉庫中的標籤。將暫存標籤部署到暫存環境進行測試。測試完成後，將倉庫標記為生產環境，並將其部署到生產環境。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#46",
        "link": "https://www.examtopics.com/discussions/google/view/6953-exam-professional-cloud-architect-topic-1-question-46/",
        "question": "You have an outage停電 in your Compute Engine managed instance group: all instances keep restarting after 5 seconds. You have a health check configured, but autoscaling is disabled. Your colleague同事, who is a Linux expert, offered to look into the issue. You need to make sure that he can access the VMs. What should you do?",
        "question-zh": "您的 Compute Engine 受管實例群組發生停機：所有實例每 5 秒就重新啟動一次。您已設定健康檢查，但已停用自動擴展。您的同事（Linux 專家）提出協助調查此問題。您需要確保他能存取這些 VM。您該怎麼做？",
        "options": {
            "A": "Grant your colleague the IAM role of project Viewer",
            "B": "Perform a rolling restart on the instance group",
            "C": "Disable the health check for the instance group. Add his SSH key to the project-wide SSH Keys",
            "D": "Disable autoscaling for the instance group. Add his SSH key to the project-wide SSH Keys"
        },
        "options-zh": {
            "A": "給您的同事專案檢視者的 IAM 角色",
            "B": "對實例群組執行滾動重啟",
            "C": "停用實例群組的健康檢查，並將他的 SSH 金鑰加入專案層級 SSH 金鑰",
            "D": "停用實例群組的自動擴展，並將他的 SSH 金鑰加入專案層級 SSH 金鑰"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#47",
        "link": "https://www.examtopics.com/discussions/google/view/54735-exam-professional-cloud-architect-topic-1-question-47/",
        "question": "Your company is migrating its on-premises data center into the cloud. As part of the migration, you want to integrate整合 Google Kubernetes Engine (GKE) for workload orchestration工作負載編排. Parts of your architecture must also be PCI DSS-compliant. Which of the following is most accurate?",
        "question-zh": "您的公司正在將地端資料中心遷移到雲端。作為遷移的一部分，您希望整合 Google Kubernetes Engine (GKE) 進行工作負載編排。部分架構還必須符合 PCI DSS。下列哪一項最正確？",
        "options": {
            "A": "App Engine is the only compute platform on GCP that is certified for PCI DSS hosting.",
            "B": "GKE cannot be used under PCI DSS because it is considered shared hosting.",
            "C": "GKE and GCP provide the tools you need to build a PCI DSS-compliant environment.",
            "D": "All Google Cloud services are usable because Google Cloud Platform is certified PCI-compliant."
        },
        "options-zh": {
            "A": "App Engine 是 GCP 上唯一獲得 PCI DSS 認證的運算平台。",
            "B": "GKE 無法用於 PCI DSS，因為它被視為共用主機。",
            "C": "GKE 和 GCP 提供建構 PCI DSS 合規環境所需的工具。",
            "D": "所有 Google Cloud 服務都可用，因為 Google Cloud Platform 已獲得 PCI 合規認證。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#48",
        "link": "https://www.examtopics.com/discussions/google/view/7267-exam-professional-cloud-architect-topic-1-question-48/",
        "question": "Your company has multiple on-premises systems that serve as sources for reporting. The data has not been maintained well and has become degraded退化的 over time.\n\nYou want to use Google-recommended practices to detect探測 anomalies異常現象 in your company data. What should you do?",
        "question-zh": "您的公司有多個地端系統作為報表來源。這些資料隨時間退化，維護不佳。\n\n您希望採用 Google 建議的做法來偵測公司資料中的異常現象。您該怎麼做？",
        "options": {
            "A": "Upload your files into Cloud Storage. Use Cloud Datalab to explore and clean your data.",
            "B": "Upload your files into Cloud Storage. Use Cloud Dataprep to explore and clean your data.",
            "C": "Connect Cloud Datalab to your on-premises systems. Use Cloud Datalab to explore and clean your data.",
            "D": "Connect Cloud Dataprep to your on-premises systems. Use Cloud Dataprep to explore and clean your data."
        },
        "options-zh": {
            "A": "將檔案上傳到 Cloud Storage，使用 Cloud Datalab 探索並清理資料。",
            "B": "將檔案上傳到 Cloud Storage，使用 Cloud Dataprep 探索並清理資料。",
            "C": "將 Cloud Datalab 連接到地端系統，使用 Cloud Datalab 探索並清理資料。",
            "D": "將 Cloud Dataprep 連接到地端系統，使用 Cloud Dataprep 探索並清理資料。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#49",
        "link": "https://www.examtopics.com/discussions/google/view/6846-exam-professional-cloud-architect-topic-1-question-49/",
        "question": "Google Cloud Platform resources are managed hierarchically分層地 using organization, folders, and projects. When Cloud Identity and Access Management (IAM) policies exist at these different levels, what is the effective policy at a particular node of the hierarchy?",
        "question-zh": "Google Cloud Platform 資源以組織、資料夾和專案分層管理。當 Cloud IAM 政策存在於這些不同層級時，某個節點的有效政策為何？",
        "options": {
            "A": "The effective policy is determined only by the policy set at the node",
            "B": "The effective policy is the policy set at the node and restricted by the policies of its ancestors祖先",
            "C": "The effective policy is the union of the policy set at the node and policies inherited from its ancestors祖先",
            "D": "The effective policy is the intersection of the policy set at the node and policies inherited from its ancestors祖先"
        },
        "options-zh": {
            "A": "僅由該節點設定的政策決定有效政策",
            "B": "有效政策為該節點設定的政策，並受其祖先政策限制",
            "C": "有效政策為該節點設定的政策與繼承自祖先的政策的聯集",
            "D": "有效政策為該節點設定的政策與繼承自祖先的政策的交集"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#50",
        "link": "https://www.examtopics.com/discussions/google/view/7042-exam-professional-cloud-architect-topic-1-question-50/",
        "question": "You are migrating your on-premises solution to Google Cloud in several phases階段. You will use Cloud VPN to maintain a connection between your on-premises systems and Google Cloud until the migration is completed. You want to make sure all your on-premise systems remain reachable during this period時期. How should you organize your networking in Google Cloud?",
        "question-zh": "您正分階段將地端解決方案遷移到 Google Cloud。您將使用 Cloud VPN 維持地端系統與 Google Cloud 之間的連線，直到遷移完成。您希望在此期間所有地端系統都能存取。您該如何規劃 Google Cloud 的網路？",
        "options": {
            "A": "Use the same IP range on Google Cloud as you use on-premises",
            "B": "Use the same IP range on Google Cloud as you use on-premises for your primary IP range and use a secondary range that does not overlap with the range you use on-premises",
            "C": "Use an IP range on Google Cloud that does not overlap with the range you use on-premises",
            "D": "Use an IP range on Google Cloud that does not overlap with the range you use on-premises for your primary IP range and use a secondary range with the same IP range as you use on-premises"
        },
        "options-zh": {
            "A": "Google Cloud 使用與地端相同的 IP 範圍",
            "B": "Google Cloud 主要 IP 範圍與地端相同，次要範圍不重疊",
            "C": "Google Cloud 使用與地端不重疊的 IP 範圍",
            "D": "Google Cloud 主要 IP 範圍與地端不重疊，次要範圍與地端相同"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#51",
        "link": "https://www.examtopics.com/discussions/google/view/7231-exam-professional-cloud-architect-topic-1-question-51/",
        "question": "You have found an error in your App Engine application caused by missing Cloud Datastore indexes. You have created a YAML file with the required indexes and want to deploy these new indexes to Cloud Datastore. What should you do?",
        "question-zh": "你發現 App Engine 應用程式因缺少 Cloud Datastore 索引而出錯。你已建立包含所需索引的 YAML 檔案，想將這些新索引部署到 Cloud Datastore。你該怎麼做？",
        "options": {
            "A": "Point gcloud datastore create-indexes to your configuration file",
            "B": "Upload the configuration file to App Engine's default Cloud Storage bucket, and have App Engine detect the new indexes",
            "C": "In the GCP Console, use Datastore Admin to delete the current indexes and upload the new configuration file",
            "D": "Create an HTTP request to the built-in python module to send the index configuration file to your application"
        },
        "options-zh": {
            "A": "使用 gcloud datastore create-indexes 指向你的設定檔案。",
            "B": "將設定檔上傳到 App Engine 預設的 Cloud Storage bucket，讓 App Engine 偵測新索引。",
            "C": "在 GCP 控制台使用 Datastore Admin 刪除現有索引並上傳新設定檔。",
            "D": "建立 HTTP 請求，透過內建 python 模組將索引設定檔傳送到應用程式。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#52",
        "link": "https://www.examtopics.com/discussions/google/view/7273-exam-professional-cloud-architect-topic-1-question-52/",
        "question": "You have an application that will run on Compute Engine. You need to design an architecture that takes into account a disaster**災難** recovery plan that requires your application to fail over to another region in case of a regional outage. What should you do?",
        "question-zh": "你有一個要在 Compute Engine 執行的應用程式，需設計能因應災難復原的架構，當某區域故障時應能切換到其他區域。你該怎麼做？",
        "options": {
            "A": "Deploy the application on two Compute Engine instances in the same project but in a different region. Use the first instance to serve traffic, and use the HTTP load balancing service to fail over to the standby instance in case of a disaster.",
            "B": "Deploy the application on a Compute Engine instance. Use the instance to serve traffic, and use the HTTP load balancing service to fail over to an instance on your premises in case of a disaster.",
            "C": "Deploy the application on two Compute Engine instance groups, each in the same project but in a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster.",
            "D": "Deploy the application on two Compute Engine instance groups, each in a separate project and a different region. Use the first instance group to serve traffic, and use the HTTP load balancing service to fail over to the standby instance group in case of a disaster."
        },
        "options-zh": {
            "A": "在同一專案但不同區域部署兩個 Compute Engine 實例。主實例服務流量，災難時 HTTP 負載平衡切換到備援實例。",
            "B": "在 Compute Engine 部署應用，主機服務流量，災難時 HTTP 負載平衡切換到本地端實例。",
            "C": "在同一專案但不同區域部署兩個 Compute Engine 實例群組。主群組服務流量，災難時 HTTP 負載平衡切換到備援群組。",
            "D": "在不同專案與區域部署兩個 Compute Engine 實例群組。主群組服務流量，災難時 HTTP 負載平衡切換到備援群組。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#53",
        "link": "https://www.examtopics.com/discussions/google/view/6314-exam-professional-cloud-architect-topic-1-question-53/",
        "question": "You are deploying an application on App Engine that needs to integrate with an on-premises database. For security purposes, your on-premises database must not be accessible through the public internet. What should you do?",
        "question-zh": "你要在 App Engine 部署一個需整合內部資料庫的應用程式。為了安全，內部資料庫不能經由公網存取。你該怎麼做？",
        "options": {
            "A": "Deploy your application on App Engine standard environment and use App Engine firewall rules to limit access to the open on-premises database.",
            "B": "Deploy your application on App Engine standard environment and use Cloud VPN to limit access to the on-premises database.",
            "C": "Deploy your application on App Engine flexible environment and use App Engine firewall rules to limit access to the on-premises database.",
            "D": "Deploy your application on App Engine flexible environment and use Cloud VPN to limit access to the on-premises database."
        },
        "options-zh": {
            "A": "將應用程式部署於 App Engine 標準環境，並用 App Engine 防火牆規則限制對內部資料庫的存取。",
            "B": "將應用程式部署於 App Engine 標準環境，並用 Cloud VPN 限制對內部資料庫的存取。",
            "C": "將應用程式部署於 App Engine 彈性環境，並用 App Engine 防火牆規則限制對內部資料庫的存取。",
            "D": "將應用程式部署於 App Engine 彈性環境，並用 Cloud VPN 限制對內部資料庫的存取。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#54",
        "link": "https://www.examtopics.com/discussions/google/view/7180-exam-professional-cloud-architect-topic-1-question-54/",
        "question": "You are working in a highly secured environment where public Internet access from the Compute Engine VMs is not allowed. You do not yet have a VPN connection to access an on-premises file server. You need to install specific software on a Compute Engine instance. How should you install the software?",
        "question-zh": "您在高度安全的環境中工作，Compute Engine VM 不允許存取公共網際網路。您尚未有 VPN 連線可存取地端檔案伺服器。您需要在 Compute Engine 實例上安裝特定軟體。您該如何安裝？",
        "options": {
            "A": "Upload the required installation files to Cloud Storage. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gsutil.",
            "B": "Upload the required installation files to Cloud Storage and use firewall rules to block all traffic except the IP address range for Cloud Storage. Download the files to the VM using gsutil.",
            "C": "Upload the required installation files to Cloud Source Repositories. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gcloud.",
            "D": "Upload the required installation files to Cloud Source Repositories and use firewall rules to block all traffic except the IP address range for Cloud Source Repositories. Download the files to the VM using gsutil."
        },
        "options-zh": {
            "A": "將所需安裝檔案上傳到 Cloud Storage。將 VM 配置在具有 Private Google Access 的子網路，僅分配內部 IP，使用 gsutil 下載安裝檔案。",
            "B": "將所需安裝檔案上傳到 Cloud Storage，並使用防火牆規則僅允許 Cloud Storage IP 範圍，使用 gsutil 下載檔案。",
            "C": "將所需安裝檔案上傳到 Cloud Source Repositories。將 VM 配置在具有 Private Google Access 的子網路，僅分配內部 IP，使用 gcloud 下載安裝檔案。",
            "D": "將所需安裝檔案上傳到 Cloud Source Repositories，並使用防火牆規則僅允許 Cloud Source Repositories IP 範圍，使用 gsutil 下載檔案。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#55",
        "link": "https://www.examtopics.com/discussions/google/view/7043-exam-professional-cloud-architect-topic-1-question-55/",
        "question": "Your company is moving 75 TB of data into Google Cloud. You want to use Cloud Storage and follow Google-recommended practices. What should you do?",
        "question-zh": "您的公司正在將 75 TB 資料移至 Google Cloud。您希望使用 Cloud Storage 並遵循 Google 建議的做法。您該怎麼做？",
        "options": {
            "A": "Move your data onto a Transfer Appliance. Use a Transfer Appliance Rehydrator to decrypt the data into Cloud Storage.",
            "B": "Move your data onto a Transfer Appliance. Use Cloud Dataprep to decrypt the data into Cloud Storage.",
            "C": "Install gsutil on each server that contains data. Use resumable transfers to upload the data into Cloud Storage.",
            "D": "Install gsutil on each server containing data. Use streaming transfers to upload the data into Cloud Storage."
        },
        "options-zh": {
            "A": "將資料移至 Transfer Appliance，使用 Transfer Appliance Rehydrator 解密到 Cloud Storage。",
            "B": "將資料移至 Transfer Appliance，使用 Cloud Dataprep 解密到 Cloud Storage。",
            "C": "在每台有資料的伺服器安裝 gsutil，使用可恢復傳輸上傳到 Cloud Storage。",
            "D": "在每台有資料的伺服器安裝 gsutil，使用串流傳輸上傳到 Cloud Storage。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#56",
        "link": "https://www.examtopics.com/discussions/google/view/7184-exam-professional-cloud-architect-topic-1-question-56/",
        "question": "You have an application deployed on Google Kubernetes Engine using a Deployment named echo-deployment. The deployment is exposed using a Service called echo-service. You need to perform an update to the application with minimal downtime to the application. What should you do?",
        "question-zh": "您有一個應用程式部署在 Google Kubernetes Engine 上，使用名為 echo-deployment 的 Deployment，並透過名為 echo-service 的 Service 對外提供服務。您需要對應用程式進行更新，並將停機時間降到最低。您該怎麼做？",
        "options": {
            "A": "Use kubectl set image deployment/echo-deployment <new-image>",
            "B": "Use the rolling update functionality of the Instance Group behind the Kubernetes cluster",
            "C": "Update the deployment yaml file with the new container image. Use kubectl delete deployment/echo-deployment and kubectl create ג€\"f <yaml-file>",
            "D": "Update the service yaml file which the new container image. Use kubectl delete service/echo-service and kubectl create ג€\"f <yaml-file>"
        },
        "options-zh": {
            "A": "使用 kubectl set image deployment/echo-deployment <new-image> 指令",
            "B": "使用 Kubernetes 叢集背後的 Instance Group 的 rolling update 功能",
            "C": "更新 deployment yaml 檔案，刪除並重新建立 deployment",
            "D": "更新 service yaml 檔案，刪除並重新建立 service"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#57",
        "link": "https://www.examtopics.com/discussions/google/view/68708-exam-professional-cloud-architect-topic-1-question-57/",
        "question": "Your company is using BigQuery as its enterprise data warehouse. Data is distributed over several Google Cloud projects. All queries on BigQuery need to be billed on a single project. You want to make sure that no query costs are incurred on the projects that contain the data. Users should be able to query the datasets, but not edit them.\n\nHow should you configure users' access roles?",
        "question-zh": "您的公司將 BigQuery 作為企業資料倉儲，資料分散在多個 Google Cloud 專案。所有 BigQuery 查詢都必須計入單一專案的費用。您希望確保包含資料的專案不會產生查詢費用。使用者應能查詢資料集，但不能編輯。\n\n您該如何設定使用者的存取角色？",
        "options": {
            "A": "Add all users to a group. Grant the group the role of BigQuery user on the billing project and BigQuery dataViewer on the projects that contain the data.",
            "B": "Add all users to a group. Grant the group the roles of BigQuery dataViewer on the billing project and BigQuery user on the projects that contain the data.",
            "C": "Add all users to a group. Grant the group the roles of BigQuery jobUser on the billing project and BigQuery dataViewer on the projects that contain the data.",
            "D": "Add all users to a group. Grant the group the roles of BigQuery dataViewer on the billing project and BigQuery jobUser on the projects that contain the data."
        },
        "options-zh": {
            "A": "將所有使用者加入群組，並在計費專案給予 BigQuery user 角色，在資料專案給予 BigQuery dataViewer 角色。",
            "B": "將所有使用者加入群組，在計費專案給予 BigQuery dataViewer 角色，在資料專案給予 BigQuery user 角色。",
            "C": "將所有使用者加入群組，在計費專案給予 BigQuery jobUser 角色，在資料專案給予 BigQuery dataViewer 角色。",
            "D": "將所有使用者加入群組，在計費專案給予 BigQuery dataViewer 角色，在資料專案給予 BigQuery jobUser 角色。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#58",
        "link": "https://www.examtopics.com/discussions/google/view/6889-exam-professional-cloud-architect-topic-1-question-58/",
        "question": "You have developed an application using Cloud ML Engine that recognizes famous paintings from uploaded images. You want to test the application and allow specific people to upload images for the next 24 hours. Not all users have a Google Account. How should you have users upload images?",
        "question-zh": "您開發了一個使用 Cloud ML Engine 的應用程式，可以辨識上傳圖片中的著名畫作。您想測試此應用程式，並允許特定人員在未來 24 小時內上傳圖片。不是所有使用者都有 Google 帳號。您該如何讓使用者上傳圖片？",
        "options": {
            "A": "Have users upload the images to Cloud Storage. Protect the bucket with a password that expires after 24 hours.",
            "B": "Have users upload the images to Cloud Storage using a signed URL that expires after 24 hours.",
            "C": "Create an App Engine web application where users can upload images. Configure App Engine to disable the application after 24 hours. Authenticate users via Cloud Identity.",
            "D": "Create an App Engine web application where users can upload images for the next 24 hours. Authenticate users via Cloud Identity."
        },
        "options-zh": {
            "A": "讓使用者將圖片上傳到 Cloud Storage，並用 24 小時後失效的密碼保護 bucket。",
            "B": "讓使用者使用 24 小時後失效的簽名網址上傳圖片到 Cloud Storage。",
            "C": "建立 App Engine 網頁應用程式讓使用者上傳圖片，並設定 24 小時後停用，使用 Cloud Identity 驗證。",
            "D": "建立 App Engine 網頁應用程式讓使用者在 24 小時內上傳圖片，使用 Cloud Identity 驗證。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#59",
        "link": "https://www.examtopics.com/discussions/google/view/7285-exam-professional-cloud-architect-topic-1-question-59/",
        "question": "Your web application must comply**遵守** with the requirements of the European Union's General Data Protection Regulation (GDPR). You are responsible for the technical architecture of your web application. What should you do?",
        "question-zh": "您的網頁應用程式必須遵守歐盟一般資料保護規範（GDPR）要求。您負責應用程式的技術架構。您該怎麼做？",
        "options": {
            "A": "Ensure that your web application only uses native features and services of Google Cloud Platform, because Google already has various certifications and provides ג€pass-onג€ compliance when you use native features.",
            "B": "Enable the relevant GDPR compliance setting within the GCPConsole for each of the services in use within your application.",
            "C": "Ensure that Cloud Security Scanner is part of your test planning strategy in order to pick up any compliance gaps.",
            "D": "Define a design for the security of data in your web application that meets GDPR requirements."
        },
        "options-zh": {
            "A": "確保您的應用程式僅使用 GCP 原生功能，因為 Google 已有多項認證，使用原生功能時可獲得合規保障。",
            "B": "在 GCP Console 為應用程式使用的每個服務啟用 GDPR 合規設定。",
            "C": "確保 Cloud Security Scanner 納入測試規劃，以發現合規缺口。",
            "D": "設計符合 GDPR 要求的資料安全架構。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#60",
        "link": "https://www.examtopics.com/discussions/google/view/6443-exam-professional-cloud-architect-topic-1-question-60/",
        "question": "You need to set up Microsoft SQL Server on GCP. Management requires that there's no downtime in case of a data center outage**停電** in any of the zones within a GCP region. What should you do?",
        "question-zh": "您需要在 GCP 上設置 Microsoft SQL Server。管理階層要求在 GCP 區域內任何區域發生資料中心停機時都不能有停機時間。您該怎麼做？",
        "options": {
            "A": "Configure a Cloud SQL instance with high availability enabled.",
            "B": "Configure a Cloud Spanner instance with a regional instance configuration.",
            "C": "Set up SQL Server on Compute Engine, using Always On Availability Groups using Windows Failover Clustering. Place nodes in different subnets.",
            "D": "Set up SQL Server Always On Availability Groups using Windows Failover Clustering. Place nodes in different zones."
        },
        "options-zh": {
            "A": "設定啟用高可用性的 Cloud SQL 實例。",
            "B": "設定具有區域性設定的 Cloud Spanner 實例。",
            "C": "在 Compute Engine 上設置 SQL Server，使用 Always On 可用性群組與 Windows 容錯叢集，將節點放在不同子網路。",
            "D": "設置 SQL Server Always On 可用性群組與 Windows 容錯叢集，將節點放在不同區域。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#61",
        "link": "https://www.examtopics.com/discussions/google/view/6330-exam-professional-cloud-architect-topic-1-question-61/",
        "question": "The development team has provided you with a Kubernetes Deployment file. You have no infrastructure yet and need to deploy the application. What should you do?",
        "question-zh": "開發團隊提供了一個 Kubernetes Deployment 檔案給您。您尚未有任何基礎設施，需要部署這個應用程式。您該怎麼做？",
        "options": {
            "A": "Use gcloud to create a Kubernetes cluster. Use Deployment Manager to create the deployment.",
            "B": "Use gcloud to create a Kubernetes cluster. Use kubectl to create the deployment.",
            "C": "Use kubectl to create a Kubernetes cluster. Use Deployment Manager to create the deployment.",
            "D": "Use kubectl to create a Kubernetes cluster. Use kubectl to create the deployment."
        },
        "options-zh": {
            "A": "使用 gcloud 建立 Kubernetes 叢集，再用 Deployment Manager 建立部署。",
            "B": "使用 gcloud 建立 Kubernetes 叢集，再用 kubectl 建立部署。",
            "C": "用 kubectl 建立 Kubernetes 叢集，再用 Deployment Manager 建立部署。",
            "D": "用 kubectl 建立 Kubernetes 叢集，再用 kubectl 建立部署。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#62",
        "link": "https://www.examtopics.com/discussions/google/view/8373-exam-professional-cloud-architect-topic-1-question-62/",
        "question": "You need to evaluate your team readiness for a new GCP project. You must perform the evaluation and create a skills gap plan which incorporates the business goal of cost optimization. Your team has deployed two GCP projects successfully to date. What should you do?",
        "question-zh": "您需要評估團隊對新 GCP 專案的準備情況。您必須進行評估並制定技能差距計畫，並納入成本最佳化的業務目標。您的團隊至今已成功部署兩個 GCP 專案。您該怎麼做？",
        "options": {
            "A": "Allocate budget for team training. Set a deadline for the new GCP project.",
            "B": "Allocate budget for team training. Create a roadmap for your team to achieve Google Cloud certification based on job role.",
            "C": "Allocate budget to hire skilled external consultants. Set a deadline for the new GCP project.",
            "D": "Allocate budget to hire skilled external consultants. Create a roadmap for your team to achieve Google Cloud certification based on job role."
        },
        "options-zh": {
            "A": "編列預算進行團隊訓練，並設定新 GCP 專案的截止日期。",
            "B": "編列預算進行團隊訓練，並根據職務規劃取得 Google Cloud 證照的路徑圖。",
            "C": "編列預算聘請有經驗的外部顧問，並設定新 GCP 專案的截止日期。",
            "D": "編列預算聘請外部顧問，並規劃團隊取得 Google Cloud 證照的路徑圖。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#63",
        "link": "https://www.examtopics.com/discussions/google/view/68714-exam-professional-cloud-architect-topic-1-question-63/",
        "question": "You are designing an application for use only during business hours. For the minimum viable product release, you'd like to use a managed product that automatically `scales to zero` so you don't incur costs when there is no activity.\n\nWhich primary compute resource should you choose?",
        "question-zh": "您正在設計一個僅於上班時間使用的應用程式。最小可行產品版本希望使用可自動『縮至零』的受管產品，讓沒有活動時不會產生成本。\n\n您應選擇哪一種主要運算資源？",
        "options": {
            "A": "Cloud Functions",
            "B": "Compute Engine",
            "C": "Google Kubernetes Engine",
            "D": "AppEngine flexible environment"
        },
        "options-zh": {
            "A": "Cloud Functions",
            "B": "Compute Engine",
            "C": "Google Kubernetes Engine",
            "D": "AppEngine 彈性環境"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#64",
        "link": "https://www.examtopics.com/discussions/google/view/7290-exam-professional-cloud-architect-topic-1-question-64/",
        "question": "You are creating an App Engine application that uses Cloud Datastore as its persistence layer. You need to retrieve several root entities for which you have the identifiers. You want to minimize the overhead in operations performed by Cloud Datastore. What should you do?",
        "question-zh": "您正在建立一個使用 Cloud Datastore 作為持久層的 App Engine 應用程式。您需要根據識別碼取得多個根實體。您希望將 Cloud Datastore 的操作負擔降到最低。您該怎麼做？",
        "options": {
            "A": "Create the Key object for each Entity and run a batch get operation",
            "B": "Create the Key object for each Entity and run multiple get operations, one operation for each entity",
            "C": "Use the identifiers to create a query filter and run a batch query operation",
            "D": "Use the identifiers to create a query filter and run multiple query operations, one operation for each entity"
        },
        "options-zh": {
            "A": "為每個實體建立 Key 物件並執行批次取得操作",
            "B": "為每個實體建立 Key 物件並分別執行多次取得操作",
            "C": "用識別碼建立查詢條件並執行批次查詢操作",
            "D": "用識別碼建立查詢條件並分別執行多次查詢操作"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#65",
        "link": "https://www.examtopics.com/discussions/google/view/6308-exam-professional-cloud-architect-topic-1-question-65/",
        "question": "You need to upload files from your on-premises environment to Cloud Storage. You want the files to be encrypted on Cloud Storage using customer-supplied encryption keys. What should you do?",
        "question-zh": "您需要將檔案從地端環境上傳到 Cloud Storage。您希望這些檔案在 Cloud Storage 上使用客戶提供的加密金鑰進行加密。您該怎麼做？",
        "options": {
            "A": "Supply the encryption key in a .boto configuration file. Use gsutil to upload the files.",
            "B": "Supply the encryption key using gcloud config. Use gsutil to upload the files to that bucket.",
            "C": "Use gsutil to upload the files, and use the flag --encryption-key to supply the encryption key.",
            "D": "Use gsutil to create a bucket, and use the flag --encryption-key to supply the encryption key. Use gsutil to upload the files to that bucket."
        },
        "options-zh": {
            "A": "在 .boto 設定檔中提供加密金鑰，並用 gsutil 上傳檔案。",
            "B": "用 gcloud config 提供加密金鑰，並用 gsutil 上傳檔案到該 bucket。",
            "C": "用 gsutil 上傳檔案，並用 --encryption-key 參數提供加密金鑰。",
            "D": "用 gsutil 建立 bucket，並用 --encryption-key 參數提供加密金鑰，再用 gsutil 上傳檔案到該 bucket。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#66",
        "link": "https://www.examtopics.com/discussions/google/view/9222-exam-professional-cloud-architect-topic-1-question-66/",
        "question": "Your customer wants to capture multiple GBs of aggregate real-time key performance indicators (KPIs) from their game servers running on Google Cloud Platform and monitor the KPIs with low latency. How should they capture the KPIs?",
        "question-zh": "您的客戶希望從其運行於 Google Cloud Platform 的遊戲伺服器擷取多 GB 的即時關鍵績效指標（KPI），並以低延遲監控這些 KPI。應如何擷取？",
        "options": {
            "A": "Store time-series data from the game servers in Google Bigtable, and view it using Google Data Studio.",
            "B": "Output custom metrics to Stackdriver from the game servers, and create a Dashboard in Stackdriver Monitoring Console to view them.",
            "C": "Schedule BigQuery load jobs to ingest analytics files uploaded to Cloud Storage every ten minutes, and visualize the results in Google Data Studio.",
            "D": "Insert the KPIs into Cloud Datastore entities, and run ad hoc analysis and visualizations of them in Cloud Datalab."
        },
        "options-zh": {
            "A": "將遊戲伺服器的時序資料存到 Google Bigtable，並用 Google Data Studio 檢視。",
            "B": "將自訂指標從遊戲伺服器輸出到 Stackdriver，並在 Stackdriver Monitoring Console 建立儀表板檢視。",
            "C": "排程 BigQuery 載入作業，每 10 分鐘將上傳到 Cloud Storage 的分析檔案匯入，並用 Google Data Studio 視覺化。",
            "D": "將 KPI 寫入 Cloud Datastore 實體，並在 Cloud Datalab 進行臨時分析與視覺化。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#67",
        "link": "https://www.examtopics.com/discussions/google/view/6890-exam-professional-cloud-architect-topic-1-question-67/",
        "question": "You have a Python web application with many dependencies that requires 0.1 CPU cores and 128 MB of memory to operate in production. You want to monitor and maximize machine utilization. You also want to reliably deploy new versions of the application. Which set of steps should you take?",
        "question-zh": "您有一個 Python 網頁應用程式，依賴套件多，生產環境需 0.1 CPU 核心與 128 MB 記憶體。您希望監控並最大化機器利用率，也要能可靠部署新版。應採取哪些步驟？",
        "options": {
            "A": "Perform the following: 1. Create a managed instance group with f1-micro type machines. 2. Use a startup script to clone the repository, check out the production branch, install the dependencies, and start the Python app. 3. Restart the instances to automatically deploy new production releases.",
            "B": "Perform the following: 1. Create a managed instance group with n1-standard-1 type machines. 2. Build a Compute Engine image from the production branch that contains all of the dependencies and automatically starts the Python app. 3. Rebuild the Compute Engine image, and update the instance template to deploy new production releases.",
            "C": "Perform the following: 1. Create a Google Kubernetes Engine (GKE) cluster with n1-standard-1 type machines. 2. Build a Docker image from the production branch with all of the dependencies, and tag it with the version number. 3. Create a Kubernetes Deployment with the imagePullPolicy set to 'IfNotPresent' in the staging namespace, and then promote it to the production namespace after testing.",
            "D": "Perform the following: 1. Create a GKE cluster with n1-standard-4 type machines. 2. Build a Docker image from the master branch with all of the dependencies, and tag it with 'latest'. 3. Create a Kubernetes Deployment in the default namespace with the imagePullPolicy set to 'Always'. Restart the pods to automatically deploy new production releases."
        },
        "options-zh": {
            "A": "執行下列步驟：1. 建立 f1-micro 型受管實例群組。2. 用啟動腳本 clone repository、切 production branch、安裝依賴並啟動 Python app。3. 重新啟動實例自動部署新版。",
            "B": "執行下列步驟：1. 建立 n1-standard-1 型受管實例群組。2. 用 production branch 建立含所有依賴的 Compute Engine 映像檔並自動啟動 Python app。3. 重建映像檔並更新實例模板以部署新版。",
            "C": "執行下列步驟：1. 建立 n1-standard-1 型 GKE 叢集。2. 用 production branch 建立含所有依賴的 Docker 映像檔並加上版本號。3. 在 staging namespace 建立 imagePullPolicy 設為 'IfNotPresent' 的 Deployment，測試後升級到 production namespace。",
            "D": "執行下列步驟：1. 建立 n1-standard-4 型 GKE 叢集。2. 用 master branch 建立含所有依賴的 Docker 映像檔並標記為 'latest'。3. 在 default namespace 建立 imagePullPolicy 設為 'Always' 的 Deployment，重啟 pod 自動部署新版。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#68",
        "link": "https://www.examtopics.com/discussions/google/view/6528-exam-professional-cloud-architect-topic-1-question-68/",
        "question": "Your company wants to start using Google Cloud resources but wants to retain their on-premises Active Directory domain controller for identity management.\n\nWhat should you do?",
        "question-zh": "您的公司想開始使用 Google Cloud 資源，但希望保留地端 Active Directory 網域控制器作為身分管理。\n\n您該怎麼做？",
        "options": {
            "A": "Use the Admin Directory API to authenticate against the Active Directory domain controller.",
            "B": "Use Google Cloud Directory Sync to synchronize Active Directory usernames with cloud identities and configure SAML SSO.",
            "C": "Use Cloud Identity-Aware Proxy configured to use the on-premises Active Directory domain controller as an identity provider.",
            "D": "Use Compute Engine to create an Active Directory (AD) domain controller that is a replica of the on-premises AD domain controller using Google Cloud Directory Sync."
        },
        "options-zh": {
            "A": "用 Admin Directory API 驗證 Active Directory 網域控制器。",
            "B": "用 Google Cloud Directory Sync 同步 AD 帳號到雲端身分，並設定 SAML SSO。",
            "C": "用 Cloud Identity-Aware Proxy 並設定地端 AD 網域控制器為身分提供者。",
            "D": "用 Compute Engine 建立 AD 網域控制器，並用 Google Cloud Directory Sync 複製地端 AD。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#69",
        "link": "https://www.examtopics.com/discussions/google/view/6892-exam-professional-cloud-architect-topic-1-question-69/",
        "question": "You are running a cluster on Kubernetes Engine (GKE) to serve a web application. Users are reporting that a specific part of the application is not responding anymore. You notice that all pods of your deployment keep restarting after 2 seconds. The application writes logs to standard output. You want to inspect the logs to find the cause of the issue. Which approach can you take?",
        "question-zh": "您在 Kubernetes Engine (GKE) 上運行叢集以服務網頁應用程式。使用者回報某部分無回應，您發現所有 pod 每 2 秒重啟一次。應用程式將日誌寫到標準輸出。您想檢查日誌找出原因。該怎麼做？",
        "options": {
            "A": "Review the Stackdriver logs for each Compute Engine instance that is serving as a node in the cluster.",
            "B": "Review the Stackdriver logs for the specific GKE container that is serving the unresponsive part of the application.",
            "C": "Connect to the cluster using gcloud credentials and connect to a container in one of the pods to read the logs.",
            "D": "Review the Serial Port logs for each Compute Engine instance that is serving as a node in the cluster."
        },
        "options-zh": {
            "A": "檢查叢集內每個 Compute Engine 節點的 Stackdriver 日誌。",
            "B": "檢查該 GKE container 的 Stackdriver 日誌。",
            "C": "用 gcloud 認證連線叢集，進入 pod 內 container 讀取日誌。",
            "D": "檢查叢集內每個 Compute Engine 節點的序列埠日誌。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#70",
        "link": "https://www.examtopics.com/discussions/google/view/11815-exam-professional-cloud-architect-topic-1-question-70/",
        "question": "You are using a single Cloud SQL instance to serve your application from a specific zone. You want to introduce high availability. What should you do?",
        "question-zh": "您使用單一 Cloud SQL 實例在特定區域服務應用程式。您希望導入高可用性。您該怎麼做？",
        "options": {
            "A": "Create a read replica instance in a different region",
            "B": "Create a failover replica instance in a different region",
            "C": "Create a read replica instance in the same region, but in a different zone",
            "D": "Create a failover replica instance in the same region, but in a different zone"
        },
        "options-zh": {
            "A": "在不同區域建立讀取複本實例",
            "B": "在不同區域建立故障切換複本實例",
            "C": "在同一區域但不同區建立讀取複本實例",
            "D": "在同一區域但不同區建立故障切換複本實例"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#71",
        "link": "https://www.examtopics.com/discussions/google/view/11301-exam-professional-cloud-architect-topic-1-question-71/",
        "question": "Your company is running a stateless application on a Compute Engine instance. The application is used heavily during regular business hours and lightly outside of business hours. Users are reporting that the application is slow during peak hours. You need to optimize the application's performance. What should you do?",
        "question-zh": "您的公司在 Compute Engine 實例上運行無狀態應用程式。上班時間流量大，非上班時間流量小。使用者回報尖峰時段應用程式變慢。您需優化效能。該怎麼做？",
        "options": {
            "A": "Create a snapshot of the existing disk. Create an instance template from the snapshot. Create an autoscaled managed instance group from the instance template.",
            "B": "Create a snapshot of the existing disk. Create a custom image from the snapshot. Create an autoscaled managed instance group from the custom image.",
            "C": "Create a custom image from the existing disk. Create an instance template from the custom image. Create an autoscaled managed instance group from the instance template.",
            "D": "Create an instance template from the existing disk. Create a custom image from the instance template. Create an autoscaled managed instance group from the custom image."
        },
        "options-zh": {
            "A": "為現有磁碟建立快照，從快照建立實例模板，並建立自動擴展受管實例群組。",
            "B": "為現有磁碟建立快照，從快照建立自訂映像檔，並建立自動擴展受管實例群組。",
            "C": "從現有磁碟建立自訂映像檔，從映像檔建立實例模板，並建立自動擴展受管實例群組。",
            "D": "從現有磁碟建立實例模板，從模板建立自訂映像檔，並建立自動擴展受管實例群組。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#72",
        "link": "https://www.examtopics.com/discussions/google/view/11816-exam-professional-cloud-architect-topic-1-question-72/",
        "question": "Your web application has several VM instances running within a VPC. You want to restrict communications between instances to only the paths and ports you authorize, but you don't want to rely on static IP addresses or subnets because the app can autoscale. How should you restrict communications?",
        "question-zh": "您的網頁應用程式有多個 VM 實例運行於 VPC 內。您希望僅允許授權的路徑與埠之間的通訊，但不想依賴固定 IP 或子網路，因為應用程式會自動擴展。您該如何限制通訊？",
        "options": {
            "A": "Use separate VPCs to restrict traffic",
            "B": "Use firewall rules based on network tags attached to the compute instances",
            "C": "Use Cloud DNS and only allow connections from authorized hostnames",
            "D": "Use service accounts and configure the web application to authorize particular service accounts to have access"
        },
        "options-zh": {
            "A": "使用不同 VPC 限制流量",
            "B": "根據附加於運算實例的網路標籤設定防火牆規則",
            "C": "使用 Cloud DNS 並僅允許授權主機名稱的連線",
            "D": "使用服務帳戶並設定應用程式授權特定服務帳戶存取"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#73",
        "link": "https://www.examtopics.com/discussions/google/view/6529-exam-professional-cloud-architect-topic-1-question-73/",
        "question": "You are using Cloud SQL as the database backend for a large CRM deployment. You want to scale as usage increases and ensure that you don't run out of storage, maintain 75% CPU usage cores, and keep replication lag below 60 seconds. What are the correct steps to meet your requirements?",
        "question-zh": "您將 Cloud SQL 作為大型 CRM 部署的資料庫後端。您希望隨著使用量增加而擴展，確保儲存空間不會用盡，CPU 使用率維持 75%，且複寫延遲低於 60 秒。正確步驟為何？",
        "options": {
            "A": "1. Enable automatic storage increase for the instance. 2. Create a Stackdriver alert when CPU usage exceeds 75%, and change the instance type to reduce CPU usage. 3. Create a Stackdriver alert for replication lag, and shard the database to reduce replication time.",
            "B": "1. Enable automatic storage increase for the instance. 2. Change the instance type to a 32-core machine type to keep CPU usage below 75%. 3. Create a Stackdriver alert for replication lag, and deploy memcache to reduce load on the master.",
            "C": "1. Create a Stackdriver alert when storage exceeds 75%, and increase the available storage on the instance to create more space. 2. Deploy memcached to reduce CPU load. 3. Change the instance type to a 32-core machine type to reduce replication lag.",
            "D": "1. Create a Stackdriver alert when storage exceeds 75%, and increase the available storage on the instance to create more space. 2. Deploy memcached to reduce CPU load. 3. Create a Stackdriver alert for replication lag, and change the instance type to a 32-core machine type to reduce replication lag."
        },
        "options-zh": {
            "A": "1. 啟用自動擴充儲存空間。2. 設定 Stackdriver 警示，CPU 超過 75% 時更換實例型別。3. 設定複寫延遲警示並分片資料庫。",
            "B": "1. 啟用自動擴充儲存空間。2. 更換為 32 核心機型以維持 CPU 低於 75%。3. 設定複寫延遲警示並部署 memcache。",
            "C": "1. 儲存空間超過 75% 時發警示並擴充空間。2. 部署 memcached 降低 CPU 負載。3. 更換為 32 核心機型以降低複寫延遲。",
            "D": "1. 儲存空間超過 75% 時發警示並擴充空間。2. 部署 memcached 降低 CPU 負載。3. 設定複寫延遲警示並更換為 32 核心機型。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#74",
        "link": "https://www.examtopics.com/discussions/google/view/11817-exam-professional-cloud-architect-topic-1-question-74/",
        "question": "You are tasked with building an online analytical processing (OLAP) marketing analytics and reporting tool. This requires a relational database that can operate on hundreds of terabytes of data. What is the Google-recommended tool for such applications?",
        "question-zh": "您負責建置 OLAP 行銷分析與報表工具，需要能處理數百 TB 資料的關聯式資料庫。Google 推薦哪個工具？",
        "options": {
            "A": "Cloud Spanner, because it is globally distributed",
            "B": "Cloud SQL, because it is a fully managed relational database",
            "C": "Cloud Firestore, because it offers real-time synchronization across devices",
            "D": "BigQuery, because it is designed for large-scale processing of tabular data"
        },
        "options-zh": {
            "A": "Cloud Spanner，因為它是全球分布式的",
            "B": "Cloud SQL，因為它是全受管關聯式資料庫",
            "C": "Cloud Firestore，因為它可跨裝置即時同步",
            "D": "BigQuery，因為它專為大規模表格資料處理設計"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#75",
        "link": "https://www.examtopics.com/discussions/google/view/6452-exam-professional-cloud-architect-topic-1-question-75/",
        "question": "You have deployed an application to Google Kubernetes Engine (GKE), and are using the Cloud SQL proxy container to make the Cloud SQL database available to the services running on Kubernetes. You are notified that the application is reporting database connection issues. Your company policies require a post- mortem. What should you do?",
        "question-zh": "您已將應用程式部署到 GKE，並用 Cloud SQL proxy container 讓 Kubernetes 服務可存取 Cloud SQL。現在應用程式出現資料庫連線問題，公司政策要求撰寫事後報告。您該怎麼做？",
        "options": {
            "A": "Use gcloud sql instances restart.",
            "B": "Validate that the Service Account used by the Cloud SQL proxy container still has the Cloud Build Editor role.",
            "C": "In the GCP Console, navigate to Stackdriver Logging. Consult logs for (GKE) and Cloud SQL.",
            "D": "In the GCP Console, navigate to Cloud SQL. Restore the latest backup. Use kubectl to restart all pods."
        },
        "options-zh": {
            "A": "使用 gcloud sql instances restart。",
            "B": "確認 Cloud SQL proxy container 使用的 Service Account 仍有 Cloud Build Editor 角色。",
            "C": "在 GCP Console 查看 Stackdriver Logging，查閱 GKE 與 Cloud SQL 日誌。",
            "D": "在 GCP Console 查看 Cloud SQL，還原最新備份並用 kubectl 重啟所有 pod。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#76",
        "link": "https://www.examtopics.com/discussions/google/view/11818-exam-professional-cloud-architect-topic-1-question-76/",
        "question": "Your company pushes batches of sensitive transaction data from its application server VMs to Cloud Pub/Sub for processing and storage. What is the Google- recommended way for your application to authenticate to the required Google Cloud services?",
        "question-zh": "您的公司會將批次敏感交易資料從應用伺服器 VM 傳送到 Cloud Pub/Sub 處理與儲存。Google 建議應用程式如何驗證以存取所需的 Google Cloud 服務？",
        "options": {
            "A": "Ensure that VM service accounts are granted the appropriate Cloud Pub/Sub IAM roles.",
            "B": "Ensure that VM service accounts do not have access to Cloud Pub/Sub, and use VM access scopes to grant the appropriate Cloud Pub/Sub IAM roles.",
            "C": "Generate an OAuth2 access token for accessing Cloud Pub/Sub, encrypt it, and store it in Cloud Storage for access from each VM.",
            "D": "Create a gateway to Cloud Pub/Sub using a Cloud Function, and grant the Cloud Function service account the appropriate Cloud Pub/Sub IAM roles."
        },
        "options-zh": {
            "A": "確保 VM 服務帳戶已授予適當的 Cloud Pub/Sub IAM 角色。",
            "B": "確保 VM 服務帳戶無法存取 Cloud Pub/Sub，並用 VM 存取範圍授權 IAM 角色。",
            "C": "產生 OAuth2 存取權杖，並加密後存到 Cloud Storage 供 VM 存取。",
            "D": "用 Cloud Function 建立 Pub/Sub gateway，並授權其服務帳戶 IAM 角色。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#77",
        "link": "https://www.examtopics.com/discussions/google/view/11819-exam-professional-cloud-architect-topic-1-question-77/",
        "question": "You want to establish a Compute Engine application in a single VPC across two regions. The application must communicate over VPN to an on-premises network.\n\nHow should you deploy the VPN?",
        "question-zh": "您想在兩個區域的單一 VPC 中部署 Compute Engine 應用程式，並需透過 VPN 與地端網路通訊。\n\nVPN 應如何部署？",
        "options": {
            "A": "Use VPC Network Peering between the VPC and the on-premises network.",
            "B": "Expose the VPC to the on-premises network using IAM and VPC Sharing.",
            "C": "Create a global Cloud VPN Gateway with VPN tunnels from each region to the on-premises peer gateway.",
            "D": "Deploy Cloud VPN Gateway in each region. Ensure that each region has at least one VPN tunnel to the on-premises peer gateway."
        },
        "options-zh": {
            "A": "在 VPC 與地端網路間使用 VPC Network Peering。",
            "B": "用 IAM 與 VPC Sharing 將 VPC 暴露給地端網路。",
            "C": "建立全球 Cloud VPN Gateway，從每個區域設 VPN 通道到地端。",
            "D": "每個區域都部署 Cloud VPN Gateway，並確保每區至少有一條 VPN 通道到地端。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#78",
        "link": "https://www.examtopics.com/discussions/google/view/6455-exam-professional-cloud-architect-topic-1-question-78/",
        "question": "Your applications will be writing their logs to BigQuery for analysis. Each application should have its own table. Any logs older than 45 days should be removed.\n\nYou want to optimize storage and follow Google-recommended practices. What should you do?",
        "question-zh": "您的應用程式會將日誌寫入 BigQuery 進行分析。每個應用程式應有自己的資料表，且 45 天前的日誌應自動移除。\n\n您希望最佳化儲存並遵循 Google 建議。該怎麼做？",
        "options": {
            "A": "Configure the expiration time for your tables at 45 days",
            "B": "Make the tables time-partitioned, and configure the partition expiration at 45 days",
            "C": "Rely on BigQuery's default behavior to prune application logs older than 45 days",
            "D": "Create a script that uses the BigQuery command line tool (bq) to remove records older than 45 days"
        },
        "options-zh": {
            "A": "將資料表的到期時間設為 45 天",
            "B": "將資料表設為時間分割，並將分割區到期時間設為 45 天",
            "C": "依賴 BigQuery 預設行為自動移除 45 天前日誌",
            "D": "寫腳本用 bq 工具移除 45 天前紀錄"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#79",
        "link": "https://www.examtopics.com/discussions/google/view/7323-exam-professional-cloud-architect-topic-1-question-79/",
        "question": "You want your Google Kubernetes Engine cluster to automatically add or remove nodes based on CPU load.\n\nWhat should you do?",
        "question-zh": "您希望 GKE 叢集能根據 CPU 負載自動增減節點。\n\n該怎麼做？",
        "options": {
            "A": "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable the Cluster Autoscaler from the GCP Console.",
            "B": "Configure a HorizontalPodAutoscaler with a target CPU usage. Enable autoscaling on the managed instance group for the cluster using the gcloud command.",
            "C": "Create a deployment and set the maxUnavailable and maxSurge properties. Enable the Cluster Autoscaler using the gcloud command.",
            "D": "Create a deployment and set the maxUnavailable and maxSurge properties. Enable autoscaling on the cluster managed instance group from the GCP Console."
        },
        "options-zh": {
            "A": "設定 HorizontalPodAutoscaler 並設目標 CPU 使用率，並在 GCP Console 啟用 Cluster Autoscaler。",
            "B": "設定 HorizontalPodAutoscaler 並設目標 CPU 使用率，並用 gcloud 指令啟用叢集受管實例群組的自動擴展。",
            "C": "建立 deployment 並設 maxUnavailable 與 maxSurge，並用 gcloud 啟用 Cluster Autoscaler。",
            "D": "建立 deployment 並設 maxUnavailable 與 maxSurge，並在 GCP Console 啟用叢集受管實例群組的自動擴展。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#80",
        "link": "https://www.examtopics.com/discussions/google/view/6399-exam-professional-cloud-architect-topic-1-question-80/",
        "question": "You need to develop procedures to verify resilience of disaster recovery for remote recovery using GCP. Your production environment is hosted on-premises. You need to establish a secure, redundant connection between your on-premises network and the GCP network.\n\nWhat should you do?",
        "question-zh": "您需制定程序驗證 GCP 遠端災難復原的韌性。生產環境在地端，需與 GCP 建立安全且具備備援的連線。\n\n該怎麼做？",
        "options": {
            "A": "Verify that Dedicated Interconnect can replicate files to GCP. Verify that direct peering can establish a secure connection between your networks if Dedicated Interconnect fails.",
            "B": "Verify that Dedicated Interconnect can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if Dedicated Interconnect fails.",
            "C": "Verify that the Transfer Appliance can replicate files to GCP. Verify that direct peering can establish a secure connection between your networks if the Transfer Appliance fails.",
            "D": "Verify that the Transfer Appliance can replicate files to GCP. Verify that Cloud VPN can establish a secure connection between your networks if the Transfer Appliance fails."
        },
        "options-zh": {
            "A": "驗證 Dedicated Interconnect 可複製檔案到 GCP，若失效則用 direct peering 建立安全連線。",
            "B": "驗證 Dedicated Interconnect 可複製檔案到 GCP，若失效則用 Cloud VPN 建立安全連線。",
            "C": "驗證 Transfer Appliance 可複製檔案到 GCP，若失效則用 direct peering 建立安全連線。",
            "D": "驗證 Transfer Appliance 可複製檔案到 GCP，若失效則用 Cloud VPN 建立安全連線。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#81",
        "link": "https://www.examtopics.com/discussions/google/view/6896-exam-professional-cloud-architect-topic-1-question-81/",
        "question": "Your company's security team tends to use managed services when possible. You need to build a dashboard to show the number of deny hits that occur against configured firewall rules without increasing operational overhead. What should you do?",
        "question-zh": "貴公司安全團隊傾向盡量使用受管服務。您需建立儀表板顯示防火牆規則遭拒次數，且不增加營運負擔。該怎麼做？",
        "options": {
            "A": "Configure Firewall Rules Logging. Use Firewall Insights to display the number of hits.",
            "B": "Configure Firewall Rules Logging. View the logs in Cloud Logging, and create a custom dashboard in Cloud Monitoring to display the number of hits.",
            "C": "Configure a firewall appliance from the Google Cloud Marketplace. Route all traffic through this appliance, and apply the firewall rules at this layer. Use the firewall appliance to display the number of hits.",
            "D": "Configure Packet Mirroring on the VPC. Apply a filter with an IP address list of the Denied Firewall rules. Configure an intrusion detection system (IDS) appliance as the receiver to display the number of hits."
        },
        "options-zh": {
            "A": "啟用防火牆規則日誌，並用 Firewall Insights 顯示命中次數。",
            "B": "啟用防火牆規則日誌，在 Cloud Logging 檢視，並在 Cloud Monitoring 建自訂儀表板顯示命中次數。",
            "C": "用 Marketplace 的防火牆設備，將流量導入並在此層套用規則，並用設備顯示命中次數。",
            "D": "在 VPC 啟用封包鏡像，對拒絕規則 IP 設過濾，並用 IDS 設備顯示命中次數。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#82",
        "link": "https://www.examtopics.com/discussions/google/view/6709-exam-professional-cloud-architect-topic-1-question-82/",
        "question": "Your customer wants to do resilience testing of their authentication layer. This consists of a regional managed instance group serving a public REST API that reads from and writes to a Cloud SQL instance.\n\nWhat should you do?",
        "question-zh": "您的客戶想測試其驗證層的韌性。該層由區域性受管實例群組提供公開 REST API，並讀寫 Cloud SQL。\n\n該怎麼做？",
        "options": {
            "A": "Engage with a security company to run web scrapers that look your for users' authentication data om malicious websites and notify you if any is found.",
            "B": "Deploy intrusion detection software to your virtual machines to detect and log unauthorized access.",
            "C": "Schedule a disaster simulation exercise during which you can shut off all VMs in a zone to see how your application behaves.",
            "D": "Configure a read replica for your Cloud SQL instance in a different zone than the master, and then manually trigger a failover while monitoring KPIs for our REST API."
        },
        "options-zh": {
            "A": "找安全公司用爬蟲查惡意網站上的驗證資料並通知您。",
            "B": "在 VM 部署入侵偵測軟體以偵測並記錄未授權存取。",
            "C": "排程災難演練，關閉一區所有 VM 觀察應用行為。",
            "D": "在不同區設 Cloud SQL 讀取複本，手動切換並監控 REST API KPI。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#83",
        "link": "https://www.examtopics.com/discussions/google/view/8378-exam-professional-cloud-architect-topic-1-question-83/",
        "question": "Your BigQuery project has several users. For audit purposes, you need to see how many queries each user ran in the last month. What should you do?",
        "question-zh": "您的 BigQuery 專案有多位使用者。為稽核需查每位使用者上月查詢次數。該怎麼做？",
        "options": {
            "A": "Connect Google Data Studio to BigQuery. Create a dimension for the users and a metric for the amount of queries per user.",
            "B": "In the BigQuery interface, execute a query on the JOBS table to get the required information.",
            "C": "Use 'bq show' to list all jobs. Per job, use 'bq ls' to list job information and get the required information.",
            "D": "Use Cloud Audit Logging to view Cloud Audit Logs, and create a filter on the query operation to get the required information."
        },
        "options-zh": {
            "A": "用 Google Data Studio 連 BigQuery，建立使用者維度與查詢次數指標。",
            "B": "在 BigQuery 介面查詢 JOBS 表取得所需資訊。",
            "C": "用 'bq show' 列所有作業，再用 'bq ls' 查每個作業資訊。",
            "D": "用 Cloud Audit Logging 查稽核日誌，並對查詢操作設過濾器。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#84",
        "link": "https://www.examtopics.com/discussions/google/view/6873-exam-professional-cloud-architect-topic-1-question-84/",
        "question": "Your organization has a new security policy that requires you to monitor all egress traffic payloads from your virtual machines in region us-west2. You deployed an intrusion detection system (IDS) virtual appliance in the same region to meet the new policy. You now need to integrate the IDS into the environment to monitor all egress traffic payloads from us-west2. What should you do?",
        "question-zh": "您的組織有新安全政策，要求監控 us-west2 區所有 VM 的外送流量。您已在該區部署 IDS 虛擬設備。現在需整合 IDS 監控所有外送流量。該怎麼做？",
        "options": {
            "A": "Enable firewall logging, and forward all filtered egress firewall logs to the IDS.",
            "B": "Enable VPC Flow Logs. Create a sink in Cloud Logging to send filtered egress VPC Flow Logs to the IDS.",
            "C": "Create an internal TCP/UDP load balancer for Packet Mirroring, and add a packet mirroring policy filter for egress traffic.",
            "D": "Create an internal HTTP(S) load balancer for Packet Mirroring, and add a packet mirroring policy filter for egress traffic."
        },
        "options-zh": {
            "A": "啟用防火牆日誌並將過濾後的外送日誌轉給 IDS。",
            "B": "啟用 VPC Flow Logs，在 Cloud Logging 建 sink 將過濾後的外送流量送到 IDS。",
            "C": "建立內部 TCP/UDP 負載平衡器做封包鏡像，並設外送流量過濾。",
            "D": "建立內部 HTTP(S) 負載平衡器做封包鏡像，並設外送流量過濾。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#85",
        "link": "https://www.examtopics.com/discussions/google/view/6457-exam-professional-cloud-architect-topic-1-question-85/",
        "question": "Your company captures all web traffic data in Google Analytics 360 and stores it in BigQuery. Each country has its own dataset. Each dataset has multiple tables.\n\nYou want analysts from each country to be able to see and query only the data for their respective countries.\n\nHow should you configure the access rights?",
        "question-zh": "貴公司用 Google Analytics 360 擷取所有網路流量並存到 BigQuery。每國有自己的資料集，每集有多個資料表。\n\n您希望各國分析師只能查詢自己國家的資料。\n\n該如何設定權限？",
        "options": {
            "A": "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate dataset with view access with each respective analyst country-group.",
            "B": "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery jobUser. Share the appropriate tables with view access with each respective analyst country-group.",
            "C": "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery dataViewer. Share the appropriate dataset with view access with each respective analyst country- group.",
            "D": "Create a group per country. Add analysts to their respective country-groups. Create a single group 'all_analysts', and add all country-groups as members. Grant the 'all_analysts' group the IAM role of BigQuery dataViewer. Share the appropriate table with view access with each respective analyst country-group."
        },
        "options-zh": {
            "A": "每國建一群組，分析師加進各自國家群組，再建 all_analysts 群組納入所有國家群組，給 all_analysts BigQuery jobUser 角色，並將資料集檢視權限分給各國群組。",
            "B": "每國建一群組，分析師加進各自國家群組，再建 all_analysts 群組納入所有國家群組，給 all_analysts BigQuery jobUser 角色，並將資料表檢視權限分給各國群組。",
            "C": "每國建一群組，分析師加進各自國家群組，再建 all_analysts 群組納入所有國家群組，給 all_analysts BigQuery dataViewer 角色，並將資料集檢視權限分給各國群組。",
            "D": "每國建一群組，分析師加進各自國家群組，再建 all_analysts 群組納入所有國家群組，給 all_analysts BigQuery dataViewer 角色，並將資料表檢視權限分給各國群組。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#86",
        "link": "https://www.examtopics.com/discussions/google/view/7468-exam-professional-cloud-architect-topic-1-question-86/",
        "question": "You have been engaged by your client to lead the migration of their application infrastructure to GCP. One of their current problems is that the on-premises high performance SAN is requiring frequent and expensive upgrades to keep up with the variety of workloads that are identified as follows: 20 TB of log archives retained for legal reasons; 500 GB of VM boot/data volumes and templates; 500 GB of image thumbnails; 200 GB of customer session state data that allows customers to restart sessions even if off-line for several days.\n\nWhich of the following best reflects your recommendations for a cost-effective storage allocation?",
        "question-zh": "您的客戶請您主導應用基礎設施遷移到 GCP。其現有高效能 SAN 須頻繁且昂貴升級以應付多種工作負載：20TB 日誌歸檔（法規需求）、500GB VM 開機/資料磁碟與範本、500GB 圖片縮圖、200GB 客戶會話狀態（可離線數日後恢復）。\n\n下列哪項最符合您的高 CP 儲存建議？",
        "options": {
            "A": "Local SSD for customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.",
            "B": "Memcache backed by Cloud Datastore for the customer session state data. Lifecycle-managed Cloud Storage for log archives, thumbnails, and VM boot/data volumes.",
            "C": "Memcache backed by Cloud SQL for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails.",
            "D": "Memcache backed by Persistent Disk SSD storage for customer session state data. Assorted local SSD-backed instances for VM boot/data volumes. Cloud Storage for log archives and thumbnails."
        },
        "options-zh": {
            "A": "客戶會話狀態用 Local SSD，日誌、縮圖、VM 磁碟用 Cloud Storage 生命週期管理。",
            "B": "會話狀態用 Cloud Datastore 支援的 Memcache，日誌、縮圖、VM 磁碟用 Cloud Storage 生命週期管理。",
            "C": "會話狀態用 Cloud SQL 支援的 Memcache，VM 磁碟用 Local SSD，日誌縮圖用 Cloud Storage。",
            "D": "會話狀態用 Persistent Disk SSD 支援的 Memcache，VM 磁碟用 Local SSD，日誌縮圖用 Cloud Storage。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#87",
        "link": "https://www.examtopics.com/discussions/google/view/7328-exam-professional-cloud-architect-topic-1-question-87/",
        "question": "Your web application uses Google Kubernetes Engine to manage several workloads. One workload requires a consistent set of hostnames even after pod scaling and relaunches.\n\nWhich feature of Kubernetes should you use to accomplish this?",
        "question-zh": "您的網頁應用程式用 GKE 管理多個工作負載，其中一項需即使 pod 擴展與重啟後仍有一致主機名稱。\n\n應用哪個 Kubernetes 功能？",
        "options": {
            "A": "StatefulSets",
            "B": "Role-based access control",
            "C": "Container environment variables",
            "D": "Persistent Volumes"
        },
        "options-zh": {
            "A": "StatefulSets",
            "B": "基於角色的存取控制 (RBAC)",
            "C": "Container 環境變數",
            "D": "Persistent Volumes"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#88",
        "link": "https://www.examtopics.com/discussions/google/view/9188-exam-professional-cloud-architect-topic-1-question-88/",
        "question": "You are using Cloud CDN to deliver static HTTP(S) website content hosted on a Compute Engine instance group. You want to improve the cache hit ratio.\n\nWhat should you do?",
        "question-zh": "您用 Cloud CDN 傳遞 Compute Engine 實例群組上的靜態 HTTP(S) 網站內容。您想提升快取命中率。\n\n該怎麼做？",
        "options": {
            "A": "Customize the cache keys to omit the protocol from the key.",
            "B": "Shorten the expiration time of the cached objects.",
            "C": "Make sure the HTTP(S) header ג€Cache-Regionג€ points to the closest region of your users.",
            "D": "Replicate the static content in a Cloud Storage bucket. Point CloudCDN toward a load balancer on that bucket."
        },
        "options-zh": {
            "A": "自訂快取鍵，省略協定部分。",
            "B": "縮短快取物件的到期時間。",
            "C": "確保 HTTP(S) 標頭 Cache-Region 指向用戶最近區域。",
            "D": "將靜態內容複製到 Cloud Storage 並用 CloudCDN 指向該 bucket 的負載平衡器。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#89",
        "link": "https://www.examtopics.com/discussions/google/view/6712-exam-professional-cloud-architect-topic-1-question-89/",
        "question": "You are designing an application that will subscribe to and receive messages from a single Pub/Sub topic and insert corresponding rows into a database. Your application runs on Linux and leverages preemptible virtual machines to reduce costs. You need to create a shutdown script that will initiate a graceful shutdown.\n\nWhat should you do?",
        "question-zh": "您設計的應用程式會訂閱單一 Pub/Sub topic 並將訊息寫入資料庫。應用程式運行於 Linux 並用可搶佔 VM 降低成本。您需建立關機腳本以優雅關閉。\n\n該怎麼做？",
        "options": {
            "A": "Write a shutdown script that uses inter-process signals to notify the application process to disconnect from the database.",
            "B": "Write a shutdown script that broadcasts a message to all signed-in users that the Compute Engine instance is going down and instructs them to save current work and sign out.",
            "C": "Write a shutdown script that writes a file in a location that is being polled by the application once every five minutes. After the file is read, the application disconnects from the database.",
            "D": "Write a shutdown script that publishes a message to the Pub/Sub topic announcing that a shutdown is in progress. After the application reads the message, it disconnects from the database."
        },
        "options-zh": {
            "A": "寫一個關機腳本，用程序間訊號通知應用程式斷開資料庫。",
            "B": "寫一個關機腳本，廣播訊息通知所有登入用戶主機將關機，請儲存並登出。",
            "C": "寫一個關機腳本，在應用程式每 5 分鐘輪詢的路徑寫檔，讀到後應用程式斷開資料庫。",
            "D": "寫一個關機腳本，發訊息到 Pub/Sub topic 宣告關機中，應用程式收到後斷開資料庫。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#90",
        "link": "https://www.examtopics.com/discussions/google/view/6462-exam-professional-cloud-architect-topic-1-question-90/",
        "question": "You have an App Engine application that needs to be updated. You want to test the update with production traffic before replacing the current application version.\n\nWhat should you do?",
        "question-zh": "您有一個 App Engine 應用程式需更新。您想在替換現有版本前用生產流量測試新版。\n\n該怎麼做？",
        "options": {
            "A": "Deploy the update using the Instance Group Updater to create a partial rollout, which allows for canary testing.",
            "B": "Deploy the update as a new version in the App Engine application, and split traffic between the new and current versions.",
            "C": "Deploy the update in a new VPC, and use Google's global HTTP load balancing to split traffic between the update and current applications.",
            "D": "Deploy the update as a new App Engine application, and use Google's global HTTP load balancing to split traffic between the new and current applications."
        },
        "options-zh": {
            "A": "用 Instance Group Updater 部分推出新版，進行金絲雀測試。",
            "B": "將新版部署為 App Engine 新版本，並分流到新舊版本。",
            "C": "在新 VPC 部署新版，並用全球 HTTP 負載平衡分流。",
            "D": "部署為新 App Engine 應用，並用全球 HTTP 負載平衡分流。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#91",
        "link": "https://www.examtopics.com/discussions/google/view/6817-exam-professional-cloud-architect-topic-1-question-91/",
        "question": "All Compute Engine instances in your VPC should be able to connect to an Active Directory server on specific ports. Any other traffic emerging from your instances is not allowed. You want to enforce this using VPC firewall rules.\n\nHow should you configure the firewall rules?",
        "question-zh": "您 VPC 內所有 Compute Engine 實例都應能連特定埠的 AD 伺服器，其他流量都不允許。您要用 VPC 防火牆規則強制執行。\n\n該怎麼設？",
        "options": {
            "A": "Create an egress rule with priority 1000 to deny all traffic for all instances. Create another egress rule with priority 100 to allow the Active Directory traffic for all instances.",
            "B": "Create an egress rule with priority 100 to deny all traffic for all instances. Create another egress rule with priority 1000 to allow the Active Directory traffic for all instances.",
            "C": "Create an egress rule with priority 1000 to allow the Active Directory traffic. Rely on the implied deny egress rule with priority 100 to block all traffic for all instances.",
            "D": "Create an egress rule with priority 100 to allow the Active Directory traffic. Rely on the implied deny egress rule with priority 1000 to block all traffic for all instances."
        },
        "options-zh": {
            "A": "設優先順序 1000 的 egress 規則拒絕所有流量，再設優先順序 100 的 egress 規則允許 AD 流量。",
            "B": "設優先順序 100 的 egress 規則拒絕所有流量，再設優先順序 1000 的 egress 規則允許 AD 流量。",
            "C": "設優先順序 1000 的 egress 規則允許 AD 流量，並依賴優先順序 100 的隱含拒絕規則。",
            "D": "設優先順序 100 的 egress 規則允許 AD 流量，並依賴優先順序 1000 的隱含拒絕規則。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#92",
        "link": "https://www.examtopics.com/discussions/google/view/68718-exam-professional-cloud-architect-topic-1-question-92/",
        "question": "You are designing a deployment technique for your new applications on Google Cloud. As part of your deployment planning, you want to use live traffic to gather performance metrics for both new and existing applications. You need to test against the full production load prior to launch. What should you do?",
        "question-zh": "您正在為新的 Google Cloud 應用設計部署技術。規劃時希望用實際流量收集新舊應用的效能指標，並在上線前以完整生產流量測試。該怎麼做？",
        "options": {
            "A": "Use canary deployment",
            "B": "Use blue/green deployment",
            "C": "Use rolling updates deployment",
            "D": "Use A/B testing with traffic mirroring during deployment"
        },
        "options-zh": {
            "A": "使用金絲雀部署",
            "B": "使用藍綠部署",
            "C": "使用滾動更新部署",
            "D": "部署時用 A/B 測試與流量鏡像"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#93",
        "link": "https://www.examtopics.com/discussions/google/view/7123-exam-professional-cloud-architect-topic-1-question-93/",
        "question": "A development team at your company has created a dockerized HTTPS web application. You need to deploy the application on Google Kubernetes Engine (GKE) and make sure that the application scales automatically.\n\nHow should you deploy to GKE?",
        "question-zh": "公司開發團隊建立了 docker 化的 HTTPS 網頁應用。您需將其部署到 GKE 並確保自動擴展。\n\n該怎麼做？",
        "options": {
            "A": "Use the Horizontal Pod Autoscaler and enable cluster autoscaling. Use an Ingress resource to load-balance the HTTPS traffic.",
            "B": "Use the Horizontal Pod Autoscaler and enable cluster autoscaling on the Kubernetes cluster. Use a Service resource of type LoadBalancer to load-balance the HTTPS traffic.",
            "C": "Enable autoscaling on the Compute Engine instance group. Use an Ingress resource to load-balance the HTTPS traffic.",
            "D": "Enable autoscaling on the Compute Engine instance group. Use a Service resource of type LoadBalancer to load-balance the HTTPS traffic."
        },
        "options-zh": {
            "A": "用 Horizontal Pod Autoscaler 並啟用叢集自動擴展，Ingress 負載平衡 HTTPS 流量。",
            "B": "用 Horizontal Pod Autoscaler 並在叢集啟用自動擴展，Service 設 LoadBalancer 負載平衡 HTTPS。",
            "C": "在 Compute Engine 實例群組啟用自動擴展，Ingress 負載平衡 HTTPS。",
            "D": "在 Compute Engine 實例群組啟用自動擴展，Service 設 LoadBalancer 負載平衡 HTTPS。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#94",
        "link": "https://www.examtopics.com/discussions/google/view/10289-exam-professional-cloud-architect-topic-1-question-94/",
        "question": "You need to design a solution for global load balancing based on the URL path being requested. You need to ensure operations reliability and end-to-end in- transit encryption based on Google best practices.\n\nWhat should you do?",
        "question-zh": "您需設計依 URL 路徑進行全球負載平衡的方案，並確保營運可靠與端到端傳輸加密，符合 Google 最佳實踐。\n\n該怎麼做？",
        "options": {
            "A": "Create a cross-region load balancer with URL Maps.",
            "B": "Create an HTTPS load balancer with URL Maps.",
            "C": "Create appropriate instance groups and instances. Configure SSL proxy load balancing.",
            "D": "Create a global forwarding rule. Configure SSL proxy load balancing."
        },
        "options-zh": {
            "A": "建立跨區域負載平衡器並設 URL Maps。",
            "B": "建立 HTTPS 負載平衡器並設 URL Maps。",
            "C": "建立適當實例群組並設 SSL proxy 負載平衡。",
            "D": "建立全球轉送規則並設 SSL proxy 負載平衡。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#95",
        "link": "https://www.examtopics.com/discussions/google/view/7962-exam-professional-cloud-architect-topic-1-question-95/",
        "question": "You have an application that makes HTTP requests to Cloud Storage. Occasionally the requests fail with HTTP status codes of 5xx and 429.\n\nHow should you handle these types of errors?",
        "question-zh": "您的應用會對 Cloud Storage 發 HTTP 請求，偶爾遇到 5xx 與 429 錯誤。\n\n該怎麼處理？",
        "options": {
            "A": "Use gRPC instead of HTTP for better performance.",
            "B": "Implement retry logic using a truncated exponential backoff strategy.",
            "C": "Make sure the Cloud Storage bucket is multi-regional for geo-redundancy.",
            "D": "Monitor https://status.cloud.google.com/feed.atom and only make requests if Cloud Storage is not reporting an incident."
        },
        "options-zh": {
            "A": "改用 gRPC 提升效能。",
            "B": "實作重試邏輯並用截斷指數退避策略。",
            "C": "確保 Cloud Storage bucket 為多區域型以地理備援。",
            "D": "監控 https://status.cloud.google.com/feed.atom，僅在無事故時發請求。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#96",
        "link": "https://www.examtopics.com/discussions/google/view/7125-exam-professional-cloud-architect-topic-1-question-96/",
        "question": "You need to develop procedures to test a disaster plan for a mission-critical application. You want to use Google-recommended practices and native capabilities within GCP.\n\nWhat should you do?",
        "question-zh": "你需要為關鍵任務應用程式制定測試災難計畫的程序，並希望採用 Google 建議的做法與 GCP 原生功能。你該怎麼做？",
        "options": {
            "A": "Use Deployment Manager to automate service provisioning. Use Activity Logs to monitor and debug your tests.",
            "B": "Use Deployment Manager to automate service provisioning. Use Stackdriver to monitor and debug your tests.",
            "C": "Use gcloud scripts to automate service provisioning. Use Activity Logs to monitor and debug your tests.",
            "D": "Use gcloud scripts to automate service provisioning. Use Stackdriver to monitor and debug your tests."
        },
        "options-zh": {
            "A": "用 Deployment Manager 自動化服務佈建，並用 Activity Logs 監控與除錯測試。",
            "B": "用 Deployment Manager 自動化服務佈建，並用 Stackdriver 監控與除錯測試。",
            "C": "用 gcloud 腳本自動化服務佈建，並用 Activity Logs 監控與除錯測試。",
            "D": "用 gcloud 腳本自動化服務佈建，並用 Stackdriver 監控與除錯測試。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#97",
        "link": "https://www.examtopics.com/discussions/google/view/6466-exam-professional-cloud-architect-topic-1-question-97/",
        "question": "Your company creates rendering software which users can download from the company website. Your company has customers all over the world. You want to minimize latency for all your customers. You want to follow Google-recommended practices.\n\nHow should you store the files?",
        "question-zh": "你們公司開發渲染軟體，全球用戶可從官網下載。你希望所有用戶延遲最小，並遵循 Google 建議。該怎麼儲存檔案？",
        "options": {
            "A": "Save the files in a Multi-Regional Cloud Storage bucket.",
            "B": "Save the files in a Regional Cloud Storage bucket, one bucket per zone of the region.",
            "C": "Save the files in multiple Regional Cloud Storage buckets, one bucket per zone per region.",
            "D": "Save the files in multiple Multi-Regional Cloud Storage buckets, one bucket per multi-region."
        },
        "options-zh": {
            "A": "將檔案存到多區域 Cloud Storage bucket。",
            "B": "每個區域的每個 zone 各建一個 Regional Cloud Storage bucket。",
            "C": "每個區域每個 zone 各建一個 Regional Cloud Storage bucket。",
            "D": "每個多區域各建一個 Multi-Regional Cloud Storage bucket。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#98",
        "link": "https://www.examtopics.com/discussions/google/view/7376-exam-professional-cloud-architect-topic-1-question-98/",
        "question": "Your company acquired a healthcare startup and must retain its customers' medical information for up to 4 more years, depending on when it was created. Your corporate policy is to securely retain this data, and then delete it as soon as regulations allow.\n\nWhich approach should you take?",
        "question-zh": "你們公司併購一家醫療新創，必須根據建立時間保留客戶醫療資訊最多 4 年，並在法規允許時立即刪除。公司政策要求安全保留後即刪除。該怎麼做？",
        "options": {
            "A": "Store the data in Google Drive and manually delete records as they expire.",
            "B": "Anonymize the data using the Cloud Data Loss Prevention API and store it indefinitely.",
            "C": "Store the data in Cloud Storage and use lifecycle management to delete files when they expire.",
            "D": "Store the data in Cloud Storage and run a nightly batch script that deletes all expired data."
        },
        "options-zh": {
            "A": "存到 Google Drive 並到期手動刪除。",
            "B": "用 Cloud DLP API 匿名化後無限期保存。",
            "C": "存到 Cloud Storage 並用生命週期管理到期自動刪除。",
            "D": "存到 Cloud Storage 並用夜間批次腳本刪除到期資料。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#99",
        "link": "https://www.examtopics.com/discussions/google/view/7377-exam-professional-cloud-architect-topic-1-question-99/",
        "question": "You are deploying a PHP App Engine Standard service with Cloud SQL as the backend. You want to minimize the number of queries to the database.\n\nWhat should you do?",
        "question-zh": "你要部署 PHP App Engine Standard 服務，後端用 Cloud SQL，並希望減少查詢次數。該怎麼做？",
        "options": {
            "A": "Set the memcache service level to dedicated. Create a key from the hash of the query, and return database values from memcache before issuing a query to Cloud SQL.",
            "B": "Set the memcache service level to dedicated. Create a cron task that runs every minute to populate the cache with keys containing query results.",
            "C": "Set the memcache service level to shared. Create a cron task that runs every minute to save all expected queries to a key called ג€cached_queriesג€.",
            "D": "Set the memcache service level to shared. Create a key called ג€cached_queriesג€, and return database values from the key before using a query to Cloud SQL."
        },
        "options-zh": {
            "A": "設 memcache 為 dedicated，查詢雜湊為 key，先查 memcache 再查 Cloud SQL。",
            "B": "設 memcache 為 dedicated，每分鐘用 cron 填入查詢結果 key。",
            "C": "設 memcache 為 shared，每分鐘用 cron 將所有查詢存到 cached_queries key。",
            "D": "設 memcache 為 shared，先查 cached_queries key 再查 Cloud SQL。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#100",
        "link": "https://www.examtopics.com/discussions/google/view/7233-exam-professional-cloud-architect-topic-1-question-100/",
        "question": "You need to ensure reliability for your application and operations by supporting reliable task scheduling for compute on GCP. Leveraging Google best practices, what should you do?",
        "question-zh": "你要確保應用與營運可靠，並在 GCP 上支援可靠的任務排程，依 Google 最佳實踐該怎麼做？",
        "options": {
            "A": "Using the Cron service provided by App Engine, publish messages directly to a message-processing utility service running on Compute Engine instances.",
            "B": "Using the Cron service provided by App Engine, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances.",
            "C": "Using the Cron service provided by Google Kubernetes Engine (GKE), publish messages directly to a message-processing utility service running on Compute Engine instances.",
            "D": "Using the Cron service provided by GKE, publish messages to a Cloud Pub/Sub topic. Subscribe to that topic using a message-processing utility service running on Compute Engine instances."
        },
        "options-zh": {
            "A": "用 App Engine 的 Cron 服務直接發訊息給 Compute Engine 上的訊息處理服務。",
            "B": "用 App Engine 的 Cron 服務發訊息到 Pub/Sub，再由 Compute Engine 上的訊息處理服務訂閱。",
            "C": "用 GKE 的 Cron 服務直接發訊息給 Compute Engine 上的訊息處理服務。",
            "D": "用 GKE 的 Cron 服務發訊息到 Pub/Sub，再由 Compute Engine 上的訊息處理服務訂閱。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#101",
        "link": "https://www.examtopics.com/discussions/google/view/6306-exam-professional-cloud-architect-topic-1-question-101/",
        "question": "Your company is building a new architecture to support its data-centric business focus. You are responsible for setting up the network. Your company's mobile and web-facing applications will be deployed on-premises, and all data analysis will be conducted in GCP. The plan is to process and load 7 years of archived .csv files totaling 900 TB of data and then continue loading 10 TB of data daily. You currently have an existing 100-MB internet connection.\n\nWhat actions will meet your company's needs?",
        "question-zh": "您的公司正在建立新架構以支持以資料為中心的業務重點。您負責網路設置。公司的行動與 Web 應用將部署於地端，所有資料分析則在 GCP 進行。計畫處理並載入 7 年共 900 TB 的 .csv 歷史檔案，之後每天持續載入 10 TB 資料。現有網路為 100MB。\n\n應採取哪些行動？",
        "options": {
            "A": "Compress and upload both archived files and files uploaded daily using the gsutil ג€\"m option.",
            "B": "Lease a Transfer Appliance, upload archived files to it, and send it to Google to transfer archived data to Cloud Storage. Establish a connection with Google using a Dedicated Interconnect or Direct Peering connection and use it to upload files daily.",
            "C": "Lease a Transfer Appliance, upload archived files to it, and send it to Google to transfer archived data to Cloud Storage. Establish one Cloud VPN Tunnel to VPC networks over the public internet, and compress and upload files daily using the gsutil ג€\"m option.",
            "D": "Lease a Transfer Appliance, upload archived files to it, and send it to Google to transfer archived data to Cloud Storage. Establish a Cloud VPN Tunnel to VPC networks over the public internet, and compress and upload files daily."
        },
        "options-zh": {
            "A": "使用 gsutil -m 參數壓縮並上傳歷史檔案與每日檔案。",
            "B": "租用 Transfer Appliance 上傳歷史檔案，寄回 Google 匯入 Cloud Storage。再用 Dedicated Interconnect 或 Direct Peering 連線每日上傳。",
            "C": "租用 Transfer Appliance 上傳歷史檔案，寄回 Google 匯入 Cloud Storage。再用 Cloud VPN 連線並用 gsutil -m 上傳每日檔案。",
            "D": "租用 Transfer Appliance 上傳歷史檔案，寄回 Google 匯入 Cloud Storage。再用 Cloud VPN 連線每日上傳。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#102",
        "link": "https://www.examtopics.com/discussions/google/view/6747-exam-professional-cloud-architect-topic-1-question-102/",
        "question": "You are developing a globally scaled frontend for a legacy streaming backend data API. This API expects events in strict chronological order with no repeat data for proper processing.\n\nWhich products should you deploy to ensure guaranteed-once FIFO (first-in, first-out) delivery of data?",
        "question-zh": "您正在為舊有串流後端資料 API 開發全球規模前端。該 API 需嚴格依時序且無重複資料。\n\n要確保資料 FIFO（先進先出）且僅送達一次，應部署哪些產品？",
        "options": {
            "A": "Cloud Pub/Sub alone",
            "B": "Cloud Pub/Sub to Cloud Dataflow",
            "C": "Cloud Pub/Sub to Stackdriver",
            "D": "Cloud Pub/Sub to Cloud SQL"
        },
        "options-zh": {
            "A": "僅用 Cloud Pub/Sub",
            "B": "Cloud Pub/Sub 搭配 Cloud Dataflow",
            "C": "Cloud Pub/Sub 搭配 Stackdriver",
            "D": "Cloud Pub/Sub 搭配 Cloud SQL"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#103",
        "link": "https://www.examtopics.com/discussions/google/view/56841-exam-professional-cloud-architect-topic-1-question-103/",
        "question": "Your company is planning to perform a lift and shift migration of their Linux RHEL 6.5+ virtual machines. The virtual machines are running in an on-premises VMware environment. You want to migrate them to Compute Engine following Google-recommended practices. What should you do?",
        "question-zh": "您的公司計畫將 Linux RHEL 6.5+ VM 由地端 VMware 環境 lift & shift 遷移到 Compute Engine，需依 Google 建議做法。應怎麼做？",
        "options": {
            "A": "1. Define a migration plan based on the list of the applications and their dependencies. 2. Migrate all virtual machines into Compute Engine individually with Migrate for Compute Engine.",
            "B": "1. Perform an assessment of virtual machines running in the current VMware environment. 2. Create images of all disks. Import disks on Compute Engine. 3. Create standard virtual machines where the boot disks are the ones you have imported.",
            "C": "1. Perform an assessment of virtual machines running in the current VMware environment. 2. Define a migration plan, prepare a Migrate for Compute Engine migration RunBook, and execute the migration.",
            "D": "1. Perform an assessment of virtual machines running in the current VMware environment. 2. Install a third-party agent on all selected virtual machines. 3. Migrate all virtual machines into Compute Engine."
        },
        "options-zh": {
            "A": "1. 根據應用及相依清單訂定遷移計畫。2. 用 Migrate for Compute Engine 個別遷移所有 VM。",
            "B": "1. 盤點現有 VMware VM。2. 建立所有磁碟映像並匯入 Compute Engine。3. 用匯入的磁碟建立標準 VM。",
            "C": "1. 盤點現有 VMware VM。2. 訂定遷移計畫，準備 Migrate for Compute Engine RunBook 並執行。",
            "D": "1. 盤點現有 VMware VM。2. 安裝第三方代理程式。3. 遷移所有 VM 至 Compute Engine。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#104",
        "link": "https://www.examtopics.com/discussions/google/view/56360-exam-professional-cloud-architect-topic-1-question-104/",
        "question": "You need to deploy an application to Google Cloud. The application receives traffic via TCP and reads and writes data to the filesystem. The application does not support horizontal scaling. The application process requires full control over the data on the file system because concurrent access causes corruption. The business is willing to accept a downtime when an incident occurs, but the application must be available 24/7 to support their business operations. You need to design the architecture of this application on Google Cloud. What should you do?",
        "question-zh": "您要將一個應用部署到 Google Cloud。該應用透過 TCP 收發流量並存取檔案系統，不支援水平擴展，且需完全控制檔案系統（多執行緒會損毀資料）。業務可接受故障時停機，但應用需全年無休。應如何設計架構？",
        "options": {
            "A": "Use a managed instance group with instances in multiple zones, use Cloud Filestore, and use an HTTP load balancer in front of the instances.",
            "B": "Use a managed instance group with instances in multiple zones, use Cloud Filestore, and use a network load balancer in front of the instances.",
            "C": "Use an unmanaged instance group with an active and standby instance in different zones, use a regional persistent disk, and use an HTTP load balancer in front of the instances.",
            "D": "Use an unmanaged instance group with an active and standby instance in different zones, use a regional persistent disk, and use a network load balancer in front of the instances."
        },
        "options-zh": {
            "A": "用多區受管實例群組 + Cloud Filestore + HTTP 負載平衡器。",
            "B": "用多區受管實例群組 + Cloud Filestore + 網路負載平衡器。",
            "C": "用非受管群組，跨區主備 VM + 區域性永久磁碟 + HTTP 負載平衡器。",
            "D": "用非受管群組，跨區主備 VM + 區域性永久磁碟 + 網路負載平衡器。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#105",
        "link": "https://www.examtopics.com/discussions/google/view/56368-exam-professional-cloud-architect-topic-1-question-105/",
        "question": "Your company has an application running on multiple Compute Engine instances. You need to ensure that the application can communicate with an on-premises service that requires high throughput via internal IPs, while minimizing latency. What should you do?",
        "question-zh": "公司有多台 Compute Engine 執行應用，需與地端高頻寬服務（僅內部 IP）通訊且延遲低。應怎麼做？",
        "options": {
            "A": "Use OpenVPN to configure a VPN tunnel between the on-premises environment and Google Cloud.",
            "B": "Configure a direct peering connection between the on-premises environment and Google Cloud.",
            "C": "Use Cloud VPN to configure a VPN tunnel between the on-premises environment and Google Cloud.",
            "D": "Configure a Cloud Dedicated Interconnect connection between the on-premises environment and Google Cloud"
        },
        "options-zh": {
            "A": "用 OpenVPN 建立地端與 Google Cloud 間 VPN 通道。",
            "B": "設 direct peering 連線地端與 Google Cloud。",
            "C": "用 Cloud VPN 建立 VPN 通道。",
            "D": "設 Cloud Dedicated Interconnect 連線地端與 Google Cloud。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#106",
        "link": "https://www.examtopics.com/discussions/google/view/56373-exam-professional-cloud-architect-topic-1-question-106/",
        "question": "You are managing an application deployed on Cloud Run for Anthos, and you need to define a strategy for deploying new versions of the application. You want to evaluate the new code with a subset of production traffic to decide whether to proceed with the rollout. What should you do?",
        "question-zh": "您管理的應用部署於 Cloud Run for Anthos，需規劃新版部署策略，想用部分生產流量驗證新版本再決定是否全面推送。應怎麼做？",
        "options": {
            "A": "Deploy a new revision to Cloud Run with the new version. Configure traffic percentage between revisions.",
            "B": "Deploy a new service to Cloud Run with the new version. Add a Cloud Load Balancing instance in front of both services.",
            "C": "In the Google Cloud Console page for Cloud Run, set up continuous deployment using Cloud Build for the development branch. As part of the Cloud Build trigger, configure the substitution variable TRAFFIC_PERCENTAGE with the percentage of traffic you want directed to a new version.",
            "D": "In the Google Cloud Console, configure Traffic Director with a new Service that points to the new version of the application on Cloud Run. Configure Traffic Director to send a small percentage of traffic to the new version of the application."
        },
        "options-zh": {
            "A": "將新版部署為 Cloud Run 新修訂，設定流量分配比例。",
            "B": "將新版部署為 Cloud Run 新服務，前方加 Cloud Load Balancing。",
            "C": "在 Cloud Run 主控台設 Cloud Build 持續部署，並用 TRAFFIC_PERCENTAGE 變數分流。",
            "D": "在主控台用 Traffic Director 指向新版服務，設定小部分流量導向新版。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#107",
        "link": "https://www.examtopics.com/discussions/google/view/56365-exam-professional-cloud-architect-topic-1-question-107/",
        "question": "You are monitoring Google Kubernetes Engine (GKE) clusters in a Cloud Monitoring workspace. As a Site Reliability Engineer (SRE), you need to triage incidents quickly. What should you do?",
        "question-zh": "您在 Cloud Monitoring 監控 GKE 叢集，作為 SRE 需快速分流事件。應怎麼做？",
        "options": {
            "A": "Navigate the predefined dashboards in the Cloud Monitoring workspace, and then add metrics and create alert policies.",
            "B": "Navigate the predefined dashboards in the Cloud Monitoring workspace, create custom metrics, and install alerting software on a Compute Engine instance.",
            "C": "Write a shell script that gathers metrics from GKE nodes, publish these metrics to a Pub/Sub topic, export the data to BigQuery, and make a Data Studio dashboard.",
            "D": "Create a custom dashboard in the Cloud Monitoring workspace for each incident, and then add metrics and create alert policies."
        },
        "options-zh": {
            "A": "瀏覽 Cloud Monitoring 預設儀表板，新增指標並設警示。",
            "B": "瀏覽預設儀表板，建立自訂指標並在 Compute Engine 裝警示軟體。",
            "C": "寫 shell script 收集 GKE 節點指標，發到 Pub/Sub，匯出 BigQuery，做 Data Studio 儀表板。",
            "D": "每個事件都建自訂儀表板再加指標與警示。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#108",
        "link": "https://www.examtopics.com/discussions/google/view/56369-exam-professional-cloud-architect-topic-1-question-108/",
        "question": "You are implementing a single Cloud SQL MySQL second-generation database that contains business-critical transaction data. You want to ensure that the minimum amount of data is lost in case of catastrophic failure. Which two features should you implement? (Choose two.)",
        "question-zh": "您要部署一個 Cloud SQL MySQL 二代資料庫，存放關鍵交易資料。希望災難時資料損失最小。應實作哪兩項功能？（選兩項）",
        "options": {
            "A": "Sharding",
            "B": "Read replicas",
            "C": "Binary logging",
            "D": "Automated backups",
            "E": "Semisynchronous replication"
        },
        "options-zh": {
            "A": "分片（Sharding）",
            "B": "讀取複本（Read replicas）",
            "C": "二進位日誌（Binary logging）",
            "D": "自動備份（Automated backups）",
            "E": "半同步複寫（Semisynchronous replication）"
        },
        "images": [],
        "answers": [
            "C",
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#109",
        "link": "https://www.examtopics.com/discussions/google/view/56381-exam-professional-cloud-architect-topic-1-question-109/",
        "question": "You are working at a sports association whose members range in age from 8 to 30. The association collects a large amount of health data, such as sustained injuries. You are storing this data in BigQuery. Current legislation requires you to delete such information upon request of the subject. You want to design a solution that can accommodate such a request. What should you do?",
        "question-zh": "您在體育協會工作，會員年齡 8-30 歲，收集大量健康資料（如受傷紀錄），存於 BigQuery。現行法規要求當事人要求時必須刪除其資料。應如何設計？",
        "options": {
            "A": "Use a unique identifier for each individual. Upon a deletion request, delete all rows from BigQuery with this identifier.",
            "B": "When ingesting new data in BigQuery, run the data through the Data Loss Prevention (DLP) API to identify any personal information. As part of the DLP scan, save the result to Data Catalog. Upon a deletion request, query Data Catalog to find the column with personal information.",
            "C": "Create a BigQuery view over the table that contains all data. Upon a deletion request, exclude the rows that affect the subject's data from this view. Use this view instead of the source table for all analysis tasks.",
            "D": "Use a unique identifier for each individual. Upon a deletion request, overwrite the column with the unique identifier with a salted SHA256 of its value."
        },
        "options-zh": {
            "A": "每人用唯一識別碼，刪除請求時刪除該識別碼所有資料列。",
            "B": "新資料匯入 BigQuery 前用 DLP API 掃描個資，結果存 Data Catalog。刪除請求時查 Data Catalog 找個資欄位。",
            "C": "建立 BigQuery 檢視表，刪除請求時排除該人資料，分析都用檢視表。",
            "D": "每人用唯一識別碼，刪除請求時將該欄位覆寫為加鹽 SHA256。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#110",
        "link": "https://www.examtopics.com/discussions/google/view/56840-exam-professional-cloud-architect-topic-1-question-110/",
        "question": "Your company has announced that they will be outsourcing operations functions. You want to allow developers to easily stage new versions of a cloud-based application in the production environment and allow the outsourced operations team to autonomously promote staged versions to production. You want to minimize the operational overhead of the solution. Which Google Cloud product should you migrate to?",
        "question-zh": "公司宣布將外包營運職能。您希望開發者能輕鬆在生產環境預備新版本，外包團隊能自主推升至正式版，且營運負擔最小。應遷移到哪個 Google Cloud 產品？",
        "options": {
            "A": "App Engine",
            "B": "GKE On-Prem",
            "C": "Compute Engine",
            "D": "Google Kubernetes Engine"
        },
        "options-zh": {
            "A": "App Engine",
            "B": "GKE On-Prem",
            "C": "Compute Engine",
            "D": "Google Kubernetes Engine"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#111",
        "link": "https://www.examtopics.com/discussions/google/view/56686-exam-professional-cloud-architect-topic-1-question-111/",
        "question": "Your company is running its application workloads on Compute Engine. The applications have been deployed in production, acceptance, and development environments. The production environment is business-critical and is used 24/7, while the acceptance and development environments are only critical during office hours. Your CFO has asked you to optimize these environments to achieve cost savings during idle times. What should you do?",
        "question-zh": "公司所有應用部署於 Compute Engine，分生產、驗收、開發三環境。生產全年無休，驗收/開發只在上班時段重要。CFO 要求閒置時節省成本。應怎麼做？",
        "options": {
            "A": "Create a shell script that uses the gcloud command to change the machine type of the development and acceptance instances to a smaller machine type outside of office hours. Schedule the shell script on one of the production instances to automate the task.",
            "B": "Use Cloud Scheduler to trigger a Cloud Function that will stop the development and acceptance environments after office hours and start them just before office hours.",
            "C": "Deploy the development and acceptance applications on a managed instance group and enable autoscaling.",
            "D": "Use regular Compute Engine instances for the production environment, and use preemptible VMs for the acceptance and development environments."
        },
        "options-zh": {
            "A": "寫 shell script 用 gcloud 指令在非上班時將驗收/開發機型縮小，排程於生產機自動執行。",
            "B": "用 Cloud Scheduler 觸發 Cloud Function，在下班後關閉驗收/開發環境，上班前再啟動。",
            "C": "將驗收/開發部署於受管群組並啟用自動擴展。",
            "D": "生產用一般 VM，驗收/開發用可搶佔 VM。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#112",
        "link": "https://www.examtopics.com/discussions/google/view/56692-exam-professional-cloud-architect-topic-1-question-112/",
        "question": "You are moving an application that uses MySQL from on-premises to Google Cloud. The application will run on Compute Engine and will use Cloud SQL. You want to cut over to the Compute Engine deployment of the application with minimal downtime and no data loss to your customers. You want to migrate the application with minimal modification. You also need to determine the cutover strategy. What should you do?",
        "question-zh": "您要將使用 MySQL 的應用從地端遷移到 Google Cloud，應用將跑在 Compute Engine 並用 Cloud SQL。希望切換時停機最短且無資料遺失，且應用程式改動最少。應如何規劃切換？",
        "options": {
            "A": "1. Set up Cloud VPN to provide private network connectivity between the Compute Engine application and the on-premises MySQL server. 2. Stop the on-premises application. 3. Create a mysqldump of the on-premises MySQL server. 4. Upload the dump to a Cloud Storage bucket. 5. Import the dump into Cloud SQL. 6. Modify the source code of the application to write queries to both databases and read from its local database. 7. Start the Compute Engine application. 8. Stop the on-premises application.",
            "B": "1. Set up Cloud SQL proxy and MySQL proxy. 2. Create a mysqldump of the on-premises MySQL server. 3. Upload the dump to a Cloud Storage bucket. 4. Import the dump into Cloud SQL. 5. Stop the on-premises application. 6. Start the Compute Engine application.",
            "C": "1. Set up Cloud VPN to provide private network connectivity between the Compute Engine application and the on-premises MySQL server. 2. Stop the on-premises application. 3. Start the Compute Engine application, configured to read and write to the on-premises MySQL server. 4. Create the replication configuration in Cloud SQL. 5. Configure the source database server to accept connections from the Cloud SQL replica. 6. Finalize the Cloud SQL replica configuration. 7. When replication has been completed, stop the Compute Engine application. 8. Promote the Cloud SQL replica to a standalone instance. 9. Restart the Compute Engine application, configured to read and write to the Cloud SQL standalone instance.",
            "D": "1. Stop the on-premises application. 2. Create a mysqldump of the on-premises MySQL server. 3. Upload the dump to a Cloud Storage bucket. 4. Import the dump into Cloud SQL. 5. Start the application on Compute Engine."
        },
        "options-zh": {
            "A": "1. 設 Cloud VPN 讓 Compute Engine 應用與地端 MySQL 私網連線。2. 停地端應用。3. mysqldump 匯出地端 MySQL。4. 上傳 Cloud Storage。5. 匯入 Cloud SQL。6. 應用程式同時寫兩邊、讀本地。7. 啟動 Compute Engine 應用。8. 停地端應用。",
            "B": "1. 設 Cloud SQL proxy 與 MySQL proxy。2. mysqldump 匯出地端 MySQL。3. 上傳 Cloud Storage。4. 匯入 Cloud SQL。5. 停地端應用。6. 啟動 Compute Engine 應用。",
            "C": "1. 設 Cloud VPN 讓 Compute Engine 應用與地端 MySQL 私網連線。2. 停地端應用。3. 啟動 Compute Engine 應用，連地端 MySQL。4. 設 Cloud SQL 複寫。5. 設地端資料庫允許 Cloud SQL 連線。6. 完成 Cloud SQL 複寫設定。7. 複寫完成後停 Compute Engine 應用。8. 將 Cloud SQL 複本升級為獨立實例。9. 重啟 Compute Engine 應用，改連 Cloud SQL。",
            "D": "1. 停地端應用。2. mysqldump 匯出地端 MySQL。3. 上傳 Cloud Storage。4. 匯入 Cloud SQL。5. 啟動 Compute Engine 應用。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#113",
        "link": "https://www.examtopics.com/discussions/google/view/56576-exam-professional-cloud-architect-topic-1-question-113/",
        "question": "Your organization has decided to restrict the use of external IP addresses on instances to only approved instances. You want to enforce this requirement across all of your Virtual Private Clouds (VPCs). What should you do?",
        "question-zh": "組織決定僅允許核准的 VM 使用外部 IP，且要在所有 VPC 強制執行。應怎麼做？",
        "options": {
            "A": "Remove the default route on all VPCs. Move all approved instances into a new subnet that has a default route to an internet gateway.",
            "B": "Create a new VPC in custom mode. Create a new subnet for the approved instances, and set a default route to the internet gateway on this new subnet.",
            "C": "Implement a Cloud NAT solution to remove the need for external IP addresses entirely.",
            "D": "Set an Organization Policy with a constraint on constraints/compute.vmExternalIpAccess. List the approved instances in the allowedValues list."
        },
        "options-zh": {
            "A": "移除所有 VPC 的預設路由，將核准 VM 移到有網際網路閘道的新子網。",
            "B": "新建自訂 VPC，核准 VM 用新子網並設預設路由。",
            "C": "用 Cloud NAT 完全移除外部 IP 需求。",
            "D": "設組織政策 constraints/compute.vmExternalIpAccess，allowedValues 僅列核准 VM。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#114",
        "link": "https://www.examtopics.com/discussions/google/view/56375-exam-professional-cloud-architect-topic-1-question-114/",
        "question": "Your company uses the Firewall Insights feature in the Google Network Intelligence Center. You have several firewall rules applied to Compute Engine instances.\n\nYou need to evaluate the efficiency of the applied firewall ruleset. When you bring up the Firewall Insights page in the Google Cloud Console, you notice that there are no log rows to display. What should you do to troubleshoot the issue?",
        "question-zh": "公司用 Google Network Intelligence Center 的 Firewall Insights，已對 Compute Engine 設多條防火牆規則。\n\n要評估規則效率，但進入 Insights 頁面時發現無日誌。應如何排查？",
        "options": {
            "A": "Enable Virtual Private Cloud (VPC) flow logging.",
            "B": "Enable Firewall Rules Logging for the firewall rules you want to monitor.",
            "C": "Verify that your user account is assigned the compute.networkAdmin Identity and Access Management (IAM) role.",
            "D": "Install the Google Cloud SDK, and verify that there are no Firewall logs in the command line output."
        },
        "options-zh": {
            "A": "啟用 VPC flow logging。",
            "B": "啟用要監控規則的 Firewall Rules Logging。",
            "C": "確認帳號有 compute.networkAdmin IAM 角色。",
            "D": "安裝 Google Cloud SDK，並用指令列查無防火牆日誌。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#115",
        "link": "https://www.examtopics.com/discussions/google/view/56376-exam-professional-cloud-architect-topic-1-question-115/",
        "question": "Your company has sensitive data in Cloud Storage buckets. Data analysts have Identity Access Management (IAM) permissions to read the buckets. You want to prevent data analysts from retrieving the data in the buckets from outside the office network. What should you do?",
        "question-zh": "公司 Cloud Storage bucket 有敏感資料，資料分析師有 IAM 讀取權限。要防止分析師在辦公室外存取。應怎麼做？",
        "options": {
            "A": "1. Create a VPC Service Controls perimeter that includes the projects with the buckets. 2. Create an access level with the CIDR of the office network.",
            "B": "1. Create a firewall rule for all instances in the Virtual Private Cloud (VPC) network for source range. 2. Use the Classless Inter-domain Routing (CIDR) of the office network.",
            "C": "1. Create a Cloud Function to remove IAM permissions from the buckets, and another Cloud Function to add IAM permissions to the buckets. 2. Schedule the Cloud Functions with Cloud Scheduler to add permissions at the start of business and remove permissions at the end of business.",
            "D": "1. Create a Cloud VPN to the office network. 2. Configure Private Google Access for on-premises hosts."
        },
        "options-zh": {
            "A": "1. 建立 VPC Service Controls 周界納入 bucket 專案。2. 建立僅允許辦公室 CIDR 的存取層級。",
            "B": "1. 為所有 VPC 實例設防火牆規則，來源設辦公室 CIDR。",
            "C": "1. 用 Cloud Function 移除/新增 bucket IAM 權限，並用 Cloud Scheduler 在上下班時切換。",
            "D": "1. 建 Cloud VPN 連辦公室網路。2. 為地端主機設 Private Google Access。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#116",
        "link": "https://www.examtopics.com/discussions/google/view/56399-exam-professional-cloud-architect-topic-1-question-116/",
        "question": "You have developed a non-critical update to your application that is running in a managed instance group, and have created a new instance template with the update that you want to release. To prevent any possible impact to the application, you don't want to update any running instances. You want any new instances that are created by the managed instance group to contain the new update. What should you do?",
        "question-zh": "您已為受管實例群組的應用開發非關鍵更新，並建立新實例範本。為避免影響現有執行個體，僅希望新建立的執行個體套用新版本。應怎麼做？",
        "options": {
            "A": "Start a new rolling restart operation.",
            "B": "Start a new rolling replace operation.",
            "C": "Start a new rolling update. Select the Proactive update mode.",
            "D": "Start a new rolling update. Select the Opportunistic update mode."
        },
        "options-zh": {
            "A": "啟動新的 rolling restart 作業。",
            "B": "啟動新的 rolling replace 作業。",
            "C": "啟動新的 rolling update，選 Proactive 模式。",
            "D": "啟動新的 rolling update，選 Opportunistic 模式。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#117",
        "link": "https://www.examtopics.com/discussions/google/view/56403-exam-professional-cloud-architect-topic-1-question-117/",
        "question": "Your company is designing its application landscape on Compute Engine. Whenever a zonal outage occurs, the application should be restored in another zone as quickly as possible with the latest application data. You need to design the solution to meet this requirement. What should you do?",
        "question-zh": "公司在 Compute Engine 規劃應用架構，需確保區域故障時能快速於其他區域復原且資料最新。應如何設計？",
        "options": {
            "A": "Create a snapshot schedule for the disk containing the application data. Whenever a zonal outage occurs, use the latest snapshot to restore the disk in the same zone.",
            "B": "Configure the Compute Engine instances with an instance template for the application, and use a regional persistent disk for the application data. Whenever a zonal outage occurs, use the instance template to spin up the application in another zone in the same region. Use the regional persistent disk for the application data.",
            "C": "Create a snapshot schedule for the disk containing the application data. Whenever a zonal outage occurs, use the latest snapshot to restore the disk in another zone within the same region.",
            "D": "Configure the Compute Engine instances with an instance template for the application, and use a regional persistent disk for the application data. Whenever a zonal outage occurs, use the instance template to spin up the application in another region. Use the regional persistent disk for the application data."
        },
        "options-zh": {
            "A": "為應用資料磁碟設快照排程，區域故障時用最新快照於同區復原。",
            "B": "用實例範本 + 區域性永久磁碟，區域故障時於同區其他區啟動並掛載磁碟。",
            "C": "為應用資料磁碟設快照排程，區域故障時用最新快照於同區其他區復原。",
            "D": "用實例範本 + 區域性永久磁碟，區域故障時於其他區域啟動並掛載磁碟。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#118",
        "link": "https://www.examtopics.com/discussions/google/view/56680-exam-professional-cloud-architect-topic-1-question-118/",
        "question": "Your company has just acquired another company, and you have been asked to integrate their existing Google Cloud environment into your company's data center. Upon investigation, you discover that some of the RFC 1918 IP ranges being used in the new company's Virtual Private Cloud (VPC) overlap with your data center IP space. What should you do to enable connectivity and make sure that there are no routing conflicts when connectivity is established?",
        "question-zh": "公司併購新公司，需整合其 GCP 環境至本公司資料中心。發現新公司 VPC 用的 RFC 1918 IP 與本地重疊。要連線且避免路由衝突，應怎麼做？",
        "options": {
            "A": "Create a Cloud VPN connection from the new VPC to the data center, create a Cloud Router, and apply new IP addresses so there is no overlapping IP space.",
            "B": "Create a Cloud VPN connection from the new VPC to the data center, and create a Cloud NAT instance to perform NAT on the overlapping IP space.",
            "C": "Create a Cloud VPN connection from the new VPC to the data center, create a Cloud Router, and apply a custom route advertisement to block the overlapping IP space.",
            "D": "Create a Cloud VPN connection from the new VPC to the data center, and apply a firewall rule that blocks the overlapping IP space."
        },
        "options-zh": {
            "A": "新 VPC 用 Cloud VPN 連資料中心，設 Cloud Router 並換新 IP 避免重疊。",
            "B": "新 VPC 用 Cloud VPN 連資料中心，設 Cloud NAT 對重疊 IP 做 NAT。",
            "C": "新 VPC 用 Cloud VPN 連資料中心，設 Cloud Router 並自訂路由封鎖重疊 IP。",
            "D": "新 VPC 用 Cloud VPN 連資料中心，設防火牆封鎖重疊 IP。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#119",
        "link": "https://www.examtopics.com/discussions/google/view/56684-exam-professional-cloud-architect-topic-1-question-119/",
        "question": "You need to migrate Hadoop jobs for your company's Data Science team without modifying the underlying infrastructure. You want to minimize costs and infrastructure management effort. What should you do?",
        "question-zh": "需將資料科學團隊的 Hadoop 任務遷移到雲端，且不更動底層架構，並盡量降低成本與管理負擔。應怎麼做？",
        "options": {
            "A": "Create a Dataproc cluster using standard worker instances.",
            "B": "Create a Dataproc cluster using preemptible worker instances.",
            "C": "Manually deploy a Hadoop cluster on Compute Engine using standard instances.",
            "D": "Manually deploy a Hadoop cluster on Compute Engine using preemptible instances."
        },
        "options-zh": {
            "A": "用標準工作節點建立 Dataproc 叢集。",
            "B": "用可搶佔工作節點建立 Dataproc 叢集。",
            "C": "手動在 Compute Engine 用標準 VM 部署 Hadoop。",
            "D": "手動在 Compute Engine 用可搶佔 VM 部署 Hadoop。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#120",
        "link": "https://www.examtopics.com/discussions/google/view/56416-exam-professional-cloud-architect-topic-1-question-120/",
        "question": "Your company has a project in Google Cloud with three Virtual Private Clouds (VPCs). There is a Compute Engine instance on each VPC. Network subnets do not overlap and must remain separated. The network configuration is shown below.",
        "question-zh": "公司在 GCP 有三個 VPC，各有一台 Compute Engine，子網不重疊且需隔離。如下圖所示。",
        "options": {
            "A": "Create a cloud router to advertise subnet #2 and subnet #3 to subnet #1.",
            "B": "Add two additional NICs to Instance #1 with the following configuration: ג€¢ NIC1 ג—‹ VPC: VPC #2 ג—‹ SUBNETWORK: subnet #2 ג€¢ NIC2 ג—‹ VPC: VPC #3 ג—‹ SUBNETWORK: subnet #3 Update firewall rules to enable traffic between instances.",
            "C": "Create two VPN tunnels via CloudVPN: ג€¢ 1 between VPC #1 and VPC #2. ג€¢ 1 between VPC #2 and VPC #3. Update firewall rules to enable traffic between the instances.",
            "D": "Peer all three VPCs: ג€¢ Peer VPC #1 with VPC #2. ג€¢ Peer VPC #2 with VPC #3. Update firewall rules to enable traffic between the instances."
        },
        "options-zh": {
            "A": "用 cloud router 廣播子網 #2、#3 給 #1。",
            "B": "在 Instance #1 加兩張網卡，分別連 VPC #2/#3，並調整防火牆。",
            "C": "用 CloudVPN 建兩條 VPN：VPC #1↔#2、#2↔#3，並調整防火牆。",
            "D": "三個 VPC 互相 peering：#1↔#2、#2↔#3，並調整防火牆。"
        },
        "images": [
            "images/Question-120.jpg"
        ],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#121",
        "link": "https://www.examtopics.com/discussions/google/view/57270-exam-professional-cloud-architect-topic-1-question-121/",
        "question": "You need to deploy an application on Google Cloud that must run on a Debian Linux environment. The application requires extensive configuration in order to operate correctly. You want to ensure that you can install Debian distribution updates with minimal manual intervention whenever they become available. What should you do?",
        "question-zh": "您要在 Google Cloud 部署必須運行於 Debian Linux 的應用，且需大量設定。希望日後能自動安裝 Debian 更新，減少人工。應怎麼做？",
        "options": {
            "A": "Create a Compute Engine instance template using the most recent Debian image. Create an instance from this template, and install and configure the application as part of the startup script. Repeat this process whenever a new Google-managed Debian image becomes available.",
            "B": "Create a Debian-based Compute Engine instance, install and configure the application, and use OS patch management to install available updates.",
            "C": "Create an instance with the latest available Debian image. Connect to the instance via SSH, and install and configure the application on the instance. Repeat this process whenever a new Google-managed Debian image becomes available.",
            "D": "Create a Docker container with Debian as the base image. Install and configure the application as part of the Docker image creation process. Host the container on Google Kubernetes Engine and restart the container whenever a new update is available."
        },
        "options-zh": {
            "A": "用最新 Debian 建立 Compute Engine 範本，啟動時安裝設定應用，每次有新版就重建。",
            "B": "建立 Debian VM，安裝設定應用，並用 OS patch 管理自動更新。",
            "C": "用最新 Debian 建 VM，SSH 進去安裝設定，每次有新版就重建。",
            "D": "用 Debian 為基底建 Docker，安裝設定應用，部署於 GKE，更新時重啟容器。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#122",
        "link": "https://www.examtopics.com/discussions/google/view/56425-exam-professional-cloud-architect-topic-1-question-122/",
        "question": "You have an application that runs in Google Kubernetes Engine (GKE). Over the last 2 weeks, customers have reported that a specific part of the application returns errors very frequently. You currently have no logging or monitoring solution enabled on your GKE cluster. You want to diagnose the problem, but you have not been able to replicate the issue. You want to cause minimal disruption to the application. What should you do?",
        "question-zh": "您的應用跑在 GKE，近兩週有部分功能常出錯，且目前未啟用監控或日誌。您無法重現問題，且希望排查時對應用影響最小。應怎麼做？",
        "options": {
            "A": "1. Update your GKE cluster to use Cloud Operations for GKE. 2. Use the GKE Monitoring dashboard to investigate logs from affected Pods.",
            "B": "1. Create a new GKE cluster with Cloud Operations for GKE enabled. 2. Migrate the affected Pods to the new cluster, and redirect traffic for those Pods to the new cluster. 3. Use the GKE Monitoring dashboard to investigate logs from affected Pods.",
            "C": "1. Update your GKE cluster to use Cloud Operations for GKE, and deploy Prometheus. 2. Set an alert to trigger whenever the application returns an error.",
            "D": "1. Create a new GKE cluster with Cloud Operations for GKE enabled, and deploy Prometheus. 2. Migrate the affected Pods to the new cluster, and redirect traffic for those Pods to the new cluster. 3. Set an alert to trigger whenever the application returns an error."
        },
        "options-zh": {
            "A": "1. 將 GKE 叢集升級啟用 Cloud Operations。2. 用 GKE 監控儀表板查詢異常 Pod 日誌。",
            "B": "1. 新建啟用 Cloud Operations 的 GKE 叢集。2. 遷移異常 Pod 並導流。3. 用 GKE 監控儀表板查日誌。",
            "C": "1. GKE 叢集啟用 Cloud Operations 並部署 Prometheus。2. 設定錯誤警示。",
            "D": "1. 新建啟用 Cloud Operations 並部署 Prometheus 的 GKE 叢集。2. 遷移異常 Pod 並導流。3. 設定錯誤警示。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#123",
        "link": "https://www.examtopics.com/discussions/google/view/56384-exam-professional-cloud-architect-topic-1-question-123/",
        "question": "You need to deploy a stateful workload on Google Cloud. The workload can scale horizontally, but each instance needs to read and write to the same POSIX filesystem. At high load, the stateful workload needs to support up to 100 MB/s of writes. What should you do?",
        "question-zh": "您要在 Google Cloud 部署可橫向擴展的有狀態工作負載，每個執行個體都需存取同一 POSIX 檔案系統，且高負載時寫入需達 100MB/s。應怎麼做？",
        "options": {
            "A": "Use a persistent disk for each instance.",
            "B": "Use a regional persistent disk for each instance.",
            "C": "Create a Cloud Filestore instance and mount it in each instance.",
            "D": "Create a Cloud Storage bucket and mount it in each instance using gcsfuse."
        },
        "options-zh": {
            "A": "每個執行個體用一顆永久磁碟。",
            "B": "每個執行個體用一顆區域性永久磁碟。",
            "C": "建立 Cloud Filestore 並掛載於所有執行個體。",
            "D": "用 gcsfuse 掛載 Cloud Storage bucket。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#124",
        "link": "https://www.examtopics.com/discussions/google/view/57009-exam-professional-cloud-architect-topic-1-question-124/",
        "question": "Your company has an application deployed on Anthos clusters (formerly Anthos GKE) that is running multiple microservices. The cluster has both Anthos Service Mesh and Anthos Config Management configured. End users inform you that the application is responding very slowly. You want to identify the microservice that is causing the delay. What should you do?",
        "question-zh": "公司有應用部署於 Anthos 叢集（含 Service Mesh 與 Config Management），用戶反映回應慢。要找出拖慢的微服務，應怎麼做？",
        "options": {
            "A": "Use the Service Mesh visualization in the Cloud Console to inspect the telemetry between the microservices.",
            "B": "Use Anthos Config Management to create a ClusterSelector selecting the relevant cluster. On the Google Cloud Console page for Google Kubernetes Engine, view the Workloads and filter on the cluster. Inspect the configurations of the filtered workloads.",
            "C": "Use Anthos Config Management to create a namespaceSelector selecting the relevant cluster namespace. On the Google Cloud Console page for Google Kubernetes Engine, visit the workloads and filter on the namespace. Inspect the configurations of the filtered workloads.",
            "D": "Reinstall istio using the default istio profile in order to collect request latency. Evaluate the telemetry between the microservices in the Cloud Console."
        },
        "options-zh": {
            "A": "用 Cloud Console 的 Service Mesh 視覺化檢查微服務間遙測。",
            "B": "用 Anthos Config Management 建 ClusterSelector，於 GKE 主控台篩選並檢查工作負載。",
            "C": "用 Anthos Config Management 建 namespaceSelector，於 GKE 主控台篩選並檢查工作負載。",
            "D": "重裝 istio 並用預設設定收集延遲，再於 Console 評估。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#125",
        "link": "https://www.examtopics.com/discussions/google/view/57007-exam-professional-cloud-architect-topic-1-question-125/",
        "question": "You are working at a financial institution that stores mortgage loan approval documents on Cloud Storage. Any change to these approval documents must be uploaded as a separate approval file, so you want to ensure that these documents cannot be deleted or overwritten for the next 5 years. What should you do?",
        "question-zh": "您在金融機構工作，房貸核准文件存於 Cloud Storage，任何異動都需另存新檔，且 5 年內不得刪除或覆蓋。應怎麼做？",
        "options": {
            "A": "Create a retention policy on the bucket for the duration of 5 years. Create a lock on the retention policy.",
            "B": "Create the bucket with uniform bucket-level access, and grant a service account the role of Object Writer. Use the service account to upload new files.",
            "C": "Use a customer-managed key for the encryption of the bucket. Rotate the key after 5 years.",
            "D": "Create the bucket with fine-grained access control, and grant a service account the role of Object Writer. Use the service account to upload new files."
        },
        "options-zh": {
            "A": "為 bucket 設 5 年保留政策並加鎖。",
            "B": "bucket 設 uniform 存取，授權 Object Writer 上傳。",
            "C": "用自管金鑰加密，5 年後輪替。",
            "D": "bucket 設細緻存取，授權 Object Writer 上傳。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#126",
        "link": "https://www.examtopics.com/discussions/google/view/56702-exam-professional-cloud-architect-topic-1-question-126/",
        "question": "Your team will start developing a new application using microservices architecture on Kubernetes Engine. As part of the development lifecycle, any code change that has been pushed to the remote develop branch on your GitHub repository should be built and tested automatically. When the build and test are successful, the relevant microservice will be deployed automatically in the development environment. You want to ensure that all code deployed in the development environment follows this process. What should you do?",
        "question-zh": "您的團隊將在 Kubernetes Engine 開發微服務新應用，任何推到 GitHub develop 分支的程式都要自動建置測試並自動部署到開發環境。如何確保所有部署都經過這流程？",
        "options": {
            "A": "Have each developer install a pre-commit hook on their workstation that tests the code and builds the container when committing on the development branch. After a successful commit, have the developer deploy the newly built container image on the development cluster.",
            "B": "Install a post-commit hook on the remote git repository that tests the code and builds the container when code is pushed to the development branch. After a successful commit, have the developer deploy the newly built container image on the development cluster.",
            "C": "Create a Cloud Build trigger based on the development branch that tests the code, builds the container, and stores it in Container Registry. Create a deployment pipeline that watches for new images and deploys the new image on the development cluster. Ensure only the deployment tool has access to deploy new versions.",
            "D": "Create a Cloud Build trigger based on the development branch to build a new container image and store it in Container Registry. Rely on Vulnerability Scanning to ensure the code tests succeed. As the final step of the Cloud Build process, deploy the new container image on the development cluster. Ensure only Cloud Build has access to deploy new versions."
        },
        "options-zh": {
            "A": "每位開發者本機裝 pre-commit hook，commit 時測試並建容器，成功後手動部署。",
            "B": "遠端 git 裝 post-commit hook，push 時測試並建容器，成功後手動部署。",
            "C": "設 Cloud Build 觸發器監控 develop 分支，自動測試、建容器並存 Container Registry，再用部署管線自動部署，僅允許部署工具推新版本。",
            "D": "設 Cloud Build 觸發器監控 develop 分支，自動建容器並存 Container Registry，靠弱點掃描確保測試通過，最後 Cloud Build 自動部署，僅允許 Cloud Build 推新版本。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#127",
        "link": "https://www.examtopics.com/discussions/google/view/56603-exam-professional-cloud-architect-topic-1-question-127/",
        "question": "Your operations team has asked you to help diagnose a performance issue in a production application that runs on Compute Engine. The application is dropping requests that reach it when under heavy load. The process list for affected instances shows a single application process that is consuming all available CPU, and autoscaling has reached the upper limit of instances. There is no abnormal load on any other related systems, including the database. You want to allow production traffic to be served again as quickly as possible. Which action should you recommend?",
        "question-zh": "運維團隊請你協助診斷 Compute Engine 上生產應用的效能問題。高負載時應用丟失請求，且單一進程吃滿 CPU，autoscaling 已達上限，其他系統正常。要盡快恢復服務，建議怎麼做？",
        "options": {
            "A": "Change the autoscaling metric to agent.googleapis.com/memory/percent_used.",
            "B": "Restart the affected instances on a staggered schedule.",
            "C": "SSH to each instance and restart the application process.",
            "D": "Increase the maximum number of instances in the autoscaling group."
        },
        "options-zh": {
            "A": "autoscaling 指標改用記憶體使用率。",
            "B": "分批重啟受影響的 VM。",
            "C": "SSH 進每台機器重啟應用進程。",
            "D": "提高 autoscaling 群組最大 VM 數。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#128",
        "link": "https://www.examtopics.com/discussions/google/view/56612-exam-professional-cloud-architect-topic-1-question-128/",
        "question": "You are implementing the infrastructure for a web service on Google Cloud. The web service needs to receive and store the data from 500,000 requests per second. The data will be queried later in real time, based on exact matches of a known set of attributes. There will be periods where the web service will not receive any requests. The business wants to keep costs low. Which web service platform and database should you use for the application?",
        "question-zh": "您要在 Google Cloud 實作一個 Web 服務，需每秒接收 50 萬筆請求並儲存，日後根據屬性精確查詢。流量有高有低，需低成本。應選哪種平台與資料庫？",
        "options": {
            "A": "Cloud Run and BigQuery",
            "B": "Cloud Run and Cloud Bigtable",
            "C": "A Compute Engine autoscaling managed instance group and BigQuery",
            "D": "A Compute Engine autoscaling managed instance group and Cloud Bigtable"
        },
        "options-zh": {
            "A": "Cloud Run + BigQuery",
            "B": "Cloud Run + Cloud Bigtable",
            "C": "Compute Engine 自動擴展群組 + BigQuery",
            "D": "Compute Engine 自動擴展群組 + Cloud Bigtable"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#129",
        "link": "https://www.examtopics.com/discussions/google/view/57424-exam-professional-cloud-architect-topic-1-question-129/",
        "question": "You are developing your application using different microservices that should remain internal to the cluster. You want to be able to configure each microservice with a specific number of replicas. You also want to be able to address a specific microservice from any other microservice in a uniform way, regardless of the number of replicas the microservice scales to. You need to implement this solution on Google Kubernetes Engine. What should you do?",
        "question-zh": "您的應用由多個微服務組成，僅限叢集內部存取，且每個微服務需可設定副本數，並能用統一方式互相存取。要在 GKE 實作，應怎麼做？",
        "options": {
            "A": "Deploy each microservice as a Deployment. Expose the Deployment in the cluster using a Service, and use the Service DNS name to address it from other microservices within the cluster.",
            "B": "Deploy each microservice as a Deployment. Expose the Deployment in the cluster using an Ingress, and use the Ingress IP address to address the Deployment from other microservices within the cluster.",
            "C": "Deploy each microservice as a Pod. Expose the Pod in the cluster using a Service, and use the Service DNS name to address the microservice from other microservices within the cluster.",
            "D": "Deploy each microservice as a Pod. Expose the Pod in the cluster using an Ingress, and use the Ingress IP address name to address the Pod from other microservices within the cluster."
        },
        "options-zh": {
            "A": "每個微服務用 Deployment 部署，並用 Service 暴露，其他服務用 Service DNS 存取。",
            "B": "每個微服務用 Deployment 部署，用 Ingress 暴露，其他服務用 Ingress IP 存取。",
            "C": "每個微服務用 Pod 部署，用 Service 暴露，其他服務用 Service DNS 存取。",
            "D": "每個微服務用 Pod 部署，用 Ingress 暴露，其他服務用 Ingress IP 存取。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#130",
        "link": "https://www.examtopics.com/discussions/google/view/57301-exam-professional-cloud-architect-topic-1-question-130/",
        "question": "Your company has a networking team and a development team. The development team runs applications on Compute Engine instances that contain sensitive data. The development team requires administrative permissions for Compute Engine. Your company requires all network resources to be managed by the networking team. The development team does not want the networking team to have access to the sensitive data on the instances. What should you do?",
        "question-zh": "公司有網路與開發團隊，開發團隊的 Compute Engine 執行機密資料，需管理權限但不想讓網路團隊存取資料。公司要求所有網路資源由網路團隊管理。應怎麼做？",
        "options": {
            "A": "1. Create a project with a standalone VPC and assign the Network Admin role to the networking team. 2. Create a second project with a standalone VPC and assign the Compute Admin role to the development team. 3. Use Cloud VPN to join the two VPCs.",
            "B": "1. Create a project with a standalone Virtual Private Cloud (VPC), assign the Network Admin role to the networking team, and assign the Compute Admin role to the development team.",
            "C": "1. Create a project with a Shared VPC and assign the Network Admin role to the networking team. 2. Create a second project without a VPC, configure it as a Shared VPC service project, and assign the Compute Admin role to the development team.",
            "D": "1. Create a project with a standalone VPC and assign the Network Admin role to the networking team. 2. Create a second project with a standalone VPC and assign the Compute Admin role to the development team. 3. Use VPC Peering to join the two VPCs."
        },
        "options-zh": {
            "A": "1. 建獨立 VPC 專案給網路團隊 Network Admin。2. 再建獨立 VPC 專案給開發團隊 Compute Admin。3. 用 Cloud VPN 連兩 VPC。",
            "B": "1. 建獨立 VPC 專案，網路團隊 Network Admin，開發團隊 Compute Admin。",
            "C": "1. 建 Shared VPC 專案給網路團隊 Network Admin。2. 再建無 VPC 專案設為 Shared VPC 服務專案給開發團隊 Compute Admin。",
            "D": "1. 建獨立 VPC 專案給網路團隊 Network Admin。2. 再建獨立 VPC 專案給開發團隊 Compute Admin。3. 用 VPC Peering 連兩 VPC。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#131",
        "link": "https://www.examtopics.com/discussions/google/view/56615-exam-professional-cloud-architect-topic-1-question-131/",
        "question": "Your company is building a highly reliable web application with a few public APIs as the backend. You don't expect a lot of user traffic, but traffic could spike occasionally. You want to leverage Cloud Load Balancing, and the solution must be cost-effective for users. What should you do?",
        "question-zh": "公司要建高可靠性的 Web 應用，後端有少量公開 API，流量平時不大但偶有高峰，需用 Cloud Load Balancing 且成本低。應怎麼做？",
        "options": {
            "A": "Store static content such as HTML and images in Cloud CDN. Host the APIs on App Engine and store the user data in Cloud SQL.",
            "B": "Store static content such as HTML and images in a Cloud Storage bucket. Host the APIs on a zonal Google Kubernetes Engine cluster with worker nodes in multiple zones, and save the user data in Cloud Spanner.",
            "C": "Store static content such as HTML and images in Cloud CDN. Use Cloud Run to host the APIs and save the user data in Cloud SQL.",
            "D": "Store static content such as HTML and images in a Cloud Storage bucket. Use Cloud Functions to host the APIs and save the user data in Firestore."
        },
        "options-zh": {
            "A": "靜態內容用 Cloud CDN，API 用 App Engine，資料存 Cloud SQL。",
            "B": "靜態內容用 Cloud Storage，API 用 zonal GKE 多區節點，資料存 Cloud Spanner。",
            "C": "靜態內容用 Cloud CDN，API 用 Cloud Run，資料存 Cloud SQL。",
            "D": "靜態內容用 Cloud Storage，API 用 Cloud Functions，資料存 Firestore。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#132",
        "link": "https://www.examtopics.com/discussions/google/view/57043-exam-professional-cloud-architect-topic-1-question-132/",
        "question": "Your company sends all Google Cloud logs to Cloud Logging. Your security team wants to monitor the logs. You want to ensure that the security team can react quickly if an anomaly such as an unwanted firewall change or server breach is detected. You want to follow Google-recommended practices. What should you do?",
        "question-zh": "公司所有 GCP 日誌都送 Cloud Logging，資安團隊需監控並能即時反應異常（如防火牆異動或伺服器入侵），要依 Google 建議做法。應怎麼做？",
        "options": {
            "A": "Schedule a cron job with Cloud Scheduler. The scheduled job queries the logs every minute for the relevant events.",
            "B": "Export logs to BigQuery, and trigger a query in BigQuery to process the log data for the relevant events.",
            "C": "Export logs to a Pub/Sub topic, and trigger Cloud Function with the relevant log events.",
            "D": "Export logs to a Cloud Storage bucket, and trigger Cloud Run with the relevant log events."
        },
        "options-zh": {
            "A": "用 Cloud Scheduler 設 cron job，每分鐘查詢日誌。",
            "B": "日誌匯出到 BigQuery，定期查詢異常。",
            "C": "日誌匯出到 Pub/Sub，異常時觸發 Cloud Function。",
            "D": "日誌匯出到 Cloud Storage，異常時觸發 Cloud Run。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#133",
        "link": "https://www.examtopics.com/discussions/google/view/56751-exam-professional-cloud-architect-topic-1-question-133/",
        "question": "You have deployed several instances on Compute Engine. As a security requirement, instances cannot have a public IP address. There is no VPN connection between Google Cloud and your office, and you need to connect via SSH into a specific machine without violating the security requirements. What should you do?",
        "question-zh": "您在 Compute Engine 部署多台 VM，安全規定不得有公網 IP，且無 VPN 連線，但需 SSH 進特定機器。應怎麼做？",
        "options": {
            "A": "Configure Cloud NAT on the subnet where the instance is hosted. Create an SSH connection to the Cloud NAT IP address to reach the instance.",
            "B": "Add all instances to an unmanaged instance group. Configure TCP Proxy Load Balancing with the instance group as a backend. Connect to the instance using the TCP Proxy IP.",
            "C": "Configure Identity-Aware Proxy (IAP) for the instance and ensure that you have the role of IAP-secured Tunnel User. Use the gcloud command line tool to ssh into the instance.",
            "D": "Create a bastion host in the network to SSH into the bastion host from your office location. From the bastion host, SSH into the desired instance."
        },
        "options-zh": {
            "A": "子網設 Cloud NAT，SSH 連 Cloud NAT IP。",
            "B": "全部 VM 加入 unmanaged 群組，用 TCP Proxy LB，SSH 連 Proxy IP。",
            "C": "設 IAP 並給 IAP-secured Tunnel User 角色，用 gcloud ssh。",
            "D": "建 bastion host，先 SSH 進 bastion，再進目標 VM。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#134",
        "link": "https://www.examtopics.com/discussions/google/view/56975-exam-professional-cloud-architect-topic-1-question-134/",
        "question": "Your company is using Google Cloud. You have two folders under the Organization: Finance and Shopping. The members of the development team are in a Google Group. The development team group has been assigned the Project Owner role on the Organization. You want to prevent the development team from creating resources in projects in the Finance folder. What should you do?",
        "question-zh": "公司用 GCP，組織下有 Finance 與 Shopping 兩資料夾，開發團隊是 Google 群組，並有組織層 Project Owner 權限。要防止他們在 Finance 下建資源，應怎麼做？",
        "options": {
            "A": "Assign the development team group the Project Viewer role on the Finance folder, and assign the development team group the Project Owner role on the Shopping folder.",
            "B": "Assign the development team group only the Project Viewer role on the Finance folder.",
            "C": "Assign the development team group the Project Owner role on the Shopping folder, and remove the development team group Project Owner role from the Organization.",
            "D": "Assign the development team group only the Project Owner role on the Shopping folder."
        },
        "options-zh": {
            "A": "Finance 資料夾給 Project Viewer，Shopping 給 Project Owner。",
            "B": "Finance 資料夾只給 Project Viewer。",
            "C": "Shopping 給 Project Owner，並移除組織層 Project Owner。",
            "D": "只給 Shopping Project Owner。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#135",
        "link": "https://www.examtopics.com/discussions/google/view/56640-exam-professional-cloud-architect-topic-1-question-135/",
        "question": "You are developing your microservices application on Google Kubernetes Engine. During testing, you want to validate the behavior of your application in case a specific microservice should suddenly crash. What should you do?",
        "question-zh": "您在 GKE 開發微服務應用，測試時想驗證某微服務突然當機的行為。應怎麼做？",
        "options": {
            "A": "Add a taint to one of the nodes of the Kubernetes cluster. For the specific microservice, configure a pod anti-affinity label that has the name of the tainted node as a value.",
            "B": "Use Istio's fault injection on the particular microservice whose faulty behavior you want to simulate.",
            "C": "Destroy one of the nodes of the Kubernetes cluster to observe the behavior.",
            "D": "Configure Istio's traffic management features to steer the traffic away from a crashing microservice."
        },
        "options-zh": {
            "A": "在某節點加 taint，目標微服務設 pod anti-affinity 指向該節點。",
            "B": "用 Istio fault injection 模擬該微服務故障。",
            "C": "直接銷毀某節點觀察行為。",
            "D": "用 Istio 流量管理避開當機微服務。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#136",
        "link": "https://www.examtopics.com/discussions/google/view/56754-exam-professional-cloud-architect-topic-1-question-136/",
        "question": "Your company is developing a new application that will allow globally distributed users to upload pictures and share them with other selected users. The application will support millions of concurrent users. You want to allow developers to focus on just building code without having to create and maintain the underlying infrastructure. Which service should you use to deploy the application?",
        "question-zh": "公司開發新應用，全球用戶可上傳並分享圖片，需支援百萬並發，開發者只需專注寫程式不需管基礎設施。應用部署該用哪個服務？",
        "options": {
            "A": "App Engine",
            "B": "Cloud Endpoints",
            "C": "Compute Engine",
            "D": "Google Kubernetes Engine"
        },
        "options-zh": {
            "A": "App Engine",
            "B": "Cloud Endpoints",
            "C": "Compute Engine",
            "D": "Google Kubernetes Engine"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#137",
        "link": "https://www.examtopics.com/discussions/google/view/56656-exam-professional-cloud-architect-topic-1-question-137/",
        "question": "Your company provides a recommendation engine for retail customers. You are providing retail customers with an API where they can submit a user ID and the API returns a list of recommendations for that user. You are responsible for the API lifecycle and want to ensure stability for your customers in case the API makes backward-incompatible changes. You want to follow Google-recommended practices. What should you do?",
        "question-zh": "公司提供零售推薦引擎，API 讓客戶送 user ID 回傳推薦清單。你負責 API 生命週期，需確保遇到不相容變更時客戶穩定。依 Google 建議應怎麼做？",
        "options": {
            "A": "Create a distribution list of all customers to inform them of an upcoming backward-incompatible change at least one month before replacing the old API with the new API.",
            "B": "Create an automated process to generate API documentation, and update the public API documentation as part of the CI/CD process when deploying an update to the API.",
            "C": "Use a versioning strategy for the APIs that increases the version number on every backward-incompatible change.",
            "D": "Use a versioning strategy for the APIs that adds the suffix ג€DEPRECATEDג€ to the current API version number on every backward-incompatible change. Use the current version number for the new API."
        },
        "options-zh": {
            "A": "建立客戶郵件清單，API 不相容變更前一個月通知。",
            "B": "自動產生 API 文件並隨 CI/CD 更新。",
            "C": "API 每次不相容變更就升版號。",
            "D": "API 不相容變更時加 DEPRECATED 後綴，新 API 用新版本號。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#138",
        "link": "https://www.examtopics.com/discussions/google/view/56976-exam-professional-cloud-architect-topic-1-question-138/",
        "question": "You are using Cloud Build for your CI/CD pipeline to complete several tasks, including copying certain files to Compute Engine virtual machines. Your pipeline requires a flat file that is generated in one builder in the pipeline to be accessible by subsequent builders in the same pipeline. How should you store the file so that all the builders in the pipeline can access it?",
        "question-zh": "你用 Cloud Build 做 CI/CD，需讓一個 builder 產生的檔案後續 builder 都能存取。該怎麼做？",
        "options": {
            "A": "Store and retrieve the file contents using Compute Engine instance metadata.",
            "B": "Output the file contents to a file in /workspace. Read from the same /workspace file in the subsequent build step.",
            "C": "Use gsutil to output the file contents to a Cloud Storage object. Read from the same object in the subsequent build step.",
            "D": "Add a build argument that runs an HTTP POST via curl to a separate web server to persist the value in one builder. Use an HTTP GET via curl from the subsequent build step to read the value."
        },
        "options-zh": {
            "A": "用 Compute Engine metadata 儲存/讀取檔案內容。",
            "B": "輸出到 /workspace，後續步驟從同檔案讀取。",
            "C": "用 gsutil 存到 Cloud Storage，後續步驟讀同物件。",
            "D": "用 curl POST 存到外部伺服器，後續用 GET 讀回。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#139",
        "link": "https://www.examtopics.com/discussions/google/view/56706-exam-professional-cloud-architect-topic-1-question-139/",
        "question": "Your team is developing a web application that will be deployed on Google Kubernetes Engine (GKE). Your CTO expects a successful launch and you need to ensure your application can handle the expected load of tens of thousands of users. You want to test the current deployment to ensure the latency of your application stays below a certain threshold. What should you do?",
        "question-zh": "團隊要將 Web 應用部署到 GKE，CTO 預期大量用戶，需測試延遲是否低於門檻。應怎麼做？",
        "options": {
            "A": "Use a load testing tool to simulate the expected number of concurrent users and total requests to your application, and inspect the results.",
            "B": "Enable autoscaling on the GKE cluster and enable horizontal pod autoscaling on your application deployments. Send curl requests to your application, and validate if the auto scaling works.",
            "C": "Replicate the application over multiple GKE clusters in every Google Cloud region. Configure a global HTTP(S) load balancer to expose the different clusters over a single global IP address.",
            "D": "Use Cloud Debugger in the development environment to understand the latency between the different microservices."
        },
        "options-zh": {
            "A": "用壓力測試工具模擬用戶與請求量，檢查結果。",
            "B": "GKE 叢集與應用啟用自動擴展，curl 測試自動擴展。",
            "C": "多區 GKE 複製應用，設全球 LB。",
            "D": "開發環境用 Cloud Debugger 查微服務延遲。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#140",
        "link": "https://www.examtopics.com/discussions/google/view/60396-exam-professional-cloud-architect-topic-1-question-140/",
        "question": "Your company has a Kubernetes application that pulls messages from Pub/Sub and stores them in Filestore. Because the application is simple, it was deployed as a single pod. The infrastructure team has analyzed Pub/Sub metrics and discovered that the application cannot process the messages in real time. Most of them wait for minutes before being processed. You need to scale the elaboration process that is I/O-intensive. What should you do?",
        "question-zh": "公司有個 Kubernetes 應用從 Pub/Sub 拉訊息存 Filestore，僅單一 pod，發現無法即時處理訊息，多數延遲數分鐘。需擴展 I/O 密集處理。應怎麼做？",
        "options": {
            "A": "Use kubectl autoscale deployment APP_NAME --max 6 --min 2 --cpu-percent 50 to configure Kubernetes autoscaling deployment.",
            "B": "Configure a Kubernetes autoscaling deployment based on the subscription/push_request_latencies metric.",
            "C": "Use the --enable-autoscaling flag when you create the Kubernetes cluster.",
            "D": "Configure a Kubernetes autoscaling deployment based on the subscription/num_undelivered_messages metric."
        },
        "options-zh": {
            "A": "用 kubectl autoscale 設 max 6 min 2 cpu 50% 自動擴展。",
            "B": "依 subscription/push_request_latencies 設自動擴展。",
            "C": "建叢集時加 --enable-autoscaling。",
            "D": "依 subscription/num_undelivered_messages 設自動擴展。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#141",
        "link": "https://www.examtopics.com/discussions/google/view/60698-exam-professional-cloud-architect-topic-1-question-141/" +
            "",
        "question": "Your company is developing a web-based application. You need to make sure that production deployments are linked to source code commits and are fully auditable. What should you do?",
        "question-zh": "公司開發 Web 應用，需確保生產部署可追溯到原始碼 commit 並可稽核。應怎麼做？",
        "options": {
            "A": "Make sure a developer is tagging the code commit with the date and time of commit.",
            "B": "Make sure a developer is adding a comment to the commit that links to the deployment.",
            "C": "Make the container tag match the source code commit hash.",
            "D": "Make sure the developer is tagging the commits with latest."
        },
        "options-zh": {
            "A": "要求開發者用日期時間標記 commit。",
            "B": "要求 commit 註解連結部署。",
            "C": "容器 tag 與 commit hash 一致。",
            "D": "要求 commit 標記 latest。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#142",
        "link": "https://www.examtopics.com/discussions/google/view/60437-exam-professional-cloud-architect-topic-1-question-142/",
        "question": "An application development team has come to you for advice. They are planning to write and deploy an HTTP(S) API using Go 1.12. The API will have a very unpredictable workload and must remain reliable during peaks in traffic. They want to minimize operational overhead for this application. Which approach should you recommend?",
        "question-zh": "開發團隊要用 Go 1.12 寫 HTTP(S) API，流量極不穩定且高峰需可靠，想降低運維負擔。建議用哪種方式？",
        "options": {
            "A": "Develop the application with containers, and deploy to Google Kubernetes Engine.",
            "B": "Develop the application for App Engine standard environment.",
            "C": "Use a Managed Instance Group when deploying to Compute Engine.",
            "D": "Develop the application for App Engine flexible environment, using a custom runtime."
        },
        "options-zh": {
            "A": "用容器開發並部署到 GKE。",
            "B": "開發 App Engine 標準環境。",
            "C": "Compute Engine 用 Managed Instance Group。",
            "D": "App Engine 彈性環境用自訂 runtime。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#143",
        "link": "https://www.examtopics.com/discussions/google/view/60682-exam-professional-cloud-architect-topic-1-question-143/",
        "question": "Your company is designing its data lake on Google Cloud and wants to develop different ingestion pipelines to collect unstructured data from different sources.\n\nAfter the data is stored in Google Cloud, it will be processed in several data pipelines to build a recommendation engine for end users on the website. The structure of the data retrieved from the source systems can change at any time. The data must be stored exactly as it was retrieved for reprocessing purposes in case the data structure is incompatible with the current processing pipelines. You need to design an architecture to support the use case after you retrieve the data. What should you do?",
        "question-zh": "公司在 GCP 設計 data lake，需收集多來源非結構化資料，且來源結構可能隨時變動，必須原樣儲存以便重處理。應如何設計？",
        "options": {
            "A": "Send the data through the processing pipeline, and then store the processed data in a BigQuery table for reprocessing.",
            "B": "Store the data in a BigQuery table. Design the processing pipelines to retrieve the data from the table.",
            "C": "Send the data through the processing pipeline, and then store the processed data in a Cloud Storage bucket for reprocessing.",
            "D": "Store the data in a Cloud Storage bucket. Design the processing pipelines to retrieve the data from the bucket."
        },
        "options-zh": {
            "A": "先經處理管線再存 BigQuery 以便重處理。",
            "B": "直接存 BigQuery，處理管線從表取資料。",
            "C": "先經處理管線再存 Cloud Storage 以便重處理。",
            "D": "直接存 Cloud Storage，處理管線從 bucket 取資料。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#144",
        "link": "https://www.examtopics.com/discussions/google/view/60743-exam-professional-cloud-architect-topic-1-question-144/",
        "question": "You are responsible for the Google Cloud environment in your company. Multiple departments need access to their own projects, and the members within each department will have the same project responsibilities. You want to structure your Google Cloud environment for minimal maintenance and maximum overview of IAM permissions as each department's projects start and end. You want to follow Google-recommended practices. What should you do?",
        "question-zh": "你負責公司 GCP 環境，多部門需各自專案權限，且每部門成員權限一致。要最少維護、最佳權限總覽，依 Google 建議怎麼做？",
        "options": {
            "A": "Grant all department members the required IAM permissions for their respective projects.",
            "B": "Create a Google Group per department and add all department members to their respective groups. Create a folder per department and grant the respective group the required IAM permissions at the folder level. Add the projects under the respective folders.",
            "C": "Create a folder per department and grant the respective members of the department the required IAM permissions at the folder level. Structure all projects for each department under the respective folders.",
            "D": "Create a Google Group per department and add all department members to their respective groups. Grant each group the required IAM permissions for their respective projects."
        },
        "options-zh": {
            "A": "每部門成員直接給專案權限。",
            "B": "每部門建 Google 群組，建資料夾並給群組權限，專案放資料夾下。",
            "C": "每部門建資料夾並直接給成員權限，專案放資料夾下。",
            "D": "每部門建 Google 群組，直接給群組專案權限。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#145",
        "link": "https://www.examtopics.com/discussions/google/view/60438-exam-professional-cloud-architect-topic-1-question-145/",
        "question": "Your company has an application running as a Deployment in a Google Kubernetes Engine (GKE) cluster. You have separate clusters for development, staging, and production. You have discovered that the team is able to deploy a Docker image to the production cluster without first testing the deployment in development and then staging. You want to allow the team to have autonomy but want to prevent this from happening. You want a Google Cloud solution that can be implemented quickly with minimal effort. What should you do?",
        "question-zh": "公司 GKE 有 dev/stage/prod 三叢集，發現團隊能直接將 Docker image 部署到 prod 而未經 dev/stage 測試。要讓團隊有自主權又防止此事，且解決方案要快且簡單。應怎麼做？",
        "options": {
            "A": "Configure a Kubernetes lifecycle hook to prevent the container from starting if it is not approved for usage in the given environment.",
            "B": "Implement a corporate policy to prevent teams from deploying Docker images to an environment unless the Docker image was tested in an earlier environment.",
            "C": "Configure binary authorization policies for the development, staging, and production clusters. Create attestations as part of the continuous integration pipeline.",
            "D": "Create a Kubernetes admissions controller to prevent the container from starting if it is not approved for usage in the given environment."
        },
        "options-zh": {
            "A": "設 Kubernetes lifecycle hook，未核准則不啟動容器。",
            "B": "訂公司政策，未經前環境測試不得部署。",
            "C": "dev/stage/prod 設 binary authorization，CI/CD 產生 attestation。",
            "D": "設 Kubernetes admissions controller，未核准則不啟動容器。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#146",
        "link": "https://www.examtopics.com/discussions/google/view/60720-exam-professional-cloud-architect-topic-1-question-146/",
        "question": "Your company wants to migrate their 10-TB on-premises database export into Cloud Storage. You want to minimize the time it takes to complete this activity, the overall cost, and database load. The bandwidth between the on-premises environment and Google Cloud is 1 Gbps. You want to follow Google-recommended practices. What should you do?",
        "question-zh": "公司要將 10TB 地端資料庫匯出檔遷移到 Cloud Storage，需最小化時間、成本與資料庫負載，地端到 GCP 頻寬 1Gbps，依 Google 建議怎麼做？",
        "options": {
            "A": "Develop a Dataflow job to read data directly from the database and write it into Cloud Storage.",
            "B": "Use the Data Transfer appliance to perform an offline migration.",
            "C": "Use a commercial partner ETL solution to extract the data from the on-premises database and upload it into Cloud Storage.",
            "D": "Compress the data and upload it with gsutil -m to enable multi-threaded copy."
        },
        "options-zh": {
            "A": "用 Dataflow 直接從資料庫讀寫到 Cloud Storage。",
            "B": "用 Data Transfer appliance 離線遷移。",
            "C": "用商業 ETL 工具抽取並上傳。",
            "D": "壓縮後用 gsutil -m 多執行緒上傳。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#147",
        "link": "https://www.examtopics.com/discussions/google/view/60583-exam-professional-cloud-architect-topic-1-question-147/",
        "question": "Your company has an enterprise application running on Compute Engine that requires high availability and high performance. The application has been deployed on two instances in two zones in the same region in active-passive mode. The application writes data to a persistent disk. In the case of a single zone outage, that data should be immediately made available to the other instance in the other zone. You want to maximize performance while minimizing downtime and data loss.\n\nWhat should you do?",
        "question-zh": "公司有企業應用跑在 Compute Engine，需高可用高效能，兩區 VM active-passive，資料寫入永久磁碟。若單一區故障，資料要能立即給另一區 VM 用。要效能高又降停機與資料遺失。怎麼做？",
        "options": {
            "A": "1. Attach a persistent SSD disk to the first instance. 2. Create a snapshot every hour. 3. In case of a zone outage, recreate a persistent SSD disk in the second instance where data is coming from the created snapshot.",
            "B": "1. Create a Cloud Storage bucket. 2. Mount the bucket into the first instance with gcs-fuse. 3. In case of a zone outage, mount the Cloud Storage bucket to the second instance with gcs-fuse.",
            "C": "1. Attach a regional SSD persistent disk to the first instance. 2. In case of a zone outage, force-attach the disk to the other instance.",
            "D": "1. Attach a local SSD to the first instance disk. 2. Execute an rsync command every hour where the target is a persistent SSD disk attached to the second instance. 3. In case of a zone outage, use the second instance."
        },
        "options-zh": {
            "A": "1. 第一台掛 SSD 永久磁碟，每小時快照，故障時用快照重建。",
            "B": "1. 建 Cloud Storage bucket，gcs-fuse 掛載，故障時另一台也掛載。",
            "C": "1. 第一台掛區域性 SSD 永久磁碟，故障時強制掛到另一台。",
            "D": "1. 第一台掛 local SSD，每小時 rsync 到第二台的永久磁碟，故障時用第二台。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#148",
        "link": "https://www.examtopics.com/discussions/google/view/60439-exam-professional-cloud-architect-topic-1-question-148/",
        "question": "You are designing a Data Warehouse on Google Cloud and want to store sensitive data in BigQuery. Your company requires you to generate the encryption keys outside of Google Cloud. You need to implement a solution. What should you do?",
        "question-zh": "你要在 GCP 設計數據倉儲並存敏感資料，公司要求加密金鑰須在 GCP 外產生。應怎麼做？",
        "options": {
            "A": "Generate a new key in Cloud Key Management Service (Cloud KMS). Store all data in Cloud Storage using the customer-managed key option and select the created key. Set up a Dataflow pipeline to decrypt the data and to store it in a new BigQuery dataset.",
            "B": "Generate a new key in Cloud KMS. Create a dataset in BigQuery using the customer-managed key option and select the created key.",
            "C": "Import a key in Cloud KMS. Store all data in Cloud Storage using the customer-managed key option and select the created key. Set up a Dataflow pipeline to decrypt the data and to store it in a new BigQuery dataset.",
            "D": "Import a key in Cloud KMS. Create a dataset in BigQuery using the customer-supplied key option and select the created key."
        },
        "options-zh": {
            "A": "Cloud KMS 產生金鑰，Cloud Storage 用客戶管理金鑰，Dataflow 解密存新 BigQuery。",
            "B": "Cloud KMS 產生金鑰，BigQuery 用客戶管理金鑰。",
            "C": "Cloud KMS 匯入金鑰，Cloud Storage 用客戶管理金鑰，Dataflow 解密存新 BigQuery。",
            "D": "Cloud KMS 匯入金鑰，BigQuery 用客戶自帶金鑰。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#149",
        "link": "https://www.examtopics.com/discussions/google/view/60440-exam-professional-cloud-architect-topic-1-question-149/",
        "question": "Your organization has stored sensitive data in a Cloud Storage bucket. For regulatory reasons, your company must be able to rotate the encryption key used to encrypt the data in the bucket. The data will be processed in Dataproc. You want to follow Google-recommended practices for security. What should you do?",
        "question-zh": "組織將敏感資料存於 Cloud Storage，法規要求金鑰可輪替，資料會用 Dataproc 處理。依 Google 建議怎麼做？",
        "options": {
            "A": "Create a key with Cloud Key Management Service (KMS). Encrypt the data using the encrypt method of Cloud KMS.",
            "B": "Create a key with Cloud Key Management Service (KMS). Set the encryption key on the bucket to the Cloud KMS key.",
            "C": "Generate a GPG key pair. Encrypt the data using the GPG key. Upload the encrypted data to the bucket.",
            "D": "Generate an AES-256 encryption key. Encrypt the data in the bucket using the customer-supplied encryption keys feature."
        },
        "options-zh": {
            "A": "Cloud KMS 建金鑰，用 encrypt 方法加密。",
            "B": "Cloud KMS 建金鑰，bucket 設為該金鑰。",
            "C": "產生 GPG 金鑰對加密後上傳。",
            "D": "產生 AES-256 金鑰，用客戶自帶金鑰加密。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#150",
        "link": "https://www.examtopics.com/discussions/google/view/60441-exam-professional-cloud-architect-topic-1-question-150/",
        "question": "Your team needs to create a Google Kubernetes Engine (GKE) cluster to host a newly built application that requires access to third-party services on the internet.\n\nYour company does not allow any Compute Engine instance to have a public IP address on Google Cloud. You need to create a deployment strategy that adheres to these guidelines. What should you do?",
        "question-zh": "團隊要建 GKE 叢集部署新應用，需存取網路第三方服務，公司規定所有 Compute Engine 不可有公網 IP。部署策略該怎麼做？",
        "options": {
            "A": "Configure the GKE cluster as a private cluster, and configure Cloud NAT Gateway for the cluster subnet.",
            "B": "Configure the GKE cluster as a private cluster. Configure Private Google Access on the Virtual Private Cloud (VPC).",
            "C": "Configure the GKE cluster as a route-based cluster. Configure Private Google Access on the Virtual Private Cloud (VPC).",
            "D": "Create a Compute Engine instance, and install a NAT Proxy on the instance. Configure all workloads on GKE to pass through this proxy to access third-party services on the Internet."
        },
        "options-zh": {
            "A": "GKE 設為 private cluster，子網設 Cloud NAT Gateway。",
            "B": "GKE 設 private cluster，VPC 設 Private Google Access。",
            "C": "GKE 設 route-based cluster，VPC 設 Private Google Access。",
            "D": "建 VM 裝 NAT Proxy，GKE 全部流量經 Proxy。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#151",
        "link": "https://www.examtopics.com/discussions/google/view/60436-exam-professional-cloud-architect-topic-1-question-151/",
        "question": "Your company has a support ticketing solution that uses App Engine Standard. The project that contains the App Engine application already has a Virtual Private Cloud (VPC) network fully connected to the company's on-premises environment through a Cloud VPN tunnel. You want to enable the App Engine application to communicate with a database that is running in the company's on-premises environment. What should you do?",
        "question-zh": "公司有 App Engine Standard 的客服系統，專案已用 Cloud VPN 連地端 VPC。要讓 App Engine 應用能連地端資料庫，該怎麼做？",
        "options": {
            "A": "Configure private Google access for on-premises hosts only.",
            "B": "Configure private Google access.",
            "C": "Configure private services access.",
            "D": "Configure serverless VPC access."
        },
        "options-zh": {
            "A": "只設地端主機 private Google access。",
            "B": "設 private Google access。",
            "C": "設 private services access。",
            "D": "設 serverless VPC access。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#152",
        "link": "https://www.examtopics.com/discussions/google/view/60415-exam-professional-cloud-architect-topic-1-question-152/",
        "question": "Your company is planning to upload several important files to Cloud Storage. After the upload is completed, they want to verify that the uploaded content is identical to what they have on-premises. You want to minimize the cost and effort of performing this check. What should you do?",
        "question-zh": "公司要上傳多個重要檔案到 Cloud Storage，完成後要驗證雲端與地端內容一致，且要省成本省力。怎麼做？",
        "options": {
            "A": "1. Use Linux shasum to compute a digest of files you want to upload. 2. Use gsutil -m to upload all the files to Cloud Storage. 3. Use gsutil cp to download the uploaded files. 4. Use Linux shasum to compute a digest of the downloaded files. 5. Compare the hashes.",
            "B": "1. Use gsutil -m to upload the files to Cloud Storage. 2. Develop a custom Java application that computes CRC32C hashes. 3. Use gsutil ls -L gs://[YOUR_BUCKET_NAME] to collect CRC32C hashes of the uploaded files. 4. Compare the hashes.",
            "C": "1. Use gsutil -m to upload all the files to Cloud Storage. 2. Use gsutil cp to download the uploaded files. 3. Use Linux diff to compare the content of the files.",
            "D": "1. Use gsutil -m to upload the files to Cloud Storage. 2. Use gsutil hash -c FILE_NAME to generate CRC32C hashes of all on-premises files. 3. Use gsutil ls -L gs://[YOUR_BUCKET_NAME] to collect CRC32C hashes of the uploaded files. 4. Compare the hashes."
        },
        "options-zh": {
            "A": "1. 用 shasum 算地端檔案雜湊。2. gsutil -m 上傳。3. gsutil cp 下載。4. shasum 算下載檔案雜湊。5. 比對。",
            "B": "1. gsutil -m 上傳。2. 自製 Java 算 CRC32C。3. gsutil ls -L 取雲端 CRC32C。4. 比對。",
            "C": "1. gsutil -m 上傳。2. gsutil cp 下載。3. diff 比對內容。",
            "D": "1. gsutil -m 上傳。2. gsutil hash -c 算地端 CRC32C。3. gsutil ls -L 取雲端 CRC32C。4. 比對。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#153",
        "link": "https://www.examtopics.com/discussions/google/view/60624-exam-professional-cloud-architect-topic-1-question-153/",
        "question": "You have deployed an application on Anthos clusters (formerly Anthos GKE). According to the SRE practices at your company, you need to be alerted if request latency is above a certain threshold for a specified amount of time. What should you do?",
        "question-zh": "你在 Anthos 叢集部署應用，依 SRE 規範需監控請求延遲超標時發警示。應怎麼做？",
        "options": {
            "A": "Install Anthos Service Mesh on your cluster. Use the Google Cloud Console to define a Service Level Objective (SLO), and create an alerting policy based on this SLO.",
            "B": "Enable the Cloud Trace API on your project, and use Cloud Monitoring Alerts to send an alert based on the Cloud Trace metrics.",
            "C": "Use Cloud Profiler to follow up the request latency. Create a custom metric in Cloud Monitoring based on the results of Cloud Profiler, and create an Alerting policy in case this metric exceeds the threshold.",
            "D": "Configure Anthos Config Management on your cluster, and create a yaml file that defines the SLO and alerting policy you want to deploy in your cluster."
        },
        "options-zh": {
            "A": "叢集裝 Anthos Service Mesh，Console 設 SLO 並建警示。",
            "B": "專案啟用 Cloud Trace API，Cloud Monitoring 設警示。",
            "C": "用 Cloud Profiler 追蹤延遲，結果建自訂指標並設警示。",
            "D": "叢集設 Anthos Config Management，yaml 定義 SLO 與警示。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#154",
        "link": "https://www.examtopics.com/discussions/google/view/60627-exam-professional-cloud-architect-topic-1-question-154/",
        "question": "Your company has a stateless web API that performs scientific calculations. The web API runs on a single Google Kubernetes Engine (GKE) cluster. The cluster is currently deployed in us-central1. Your company has expanded to offer your API to customers in Asia. You want to reduce the latency for users in Asia.\n\nWhat should you do?",
        "question-zh": "公司有無狀態 Web API 做科學運算，跑在 us-central1 的 GKE，現要服務亞洲客戶並降延遲。應怎麼做？",
        "options": {
            "A": "Create a second GKE cluster in asia-southeast1, and expose both APIs using a Service of type LoadBalancer. Add the public IPs to the Cloud DNS zone.",
            "B": "Use a global HTTP(s) load balancer with Cloud CDN enabled.",
            "C": "Create a second GKE cluster in asia-southeast1, and use kubemci to create a global HTTP(s) load balancer.",
            "D": "Increase the memory and CPU allocated to the application in the cluster."
        },
        "options-zh": {
            "A": "亞洲再建 GKE 並用 LoadBalancer，兩組 IP 加入 Cloud DNS。",
            "B": "用全球 HTTP(s) LB 並啟用 Cloud CDN。",
            "C": "亞洲再建 GKE 並用 kubemci 建全球 HTTP(s) LB。",
            "D": "加大叢集資源。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#155",
        "link": "https://www.examtopics.com/discussions/google/view/60494-exam-professional-cloud-architect-topic-1-question-155/",
        "question": "You are migrating third-party applications from optimized on-premises virtual machines to Google Cloud. You are unsure about the optimum CPU and memory options. The applications have a consistent usage pattern across multiple weeks. You want to optimize resource usage for the lowest cost. What should you do?",
        "question-zh": "你要將第三方應用從最佳化地端 VM 遷移到 GCP，對最佳 CPU/記憶體不確定，應用負載週期穩定，想用最低成本。怎麼做？",
        "options": {
            "A": "Create an instance template with the smallest available machine type, and use an image of the third-party application taken from a current on-premises virtual machine. Create a managed instance group that uses average CPU utilization to autoscale the number of instances in the group. Modify the average CPU utilization threshold to optimize the number of instances running.",
            "B": "Create an App Engine flexible environment, and deploy the third-party application using a Dockerfile and a custom runtime. Set CPU and memory options similar to your application's current on-premises virtual machine in the app.yaml file.",
            "C": "Create multiple Compute Engine instances with varying CPU and memory options. Install the Cloud Monitoring agent, and deploy the third-party application on each of them. Run a load test with high traffic levels on the application, and use the results to determine the optimal settings.",
            "D": "Create a Compute Engine instance with CPU and memory options similar to your application's current on-premises virtual machine. Install the Cloud Monitoring agent, and deploy the third-party application. Run a load test with normal traffic levels on the application, and follow the Rightsizing Recommendations in the Cloud Console."
        },
        "options-zh": {
            "A": "建最小型 VM 範本，現有映像建受管群組，依 CPU 利用率自動擴展並調整門檻。",
            "B": "App Engine 彈性環境用 Dockerfile 部署，app.yaml 設定資源。",
            "C": "多台 VM 測不同資源，裝 Monitoring 跑壓測找最佳組合。",
            "D": "建與現有 VM 相同資源的 VM，裝 Monitoring 跑正常流量壓測，依 Console 建議調整。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#156",
        "link": "https://www.examtopics.com/discussions/google/view/60416-exam-professional-cloud-architect-topic-1-question-156/",
        "question": "Your company has a Google Cloud project that uses BigQuery for data warehousing. They have a VPN tunnel between the on-premises environment and Google Cloud that is configured with Cloud VPN. The security team wants to avoid data exfiltration by malicious insiders, compromised code, and accidental oversharing.\n\nWhat should they do?",
        "question-zh": "公司 GCP 專案用 BigQuery 做數據倉儲，地端與 GCP 用 Cloud VPN 連線，資安團隊要防止內賊、惡意程式或誤分享造成資料外洩。怎麼做？",
        "options": {
            "A": "Configure Private Google Access for on-premises only.",
            "B": "Perform the following tasks: 1. Create a service account. 2. Give the BigQuery JobUser role and Storage Reader role to the service account. 3. Remove all other IAM access from the project.",
            "C": "Configure VPC Service Controls and configure Private Google Access.",
            "D": "Configure Private Google Access."
        },
        "options-zh": {
            "A": "只設地端 Private Google Access。",
            "B": "1. 建 service account 並給 BigQuery JobUser 與 Storage Reader，移除其他 IAM。",
            "C": "設 VPC Service Controls 並設 Private Google Access。",
            "D": "設 Private Google Access。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#157",
        "link": "https://www.examtopics.com/discussions/google/view/60495-exam-professional-cloud-architect-topic-1-question-157/",
        "question": "You are working at an institution that processes medical data. You are migrating several workloads onto Google Cloud. Company policies require all workloads to run on physically separated hardware, and workloads from different clients must also be separated. You created a sole-tenant node group and added a node for each client. You need to deploy the workloads on these dedicated hosts. What should you do?",
        "question-zh": "你在醫療機構工作，需將多個工作負載遷移到 GCP，政策要求每個工作負載都要物理隔離且不同客戶也要隔離。你已建 sole-tenant node group 並每客戶一台，如何部署？",
        "options": {
            "A": "Add the node group name as a network tag when creating Compute Engine instances in order to host each workload on the correct node group.",
            "B": "Add the node name as a network tag when creating Compute Engine instances in order to host each workload on the correct node.",
            "C": "Use node affinity labels based on the node group name when creating Compute Engine instances in order to host each workload on the correct node group.",
            "D": "Use node affinity labels based on the node name when creating Compute Engine instances in order to host each workload on the correct node."
        },
        "options-zh": {
            "A": "建 VM 時用 node group 名稱做網路標籤。",
            "B": "建 VM 時用 node 名稱做網路標籤。",
            "C": "建 VM 時用 node group 名稱做 node affinity label。",
            "D": "建 VM 時用 node 名稱做 node affinity label。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#158",
        "link": "https://www.examtopics.com/discussions/google/view/8340-exam-professional-cloud-architect-topic-1-question-158/",
        "question": "Your company's test suite is a custom C++ application that runs tests throughout each day on Linux virtual machines. The full test suite takes several hours to complete, running on a limited number of on-premises servers reserved for testing. Your company wants to move the testing infrastructure to the cloud, to reduce the amount of time it takes to fully test a change to the system, while changing the tests as little as possible.\n\nWhich cloud infrastructure should you recommend?",
        "question-zh": "公司測試套件是自製 C++ 應用，每天在 Linux VM 跑數小時，僅少數地端伺服器可用。希望搬到雲端加速測試且改動最少。建議用哪種雲端架構？",
        "options": {
            "A": "Google Compute Engine unmanaged instance groups and Network Load Balancer",
            "B": "Google Compute Engine managed instance groups with auto-scaling",
            "C": "Google Cloud Dataproc to run Apache Hadoop jobs to process each test",
            "D": "Google App Engine with Google StackDriver for logging"
        },
        "options-zh": {
            "A": "Compute Engine 非受管群組 + 網路 LB。",
            "B": "Compute Engine 受管群組 + 自動擴展。",
            "C": "Cloud Dataproc 跑 Hadoop 處理測試。",
            "D": "App Engine + StackDriver 日誌。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#159",
        "link": "https://www.examtopics.com/discussions/google/view/8341-exam-professional-cloud-architect-topic-1-question-159/",
        "question": "A lead software engineer tells you that his new application design uses websockets and HTTP sessions that are not distributed across the web servers. You want to help him ensure his application will run properly on Google Cloud Platform.\n\nWhat should you do?",
        "question-zh": "資深工程師說新應用設計用 websockets 與 HTTP session，且 session 不分散。你要協助他確保能在 GCP 正常運作。怎麼做？",
        "options": {
            "A": "Help the engineer to convert his websocket code to use HTTP streaming",
            "B": "Review the encryption requirements for websocket connections with the security team",
            "C": "Meet with the cloud operations team and the engineer to discuss load balancer options",
            "D": "Help the engineer redesign the application to use a distributed user session service that does not rely on websockets and HTTP sessions."
        },
        "options-zh": {
            "A": "協助改 websocket 為 HTTP streaming。",
            "B": "與資安團隊檢討 websocket 加密需求。",
            "C": "與雲端運維和工程師討論 LB 選項。",
            "D": "協助改為分散式 session 服務不依賴 websocket/HTTP session。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#160",
        "link": "https://www.examtopics.com/discussions/google/view/54369-exam-professional-cloud-architect-topic-1-question-160/",
        "question": "The application reliability team at your company this added a debug feature to their backend service to send all server events to Google Cloud Storage for eventual analysis. The event records are at least 50 KB and at most 15 MB and are expected to peak at 3,000 events per second. You want to minimize data loss.\n\nWhich process should you implement?",
        "question-zh": "應用可靠性團隊加了 debug 功能，將所有 server event 傳到 Cloud Storage 分析，事件大小 50KB~15MB，峰值每秒 3000 筆，要最小化資料遺失。應怎麼做？",
        "options": {
            "A": "ג€¢ Append metadata to file body ג€¢ Compress individual files ג€¢ Name files with serverName ג€\" Timestamp ג€¢ Create a new bucket if bucket is older than 1 hour and save individual files to the new bucket. Otherwise, save files to existing bucket.",
            "B": "ג€¢ Batch every 10,000 events with a single manifest file for metadata ג€¢ Compress event files and manifest file into a single archive file ג€¢ Name files using serverName ג€\" EventSequence ג€¢ Create a new bucket if bucket is older than 1 day and save the single archive file to the new bucket. Otherwise, save the single archive file to existing bucket.",
            "C": "ג€¢ Compress individual files ג€¢ Name files with serverName ג€\" EventSequence ג€¢ Save files to one bucket ג€¢ Set custom metadata headers for each object after saving",
            "D": "ג€¢ Append metadata to file body ג€¢ Compress individual files ג€¢ Name files with a random prefix pattern ג€¢ Save files to one bucket"
        },
        "options-zh": {
            "A": "附加中繼資料於檔案，壓縮單檔，檔名 serverName+Timestamp，bucket 超過 1 小時新建，否則存舊 bucket。",
            "B": "每萬筆事件批次+manifest，壓縮成單一檔案，檔名 serverName+EventSequence，bucket 超過一天新建，否則存舊 bucket。",
            "C": "壓縮單檔，檔名 serverName+EventSequence，存同一 bucket，存後設自訂 metadata。",
            "D": "附加中繼資料於檔案，壓縮單檔，檔名隨機前綴，存同一 bucket。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#161",
        "link": "https://www.examtopics.com/discussions/google/view/7016-exam-professional-cloud-architect-topic-1-question-161/",
        "question": "A recent audit revealed that a new network was created in your GCP project. In this network, a GCE instance has an SSH port open to the world. You want to discover this network's origin.\n\nWhat should you do?",
        "question-zh": "稽核發現 GCP 專案新建網路且 GCE SSH 對外開放，要查來源。怎麼做？",
        "options": {
            "A": "Search for Create VM entry in the Stackdriver alerting console",
            "B": "Navigate to the Activity page in the Home section. Set category to Data Access and search for Create VM entry",
            "C": "In the Logging section of the console, specify GCE Network as the logging section. Search for the Create Insert entry",
            "D": "Connect to the GCE instance using project SSH keys. Identify previous logins in system logs, and match these with the project owners list"
        },
        "options-zh": {
            "A": "Stackdriver 警示台查 Create VM。",
            "B": "Home→Activity 設 Data Access 查 Create VM。",
            "C": "Console 日誌區選 GCE Network 查 Create Insert。",
            "D": "用專案 SSH key 連 GCE 查登入紀錄對照專案擁有者。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#162",
        "link": "https://www.examtopics.com/discussions/google/view/7018-exam-professional-cloud-architect-topic-1-question-162/",
        "question": "You want to make a copy of a production Linux virtual machine in the US-Central region. You want to manage and replace the copy easily if there are changes on the production virtual machine. You will deploy the copy as a new instance in a different project in the US-East region.\n\nWhat steps must you take?",
        "question-zh": "你要複製 US-Central 的生產 Linux VM，並能隨時替換，將複本部署到 US-East 不同專案。步驟為何？",
        "options": {
            "A": "Use the Linux dd and netcat commands to copy and stream the root disk contents to a new virtual machine instance in the US-East region.",
            "B": "Create a snapshot of the root disk and select the snapshot as the root disk when you create a new virtual machine instance in the US-East region.",
            "C": "Create an image file from the root disk with Linux dd command, create a new virtual machine instance in the US-East region",
            "D": "Create a snapshot of the root disk, create an image file in Google Cloud Storage from the snapshot, and create a new virtual machine instance in the US-East region using the image file the root disk."
        },
        "options-zh": {
            "A": "用 dd+netcat 複製 root disk 到 US-East 新 VM。",
            "B": "對 root disk 建快照，US-East 新 VM 用此快照。",
            "C": "dd 建映像檔，US-East 新 VM 用此映像。",
            "D": "root disk 建快照，快照存 Cloud Storage，US-East 新 VM 用此映像。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#163",
        "link": "https://www.examtopics.com/discussions/google/view/7020-exam-professional-cloud-architect-topic-1-question-163/",
        "question": "Your company runs several databases on a single MySQL instance. They need to take backups of a specific database at regular intervals. The backup activity needs to complete as quickly as possible and cannot be allowed to impact disk performance.\n\nHow should you configure the storage?",
        "question-zh": "公司多個資料庫跑在同一 MySQL，要定期備份特定資料庫，且備份要快又不能影響磁碟效能。儲存怎麼設？",
        "options": {
            "A": "Configure a cron job to use the gcloud tool to take regular backups using persistent disk snapshots.",
            "B": "Mount a Local SSD volume as the backup location. After the backup is complete, use gsutil to move the backup to Google Cloud Storage.",
            "C": "Use gcsfise to mount a Google Cloud Storage bucket as a volume directly on the instance and write backups to the mounted location using mysqldump.",
            "D": "Mount additional persistent disk volumes onto each virtual machine (VM) instance in a RAID10 array and use LVM to create snapshots to send to Cloud Storage"
        },
        "options-zh": {
            "A": "cron + gcloud 定期做永久磁碟快照。",
            "B": "掛 Local SSD 做備份，完後用 gsutil 傳 Cloud Storage。",
            "C": "gcsfuse 掛 Cloud Storage，mysqldump 備份到該掛載點。",
            "D": "每台 VM 掛多顆永久磁碟做 RAID10，用 LVM 快照傳 Cloud Storage。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#164",
        "link": "https://www.examtopics.com/discussions/google/view/54371-exam-professional-cloud-architect-topic-1-question-164/",
        "question": "You are helping the QA team to roll out a new load-testing tool to test the scalability of your primary cloud services that run on Google Compute Engine with Cloud Bigtable.\n\nWhich three requirements should they include? (Choose three.)",
        "question-zh": "你協助 QA 團隊導入新壓力測試工具，測試 Compute Engine + Cloud Bigtable 的主力服務擴展性。應納入哪三項需求？（選三項）",
        "options": {
            "A": "Ensure that the load tests validate the performance of Cloud Bigtable",
            "B": "Create a separate Google Cloud project to use for the load-testing environment",
            "C": "Schedule the load-testing tool to regularly run against the production environment",
            "D": "Ensure all third-party systems your services use is capable of handling high load",
            "E": "Instrument the production services to record every transaction for replay by the load-testing tool",
            "F": "Instrument the load-testing tool and the target services with detailed logging and metrics collection"
        },
        "options-zh": {
            "A": "壓測需驗證 Cloud Bigtable 效能。",
            "B": "壓測環境用獨立 GCP 專案。",
            "C": "定期對正式環境壓測。",
            "D": "確保所有第三方系統能承受高負載。",
            "E": "正式服務記錄所有交易供壓測重播。",
            "F": "壓測工具與目標服務都要詳細日誌與指標。"
        },
        "images": [],
        "answers": [
            "A",
            "B",
            "F"
        ]
    },
    {
        "topic": "#1",
        "no": "#165",
        "link": "https://www.examtopics.com/discussions/google/view/7068-exam-professional-cloud-architect-topic-1-question-165/",
        "question": "Your customer is moving their corporate applications to Google Cloud Platform. The security team wants detailed visibility of all projects in the organization. You provision the Google Cloud Resource Manager and set up yourself as the org admin.\n\nWhat Google Cloud Identity and Access Management (Cloud IAM) roles should you give to the security team?",
        "question-zh": "客戶將企業應用搬到 GCP，資安團隊要能細查所有專案。你設好 Resource Manager 並自設 org admin。資安團隊該給哪些 IAM 角色？",
        "options": {
            "A": "Org viewer, project owner",
            "B": "Org viewer, project viewer",
            "C": "Org admin, project browser",
            "D": "Project owner, network admin"
        },
        "options-zh": {
            "A": "Org viewer、project owner。",
            "B": "Org viewer、project viewer。",
            "C": "Org admin、project browser。",
            "D": "Project owner、network admin。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#166",
        "link": "https://www.examtopics.com/discussions/google/view/54372-exam-professional-cloud-architect-topic-1-question-166/",
        "question": "Your company places a high value on being responsive and meeting customer needs quickly. Their primary business objectives are release speed and agility. You want to reduce the chance of security errors being accidentally introduced.\n\nWhich two actions can you take? (Choose two.)",
        "question-zh": "公司重視回應速度與敏捷，目標是快速發佈。你要降低誤植資安漏洞的機率。可採取哪兩項行動？（選兩項）",
        "options": {
            "A": "Ensure every code check-in is peer reviewed by a security SME",
            "B": "Use source code security analyzers as part of the CI/CD pipeline",
            "C": "Ensure you have stubs to unit test all interfaces between components",
            "D": "Enable code signing and a trusted binary repository integrated with your CI/CD pipeline",
            "E": "Run a vulnerability security scanner as part of your continuous-integration /continuous-delivery (CI/CD) pipeline"
        },
        "options-zh": {
            "A": "每次程式提交都由資安專家審查。",
            "B": "CI/CD 流程納入原始碼安全分析。",
            "C": "所有元件介面都要有 stub 做單元測試。",
            "D": "啟用簽章與可信二進位倉庫整合 CI/CD。",
            "E": "CI/CD 流程納入弱點掃描。"
        },
        "images": [],
        "answers": [
            "B",
            "E"
        ]
    },
    {
        "topic": "#1",
        "no": "#167",
        "link": "https://www.examtopics.com/discussions/google/view/7073-exam-professional-cloud-architect-topic-1-question-167/",
        "question": "You want to enable your running Google Kubernetes Engine cluster to scale as demand for your application changes.\n\nWhat should you do?",
        "question-zh": "你要讓現有 GKE 叢集能隨需求自動擴展。怎麼做？",
        "options": {
            "A": "Add additional nodes to your Kubernetes Engine cluster using the following command: gcloud container clusters resize CLUSTER_Name ג€\" -size 10",
            "B": "Add a tag to the instances in the cluster with the following command: gcloud compute instances add-tags INSTANCE - -tags enable- autoscaling max-nodes-10",
            "C": "Update the existing Kubernetes Engine cluster with the following command: gcloud alpha container clusters update mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10",
            "D": "Create a new Kubernetes Engine cluster with the following command: gcloud alpha container clusters create mycluster - -enable- autoscaling - -min-nodes=1 - -max-nodes=10 and redeploy your application"
        },
        "options-zh": {
            "A": "gcloud container clusters resize CLUSTER_Name --size 10 增加節點。",
            "B": "gcloud compute instances add-tags INSTANCE --tags enable-autoscaling max-nodes-10。",
            "C": "gcloud alpha container clusters update mycluster --enable-autoscaling --min-nodes=1 --max-nodes=10。",
            "D": "gcloud alpha container clusters create mycluster --enable-autoscaling --min-nodes=1 --max-nodes=10 並重佈署應用。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#168",
        "link": "https://www.examtopics.com/discussions/google/view/54373-exam-professional-cloud-architect-topic-1-question-168/",
        "question": "Your marketing department wants to send out a promotional email campaign. The development team wants to minimize direct operation management. They project a wide range of possible customer responses, from 100 to 500,000 click-through per day. The link leads to a simple website that explains the promotion and collects user information and preferences.\n\nWhich infrastructure should you recommend? (Choose two.)",
        "question-zh": "行銷部要發促銷郵件，開發團隊想減少運維，預估點擊量 100~50 萬/天，連結到簡單網站收集用戶資料。建議用哪種架構？（選兩項）",
        "options": {
            "A": "Use Google App Engine to serve the website and Google Cloud Datastore to store user data.",
            "B": "Use a Google Container Engine cluster to serve the website and store data to persistent disk.",
            "C": "Use a managed instance group to serve the website and Google Cloud Bigtable to store user data.",
            "D": "Use a single Compute Engine virtual machine (VM) to host a web server, backend by Google Cloud SQL."
        },
        "options-zh": {
            "A": "App Engine 服務網站，Cloud Datastore 存資料。",
            "B": "Container Engine 服務網站，資料存永久磁碟。",
            "C": "受管群組服務網站，Cloud Bigtable 存資料。",
            "D": "單台 VM 跑網站，Cloud SQL 當後端。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#169",
        "link": "https://www.examtopics.com/discussions/google/view/54374-exam-professional-cloud-architect-topic-1-question-169/",
        "question": "Your company just finished a rapid lift and shift to Google Compute Engine for your compute needs. You have another 9 months to design and deploy a more cloud-native solution. Specifically, you want a system that is no-ops and auto-scaling.\n\nWhich two compute products should you choose? (Choose two.)",
        "question-zh": "公司剛完成 Compute Engine 快速遷移，還有 9 個月設計雲原生、無運維、自動擴展方案。該選哪兩種運算產品？（選兩項）",
        "options": {
            "A": "Compute Engine with containers",
            "B": "Google Kubernetes Engine with containers",
            "C": "Google App Engine Standard Environment",
            "D": "Compute Engine with custom instance types",
            "E": "Compute Engine with managed instance groups"
        },
        "options-zh": {
            "A": "Compute Engine + 容器。",
            "B": "Google Kubernetes Engine + 容器。",
            "C": "Google App Engine 標準環境。",
            "D": "Compute Engine + 自訂機型。",
            "E": "Compute Engine + 受管群組。"
        },
        "images": [],
        "answers": [
            "B",
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#170",
        "link": "https://www.examtopics.com/discussions/google/view/7082-exam-professional-cloud-architect-topic-1-question-170/",
        "question": "One of your primary business objectives is being able to trust the data stored in your application. You want to log all changes to the application data.\n\nHow can you design your logging system to verify authenticity of your logs?",
        "question-zh": "你的主要目標之一是信任應用儲存的資料，想記錄所有資料異動。如何設計日誌系統驗證日誌真實性？",
        "options": {
            "A": "Write the log concurrently in the cloud and on premises",
            "B": "Use a SQL database and limit who can modify the log table",
            "C": "Digitally sign each timestamp and log entry and store the signature",
            "D": "Create a JSON dump of each log entry and store it in Google Cloud Storage"
        },
        "options-zh": {
            "A": "雲端與本地同時寫日誌。",
            "B": "用 SQL 限制誰能改日誌表。",
            "C": "每筆日誌與時間戳都數位簽章並存簽章。",
            "D": "每筆日誌轉 JSON 存 Cloud Storage。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#171",
        "link": "https://www.examtopics.com/discussions/google/view/68682-exam-professional-cloud-architect-topic-1-question-171/",
        "question": "Your company has a Google Workspace account and Google Cloud Organization. Some developers in the company have created Google Cloud projects outside of the Google Cloud Organization.\n\nYou want to create an Organization structure that allows developers to create projects, but prevents them from modifying production projects. You want to manage policies for all projects centrally and be able to set more restrictive policies for production projects.\n\nYou want to minimize disruption to users and developers when business needs change in the future. You want to follow Google-recommended practices. Now should you design the Organization structure?",
        "question-zh": "公司有 Workspace 與 GCP Org，有些開發者在 Org 外建專案。你要設計 Org 結構，讓開發者能建專案但不能改 production，並集中管理政策，production 可更嚴格。要最小化未來變動影響並遵循 Google 建議，該怎麼設計？",
        "options": {
            "A": "1. Create a second Google Workspace account and Organization. 2. Grant all developers the Project Creator IAM role on the new Organization. 3. Move the developer projects into the new Organization. 4. Set the policies for all projects on both Organizations. 5. Additionally, set the production policies on the original Organization.",
            "B": "1. Create a folder under the Organization resource named ג€Production.ג€ 2. Grant all developers the Project Creator IAM role on the new Organization. 3. Move the developer projects into the new Organization. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the ג€Productionג€ folder.",
            "C": "1. Create folders under the Organization resource named ג€Developmentג€ and ג€Production.ג€ 2. Grant all developers the Project Creator IAM role on the ג€Developmentג€ folder. 3. Move the developer projects into the ג€Developmentג€ folder. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the ג€Productionג€ folder.",
            "D": "1. Designate the Organization for production projects only. 2. Ensure that developers do not have the Project Creator IAM role on the Organization. 3. Create development projects outside of the Organization using the developer Google Workspace accounts. 4. Set the policies for all projects on the Organization. 5. Additionally, set the production policies on the individual production projects."
        },
        "options-zh": {
            "A": "1. 建第二個 Workspace 與 Org，給開發者 Project Creator 角色，移開發專案進新 Org，兩邊都設政策，production 政策設在原 Org。",
            "B": "1. Org 下建 Production 資料夾，給開發者 Project Creator 角色，移開發專案進新 Org，Org 設政策，Production 資料夾設 production 政策。",
            "C": "1. Org 下建 Development 與 Production 資料夾，給開發者 Project Creator 角色只在 Development，移開發專案進 Development，Org 設政策，Production 資料夾設 production 政策。",
            "D": "1. Org 只給 production 專案，開發者不能有 Project Creator 角色，開發專案建在 Org 外，Org 設政策，production 個別設 production 政策。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#172",
        "link": "https://www.examtopics.com/discussions/google/view/68683-exam-professional-cloud-architect-topic-1-question-172/",
        "question": "Your company has an application running on Compute Engine that allows users to play their favorite music. There are a fixed number of instances. Files are stored in Cloud Storage, and data is streamed directly to users. Users are reporting that they sometimes need to attempt to play popular songs multiple times before they are successful. You need to improve the performance of the application. What should you do?",
        "question-zh": "公司有 Compute Engine 應用讓用戶聽音樂，檔案存 Cloud Storage，直接串流。用戶反映熱門歌常要重試才能播成功，要怎麼改善效能？",
        "options": {
            "A": "1. Mount the Cloud Storage bucket using gcsfuse on all backend Compute Engine instances. 2. Serve music files directly from the backend Compute Engine instance.",
            "B": "1. Create a Cloud Filestore NFS volume and attach it to the backend Compute Engine instances. 2. Download popular songs in Cloud Filestore. 3. Serve music files directly from the backend Compute Engine instance.",
            "C": "1. Copy popular songs into CloudSQL as a blob. 2. Update application code to retrieve data from CloudSQL when Cloud Storage is overloaded.",
            "D": "1. Create a managed instance group with Compute Engine instances. 2. Create a global load balancer and configure it with two backends: ג—‹ Managed instance group ג—‹ Cloud Storage bucket 3. Enable Cloud CDN on the bucket backend."
        },
        "options-zh": {
            "A": "gcsfuse 掛載 Cloud Storage，直接從 Compute Engine 供應音樂。",
            "B": "Cloud Filestore NFS 掛載到 Compute Engine，熱門歌下載到 Filestore，直接供應。",
            "C": "熱門歌存 CloudSQL blob，Cloud Storage 超載時從 CloudSQL 取。",
            "D": "建受管群組與全域負載平衡，兩後端：受管群組與 Cloud Storage，Cloud CDN 啟用。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#173",
        "link": "https://www.examtopics.com/discussions/google/view/68684-exam-professional-cloud-architect-topic-1-question-173/",
        "question": "The operations team in your company wants to save Cloud VPN log events for one year. You need to configure the cloud infrastructure to save the logs. What should you do?",
        "question-zh": "運維團隊要保存 Cloud VPN 日誌一年，該怎麼設置？",
        "options": {
            "A": "Set up a filter in Cloud Logging and a Cloud Storage bucket as an export target for the logs you want to save.",
            "B": "Enable the Compute Engine API, and then enable logging on the firewall rules that match the traffic you want to save.",
            "C": "Set up a Cloud Logging Dashboard titled Cloud VPN Logs, and then add a chart that queries for the VPN metrics over a one-year time period.",
            "D": "Set up a filter in Cloud Logging and a topic in Pub/Sub to publish the logs."
        },
        "options-zh": {
            "A": "Cloud Logging 設 filter，日誌匯出到 Cloud Storage。",
            "B": "啟用 Compute Engine API，防火牆規則開日誌。",
            "C": "Cloud Logging 建 VPN 日誌儀表板，查詢一年內指標。",
            "D": "Cloud Logging 設 filter，日誌發佈到 Pub/Sub。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#174",
        "link": "https://www.examtopics.com/discussions/google/view/68685-exam-professional-cloud-architect-topic-1-question-174/",
        "question": "You are working with a data warehousing team that performs data analysis. The team needs to process data from external partners, but the data contains personally identifiable information (PII). You need to process and store the data without storing any of the PIIE data. What should you do?",
        "question-zh": "你協助數據倉儲團隊分析資料，外部夥伴資料含個資，需處理但不能存個資。怎麼做？",
        "options": {
            "A": "Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery.",
            "B": "Create a Dataflow pipeline to retrieve the data from the external sources. As part of the pipeline, store all non-PII data in BigQuery and store all PII data in a Cloud Storage bucket that has a retention policy set.",
            "C": "Ask the external partners to upload all data on Cloud Storage. Configure Bucket Lock for the bucket. Create a Dataflow pipeline to read the data from the bucket. As part of the pipeline, use the Cloud Data Loss Prevention (Cloud DLP) API to remove any PII data. Store the result in BigQuery.",
            "D": "Ask the external partners to import all data in your BigQuery dataset. Create a dataflow pipeline to copy the data into a new table. As part of the Dataflow bucket, skip all data in columns that have PII data"
        },
        "options-zh": {
            "A": "Dataflow 取資料，Cloud DLP API 移除個資，結果存 BigQuery。",
            "B": "Dataflow 取資料，非個資存 BigQuery，個資存有保存政策的 Cloud Storage。",
            "C": "夥伴上傳到 Cloud Storage，設 Bucket Lock，Dataflow 讀取並用 DLP API 移除個資，結果存 BigQuery。",
            "D": "夥伴匯入 BigQuery，Dataflow 複製到新表，略過個資欄。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#175",
        "link": "https://www.examtopics.com/discussions/google/view/68686-exam-professional-cloud-architect-topic-1-question-175/",
        "question": "You want to allow your operations team to store logs from all the production projects in your Organization, without including logs from other projects. All of the production projects are contained in a folder. You want to ensure that all logs for existing and new production projects are captured automatically. What should you do?",
        "question-zh": "你要讓運維團隊儲存 Org 下所有 production 專案日誌，不含其他專案。production 都在同一資料夾，要自動收集所有 production 專案日誌。怎麼做？",
        "options": {
            "A": "Create an aggregated export on the Production folder. Set the log sink to be a Cloud Storage bucket in an operations project.",
            "B": "Create an aggregated export on the Organization resource. Set the log sink to be a Cloud Storage bucket in an operations project.",
            "C": "Create log exports in the production projects. Set the log sinks to be a Cloud Storage bucket in an operations project.",
            "D": "Create log exports in the production projects. Set the log sinks to be BigQuery datasets in the production projects, and grant IAM access to the operations team to run queries on the datasets."
        },
        "options-zh": {
            "A": "Production 資料夾設彙總匯出，sink 指到運維專案的 Cloud Storage。",
            "B": "Org 設彙總匯出，sink 指到運維專案的 Cloud Storage。",
            "C": "production 專案各自設匯出，sink 指到運維專案的 Cloud Storage。",
            "D": "production 專案各自設匯出，sink 指到 production 的 BigQuery，運維團隊有查詢權。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#176",
        "link": "https://www.examtopics.com/discussions/google/view/68688-exam-professional-cloud-architect-topic-1-question-176/",
        "question": "Your company has an application running on multiple instances of Compute Engine. It generates 1 TB per day of logs. For compliance reasons, the logs need to be kept for at least two years. The logs need to be available for active query for 30 days. After that, they just need to be retained for audit purposes. You want to implement a storage solution that is compliant, minimizes costs, and follows Google-recommended practices. What should you do?",
        "question-zh": "公司有多台 Compute Engine 跑應用，每天產生 1TB 日誌，合規需保存兩年，30 天內要能查詢，之後僅供稽核。怎麼設計最省錢又合規？",
        "options": {
            "A": "1. Install a Cloud Logging agent on all instances. 2. Create a sink to export logs into a regional Cloud Storage bucket. 3. Create an Object Lifecycle rule to move files into a Coldline Cloud Storage bucket after one month. 4. Configure a retention policy at the bucket level using bucket lock.",
            "B": "1. Write a daily cron job, running on all instances, that uploads logs into a Cloud Storage bucket. 2. Create a sink to export logs into a regional Cloud Storage bucket. 3. Create an Object Lifecycle rule to move files into a Coldline Cloud Storage bucket after one month.",
            "C": "1. Install a Cloud Logging agent on all instances. 2. Create a sink to export logs into a partitioned BigQuery table. 3. Set a time_partitioning_expiration of 30 days.",
            "D": "1. Create a daily cron job, running on all instances, that uploads logs into a partitioned BigQuery table. 2. Set a time_partitioning_expiration of 30 days."
        },
        "options-zh": {
            "A": "所有機器裝 Cloud Logging agent，sink 匯出日誌到區域 Cloud Storage，1 個月後用生命週期規則移到 Coldline，設 bucket lock 保存。",
            "B": "每天 cron job 上傳日誌到 Cloud Storage，sink 匯出日誌到區域 Cloud Storage，1 個月後移到 Coldline。",
            "C": "所有機器裝 Cloud Logging agent，sink 匯出日誌到分區 BigQuery，設 30 天過期。",
            "D": "每天 cron job 上傳日誌到分區 BigQuery，設 30 天過期。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#177",
        "link": "https://www.examtopics.com/discussions/google/view/68690-exam-professional-cloud-architect-topic-1-question-177/",
        "question": "Your company has just recently activated Cloud Identity to manage users. The Google Cloud Organization has been configured as well. The security team needs to secure projects that will be part of the Organization. They want to prohibit IAM users outside the domain from gaining permissions from now on. What should they do?",
        "question-zh": "公司剛啟用 Cloud Identity 管理用戶，GCP Org 也設好了。資安團隊要防止外部網域 IAM 用戶取得權限，該怎麼做？",
        "options": {
            "A": "Configure an organization policy to restrict identities by domain.",
            "B": "Configure an organization policy to block creation of service accounts.",
            "C": "Configure Cloud Scheduler to trigger a Cloud Function every hour that removes all users that don't belong to the Cloud Identity domain from all projects.",
            "D": "Create a technical user (e.g., crawler@yourdomain.com), and give it the project owner role at root organization level. Write a bash script that: ג€¢ Lists all the IAM rules of all projects within the organization. ג€¢ Deletes all users that do not belong to the company domain. Create a Compute Engine instance in a project within the Organization and configure gcloud to be executed with technical user credentials. Configure a cron job that executes the bash script every hour."
        },
        "options-zh": {
            "A": "Org policy 限定只能本網域身分。",
            "B": "Org policy 禁止建立 service account。",
            "C": "Cloud Scheduler 每小時觸發 Cloud Function，移除非本網域用戶。",
            "D": "建技術用戶給 org root owner，寫 bash 列出所有 IAM 規則並刪除非本網域用戶，Compute Engine 跑 cron job。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#178",
        "link": "https://www.examtopics.com/discussions/google/view/68691-exam-professional-cloud-architect-topic-1-question-178/",
        "question": "Your company has an application running on Google Cloud that is collecting data from thousands of physical devices that are globally distributed. Data is published to Pub/Sub and streamed in real time into an SSD Cloud Bigtable cluster via a Dataflow pipeline. The operations team informs you that your Cloud Bigtable cluster has a hotspot, and queries are taking longer than expected. You need to resolve the problem and prevent it from happening in the future. What should you do?",
        "question-zh": "公司有全球裝置資料經 Pub/Sub、Dataflow 寫入 SSD Bigtable，運維說有 hotspot 查詢變慢，要怎麼解決並防止再發生？",
        "options": {
            "A": "Advise your clients to use HBase APIs instead of NodeJS APIs.",
            "B": "Delete records older than 30 days.",
            "C": "Review your RowKey strategy and ensure that keys are evenly spread across the alphabet.",
            "D": "Double the number of nodes you currently have."
        },
        "options-zh": {
            "A": "建議用戶改用 HBase API。",
            "B": "刪除 30 天前資料。",
            "C": "檢查 RowKey 策略，確保分布均勻。",
            "D": "節點數加倍。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#179",
        "link": "https://www.examtopics.com/discussions/google/view/68692-exam-professional-cloud-architect-topic-1-question-179/",
        "question": "Your company has a Google Cloud project that uses BigQuery for data warehousing. There are some tables that contain personally identifiable information (PII).\n\nOnly the compliance team may access the PII. The other information in the tables must be available to the data science team. You want to minimize cost and the time it takes to assign appropriate access to the tables. What should you do?",
        "question-zh": "公司有 GCP 專案用 BigQuery 做數據倉儲，有些表含個資，僅合規團隊能看，其他資料要給 data science team。怎麼做最省時省錢？",
        "options": {
            "A": "1. From the dataset where you have the source data, create views of tables that you want to share, excluding PII. 2. Assign an appropriate project-level IAM role to the members of the data science team. 3. Assign access controls to the dataset that contains the view.",
            "B": "1. From the dataset where you have the source data, create materialized views of tables that you want to share, excluding PII. 2. Assign an appropriate project-level IAM role to the members of the data science team. 3. Assign access controls to the dataset that contains the view.",
            "C": "1. Create a dataset for the data science team. 2. Create views of tables that you want to share, excluding PII. 3. Assign an appropriate project-level IAM role to the members of the data science team. 4. Assign access controls to the dataset that contains the view. 5. Authorize the view to access the source dataset.",
            "D": "1. Create a dataset for the data science team. 2. Create materialized views of tables that you want to share, excluding PII. 3. Assign an appropriate project-level IAM role to the members of the data science team. 4. Assign access controls to the dataset that contains the view. 5. Authorize the view to access the source dataset."
        },
        "options-zh": {
            "A": "原始資料集建 view 排除個資，給 data science team 專案層 IAM，view 資料集設權限。",
            "B": "原始資料集建 materialized view 排除個資，給 data science team 專案層 IAM，view 資料集設權限。",
            "C": "為 data science team 建新資料集，建 view 排除個資，給專案層 IAM，view 資料集設權限並授權存取原始資料集。",
            "D": "為 data science team 建新資料集，建 materialized view 排除個資，給專案層 IAM，view 資料集設權限並授權存取原始資料集。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#180",
        "link": "https://www.examtopics.com/discussions/google/view/68693-exam-professional-cloud-architect-topic-1-question-180/",
        "question": "Your operations team currently stores 10 TB of data in an object storage service from a third-party provider. They want to move this data to a Cloud Storage bucket as quickly as possible, following Google-recommended practices. They want to minimize the cost of this data migration. Which approach should they use?",
        "question-zh": "運維團隊有 10TB 資料在第三方物件儲存，要盡快搬到 Cloud Storage 並省錢，怎麼做最符合 Google 建議？",
        "options": {
            "A": "Use the gsutil mv command to move the data.",
            "B": "Use the Storage Transfer Service to move the data.",
            "C": "Download the data to a Transfer Appliance, and ship it to Google.",
            "D": "Download the data to the on-premises data center, and upload it to the Cloud Storage bucket."
        },
        "options-zh": {
            "A": "用 gsutil mv 搬資料。",
            "B": "用 Storage Transfer Service 搬資料。",
            "C": "下載到 Transfer Appliance 再寄給 Google。",
            "D": "下載到本地再上傳 Cloud Storage。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#181",
        "link": "https://www.examtopics.com/discussions/google/view/80034-exam-professional-cloud-architect-topic-1-question-181/",
        "question": "You have a Compute Engine managed instance group that adds and removes Compute Engine instances from the group in response to the load on your application. The instances have a shutdown script that removes REDIS database entries associated with the instance. You see that many database entries have not been removed, and you suspect that the shutdown script is the problem. You need to ensure that the commands in the shutdown script are run reliably every time an instance is shut down. You create a Cloud Function to remove the database entries. What should you do next?",
        "question-zh": "你有 Compute Engine 受管群組，依負載增減 VM，VM 關機時執行腳本刪除 REDIS 資料，但常有資料沒刪掉，懷疑腳本問題。你已建 Cloud Function 處理刪除，下一步怎麼做？",
        "options": {
            "A": "Modify the shutdown script to wait for 30 seconds before triggering the Cloud Function.",
            "B": "Do not use the Cloud Function. Modify the shutdown script to restart if it has not completed in 30 seconds.",
            "C": "Set up a Cloud Monitoring sink that triggers the Cloud Function after an instance removal log message arrives in Cloud Logging.",
            "D": "Modify the shutdown script to wait for 30 seconds and then publish a message to a Pub/Sub queue."
        },
        "options-zh": {
            "A": "腳本等 30 秒再觸發 Cloud Function。",
            "B": "不用 Cloud Function，腳本 30 秒沒完成就重跑。",
            "C": "Cloud Monitoring sink 收到移除日誌時觸發 Cloud Function。",
            "D": "腳本等 30 秒再發訊息到 Pub/Sub。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#182",
        "link": "https://www.examtopics.com/discussions/google/view/80035-exam-professional-cloud-architect-topic-1-question-182/",
        "question": "You are managing several projects on Google Cloud and need to interact on a daily basis with BigQuery, Bigtable, and Kubernetes Engine using the gcloud CL tool. You are travelling a lot and work on different workstations during the week. You want to avoid having to manage the gcloud CLI manually. What should you do?",
        "question-zh": "你管理多個 GCP 專案，每天用 gcloud CLI 操作 BigQuery、Bigtable、Kubernetes Engine，常換電腦。怎麼避免每台都要裝 gcloud CLI？",
        "options": {
            "A": "Use Google Cloud Shell in the Google Cloud Console to interact with Google Cloud.",
            "B": "Create a Compute Engine instance and install gcloud on the instance. Connect to this instance via SSH to always use the same gcloud installation when interacting with Google Cloud.",
            "C": "Install gcloud on all of your workstations. Run the command gcloud components auto-update on each workstation",
            "D": "Use a package manager to install gcloud on your workstations instead of installing it manually."
        },
        "options-zh": {
            "A": "用 Cloud Shell 操作 GCP。",
            "B": "建 Compute Engine 裝 gcloud，SSH 連線統一用。",
            "C": "每台都裝 gcloud 並自動更新。",
            "D": "用套件管理工具安裝 gcloud。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#183",
        "link": "https://www.examtopics.com/discussions/google/view/80075-exam-professional-cloud-architect-topic-1-question-183/",
        "question": "Your company recently acquired a company that has infrastructure in Google Cloud. Each company has its own Google Cloud organization. Each company is using a Shared Virtual Private Cloud (VPC) to provide network connectivity for its applications. Some of the subnets used by both companies overlap. In order for both businesses to integrate, the applications need to have private network connectivity. These applications are not on overlapping subnets. You want to provide connectivity with minimal re-engineering. What should you do?",
        "question-zh": "公司併購另一家也用 GCP 的公司，雙方都有 Shared VPC，有些子網重疊但應用沒重疊，要讓應用能私網互通且改動最少，怎麼做？",
        "options": {
            "A": "Set up VPC peering and peer each Shared VPC together.",
            "B": "Migrate the projects from the acquired company into your company's Google Cloud organization. Re-launch the instances in your companies Shared VPC.",
            "C": "Set up a Cloud VPN gateway in each Shared VPC and peer Cloud VPNs.",
            "D": "Configure SSH port forwarding on each application to provide connectivity between applications in the different Shared VPCs."
        },
        "options-zh": {
            "A": "設 VPC peering 讓兩邊 Shared VPC 互通。",
            "B": "併購專案搬進本公司 Org，重建 VM 用本公司 Shared VPC。",
            "C": "各自 Shared VPC 設 Cloud VPN 並互連。",
            "D": "每個應用設 SSH port forwarding 互通。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#184",
        "link": "https://www.examtopics.com/discussions/google/view/79697-exam-professional-cloud-architect-topic-1-question-184/",
        "question": "You are managing several internal applications that are deployed on Compute Engine. Business users inform you that an application has become very slow over the past few days. You want to find the underlying cause in order to solve the problem. What should you do first?",
        "question-zh": "你管理多個 Compute Engine 內部應用，最近有一個變很慢，商業用戶反映。你要先怎麼查原因？",
        "options": {
            "A": "Inspect the logs and metrics from the instances in Cloud Logging and Cloud Monitoring.",
            "B": "Change the Compute Engine Instances behind the application to a machine type with more CPU and memory.",
            "C": "Restore a backup of the application database from a time before the application became slow.",
            "D": "Deploy the applications on a managed instance group with autoscaling enabled. Add a load balancer in front of the managed instance group, and have the users connect to the IP of the load balancer."
        },
        "options-zh": {
            "A": "查 Cloud Logging 與 Monitoring 日誌與指標。",
            "B": "換更大機型。",
            "C": "還原變慢前的資料庫備份。",
            "D": "用受管群組與自動擴展，前面加負載平衡。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#185",
        "link": "https://www.examtopics.com/discussions/google/view/79702-exam-professional-cloud-architect-topic-1-question-185/",
        "question": "Your company has an application running as a Deployment in a Google Kubernetes Engine (GKE) cluster. When releasing new versions of the application via a rolling deployment, the team has been causing outages. The root cause of the outages is misconfigurations with parameters that are only used in production. You want to put preventive measures for this in the platform to prevent outages. What should you do?",
        "question-zh": "公司有 GKE 應用，每次 rolling 部署新版常出包，都是 production 參數設錯。要怎麼預防？",
        "options": {
            "A": "Configure liveness and readiness probes in the Pod specification.",
            "B": "Configure health checks on the managed instance group.",
            "C": "Create a Scheduled Task to check whether the application is available.",
            "D": "Configure an uptime alert in Cloud Monitoring."
        },
        "options-zh": {
            "A": "Pod 設 liveness/readiness probe。",
            "B": "受管群組設健康檢查。",
            "C": "排程任務檢查應用可用性。",
            "D": "Cloud Monitoring 設 uptime alert。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#186",
        "link": "https://www.examtopics.com/discussions/google/view/79736-exam-professional-cloud-architect-topic-1-question-186/",
        "question": "Your company uses Google Kubernetes Engine (GKE) as a platform for all workloads. Your company has a single large GKE cluster that contains batch, stateful, and stateless workloads. The GKE cluster is configured with a single node pool with 200 nodes. Your company needs to reduce the cost of this cluster but does not want to compromise availability. What should you do?",
        "question-zh": "公司所有工作負載都跑 GKE，單一大叢集 200 節點，含 batch/stateful/stateless。要降成本又不影響可用性，怎麼做？",
        "options": {
            "A": "Create a second GKE cluster for the batch workloads only. Allocate the 200 original nodes across both clusters.",
            "B": "Configure CPU and memory limits on the namespaces in the cluster. Configure all Pods to have a CPU and memory limits.",
            "C": "Configure a HorizontalPodAutoscaler for all stateless workloads and for all compatible stateful workloads. Configure the cluster to use node auto scaling.",
            "D": "Change the node pool to use preemptible VMs."
        },
        "options-zh": {
            "A": "另建 GKE 叢集專跑 batch，200 節點分兩叢集。",
            "B": "namespace 設 CPU/記憶體上限，Pod 也設。",
            "C": "stateless/stateful 都設 HPA，叢集設節點自動擴縮。",
            "D": "改用 preemptible VM。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#1",
        "no": "#187",
        "link": "https://www.examtopics.com/discussions/google/view/80112-exam-professional-cloud-architect-topic-1-question-187/",
        "question": "Your company has a Google Cloud project that uses BigQuery for data warehousing on a pay-per-use basis. You want to monitor queries in real time to discover the most costly queries and which users spend the most. What should you do?",
        "question-zh": "公司用 BigQuery 做數據倉儲，按用量計費。要即時監控最貴查詢與花最多的用戶，怎麼做？",
        "options": {
            "A": "1. In the BigQuery dataset that contains all the tables to be queried, add a label for each user that can launch a query. 2. Open the Billing page of the project. 3. Select Reports. 4. Select BigQuery as the product and filter by the user you want to check.",
            "B": "1. Create a Cloud Logging sink to export BigQuery data access logs to BigQuery. 2. Perform a BigQuery query on the generated table to extract the information you need.",
            "C": "1. Create a Cloud Logging sink to export BigQuery data access logs to Cloud Storage. 2. Develop a Dataflow pipeline to compute the cost of queries split by users.",
            "D": "1. Activate billing export into BigQuery. 2. Perform a BigQuery query on the billing table to extract the information you need."
        },
        "options-zh": {
            "A": "BigQuery 資料集每個用戶加 label，Billing 頁查報表。",
            "B": "Cloud Logging sink 匯出 BigQuery 存取日誌到 BigQuery，再查詢。",
            "C": "Cloud Logging sink 匯出日誌到 Cloud Storage，Dataflow 算每人花費。",
            "D": "啟用帳單匯出到 BigQuery，再查詢。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#188",
        "link": "https://www.examtopics.com/discussions/google/view/80000-exam-professional-cloud-architect-topic-1-question-188/",
        "question": "Your company and one of its partners each have a Google Cloud project in separate organizations. Your company's project (prj-a) runs in Virtual Private Cloud(vpc-a). The partner's project (prj-b) runs in vpc-b. There are two instances running on vpc-a and one instance running on vpc-b. Subnets defined in both VPCs are not overlapping. You need to ensure that all instances communicate with each other via internal IPs, minimizing latency and maximizing throughput. What should you do?",
        "question-zh": "你公司和合作夥伴各有 GCP 專案，分別在 vpc-a/vpc-b，子網不重疊，要讓所有 VM 內部 IP 互通且低延遲高吞吐，怎麼做？",
        "options": {
            "A": "Set up a network peering between vpc-a and vpc-b.",
            "B": "Set up a VPN between vpc-a and vpc-b using Cloud VPN.",
            "C": "Configure IAP TCP forwarding on the instance in vpc-b, and then launch the following gcloud command from one of the instances in vpc-a gcloud: gcloud compute start-iap-tunnel INSTANCE_NAME_IN_VPC_8 22 \\ --local-host-port=localhost:22",
            "D": "1. Create an additional instance in vpc-a. 2. Create an additional instance in vpc-b. 3. Install OpenVPN in newly created instances. 4. Configure a VPN tunnel between vpc-a and vpc-b with the help of OpenVPN."
        },
        "options-zh": {
            "A": "設 vpc-a/vpc-b peering。",
            "B": "用 Cloud VPN 連 vpc-a/vpc-b。",
            "C": "vpc-b 設 IAP TCP 轉發，vpc-a 執行 gcloud 指令。",
            "D": "各加一台 VM 裝 OpenVPN，設 VPN 互通。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#189",
        "link": "https://www.examtopics.com/discussions/google/view/80304-exam-professional-cloud-architect-topic-1-question-189/",
        "question": "You want to store critical business information in Cloud Storage buckets. The information is regularly changed, but previous versions need to be referenced on a regular basis. You want to ensure that there is a record of all changes to any information in these buckets. You want to ensure that accidental edits or deletions can be easily rolled back. Which feature should you enable?",
        "question-zh": "你要把重要商業資訊存 Cloud Storage，資料常變但要能查舊版，也要能輕鬆還原誤刪誤改，該開啟哪個功能？",
        "options": {
            "A": "Bucket Lock",
            "B": "Object Versioning",
            "C": "Object change notification",
            "D": "Object Lifecycle Management"
        },
        "options-zh": {
            "A": "Bucket Lock（桶鎖）。",
            "B": "Object Versioning（物件版本）。",
            "C": "物件變更通知。",
            "D": "物件生命週期管理。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#190",
        "link": "https://www.examtopics.com/discussions/google/view/80040-exam-professional-cloud-architect-topic-1-question-190/",
        "question": "You have a Compute Engine application that you want to autoscale when total memory usage exceeds 80%. You have installed the Cloud Monitoring agent and configured the autoscaling policy as follows:\n\n✑ Metric identifier: agent.googleapis.com/memory/percent_used\n\n✑ Filter: metric.label.state = 'used'\n\n✑ Target utilization level: 80\n\n✑ Target type: GAUGE\n\nYou observe that the application does not scale under high load. You want to resolve this. What should you do?",
        "question-zh": "你有 Compute Engine 應用，想在記憶體用量超過 80% 時自動擴展，已裝 Monitoring agent 並設好 autoscale，但高負載時沒擴展，要怎麼解決？",
        "options": {
            "A": "Change the Target type to DELTA_PER_MINUTE.",
            "B": "Change the Metric identifier to agent.googleapis.com/memory/bytes_used.",
            "C": "Change the filter to metric.label.state = 'used' AND metric.label.state = 'buffered' AND metric.label.state = 'cached' AND metric.label.state = 'slab'.",
            "D": "Change the filter to metric.label.state = 'free' and the Target utilization to 20."
        },
        "options-zh": {
            "A": "Target type 改 DELTA_PER_MINUTE。",
            "B": "Metric identifier 改 agent.googleapis.com/memory/bytes_used。",
            "C": "filter 改同時含 used/buffered/cached/slab。",
            "D": "filter 改 free，目標利用率設 20。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#191",
        "link": "https://www.examtopics.com/discussions/google/view/80419-exam-professional-cloud-architect-topic-1-question-191/",
        "question": "You are deploying an application to Google Cloud. The application is part of a system. The application in Google Cloud must communicate over a private network with applications in a non-Google Cloud environment. The expected average throughput is 200 kbps. The business requires:\n\n✑ as close to 100% system availability as possible\n\n✑ cost optimization\n\nYou need to design the connectivity between the locations to meet the business requirements. What should you provision?",
        "question-zh": "你要在 GCP 部署應用，需與非 GCP 應用私網通訊，平均 200kbps，要求接近 100% 可用性且要省錢，該怎麼設計連線？",
        "options": {
            "A": "An HA Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway",
            "B": "Two Classic Cloud VPN gateways connected to two on-premises VPN gateways Configure each Classic Cloud VPN gateway to have two tunnels, each connected to different on-premises VPN gateways",
            "C": "Two HA Cloud VPN gateways connected to two on-premises VPN gateways Configure each HA Cloud VPN gateway to have two tunnels, each connected to different on-premises VPN gateways",
            "D": "A single Cloud VPN gateway connected to an on-premises VPN gateway"
        },
        "options-zh": {
            "A": "HA Cloud VPN + 兩條通道連 on-prem VPN。",
            "B": "兩台 Classic Cloud VPN 各連兩台 on-prem VPN。",
            "C": "兩台 HA Cloud VPN 各連兩台 on-prem VPN。",
            "D": "單一 Cloud VPN 連 on-prem VPN。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#192",
        "link": "https://www.examtopics.com/discussions/google/view/121240-exam-professional-cloud-architect-topic-1-question-192/",
        "question": "Your company has an application running on App Engine that allows users to upload music files and share them with other people. You want to allow users to upload files directly into Cloud Storage from their browser session. The payload should not be passed through the backend. What should you do?",
        "question-zh": "公司有 App Engine 應用讓用戶上傳音樂並分享，要讓用戶直接從瀏覽器上傳到 Cloud Storage，不經後端，怎麼做？",
        "options": {
            "A": "1. Set a CORS configuration in the target Cloud Storage bucket where the base URL of the App Engine application is an allowed origin.2. Use the Cloud Storage Signed URL feature to generate a POST URL.",
            "B": "1. Set a CORS configuration in the target Cloud Storage bucket where the base URL of the App Engine application is an allowed origin.2. Assign the Cloud Storage WRITER role to users who upload files.",
            "C": "1. Use the Cloud Storage Signed URL feature to generate a POST URL.2. Use App Engine default credentials to sign requests against Cloud Storage.",
            "D": "1. Assign the Cloud Storage WRITER role to users who upload files.2. Use App Engine default credentials to sign requests against Cloud Storage."
        },
        "options-zh": {
            "A": "Cloud Storage 設 CORS，允許 App Engine 網域，並用 Signed URL 產生 POST。",
            "B": "Cloud Storage 設 CORS 並給用戶 WRITER 角色。",
            "C": "用 Signed URL 並用 App Engine 預設憑證簽名。",
            "D": "給用戶 WRITER 角色並用 App Engine 預設憑證簽名。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#193",
        "link": "https://www.examtopics.com/discussions/google/view/121322-exam-professional-cloud-architect-topic-1-question-193/",
        "question": "You are configuring the cloud network architecture for a newly created project in Google Cloud that will host applications in Compute Engine. Compute Engine virtual machine instances will be created in two different subnets (sub-a and sub-b) within a single region:\n\n- Instances in sub-a will have public IP addresses.\n- Instances in sub-b will have only private IP addresses.\n\nTo download updated packages, instances must connect to a public repository outside the boundaries of Google Cloud. You need to allow sub-b to access the external repository. What should you do?",
        "question-zh": "你在 GCP 新專案設網路架構，Compute Engine VM 分 sub-a（有公網 IP）和 sub-b（僅私網 IP），sub-b 要能下載外部套件，怎麼做？",
        "options": {
            "A": "Enable Private Google Access on sub-b.",
            "B": "Configure Cloud NAT and select sub-b in the NAT mapping section.",
            "C": "Configure a bastion host instance in sub-a to connect to instances in sub-b.",
            "D": "Enable Identity-Aware Proxy for TCP forwarding for instances in sub-b."
        },
        "options-zh": {
            "A": "sub-b 啟用 Private Google Access。",
            "B": "設 Cloud NAT 並選 sub-b。",
            "C": "sub-a 設 bastion host 連 sub-b。",
            "D": "sub-b 啟用 IAP TCP 轉發。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#1",
        "no": "#194",
        "link": "https://www.examtopics.com/discussions/google/view/121314-exam-professional-cloud-architect-topic-1-question-194/",
        "question": "Your company is planning to migrate their Windows Server 2022 from their on-premises data center to Google Cloud. You need to bring the licenses that are currently in use in on-premises virtual machines into the target cloud environment. What should you do?",
        "question-zh": "公司要把 Windows Server 2022 從本地搬到 GCP，要把現有授權帶進雲端，怎麼做？",
        "options": {
            "A": "1. Create an image of the on-premises virtual machines and upload into Cloud Storage.2. Import the image as a virtual disk on Compute Engine.",
            "B": "1. Create standard instances on Compute Engine.2. Select as the OS the same Microsoft Windows version that is currently in use in the on-premises environment.",
            "C": "1. Create an image of the on-premises virtual machine.2. Import the image as a virtual disk on Compute Engine.3. Create a standard instance on Compute Engine, selecting as the OS the same Microsoft Windows version that is currently in use in the on-premises environment.4. Attach a data disk that includes data that matches the created image.",
            "D": "1. Create an image of the on-premises virtual machines.2. Import the image as a virtual disk on Compute Engine using --os=windows-2022-dc-v.3. Create a sole-tenancy instance on Compute Engine that uses the imported disk as a boot disk."
        },
        "options-zh": {
            "A": "本地 VM 製作映像檔，上傳 Cloud Storage，匯入 Compute Engine。",
            "B": "Compute Engine 建標準 VM，選同版 Windows。",
            "C": "本地 VM 製作映像檔，匯入 Compute Engine，建標準 VM 並掛資料碟。",
            "D": "本地 VM 製作映像檔，--os=windows-2022-dc-v 匯入，建專屬租用 VM 當開機碟。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#195",
        "link": "https://www.examtopics.com/discussions/google/view/121313-exam-professional-cloud-architect-topic-1-question-195/",
        "question": "You are deploying an application to Google Cloud. The application is part of a system. The application in Google Cloud must communicate over a private network with applications in a non-Google Cloud environment. The expected average throughput is 200 kbps. The business requires:\n\n- 99.99% system availability\n- cost optimization\n\nYou need to design the connectivity between the locations to meet the business requirements. What should you provision?",
        "question-zh": "你要在 GCP 部署應用，需與非 GCP 應用私網通訊，平均 200kbps，要求 99.99% 可用性且要省錢，該怎麼設計連線？",
        "options": {
            "A": "An HA Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway.",
            "B": "A Classic Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway.",
            "C": "Two HA Cloud VPN gateways connected to two on-premises VPN gateways. Configure each HA Cloud VPN gateway to have two tunnels, each connected to different on-premises VPN gateways.",
            "D": "A Classic Cloud VPN gateway connected with one tunnel to an on-premises VPN gateway."
        },
        "options-zh": {
            "A": "HA Cloud VPN + 兩條通道連 on-prem VPN。",
            "B": "Classic Cloud VPN + 兩條通道連 on-prem VPN。",
            "C": "兩台 HA Cloud VPN 各連兩台 on-prem VPN。",
            "D": "Classic Cloud VPN + 一條通道連 on-prem VPN。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#196",
        "link": "https://www.examtopics.com/discussions/google/view/121324-exam-professional-cloud-architect-topic-1-question-196/",
        "question": "Your company wants to migrate their 10-TB on-premises database export into Cloud Storage. You want to minimize the time it takes to complete this activity and the overall cost. The bandwidth between the on-premises environment and Google Cloud is 1 Gbps. You want to follow Google-recommended practices. What should you do?",
        "question-zh": "公司要把 10TB 本地資料庫匯出搬到 Cloud Storage，要省時省錢，頻寬 1Gbps，怎麼做最符合 Google 建議？",
        "options": {
            "A": "Develop a Dataflow job to read data directly from the database and write it into Cloud Storage.",
            "B": "Use the Data Transfer appliance to perform an offline migration.",
            "C": "Use a commercial partner ETL solution to extract the data from the on-premises database and upload it into Cloud Storage.",
            "D": "Upload the data with gcloud storage cp."
        },
        "options-zh": {
            "A": "Dataflow 直接讀資料庫寫 Cloud Storage。",
            "B": "用 Data Transfer appliance 離線搬遷。",
            "C": "用商業 ETL 工具抽取上傳。",
            "D": "用 gcloud storage cp 上傳。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#197",
        "link": "https://www.examtopics.com/discussions/google/view/138677-exam-professional-cloud-architect-topic-1-question-197/",
        "question": "You are working at a financial institution that stores mortgage loan approval documents on Cloud Storage. Any change to these approval documents must be uploaded as a separate approval file. You need to ensure that these documents cannot be deleted or overwritten for the next 5 years. What should you do?",
        "question-zh": "你在金融機構，房貸核准文件存 Cloud Storage，任何異動都要另存新檔，且 5 年內不能刪改，怎麼做？",
        "options": {
            "A": "Create a retention policy on the bucket for the duration of 5 years. Create a lock on the retention policy.",
            "B": "Create a retention policy organizational constraint constraints/storage.retentionPolicySeconds at the organization level. Set the duration to 5 years.",
            "C": "Use a customer-managed key for the encryption of the bucket. Rotate the key after 5 years.",
            "D": "Create a retention policy organizational constraint constraints/storage.retentionPolicySeconds at the project level. Set the duration to 5 years."
        },
        "options-zh": {
            "A": "bucket 設 5 年保存政策並上鎖。",
            "B": "Org 設保存政策 constraints/storage.retentionPolicySeconds，5 年。",
            "C": "用自管金鑰加密，5 年後輪替。",
            "D": "專案層設保存政策 constraints/storage.retentionPolicySeconds，5 年。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#1",
        "no": "#198",
        "link": "https://www.examtopics.com/discussions/google/view/146571-exam-professional-cloud-architect-topic-1-question-198/",
        "question": "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs.\n\nWhat should they do?",
        "question-zh": "公司要大改 API，舊版要能繼續用，新客戶與測試者可試新版，SSL/DNS 不變，怎麼做？",
        "options": {
            "A": "Configure a new load balancer for the new version of the API",
            "B": "Reconfigure old clients to use a new endpoint for the new API",
            "C": "Have the old API forward traffic to the new API based on the path",
            "D": "Use separate backend pools for each API path behind the load balancer"
        },
        "options-zh": {
            "A": "新 API 設新負載平衡器。",
            "B": "舊客戶改用新版 endpoint。",
            "C": "舊 API 依路徑轉發到新版。",
            "D": "負載平衡器用不同後端池對應不同 API 路徑。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#1",
        "no": "#199",
        "link": "https://www.examtopics.com/discussions/google/view/146572-exam-professional-cloud-architect-topic-1-question-199/",
        "question": "You have a Compute Engine application that you want to autoscale when total memory usage exceeds 80%. You have installed the Cloud Monitoring agent and configured the autoscaling policy as follows:",
        "question-zh": "你有 Compute Engine 應用，想在記憶體用量超過 80% 時自動擴展，已裝 Monitoring agent 並設好 autoscale。怎麼修正？",
        "options": {
            "A": "Change the Target type to DELTA_PER_MINUTE.",
            "B": "Change the Metric identifier to agent.googleapis.com/memory/bytes_used.",
            "C": "Change the filter to metric.label.state = ‘used’.",
            "D": "Change the filter to metric.label.state = ‘free’ and the Target utilization to 20."
        },
        "options-zh": {
            "A": "Target type 改 DELTA_PER_MINUTE。",
            "B": "Metric identifier 改 agent.googleapis.com/memory/bytes_used。",
            "C": "filter 改 ‘used’。",
            "D": "filter 改 ‘free’，目標利用率設 20。"
        },
        "images": [
            "images/Question-199.png"
        ],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#2",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/10396-exam-professional-cloud-architect-topic-2-question-1/",
        "question": "The JencoMart security team requires that all Google Cloud Platform infrastructure is deployed using a least privilege model with separation of duties for administration between production and development resources.\nWhat Google domain and project structure should you recommend?",
        "question-zh": "JencoMart 安全團隊要求所有 Google Cloud Platform 基礎設施都使用最小權限模型部署，並在生產和開發資源的管理之間實現職責分離。\n您建議採用什麼樣的 Google 網域和專案結構？",
        "options": {
            "A": "Create two G Suite accounts to manage users: one for development/test/staging and one for production. Each account should contain one project for every application",
            "B": "Create two G Suite accounts to manage users: one with a single project for all development applications and one with a single project for all production applications",
            "C": "Create a single G Suite account to manage users with each stage of each application in its own project",
            "D": "Create a single G Suite account to manage users with one project for the development/test/staging environment and one project for the production environment"
        },
        "options-zh": {
            "A": "創建兩個 G Suite 帳戶來管理用戶：一個用於開發/測試/暫存，一個用於生產。每個帳戶都應該為每個應用程式包含一個專案",
            "B": "創建兩個 G Suite 帳戶來管理用戶：一個包含所有開發應用程式的單一專案，一個包含所有生產應用程式的單一專案",
            "C": "創建一個 G Suite 帳戶來管理用戶，每個應用程式的每個階段都有自己的專案",
            "D": "創建一個 G Suite 帳戶來管理用戶，一個專案用於開發/測試/暫存環境，一個專案用於生產環境"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#2",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/11917-exam-professional-cloud-architect-topic-2-question-2/",
        "question": "A few days after JencoMart migrates the user credentials database to Google Cloud Platform and shuts down the old server, the new database server stops responding to SSH connections. It is still serving database requests to the application servers correctly.\nWhat three steps should you take to diagnose the problem? (Choose three.)",
        "question-zh": "在 JencoMart 將用戶憑證資料庫遷移到 Google Cloud Platform 並關閉舊伺服器幾天後，新資料庫伺服器停止回應 SSH 連接。但它仍然正常為應用程式伺服器提供資料庫請求服務。\n您應該採取哪三個步驟來診斷問題？（選擇三項。）",
        "options": {
            "A": "Delete the virtual machine (VM) and disks and create a new one",
            "B": "Delete the instance, attach the disk to a new VM, and investigate",
            "C": "Take a snapshot of the disk and connect to a new machine to investigate",
            "D": "Check inbound firewall rules for the network the machine is connected to",
            "E": "Connect the machine to another network with very simple firewall rules and investigate",
            "F": "Print the Serial Console output for the instance for troubleshooting, activate the interactive console, and investigate"
        },
        "options-zh": {
            "A": "刪除虛擬機器（VM）和磁碟並創建一個新的",
            "B": "刪除實例，將磁碟連接到新的 VM，並進行調查",
            "C": "對磁碟進行快照並連接到新機器進行調查",
            "D": "檢查機器連接的網路的入站防火牆規則",
            "E": "將機器連接到另一個具有非常簡單防火牆規則的網路並進行調查",
            "F": "輸出實例的串列控制台輸出進行故障排除，啟動互動式控制台並進行調查"
        },
        "images": [],
        "answers": [
            "C", "D", "F"
        ]
    },
    {
        "topic": "#2",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/12793-exam-professional-cloud-architect-topic-2-question-3/",
        "question": "JencoMart has decided to migrate user profile storage to Google Cloud Datastore and the application servers to Google Compute Engine (GCE). During the migration, the existing infrastructure will need access to Datastore to upload the data.\nWhat service account key-management strategy should you recommend?",
        "question-zh": "JencoMart 已決定將用戶個人檔案儲存遷移到 Google Cloud Datastore，將應用程式伺服器遷移到 Google Compute Engine（GCE）。在遷移過程中，現有基礎設施需要存取 Datastore 來上傳資料。\n您建議採用什麼樣的服務帳戶金鑰管理策略？",
        "options": {
            "A": "Provision service account keys for the on-premises infrastructure and for the GCE virtual machines (VMs)",
            "B": "Authenticate the on-premises infrastructure with a user account and provision service account keys for the VMs",
            "C": "Provision service account keys for the on-premises infrastructure and use Google Cloud Platform (GCP) managed keys for the VMs",
            "D": "Deploy a custom authentication service on GCE/Google Kubernetes Engine (GKE) for the on-premises infrastructure and use GCP managed keys for the VMs"
        },
        "options-zh": {
            "A": "為本地基礎設施和 GCE 虛擬機器（VM）提供服務帳戶金鑰",
            "B": "使用用戶帳戶驗證本地基礎設施，並為 VM 提供服務帳戶金鑰",
            "C": "為本地基礎設施提供服務帳戶金鑰，為 VM 使用 Google Cloud Platform（GCP）管理的金鑰",
            "D": "在 GCE/Google Kubernetes Engine（GKE）上部署自訂驗證服務供本地基礎設施使用，並為 VM 使用 GCP 管理的金鑰"
        },
        "images": [],
        "answers": ["C"]
    },
    {
        "topic": "#2",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/14318-exam-professional-cloud-architect-topic-2-question-4/",
        "question": "JencoMart has built a version of their application on Google Cloud Platform that serves traffic to Asia. You want to measure success against their business and technical goals.\nWhich metrics should you track?",
        "question-zh": "JencoMart 在 Google Cloud Platform 上建立了一個為亞洲提供流量服務的應用程式版本。您想要根據他們的商業和技術目標來衡量成功。\n您應該追蹤哪些指標？",
        "options": {
            "A": "Error rates for requests from Asia",
            "B": "Latency difference between US and Asia",
            "C": "Total visits, error rates, and latency from Asia",
            "D": "Total visits and average latency for users from Asia",
            "E": "The number of character sets present in the database"
        },
        "options-zh": {
            "A": "來自亞洲請求的錯誤率",
            "B": "美國和亞洲之間的延遲差異",
            "C": "來自亞洲的總訪問量、錯誤率和延遲",
            "D": "來自亞洲用戶的總訪問量和平均延遲",
            "E": "資料庫中存在的字元集數量"
        },
        "images": [],
        "answers": ["C"]
    },
    {
        "topic": "#2",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/6708-exam-professional-cloud-architect-topic-2-question-5/",
        "question": "The migration of JencoMart's application to Google Cloud Platform (GCP) is progressing too slowly. The infrastructure is shown in the diagram. You want to maximize throughput.\nWhat are three potential bottlenecks? (Choose three.)",
        "question-zh": "JencoMart 應用程式遷移到 Google Cloud Platform（GCP）的進度太慢。基礎設施如圖所示。您想要最大化吞吐量。\n有哪三個潛在瓶頸？（選擇三項。）",
        "options": {
            "A": "A single VPN tunnel, which limits throughput",
            "B": "A tier of Google Cloud Storage that is not suited for this task",
            "C": "A copy command that is not suited to operate over long distances",
            "D": "Fewer virtual machines (VMs) in GCP than on-premises machines",
            "E": "A separate storage layer outside the VMs, which is not suited for this task",
            "F": "Complicated internet connectivity between the on-premises infrastructure and GCP"
        },
        "options-zh": {
            "A": "單一 VPN 隧道，限制了吞吐量",
            "B": "不適合此任務的 Google Cloud Storage 層級",
            "C": "不適合長距離操作的複製命令",
            "D": "GCP 中的虛擬機器（VM）比本地機器少",
            "E": "VM 外部的獨立儲存層，不適合此任務",
            "F": "本地基礎設施和 GCP 之間複雜的網路連接"
        },
        "images": ["images/T2N5.png"],
        "answers": ["A", "C", "F"]
    },
    {
        "topic": "#2",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/8497-exam-professional-cloud-architect-topic-2-question-6/",
        "question": "JencoMart wants to move their User Profiles database to Google Cloud Platform.\nWhich Google Database should they use?",
        "question-zh": "JencoMart 想要將他們的用戶個人檔案資料庫遷移到 Google Cloud Platform。\n他們應該使用哪個 Google 資料庫？",
        "options": {
            "A": "Cloud Spanner",
            "B": "Google BigQuery",
            "C": "Google Cloud SQL",
            "D": "Google Cloud Datastore"
        },
        "options-zh": {
            "A": "Cloud Spanner",
            "B": "Google BigQuery",
            "C": "Google Cloud SQL",
            "D": "Google Cloud Datastore"
        },
        "images": [],
        "answers": ["D"]
    },
    {
        "topic": "#3",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/65937-exam-professional-cloud-architect-topic-3-question-1/",
        "question": "For this question, refer to the Helicopter Racing League (HRL) case study. Your team is in charge of creating a payment card data vault for card numbers used to bill tens of thousands of viewers, merchandise consumers, and season ticket holders. You need to implement a custom card tokenization service that meets the following requirements:\n\n- It must provide low latency at minimal cost.\n- It must be able to identify duplicate credit cards and must not store plaintext card numbers.\n- It should support annual key rotation.\n\nWhich storage approach should you adopt for your tokenization service?",
        "question-zh": "（HRL 案例）你負責建立信用卡資料庫，需低延遲低成本、能判重、不能存明碼卡號、支援年輪換金鑰。該用哪種儲存方案？",
        "options": {
            "A": "Store the card data in Secret Manager after running a query to identify duplicates.",
            "B": "Encrypt the card data with a deterministic algorithm stored in Firestore using Datastore mode.",
            "C": "Encrypt the card data with a deterministic algorithm and shard it across multiple Memorystore instances.",
            "D": "Use column-level encryption to store the data in Cloud SQL."
        },
        "options-zh": {
            "A": "查重後存 Secret Manager。",
            "B": "用決定性加密存 Firestore（Datastore 模式）。",
            "C": "決定性加密後分片存 Memorystore。",
            "D": "Cloud SQL 欄位加密。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#3",
        "no": "#2-1",
        "link": "https://www.examtopics.com/discussions/google/view/68709-exam-professional-cloud-architect-topic-3-question-2/",
        "question": "For this question, refer to the Helicopter Racing League (HRL) case study. Recently HRL started a new regional racing league in Cape Town, South Africa. In an effort to give customers in Cape Town a better user experience, HRL has partnered with the Content Delivery Network provider, Fastly. HRL needs to allow traffic coming from all of the Fastly IP address ranges into their Virtual Private Cloud network (VPC network). You are a member of the HRL security team and you need to configure the update that will allow only the Fastly IP address ranges through the External HTTP(S) load balancer. Which command should you use?",
        "question-zh": "（HRL 案例）HRL 在開普敦新賽區，合作 CDN Fastly，要讓 Fastly IP 通過 VPC 的 HTTP(S) 負載平衡器，該用哪個指令？",
        "options": {
            "A": "Image 1",
            "B": "Image 2",
            "C": "Image 3",
            "D": "Image 4"
        },
        "options-zh": {
            "A": "圖 1",
            "B": "圖 2",
            "C": "圖 3",
            "D": "圖 4"
        },
        "images": [
            "images/HRL-Question-2-1-1.png",
            "images/HRL-Question-2-1-2.png",
            "images/HRL-Question-2-1-3.png",
            "images/HRL-Question-2-1-4.png"
        ],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#3",
        "no": "#2-2",
        "link": "https://www.examtopics.com/discussions/google/view/68709-exam-professional-cloud-architect-topic-3-question-2/",
        "question": "As someone pointed out answers are reworked.\nInstead of asking for the command, the choices were given in wordings - something like the below. (Not the exact words)",
        "question-zh": "（HRL 案例）有題目改成用敘述選項而非指令，內容大致如下。",
        "options": {
            "A": "Create Cloud Armor Security Policy with the source ip ranges.",
            "B": "Create Cloud Armor Security Policy with the source ip list",
            "C": "Create firewall rule to allow source ip list",
            "D": "Create firewall rule to allow source ip range"
        },
        "options-zh": {
            "A": "Cloud Armor 設來源 IP 範圍政策。",
            "B": "Cloud Armor 設來源 IP 清單政策。",
            "C": "設防火牆規則允許來源 IP 清單。",
            "D": "設防火牆規則允許來源 IP 範圍。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#3",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/56890-exam-professional-cloud-architect-topic-3-question-3/",
        "question": "For this question, refer to the Helicopter Racing League (HRL) case study. The HRL development team releases a new version of their predictive capability application every Tuesday evening at 3 a.m. UTC to a repository. The security team at HRL has developed an in-house penetration test Cloud Function called Airwolf. The security team wants to run Airwolf against the predictive capability application as soon as it is released every Tuesday. You need to set up Airwolf to run at the recurring weekly cadence. What should you do?",
        "question-zh": "（HRL 案例）HRL 開發團隊每週二 3am UTC 發新版預測應用，資安團隊有 Cloud Function Airwolf 要每週自動測新版，怎麼設？",
        "options": {
            "A": "Set up Cloud Tasks and a Cloud Storage bucket that triggers a Cloud Function.",
            "B": "Set up a Cloud Logging sink and a Cloud Storage bucket that triggers a Cloud Function.",
            "C": "Configure the deployment job to notify a Pub/Sub queue that triggers a Cloud Function.",
            "D": "Set up Identity and Access Management (IAM) and Confidential Computing to trigger a Cloud Function."
        },
        "options-zh": {
            "A": "Cloud Tasks + Cloud Storage 觸發 Cloud Function。",
            "B": "Cloud Logging sink + Cloud Storage 觸發 Cloud Function。",
            "C": "部署作業通知 Pub/Sub 觸發 Cloud Function。",
            "D": "IAM + Confidential Computing 觸發 Cloud Function。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#3",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/56322-exam-professional-cloud-architect-topic-3-question-4/",
        "question": "For this question, refer to the Helicopter Racing League (HRL) case study. HRL wants better prediction accuracy from their ML prediction models. They want you to use Google's AI Platform so HRL can understand and interpret the predictions. What should you do?",
        "question-zh": "本題請參考直升機賽事聯盟（HRL）案例。HRL 希望提升機器學習預測模型的準確度，並希望你使用 Google 的 AI Platform 來協助 HRL 理解與解釋預測結果。你該怎麼做？",
        "options": {
            "A": "Use Explainable AI.",
            "B": "Use Vision AI.",
            "C": "Use Google Cloud's operations suite.",
            "D": "Use Jupyter Notebooks."
        },
        "options-zh": {
            "A": "使用可解釋 AI（Explainable AI）",
            "B": "使用 Vision AI",
            "C": "使用 Google Cloud 的營運套件（operations suite）",
            "D": "使用 Jupyter Notebooks"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#3",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/56326-exam-professional-cloud-architect-topic-3-question-5/",
        "question": "For this question, refer to the Helicopter Racing League (HRL) case study. HRL is looking for a cost-effective approach for storing their race data such as telemetry. They want to keep all historical records, train models using only the previous season's data, and plan for data growth in terms of volume and information collected. You need to propose a data solution. Considering HRL business requirements and the goals expressed by CEO S. Hawke, what should you do?",
        "question-zh": "本題請參考直升機賽事聯盟（HRL）案例。HRL 希望以具成本效益的方式儲存賽事資料（如遙測數據），並保留所有歷史紀錄，只用前一賽季資料訓練模型，且需規劃資料量與資訊成長。根據 HRL 的業務需求與 CEO S. Hawke 的目標，請提出資料解決方案。你該怎麼做？",
        "options": {
            "A": "Use Firestore for its scalable and flexible document-based database. Use collections to aggregate race data by season and event.",
            "B": "Use Cloud Spanner for its scalability and ability to version schemas with zero downtime. Split race data using season as a primary key.",
            "C": "Use BigQuery for its scalability and ability to add columns to a schema. Partition race data based on season.",
            "D": "Use Cloud SQL for its ability to automatically manage storage increases and compatibility with MySQL. Use separate database instances for each season."
        },
        "options-zh": {
            "A": "使用 Firestore，因其具備可擴展且彈性的文件型資料庫。以 collection 匯總每季與每場賽事的資料。",
            "B": "使用 Cloud Spanner，因其可擴展性與無停機版本管理。以賽季作為主鍵分割資料。",
            "C": "使用 BigQuery，因其可擴展性與可動態新增欄位。以賽季分割資料。",
            "D": "使用 Cloud SQL，能自動管理儲存空間並相容 MySQL。每季使用不同資料庫實例。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#3",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/56328-exam-professional-cloud-architect-topic-3-question-6/",
        "question": "For this question, refer to the Helicopter Racing League (HRL) case study. A recent finance audit of cloud infrastructure noted an exceptionally high number of Compute Engine instances are allocated to do video encoding and transcoding. You suspect that these Virtual Machines are zombie machines that were not deleted after their workloads completed. You need to quickly get a list of which VM instances are idle. What should you do?",
        "question-zh": "本題請參考直升機賽事聯盟（HRL）案例。最近財務稽核發現雲端基礎設施有大量 Compute Engine 實例用於影片編碼與轉檔。你懷疑這些 VM 是工作完成後未刪除的殭屍機器。你需要快速取得閒置 VM 實例清單。你該怎麼做？",
        "options": {
            "A": "Log into each Compute Engine instance and collect disk, CPU, memory, and network usage statistics for analysis.",
            "B": "Use the gcloud compute instances list to list the virtual machine instances that have the idle: true label set.",
            "C": "Use the gcloud recommender command to list the idle virtual machine instances.",
            "D": "From the Google Console, identify which Compute Engine instances in the managed instance groups are no longer responding to health check probes."
        },
        "options-zh": {
            "A": "登入每個 Compute Engine 實例，收集磁碟、CPU、記憶體與網路使用統計資料進行分析。",
            "B": "使用 gcloud compute instances list 指令，列出標記為 idle: true 的 VM 實例。",
            "C": "使用 gcloud recommender 指令，列出閒置的 VM 實例。",
            "D": "在 Google Console 中，找出受管實例群組中未回應健康檢查的 Compute Engine 實例。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#4",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/60388-exam-professional-cloud-architect-topic-4-question-1/",
        "question": "For this question, refer to the EHR Healthcare case study. You are responsible for ensuring that EHR's use of Google Cloud will pass an upcoming privacy compliance audit. What should you do? (Choose two.)",
        "question-zh": "本題請參考 EHR Healthcare 案例。你負責確保 EHR 使用 Google Cloud 能通過即將到來的隱私合規稽核。你該怎麼做？（選兩項）",
        "options": {
            "A": "Verify EHR's product usage against the list of compliant products on the Google Cloud compliance page.",
            "B": "Advise EHR to execute a Business Associate Agreement (BAA) with Google Cloud.",
            "C": "Use Firebase Authentication for EHR's user facing applications.",
            "D": "Implement Prometheus to detect and prevent security breaches on EHR's web-based applications.",
            "E": "Use GKE private clusters for all Kubernetes workloads."
        },
        "options-zh": {
            "A": "根據 Google Cloud 合規頁面，核對 EHR 使用的產品是否合規。",
            "B": "建議 EHR 與 Google Cloud 簽署商業夥伴協議（BAA）。",
            "C": "EHR 的用戶端應用程式使用 Firebase Authentication。",
            "D": "導入 Prometheus 以偵測並防止網頁應用程式的安全漏洞。",
            "E": "所有 Kubernetes 工作負載皆使用 GKE 私有叢集。"
        },
        "images": [],
        "answers": [
            "A",
            "B"
        ]
    },
    {
        "topic": "#4",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/60423-exam-professional-cloud-architect-topic-4-question-2/",
        "question": "For this question, refer to the EHR Healthcare case study. You need to define the technical architecture for securely deploying workloads to Google Cloud. You also need to ensure that only verified containers are deployed using Google Cloud services. What should you do? (Choose two.)",
        "question-zh": "本題請參考 EHR Healthcare 案例。你需要定義安全部署工作負載到 Google Cloud 的技術架構，並確保僅有經驗證的容器能被部署。你該怎麼做？（選兩項）",
        "options": {
            "A": "Enable Binary Authorization on GKE, and sign containers as part of a CI/CD pipeline.",
            "B": "Configure Jenkins to utilize Kritis to cryptographically sign a container as part of a CI/CD pipeline.",
            "C": "Configure Container Registry to only allow trusted service accounts to create and deploy containers from the registry.",
            "D": "Configure Container Registry to use vulnerability scanning to confirm that there are no vulnerabilities before deploying the workload."
        },
        "options-zh": {
            "A": "在 GKE 啟用 Binary Authorization，並於 CI/CD 流程中簽署容器。",
            "B": "設定 Jenkins 使用 Kritis，在 CI/CD 流程中對容器進行加密簽章。",
            "C": "設定 Container Registry 僅允許受信任的服務帳號建立與部署容器。",
            "D": "設定 Container Registry 於部署前進行漏洞掃描，確保無漏洞。"
        },
        "images": [],
        "answers": [
            "A",
            "D"
        ]
    },
    {
        "topic": "#4",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/60403-exam-professional-cloud-architect-topic-4-question-3/",
        "question": "You need to upgrade the EHR connection to comply with their requirements. The new connection design must support business-critical needs and meet the same network and security policy requirements. What should you do?",
        "question-zh": "你需要升級 EHR 的連線以符合其需求。新設計必須支援關鍵業務並符合相同的網路與安全政策。你該怎麼做？",
        "options": {
            "A": "Add a new Dedicated Interconnect connection.",
            "B": "Upgrade the bandwidth on the Dedicated Interconnect connection to 100 G.",
            "C": "Add three new Cloud VPN connections.",
            "D": "Add a new Carrier Peering connection."
        },
        "options-zh": {
            "A": "新增一條 Dedicated Interconnect 連線。",
            "B": "將 Dedicated Interconnect 連線頻寬升級至 100G。",
            "C": "新增三條 Cloud VPN 連線。",
            "D": "新增一條 Carrier Peering 連線。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#4",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/60435-exam-professional-cloud-architect-topic-4-question-4/",
        "question": "For this question, refer to the EHR Healthcare case study. You need to define the technical architecture for hybrid connectivity between EHR's on-premises systems and Google Cloud. You want to follow Google's recommended practices for production-level applications. Considering the EHR Healthcare business and technical requirements, what should you do?",
        "question-zh": "本題請參考 EHR Healthcare 案例。你需要設計 EHR 內部系統與 Google Cloud 的混合連線架構，並遵循 Google 的生產環境建議。根據 EHR 的業務與技術需求，你該怎麼做？",
        "options": {
            "A": "Configure two Partner Interconnect connections in one metro (City), and make sure the Interconnect connections are placed in different metro zones.",
            "B": "Configure two VPN connections from on-premises to Google Cloud, and make sure the VPN devices on-premises are in separate racks.",
            "C": "Configure Direct Peering between EHR Healthcare and Google Cloud, and make sure you are peering at least two Google locations.",
            "D": "Configure two Dedicated Interconnect connections in one metro (City) and two connections in another metro, and make sure the Interconnect connections are placed in different metro zones."
        },
        "options-zh": {
            "A": "在同一城市設置兩條 Partner Interconnect，並確保分布於不同 metro zone。",
            "B": "從內部到 Google Cloud 設置兩條 VPN，並確保內部 VPN 設備分別在不同機架。",
            "C": "設置 Direct Peering，並確保至少在兩個 Google 地點進行對等連線。",
            "D": "在同一城市設置兩條 Dedicated Interconnect，另一城市再設兩條，並確保分布於不同 metro zone。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#4",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/60405-exam-professional-cloud-architect-topic-4-question-5/",
        "question": "For this question, refer to the EHR Healthcare case study. You are a developer on the EHR customer portal team. Your team recently migrated the customer portal application to Google Cloud. The load has increased on the application servers, and now the application is logging many timeout errors. You recently incorporated Pub/Sub into the application architecture, and the application is not logging any Pub/Sub publishing errors. You want to improve publishing latency.\n\nWhat should you do?",
        "question-zh": "本題請參考 EHR Healthcare 案例。你是 EHR 客戶入口網站團隊的開發人員。團隊最近將入口網站遷移到 Google Cloud，伺服器負載增加，應用程式出現許多逾時錯誤。你已將 Pub/Sub 納入架構，且未記錄任何發佈錯誤。你想改善發佈延遲，該怎麼做？",
        "options": {
            "A": "Increase the Pub/Sub Total Timeout retry value.",
            "B": "Move from a Pub/Sub subscriber pull model to a push model.",
            "C": "Turn off Pub/Sub message batching.",
            "D": "Create a backup Pub/Sub message queue."
        },
        "options-zh": {
            "A": "提高 Pub/Sub 總逾時重試值。",
            "B": "將 Pub/Sub 訂閱者從拉取模式改為推送模式。",
            "C": "關閉 Pub/Sub 訊息批次處理。",
            "D": "建立備用 Pub/Sub 訊息佇列。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#4",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/60407-exam-professional-cloud-architect-topic-4-question-6/",
        "question": "For this question, refer to the EHR Healthcare case study. In the past, configuration errors put public IP addresses on backend servers that should not have been accessible from the Internet. You need to ensure that no one can put external IP addresses on backend Compute Engine instances and that external IP addresses can only be configured on frontend Compute Engine instances. What should you do?",
        "question-zh": "本題請參考 EHR Healthcare 案例。過去設定錯誤導致後端伺服器被配置了公網 IP，應不可從網際網路存取。你需確保僅前端 Compute Engine 實例可設外部 IP，後端不可。你該怎麼做？",
        "options": {
            "A": "Create an Organizational Policy with a constraint to allow external IP addresses only on the frontend Compute Engine instances.",
            "B": "Revoke the compute.networkAdmin role from all users in the project with front end instances.",
            "C": "Create an Identity and Access Management (IAM) policy that maps the IT staff to the compute.networkAdmin role for the organization.",
            "D": "Create a custom Identity and Access Management (IAM) role named GCE_FRONTEND with the compute.addresses.create permission."
        },
        "options-zh": {
            "A": "建立組織政策，僅允許前端 Compute Engine 實例配置外部 IP。",
            "B": "撤銷所有前端專案用戶的 compute.networkAdmin 角色。",
            "C": "建立 IAM 政策，將 IT 人員對應到組織的 compute.networkAdmin 角色。",
            "D": "建立名為 GCE_FRONTEND 的自訂 IAM 角色，並賦予 compute.addresses.create 權限。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#4",
        "no": "#7",
        "link": "https://www.examtopics.com/discussions/google/view/60409-exam-professional-cloud-architect-topic-4-question-7/",
        "question": "For this question, refer to the EHR Healthcare case study. You are responsible for designing the Google Cloud network architecture for Google Kubernetes Engine. You want to follow Google best practices. Considering the EHR Healthcare business and technical requirements, what should you do to reduce the attack surface?",
        "question-zh": "本題請參考 EHR Healthcare 案例。你負責設計 Google Kubernetes Engine 的雲端網路架構，並希望遵循 Google 最佳實踐。根據 EHR 的業務與技術需求，如何降低攻擊面？",
        "options": {
            "A": "Use a private cluster with a private endpoint with master authorized networks configured.",
            "B": "Use a public cluster with firewall rules and Virtual Private Cloud (VPC) routes.",
            "C": "Use a private cluster with a public endpoint with master authorized networks configured.",
            "D": "Use a public cluster with master authorized networks enabled and firewall rules."
        },
        "options-zh": {
            "A": "使用私有叢集，並設定私有端點與 master 授權網路。",
            "B": "使用公開叢集，並設防火牆規則與 VPC 路由。",
            "C": "使用私有叢集，公開端點並設 master 授權網路。",
            "D": "使用公開叢集，啟用 master 授權網路並設防火牆規則。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#5",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/10722-exam-professional-cloud-architect-topic-5-question-1/",
        "question": "Mountkirk Games wants you to design their new testing strategy. How should the test coverage differ from their existing backends on the other platforms?",
        "question-zh": "Mountkirk Games 希望你設計新的測試策略。測試覆蓋率應如何與現有平台的後端不同？",
        "options": {
            "A": "Tests should scale well beyond the prior approaches",
            "B": "Unit tests are no longer required, only end-to-end tests",
            "C": "Tests should be applied after the release is in the production environment",
            "D": "Tests should include directly testing the Google Cloud Platform (GCP) infrastructure"
        },
        "options-zh": {
            "A": "測試規模應遠超以往方法。",
            "B": "不再需要單元測試，只需端到端測試。",
            "C": "測試應在產品上線後才執行。",
            "D": "測試應直接涵蓋 Google Cloud Platform（GCP）基礎設施。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#5",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/9190-exam-professional-cloud-architect-topic-5-question-2/",
        "question": "Mountkirk Games has deployed their new backend on Google Cloud Platform (GCP). You want to create a through testing process for new versions of the backend before they are released to the public. You want the testing environment to scale in an economical way. How should you design the process?",
        "question-zh": "Mountkirk Games 已將新後端部署於 Google Cloud Platform（GCP）。你希望為新版本建立完整測試流程，並讓測試環境具經濟規模。該如何設計？",
        "options": {
            "A": "Create a scalable environment in GCP for simulating production load",
            "B": "Use the existing infrastructure to test the GCP-based backend at scale",
            "C": "Build stress tests into each component of your application using resources internal to GCP to simulate load",
            "D": "Create a set of static environments in GCP to test different levels of load ג€\" for example, high, medium, and low"
        },
        "options-zh": {
            "A": "在 GCP 建立可擴展環境以模擬生產負載。",
            "B": "利用現有基礎設施大規模測試 GCP 後端。",
            "C": "將壓力測試內建於每個應用元件，並用 GCP 內部資源模擬負載。",
            "D": "在 GCP 建立多組靜態環境，測試不同負載（如高、中、低）。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#5",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/6549-exam-professional-cloud-architect-topic-5-question-3/",
        "question": "Mountkirk Games wants to set up a continuous delivery pipeline. Their architecture includes many small services that they want to be able to update and roll back quickly. Mountkirk Games has the following requirements:\n\n✑ Services are deployed redundantly across multiple regions in the US and Europe\n\n✑ Only frontend services are exposed on the public internet\n\n✑ They can provide a single frontend IP for their fleet of services\n\n✑ Deployment artifacts are immutable\n\nWhich set of products should they use?",
        "question-zh": "Mountkirk Games 想建立持續交付流程。其架構包含多個小型服務，需能快速更新與回滾，並有以下需求：\n\n✑ 服務需跨美國與歐洲多區部署\n✑ 僅前端服務對外公開\n✑ 可為所有服務提供單一前端 IP\n✑ 部署產物不可變他們應該用哪些產品？",
        "options": {
            "A": "Google Cloud Storage, Google Cloud Dataflow, Google Compute Engine",
            "B": "Google Cloud Storage, Google App Engine, Google Network Load Balancer",
            "C": "Google Kubernetes Registry, Google Container Engine, Google HTTP(S) Load Balancer",
            "D": "Google Cloud Functions, Google Cloud Pub/Sub, Google Cloud Deployment Manager"
        },
        "options-zh": {
            "A": "Google Cloud Storage、Google Cloud Dataflow、Google Compute Engine",
            "B": "Google Cloud Storage、Google App Engine、Google Network Load Balancer",
            "C": "Google Kubernetes Registry、Google Container Engine、Google HTTP(S) Load Balancer",
            "D": "Google Cloud Functions、Google Cloud Pub/Sub、Google Cloud Deployment Manager"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#5",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/9253-exam-professional-cloud-architect-topic-5-question-4/",
        "question": "Mountkirk Games' gaming servers are not automatically scaling properly. Last month, they rolled out a new feature, which suddenly became very popular. A record number of users are trying to use the service, but many of them are getting 503 errors and very slow response times. What should they investigate first?",
        "question-zh": "Mountkirk Games 的遊戲伺服器未能自動擴展。上月推出新功能後爆紅，創下用戶新高，但許多用戶遇到 503 錯誤與回應緩慢。應先調查什麼？",
        "options": {
            "A": "Verify that the database is online",
            "B": "Verify that the project quota hasn't been exceeded",
            "C": "Verify that the new feature code did not introduce any performance bugs",
            "D": "Verify that the load-testing team is not running their tool against production"
        },
        "options-zh": {
            "A": "確認資料庫是否在線上。",
            "B": "確認專案配額是否已超過。",
            "C": "確認新功能程式碼未引入效能問題。",
            "D": "確認壓力測試團隊未對正式環境執行測試。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#5",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/9191-exam-professional-cloud-architect-topic-5-question-5/",
        "question": "Mountkirk Games needs to create a repeatable and configurable mechanism for deploying isolated application environments. Developers and testers can access each other's environments and resources, but they cannot access staging or production resources. The staging environment needs access to some services from production.\n\nWhat should you do to isolate development environments from staging and production?",
        "question-zh": "Mountkirk Games 需要建立可重複且可設定的機制來部署隔離的應用環境。開發與測試人員可互相存取彼此環境，但不能存取預備或正式資源。預備環境需能存取部分正式服務。你該如何隔離開發、預備與正式環境？",
        "options": {
            "A": "Create a project for development and test and another for staging and production",
            "B": "Create a network for development and test and another for staging and production",
            "C": "Create one subnetwork for development and another for staging and production",
            "D": "Create one project for development, a second for staging and a third for production"
        },
        "options-zh": {
            "A": "為開發與測試建立一個專案，預備與正式共用另一個專案。",
            "B": "為開發與測試建立一個網路，預備與正式共用另一個網路。",
            "C": "建立一個子網給開發，一個給預備與正式。",
            "D": "分別為開發、預備、正式建立三個專案。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#5",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/11831-exam-professional-cloud-architect-topic-5-question-6/",
        "question": "Mountkirk Games wants to set up a real-time analytics platform for their new game. The new platform must meet their technical requirements.\n\nWhich combination of Google technologies will meet all of their requirements?",
        "question-zh": "Mountkirk Games 想為新遊戲建立即時分析平台，需符合技術需求。下列哪組 Google 技術能滿足所有需求？",
        "options": {
            "A": "Kubernetes Engine, Cloud Pub/Sub, and Cloud SQL",
            "B": "Cloud Dataflow, Cloud Storage, Cloud Pub/Sub, and BigQuery",
            "C": "Cloud SQL, Cloud Storage, Cloud Pub/Sub, and Cloud Dataflow",
            "D": "Cloud Dataproc, Cloud Pub/Sub, Cloud SQL, and Cloud Dataflow",
            "E": "Cloud Pub/Sub, Compute Engine, Cloud Storage, and Cloud Dataproc"
        },
        "options-zh": {
            "A": "Kubernetes Engine、Cloud Pub/Sub、Cloud SQL",
            "B": "Cloud Dataflow、Cloud Storage、Cloud Pub/Sub、BigQuery",
            "C": "Cloud SQL、Cloud Storage、Cloud Pub/Sub、Cloud Dataflow",
            "D": "Cloud Dataproc、Cloud Pub/Sub、Cloud SQL、Cloud Dataflow",
            "E": "Cloud Pub/Sub、Compute Engine、Cloud Storage、Cloud Dataproc"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#6",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/11888-exam-professional-cloud-architect-topic-6-question-1/",
        "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants to migrate from their current analytics and statistics reporting model to one that meets their technical requirements on Google Cloud Platform.\n\nWhich two steps should be part of their migration plan? (Choose two.)",
        "question-zh": "本題請參考 Mountkirk Games 案例。Mountkirk Games 希望將現有分析與統計報表模型遷移到符合 Google Cloud Platform 技術需求的新模型。\n\n下列哪兩個步驟應納入遷移計畫？（選兩項）",
        "options": {
            "A": "Evaluate the impact of migrating their current batch ETL code to Cloud Dataflow.",
            "B": "Write a schema migration plan to denormalize data for better performance in BigQuery.",
            "C": "Draw an architecture diagram that shows how to move from a single MySQL database to a MySQL cluster.",
            "D": "Load 10 TB of analytics data from a previous game into a Cloud SQL instance, and run test queries against the full dataset to confirm that they complete successfully.",
            "E": "Integrate Cloud Armor to defend against possible SQL injection attacks in analytics files uploaded to Cloud Storage."
        },
        "options-zh": {
            "A": "評估將現有批次 ETL 程式碼遷移到 Cloud Dataflow 的影響。",
            "B": "撰寫資料結構遷移計畫，將資料去正規化以提升 BigQuery 效能。",
            "C": "繪製架構圖，說明如何從單一 MySQL 資料庫遷移到 MySQL 叢集。",
            "D": "將前一款遊戲的 10TB 分析資料載入 Cloud SQL，並對完整資料集執行測試查詢以確認成功。",
            "E": "整合 Cloud Armor，防禦上傳至 Cloud Storage 的分析檔案可能遭受的 SQL 注入攻擊。"
        },
        "images": [],
        "answers": [
            "A",
            "B"
        ]
    },
    {
        "topic": "#6",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/8500-exam-professional-cloud-architect-topic-6-question-2/",
        "question": "For this question, refer to the Mountkirk Games case study. You need to analyze and define the technical architecture for the compute workloads for your company, Mountkirk Games. Considering the Mountkirk Games business and technical requirements, what should you do?",
        "question-zh": "本題請參考 Mountkirk Games 案例。你需要分析並定義 Mountkirk Games 的運算工作負載技術架構。根據業務與技術需求，你該怎麼做？",
        "options": {
            "A": "Create network load balancers. Use preemptible Compute Engine instances.",
            "B": "Create network load balancers. Use non-preemptible Compute Engine instances.",
            "C": "Create a global load balancer with managed instance groups and autoscaling policies. Use preemptible Compute Engine instances.",
            "D": "Create a global load balancer with managed instance groups and autoscaling policies. Use non-preemptible Compute Engine instances."
        },
        "options-zh": {
            "A": "建立網路負載平衡器，並使用可搶佔型 Compute Engine 實例。",
            "B": "建立網路負載平衡器，並使用非可搶佔型 Compute Engine 實例。",
            "C": "建立全球負載平衡器，搭配受管實例群組與自動擴展政策，並使用可搶佔型 Compute Engine 實例。",
            "D": "建立全球負載平衡器，搭配受管實例群組與自動擴展政策，並使用非可搶佔型 Compute Engine 實例。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#6",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/8501-exam-professional-cloud-architect-topic-6-question-3/",
        "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants to design their solution for the future in order to take advantage of cloud and technology improvements as they become available. Which two steps should they take? (Choose two.)",
        "question-zh": "本題請參考 Mountkirk Games 案例。Mountkirk Games 希望設計能因應未來雲端與技術進步的解決方案。下列哪兩個步驟應採取？（選兩項）",
        "options": {
            "A": "Store as much analytics and game activity data as financially feasible today so it can be used to train machine learning models to predict user behavior in the future.",
            "B": "Begin packaging their game backend artifacts in container images and running them on Google Kubernetes Engine to improve the ability to scale up or down based on game activity.",
            "C": "Set up a CI/CD pipeline using Jenkins and Spinnaker to automate canary deployments and improve development velocity.",
            "D": "Adopt a schema versioning tool to reduce downtime when adding new game features that require storing additional player data in the database.",
            "E": "Implement a weekly rolling maintenance process for the Linux virtual machines so they can apply critical kernel patches and package updates and reduce the risk of 0-day vulnerabilities."
        },
        "options-zh": {
            "A": "盡可能多儲存分析與遊戲活動資料，以便未來訓練機器學習模型預測用戶行為。",
            "B": "將遊戲後端產物包裝成容器映像，並在 Google Kubernetes Engine 執行，以利依遊戲活動彈性擴縮。",
            "C": "建置 Jenkins 與 Spinnaker 的 CI/CD 流程，自動化金絲雀部署並提升開發速度。",
            "D": "採用資料結構版本管理工具，減少新增玩家資料欄位時的停機。",
            "E": "對 Linux 虛擬機實施每週輪替維護，及時套用核心修補與套件更新，降低 0-day 漏洞風險。"
        },
        "images": [],
        "answers": [
            "A",
            "B"
        ]
    },
    {
        "topic": "#6",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/12204-exam-professional-cloud-architect-topic-6-question-4/",
        "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants you to design a way to test the analytics platform's resilience to changes in mobile network latency. What should you do?",
        "question-zh": "本題請參考 Mountkirk Games 案例。Mountkirk Games 希望你設計方法測試分析平台對行動網路延遲變化的韌性。你該怎麼做？",
        "options": {
            "A": "Deploy failure injection software to the game analytics platform that can inject additional latency to mobile client analytics traffic.",
            "B": "Build a test client that can be run from a mobile phone emulator on a Compute Engine virtual machine, and run multiple copies in Google Cloud Platform regions all over the world to generate realistic traffic.",
            "C": "Add the ability to introduce a random amount of delay before beginning to process analytics files uploaded from mobile devices.",
            "D": "Create an opt-in beta of the game that runs on players' mobile devices and collects response times from analytics endpoints running in Google Cloud Platform regions all over the world."
        },
        "options-zh": {
            "A": "在遊戲分析平台部署故障注入軟體，向行動端分析流量注入額外延遲。",
            "B": "建立測試客戶端，於 Compute Engine VM 上模擬手機執行，並在全球多區產生真實流量。",
            "C": "新增隨機延遲處理機制，於處理行動裝置上傳分析檔案前隨機延遲。",
            "D": "推出遊戲測試版，於玩家行動裝置收集全球各區分析端點回應時間。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#6",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/7236-exam-professional-cloud-architect-topic-6-question-5/",
        "question": "For this question, refer to the Mountkirk Games case study. You need to analyze and define the technical architecture for the database workloads for your company, Mountkirk Games. Considering the business and technical requirements, what should you do?",
        "question-zh": "本題請參考 Mountkirk Games 案例。你需要分析並定義 Mountkirk Games 的資料庫工作負載技術架構。根據業務與技術需求，你該怎麼做？",
        "options": {
            "A": "Use Cloud SQL for time series data, and use Cloud Bigtable for historical data queries.",
            "B": "Use Cloud SQL to replace MySQL, and use Cloud Spanner for historical data queries.",
            "C": "Use Cloud Bigtable to replace MySQL, and use BigQuery for historical data queries.",
            "D": "Use Cloud Bigtable for time series data, use Cloud Spanner for transactional data, and use BigQuery for historical data queries."
        },
        "options-zh": {
            "A": "時間序列資料用 Cloud SQL，歷史查詢用 Cloud Bigtable。",
            "B": "用 Cloud SQL 取代 MySQL，歷史查詢用 Cloud Spanner。",
            "C": "用 Cloud Bigtable 取代 MySQL，歷史查詢用 BigQuery。",
            "D": "時間序列資料用 Cloud Bigtable，交易資料用 Cloud Spanner，歷史查詢用 BigQuery。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#6",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/7237-exam-professional-cloud-architect-topic-6-question-6/",
        "question": "For this question, refer to the Mountkirk Games case study. Which managed storage option meets Mountkirk's technical requirement for storing game activity in a time series database service?",
        "question-zh": "本題請參考 Mountkirk Games 案例。下列哪個託管儲存方案符合 Mountkirk 的遊戲活動時間序列資料庫需求？",
        "options": {
            "A": "Cloud Bigtable",
            "B": "Cloud Spanner",
            "C": "BigQuery",
            "D": "Cloud Datastore"
        },
        "options-zh": {
            "A": "Cloud Bigtable",
            "B": "Cloud Spanner",
            "C": "BigQuery",
            "D": "Cloud Datastore"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#6",
        "no": "#7",
        "link": "https://www.examtopics.com/discussions/google/view/7238-exam-professional-cloud-architect-topic-6-question-7/",
        "question": "For this question, refer to the Mountkirk Games case study. You are in charge of the new Game Backend Platform architecture. The game communicates with the backend over a REST API.\n\nYou want to follow Google-recommended practices. How should you design the backend?",
        "question-zh": "本題請參考 Mountkirk Games 案例。你負責新遊戲後端平台架構，遊戲透過 REST API 與後端溝通。你想遵循 Google 建議做法，該如何設計？",
        "options": {
            "A": "Create an instance template for the backend. For every region, deploy it on a multi-zone managed instance group. Use an L4 load balancer.",
            "B": "Create an instance template for the backend. For every region, deploy it on a single-zone managed instance group. Use an L4 load balancer.",
            "C": "Create an instance template for the backend. For every region, deploy it on a multi-zone managed instance group. Use an L7 load balancer.",
            "D": "Create an instance template for the backend. For every region, deploy it on a single-zone managed instance group. Use an L7 load balancer."
        },
        "options-zh": {
            "A": "為後端建立實例範本，每區部署於多區受管實例群組，並用 L4 負載平衡器。",
            "B": "為後端建立實例範本，每區部署於單區受管實例群組，並用 L4 負載平衡器。",
            "C": "為後端建立實例範本，每區部署於多區受管實例群組，並用 L7 負載平衡器。",
            "D": "為後端建立實例範本，每區部署於單區受管實例群組，並用 L7 負載平衡器。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#7",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/56977-exam-professional-cloud-architect-topic-7-question-1/",
        "question": "You need to optimize batch file transfers into Cloud Storage for Mountkirk Games' new Google Cloud solution. The batch files contain game statistics that need to be staged in Cloud Storage and be processed by an extract transform load (ETL) tool. What should you do?",
        "question-zh": "你需要為 Mountkirk Games 的新 Google Cloud 解決方案最佳化批次檔案傳輸。這些批次檔案包含遊戲統計資料，需先暫存於 Cloud Storage，再由 ETL 工具處理。你該怎麼做？",
        "options": {
            "A": "Use gsutil to batch move files in sequence.",
            "B": "Use gsutil to batch copy the files in parallel.",
            "C": "Use gsutil to extract the files as the first part of ETL.",
            "D": "Use gsutil to load the files as the last part of ETL."
        },
        "options-zh": {
            "A": "用 gsutil 依序批次移動檔案。",
            "B": "用 gsutil 並行批次複製檔案。",
            "C": "用 gsutil 做為 ETL 首步驟提取檔案。",
            "D": "用 gsutil 做為 ETL 最後步驟載入檔案。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#7",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/56978-exam-professional-cloud-architect-topic-7-question-2/",
        "question": "You are implementing Firestore for Mountkirk Games. Mountkirk Games wants to give a new game programmatic access to a legacy game's Firestore database.\n\nAccess should be as restricted as possible. What should you do?",
        "question-zh": "你正在為 Mountkirk Games 實作 Firestore。Mountkirk Games 希望讓新遊戲以程式方式存取舊遊戲的 Firestore 資料庫，且權限應盡量限制。你該怎麼做？",
        "options": {
            "A": "Create a service account (SA) in the legacy game's Google Cloud project, add a second SA in the new game's IAM page, and then give the Organization Admin role to both SAs.",
            "B": "Create a service account (SA) in the legacy game's Google Cloud project, give the SA the Organization Admin role, and then give it the Firebase Admin role in both projects.",
            "C": "Create a service account (SA) in the legacy game's Google Cloud project, add this SA in the new game's IAM page, and then give it the Firebase Admin role in both projects.",
            "D": "Create a service account (SA) in the legacy game's Google Cloud project, give it the Firebase Admin role, and then migrate the new game to the legacy game's project."
        },
        "options-zh": {
            "A": "在舊遊戲專案建立服務帳號（SA），於新遊戲 IAM 頁面新增第二個 SA，並給予兩者組織管理員權限。",
            "B": "在舊遊戲專案建立 SA，給予組織管理員權限，再給兩專案 Firebase 管理員權限。",
            "C": "在舊遊戲專案建立 SA，於新遊戲 IAM 頁面新增該 SA，並給兩專案 Firebase 管理員權限。",
            "D": "在舊遊戲專案建立 SA，給予 Firebase 管理員權限，並將新遊戲遷移至舊遊戲專案。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#7",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/56732-exam-professional-cloud-architect-topic-7-question-3/",
        "question": "Mountkirk Games wants to limit the physical location of resources to their operating Google Cloud regions. What should you do?",
        "question-zh": "Mountkirk Games 希望限制資源僅部署於其營運的 Google Cloud 區域。你該怎麼做？",
        "options": {
            "A": "Configure an organizational policy which constrains where resources can be deployed.",
            "B": "Configure IAM conditions to limit what resources can be configured.",
            "C": "Configure the quotas for resources in the regions not being used to 0.",
            "D": "Configure a custom alert in Cloud Monitoring so you can disable resources as they are created in other regions."
        },
        "options-zh": {
            "A": "設定組織政策，限制資源部署區域。",
            "B": "設定 IAM 條件，限制可設定的資源。",
            "C": "將未使用區域的資源配額設為 0。",
            "D": "在 Cloud Monitoring 設自訂警示，於其他區域建立資源時可停用。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#7",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/56734-exam-professional-cloud-architect-topic-7-question-4/",
        "question": "You need to implement a network ingress for a new game that meets the defined business and technical requirements. Mountkirk Games wants each regional game instance to be located in multiple Google Cloud regions. What should you do?",
        "question-zh": "你需要為新遊戲實作網路入口，滿足業務與技術需求。Mountkirk Games 希望每個地區遊戲實例都部署於多個 Google Cloud 區域。你該怎麼做？",
        "options": {
            "A": "Configure a global load balancer connected to a managed instance group running Compute Engine instances.",
            "B": "Configure kubemci with a global load balancer and Google Kubernetes Engine.",
            "C": "Configure a global load balancer with Google Kubernetes Engine.",
            "D": "Configure Ingress for Anthos with a global load balancer and Google Kubernetes Engine."
        },
        "options-zh": {
            "A": "設定全球負載平衡器，連接執行 Compute Engine 實例的受管實例群組。",
            "B": "用 kubemci 配置全球負載平衡器與 Google Kubernetes Engine。",
            "C": "設定全球負載平衡器與 Google Kubernetes Engine。",
            "D": "用 Anthos Ingress 配置全球負載平衡器與 Google Kubernetes Engine。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#7",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/56735-exam-professional-cloud-architect-topic-7-question-5/",
        "question": "Your development teams release new versions of games running on Google Kubernetes Engine (GKE) daily. You want to create service level indicators (SLIs) to evaluate the quality of the new versions from the user's perspective. What should you do?",
        "question-zh": "你的開發團隊每天都會在 Google Kubernetes Engine（GKE）上發佈新遊戲版本。你想建立服務層級指標（SLI），從用戶角度評估新版本品質。你該怎麼做？",
        "options": {
            "A": "Create CPU Utilization and Request Latency as service level indicators.",
            "B": "Create GKE CPU Utilization and Memory Utilization as service level indicators.",
            "C": "Create Request Latency and Error Rate as service level indicators.",
            "D": "Create Server Uptime and Error Rate as service level indicators."
        },
        "options-zh": {
            "A": "以 CPU 使用率與請求延遲作為服務層級指標。",
            "B": "以 GKE CPU 與記憶體使用率作為服務層級指標。",
            "C": "以請求延遲與錯誤率作為服務層級指標。",
            "D": "以伺服器運作時間與錯誤率作為服務層級指標。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#7",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/56645-exam-professional-cloud-architect-topic-7-question-6/",
        "question": "Mountkirk Games wants you to secure the connectivity from the new gaming application platform to Google Cloud. You want to streamline the process and follow Google-recommended practices. What should you do?",
        "question-zh": "Mountkirk Games 希望你保護新遊戲應用平台與 Google Cloud 的連線。你想簡化流程並遵循 Google 建議做法。你該怎麼做？",
        "options": {
            "A": "Configure Workload Identity and service accounts to be used by the application platform.",
            "B": "Use Kubernetes Secrets, which are obfuscated by default. Configure these Secrets to be used by the application platform.",
            "C": "Configure Kubernetes Secrets to store the secret, enable Application-Layer Secrets Encryption, and use Cloud Key Management Service (Cloud KMS) to manage the encryption keys. Configure these Secrets to be used by the application platform.",
            "D": "Configure HashiCorp Vault on Compute Engine, and use customer managed encryption keys and Cloud Key Management Service (Cloud KMS) to manage the encryption keys. Configure these Secrets to be used by the application platform."
        },
        "options-zh": {
            "A": "設定 Workload Identity 與服務帳號供應用平台使用。",
            "B": "使用 Kubernetes Secrets（預設已模糊化），並設定供應用平台使用。",
            "C": "設定 Kubernetes Secrets 儲存機密，啟用應用層加密並用 Cloud KMS 管理金鑰，供應用平台使用。",
            "D": "在 Compute Engine 上設 HashiCorp Vault，並用自管金鑰與 Cloud KMS 管理金鑰，供應用平台使用。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#7",
        "no": "#7",
        "link": "https://www.examtopics.com/discussions/google/view/56798-exam-professional-cloud-architect-topic-7-question-7/",
        "question": "Your development team has created a mobile game app. You want to test the new mobile app on Android and iOS devices with a variety of configurations. You need to ensure that testing is efficient and cost-effective. What should you do?",
        "question-zh": "你的開發團隊已開發出一款手機遊戲 App。你想在多種配置的 Android 與 iOS 裝置上測試新 App，需確保測試高效且具成本效益。你該怎麼做？",
        "options": {
            "A": "Upload your mobile app to the Firebase Test Lab, and test the mobile app on Android and iOS devices.",
            "B": "Create Android and iOS VMs on Google Cloud, install the mobile app on the VMs, and test the mobile app.",
            "C": "Create Android and iOS containers on Google Kubernetes Engine (GKE), install the mobile app on the containers, and test the mobile app.",
            "D": "Upload your mobile app with different configurations to Firebase Hosting and test each configuration."
        },
        "options-zh": {
            "A": "將手機 App 上傳至 Firebase Test Lab，在 Android 與 iOS 裝置上測試。",
            "B": "在 Google Cloud 建立 Android 與 iOS VM，安裝並測試 App。",
            "C": "在 GKE 建立 Android 與 iOS 容器，安裝並測試 App。",
            "D": "將不同配置的 App 上傳至 Firebase Hosting 並逐一測試。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#8",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/11084-exam-professional-cloud-architect-topic-8-question-1/",
        "question": "TerramEarth's CTO wants to use the raw data from connected vehicles to help identify approximately when a vehicle in the field will have a catastrophic failure.\n\nYou want to allow analysts to centrally query the vehicle data.\n\nWhich architecture should you recommend?",
        "question-zh": "TerramEarth 的 CTO 希望利用連網車輛的原始資料，協助預測車輛在現場發生重大故障的大致時間。你希望分析師能集中查詢車輛資料。你會建議哪種架構？",
        "options": {
            "A": "Image 1",
            "B": "Image 2",
            "C": "Image 3",
            "D": "Image 4"
        },
        "options-zh": {
            "A": "圖片 1",
            "B": "圖片 2",
            "C": "圖片 3",
            "D": "圖片 4"
        },
        "images": [
            "images/TerramEarth-Question-1.png",
            "images/TerramEarth-Question-2.png",
            "images/TerramEarth-Question-3.png",
            "images/TerramEarth-Question-4.png"
        ],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#8",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/11085-exam-professional-cloud-architect-topic-8-question-2/",
        "question": "The TerramEarth development team wants to create an API to meet the company's business requirements. You want the development team to focus their development effort on business value versus creating a custom framework.\n\nWhich method should they use?",
        "question-zh": "TerramEarth 開發團隊希望建立 API 以滿足公司業務需求。你希望團隊專注於業務價值而非自訂框架。應該採用哪種方法？",
        "options": {
            "A": "Use Google App Engine with Google Cloud Endpoints. Focus on an API for dealers and partners",
            "B": "Use Google App Engine with a JAX-RS Jersey Java-based framework. Focus on an API for the public",
            "C": "Use Google App Engine with the Swagger (Open API Specification) framework. Focus on an API for the public",
            "D": "Use Google Container Engine with a Django Python container. Focus on an API for the public",
            "E": "Use Google Container Engine with a Tomcat container with the Swagger (Open API Specification) framework. Focus on an API for dealers and partners"
        },
        "options-zh": {
            "A": "使用 Google App Engine 搭配 Google Cloud Endpoints，專注於經銷商與合作夥伴的 API。",
            "B": "使用 Google App Engine 搭配 JAX-RS Jersey Java 框架，專注於對外 API。",
            "C": "使用 Google App Engine 搭配 Swagger（Open API 規範）框架，專注於對外 API。",
            "D": "使用 Google Container Engine 搭配 Django Python 容器，專注於對外 API。",
            "E": "使用 Google Container Engine 搭配 Tomcat 與 Swagger 框架，專注於經銷商與合作夥伴的 API。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#8",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/9449-exam-professional-cloud-architect-topic-8-question-3/",
        "question": "Your development team has created a structured API to retrieve vehicle data. They want to allow third parties to develop tools for dealerships that use this vehicle event data. You want to support delegated authorization against this data.\n\nWhat should you do?",
        "question-zh": "你的開發團隊已建立結構化 API 以取得車輛資料，並希望第三方能為經銷商開發工具。你想支援委託授權，該怎麼做？",
        "options": {
            "A": "Build or leverage an OAuth-compatible access control system",
            "B": "Build SAML 2.0 SSO compatibility into your authentication system",
            "C": "Restrict data access based on the source IP address of the partner systems",
            "D": "Create secondary credentials for each dealer that can be given to the trusted third party"
        },
        "options-zh": {
            "A": "建置或利用支援 OAuth 的存取控制系統。",
            "B": "在驗證系統中加入 SAML 2.0 SSO 相容性。",
            "C": "根據合作夥伴系統來源 IP 限制資料存取。",
            "D": "為每個經銷商建立次要憑證，提供給受信任的第三方。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#8",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/6657-exam-professional-cloud-architect-topic-8-question-4/",
        "question": "TerramEarth plans to connect all 20 million vehicles in the field to the cloud. This increases the volume to 20 million 600 byte records a second for 40 TB an hour.\n\nHow should you design the data ingestion?",
        "question-zh": "TerramEarth 計畫將 2,000 萬輛車連上雲端，每秒產生 2,000 萬筆 600 位元組紀錄，每小時 40TB。你該如何設計資料匯入？",
        "options": {
            "A": "Vehicles write data directly to GCS",
            "B": "Vehicles write data directly to Google Cloud Pub/Sub",
            "C": "Vehicles stream data directly to Google BigQuery",
            "D": "Vehicles continue to write data using the existing system (FTP)"
        },
        "options-zh": {
            "A": "車輛直接寫入 GCS。",
            "B": "車輛直接寫入 Google Cloud Pub/Sub。",
            "C": "車輛直接串流資料到 Google BigQuery。",
            "D": "車輛繼續用現有 FTP 系統寫入資料。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#8",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/8687-exam-professional-cloud-architect-topic-8-question-5/",
        "question": "You analyzed TerramEarth's business requirement to reduce downtime, and found that they can achieve a majority of time saving by reducing customer's wait time for parts. You decided to focus on reduction of the 3 weeks aggregate reporting time.\n\nWhich modifications to the company's processes should you recommend?",
        "question-zh": "你分析 TerramEarth 的業務需求，發現減少客戶等候零件時間可大幅縮短停機時數，因此決定著重於縮短 3 週的彙總報告時間。你會建議公司流程做哪些調整？",
        "options": {
            "A": "Migrate from CSV to binary format, migrate from FTP to SFTP transport, and develop machine learning analysis of metrics",
            "B": "Migrate from FTP to streaming transport, migrate from CSV to binary format, and develop machine learning analysis of metrics",
            "C": "Increase fleet cellular connectivity to 80%, migrate from FTP to streaming transport, and develop machine learning analysis of metrics",
            "D": "Migrate from FTP to SFTP transport, develop machine learning analysis of metrics, and increase dealer local inventory by a fixed factor"
        },
        "options-zh": {
            "A": "從 CSV 轉為二進位格式，FTP 轉為 SFTP 傳輸，並開發機器學習指標分析。",
            "B": "FTP 轉為串流傳輸，CSV 轉為二進位格式，並開發機器學習指標分析。",
            "C": "將車隊行動連線率提升至 80%，FTP 轉為串流傳輸，並開發機器學習指標分析。",
            "D": "FTP 轉為 SFTP 傳輸，開發機器學習指標分析，並固定增加經銷商庫存。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#8",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/12205-exam-professional-cloud-architect-topic-8-question-6/",
        "question": "Which of TerramEarth's legacy enterprise processes will experience significant change as a result of increased Google Cloud Platform adoption?",
        "question-zh": "隨著 TerramEarth 擴大採用 Google Cloud Platform，下列哪項傳統企業流程將有重大改變？",
        "options": {
            "A": "Opex/capex allocation, LAN changes, capacity planning",
            "B": "Capacity planning, TCO calculations, opex/capex allocation",
            "C": "Capacity planning, utilization measurement, data center expansion",
            "D": "Data Center expansion, TCO calculations, utilization measurement"
        },
        "options-zh": {
            "A": "營運/資本支出分配、LAN 變更、容量規劃。",
            "B": "容量規劃、TCO 計算、營運/資本支出分配。",
            "C": "容量規劃、使用率量測、資料中心擴建。",
            "D": "資料中心擴建、TCO 計算、使用率量測。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#8",
        "no": "#7",
        "link": "https://www.examtopics.com/discussions/google/view/6485-exam-professional-cloud-architect-topic-8-question-7/",
        "question": "To speed up data retrieval, more vehicles will be upgraded to cellular connections and be able to transmit data to the ETL process. The current FTP process is error-prone and restarts the data transfer from the start of the file when connections fail, which happens often. You want to improve the reliability of the solution and minimize data transfer time on the cellular connections.\n\nWhat should you do?",
        "question-zh": "為加快資料擷取，更多車輛將升級為行動連線並能傳送資料至 ETL 流程。現有 FTP 流程易出錯且連線失敗時會重傳整個檔案。你想提升解決方案可靠性並減少行動連線的資料傳輸時間，該怎麼做？",
        "options": {
            "A": "Use one Google Container Engine cluster of FTP servers. Save the data to a Multi-Regional bucket. Run the ETL process using data in the bucket",
            "B": "Use multiple Google Container Engine clusters running FTP servers located in different regions. Save the data to Multi-Regional buckets in US, EU, and Asia. Run the ETL process using the data in the bucket",
            "C": "Directly transfer the files to different Google Cloud Multi-Regional Storage bucket locations in US, EU, and Asia using Google APIs over HTTP(S). Run the ETL process using the data in the bucket",
            "D": "Directly transfer the files to a different Google Cloud Regional Storage bucket location in US, EU, and Asia using Google APIs over HTTP(S). Run the ETL process to retrieve the data from each Regional bucket"
        },
        "options-zh": {
            "A": "用一組 Google Container Engine FTP 叢集，資料存 Multi-Regional bucket，ETL 直接處理 bucket 內資料。",
            "B": "多組 Google Container Engine FTP 叢集分布各區，資料存美、歐、亞多區 bucket，ETL 直接處理 bucket 內資料。",
            "C": "直接用 Google API 將檔案傳到美、歐、亞多區 Multi-Regional Storage bucket，ETL 直接處理 bucket 內資料。",
            "D": "直接用 Google API 傳到美、歐、亞不同 Regional Storage bucket，ETL 從各區 bucket 擷取資料。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#8",
        "no": "#8",
        "link": "https://www.examtopics.com/discussions/google/view/8248-exam-professional-cloud-architect-topic-8-question-8/",
        "question": "TerramEarth's 20 million vehicles are scattered around the world. Based on the vehicle's location, its telemetry data is stored in a Google Cloud Storage (GCS) regional bucket (US, Europe, or Asia). The CTO has asked you to run a report on the raw telemetry data to determine why vehicles are breaking down after 100 K miles. You want to run this job on all the data.\n\nWhat is the most cost-effective way to run this job?",
        "question-zh": "TerramEarth 的 2,000 萬輛車分布全球，根據位置將遙測資料存於 GCS 區域 bucket（美、歐、亞）。CTO 要你分析原始資料找出車輛 10 萬英里後故障原因。你想對所有資料執行分析，最省錢的方法是？",
        "options": {
            "A": "Move all the data into 1 zone, then launch a Cloud Dataproc cluster to run the job",
            "B": "Move all the data into 1 region, then launch a Google Cloud Dataproc cluster to run the job",
            "C": "Launch a cluster in each region to preprocess and compress the raw data, then move the data into a multi-region bucket and use a Dataproc cluster to finish the job",
            "D": "Launch a cluster in each region to preprocess and compress the raw data, then move the data into a region bucket and use a Cloud Dataproc cluster to finish the job"
        },
        "options-zh": {
            "A": "將所有資料集中到一個 zone，再啟動 Cloud Dataproc 叢集執行分析。",
            "B": "將所有資料集中到一個 region，再啟動 Cloud Dataproc 叢集執行分析。",
            "C": "各區啟動叢集預處理與壓縮原始資料，再移到多區 bucket，最後用 Dataproc 叢集完成分析。",
            "D": "各區啟動叢集預處理與壓縮原始資料，再移到區域 bucket，最後用 Cloud Dataproc 叢集完成分析。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#8",
        "no": "#9",
        "link": "https://www.examtopics.com/discussions/google/view/8249-exam-professional-cloud-architect-topic-8-question-9/",
        "question": "TerramEarth has equipped all connected trucks with servers and sensors to collect telemetry data. Next year they want to use the data to train machine learning models. They want to store this data in the cloud while reducing costs.\n\nWhat should they do?",
        "question-zh": "TerramEarth 為所有連網卡車安裝伺服器與感測器收集遙測資料，明年要用這些資料訓練機器學習模型。希望雲端儲存並降低成本，該怎麼做？",
        "options": {
            "A": "Have the vehicle's computer compress the data in hourly snapshots, and store it in a Google Cloud Storage (GCS) Nearline bucket",
            "B": "Push the telemetry data in real-time to a streaming dataflow job that compresses the data, and store it in Google BigQuery",
            "C": "Push the telemetry data in real-time to a streaming dataflow job that compresses the data, and store it in Cloud Bigtable",
            "D": "Have the vehicle's computer compress the data in hourly snapshots, and store it in a GCS Coldline bucket"
        },
        "options-zh": {
            "A": "車載電腦每小時壓縮快照，存到 GCS Nearline bucket。",
            "B": "即時推送遙測資料到串流 dataflow 壓縮後存 Google BigQuery。",
            "C": "即時推送遙測資料到串流 dataflow 壓縮後存 Cloud Bigtable。",
            "D": "車載電腦每小時壓縮快照，存到 GCS Coldline bucket。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#8",
        "no": "#10",
        "link": "https://www.examtopics.com/discussions/google/view/12751-exam-professional-cloud-architect-topic-8-question-10/",
        "question": "Your agricultural division is experimenting with fully autonomous vehicles. You want your architecture to promote strong security during vehicle operation.\n\nWhich two architectures should you consider? (Choose two.)",
        "question-zh": "你的農業部門正在測試全自動車輛。你希望架構能在車輛運作時強化安全，下列哪兩種架構應考慮？（選兩項）",
        "options": {
            "A": "Treat every micro service call between modules on the vehicle as untrusted.",
            "B": "Require IPv6 for connectivity to ensure a secure address space.",
            "C": "Use a trusted platform module (TPM) and verify firmware and binaries on boot.",
            "D": "Use a functional programming language to isolate code execution cycles.",
            "E": "Use multiple connectivity subsystems for redundancy.",
            "F": "Enclose the vehicle's drive electronics in a Faraday cage to isolate chips."
        },
        "options-zh": {
            "A": "將車上模組間每次微服務呼叫都視為不可信。",
            "B": "要求連線必須用 IPv6 以確保安全位址空間。",
            "C": "使用可信平台模組（TPM），開機時驗證韌體與執行檔。",
            "D": "用函數式程式語言隔離程式執行週期。",
            "E": "多重連線子系統備援。",
            "F": "將驅動電子元件包覆於法拉第籠內隔離晶片。"
        },
        "images": [],
        "answers": [
            "A",
            "C"
        ]
    },
    {
        "topic": "#8",
        "no": "#11",
        "link": "https://www.examtopics.com/discussions/google/view/8250-exam-professional-cloud-architect-topic-8-question-11/",
        "question": "Operational parameters such as oil pressure are adjustable on each of TerramEarth's vehicles to increase their efficiency, depending on their environmental conditions. Your primary goal is to increase the operating efficiency of all 20 million cellular and unconnected vehicles in the field.\n\nHow can you accomplish this goal?",
        "question-zh": "TerramEarth 每輛車的運作參數（如油壓）可依環境調整以提升效率。你的首要目標是提升全球 2,000 萬輛連網與未連網車輛的運作效率。你該怎麼做？",
        "options": {
            "A": "Have you engineers inspect the data for patterns, and then create an algorithm with rules that make operational adjustments automatically",
            "B": "Capture all operating data, train machine learning models that identify ideal operations, and run locally to make operational adjustments automatically",
            "C": "Implement a Google Cloud Dataflow streaming job with a sliding window, and use Google Cloud Messaging (GCM) to make operational adjustments automatically",
            "D": "Capture all operating data, train machine learning models that identify ideal operations, and host in Google Cloud Machine Learning (ML) Platform to make operational adjustments automatically"
        },
        "options-zh": {
            "A": "由工程師檢查資料找出模式，再寫演算法自動調整運作參數。",
            "B": "收集所有運作資料，訓練機器學習模型找出最佳運作，並於本地自動調整。",
            "C": "用 Google Cloud Dataflow 串流作業與滑動視窗，並用 GCM 自動調整運作。",
            "D": "收集所有運作資料，訓練機器學習模型找出最佳運作，並部署於 Google Cloud ML 平台自動調整。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#9",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/6489-exam-professional-cloud-architect-topic-9-question-1/",
        "question": "For this question, refer to the TerramEarth case study. To be compliant with European GDPR regulation, TerramEarth is required to delete data generated from its European customers after a period of 36 months when it contains personal data. In the new architecture, this data will be stored in both Cloud Storage and BigQuery. What should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。為符合法國 GDPR，含個資的歐洲客戶資料需於 36 個月後刪除。新架構下資料存於 Cloud Storage 與 BigQuery，該怎麼做？",
        "options": {
            "A": "Create a BigQuery table for the European data, and set the table retention period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months.",
            "B": "Create a BigQuery table for the European data, and set the table retention period to 36 months. For Cloud Storage, use gsutil to create a SetStorageClass to NONE action when with an Age condition of 36 months.",
            "C": "Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to enable lifecycle management using a DELETE action with an Age condition of 36 months.",
            "D": "Create a BigQuery time-partitioned table for the European data, and set the partition expiration period to 36 months. For Cloud Storage, use gsutil to create a SetStorageClass to NONE action with an Age condition of 36 months."
        },
        "options-zh": {
            "A": "為歐洲資料建立 BigQuery 資料表，設保留期 36 個月。Cloud Storage 用 gsutil 設定 36 個月自動刪除。",
            "B": "為歐洲資料建立 BigQuery 資料表，設保留期 36 個月。Cloud Storage 用 gsutil 設定 36 個月自動轉為 NONE。",
            "C": "為歐洲資料建立 BigQuery 分區表，設分區過期 36 個月。Cloud Storage 用 gsutil 設定 36 個月自動刪除。",
            "D": "為歐洲資料建立 BigQuery 分區表，設分區過期 36 個月。Cloud Storage 用 gsutil 設定 36 個月自動轉為 NONE。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#9",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/57128-exam-professional-cloud-architect-topic-9-question-2/",
        "question": "For this question, refer to the TerramEarth case study. TerramEarth has decided to store data files in Cloud Storage. You need to configure Cloud Storage lifecycle rule to store 1 year of data and minimize file storage cost.\n\nWhich two actions should you take?",
        "question-zh": "本題請參考 TerramEarth 案例。公司決定將資料檔案存於 Cloud Storage。你需設定生命週期規則，保存一年並降低儲存成本。應採取哪兩項措施？",
        "options": {
            "A": "Create a Cloud Storage lifecycle rule with Age: ג€30ג€, Storage Class: ג€Standardג€, and Action: ג€Set to Coldlineג€, and create a second GCS life-cycle rule with Age: ג€365ג€, Storage Class: ג€Coldlineג€, and Action: ג€Deleteג€.",
            "B": "Create a Cloud Storage lifecycle rule with Age: ג€30ג€, Storage Class: ג€Coldlineג€, and Action: ג€Set to Nearlineג€, and create a second GCS life-cycle rule with Age: ג€91ג€, Storage Class: ג€Coldlineג€, and Action: ג€Set to Nearlineג€.",
            "C": "Create a Cloud Storage lifecycle rule with Age: ג€90ג€, Storage Class: ג€Standardג€, and Action: ג€Set to Nearlineג€, and create a second GCS life-cycle rule with Age: ג€91ג€, Storage Class: ג€Nearlineג€, and Action: ג€Set to Coldlineג€.",
            "D": "Create a Cloud Storage lifecycle rule with Age: ג€30ג€, Storage Class: ג€Standardג€, and Action: ג€Set to Coldlineג€, and create a second GCS life-cycle rule with Age: ג€365ג€, Storage Class: ג€Nearlineג€, and Action: ג€Deleteג€."
        },
        "options-zh": {
            "A": "建立 Cloud Storage 生命週期規則，30 天後轉 Coldline，365 天後刪除。",
            "B": "建立 Cloud Storage 生命週期規則，30 天後轉 Coldline，91 天後轉 Nearline。",
            "C": "建立 Cloud Storage 生命週期規則，90 天後轉 Nearline，91 天後轉 Coldline。",
            "D": "建立 Cloud Storage 生命週期規則，30 天後轉 Coldline，365 天後 Nearline 並刪除。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#9",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/7260-exam-professional-cloud-architect-topic-9-question-3/",
        "question": "For this question, refer to the TerramEarth case study. You need to implement a reliable, scalable GCP solution for the data warehouse for your company, TerramEarth.\n\nConsidering the TerramEarth business and technical requirements, what should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。你需為公司建置可靠且可擴展的 GCP 數據倉儲解決方案。根據業務與技術需求，該怎麼做？",
        "options": {
            "A": "Replace the existing data warehouse with BigQuery. Use table partitioning.",
            "B": "Replace the existing data warehouse with a Compute Engine instance with 96 CPUs.",
            "C": "Replace the existing data warehouse with BigQuery. Use federated data sources.",
            "D": "Replace the existing data warehouse with a Compute Engine instance with 96 CPUs. Add an additional Compute Engine preemptible instance with 32 CPUs."
        },
        "options-zh": {
            "A": "用 BigQuery 取代現有數據倉儲，並使用分區表。",
            "B": "用 96 核心 Compute Engine 取代現有數據倉儲。",
            "C": "用 BigQuery 取代現有數據倉儲，並用聯邦資料來源。",
            "D": "用 96 核心 Compute Engine 取代現有數據倉儲，並加一台 32 核心可搶佔實例。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#9",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/13467-exam-professional-cloud-architect-topic-9-question-4/",
        "question": "For this question, refer to the TerramEarth case study. A new architecture that writes all incoming data to BigQuery has been introduced. You notice that the data is dirty, and want to ensure data quality on an automated daily basis while managing cost.\n\nWhat should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。新架構將所有資料寫入 BigQuery，但你發現資料品質不佳，想自動化每日清理並控管成本，該怎麼做？",
        "options": {
            "A": "Set up a streaming Cloud Dataflow job, receiving data by the ingestion process. Clean the data in a Cloud Dataflow pipeline.",
            "B": "Create a Cloud Function that reads data from BigQuery and cleans it. Trigger the Cloud Function from a Compute Engine instance.",
            "C": "Create a SQL statement on the data in BigQuery, and save it as a view. Run the view daily, and save the result to a new table.",
            "D": "Use Cloud Dataprep and configure the BigQuery tables as the source. Schedule a daily job to clean the data."
        },
        "options-zh": {
            "A": "設置 Cloud Dataflow 串流作業，於匯入流程中清理資料。",
            "B": "建立 Cloud Function 讀取並清理 BigQuery 資料，並由 Compute Engine 觸發。",
            "C": "在 BigQuery 上寫 SQL，存成 view，每日執行並存新表。",
            "D": "用 Cloud Dataprep 設定 BigQuery 為來源，每日排程清理。"
        },
        "images": [],
        "answers": [
            "D"
        ]
    },
    {
        "topic": "#9",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/14729-exam-professional-cloud-architect-topic-9-question-5/",
        "question": "For this question, refer to the TerramEarth case study. Considering the technical requirements, how should you reduce the unplanned vehicle downtime in GCP?",
        "question-zh": "本題請參考 TerramEarth 案例。根據技術需求，如何在 GCP 上減少車輛非預期停機？",
        "options": {
            "A": "Use BigQuery as the data warehouse. Connect all vehicles to the network and stream data into BigQuery using Cloud Pub/Sub and Cloud Dataflow. Use Google Data Studio for analysis and reporting.",
            "B": "Use BigQuery as the data warehouse. Connect all vehicles to the network and upload gzip files to a Multi-Regional Cloud Storage bucket using gcloud. Use Google Data Studio for analysis and reporting.",
            "C": "Use Cloud Dataproc Hive as the data warehouse. Upload gzip files to a Multi-Regional Cloud Storage bucket. Upload this data into BigQuery using gcloud. Use Google Data Studio for analysis and reporting.",
            "D": "Use Cloud Dataproc Hive as the data warehouse. Directly stream data into partitioned Hive tables. Use Pig scripts to analyze data."
        },
        "options-zh": {
            "A": "用 BigQuery 當數據倉儲，所有車輛連網後用 Cloud Pub/Sub 與 Dataflow 串流資料進 BigQuery，分析報表用 Google Data Studio。",
            "B": "用 BigQuery 當數據倉儲，所有車輛連網後用 gcloud 上傳 gzip 檔到多區 Cloud Storage，分析報表用 Google Data Studio。",
            "C": "用 Cloud Dataproc Hive 當數據倉儲，上傳 gzip 檔到多區 Cloud Storage，再用 gcloud 匯入 BigQuery，分析報表用 Google Data Studio。",
            "D": "用 Cloud Dataproc Hive 當數據倉儲，直接串流資料進分區 Hive 表，分析用 Pig script。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#9",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/6785-exam-professional-cloud-architect-topic-9-question-6/",
        "question": "For this question, refer to the TerramEarth case study. You are asked to design a new architecture for the ingestion of the data of the 200,000 vehicles that are connected to a cellular network. You want to follow Google-recommended practices.\n\nConsidering the technical requirements, which components should you use for the ingestion of the data?",
        "question-zh": "本題請參考 TerramEarth 案例。你需設計新架構以匯入 20 萬輛連網車輛資料，並遵循 Google 建議做法。根據技術需求，應用哪些元件？",
        "options": {
            "A": "Google Kubernetes Engine with an SSL Ingress",
            "B": "Cloud IoT Core with public/private key pairs",
            "C": "Compute Engine with project-wide SSH keys",
            "D": "Compute Engine with specific SSH keys"
        },
        "options-zh": {
            "A": "Google Kubernetes Engine 搭配 SSL Ingress。",
            "B": "Cloud IoT Core 搭配公私鑰。",
            "C": "Compute Engine 搭配專案層級 SSH 金鑰。",
            "D": "Compute Engine 搭配專屬 SSH 金鑰。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#10",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/60524-exam-professional-cloud-architect-topic-10-question-1/",
        "question": "For this question, refer to the TerramEarth case study. You start to build a new application that uses a few Cloud Functions for the backend. One use case requires a Cloud Function func_display to invoke another Cloud Function func_query. You want func_query only to accept invocations from func_display. You also want to follow Google's recommended best practices. What should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。你開始建置新應用，後端用多個 Cloud Functions。有一個情境需 func_display 呼叫 func_query，且只允許 func_display 呼叫 func_query，並遵循 Google 最佳實踐。你該怎麼做？",
        "options": {
            "A": "Create a token and pass it in as an environment variable to func_display. When invoking func_query, include the token in the request. Pass the same token to func_query and reject the invocation if the tokens are different.",
            "B": "Make func_query 'Require authentication.' Create a unique service account and associate it to func_display. Grant the service account invoker role for func_query. Create an id token in func_display and include the token to the request when invoking func_query.",
            "C": "Make func_query 'Require authentication' and only accept internal traffic. Create those two functions in the same VPC. Create an ingress firewall rule for func_query to only allow traffic from func_display.",
            "D": "Create those two functions in the same project and VPC. Make func_query only accept internal traffic. Create an ingress firewall for func_query to only allow traffic from func_display. Also, make sure both functions use the same service account."
        },
        "options-zh": {
            "A": "建立 token 並設為 func_display 環境變數，呼叫 func_query 時帶入 token，func_query 驗證 token 不同則拒絕。",
            "B": "func_query 設定需驗證，建立專屬服務帳號給 func_display，授權其為 func_query invoker，func_display 產生 id token 並帶入請求。",
            "C": "func_query 設定需驗證且僅允許內部流量，兩 function 建於同一 VPC，func_query 設 ingress firewall 僅允許 func_display。",
            "D": "兩 function 建於同專案與 VPC，func_query 僅允許內部流量，設 ingress firewall 僅允許 func_display，並用同一服務帳號。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#10",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/60525-exam-professional-cloud-architect-topic-10-question-2/",
        "question": "For this question, refer to the TerramEarth case study. You have broken down a legacy monolithic application into a few containerized RESTful microservices.\n\nYou want to run those microservices on Cloud Run. You also want to make sure the services are highly available with low latency to your customers. What should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。你已將傳統單體應用拆分為多個容器化 RESTful 微服務，想在 Cloud Run 執行並確保高可用與低延遲。你該怎麼做？",
        "options": {
            "A": "Deploy Cloud Run services to multiple availability zones. Create Cloud Endpoints that point to the services. Create a global HTTP(S) Load Balancing instance and attach the Cloud Endpoints to its backend.",
            "B": "Deploy Cloud Run services to multiple regions. Create serverless network endpoint groups pointing to the services. Add the serverless NEGs to a backend service that is used by a global HTTP(S) Load Balancing instance.",
            "C": "Deploy Cloud Run services to multiple regions. In Cloud DNS, create a latency-based DNS name that points to the services.",
            "D": "Deploy Cloud Run services to multiple availability zones. Create a TCP/IP global load balancer. Add the Cloud Run Endpoints to its backend service."
        },
        "options-zh": {
            "A": "Cloud Run 服務部署多可用區，設 Cloud Endpoints 指向服務，建全球 HTTP(S) 負載平衡器並掛 Cloud Endpoints。",
            "B": "Cloud Run 服務部署多區，建 serverless NEG 指向服務，將其加到全球 HTTP(S) 負載平衡器後端。",
            "C": "Cloud Run 服務部署多區，Cloud DNS 設延遲型 DNS 名稱指向服務。",
            "D": "Cloud Run 服務部署多可用區，建 TCP/IP 全球負載平衡器並加 Cloud Run Endpoints。"
        },
        "images": [],
        "answers": [
            "B"
        ]
    },
    {
        "topic": "#10",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/60557-exam-professional-cloud-architect-topic-10-question-3/",
        "question": "For this question, refer to the TerramEarth case study. You are migrating a Linux-based application from your private data center to Google Cloud. The TerramEarth security team sent you several recent Linux vulnerabilities published by Common Vulnerabilities and Exposures (CVE). You need assistance in understanding how these vulnerabilities could impact your migration. What should you do? (Choose two.)",
        "question-zh": "本題請參考 TerramEarth 案例。你正將 Linux 應用從私有資料中心遷移到 Google Cloud，安全團隊提供多個 CVE 漏洞。你需了解這些漏洞對遷移的影響，該怎麼做？（選兩項）",
        "options": {
            "A": "Open a support case regarding the CVE and chat with the support engineer.",
            "B": "Read the CVEs from the Google Cloud Status Dashboard to understand the impact.",
            "C": "Read the CVEs from the Google Cloud Platform Security Bulletins to understand the impact.",
            "D": "Post a question regarding the CVE in Stack Overflow to get an explanation.",
            "E": "Post a question regarding the CVE in a Google Cloud discussion group to get an explanation."
        },
        "options-zh": {
            "A": "針對 CVE 建立支援案件並與工程師討論。",
            "B": "從 Google Cloud 狀態儀表板查閱 CVE 影響。",
            "C": "從 Google Cloud Platform 安全公告查閱 CVE 影響。",
            "D": "在 Stack Overflow 發問取得說明。",
            "E": "在 Google Cloud 討論區發問取得說明。"
        },
        "images": [],
        "answers": [
            "A",
            "C"
        ]
    },
    {
        "topic": "#10",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/60562-exam-professional-cloud-architect-topic-10-question-4/",
        "question": "For this question, refer to the TerramEarth case study. TerramEarth has a legacy web application that you cannot migrate to cloud. However, you still want to build a cloud-native way to monitor the application. If the application goes down, you want the URL to point to a \"Site is unavailable\" page as soon as possible. You also want your Ops team to receive a notification for the issue. You need to build a reliable solution for minimum cost. What should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。公司有無法遷移上雲的傳統網頁應用，但你想用雲端原生方式監控。若應用掛掉，URL 要能盡快導向「網站暫時無法使用」頁，並通知運維團隊。你需建低成本可靠方案，該怎麼做？",
        "options": {
            "A": "Create a scheduled job in Cloud Run to invoke a container every minute. The container will check the application URL. If the application is down, switch the URL to the \"Site is unavailable\" page, and notify the Ops team.",
            "B": "Create a cron job on a Compute Engine VM that runs every minute. The cron job invokes a Python program to check the application URL. If the application is down, switch the URL to the \"Site is unavailable\" page, and notify the Ops team.",
            "C": "Create a Cloud Monitoring uptime check to validate the application URL. If it fails, put a message in a Pub/Sub queue that triggers a Cloud Function to switch the URL to the \"Site is unavailable\" page, and notify the Ops team.",
            "D": "Use Cloud Error Reporting to check the application URL. If the application is down, switch the URL to the \"Site is unavailable\" page, and notify the Ops team."
        },
        "options-zh": {
            "A": "Cloud Run 設排程每分鐘呼叫容器檢查應用 URL，若掛掉則切換 URL 並通知運維。",
            "B": "Compute Engine VM 設 cron job 每分鐘執行 Python 檢查 URL，若掛掉則切換 URL 並通知運維。",
            "C": "Cloud Monitoring 設 uptime 檢查 URL，失敗則送 Pub/Sub 觸發 Cloud Function 切換 URL 並通知運維。",
            "D": "用 Cloud Error Reporting 檢查 URL，若掛掉則切換 URL 並通知運維。"
        },
        "images": [],
        "answers": [
            "C"
        ]
    },
    {
        "topic": "#10",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/60563-exam-professional-cloud-architect-topic-10-question-5/",
        "question": "For this question, refer to the TerramEarth case study. You are building a microservice-based application for TerramEarth. The application is based on Docker containers. You want to follow Google-recommended practices to build the application continuously and store the build artifacts. What should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。你正為公司建置微服務應用，採用 Docker 容器。你想遵循 Google 建議持續建置並儲存產物，該怎麼做？",
        "options": {
            "A": "Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build container images for each microservice, and tag them using the code commit hash. Push the images to the Container Registry.",
            "B": "Configure a trigger in Cloud Build for new source changes. The trigger invokes build jobs and build container images for the microservices. Tag the images with a version number, and push them to Cloud Storage.",
            "C": "Create a Scheduler job to check the repo every minute. For any new change, invoke Cloud Build to build container images for the microservices. Tag the images using the current timestamp, and push them to the Container Registry.",
            "D": "Configure a trigger in Cloud Build for new source changes. Invoke Cloud Build to build one container image, and tag the image with the label 'latest.' Push the image to the Container Registry."
        },
        "options-zh": {
            "A": "Cloud Build 設新原始碼變更觸發器，建每個微服務容器映像並用 commit hash 標記，推送到 Container Registry。",
            "B": "Cloud Build 設新原始碼變更觸發器，觸發建置微服務映像並用版本號標記，推送到 Cloud Storage。",
            "C": "設 Scheduler 每分鐘檢查 repo，有新變更則 Cloud Build 建映像並用時間戳標記，推送到 Container Registry。",
            "D": "Cloud Build 設新原始碼變更觸發器，僅建一個映像並標記 latest，推送到 Container Registry。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#10",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/60483-exam-professional-cloud-architect-topic-10-question-6/",
        "question": "For this question, refer to the TerramEarth case study. TerramEarth has about 1 petabyte (PB) of vehicle testing data in a private data center. You want to move the data to Cloud Storage for your machine learning team. Currently, a 1-Gbps interconnect link is available for you. The machine learning team wants to start using the data in a month. What should you do?",
        "question-zh": "本題請參考 TerramEarth 案例。公司有約 1PB 車輛測試資料在私有資料中心，需一個月內搬到 Cloud Storage 給機器學習團隊用，目前有 1Gbps 連線。你該怎麼做？",
        "options": {
            "A": "Request Transfer Appliances from Google Cloud, export the data to appliances, and return the appliances to Google Cloud.",
            "B": "Configure the Storage Transfer service from Google Cloud to send the data from your data center to Cloud Storage.",
            "C": "Make sure there are no other users consuming the 1Gbps link, and use multi-thread transfer to upload the data to Cloud Storage.",
            "D": "Export files to an encrypted USB device, send the device to Google Cloud, and request an import of the data to Cloud Storage."
        },
        "options-zh": {
            "A": "向 Google Cloud 申請 Transfer Appliance，匯出資料後寄回。",
            "B": "設定 Google Cloud Storage Transfer 服務，將資料從資料中心傳到 Cloud Storage。",
            "C": "確保 1Gbps 連線無其他用戶，並用多執行緒上傳資料到 Cloud Storage。",
            "D": "匯出檔案到加密 USB，寄給 Google Cloud 並請求匯入 Cloud Storage。"
        },
        "images": [],
        "answers": [
            "A"
        ]
    },
    {
        "topic": "#11",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/6660-exam-professional-cloud-architect-topic-11-question-1/",
        "question": "The Dress4Win security team has disabled external SSH access into production virtual machines (VMs) on Google Cloud Platform (GCP).\nThe operations team needs to remotely manage the VMs, build and push Docker containers, and manage Google Cloud Storage objects.\\nWhat can they do?",
        "question-zh": "Dress4Win 安全團隊已禁用對 Google Cloud Platform (GCP) 上生產虛擬機器 (VM) 的外部 SSH 存取。\n營運團隊需要遠端管理 VM、建置和推送 Docker 容器，以及管理 Google Cloud Storage 物件。\n他們可以做什麼？",
        "options": {
            "A": "Grant the operations engineer access to use Google Cloud Shell.",
            "B": "Configure a VPN connection to GCP to allow SSH access to the cloud VMs.",
            "C": "Develop a new access request process that grants temporary SSH access to cloud VMs when an operations engineer needs to perform a task.",
            "D": "Have the development team build an API service that allows the operations team to execute specific remote procedure calls to accomplish their tasks."
        },
        "options-zh": {
            "A": "授予營運工程師使用 Google Cloud Shell 的權限",
            "B": "配置 VPN 連接到 GCP，以允許 SSH 存取雲端 VM",
            "C": "開發新的存取請求流程，當營運工程師需要執行任務時授予臨時 SSH 存取權限",
            "D": "讓開發團隊建置 API 服務，允許營運團隊執行特定的遠端程序呼叫來完成任務"
        },
        "images": [],
        "answers": ["A"]
    },
    {
        "topic": "#11",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/14731-exam-professional-cloud-architect-topic-11-question-2/",
        "question": "At Dress4Win, an operations engineer wants to create a tow-cost solution to remotely archive copies of database backup files.\nThe database files are compressed tar files stored in their current data center.\nHow should he proceed?",
        "question-zh": "在 Dress4Win，一位營運工程師想要建立一個低成本的解決方案來遠端存檔資料庫備份檔案的副本。\n這些資料庫檔案是儲存在他們目前資料中心的壓縮 tar 檔案。\n他應該如何進行？",
        "options": {
            "A": "Create a cron script using gsutil to copy the files to a Coldline Storage bucket.",
            "B": "Create a cron script using gsutil to copy the files to a Regional Storage bucket.",
            "C": "Create a Cloud Storage Transfer Service Job to copy the files to a Coldline Storage bucket.",
            "D": "Create a Cloud Storage Transfer Service job to copy the files to a Regional Storage bucket."
        },
        "options-zh": {
            "A": "使用 gsutil 建立 cron 腳本將檔案複製到 Coldline Storage 儲存桶",
            "B": "使用 gsutil 建立 cron 腳本將檔案複製到 Regional Storage 儲存桶",
            "C": "建立 Cloud Storage Transfer Service 作業將檔案複製到 Coldline Storage 儲存桶",
            "D": "建立 Cloud Storage Transfer Service 作業將檔案複製到 Regional Storage 儲存桶"
        },
        "images": [],
        "answers": ["C"]
    },
    {
        "topic": "#11",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/7261-exam-professional-cloud-architect-topic-11-question-3/",
        "question": "Dress4Win has asked you to recommend machine types they should deploy their application servers to.\n" +
            "How should you proceed?",
        "question-zh": "Dress4Win 要求您推薦他們應該將應用程式伺服器部署在哪些機器類型上。\n您應該如何進行？",
        "options": {
            "A": "Perform a mapping of the on-premises physical hardware cores and RAM to the nearest machine types in the cloud.",
            "B": "Recommend that Dress4Win deploy application servers to machine types that offer the highest RAM to CPU ratio available.",
            "C": "Recommend that Dress4Win deploy into production with the smallest instances available, monitor them over time, and scale the machine type up until the desired performance is reached.",
            "D": "Identify the number of virtual cores and RAM associated with the application server virtual machines align them to a custom machine type in the cloud, monitor performance, and scale the machine types up until the desired performance is reached."
        },
        "options-zh": {
            "A": "將本地物理硬體核心和 RAM 對應到雲端最接近的機器類型",
            "B": "建議 Dress4Win 部署應用程式伺服器到提供最高 RAM 與 CPU 比率的機器類型",
            "C": "建議 Dress4Win 使用最小的可用實例部署到生產環境，隨時間監控，並將機器類型擴展直到達到期望的效能",
            "D": "識別應用程式伺服器虛擬機器的虛擬核心數和 RAM，將它們對應到雲端的自訂機器類型，監控效能，並擴展機器類型直到達到期望的效能"
        },
        "images": [],
        "answers": ["D"]
    },
    {
        "topic": "#11",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/6617-exam-professional-cloud-architect-topic-11-question-4/",
        "question": "As part of Dress4Win's plans to migrate to the cloud, they want to be able to set up a managed logging and monitoring system so they can handle spikes in their traffic load.\n" +
            "They want to ensure that:\n" +
            "* The infrastructure can be notified when it needs to scale up and down to handle the ebb and flow of usage throughout the day\n" +
            "* Their administrators are notified automatically when their application reports errors.\n" +
            "* They can filter their aggregated logs down in order to debug one piece of the application across many hosts\n" +
            "Which Google StackDriver features should they use?",
        "question-zh": "作為 Dress4Win 遷移到雲端計劃的一部分，他們希望能夠設置受管的日誌和監控系統，以便能夠處理流量負載的峰值。\n他們希望確保：\n* 基礎設施可以在需要擴展和縮減以處理一天中使用量的潮汐時接收通知\n* 當應用程式報告錯誤時，管理員會自動收到通知\n* 他們可以過濾聚合日誌，以便在多個主機上調試應用程式的一個部分\n他們應該使用哪些 Google StackDriver 功能？",
        "options": {
            "A": "Logging, Alerts, Insights, Debug",
            "B": "Monitoring, Trace, Debug, Logging",
            "C": "Monitoring, Logging, Alerts, Error Reporting",
            "D": "Monitoring, Logging, Debug, Error Report"
        },
        "options-zh": {
            "A": "Logging, Alerts, Insights, Debug",
            "B": "Monitoring, Trace, Debug, Logging",
            "C": "Monitoring, Logging, Alerts, Error Reporting",
            "D": "Monitoring, Logging, Debug, Error Report"
        },
        "images": [],
        "answers": ["C"]
    },
    {
        "topic": "#11",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/6968-exam-professional-cloud-architect-topic-11-question-5/",
        "question": "Dress4Win would like to become familiar with deploying applications to the cloud by successfully deploying some applications quickly, as is. They have asked for your recommendation.\n" +
            "What should you advise?",
        "question-zh": "Dress4Win 希望透過快速成功部署一些應用程式來熟悉將應用程式部署到雲端，按現狀部署。他們要求您的建議。\n您應該建議什麼？",
        "options": {
            "A": "Identify self-contained applications with external dependencies as a first move to the cloud.",
            "B": "Identify enterprise applications with internal dependencies and recommend these as a first move to the cloud.",
            "C": "Suggest moving their in-house databases to the cloud and continue serving requests to on-premise applications.",
            "D": "Recommend moving their message queuing servers to the cloud and continue handling requests to on-premise applications."
        },
        "options-zh": {
            "A": "識別具有外部相依性的自包含應用程式作為雲端遷移的第一步",
            "B": "識別具有內部相依性的企業應用程式，並建議這些作為雲端遷移的第一步",
            "C": "建議將他們的內部資料庫遷移到雲端，並繼續為本地應用程式提供請求服務",
            "D": "建議將他們的訊息佇列伺服器遷移到雲端，並繼續處理本地應用程式的請求"
        },
        "images": [],
        "answers": ["A"]
    },
    {
        "topic": "#11",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/9198-exam-professional-cloud-architect-topic-11-question-6/",
        "question": "Dress4Win has asked you for advice on how to migrate their on-premises MySQL deployment to the cloud.\n" +
            "They want to minimize downtime and performance impact to their on-premises solution during the migration.\n" +
            "Which approach should you recommend?",
        "question-zh": "Dress4Win 請求您就如何將他們的本地 MySQL 部署遷移到雲端提供建議。\n他們希望在遷移過程中將本地解決方案的停機時間和效能影響最小化。\n您建議採用哪種方法？",
        "options": {
            "A": "Create a dump of the on-premises MySQL master server, and then shut it down, upload it to the cloud environment, and load into a new MySQL cluster.",
            "B": "Setup a MySQL replica server/slave in the cloud environment, and configure it for asynchronous replication from the MySQL master server on-premises until cutover.",
            "C": "Create a new MySQL cluster in the cloud, configure applications to begin writing to both on premises and cloud MySQL masters, and destroy the original cluster at cutover.",
            "D": "Create a dump of the MySQL replica server into the cloud environment, load it into: Google Cloud Datastore, and configure applications to read/write to Cloud Datastore at cutover."
        },
        "options-zh": {
            "A": "建立本地 MySQL 主伺服器的傾印，然後關閉它，上傳到雲端環境，並載入新的 MySQL 叢集",
            "B": "在雲端環境中設置 MySQL 副本伺服器/從伺服器，並配置從本地 MySQL 主伺服器進行非同步複製，直到切換為止",
            "C": "在雲端建立新的 MySQL 叢集，配置應用程式同時寫入本地和雲端 MySQL 主伺服器，並在切換時銷毀原始叢集",
            "D": "將 MySQL 副本伺服器僾印到雲端環境，載入到 Google Cloud Datastore，並在切換時配置應用程式讀取/寫入 Cloud Datastore"
        },
        "images": [],
        "answers": ["B"]
    },
    {
        "topic": "#11",
        "no": "#7",
        "link": "https://www.examtopics.com/discussions/google/view/7263-exam-professional-cloud-architect-topic-11-question-7/",
        "question": "Dress4Win has configured a new uptime check with Google Stackdriver for several of their legacy services. The Stackdriver dashboard is not reporting the services as healthy.\n" +
            "What should they do?",
        "question-zh": "Dress4Win 為幾個假統服務配置了新的 Google Stackdriver 運行時間檢查。Stackdriver 儀表板沒有報告這些服務為健康狀態。\n他們應該怎麼做？",
        "options": {
            "A": "Install the Stackdriver agent on all of the legacy web servers.",
            "B": "In the Cloud Platform Console download the list of the uptime servers' IP addresses and create an inbound firewall rule",
            "C": "Configure their load balancer to pass through the User-Agent HTTP header when the value matches GoogleStackdriverMonitoring-UptimeChecks (https:// cloud.google.com/monitoring)",
            "D": "Configure their legacy web servers to allow requests that contain user-Agent HTTP header when the value matches GoogleStackdriverMonitoring- UptimeChecks (https://cloud.google.com/monitoring)"
        },
        "options-zh": {
            "A": "在所有的假統 Web 伺服器上安裝 Stackdriver 代理程式",
            "B": "在 Cloud Platform Console 中下載運行時間伺服器的 IP 位址清單並建立入站防火牆規則",
            "C": "配置負載平衡器以傳遞 User-Agent HTTP 標頭，當值符合 GoogleStackdriverMonitoring-UptimeChecks 時",
            "D": "配置假統 Web 伺服器以允許包含 User-Agent HTTP 標頭的請求，當值符合 GoogleStackdriverMonitoring-UptimeChecks 時"
        },
        "images": [],
        "answers": ["B"]
    },
    {
        "topic": "#11",
        "no": "#8",
        "link": "https://www.examtopics.com/discussions/google/view/8251-exam-professional-cloud-architect-topic-11-question-8/",
        "question": "As part of their new application experience, Dress4Wm allows customers to upload images of themselves.\n" +
            "The customer has exclusive control over who may view these images.\n" +
            "Customers should be able to upload images with minimal latency and also be shown their images quickly on the main application page when they log in.\n" +
            "Which configuration should Dress4Win use?",
        "question-zh": "作為新應用程式體驗的一部分，Dress4Win 允許客戶上傳他們自己的圖像。\n客戶對誰可以檢視這些圖像擁有專屬控制權。\n客戶應該能夠以最小的延遲上傳圖像，並在登入時在主應用程式頁面上快速顯示其圖像。\nDress4Win 應該使用哪種配置？",
        "options": {
            "A": "Store image files in a Google Cloud Storage bucket. Use Google Cloud Datastore to maintain metadata that maps each customer's ID and their image files.",
            "B": "Store image files in a Google Cloud Storage bucket. Add custom metadata to the uploaded images in Cloud Storage that contains the customer's unique ID.",
            "C": "Use a distributed file system to store customers' images. As storage needs increase, add more persistent disks and/or nodes. Assign each customer a unique ID, which sets each file's owner attribute, ensuring privacy of images.",
            "D": "Use a distributed file system to store customers' images. As storage needs increase, add more persistent disks and/or nodes. Use a Google Cloud SQL database to maintain metadata that maps each customer's ID to their image files."
        },
        "options-zh": {
            "A": "將圖像檔案儲存在 Google Cloud Storage 儲存桶中。使用 Google Cloud Datastore 維護將每個客戶的 ID 和其圖像檔案映射的中繼資料",
            "B": "將圖像檔案儲存在 Google Cloud Storage 儲存桶中。在 Cloud Storage 中將自訂中繼資料添加到上傳的圖像，其中包含客戶的唯一 ID",
            "C": "使用分散式檔案系統儲存客戶的圖像。隨著儲存需求增加，添加更多永久磁碟和/或節點。為每個客戶分配唯一 ID，設置每個檔案的擁有者屬性，確保圖像的隱私性",
            "D": "使用分散式檔案系統儲存客戶的圖像。隨著儲存需求增加，添加更多永久磁碟和/或節點。使用 Google Cloud SQL 資料庫維護將每個客戶的 ID 映射到其圖像檔案的中繼資料"
        },
        "images": [],
        "answers": ["A"]
    },
    {
        "topic": "#11",
        "no": "#9",
        "link": "https://www.examtopics.com/discussions/google/view/14735-exam-professional-cloud-architect-topic-11-question-9/",
        "question": "Dress4Win has end-to-end tests covering 100% of their endpoints.\n" +
            "They want to ensure that the move to the cloud does not introduce any new bugs.\n" +
            "Which additional testing methods should the developers employ to prevent an outage?",
        "question-zh": "Dress4Win 的端到端測試涵蓋了 100% 的端點。\n他們希望確保遷移到雲端不會引入任何新的錯誤。\n開發人員應該採用哪些額外的測試方法來防止中斷？",
        "options": {
            "A": "They should enable Google Stackdriver Debugger on the application code to show errors in the code.",
            "B": "They should add additional unit tests and production scale load tests on their cloud staging environment.",
            "C": "They should run the end-to-end tests in the cloud staging environment to determine if the code is working as intended.",
            "D": "They should add canary tests so developers can measure how much of an impact the new release causes to latency."
        },
        "options-zh": {
            "A": "他們應該在應用程式程式碼上啟用 Google Stackdriver Debugger 以顯示程式碼中的錯誤",
            "B": "他們應該添加額外的單元測試和在雲端暫存環境上進行生產規模的負載測試",
            "C": "他們應該在雲端暫存環境中執行端到端測試，以確定程式碼是否按預期工作",
            "D": "他們應該添加金絲雀測試，以便開發人員可以測量新發布對延遲造成的影響"
        },
        "images": [],
        "answers": ["B"]
    },
    {
        "topic": "#11",
        "no": "#10",
        "link": "https://www.examtopics.com/discussions/google/view/9199-exam-professional-cloud-architect-topic-11-question-10/",
        "question": "You want to ensure Dress4Win's sales and tax records remain available for infrequent viewing by auditors for at least 10 years.\n" +
            "Cost optimization is your top priority.\n" +
            "Which cloud services should you choose?",
        "question-zh": "您希望確保 Dress4Win 的銷售和稅務記錄在至少 10 年內可供稽核員不常查看。\n成本優化是您的首要優先事項。\n您應該選擇哪些雲端服務？",
        "options": {
            "A": "Google Cloud Storage Coldline to store the data, and gsutil to access the data.",
            "B": "Google Cloud Storage Nearline to store the data, and gsutil to access the data.",
            "C": "Google Bigtabte with US or EU as location to store the data, and gcloud to access the data.",
            "D": "BigQuery to store the data, and a web server cluster in a managed instance group to access the data. Google Cloud SQL mirrored across two distinct regions to store the data, and a Redis cluster in a managed instance group to access the data."
        },
        "options-zh": {
            "A": "Google Cloud Storage Coldline 儲存資料，並使用 gsutil 存取資料",
            "B": "Google Cloud Storage Nearline 儲存資料，並使用 gsutil 存取資料",
            "C": "Google Bigtable 以 US 或 EU 作為位置儲存資料，並使用 gcloud 存取資料",
            "D": "BigQuery 儲存資料，並使用受管實例組中的 Web 伺服器叢集存取資料。跨兩個不同區域鏡像的 Google Cloud SQL 儲存資料，並使用受管實例組中的 Redis 叢集存取資料"
        },
        "images": [],
        "answers": ["A"]
    },
    {
        "topic": "#11",
        "no": "#11",
        "link": "https://www.examtopics.com/discussions/google/view/6802-exam-professional-cloud-architect-topic-11-question-11/",
        "question": "The current Dress4Win system architecture has high latency to some customers because it is located in one data center.\n" +
            "As of a future evaluation and optimizing for performance in the cloud, Dresss4Win wants to distribute its system architecture to multiple locations when Google cloud platform.\n" +
            "Which approach should they use?",
        "question-zh": "目前的 Dress4Win 系統架構對某些客戶具有高延遲，因為它位於一個資料中心。\n基於未來的評估和在雲端中的性能優化，Dress4Win 希望在 Google Cloud Platform 上將其系統架構分佈到多個位置。\n他們應該使用哪種方法？",
        "options": {
            "A": "Use regional managed instance groups and a global load balancer to increase performance because the regional managed instance group can grow instances in each region separately based on traffic.",
            "B": "Use a global load balancer with a set of virtual machines that forward the requests to a closer group of virtual machines managed by your operations team.",
            "C": "Use regional managed instance groups and a global load balancer to increase reliability by providing automatic failover between zones in different regions.",
            "D": "Use a global load balancer with a set of virtual machines that forward the requests to a closer group of virtual machines as part of a separate managed instance groups."
        },
        "options-zh": {
            "A": "使用區域受管實例組和全球負載平衡器以提高性能，因為區域受管實例組可以根據流量在每個區域分別增長實例",
            "B": "使用全球負載平衡器和一組虛擬機器，將請求轉發給由營運團隊管理的更近的虛擬機器組",
            "C": "使用區域受管實例組和全球負載平衡器以提高可靠性，透過在不同區域的區域之間提供自動失效轉移",
            "D": "使用全球負載平衡器和一組虛擬機器，將請求轉發給作為單獨受管實例組一部分的更近的虛擬機器組"
        },
        "images": [],
        "answers": ["A"]
    },
    {
        "topic": "#12",
        "no": "#1",
        "link": "https://www.examtopics.com/discussions/google/view/6803-exam-professional-cloud-architect-topic-12-question-1/",
        "question": "For this question, refer to the Dress4Win case study. Dress4Win is expected to grow to 10 times its size in 1 year with a corresponding growth in data and traffic that mirrors the existing patterns of usage. The CIO has set the target of migrating production infrastructure to the cloud within the next 6 months. How will you configure the solution to scale for this growth without making major application changes and still maximize the ROI?",
        "question-zh": "為了回答這個問題，請參考 Dress4Win 案例研究。預期 Dress4Win 在 1 年內成長至 10 倍規模，相應的資料和流量成長反映了現有的使用模式。CIO 設定了在未來 6 個月內將生產基礎設施遷移到雲端的目標。您將如何配置解決方案以擴展這種成長，而不需要進行重大應用程式更改，並仍然最大化 ROI？",
        "options": {
            "A": "Migrate the web application layer to App Engine, and MySQL to Cloud Datastore, and NAS to Cloud Storage. Deploy RabbitMQ, and deploy Hadoop servers using Deployment Manager.",
            "B": "Migrate RabbitMQ to Cloud Pub/Sub, Hadoop to BigQuery, and NAS to Compute Engine with Persistent Disk storage. Deploy Tomcat, and deploy Nginx using Deployment Manager.",
            "C": "Implement managed instance groups for Tomcat and Nginx. Migrate MySQL to Cloud SQL, RabbitMQ to Cloud Pub/Sub, Hadoop to Cloud Dataproc, and NAS to Compute Engine with Persistent Disk storage.",
            "D": "Implement managed instance groups for the Tomcat and Nginx. Migrate MySQL to Cloud SQL, RabbitMQ to Cloud Pub/Sub, Hadoop to Cloud Dataproc, and NAS to Cloud Storage."
        },
        "options-zh": {
            "A": "將 Web 應用程式層遷移到 App Engine，將 MySQL 遷移到 Cloud Datastore，將 NAS 遷移到 Cloud Storage。部署 RabbitMQ，並使用 Deployment Manager 部署 Hadoop 伺服器",
            "B": "將 RabbitMQ 遷移到 Cloud Pub/Sub，將 Hadoop 遷移到 BigQuery，將 NAS 遷移到具有永久磁碟儲存的 Compute Engine。部署 Tomcat，並使用 Deployment Manager 部署 Nginx",
            "C": "為 Tomcat 和 Nginx 實現受管實例組。將 MySQL 遷移到 Cloud SQL，將 RabbitMQ 遷移到 Cloud Pub/Sub，將 Hadoop 遷移到 Cloud Dataproc，將 NAS 遷移到具有永久磁碟儲存的 Compute Engine",
            "D": "為 Tomcat 和 Nginx 實現受管實例組。將 MySQL 遷移到 Cloud SQL，將 RabbitMQ 遷移到 Cloud Pub/Sub，將 Hadoop 遷移到 Cloud Dataproc，將 NAS 遷移到 Cloud Storage"
        },
        "images": [],
        "answers": ["D"]
    },
    {
        "topic": "#12",
        "no": "#2",
        "link": "https://www.examtopics.com/discussions/google/view/7265-exam-professional-cloud-architect-topic-12-question-2/",
        "question": "For this question, refer to the Dress4Win case study. Considering the given business requirements, how would you automate the deployment of web and transactional data layers?",
        "question-zh": "為了回答這個問題，請參考 Dress4Win 案例研究。考慮到給定的業務需求，您將如何自動化 Web 和交易數據層的部署？",
        "options": {
            "A": "Deploy Nginx and Tomcat using Cloud Deployment Manager to Compute Engine. Deploy a Cloud SQL server to replace MySQL. Deploy Jenkins using Cloud Deployment Manager.",
            "B": "Deploy Nginx and Tomcat using Cloud Launcher. Deploy a MySQL server using Cloud Launcher. Deploy Jenkins to Compute Engine using Cloud Deployment Manager scripts.",
            "C": "Migrate Nginx and Tomcat to App Engine. Deploy a Cloud Datastore server to replace the MySQL server in a high-availability configuration. Deploy Jenkins to Compute Engine using Cloud Launcher.",
            "D": "Migrate Nginx and Tomcat to App Engine. Deploy a MySQL server using Cloud Launcher. Deploy Jenkins to Compute Engine using Cloud Launcher."
        },
        "options-zh": {
            "A": "使用 Cloud Deployment Manager 將 Nginx 和 Tomcat 部署到 Compute Engine。部署 Cloud SQL 伺服器以取代 MySQL。使用 Cloud Deployment Manager 部署 Jenkins",
            "B": "使用 Cloud Launcher 部署 Nginx 和 Tomcat。使用 Cloud Launcher 部署 MySQL 伺服器。使用 Cloud Deployment Manager 腳本將 Jenkins 部署到 Compute Engine",
            "C": "將 Nginx 和 Tomcat 遷移到 App Engine。部署 Cloud Datastore 伺服器以高可用性配置取代 MySQL 伺服器。使用 Cloud Launcher 將 Jenkins 部署到 Compute Engine",
            "D": "將 Nginx 和 Tomcat 遷移到 App Engine。使用 Cloud Launcher 部署 MySQL 伺服器。使用 Cloud Launcher 將 Jenkins 部署到 Compute Engine"
        },
        "images": [],
        "answers": ["A"]
    },
    {
        "topic": "#12",
        "no": "#3",
        "link": "https://www.examtopics.com/discussions/google/view/7266-exam-professional-cloud-architect-topic-12-question-3/",
        "question": "For this question, refer to the Dress4Win case study. Which of the compute services should be migrated as-is and would still be an optimized architecture for performance in the cloud?",
        "question-zh": "為了回答這個問題，請參考 Dress4Win 案例研究。哪些運算服務應該按現狀遷移，並仍然是雲端中性能優化的架構？",
        "options": {
            "A": "Web applications deployed using App Engine standard environment",
            "B": "RabbitMQ deployed using an unmanaged instance group",
            "C": "Hadoop/Spark deployed using Cloud Dataproc Regional in High Availability mode",
            "D": "Jenkins, monitoring, bastion hosts, security scanners services deployed on custom machine types"
        },
        "options-zh": {
            "A": "使用 App Engine 標準環境部署的 Web 應用程式",
            "B": "使用非受管實例組部署的 RabbitMQ",
            "C": "使用 Cloud Dataproc 區域高可用性模式部署的 Hadoop/Spark",
            "D": "在自訂機器類型上部署的 Jenkins、監控、堡壘主機、安全掃描器服務"
        },
        "images": [],
        "answers": ["C"]
    },
    {
        "topic": "#12",
        "no": "#4",
        "link": "https://www.examtopics.com/discussions/google/view/6805-exam-professional-cloud-architect-topic-12-question-4/",
        "question": "For this question, refer to the Dress4Win case study. To be legally compliant during an audit, Dress4Win must be able to give insights in all administrative actions that modify the configuration or metadata of resources on Google Cloud.\n" +
            "What should you do?",
        "question-zh": "為了回答這個問題，請參考 Dress4Win 案例研究。為了在審計期間符合法律要求，Dress4Win 必須能夠提供所有修改 Google Cloud 資源配置或中繼資料的管理操作的見解。\n您應該怎麼做？",
        "options": {
            "A": "Use Stackdriver Trace to create a Trace list analysis.",
            "B": "Use Stackdriver Monitoring to create a dashboard on the project's activity.",
            "C": "Enable Cloud Identity-Aware Proxy in all projects, and add the group of Administrators as a member.",
            "D": "Use the Activity page in the GCP Console and Stackdriver Logging to provide the required insight."
        },
        "options-zh": {
            "A": "使用 Stackdriver Trace 建立追蹤清單分析",
            "B": "使用 Stackdriver Monitoring 在專案活動上建立儀表板",
            "C": "在所有專案中啟用 Cloud Identity-Aware Proxy，並將管理員組添加為成員",
            "D": "使用 GCP Console 中的活動頁面和 Stackdriver Logging 提供所需的見解"
        },
        "images": [],
        "answers": ["D"]
    },
    {
        "topic": "#12",
        "no": "#5",
        "link": "https://www.examtopics.com/discussions/google/view/8252-exam-professional-cloud-architect-topic-12-question-5/",
        "question": "For this question, refer to the Dress4Win case study. You are responsible for the security of data stored in Cloud Storage for your company, Dress4Win. You have already created a set of Google Groups and assigned the appropriate users to those groups. You should use Google best practices and implement the simplest design to meet the requirements.\n" +
            "Considering Dress4Win's business and technical requirements, what should you do?",
        "question-zh": "為了回答這個問題，請參考 Dress4Win 案例研究。您負責公司 Dress4Win 儲存在 Cloud Storage 中的資料安全。您已經建立了一組 Google Groups 並將適當的用戶分配給這些組。您應該使用 Google 最佳實踐並實施最簡單的設計以滿足需求。\n考慮到 Dress4Win 的業務和技術需求，您應該怎麼做？",
        "options": {
            "A": "Assign custom IAM roles to the Google Groups you created in order to enforce security requirements. Encrypt data with a customer-supplied encryption key when storing files in Cloud Storage.",
            "B": "Assign custom IAM roles to the Google Groups you created in order to enforce security requirements. Enable default storage encryption before storing files in Cloud Storage.",
            "C": "Assign predefined IAM roles to the Google Groups you created in order to enforce security requirements. Utilize Google's default encryption at rest when storing files in Cloud Storage.",
            "D": "Assign predefined IAM roles to the Google Groups you created in order to enforce security requirements. Ensure that the default Cloud KMS key is set before storing files in Cloud Storage."
        },
        "options-zh": {
            "A": "將自訂 IAM 角色分配給您建立的 Google Groups，以強制執行安全需求。在 Cloud Storage 中儲存檔案時使用客戶提供的加密金鑰加密資料",
            "B": "將自訂 IAM 角色分配給您建立的 Google Groups，以強制執行安全需求。在 Cloud Storage 中儲存檔案之前啟用預設儲存加密",
            "C": "將預定義的 IAM 角色分配給您建立的 Google Groups，以強制執行安全需求。在 Cloud Storage 中儲存檔案時使用 Google 的預設靜態加密",
            "D": "將預定義的 IAM 角色分配給您建立的 Google Groups，以強制執行安全需求。在 Cloud Storage 中儲存檔案之前確保設定了預設的 Cloud KMS 金鑰"
        },
        "images": [],
        "answers": ["C"]
    },
    {
        "topic": "#12",
        "no": "#6",
        "link": "https://www.examtopics.com/discussions/google/view/6807-exam-professional-cloud-architect-topic-12-question-6/",
        "question": "For this question, refer to the Dress4Win case study. You want to ensure that your on-premises architecture meets business requirements before you migrate your solution.\n" +
            "What change in the on-premises architecture should you make?",
        "question-zh": "為了回答這個問題，請參考 Dress4Win 案例研究。您希望確保在遷移解決方案之前，本地架構滿足業務需求。\n您應該在本地架構中進行哪些更改？",
        "options": {
            "A": "Replace RabbitMQ with Google Pub/Sub.",
            "B": "Downgrade MySQL to v5.7, which is supported by Cloud SQL for MySQL.",
            "C": "Resize compute resources to match predefined Compute Engine machine types.",
            "D": "Containerize the micro-services and host them in Google Kubernetes Engine."
        },
        "options-zh": {
            "A": "將 RabbitMQ 替換為 Google Pub/Sub",
            "B": "將 MySQL 降級到 v5.7，這是 Cloud SQL for MySQL 支援的版本",
            "C": "調整運算資源大小以符合預定義的 Compute Engine 機器類型",
            "D": "將微服務容器化並將它們託管在 Google Kubernetes Engine 中"
        },
        "images": [],
        "answers": ["D"]
    }
];
