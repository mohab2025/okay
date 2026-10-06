import type { Locale } from "@/i18n/routing";

type JourneyStep = { title: string; subtitle: string; output: string; items: string[] };
type Narrative = {
 metaTitle: string; description: string;
 chapters: string[]; problem: { label:string; title:string; before:string[]; after:string[]; bridge:string };
 journey: { label:string; title:string; intro:string; demo:string; output:string; next:string; steps:JourneyStep[] };
 workflow: { label:string; title:string; intro:string; demo:string; stages:string[]; next:string; replay:string; approval:string; cases:{name:string; input:string; fields:string[]; decision:string; action:string; systems:string[]}[] };
 growth: { label:string; title:string; intro:string; steps:string[]; note:string };
 trust: {label:string; title:string; intro:string; controls:string[]; approval:string[]; link:string};
 partnership:{label:string; title:string; intro:string; vision:string; plans:{name:string; tag:string; title:string; items:string[]; cta:string}[]; note:string};
 faq:{title:string; items:{q:string;a:string}[]};
 discovery:{label:string; title:string; intro:string; idea:string; placeholder:string; audience:string; audiencePlaceholder:string; priority:string; priorities:string[]; paths:string[]; path:string; submit:string; output:string; next:string; download:string; edit:string; note:string; empty:string; briefLabels:string[]};
};
export const narrativeContent: Record<Locale, Narrative> = {
 ar: {
 metaTitle:"أوكي | من فكرتك إلى منتج ذكي وشراكة تنمو",
 description:"نحوّل فكرتك إلى منتج: استكشاف بالذكاء الاصطناعي، مراجعة متخصص، تطوير ووكلاء أذكياء، إطلاق وتسويق. اختر التنفيذ أو ناقش شراكة تشارك المخاطرة.",
 chapters:["الفكرة","الرحلة","التشغيل","النمو","الشراكة"],
 problem:{label:"01 / البداية",title:"الفكرة موجودة. الطريق ليس واضحًا بعد.",before:["من أين أبدأ؟","ماذا أبني أولًا؟","كيف أصل لعملائي؟"],after:["تصور واضح","منتج قابل للاختبار","خطة إطلاق ونمو"],bridge:"نرتّب الخطوة التالية، معك."},
 journey:{label:"02 / من سؤال إلى مشروع",title:"فكرتك تتحرك. خطوة بخطوة.",intro:"أنت تعرف المشكلة. نحن نساعدك على رسم الطريق وتنفيذه.",demo:"رحلة توضيحية · اختر مرحلة",output:"ما تخرج به",next:"المرحلة التالية",steps:[
 {title:"نسمع فكرتك",subtitle:"استكشاف أولي بالذكاء الاصطناعي",output:"ملخص فكرة وأسئلة واضحة",items:["أريد منصة لحجز الخدمات.","من سيستخدمها؟ وما المشكلة اليوم؟","الحجوزات موزعة بين الرسائل والجداول."]},
 {title:"نجلس معك",subtitle:"جلسة مع متخصص",output:"أولويات ونطاق أولي",items:["المستخدم: مقدم الخدمة وعميله","الأولوية: الحجز والمتابعة","نراجع الجدوى والقيود معك"]},
 {title:"ترى التصور",subtitle:"نموذج أولي قبل التوسع",output:"تصور تراجعه وتعدّله",items:["طلب خدمة","اختيار موعد","تأكيد الحجز"]},
 {title:"نبني ونربط",subtitle:"منتج ووكلاء مناسبون له",output:"مسار عمل قابل للاختبار",items:["وكيل خدمة العملاء","التقويم ونظام العملاء","مراجعة بشرية للاستثناءات"]},
 {title:"نطلق فكرتك",subtitle:"اختبار ثم نشر ومراقبة",output:"منتج جاهز لاستقبال المستخدمين",items:["اختبار تجربة الحجز","مراجعة الصلاحيات","نشر ومراقبة التشغيل"]},
 {title:"نتعلم وننمو",subtitle:"مع فريق التسويق",output:"خطة نمو مبنية على التعلم",items:["تحديد الجمهور والرسالة","تجربة قنوات الوصول","قياس النتائج وتحسين المنتج"]}
 ]},
 workflow:{label:"03 / لديك نظام بالفعل؟",title:"نضيف الذكاء. ونحافظ على استثمارك.",intro:"وكيل مناسب، داخل أدواتك، من الطلب إلى الإجراء.",demo:"محاكاة محلية · لا تتصل بأنظمة فعلية",stages:["الطلب","الفهم","القرار","الإجراء"],next:"نفّذ الخطوة التالية",replay:"إعادة التجربة",approval:"اعتماد بشري مطلوب · وافق للمتابعة",cases:[
 {name:"التجارة",input:"أريد إرجاع المنتج من طلبي.",fields:["نوع الطلب: إرجاع","المصدر: رسالة العميل","المرجع: سجل الطلب"],decision:"مراجعة سياسة الإرجاع ثم طلب اعتماد الموظف.",action:"إنشاء طلب إرجاع وإرسال تعليماته بعد الاعتماد.",systems:["WhatsApp","CRM","ERP"]},
 {name:"الخدمات",input:"احجز لي جلسة استشارية هذا الأسبوع.",fields:["نوع الطلب: حجز","الخدمة: استشارة","المصدر: محادثة الموقع"],decision:"مقارنة المواعيد المتاحة بقواعد الحجز.",action:"تأكيد الموعد وتحديث سجل العميل.",systems:["Website","Calendar","CRM"]},
 {name:"اللوجستيات",input:"أحتاج تحديثًا عن موعد وصول الشحنة.",fields:["نوع الطلب: متابعة","المرجع: سجل الشحنة","المصدر: البريد"],decision:"قراءة حالة الشحنة وتصعيد أي تعارض.",action:"إرسال الحالة المسجلة وإضافة سجل متابعة.",systems:["Email","Database","API"]}
 ]},
 growth:{label:"04 / الإطلاق بداية",title:"منتج يعمل. ثم عمل ينمو.",intro:"التطوير والتسويق في مسار واحد، مع أهداف نراجعها معك.",steps:["نفهم الجمهور","نختبر الرسالة","نقيس الاستخدام","نحسّن التجربة"],note:"المخرجات: خطة وصول، قياس واضح، وتجارب تحسين. النتائج تعتمد على السوق والتنفيذ."},
 trust:{label:"التحكم يبقى معك",title:"استقلالية في العمل. وضوح في القرار.",intro:"نصمم الضوابط وفق بياناتك ومخاطر العملية وبيئة النشر.",controls:["صلاحيات محددة للوكيل","سجل للإجراءات","موافقة على القرارات الحساسة","مراقبة وتصعيد الاستثناءات"],approval:["يقترح الوكيل","تعتمد أنت","يُنفّذ ويُسجّل"],link:"استكشف الأمان وخيارات النشر"},
 partnership:{label:"05 / أبعد من التسليم",title:"نبني معك. ونريد أن ننمو معك.",intro:"رؤيتنا أن نصبح حاضنة أعمال تجمع التقنية والذكاء الاصطناعي والتسويق.",vision:"شركاء في الرحلة",plans:[
 {name:"مسار التنفيذ",tag:"نطاق واضح",title:"فكرتك. تنفيذنا.",items:["نطاق ومراحل وتسليمات متفق عليها","بناء المنتج وربط الوكلاء","إطلاق ودعم وفق الاتفاق"],cta:"جهّز ملخص مشروعك"},
 {name:"مسار الشراكة",tag:"مخاطرة نتشاركها",title:"طموح واحد. التزام مشترك.",items:["تكلفة أولية أقل من مسار التنفيذ، وفق التقييم","مساهمة متفق عليها في البناء والنمو","عائد ومسؤوليات تحددهما الشراكة"],cta:"استكشف ملاءمة الشراكة"}
 ],note:"الشراكة تخضع لدراسة المشروع واتفاق يحدد المساهمات والملكية والعائد. لا نَعِد بنجاح مضمون."},
 faq:{title:"قبل أن نبدأ.",items:[
 {q:"هل أحتاج إلى فكرة مكتملة؟",a:"لا. نبدأ بفهم المشكلة والجمهور، ثم نرتّب الأولويات في جلسة مع متخصص قبل تحديد نطاق البناء."},
 {q:"هل يمكن إضافة وكيل إلى نظام قائم؟",a:"نعم، نبدأ بمراجعة الواجهات المتاحة والصلاحيات والبيانات، ثم نحدد مسارًا مناسبًا للتكامل والاختبار."},
 {q:"ما الفرق بين التنفيذ والشراكة؟",a:"التنفيذ يعتمد على نطاق وتسليمات متفق عليها. الشراكة تستهدف تكلفة أولية أقل مقابل تقاسم مساهمات ومخاطر وعوائد تُحدد بعد دراسة المشروع."},
 {q:"هل تعمل تجربة الاستكشاف هنا بالذكاء الاصطناعي؟",a:"التجربة الحالية نموذج محلي لتنظيم فكرتك وتنزيل ملخصها. لا تتصل بنموذج AI ولا ترسل بياناتك ولا تحجز جلسة. ربط المحادثة والحجز يأتي عند تفعيل الخدمات."}
 ]},
 discovery:{label:"لنبدأ بفكرتك",title:"ليس مطلوبًا أن تعرف كل الإجابات.",intro:"ثلاث إجابات بسيطة، وملخص تأخذه إلى جلستك مع المتخصص.",idea:"ما الفكرة أو المشكلة؟",placeholder:"مثلًا: منصة تجمع حجوزات الخدمات بدل الرسائل المتفرقة…",audience:"من سيستخدمها؟",audiencePlaceholder:"مثلًا: أصحاب العيادات وعملاؤهم",priority:"ما الخطوة الأهم الآن؟",priorities:["اختبار الفكرة","بناء منتج","ربط نظام قائم"],paths:["التنفيذ","الشراكة"],path:"المسار الذي يهمك",submit:"رتّب فكرتي",output:"ملخصك الأولي",next:"لجلسة المتخصص: راجع المشكلة والأولوية، ثم ناقش نطاق النسخة الأولى والميزانية وطريقة التعاون.",download:"نزّل الملخص",edit:"عدّل الإجابات",note:"نموذج محلي، وليس محادثة AI حية. لا تُرسل الإجابات ولا تُحفظ على خادم، ولا يُحجز موعد.",empty:"أضف الفكرة والجمهور لنرتب الملخص.",briefLabels:["الفكرة","الجمهور","الأولوية","مسار التعاون"]}
 },
 en:{
 metaTitle:"Okay | From your idea to an intelligent product",
 description:"Shape your idea with discovery, specialist guidance, software and AI agents, launch and marketing. Choose project delivery or explore a shared-risk partnership.",
 chapters:["The idea","The journey","In action","Growth","Partnership"],
 problem:{label:"01 / THE START",title:"You have the idea. Not yet the roadmap.",before:["Where do I start?","What should I build first?","How do I reach customers?"],after:["A clear concept","A testable product","A launch and growth plan"],bridge:"We find the next step. Together."},
 journey:{label:"02 / MAKE IT TANGIBLE",title:"Watch an idea become a product.",intro:"You know the problem. We help shape the path and build it with you.",demo:"Illustrative journey · choose a stage",output:"What you take forward",next:"Next stage",steps:[
 {title:"Tell us the idea",subtitle:"Initial AI discovery",output:"An idea brief and better questions",items:["I want a service booking platform.","Who is it for? What gets in their way?","Bookings are scattered across messages and sheets."]},
 {title:"Meet a specialist",subtitle:"A human working session",output:"Priorities and an initial scope",items:["Users: service providers and customers","Priority: booking and follow-up","Review feasibility and constraints together"]},
 {title:"See the concept",subtitle:"Prototype before scaling",output:"A concept you can review and refine",items:["Request a service","Choose a time","Confirm booking"]},
 {title:"Build and connect",subtitle:"Software with the right agents",output:"An end-to-end workflow to test",items:["Customer operations agent","Calendar and customer records","Human review for exceptions"]},
 {title:"Launch the product",subtitle:"Test, deploy, monitor",output:"A product ready for its first users",items:["Test the booking experience","Review permissions","Deploy and monitor"]},
 {title:"Learn and grow",subtitle:"With our marketing team",output:"A growth plan built on learning",items:["Define the audience and message","Test acquisition channels","Measure results and improve the product"]}
 ]},
 workflow:{label:"03 / ALREADY HAVE A SYSTEM?",title:"Add intelligence. Keep what works.",intro:"The right agent, inside your tools, from request to action.",demo:"Local simulation · no live system connections",stages:["Input","Understand","Decide","Act"],next:"Run the next step",replay:"Replay workflow",approval:"Human approval needed · approve to continue",cases:[
 {name:"Commerce",input:"I'd like to return an item from my order.",fields:["Intent: return","Source: customer message","Reference: order record"],decision:"Check the return policy and request staff approval.",action:"Create a return request and send instructions after approval.",systems:["WhatsApp","CRM","ERP"]},
 {name:"Services",input:"Book a consultation for me this week.",fields:["Intent: booking","Service: consultation","Source: website chat"],decision:"Compare available times with booking rules.",action:"Confirm the appointment and update the customer record.",systems:["Website","Calendar","CRM"]},
 {name:"Logistics",input:"Can you update me on my shipment?",fields:["Intent: tracking","Reference: shipment record","Source: email"],decision:"Read shipment status and escalate conflicting information.",action:"Send the recorded status and log the follow-up.",systems:["Email","Database","API"]}
 ]},
 growth:{label:"04 / LAUNCH IS THE BEGINNING",title:"A working product. A growing business.",intro:"Engineering and marketing move together, around goals we review with you.",steps:["Know the audience","Test the message","Measure adoption","Improve the experience"],note:"Deliverables: an acquisition plan, clear measurement, and product experiments. Outcomes depend on market and execution."},
 trust:{label:"YOU STAY IN CONTROL",title:"Autonomous work. Accountable decisions.",intro:"Controls designed around your data, workflow risks, and deployment needs.",controls:["Scoped agent permissions","Action history","Approval for sensitive decisions","Monitoring and exception handling"],approval:["Agent proposes","You approve","Execute and log"],link:"Explore security and deployment"},
 partnership:{label:"05 / BEYOND DELIVERY",title:"Built with you. Ready to grow with you.",intro:"Our vision is to become a business incubator, bringing engineering, AI, and marketing together.",vision:"Partners in the journey",plans:[
 {name:"Project delivery",tag:"A defined scope",title:"Your idea. Our execution.",items:["Agreed milestones and deliverables","Product development and agent integration","Launch and support within the agreed scope"],cta:"Prepare your project brief"},
 {name:"Partnership",tag:"Shared risk",title:"One ambition. Shared commitment.",items:["Lower upfront cost than delivery, subject to review","Agreed contributions to building and growth","Returns and responsibilities set by agreement"],cta:"Explore a partnership"}
 ],note:"Partnerships require project assessment and an agreement covering contributions, ownership, and returns. Success is not guaranteed."},
 faq:{title:"Before we begin.",items:[
 {q:"Do I need a fully developed idea?",a:"No. We start with the problem and audience, then work with a specialist to prioritize before defining the build scope."},
 {q:"Can you add an agent to an existing system?",a:"Yes. We first review available interfaces, permissions, and data, then define a suitable integration and testing workflow."},
 {q:"How does partnership differ from project delivery?",a:"Delivery has an agreed scope and milestones. Partnership targets lower upfront cost in exchange for contributions, risks, and returns defined after reviewing the project."},
 {q:"Is the discovery tool a live AI conversation?",a:"The current tool is a local prototype for organizing and downloading your idea brief. It does not contact an AI model, send your information, or book a session. Live chat and booking require service integration."}
 ]},
 discovery:{label:"START WITH AN IDEA",title:"You don't need all the answers.",intro:"Three simple answers. A brief to bring to your specialist session.",idea:"What is the idea or problem?",placeholder:"For example: a service booking platform to replace scattered messages…",audience:"Who is it for?",audiencePlaceholder:"For example: clinic owners and their customers",priority:"What matters most right now?",priorities:["Validate the idea","Build a product","Connect an existing system"],paths:["Project delivery","Partnership"],path:"Your preferred path",submit:"Organize my idea",output:"Your initial brief",next:"For your specialist session: review the problem and priority, then discuss first-release scope, budget, and the right working arrangement.",download:"Download brief",edit:"Edit answers",note:"Local prototype, not live AI. Answers are not sent or stored on a server. No appointment is booked.",empty:"Add your idea and audience to create the brief.",briefLabels:["Idea","Audience","Priority","Working model"]}
 }
};

