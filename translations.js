// 多语言翻译配置
const translations = {
    // 繁體中文（默認）
    'zh-TW': {
        // 頂部橫幅
        'countdown-banner-text': '⚡  限時線上報名！截止時間僅剩',
        
        // Hero Section
        'main-headline': '別再等機會，用AI創造機會！',
        'feature-1': '✅ 用AI與自媒體，打造屬於你的事業系統！',
        'feature-2': '✅ 從零開始，用AI開啟你的創業人生！',
        'feature-3': '✅ 不需要懂技術，不需要大資金，只要願意學、願意行動',
        'feature-4': '✅ 下一波創業潮，不是開店、不是加盟，而是「AI＋自媒體」',
        'original-price': 'AI＋自媒體創業系統',
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
        'audience-1-title': '做預約服務的你',
        'audience-1-subtitle': '顧問 / 諮詢師 / 美容 / 教育 / 交易導師',
        'audience-1-text': '🌍 在這個AI時代，你不需要等待別人給你機會。現在，人人都能用AI打造個人品牌、開啟第二收入，即使沒有技術、沒有團隊，也能靠AI+自媒體創造被動收入！',
        'audience-2-title': '做招商加盟的你',
        'audience-2-subtitle': '保險團隊 / 微商 / 餐飲招商',
        'audience-2-text': '🌍 我們幫助你建立一套完整的「AI × 自媒體創業系統」——從AI工具應用、內容行銷、品牌打造，到獲利變現，一步步帶你從0開始，找到你的人生新方向。',
        'audience-3-title': '每天上班打卡的你',
        'audience-3-subtitle': '行政 / 會計 / 助理 / 客服 / 行銷 / 內勤業務 / 社群小編',
        'audience-3-text': '🌍 無論你是媽媽、上班族、自由工作者、或剛起步的創業者，只要你願意學習、願意改變，這套系統就能讓你用AI放大你的能力，讓世界看見你、聽見你、並願意為你的價值付費。',
        'audience-4-title': '做網路新媒體的你',
        'audience-4-subtitle': '自由業者 / 網路服務 / 個人教練 / 課程銷售 / 網紅 / 自媒體',
        'audience-4-text': '🌍 你不是沒能力，只是缺少一個能讓努力變現的系統，才華一直都在，只需要一個方法，讓它變成收入。你不是沒機會，只是還沒用對工具與方向。',
        
        // 對比區
        'comparison-before': '之前',
        'comparison-after': '之後',
        'before-1': '❌ 每天忙到深夜，卻看不到成果。',
        'before-2': '❌ 一邊工作一邊顧家，始終力不從心。',
        'before-3': '❌ 想做品牌，卻沒方向又沒時間。',
        'before-4': '❌ 用盡力氣推廣，收入仍不穩定。',
        'before-5': '❌ 有能力有熱情，卻不懂變現方法。',
        'after-1': '✅ 為自己創造客製化AI智能體打造創業SOP',
        'after-2': '✅ 學會正確引流方式 直接主動找精準顧客',
        'after-3': '✅ 收入自動運轉，時間自由又踏實。',
        'after-4': '✅ 有清楚方向，每一步都看得見成果。',
        'after-5': '✅ 工作有熱情，生活也重新發光。',
        
        // 新日常場景
        'daily-life-title': '有了AI大腦回春系統之後....',
        'scenario-1': '起床時不再擔心要塞車出門',
        'scenario-2': '有客戶自動報名或預約了解服務',
        'scenario-3': '系統已自動發出感謝或回覆，加line 或 whatsapp 或 簡訊通知客戶',
        'scenario-4': '有網路何必走馬路,有流量何必等客戶',
        'scenario-5': '一人，就能撐起完整內容吸客系統',
        'scenario-6': '訓練團隊簡單複製',
        'highlight-text': '✨ 這就是系統帶來的自由 ✨',
        
        // 中間 CTA
        'urgency-badge': '報名人數已超過 92%，優惠隨時截止',
        'mid-cta-original': '原價 NT$2,000元',
        'mid-cta-current': '✅ 現在限時線上報名中',
        'package-info': 'AI大腦回春系統',
        
        // 學員評價
        'testimonials-title': '真實學員回饋',
        'testimonial-1-name': '林先生',
        'testimonial-1-role': '銀行經理',
        'testimonial-1-text': '有了AI大腦回春系統，原來愛運動的我也能成為網路自媒體創業者， 直接跟著實操，收入很快超過我上班的收入，現在有非常多的時間可以騎腳踏車,爬山,游泳,練球,等等，生活品質大大提升',
        'testimonial-2-name': '高小姐',
        'testimonial-2-role': '餐飲業者',
        'testimonial-2-text': '報名AI大腦回春系統，一開始還有點懷疑，就試試吧。沒想到一啟動系統，不到一週，就有人自己找上門了！真的太神奇了',
        'testimonial-3-name': '曾小姐',
        'testimonial-3-role': '護理師',
        'testimonial-3-text': '高壓力的工作環境下，如果沒有樂觀的心態，真的很難撐下去，很開心遇到AI大腦回春系統，本來還擔心太複雜，沒想到有團隊幫忙，不只找到方法與機會，還可以學會最先進的AI與自媒體變現能力，真的太棒了。',
        
        // FAQ
        'faq-title': '常見問題',
        'faq-q1': '可以試試看嗎？',
        'faq-a1': '當然可以，系統目前很成熟，已經有非常多國家的學員配合。',
        'faq-q2': '系統是否可以開發海外市場？',
        'faq-a2': '這個系統在多個國家登記合法使用，所以可以支援多個國家開發。',
        'faq-q3': '需要學多久才會？',
        'faq-a3': '我們提供各種不同資源，您可以選擇自己需要的部分，學習時間因人而異，一般來說，學習時間在1-3周之間。',
        'faq-q4': '會影響原本的工作嗎？',
        'faq-a4': '完全不會影響原本的工作，當收入超過原本的工作收入時，您可以選擇辭職，專心做自己喜歡的事情。',
        
        // 表單
        'modal-title': '🎉 立即獲取優惠',
        'modal-subtitle': '填寫資料，開始您的AI自動引客之旅',
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
        'form-industry': '您的行業',
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
        'countdown-banner-text': '⚡ 限时在线报名！截止时间仅剩',
        'main-headline': '别再等机会，用AI创造机会！',
        'feature-1': '✅ 用AI与自媒体，打造属于你的事业系统！',
        'feature-2': '✅ 从零开始，用AI开启你的创业人生！',
        'feature-3': '✅ 不需要懂技术，不需要大资金，只要愿意学、愿意行动',
        'feature-4': '✅ 下一波创业潮，不是开店、不是加盟，而是「AI＋自媒体」',
        'original-price': 'AI＋自媒体创业系统',
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
        'audience-1-title': '做预约服务的你',
        'audience-1-subtitle': '顾问 / 咨询师 / 美容 / 教育 / 交易导师',
        'audience-1-text': '🌍 在这个AI时代，你不需要等待别人给你机会。现在，人人都能用AI打造个人品牌、开启第二收入，即使没有技术、没有团队，也能靠AI+自媒体创造被动收入！',
        'audience-2-title': '做招商加盟的你',
        'audience-2-subtitle': '保险团队 / 微商 / 餐饮招商',
        'audience-2-text': '🌍 我们帮助你建立一套完整的「AI × 自媒体创业系统」——从AI工具应用、内容营销、品牌打造，到获利变现，一步步带你从0开始，找到你的人生新方向。',
        'audience-3-title': '每天上班打卡的你',
        'audience-3-subtitle': '行政 / 会计 / 助理 / 客服 / 营销 / 内勤业务 / 社群小编',
        'audience-3-text': '🌍 无论你是妈妈、上班族、自由工作者、或刚起步的创业者，只要你愿意学习、愿意改变，这套系统就能让你用AI放大你的能力，让世界看见你、听见你、并愿意为你的价值付费。',
        'audience-4-title': '做网络新媒体的你',
        'audience-4-subtitle': '自由业者 / 网络服务 / 个人教练 / 课程销售 / 网红 / 自媒体',
        'audience-4-text': '🌍 你不是没能力，只是缺少一个能让努力变现的系统，才华一直都在，只需要一个方法，让它变成收入。你不是没机会，只是还没用对工具与方向。',
        'comparison-before': '之前',
        'comparison-after': '之后',
        'before-1': '❌ 每天忙到深夜，却看不到成果。',
        'before-2': '❌ 一边工作一边顾家，始终力不从心。',
        'before-3': '❌ 想做品牌，却没方向又没时间。',
        'before-4': '❌ 用尽力气推广，收入仍不稳定。',
        'before-5': '❌ 有能力有热情，却不懂变现方法。',
        'after-1': '✅ 为自己创造客制化AI智能体打造创业SOP',
        'after-2': '✅ 学会正确引流方式 直接主动找精准顾客',
        'after-3': '✅ 收入自动运转，时间自由又踏实。',
        'after-4': '✅ 有清楚方向，每一步都看得见成果。',
        'after-5': '✅ 工作有热情，生活也重新发光。',
        'daily-life-title': '有了AI+自媒体创业系统之后....',
        'scenario-1': '起床时不再担心要塞车出门',
        'scenario-2': '有客户自动报名或预约了解服务',
        'scenario-3': '系统已自动发出感谢或回复，加line 或 whatsapp 或 短信通知客户',
        'scenario-4': '有网络何必走马路,有流量何必等客户',
        'scenario-5': '一人，就能撑起完整内容吸客系统',
        'scenario-6': '训练团队简单复制',
        'highlight-text': '✨ 这就是系统带来的自由 ✨',
        'urgency-badge': '报名人数已超过 92%，优惠随时截止',
        'mid-cta-original': '原价 NT$2,000元',
        'mid-cta-current': '✅ 现在限时在线报名中',
        'package-info': 'AI+自媒体创业系统',
        'testimonials-title': '真实学员反馈',
        'testimonial-1-name': '林先生',
        'testimonial-1-role': '银行经理',
        'testimonial-1-text': '有了AI+自媒体创业系统，原来爱运动的我也能成为网络自媒体创业者， 直接跟着实操，收入很快超过我上班的收入，现在有非常多的时间可以骑脚踏车,爬山,游泳,练球,等等，生活品质大大提升',
        'testimonial-2-name': '高小姐',
        'testimonial-2-role': '餐饮业者',
        'testimonial-2-text': '报名AI+自媒体创业系统，一开始还有点怀疑，就试试吧。没想到一启动系统，不到一周，就有人自己找上门了！真的太神奇了',
        'testimonial-3-name': '曾小姐',
        'testimonial-3-role': '护理师',
        'testimonial-3-text': '高压力的工作环境下，如果没有乐观的心态，真的很难撑下去，很开心遇到AI+自媒体创业系统，本来还担心太复杂，没想到有团队帮忙，不只找到方法与机会，还可以学会最先进的AI与自媒体变现能力，真的太棒了。',
        'faq-title': '常见问题',
        'faq-q1': '可以试试看吗？',
        'faq-a1': '当然可以，系统目前很成熟，已经有非常多国家的学员配合。',
        'faq-q2': '系统是否可以开发海外市场？',
        'faq-a2': '这个系统在多个国家登记合法使用，所以可以支持多个国家开发。',
        'faq-q3': '需要学多久才会？',
        'faq-a3': '我们提供各种不同资源，您可以选择自己需要的部分，学习时间因人而异，一般来说，学习时间在1-3周之间。',
        'faq-q4': '会影响原本的工作吗？',
        'faq-a4': '完全不会影响原本的工作，当收入超过原本的工作收入时，您可以选择辞职，专心做自己喜欢的事情。',
        'modal-title': '🎉 立即获取优惠',
        'modal-subtitle': '填写资料，开始您的AI自动引客之旅',
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
        'form-industry': '您的行业',
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
        'countdown-banner-text': '⚡ Limited Time Online Registration! Time Remaining',
        'main-headline': 'Stop Waiting for Opportunities, Create Them with AI!',
        'feature-1': '✅ Build Your Own Business System with AI & Social Media!',
        'feature-2': '✅ Start from Zero, Launch Your Entrepreneurial Journey with AI!',
        'feature-3': '✅ No Technical Skills or Capital Required, Just Learn & Take Action',
        'feature-4': '✅ The Next Wave of Entrepreneurship: AI + Social Media',
        'original-price': 'AI + Social Media Business System',
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
        'audience-1-title': 'Service Providers',
        'audience-1-subtitle': 'Consultants / Advisors / Beauty / Education / Trading Mentors',
        'audience-1-text': '🌍 In this AI era, you don\'t need to wait for opportunities. Now, everyone can use AI to build a personal brand and create a second income, even without technical skills or a team!',
        'audience-2-title': 'Franchise & Network Marketers',
        'audience-2-subtitle': 'Insurance Teams / MLM / Food & Beverage Franchises',
        'audience-2-text': '🌍 We help you build a complete "AI × Social Media Business System" — from AI tool applications, content marketing, brand building, to monetization, guiding you step by step from zero to find your new direction in life.',
        'audience-3-title': 'Office Workers',
        'audience-3-subtitle': 'Admin / Accounting / Assistant / Customer Service / Marketing / Sales Support / Social Media Manager',
        'audience-3-text': '🌍 Whether you\'re a parent, employee, freelancer, or startup entrepreneur, as long as you\'re willing to learn and change, this system will help you amplify your abilities with AI, letting the world see you, hear you, and pay for your value.',
        'audience-4-title': 'Digital Creators',
        'audience-4-subtitle': 'Freelancers / Online Services / Personal Coaches / Course Creators / Influencers / Content Creators',
        'audience-4-text': '🌍 You\'re not incapable, you just lack a system to monetize your efforts. Your talent has always been there, you just need a method to turn it into income. You don\'t lack opportunities, you just haven\'t used the right tools and direction yet.',
        'comparison-before': 'Before',
        'comparison-after': 'After',
        'before-1': '❌ Working late every night with no results.',
        'before-2': '❌ Juggling work and family, always overwhelmed.',
        'before-3': '❌ Want to build a brand but lack direction and time.',
        'before-4': '❌ Exhausting all efforts in promotion, income still unstable.',
        'before-5': '❌ Have skills and passion, but don\'t know how to monetize.',
        'after-1': '✅ Create customized AI agents to build your business SOP',
        'after-2': '✅ Learn proper lead generation methods to actively find target customers',
        'after-3': '✅ Income runs automatically, time freedom and security.',
        'after-4': '✅ Clear direction, see results every step of the way.',
        'after-5': '✅ Work with passion, life shines again.',
        'daily-life-title': 'After Having the AI + Social Media Business System....',
        'scenario-1': 'Wake up without worrying about traffic jams',
        'scenario-2': 'Customers automatically register or book consultations',
        'scenario-3': 'System automatically sends thanks and replies, notifying customers via LINE, WhatsApp, or SMS',
        'scenario-4': 'Why drive when you have the internet, why wait for customers when you have traffic',
        'scenario-5': 'One person can run a complete content attraction system',
        'scenario-6': 'Easily replicate and train teams',
        'highlight-text': '✨ This is the Freedom the System Brings ✨',
        'urgency-badge': 'Over 92% Registered, Offer Ends Anytime',
        'mid-cta-original': 'Original Price NT$2,000',
        'mid-cta-current': '✅ Limited Time Online Registration',
        'package-info': 'AI + Social Media Business System',
        'testimonials-title': 'Real Student Testimonials',
        'testimonial-1-name': 'Mr. Lin',
        'testimonial-1-role': 'Bank Manager',
        'testimonial-1-text': 'With the AI + Social Media Business System, I, who loves sports, can also become an online entrepreneur. Following the practical operations, my income quickly exceeded my salary. Now I have plenty of time to cycle, hike, swim, play ball, etc. My quality of life has greatly improved.',
        'testimonial-2-name': 'Ms. Gao',
        'testimonial-2-role': 'Restaurant Owner',
        'testimonial-2-text': 'I signed up for the AI + Social Media Business System with some doubts at first. But once I activated the system, in less than a week, people started coming to me! It\'s truly amazing!',
        'testimonial-3-name': 'Ms. Zeng',
        'testimonial-3-role': 'Nurse',
        'testimonial-3-text': 'In a high-pressure work environment, without an optimistic mindset, it\'s really hard to persevere. I\'m so glad I encountered the AI + Social Media Business System. I was worried it would be too complicated, but with the team\'s help, I not only found methods and opportunities but also learned the most advanced AI and social media monetization skills. It\'s wonderful!',
        'faq-title': 'FAQ',
        'faq-q1': 'Can I try it out?',
        'faq-a1': 'Of course! The system is very mature and has been successfully used by students from many countries.',
        'faq-q2': 'Can the system be used for overseas markets?',
        'faq-a2': 'This system is legally registered in multiple countries, so it can support development in many countries.',
        'faq-q3': 'How long does it take to learn?',
        'faq-a3': 'We provide various resources, and you can choose what you need. Learning time varies by person, but generally takes 1-3 weeks.',
        'faq-q4': 'Will it affect my current job?',
        'faq-a4': 'Not at all. When your income exceeds your current job income, you can choose to resign and focus on what you love.',
        'modal-title': '🎉 Get Your Offer Now',
        'modal-subtitle': 'Fill in your information to start your AI auto-lead generation journey',
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
        'form-industry': 'Your Industry',
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

