export type Language = "en" | "es" | "ar"

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  { code: "ar" as Language, name: "العربية", flag: "🇸🇦" },
]

export const translations = {
  en: {
    // Landing Page
    title: "Check if your wound is infected",
    subtitle: "Get instant AI-powered analysis of your wound to determine if medical attention is needed",
    startButton: "Start Wound Check",
    step1Title: "Take Photo",
    step1Desc: "Position your wound in front of the camera",
    step2Title: "AI Analysis",
    step2Desc: "Get instant results from our medical AI",
    step3Title: "Find Help",
    step3Desc: "Locate nearby health centers if needed",

    // Camera Interface
    positionTitle: "Position Your Wound",
    positionDesc: "Center your wound in the camera view and click the capture button when ready",
    positionGuide: "Position wound here",
    cameraError: "Unable to access camera. Please ensure camera permissions are granted.",
    cameraAccessTitle: "Camera Access Required",
    tryAgain: "Try Again",

    // Processing
    analyzingTitle: "Analyzing Your Wound",
    analyzingDesc: "Our AI is carefully examining your image...",
    processingImage: "Processing Image",
    aiAnalysis: "AI analysis in progress...",

    // Results
    goBack: "Go Back",
    infectedTitle: "Possible Infection Detected",
    infectedDesc:
      "Signs of infection detected. We strongly recommend visiting one of the closest health centers shown below immediately for professional medical treatment.",
    notInfectedTitle: "No Infection Detected",
    notInfectedDesc:
      "Your wound appears healthy. We still recommend visiting one of the closest health centers shown below for a professional evaluation and proper wound care guidance.",
    nearbyHealthCenters: "Nearby Health Centers",
    interactiveMap: "Interactive Map",
    healthCentersNear: "Health centers near your location",

    // Privacy
    privacyTitle: "Privacy & Anonymity",
    anonymityTitle: "Complete Anonymity:",
    anonymityDesc:
      "This service operates completely anonymously. We do not collect, store, or track any personal information, including your identity, location, or any data that could be used to identify you.",
    noDataTitle: "No Data Storage:",
    noDataDesc:
      "Your photos are processed in real-time and immediately deleted after analysis. No images or results are saved to our servers or any external databases. Each session is completely independent and private.",
    noAuthoritiesTitle: "No Authorities Contacted:",
    noAuthoritiesDesc:
      "We do not contact emergency services, healthcare providers, or any authorities based on your results. All decisions about seeking medical care remain entirely in your control.",
    medicalDisclaimer:
      "Medical Disclaimer: This tool provides AI-assisted analysis for informational purposes only and should not replace professional medical advice. Always consult healthcare professionals for proper medical diagnosis and treatment.",
  },
  es: {
    // Landing Page
    title: "Comprueba si tu herida está infectada",
    subtitle: "Obtén un análisis instantáneo con IA de tu herida para determinar si necesitas atención médica",
    startButton: "Comenzar Revisión",
    step1Title: "Tomar Foto",
    step1Desc: "Posiciona tu herida frente a la cámara",
    step2Title: "Análisis IA",
    step2Desc: "Obtén resultados instantáneos de nuestra IA médica",
    step3Title: "Buscar Ayuda",
    step3Desc: "Localiza centros de salud cercanos si es necesario",

    // Camera Interface
    positionTitle: "Posiciona Tu Herida",
    positionDesc: "Centra tu herida en la vista de la cámara y haz clic en el botón de captura cuando estés listo",
    positionGuide: "Posiciona la herida aquí",
    cameraError: "No se puede acceder a la cámara. Por favor, asegúrate de que los permisos de cámara estén otorgados.",
    cameraAccessTitle: "Acceso a Cámara Requerido",
    tryAgain: "Intentar de Nuevo",

    // Processing
    analyzingTitle: "Analizando Tu Herida",
    analyzingDesc: "Nuestra IA está examinando cuidadosamente tu imagen...",
    processingImage: "Procesando Imagen",
    aiAnalysis: "Análisis de IA en progreso...",

    // Results
    goBack: "Volver",
    infectedTitle: "Posible Infección Detectada",
    infectedDesc:
      "Se detectaron signos de infección. Recomendamos encarecidamente visitar uno de los centros de salud más cercanos que se muestran a continuación inmediatamente para recibir tratamiento médico profesional.",
    notInfectedTitle: "No Se Detectó Infección",
    notInfectedDesc:
      "Tu herida parece saludable. Aún recomendamos visitar uno de los centros de salud más cercanos que se muestran a continuación para una evaluación profesional y orientación sobre el cuidado adecuado de heridas.",
    nearbyHealthCenters: "Centros de Salud Cercanos",
    interactiveMap: "Mapa Interactivo",
    healthCentersNear: "Centros de salud cerca de tu ubicación",

    // Privacy
    privacyTitle: "Privacidad y Anonimato",
    anonymityTitle: "Anonimato Completo:",
    anonymityDesc:
      "Este servicio opera completamente de forma anónima. No recopilamos, almacenamos ni rastreamos información personal, incluyendo tu identidad, ubicación o cualquier dato que pueda usarse para identificarte.",
    noDataTitle: "Sin Almacenamiento de Datos:",
    noDataDesc:
      "Tus fotos se procesan en tiempo real y se eliminan inmediatamente después del análisis. No se guardan imágenes ni resultados en nuestros servidores o bases de datos externas. Cada sesión es completamente independiente y privada.",
    noAuthoritiesTitle: "Sin Contacto con Autoridades:",
    noAuthoritiesDesc:
      "No contactamos servicios de emergencia, proveedores de salud o autoridades basándose en tus resultados. Todas las decisiones sobre buscar atención médica permanecen completamente bajo tu control.",
    medicalDisclaimer:
      "Descargo Médico: Esta herramienta proporciona análisis asistido por IA solo con fines informativos y no debe reemplazar el consejo médico profesional. Siempre consulta profesionales de la salud para diagnóstico y tratamiento médico adecuado.",
  },
  ar: {
    // Landing Page
    title: "تحقق من إصابة جرحك بالعدوى",
    subtitle: "احصل على تحليل فوري بالذكاء الاصطناعي لجرحك لتحديد ما إذا كنت بحاجة إلى عناية طبية",
    startButton: "بدء فحص الجرح",
    step1Title: "التقاط صورة",
    step1Desc: "ضع جرحك أمام الكاميرا",
    step2Title: "تحليل الذكاء الاصطناعي",
    step2Desc: "احصل على نتائج فورية من الذكاء الاصطناعي الطبي",
    step3Title: "العثور على المساعدة",
    step3Desc: "حدد موقع المراكز الصحية القريبة إذا لزم الأمر",

    // Camera Interface
    positionTitle: "ضع جرحك في الموضع",
    positionDesc: "ضع جرحك في وسط عرض الكاميرا واضغط على زر الالتقاط عندما تكون جاهزاً",
    positionGuide: "ضع الجرح هنا",
    cameraError: "غير قادر على الوصول إلى الكاميرا. يرجى التأكد من منح أذونات الكاميرا.",
    cameraAccessTitle: "مطلوب الوصول إلى الكاميرا",
    tryAgain: "حاول مرة أخرى",

    // Processing
    analyzingTitle: "تحليل جرحك",
    analyzingDesc: "الذكاء الاصطناعي يفحص صورتك بعناية...",
    processingImage: "معالجة الصورة",
    aiAnalysis: "تحليل الذكاء الاصطناعي قيد التقدم...",

    // Results
    goBack: "العودة",
    infectedTitle: "تم اكتشاف عدوى محتملة",
    infectedDesc:
      "تم اكتشاف علامات العدوى. نوصي بشدة بزيارة أحد المراكز الصحية الأقرب المعروضة أدناه فوراً للحصول على العلاج الطبي المهني.",
    notInfectedTitle: "لم يتم اكتشاف عدوى",
    notInfectedDesc:
      "يبدو جرحك صحياً. ما زلنا نوصي بزيارة أحد المراكز الصحية الأقرب المعروضة أدناه للحصول على تقييم مهني وإرشادات حول العناية المناسبة بالجروح.",
    nearbyHealthCenters: "المراكز الصحية القريبة",
    interactiveMap: "خريطة تفاعلية",
    healthCentersNear: "المراكز الصحية بالقرب من موقعك",

    // Privacy
    privacyTitle: "الخصوصية وعدم الكشف عن الهوية",
    anonymityTitle: "عدم الكشف عن الهوية بالكامل:",
    anonymityDesc:
      "تعمل هذه الخدمة بشكل مجهول تماماً. نحن لا نجمع أو نخزن أو نتتبع أي معلومات شخصية، بما في ذلك هويتك أو موقعك أو أي بيانات يمكن استخدامها لتحديد هويتك.",
    noDataTitle: "عدم تخزين البيانات:",
    noDataDesc:
      "يتم معالجة صورك في الوقت الفعلي وحذفها فوراً بعد التحليل. لا يتم حفظ أي صور أو نتائج على خوادمنا أو أي قواعد بيانات خارجية. كل جلسة مستقلة وخاصة تماماً.",
    noAuthoritiesTitle: "عدم الاتصال بالسلطات:",
    noAuthoritiesDesc:
      "نحن لا نتصل بخدمات الطوارئ أو مقدمي الرعاية الصحية أو أي سلطات بناءً على نتائجك. جميع القرارات حول طلب الرعاية الطبية تبقى تحت سيطرتك بالكامل.",
    medicalDisclaimer:
      "إخلاء المسؤولية الطبية: توفر هذه الأداة تحليلاً بمساعدة الذكاء الاصطناعي لأغراض إعلامية فقط ولا يجب أن تحل محل المشورة الطبية المهنية. استشر دائماً المهنيين الصحيين للتشخيص والعلاج الطبي المناسب.",
  },
}

export function getTranslation(language: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
