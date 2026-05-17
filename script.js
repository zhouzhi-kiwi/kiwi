/*
 * Shared behavior for the static Kiwi Pro pages:
 * - bilingual copy
 * - persisted language preference
 * - scroll reveal animation
 */

const translations = {
  en: {
    'nav.nutrition': 'Nutrition',
    'nav.benefits': 'Benefits',
    'nav.products': 'Varieties',
    'nav.recipes': 'Serving',
    'nav.sustainability': 'Growing',
    'nav.about': 'Origin',
    'nav.contact': 'Contact',
    'nav.community': 'Community',
    'nav.support': 'FAQ',

    'hero.title': 'Zhouzhi Kiwifruit',
    'hero.subtitle':
      'Green-flesh kiwifruit from Zhouzhi County, Shaanxi, grown along the northern Qinling foothills and selected for clean aroma, balanced sweetness and reliable maturity.',
    'hero.buy': 'Contact us',
    'hero.learnMore': 'View varieties',
    'features.c.title': 'Clear Nutritional Value',
    'features.c.desc':
      'Kiwifruit is naturally rich in vitamin C and provides dietary fiber, potassium and folate as part of a balanced diet.',
    'features.organic.title': 'Recognized Origin',
    'features.organic.desc':
      'Zhouzhi is known as one of China’s important kiwifruit-producing counties, with orchards concentrated near the Qinling foothills and the Weihe River basin.',
    'features.ripeness.title': 'Harvested by Maturity',
    'features.ripeness.desc':
      'Fruit is selected by variety, size, firmness and soluble-solids maturity, then packed for gradual ripening after delivery.',
    'lang.toggle': '中文',

    'nutrition.hero.title': 'Kiwifruit Nutrition',
    'nutrition.hero.subtitle':
      'A practical reference for fresh Zhouzhi kiwifruit. Values vary by variety, maturity and storage conditions.',
    'nutrition.section1.title': 'Typical values per 100 g edible portion',
    'nutrition.table.calories': 'Energy',
    'nutrition.table.calories.value': 'About 61 kcal',
    'nutrition.table.carbs': 'Carbohydrate',
    'nutrition.table.carbs.value': 'About 14-15 g',
    'nutrition.table.fiber': 'Dietary fiber',
    'nutrition.table.fiber.value': 'About 3 g',
    'nutrition.table.vitaminC': 'Vitamin C',
    'nutrition.table.vitaminC.value': 'Commonly high; varies by cultivar',
    'nutrition.table.vitaminK': 'Vitamin K',
    'nutrition.table.vitaminK.value': 'Present in small amounts',
    'nutrition.table.vitaminE': 'Vitamin E',
    'nutrition.table.vitaminE.value': 'Present in small amounts',
    'nutrition.table.potassium': 'Potassium',
    'nutrition.table.potassium.value': 'About 300 mg',
    'nutrition.table.folate': 'Folate',
    'nutrition.table.folate.value': 'Present in small amounts',
    'nutrition.notes.title': 'How to read these numbers',
    'nutrition.notes.fact1': 'Nutrition changes with cultivar, harvest maturity and ripening stage',
    'nutrition.notes.fact2': 'The main dietary advantages are vitamin C, fiber and fresh-fruit acidity',
    'nutrition.notes.fact3': 'It is food, not a medicine; health claims should stay moderate',

    'benefits.hero.title': 'Dietary Benefits',
    'benefits.hero.subtitle':
      'A measured view of what kiwifruit can contribute to everyday eating.',
    'benefits.section.title': 'Why it fits a daily fruit routine',
    'benefits.b1.title': 'Vitamin C and plant compounds',
    'benefits.b1.desc':
      'Kiwifruit supplies vitamin C and natural plant pigments. These nutrients help support normal antioxidant protection in the diet.',
    'benefits.b2.title': 'Balanced sweet-tart flavor',
    'benefits.b2.desc':
      'Zhouzhi green-flesh varieties are valued for fragrance, acidity and sweetness rather than one-note sugar content.',
    'benefits.b3.title': 'Dietary fiber',
    'benefits.b3.desc':
      'The flesh and seeds provide dietary fiber. Eating ripe fruit with regular meals can help diversify fiber sources.',
    'benefits.b4.title': 'Convenient fresh fruit',
    'benefits.b4.desc':
      'Fruit can be ripened at room temperature, chilled after softening and eaten directly, making it practical for home and office use.',

    'recipes.hero.title': 'Serving Suggestions',
    'recipes.hero.subtitle':
      'Simple ways to keep the original aroma of Zhouzhi kiwifruit.',
    'recipes.smoothie.title': 'Kiwi Yogurt Smoothie',
    'recipes.smoothie.ingredients.title': 'Ingredients',
    'recipes.smoothie.ingredients.1': '2 ripe Zhouzhi kiwifruit, peeled',
    'recipes.smoothie.ingredients.2': '1 banana',
    'recipes.smoothie.ingredients.3': '1/2 cup mango or apple pieces',
    'recipes.smoothie.ingredients.4': 'A small handful of spinach, optional',
    'recipes.smoothie.ingredients.5': '1/4 avocado, optional',
    'recipes.smoothie.ingredients.6': '1/2 cup plain yogurt',
    'recipes.smoothie.ingredients.7': '1/2 cup water or milk',
    'recipes.smoothie.instructions.title': 'Method',
    'recipes.smoothie.instructions.1': 'Use fully softened fruit for a rounder taste.',
    'recipes.smoothie.instructions.2': 'Blend all ingredients until smooth.',
    'recipes.smoothie.instructions.3': 'Serve immediately to preserve color and aroma.',
    'recipes.salad.title': 'Fresh Kiwi Fruit Salad',
    'recipes.salad.ingredients.title': 'Ingredients',
    'recipes.salad.ingredients.1': '3 ripe kiwifruit, peeled and sliced',
    'recipes.salad.ingredients.2': '1 apple or pear, diced',
    'recipes.salad.ingredients.3': 'A small bowl of strawberries or citrus segments',
    'recipes.salad.ingredients.4': 'A small bowl of blueberries, optional',
    'recipes.salad.ingredients.5': 'Fresh mint leaves',
    'recipes.salad.ingredients.6': '2 tbsp lime or lemon juice',
    'recipes.salad.ingredients.7': '1-2 tsp honey, optional',
    'recipes.salad.instructions.title': 'Method',
    'recipes.salad.instructions.1': 'Cut fruit shortly before serving.',
    'recipes.salad.instructions.2': 'Mix citrus juice and honey in a small cup.',
    'recipes.salad.instructions.3': 'Toss gently to avoid crushing ripe kiwifruit.',
    'recipes.salad.instructions.4': 'Chill briefly, then serve.',

    'products.hero.title': 'Zhouzhi Varieties',
    'products.hero.subtitle':
      'Focus on representative Shaanxi Zhouzhi cultivars and practical purchase differences.',
    'products.item1.title': 'Cuixiang',
    'products.item1.desc':
      'A fragrant green-flesh variety selected in Zhouzhi. It is often chosen for fresh eating because the flesh is fine, juicy and aromatic when properly ripened.',
    'products.item2.title': 'Xuxiang',
    'products.item2.desc':
      'A common green-flesh cultivar in the Qinling foothill region, with a clear sweet-tart profile and good everyday value.',
    'products.item3.title': 'Qinmei',
    'products.item3.desc':
      'An established Shaanxi cultivar with stable yield and recognizable green flesh. It suits customers who prefer traditional Zhouzhi flavor.',
    'products.item4.title': 'Hayward',
    'products.item4.desc':
      'A later-maturing green-flesh variety known for storage and transport performance. It is suitable for longer shelf-life needs.',

    'community.hero.title': 'Zhouzhi Kiwifruit Community',
    'community.hero.subtitle':
      'Connect with growers, buyers and people who care about reliable origin information.',
    'community.share.title': 'Serving Notes',
    'community.share.desc':
      'Share ripening tips, storage experience and simple recipes that keep the fruit’s natural acidity and aroma.',
    'community.events.title': 'Season Updates',
    'community.events.desc':
      'Follow flowering, sizing, harvest and shipment updates from the Zhouzhi production season.',
    'community.newsletter.title': 'Origin Information',
    'community.newsletter.desc':
      'Receive concise notes about varieties, harvest windows, packing standards and availability.',

    'support.hero.title': 'FAQ',
    'support.hero.subtitle': 'Practical answers before and after purchase.',
    'support.item1.title': 'How should I store kiwifruit?',
    'support.item1.desc':
      'Keep firm fruit at room temperature. Once it yields slightly to gentle pressure, refrigerate it to slow further softening.',
    'support.item2.title': 'How can I ripen it faster?',
    'support.item2.desc':
      'Put firm fruit in a paper bag with an apple or banana, then check daily. Ethylene from the companion fruit speeds ripening.',
    'support.item3.title': 'Why does flavor vary?',
    'support.item3.desc':
      'Variety, harvest maturity, storage time and room-temperature ripening all affect sweetness, acidity and aroma.',
    'support.item4.title': 'Customer service',
    'support.item4.desc':
      'For orders, origin information or after-sales questions, contact us by phone, email or WeChat.',

    'about.hero.title': 'Origin: Zhouzhi County',
    'about.hero.subtitle':
      'A kiwifruit production area on the northern slope of the Qinling Mountains in Shaanxi.',
    'about.orchard.title': 'Growing Area',
    'about.orchard.desc1':
      'Zhouzhi County is located south of the Weihe River and north of the Qinling Mountains. The area is widely recognized in China for commercial kiwifruit production.',
    'about.orchard.desc2':
      'Local orchards commonly use trellis systems, pruning, pollination management and maturity testing to improve fruit shape, consistency and harvest timing.',
    'about.process.title': 'Cultivation and Packing',
    'about.process.item1': 'Variety planning: Cuixiang, Xuxiang, Qinmei and Hayward cover different maturity windows and flavor preferences.',
    'about.process.item2': 'Winter pruning: selected canes are tied to trellises to build an even canopy.',
    'about.process.item3': 'Flowering and pollination: pollination management helps improve fruit setting and shape.',
    'about.process.item4': 'Soil and water management: growers adjust fertilization and irrigation according to orchard conditions.',
    'about.process.item5': 'Summer canopy work: pruning and fruit thinning improve light, airflow and size consistency.',
    'about.process.item6': 'Maturity testing: harvest timing is guided by firmness, soluble solids and variety characteristics.',
    'about.process.item7': 'Sorting: fruit is graded by variety, size, appearance and firmness before packing.',
    'about.process.item8': 'Delivery guidance: firm fruit is shipped for safer transport, then ripened by the customer.',
    'about.team.title': 'Our Work',
    'about.team.desc1':
      'We focus on accurate variety information, consistent packing and clear ripening guidance rather than exaggerated claims.',
    'about.team.desc2':
      'The goal is to help customers understand what they are buying: origin, cultivar, maturity, storage and expected taste.',

    'contact.hero.title': 'Contact',
    'contact.hero.subtitle':
      'For orders, cooperation or variety questions, contact us directly.',
    'contact.phone.label': 'Phone',
    'contact.phone.value': '+86 189-0000-0000',
    'contact.email.label': 'Email',
    'contact.email.value': 'info@kiwipro.cn',
    'contact.address.label': 'Origin',
    'contact.address.value': 'Zhouzhi County, Xi’an, Shaanxi, China',
    'contact.hours.label': 'Service Hours',
    'contact.hours.value': 'Mon-Sat 9:00-18:00',
    'contact.wechat.label': 'WeChat QR',
    'contact.wechat.value': 'QR code placeholder',
    'contact.map.title': 'Approximate Origin Area',

    'sustainability.hero.title': 'Responsible Growing',
    'sustainability.hero.subtitle':
      'Practical orchard management for consistent fruit, soil care and lower waste.',
    'sustainability.commitment.title': 'Our Approach',
    'sustainability.commitment.desc1':
      'Good fruit quality starts with ordinary but careful farm work: pruning, pollination, irrigation, pest monitoring, harvest timing and packing discipline.',
    'sustainability.commitment.item1': 'Use integrated pest monitoring and apply inputs only according to orchard needs',
    'sustainability.commitment.item2': 'Improve soil organic matter and maintain stable irrigation where conditions allow',
    'sustainability.commitment.item3': 'Sort by maturity and firmness to reduce shipping loss and customer waste',
    'sustainability.commitment.item4': 'Work with local growers and packing teams during the Zhouzhi harvest season',
    'sustainability.industry.title': 'Zhouzhi Context',
    'sustainability.industry.desc1':
      'Zhouzhi has formed an early-, mid- and late-season variety structure including Qinmei, Cuixiang, Xuxiang and Hayward.',
    'sustainability.industry.desc2':
      'This mix helps match different eating preferences and shipment windows without treating every kiwifruit as the same product.',
  },
  zh: {
    'nav.nutrition': '营养',
    'nav.benefits': '益处',
    'nav.products': '品种',
    'nav.recipes': '吃法',
    'nav.sustainability': '种植',
    'nav.about': '产地',
    'nav.contact': '联系',
    'nav.community': '社区',
    'nav.support': '问答',

    'hero.title': '周至猕猴桃',
    'hero.subtitle':
      '来自陕西省西安市周至县的绿心猕猴桃，产区位于秦岭北麓一带，重视果香、酸甜平衡和成熟度稳定性。',
    'hero.buy': '联系我们',
    'hero.learnMore': '查看品种',
    'features.c.title': '营养价值清晰',
    'features.c.desc':
      '猕猴桃天然含有较多维生素 C，并提供膳食纤维、钾和叶酸，适合作为日常均衡饮食中的水果来源。',
    'features.organic.title': '产地辨识度高',
    'features.organic.desc':
      '周至县是国内重要猕猴桃产区之一，果园集中在秦岭北麓、渭河流域相关区域，产业基础较成熟。',
    'features.ripeness.title': '按成熟度采收',
    'features.ripeness.desc':
      '按品种、规格、硬度和可溶性固形物成熟度筛选，通常以硬果发货，便于运输后逐步后熟。',
    'lang.toggle': 'EN',

    'nutrition.hero.title': '猕猴桃营养',
    'nutrition.hero.subtitle':
      '以鲜食周至猕猴桃为参考。实际数值会随品种、成熟度和储存条件变化。',
    'nutrition.section1.title': '每 100 克可食部分的常见参考值',
    'nutrition.table.calories': '能量',
    'nutrition.table.calories.value': '约 61 千卡',
    'nutrition.table.carbs': '碳水化合物',
    'nutrition.table.carbs.value': '约 14-15 克',
    'nutrition.table.fiber': '膳食纤维',
    'nutrition.table.fiber.value': '约 3 克',
    'nutrition.table.vitaminC': '维生素 C',
    'nutrition.table.vitaminC.value': '通常含量较高，随品种变化',
    'nutrition.table.vitaminK': '维生素 K',
    'nutrition.table.vitaminK.value': '少量含有',
    'nutrition.table.vitaminE': '维生素 E',
    'nutrition.table.vitaminE.value': '少量含有',
    'nutrition.table.potassium': '钾',
    'nutrition.table.potassium.value': '约 300 毫克',
    'nutrition.table.folate': '叶酸',
    'nutrition.table.folate.value': '少量含有',
    'nutrition.notes.title': '如何理解这些数据',
    'nutrition.notes.fact1': '营养值会受品种、采收成熟度和后熟阶段影响',
    'nutrition.notes.fact2': '主要饮食优势在于维生素 C、膳食纤维和清爽酸度',
    'nutrition.notes.fact3': '猕猴桃是水果，不是药品，健康表述应保持适度',

    'benefits.hero.title': '饮食益处',
    'benefits.hero.subtitle': '用克制、准确的方式说明猕猴桃能为日常饮食带来什么。',
    'benefits.section.title': '为什么适合作为日常水果',
    'benefits.b1.title': '维生素 C 与植物成分',
    'benefits.b1.desc':
      '猕猴桃可提供维生素 C 和天然植物色素，有助于丰富日常饮食中的抗氧化相关营养来源。',
    'benefits.b2.title': '酸甜平衡的风味',
    'benefits.b2.desc':
      '周至绿心品种的特点不只是甜度，也包括果香、酸度和后熟后的口感平衡。',
    'benefits.b3.title': '膳食纤维来源',
    'benefits.b3.desc':
      '果肉和籽可提供膳食纤维。成熟后随餐食用，有助于丰富日常纤维来源。',
    'benefits.b4.title': '方便鲜食',
    'benefits.b4.desc':
      '硬果可常温后熟，变软后冷藏减缓继续软化，适合家庭、办公室和礼盒场景。',

    'recipes.hero.title': '推荐吃法',
    'recipes.hero.subtitle': '尽量保留周至猕猴桃原本果香的简单搭配。',
    'recipes.smoothie.title': '猕猴桃酸奶奶昔',
    'recipes.smoothie.ingredients.title': '材料',
    'recipes.smoothie.ingredients.1': '熟软周至猕猴桃 2 个，去皮',
    'recipes.smoothie.ingredients.2': '香蕉 1 根',
    'recipes.smoothie.ingredients.3': '芒果或苹果半杯',
    'recipes.smoothie.ingredients.4': '少量菠菜，可选',
    'recipes.smoothie.ingredients.5': '牛油果 1/4 个，可选',
    'recipes.smoothie.ingredients.6': '原味酸奶半杯',
    'recipes.smoothie.ingredients.7': '水或牛奶半杯',
    'recipes.smoothie.instructions.title': '做法',
    'recipes.smoothie.instructions.1': '选择已经变软的果子，口感更圆润。',
    'recipes.smoothie.instructions.2': '所有材料放入料理机搅打至顺滑。',
    'recipes.smoothie.instructions.3': '现做现喝，能更好保留颜色和香气。',
    'recipes.salad.title': '鲜果猕猴桃沙拉',
    'recipes.salad.ingredients.title': '材料',
    'recipes.salad.ingredients.1': '熟猕猴桃 3 个，去皮切片',
    'recipes.salad.ingredients.2': '苹果或梨 1 个，切丁',
    'recipes.salad.ingredients.3': '草莓或柑橘瓣一小碗',
    'recipes.salad.ingredients.4': '蓝莓一小碗，可选',
    'recipes.salad.ingredients.5': '薄荷叶少量',
    'recipes.salad.ingredients.6': '青柠汁或柠檬汁 2 汤匙',
    'recipes.salad.ingredients.7': '蜂蜜 1-2 茶匙，可选',
    'recipes.salad.instructions.title': '做法',
    'recipes.salad.instructions.1': '食用前再切水果，减少氧化和出水。',
    'recipes.salad.instructions.2': '柠檬汁与蜂蜜调匀。',
    'recipes.salad.instructions.3': '轻轻拌匀，避免压碎熟软猕猴桃。',
    'recipes.salad.instructions.4': '短时间冷藏后食用。',

    'products.hero.title': '周至代表品种',
    'products.hero.subtitle': '重点介绍陕西省周至县常见猕猴桃品种及购买差异。',
    'products.item1.title': '翠香',
    'products.item1.desc':
      '周至选育的芳香型绿心品种，成熟后果肉细腻、多汁，香气较突出，适合追求鲜食品质的客户。',
    'products.item2.title': '徐香',
    'products.item2.desc':
      '秦岭北麓产区常见绿心品种，酸甜感清晰，风味稳定，适合日常家庭鲜食。',
    'products.item3.title': '秦美',
    'products.item3.desc':
      '陕西较早推广的传统品种，绿心、风味辨识度高，适合喜欢经典周至口感的人群。',
    'products.item4.title': '海沃德',
    'products.item4.desc':
      '晚熟绿心品种，耐贮运表现较好，适合对货架期和运输稳定性要求较高的场景。',

    'community.hero.title': '周至猕猴桃社区',
    'community.hero.subtitle': '连接种植者、采购者和关注真实产地信息的人。',
    'community.share.title': '吃法分享',
    'community.share.desc':
      '交流后熟、保存和简单食谱，让猕猴桃的自然酸度和果香更好发挥。',
    'community.events.title': '产季动态',
    'community.events.desc':
      '关注周至产区开花、膨果、采收和发货节奏，了解每一季的供应变化。',
    'community.newsletter.title': '产地信息',
    'community.newsletter.desc':
      '获取品种、采收窗口、包装规格和供应情况等简明信息。',

    'support.hero.title': '常见问题',
    'support.hero.subtitle': '购买前后最常见的问题，用实用方式回答。',
    'support.item1.title': '猕猴桃如何保存？',
    'support.item1.desc':
      '硬果常温放置。轻压有弹性后放入冰箱冷藏，可减缓继续软化。',
    'support.item2.title': '如何加快后熟？',
    'support.item2.desc':
      '把硬果和苹果或香蕉一起放入纸袋，每天检查。苹果、香蕉释放的乙烯可促进后熟。',
    'support.item3.title': '为什么口味会有差异？',
    'support.item3.desc':
      '品种、采收成熟度、储存时间和常温后熟程度都会影响甜度、酸度和果香。',
    'support.item4.title': '客户服务',
    'support.item4.desc':
      '订单、产地信息或售后问题，可通过电话、邮箱或微信联系我们。',

    'about.hero.title': '产地：陕西周至',
    'about.hero.subtitle': '位于陕西秦岭北麓的猕猴桃产区。',
    'about.orchard.title': '产区条件',
    'about.orchard.desc1':
      '周至县南依秦岭、北近渭河，是国内具有代表性的商品猕猴桃产区之一。',
    'about.orchard.desc2':
      '当地果园普遍采用棚架栽培，并通过修剪、授粉管理和成熟度检测来改善果形、均匀度和采收时机。',
    'about.process.title': '种植与分选',
    'about.process.item1': '品种规划：翠香、徐香、秦美、海沃德覆盖不同成熟期和风味偏好。',
    'about.process.item2': '冬季修剪：选择结果母枝并绑蔓，形成相对均匀的架面。',
    'about.process.item3': '花期授粉：通过授粉管理提高坐果率和果形稳定性。',
    'about.process.item4': '水肥管理：根据果园情况调整施肥和灌溉。',
    'about.process.item5': '夏季管理：修剪、疏果，改善光照、通风和规格一致性。',
    'about.process.item6': '成熟度检测：结合硬度、可溶性固形物和品种特性确定采收窗口。',
    'about.process.item7': '分选包装：按品种、规格、外观和硬度分级后装箱。',
    'about.process.item8': '到货指导：通常以硬果运输，到货后按需求常温后熟。',
    'about.team.title': '我们做什么',
    'about.team.desc1':
      '我们更重视准确的品种信息、稳定包装和清楚的后熟指导，而不是夸大宣传。',
    'about.team.desc2':
      '目标是让客户知道自己买到的是什么：产地、品种、成熟度、储存方式和预期口感。',

    'contact.hero.title': '联系我们',
    'contact.hero.subtitle': '订购、合作或品种咨询，可直接联系。',
    'contact.phone.label': '电话',
    'contact.phone.value': '+86 189-0000-0000',
    'contact.email.label': '邮箱',
    'contact.email.value': 'info@kiwipro.cn',
    'contact.address.label': '产地',
    'contact.address.value': '中国陕西省西安市周至县',
    'contact.hours.label': '服务时间',
    'contact.hours.value': '周一至周六 9:00-18:00',
    'contact.wechat.label': '微信二维码',
    'contact.wechat.value': '二维码占位',
    'contact.map.title': '产区位置示意',

    'sustainability.hero.title': '负责任种植',
    'sustainability.hero.subtitle':
      '通过细致果园管理提升果品一致性，兼顾土壤维护与减少损耗。',
    'sustainability.commitment.title': '我们的做法',
    'sustainability.commitment.desc1':
      '好果子来自普通但细致的农事管理：修剪、授粉、水肥、病虫监测、采收时机和包装纪律。',
    'sustainability.commitment.item1': '采用病虫害综合监测，根据果园需要合理投入',
    'sustainability.commitment.item2': '重视土壤有机质和适度灌溉，维持树势稳定',
    'sustainability.commitment.item3': '按成熟度和硬度分选，减少运输损耗和到货浪费',
    'sustainability.commitment.item4': '产季与周至本地种植户和包装团队协作',
    'sustainability.industry.title': '周至产区背景',
    'sustainability.industry.desc1':
      '周至已形成秦美、翠香、徐香、海沃德等早中晚熟品种搭配的产业结构。',
    'sustainability.industry.desc2':
      '这种品种组合可以匹配不同鲜食偏好和发货窗口，而不是把所有猕猴桃都当成同一种产品。',
  },
};

function getInitialLanguage() {
  const stored = safeGetLanguage();
  if (stored) return stored;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

let currentLang = getInitialLanguage();

function safeGetLanguage() {
  try {
    const stored = localStorage.getItem('kiwiProLanguage');
    return stored === 'en' || stored === 'zh' ? stored : null;
  } catch {
    return null;
  }
}

function safeSetLanguage(lang) {
  try {
    localStorage.setItem('kiwiProLanguage', lang);
  } catch {
    // Some embedded or privacy-restricted contexts can block localStorage.
  }
}

function applyTranslations() {
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) el.innerHTML = translation;
  });

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = translations[currentLang]['lang.toggle'];
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  safeSetLanguage(currentLang);
  applyTranslations();
}

function setupMobileNavigation() {
  const navRow = document.querySelector('nav > div > div');
  const langToggle = document.getElementById('lang-toggle');
  if (!navRow || !langToggle || navRow.querySelector('.mobile-menu-toggle')) return;

  const menuButton = document.createElement('button');
  menuButton.type = 'button';
  menuButton.className = 'mobile-menu-toggle';
  menuButton.setAttribute('aria-label', currentLang === 'zh' ? '打开导航菜单' : 'Open navigation menu');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '≡';

  const menuPanel = document.createElement('div');
  menuPanel.className = 'mobile-menu-panel';
  menuPanel.setAttribute('aria-label', currentLang === 'zh' ? '移动端导航' : 'Mobile navigation');

  navRow.querySelectorAll('a.nav-link:not(.lang-toggle)').forEach((link) => {
    const clone = link.cloneNode(true);
    clone.classList.remove('hidden', 'md:inline-block');
    clone.addEventListener('click', () => {
      menuPanel.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
    menuPanel.appendChild(clone);
  });

  menuButton.addEventListener('click', () => {
    const isOpen = menuPanel.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!navRow.contains(event.target)) {
      menuPanel.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuPanel.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  navRow.insertBefore(menuButton, langToggle);
  navRow.appendChild(menuPanel);
}

window.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  setupMobileNavigation();

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleLanguage);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
