// 多语言翻译配置
const translations = {
    // 繁體中文（默認）
    'zh-TW': {
        // 頂部橫幅
        'countdown-banner-text': '⚡ 限時線上報名！免費評估截止',
        
        // Hero Section
        'main-headline': '別再等記憶變差，現在就開始「大腦活化」！',
        'feature-1': '✅ 用「AI讓大腦活化 × 記憶訓練」建立每天的認知保健流程',
        'feature-2': '✅ 不需要昂貴器材、不需要醫學背景，只要願意跟著做',
        'feature-3': '✅ 給所有年齡層的人，把專注力與清晰感找回來',
        'feature-4': '✅ 這不是短期雞湯，是一套可追蹤、可複製的AI認知保健系統',
        'original-price': '大腦活化系統（專業與系統化的訓練＋AI提醒）',
        'current-price': '✅ 立即了解',
        'highlight': '限時免費',
        'urgency-text': '⏱️ 優惠結束 → 立刻回到 NT$2,000！截止 11.59pm ⏱️',
        'cta-button': '搶先報名',
        
        // 倒計時標籤
        'timer-days': '天',
        'timer-hours': '時',
        'timer-minutes': '分',
        'timer-seconds': '秒',
        
        // 視頻區
        'video-instruction': '🔊 確保你打開聲音，等待影片載入...',
        
        // 目標受眾
        'target-audience-title': '誰適合與需要？',
        'audience-1-title': '高壓腦力工作者',
        'audience-1-subtitle': '主管／行政／會計／業務／創作者／老師',
        'audience-1-text': '🌍 你不是不努力，是大腦長期超載。這套系統把訓練拆成->專注、記憶、提取練習＋簡單可做的護腦習慣，讓你工作更清晰、情緒更穩。',
        'audience-2-title': '容易健忘、想提升記憶的你',
        'audience-2-subtitle': '常忘東忘西／容易分心／講到一半忘了要說什麼',
        'audience-2-text': '🌍 你需要的不是硬背，而是「記憶策略＋練習節奏」。我們用題庫與日常情境，讓你把記憶力用回來。',
        'audience-3-title': '家裡有長輩、你是照顧者',
        'audience-3-subtitle': '照顧爸媽／陪伴長輩／家庭主要照顧者',
        'audience-3-text': '🌍 你最需要的是：可落地、可陪做、可追蹤。我們把訓練設計成「AI流程」。',
        'audience-4-title': '重視健康與預防的你',
        'audience-4-subtitle': '開始在意認知保健、想建立護腦習慣',
        'audience-4-text': '🌍 這套系統把「運動、睡眠、壓力調節、社交刺激、腦力訓練」整理成一張可執行清單，幫你把健康真正做進生活裡。',
        
        // 對比區
        'comparison-before': '之前',
        'comparison-after': '之後',
        'before-1': '❌ 變得更容易分心、看完就忘。',
        'before-2': '❌ 事情很多但腦袋一團亂。',
        'before-3': '❌ 想改善卻不知道從哪開始、做不久。',
        'before-4': '❌ 對長輩的狀況焦慮，但沒有方法。',
        'before-5': '❌ 生活節奏亂、睡眠差、越來越沒精神。',
        'after-1': '✅ 每天10分鐘：專注與記憶訓練有節奏',
        'after-2': '✅ 透過「記憶策略」讓大腦更會抓重點',
        'after-3': '✅ AI提醒＋追蹤表：你看得見自己在進步。',
        'after-4': '✅ 陪伴長輩更有方向：一起做、一起穩。',
        'after-5': '✅ 思緒更清晰、生活更踏實。',
        
        // 新日常場景
        'daily-life-title': '有了AI大腦回春系統之後....',
        'scenario-1': '早上起床，不再覺得腦袋沉沉的',
        'scenario-2': '打開手機：今天的10分鐘訓練已排好（注意力→記憶→提取）',
        'scenario-3': '系統自動記錄：你這週完成了幾天、哪一種訓練最有效',
        'scenario-4': '若你是照顧者：長輩也能跟著做「簡單版」',
        'scenario-5': '',
        'scenario-6': '',
        'highlight-text': '✨ 這就是「大腦活化系統」帶來的安心感 ✨',
        
        // 中間 CTA
        'urgency-badge': '報名人數已超過 92%，優惠隨時截止',
        'mid-cta-original': '原價 NT$2,000元',
        'mid-cta-current': '✅ 現在限時線上報名中',
        'package-info': 'AI大腦回春系統',
        
        // 學員評價
        'testimonials-title': '真實學員回饋',
        'testimonial-1-name': '吳先生',
        'testimonial-1-role': '工程主管',
        'testimonial-1-text': '以前每天開會到一半會突然卡住，做了兩週後，最明顯是「抓重點更快」，晚上也比較不焦慮。生活品質大大提升',
        'testimonial-2-name': '陳小姐',
        'testimonial-2-role': '兩寶媽',
        'testimonial-2-text': '報名AI大腦回春系統，一開始還有點懷疑，就試試吧。沒想到一啟動系統，不到一週，本來以為自己只是累，結果是長期分心。每天真的做得到，而且我開始能把事情一件件完成。真的太神奇了',
        'testimonial-3-name': '嚴小姐',
        'testimonial-3-role': '照顧者',
        'testimonial-3-text': '我最需要的是「陪長輩怎麼做」。這套把流程變簡單，很開心遇到AI大腦回春系統，還可以學會最先進的AI能力，真的太棒了。',
        
        // FAQ
        'faq-title': '常見問題',
        'faq-q1': '可以試試看嗎？',
        'faq-a1': '當然可以，先從免費評估開始，確定適合再進階。',
        'faq-q2': '幾歲開始都有效嗎？',
        'faq-a2': '可以。系統會依你當下狀態調整難度。',
        'faq-q3': '需要學多久才會？',
        'faq-a3': '我們提供各種不同資源，您可以選擇自己需要的部分，學習時間因人而異。',
        'faq-q4': '我（或家人）已經有診斷／正在看醫生，也能嗎？',
        'faq-a4': '可以把它當作「日常認知訓練與生活節奏支持」，但不替代醫療；請同時遵從醫囑。',
        
        // 表單
        'modal-title': '🎉 立即獲取優惠',
        'modal-subtitle': '填寫資料，開始你的「大腦活化 × 記憶訓練」之旅',
        'form-section-title': '📋 您的資料',
        'form-name': '姓名(實名制)',
        'form-name-placeholder': '請輸入您的全名',
        'form-email': '電子郵件',
        'form-email-placeholder': 'your@email.com',
        'form-phone': '電話號碼',
        'form-phone-placeholder': '+886 912345678',
        'form-country': '國家/地區',
        'form-country-placeholder': '請選擇...',
        'form-country-tw': '台灣 Taiwan',
        'form-country-my': '馬來西亞 Malaysia (Kuala Lumpur)',
        'form-industry': '你的身分',
        'form-industry-placeholder': '請選擇...',
        'form-industry-spiritual': '身心靈導師',
        'form-industry-beauty': '美容 / 美髮',
        'form-industry-education': '教育 / 培訓',
        'form-industry-insurance': '保險 / 金融',
        'form-industry-realestate': '房地產',
        'form-industry-consultant': '諮詢顧問',
        'form-industry-freelancer': '自由工作者',
        'form-industry-coach': '個人教練',
        'form-industry-ecommerce': '電商 / 微商',
        'form-industry-other': '其他',
        'form-region': '希望評估時間地點',
        'form-region-loading': '載入中...',
        'form-region-hint': '💡 地點由系統自動更新',
        'form-line': 'LINE ID（選填，方便我們聯繫您）',
        'form-line-placeholder': '請輸入您的 LINE ID',
        'form-line-hint': '💡 提供 LINE ID 讓我們能更快速為您服務',
        'form-whatsapp': 'WhatsApp 號碼（選填）',
        'form-whatsapp-placeholder': '+886 912 345 678',
        'form-whatsapp-hint': '💡 提供 WhatsApp 讓我們能透過多種方式聯繫您',
        'form-submit': '📝 提交資料',
        'form-secure': '🔒 您的資料將安全受到保護',
        
        // Footer
        'copyright': '© 2025. All Rights Reserved.'
    },
    
    // 简体中文
    'zh-CN': {
        'countdown-banner-text': '⚡ 限时在线报名！免费评估截止',
        'main-headline': '别再等记忆变差，现在就开始「大脑活化」！',
        'feature-1': '✅ 用「AI让大脑活化 × 记忆训练」建立每天的认知保健流程',
        'feature-2': '✅ 不需要昂贵器材、不需要医学背景，只要愿意跟着做',
        'feature-3': '✅ 给所有年龄层的人，把专注力与清晰感找回来',
        'feature-4': '✅ 这不是短期鸡汤，是一套可追踪、可复制的AI认知保健系统',
        'original-price': '大脑活化系统（专业与系统化的训练＋AI提醒）',
        'current-price': '✅ 立即了解',
        'highlight': '限时免费',
        'urgency-text': '⏱️ 优惠结束 → 立刻回到 NT$2,000！截止 11.59pm ⏱️',
        'cta-button': '抢先报名',
        'timer-days': '天',
        'timer-hours': '时',
        'timer-minutes': '分',
        'timer-seconds': '秒',
        'video-instruction': '🔊 确保你打开声音，等待视频加载...',
        'target-audience-title': '谁适合与需要？',
        'audience-1-title': '高压脑力工作者',
        'audience-1-subtitle': '主管／行政／会计／业务／创作者／老师',
        'audience-1-text': '🌍 你不是不努力，是大脑长期超载。这套系统把训练拆成->专注、记忆、提取练习＋简单可做的护脑习惯，让你工作更清晰、情绪更稳。',
        'audience-2-title': '容易健忘、想提升记忆的你',
        'audience-2-subtitle': '常忘东忘西／容易分心／讲到一半忘了要说什么',
        'audience-2-text': '🌍 你需要的不是硬背，而是「记忆策略＋练习节奏」。我们用题库与日常情境，让你把记忆力用回来。',
        'audience-3-title': '家里有长辈、你是照顾者',
        'audience-3-subtitle': '照顾爸妈／陪伴长辈／家庭主要照顾者',
        'audience-3-text': '🌍 你最需要的是：可落地、可陪做、可追踪。我们把训练设计成「AI流程」。',
        'audience-4-title': '重视健康与预防的你',
        'audience-4-subtitle': '开始在意认知保健、想建立护脑习惯',
        'audience-4-text': '🌍 这套系统把「运动、睡眠、压力调节、社交刺激、脑力训练」整理成一张可执行清单，帮你把健康真正做进生活里。',
        'comparison-before': '之前',
        'comparison-after': '之后',
        'before-1': '❌ 变得更容易分心、看完就忘。',
        'before-2': '❌ 事情很多但脑袋一团乱。',
        'before-3': '❌ 想改善却不知道从哪开始、做不久。',
        'before-4': '❌ 对长辈的状况焦虑，但没有方法。',
        'before-5': '❌ 生活节奏乱、睡眠差、越来越没精神。',
        'after-1': '✅ 每天10分钟：专注与记忆训练有节奏',
        'after-2': '✅ 透过「记忆策略」让大脑更会抓重点',
        'after-3': '✅ AI提醒＋追踪表：你看得见自己在进步。',
        'after-4': '✅ 陪伴长辈更有方向：一起做、一起稳。',
        'after-5': '✅ 思绪更清晰、生活更踏实。',
        'daily-life-title': '有了AI大脑回春系统之后....',
        'scenario-1': '早上起床，不再觉得脑袋沉沉的',
        'scenario-2': '打开手机：今天的10分钟训练已排好（注意力→记忆→提取）',
        'scenario-3': '系统自动记录：你这周完成了几天、哪一种训练最有效',
        'scenario-4': '若你是照顾者：长辈也能跟着做「简单版」',
        'scenario-5': '',
        'scenario-6': '',
        'highlight-text': '✨ 这就是「大脑活化系统」带来的安心感 ✨',
        'urgency-badge': '报名人数已超过 92%，优惠随时截止',
        'mid-cta-original': '原价 NT$2,000元',
        'mid-cta-current': '✅ 现在限时在线报名中',
        'package-info': 'AI大脑回春系统',
        'testimonials-title': '真实学员反馈',
        'testimonial-1-name': '吴先生',
        'testimonial-1-role': '工程主管',
        'testimonial-1-text': '以前每天开会到一半会突然卡住，做了两周后，最明显是「抓重点更快」，晚上也比较不焦虑。生活品质大大提升',
        'testimonial-2-name': '陈小姐',
        'testimonial-2-role': '两宝妈',
        'testimonial-2-text': '报名AI大脑回春系统，一开始还有点怀疑，就试试吧。没想到一启动系统，不到一周，本来以为自己只是累，结果是长期分心。每天真的做得到，而且我开始能把事情一件件完成。真的太神奇了',
        'testimonial-3-name': '严小姐',
        'testimonial-3-role': '照顾者',
        'testimonial-3-text': '我最需要的是「陪长辈怎么做」。这套把流程变简单，很开心遇到AI大脑回春系统，还可以学会最先进的AI能力，真的太棒了。',
        'faq-title': '常见问题',
        'faq-q1': '可以试试看吗？',
        'faq-a1': '当然可以，先从免费评估开始，确定适合再进阶。',
        'faq-q2': '几岁开始都有效吗？',
        'faq-a2': '可以。系统会依你当下状态调整难度。',
        'faq-q3': '需要学多久才会？',
        'faq-a3': '我们提供各种不同资源，您可以选择自己需要的部分，学习时间因人而异。',
        'faq-q4': '我（或家人）已经有诊断／正在看医生，也能吗？',
        'faq-a4': '可以把它当作「日常认知训练与生活节奏支持」，但不替代医疗；请同时遵从医嘱。',
        'modal-title': '🎉 立即获取优惠',
        'modal-subtitle': '填写资料，开始你的「大脑活化 × 记忆训练」之旅',
        'form-section-title': '📋 您的资料',
        'form-name': '姓名(实名制)',
        'form-name-placeholder': '请输入您的全名',
        'form-email': '电子邮件',
        'form-email-placeholder': 'your@email.com',
        'form-phone': '电话号码',
        'form-phone-placeholder': '+886 912345678',
        'form-country': '国家/地区',
        'form-country-placeholder': '请选择...',
        'form-country-tw': '台湾 Taiwan',
        'form-country-my': '马来西亚 Malaysia (Kuala Lumpur)',
        'form-industry': '你的身分',
        'form-industry-placeholder': '请选择...',
        'form-industry-spiritual': '身心灵导师',
        'form-industry-beauty': '美容 / 美发',
        'form-industry-education': '教育 / 培训',
        'form-industry-insurance': '保险 / 金融',
        'form-industry-realestate': '房地产',
        'form-industry-consultant': '咨询顾问',
        'form-industry-freelancer': '自由工作者',
        'form-industry-coach': '个人教练',
        'form-industry-ecommerce': '电商 / 微商',
        'form-industry-other': '其他',
        'form-region': '希望评估时间地点',
        'form-region-loading': '加载中...',
        'form-region-hint': '💡 地点由系统自动更新',
        'form-line': 'LINE ID（选填，方便我们联系您）',
        'form-line-placeholder': '请输入您的 LINE ID',
        'form-line-hint': '💡 提供 LINE ID 让我们能更快速为您服务',
        'form-whatsapp': 'WhatsApp 号码（选填）',
        'form-whatsapp-placeholder': '+886 912 345 678',
        'form-whatsapp-hint': '💡 提供 WhatsApp 让我们能通过多种方式联系您',
        'form-submit': '📝 提交资料',
        'form-secure': '🔒 您的资料将安全受到保护',
        'copyright': '© 2025. All Rights Reserved.'
    },
    
    // English
    'en': {
        'countdown-banner-text': '⚡ Limited Time Registration! Free Assessment Deadline',
        'main-headline': 'Don\'t Wait for Memory Decline, Start "Brain Activation" Now!',
        'feature-1': '✅ Build daily cognitive health routines with "AI Brain Activation × Memory Training"',
        'feature-2': '✅ No expensive equipment or medical background needed, just follow along',
        'feature-3': '✅ For all ages, regain focus and mental clarity',
        'feature-4': '✅ Not short-term motivation, but a trackable, replicable AI cognitive health system',
        'original-price': 'Brain Activation System (Professional Training + AI Reminders)',
        'current-price': '✅ Learn More',
        'highlight': 'Limited Time Free',
        'urgency-text': '⏱️ Offer Ends → Back to NT$2,000! Deadline 11:59pm ⏱️',
        'cta-button': 'Register Now',
        'timer-days': 'Days',
        'timer-hours': 'Hours',
        'timer-minutes': 'Mins',
        'timer-seconds': 'Secs',
        'video-instruction': '🔊 Make sure your sound is on, waiting for video to load...',
        'target-audience-title': 'Who Is This For?',
        'audience-1-title': 'High-Pressure Knowledge Workers',
        'audience-1-subtitle': 'Managers / Admin / Accountants / Sales / Creators / Teachers',
        'audience-1-text': '🌍 It\'s not that you\'re not working hard, your brain is chronically overloaded. This system breaks training into focus, memory, and retrieval exercises + simple brain-care habits for clearer work and stable emotions.',
        'audience-2-title': 'Forgetful & Want Better Memory',
        'audience-2-subtitle': 'Often forget things / Easily distracted / Lose train of thought mid-sentence',
        'audience-2-text': '🌍 You don\'t need to memorize harder, you need "memory strategies + practice rhythm". We use exercises and daily scenarios to help you use your memory again.',
        'audience-3-title': 'Family Caregivers',
        'audience-3-subtitle': 'Caring for parents / Accompanying elderly / Primary family caregiver',
        'audience-3-text': '🌍 What you need most is: practical, doable together, trackable. We designed the training as an "AI process".',
        'audience-4-title': 'Health-Conscious & Prevention-Minded',
        'audience-4-subtitle': 'Starting to care about cognitive health, want to build brain-care habits',
        'audience-4-text': '🌍 This system organizes "exercise, sleep, stress management, social stimulation, brain training" into an actionable checklist, helping you truly integrate health into your life.',
        'comparison-before': 'Before',
        'comparison-after': 'After',
        'before-1': '❌ Getting more distracted, forgetting what you just read.',
        'before-2': '❌ Many tasks but mind is a mess.',
        'before-3': '❌ Want to improve but don\'t know where to start, can\'t stick with it.',
        'before-4': '❌ Anxious about elderly family members\' condition, but no solution.',
        'before-5': '❌ Chaotic life rhythm, poor sleep, increasingly tired.',
        'after-1': '✅ 10 minutes daily: Focus and memory training with rhythm',
        'after-2': '✅ Use "memory strategies" to help your brain catch key points better',
        'after-3': '✅ AI reminders + tracking: You can see your own progress.',
        'after-4': '✅ Accompany elderly with direction: Do it together, stay stable together.',
        'after-5': '✅ Clearer thinking, more grounded life.',
        'daily-life-title': 'After Having the AI Brain Rejuvenation System....',
        'scenario-1': 'Wake up without feeling foggy-headed',
        'scenario-2': 'Open phone: Today\'s 10-minute training is scheduled (Attention→Memory→Retrieval)',
        'scenario-3': 'System auto-records: How many days you completed this week, which training was most effective',
        'scenario-4': 'If you\'re a caregiver: Elderly can follow along with the "simple version"',
        'scenario-5': '',
        'scenario-6': '',
        'highlight-text': '✨ This is the Peace of Mind the "Brain Activation System" Brings ✨',
        'urgency-badge': 'Over 92% Registered, Offer Ends Anytime',
        'mid-cta-original': 'Original Price NT$2,000',
        'mid-cta-current': '✅ Limited Time Online Registration',
        'package-info': 'AI Brain Rejuvenation System',
        'testimonials-title': 'Real User Testimonials',
        'testimonial-1-name': 'Mr. Wu',
        'testimonial-1-role': 'Engineering Manager',
        'testimonial-1-text': 'I used to get stuck in the middle of meetings every day. After two weeks, the most obvious change is "catching key points faster", and less anxious at night. Quality of life has greatly improved.',
        'testimonial-2-name': 'Ms. Chen',
        'testimonial-2-role': 'Mom of Two',
        'testimonial-2-text': 'I signed up for the AI Brain Rejuvenation System with some doubts. In less than a week, I thought I was just tired, but it was actually chronic distraction. I can really do it every day, and I started completing tasks one by one. Amazing!',
        'testimonial-3-name': 'Ms. Yan',
        'testimonial-3-role': 'Caregiver',
        'testimonial-3-text': 'What I needed most was "how to do it with elderly". This system simplified the process. So glad I found the AI Brain Rejuvenation System, and learned the most advanced AI capabilities. Wonderful!',
        'faq-title': 'FAQ',
        'faq-q1': 'Can I try it out?',
        'faq-a1': 'Of course! Start with the free assessment, then decide if you want to advance.',
        'faq-q2': 'Is it effective for all ages?',
        'faq-a2': 'Yes. The system adjusts difficulty based on your current state.',
        'faq-q3': 'How long does it take to learn?',
        'faq-a3': 'We provide various resources, you can choose what you need. Learning time varies by person.',
        'faq-q4': 'I (or family) have a diagnosis / seeing a doctor, can I still use it?',
        'faq-a4': 'You can use it as "daily cognitive training and life rhythm support", but it doesn\'t replace medical treatment; please follow your doctor\'s advice.',
        'modal-title': '🎉 Get Your Offer Now',
        'modal-subtitle': 'Fill in your information to start your "Brain Activation × Memory Training" journey',
        'form-section-title': '📋 Your Information',
        'form-name': 'Full Name (Real Name)',
        'form-name-placeholder': 'Please enter your full name',
        'form-email': 'Email',
        'form-email-placeholder': 'your@email.com',
        'form-phone': 'Phone Number',
        'form-phone-placeholder': '+886 912345678',
        'form-country': 'Country/Region',
        'form-country-placeholder': 'Please select...',
        'form-country-tw': 'Taiwan',
        'form-country-my': 'Malaysia (Kuala Lumpur)',
        'form-industry': 'Your Identity',
        'form-industry-placeholder': 'Please select...',
        'form-industry-spiritual': 'Spiritual Mentor',
        'form-industry-beauty': 'Beauty / Hair Salon',
        'form-industry-education': 'Education / Training',
        'form-industry-insurance': 'Insurance / Finance',
        'form-industry-realestate': 'Real Estate',
        'form-industry-consultant': 'Consultant',
        'form-industry-freelancer': 'Freelancer',
        'form-industry-coach': 'Personal Coach',
        'form-industry-ecommerce': 'E-commerce / MLM',
        'form-industry-other': 'Other',
        'form-region': 'Preferred Consultation Time & Location',
        'form-region-loading': 'Loading...',
        'form-region-hint': '💡 Locations are automatically updated by the system',
        'form-line': 'LINE ID (Optional, for us to contact you)',
        'form-line-placeholder': 'Please enter your LINE ID',
        'form-line-hint': '💡 Provide LINE ID for faster service',
        'form-whatsapp': 'WhatsApp Number (Optional)',
        'form-whatsapp-placeholder': '+886 912 345 678',
        'form-whatsapp-hint': '💡 Provide WhatsApp so we can contact you through multiple channels',
        'form-submit': '📝 Submit Information',
        'form-secure': '🔒 Your information is securely protected',
        'copyright': '© 2025. All Rights Reserved.'
    }
};

// 檢測瀏覽器語言並返回對應的語言代碼
function detectBrowserLanguage() {
    // 獲取瀏覽器語言設置
    const browserLang = navigator.language || navigator.userLanguage;
    console.log('🌍 檢測到瀏覽器語言:', browserLang);
    
    // 根據瀏覽器語言匹配我們支持的語言
    if (browserLang.startsWith('zh')) {
        // 中文區域判斷
        if (browserLang.includes('CN') || browserLang.includes('Hans') || 
            browserLang.includes('SG') || browserLang.includes('MY')) {
            // 简体中文：中国大陆、新加坡、马来西亚
            console.log('✅ 自動選擇: 简体中文');
            return 'zh-CN';
        } else if (browserLang.includes('TW') || browserLang.includes('Hant') || 
                   browserLang.includes('HK') || browserLang.includes('MO')) {
            // 繁体中文：台湾、香港、澳门
            console.log('✅ 自動選擇: 繁體中文');
            return 'zh-TW';
        } else {
            // 默認簡體（因為使用簡體的人口更多）
            console.log('✅ 自動選擇: 简体中文（默認）');
            return 'zh-CN';
        }
    } else if (browserLang.startsWith('en')) {
        console.log('✅ 自動選擇: English');
        return 'en'; // 英文
    } else if (browserLang.startsWith('ms') || browserLang.startsWith('id')) {
        // 马来语或印尼语用户 → 英文（因为我们没有马来语/印尼语版本）
        console.log('✅ 自動選擇: English (Malay/Indonesian user)');
        return 'en';
    }
    
    // 其他語言默認使用英文（更通用）
    console.log('✅ 自動選擇: English（默認）');
    return 'en';
}

// 獲取當前語言
function getCurrentLanguage() {
    // 先檢查是否有保存的語言偏好
    const savedLang = localStorage.getItem('language');
    
    if (savedLang) {
        console.log('📌 使用已保存的語言:', savedLang);
        return savedLang;
    }
    
    // 如果沒有保存的偏好，則自動檢測
    const detectedLang = detectBrowserLanguage();
    console.log('🔍 自動檢測語言:', detectedLang);
    
    // 保存檢測到的語言
    localStorage.setItem('language', detectedLang);
    
    return detectedLang;
}

// 設置語言
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageLanguage(lang);
    console.log('🌐 語言已切換為:', lang);
}

// 更新頁面語言
function updatePageLanguage(lang) {
    console.log('🔄 updatePageLanguage 被調用，語言:', lang);
    const t = translations[lang] || translations['zh-TW'];
    
    // 更新所有帶有 data-i18n 屬性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('📝 找到', elements.length, '個需要翻譯的元素');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // 根據元素類型更新內容
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder !== undefined) {
                    element.placeholder = t[key];
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = t[key];
            } else {
                element.innerHTML = t[key];
            }
            console.log('✅ 已更新:', key, '→', t[key].substring(0, 30) + '...');
        } else {
            console.warn('⚠️ 找不到翻譯:', key);
        }
    });
    
    // 更新 HTML lang 屬性
    document.documentElement.lang = lang;
    
    // 🖼️ 根據語言動態更新社交媒體分享圖片
    updateSocialMediaImage(lang);
    
    // 觸發自定義事件，通知其他腳本語言已更改
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// 根據語言更新社交媒體分享圖片
function updateSocialMediaImage(lang) {
    console.log('🖼️ updateSocialMediaImage 被調用，語言參數:', lang);
    
    // 根據語言選擇圖片
    let imageName;
    if (lang === 'zh-CN') {
        // 簡體中文使用 AIMakeMoneyC.png
        imageName = 'AIMakeMoneyC.png';
        console.log('✅ 匹配到簡體中文，使用:', imageName);
    } else if (lang === 'en') {
        // 英文使用 AIMakeMoneyE.png
        imageName = 'AIMakeMoneyE.png';
        console.log('✅ 匹配到英文，使用:', imageName);
    } else {
        // 繁體中文（默認）使用 AIMakeMoney.png
        imageName = 'AIMakeMoney.png';
        console.log('✅ 使用繁體中文圖片:', imageName);
    }
    
    const baseUrl = 'https://ifittw01-ai.github.io/Love/data/';
    const imageUrl = baseUrl + imageName;
    
    // 更新 Open Graph 圖片（Facebook、LINE 等會讀取）
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogImageSecure = document.querySelector('meta[property="og:image:secure_url"]');
    
    if (ogImage) {
        ogImage.setAttribute('content', imageUrl);
        console.log('✅ 已更新 og:image 為:', imageName);
    }
    
    if (ogImageSecure) {
        ogImageSecure.setAttribute('content', imageUrl);
    }
    
    // 更新 LINE 專用圖片
    const lineImage = document.querySelector('meta[name="line:image"]');
    if (lineImage) {
        lineImage.setAttribute('content', imageUrl);
        console.log('✅ 已更新 LINE 圖片為:', imageName);
    }
    
    // 更新 Twitter Card 圖片
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
        twitterImage.setAttribute('content', imageUrl);
    }
    
    // 🖼️ 更新頁面上顯示的主圖片
    const heroImage = document.querySelector('.hero-main-image');
    if (heroImage) {
        heroImage.src = 'data/' + imageName;
        console.log('✅ 已更新頁面主圖片為:', imageName);
    }
    
    // 🖼️ 更新頂部圖片（top.png）
    let topImageName;
    if (lang === 'zh-CN') {
        topImageName = 'topC.png';
        console.log('✅ 匹配到簡體中文，使用頂部圖片:', topImageName);
    } else if (lang === 'en') {
        topImageName = 'topE.png';
        console.log('✅ 匹配到英文，使用頂部圖片:', topImageName);
    } else {
        topImageName = 'top.png';
        console.log('✅ 使用繁體中文頂部圖片:', topImageName);
    }
    
    const topImage = document.querySelector('.hero-top-image');
    if (topImage) {
        topImage.src = 'data/' + topImageName;
        console.log('✅ 已更新頂部圖片為:', topImageName);
    }
}

// 初始化語言
function initLanguage() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
    
    // 更新語言選擇器的當前選中項
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLang;
    }
    
    // 在控制台顯示檢測結果（方便調試）
    console.log('=== 🌍 語言檢測信息 ===');
    console.log('瀏覽器語言:', navigator.language);
    console.log('當前使用語言:', currentLang);
    console.log('======================');
}

