// === CONFIGURATION ===
const AI_MODEL = 'chatgpt'; // Change to 'chatgpt' / 'gemini' to switch models
const PANEL_COUNT = 5;

const info = `
# TULIKA JAIN - HISTORY DATABASE
============================================

## EDUCATION
**UC Berkeley (2013-2017)** - Computer Science degree. 3 summers at Qualcomm internships.

## WORK EXPERIENCE

### CURRENT: FREELANCE (2024-Present)  
**AI-Powered IoT Product Manager**
- Building AI-powered IoT devices using Edge Impulse
- Training ML models for connected hardware
- Combining Louis Vuitton IoT expertise with Malou AI experience

### MALOU (2023-2024)
**AI Product Manager | Series-A Startup**
- Tripled AI feature adoption, boosted client satisfaction
- Closed key sales deals with tailored AI features
- Launched first sales prospecting AI feature
- B2B SaaS platform automating content and insights

### CONSULTING (2022-Present)
**Product & Strategy Consultant**
- Medical diagnostic tool advisory (USA)
- Nidaan Medicare platform optimization (India)
- Results: 70% bug reduction, 80% fewer UX complaints, 30% faster development

### NEXT DECADE (2021-2022)
**Co-Founder & CPO | VC-Backed NFT Startup**
- Clients: Hennessy, Cartier, Dior, Baumer, HB Antwerp
- Revenue: $200K initial collection, $500K+ total from 800+ buyers
- Built Web3 x Luxury x 3D platform
- 700 users in 3 months for 3D social network

### LOUIS VUITTON (2018-2021)
**Technical Product Manager | IoT & Connected Devices**
- Built 5+ connected devices generating $250M+ global sales
- Led 5+ international teams (China, USA, France)
- Created first connected runway bags/shoes for Virgil Abloh shows
- Products: Tambour watches, speakers, earphones, fiber-optic accessories

### QUALCOMM (2014-2016)
**Software Engineering Intern** - 3 consecutive summers, C/Python/Docker

## KEY METRICS
- $250M+ product sales (Louis Vuitton)
- $500K+ NFT revenue (Next Decade)  
- 3x AI adoption increase (Malou)
- 70% bug reduction (Consulting)
- 5+ international teams managed
- 800+ NFT buyers acquired

## TECHNICAL SKILLS
**Programming**: Python, C, Swift, Flutter, Java
**AI/ML**: Edge Impulse, model training, IoT integration
**Tools**: Figma, Mixpanel, JIRA, Adobe Suite
**Languages**: English, French, Hindi, Spanish

## UNIQUE VALUE
Cross-industry expertise: Luxury + AI + IoT + Web3. Proven track record scaling products internationally with quantified business impact.
`;

const info_long = `
# TULIKA JAIN - PERSONAL HISTORY DATABASE
==============================================

## EDUCATION
**University of California, Berkeley (2013-2017)**
- Bachelor of Arts, Computer Science
- Core Foundation: Algorithms, data structures, software engineering principles
- Early exposure to cutting-edge tech through internships during summers '14, '15, '16
- Developed strong analytical thinking and problem-solving skills
- Built foundation for future product management and technical leadership roles

## WORK EXPERIENCE

### CURRENT: PRODUCT & STRATEGY CONSULTING (2024-Present (2025))
**AI-Powered IoT Product Manager & Technical Freelancer**
**Current Focus**: Building AI-powered IoT devices for innovative companies
- **Expertise**: Bridging AI/ML capabilities with IoT hardware constraints
- **Client Impact**: Helping companies integrate intelligent features into connected devices
- **Skills Applied**: Product strategy, technical implementation, AI/ML model development
- **Unique Value**: Combines deep IoT experience (Louis Vuitton) with AI expertise (Malou)

**Past Work:**
- **Scope**: Leadership advisory, market insights, product wireframes/prototypes
- **Client Portfolio**: Early-stage startups to established companies across USA and India
- **Medical Tech**: Advised pioneering diagnostic tool in R&D phase (USA-based)
- **Healthcare Platform**: Partnered with Nidaan Medicare (Indian doctor-patient platform)
- **Technical Achievements**: 
  - Reduced bugs by 70%, UX complaints by 80%
  - Cut manual onboarding by 30%
  - Improved development time by 30% through agile implementation
- **Process Innovation**: Converted broad ideas into high-fidelity prototypes for 4+ clients
- **Strategic Impact**: Redefined product strategies using analytics to challenge assumptions

### MALOU - SERIES-A STARTUP (2023-2024)
**AI Product Manager | Paris, France**
- **Company**: B2B SaaS platform automating content and delivering business insights
- **Key Achievement**: Tripled AI feature adoption while boosting client satisfaction
- **Technical Impact**: Built AI features that automated operations and provided actionable insights
- **Business Impact**: Closed key sales deals through tailored AI features for strategic clients
- **Leadership**: Led cross-functional teams, drove data-informed product decisions
- **Innovation**: Launched first sales prospecting AI feature
- **Methodology**: End-to-end delivery, agile processes, bug reduction strategies
- **Skills Developed**: AI product strategy, B2B SaaS scaling, client-focused feature development

### NEXT DECADE - CO-FOUNDER & CPO (2021-2022)
**VC-Backed NFT Startup | Paris, France**
- **Company Vision**: Web3 x Luxury x 3D platform for premium brands
- **Prestigious Clients**: Hennessy, Cartier, Dior, Baumer, HB Antwerp
- **Financial Success**: 
  - Initial NFT collection: $200K in 4 months
  - 3 collections grossed $500K+ from 800+ buyers
  - 2 collections sold out in under 10 minutes
  - Premium partnerships: $10K NFTs with HB Antwerp diamonds
- **Product Innovation**: 3D social network gaining 700 users in 3 months
- **Community Building**: 1-1 relationships with Discord members, co-building experiences
- **Technical Leadership**: Concept through launch of Web3 platform
- **Market Expertise**: Luxury brand entry into NFT/Web3 space

### LOUIS VUITTON - TECHNICAL PRODUCT MANAGER (2018-2021)
**IoT & Connected Devices | Paris, France**
- **Recruitment**: Handpicked for elite multidisciplinary team under CFO
- **Financial Impact**: Built 5+ connected devices generating $250M+ in global sales
- **Commercial Success**: 3 sold-out products
- **Technical Leadership**: 
  - Led 5+ international teams (China, USA, France) simultaneously
  - Used agile methodologies across cultures and time zones
  - Managed IoT objects, companion apps, and APIs end-to-end
- **Fashion Innovation**: 
  - Created first-ever connected bags/shoes for runway shows
  - Worked with Virgil Abloh (Men's) and Women's collections
  - 2/3 runway prototypes became mass-produced commercial products
- **Global Operations**: 
  - International client advisor training
  - Technical support during/after launches
  - Marketing photoshoots and visual merchandising strategy
- **Product Portfolio**:
  - **Commercial**: Tambour Horizon Light Up Connected Watch, Louis Vuitton Horizon Light Up Speaker, Louis Vuitton Earphones, Tambour Horizon Connected Watch (V2)
  - **Fashion Show**: Fiber-optic bag, Fiber-optic shoes, Canvas of the Future

### EMPATHY - CO-FOUNDER & FRONT-END DEVELOPER (2020)
**COVID Tracking App | Remote**
- **Innovation**: Community-oriented approach to pandemic tracking
- **Technical**: Flutter development, iOS/Android ready in 2 months
- **Challenge**: Couldn't launch due to new government regulations
- **Skills**: Product co-design, rapid development, regulatory navigation

### QUALCOMM - SOFTWARE ENGINEERING INTERN (Summers 2014-2016)
**San Diego, California, USA**
- **Early Career Foundation**: 3 consecutive summer internships
- **Technical Skills**: Docker, C, Python, C++, GTK+
- **Projects**: Scheduler policy, profiler, camera testing machine calibration software
- **Industry Exposure**: Mobile technology, hardware-software integration

## TECHNICAL SKILLS & EXPERTISE

### Programming Languages
- **Core**: Python, C, C++, Java
- **Mobile**: iOS/Android, Swift, Flutter
- **Emerging**: AI/ML model development, Edge computing

### AI/ML & IoT Specialization
- **Current Focus**: Edge Impulse for IoT AI models
- **Data Training**: Model training and optimization
- **IoT Integration**: AI-powered connected device development
- **Edge Computing**: Optimizing AI for resource-constrained devices

### Product & Design Tools
- **Design**: Adobe Creative Suite, Figma, Sketch
- **Analytics**: Mixpanel, data-driven decision making
- **Project Management**: TeamGantt, JIRA, Notion
- **Methodology**: Agile, end-to-end delivery, cross-functional leadership

### Languages
- **English**: Native fluency
- **French**: Fluent (Paris-based experience)
- **Hindi**: Native fluency
- **Spanish**: Intermediate

## UNIQUE VALUE PROPOSITION

### Cross-Industry Expertise
- **Luxury Tech**: Understanding of premium brand requirements and aesthetics
- **AI/ML**: Practical experience building and scaling AI features
- **IoT**: Deep hardware-software integration experience
- **Web3**: Early adopter and successful implementer in luxury space
- **Healthcare**: Advisory experience in medical technology

### Leadership & Scale
- **International Teams**: Led distributed teams across 3+ countries
- **Financial Impact**: Products generating $250M+ in sales
- **User Growth**: Built platforms serving 700+ to 800+ users
- **Client Satisfaction**: Consistently improved metrics (adoption, satisfaction, bug reduction)

### Innovation Track Record
- **First-to-Market**: Created first connected luxury accessories for fashion shows
- **AI Integration**: Successfully integrated AI into B2B SaaS with 3x adoption increase
- **Web3 Pioneer**: Early luxury brand Web3 integration with significant financial success
- **Process Innovation**: Improved development efficiency by 30% through agile implementation

## CAREER PROGRESSION THEMES
1. **Technical Foundation** → **Product Leadership** → **Strategic Innovation**
2. **Individual Contributor** → **Team Leader** → **Company Co-Founder**
3. **Local Impact** → **International Scale** → **Industry Innovation**
4. **Traditional Tech** → **Luxury Tech** → **Emerging Tech (AI/Web3/IoT)**

## CURRENT MISSION (2025)
Bridging the gap between AI capabilities and IoT limitations to create intelligent, connected products that solve real-world problems while maintaining the premium quality and user experience standards learned from luxury brand experience.
`;


const prompt = `
You are creating a comic book about Tulika Jain. Here's her complete professional history for context: ${info_long}. 

Generate ${PANEL_COUNT} career highlights for a comic book about Tulika Jain. Touch on Berkeley, Louis Vuitton, Next Decade, Malou, and Current Focus.
Each highlight should be:
- Short and punchy (max 15 words)
- Start with a strong action verb
- End with an exclamation mark
- Be separated by newlines
- Focus on major career achievements
- Talk in chronological order when relevant
- Suitable for HR or Product Manager audiences

Example format and tone of voice:
Mastered the code at UC Berkeley - Computer Science degree unlocked!,
Stormed the fashion capital as Louis Vuitton's IoT Product Manager,
Co-founded a venture-backed startup bridging luxury brands with the NFT frontier,

Do not include any other text in your response.
`;

const HIGHLIGHT_PROMPT = prompt;

const QUESTION_PROMPT = (question) =>`
You are a creative comic book writer, talk about Tulika Jain's career. Given the following question: "${question}", generate less than ${PANEL_COUNT} new comic-style responses.
Here's her complete professional history for context: ${info_long}.
Each highlight should be:
- Short and punchy (max 20 words)
- Start with a strong action verb
- Be separated by newlines
- Suitable for HR or Product Manager audiences

Do not include any other text, bullets, etc in your response. Have the response directly. 
`;

// === IMAGE MATCHING ===
// Map of image files to their associated keywords
const imageMap = {
  // Career & Education
  "berkeley.jpg": ["education", "degree", "university", "berkeley", "graduation", "college", "student"],
  
  // Work Experience
  "lightingbag.jpg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "lvspeaker.jpeg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "thv3.jpg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "lightingshoes.jpg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "thv2multiple.jpg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "lightningbagrunway.jpg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "lvearphones.jpg": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],
  "thv2.png": ["lv", "louis", "vuitton", "fashion", "luxury", "retail", "brand"],

  "lightingshoes.jpg": ["iot", "internet", "things", "connected", "device", "smart"],
  "malou.png": ["malou", "series-a", "restaurant"],

  "furbun.jpeg": ["decade", "nft", "web3", "luxury", "hennessy", "cartier", "dior", "baumer", "hb antwerp"],
  "dior.jpg": ["decade", "dior", "luxury", "nft", "collaboration", "partnership"],
};

const defaultImages = [
  "profilepic.jpg",
  // "default2.jpg",
  // "default3.jpg",
  // "default4.jpg",
  // "default5.jpg"
];

// === AI FETCH LOGIC ===
async function fetchHighlights(prompt) {
  const response = await fetch('https://tulikajain-github-io.onrender.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      model: AI_MODEL
    })
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  const data = await response.json();
  // Process the response based on the model used
  if (AI_MODEL === 'gemini') {
    const generatedText = data.candidates[0].content.parts[0].text;
    return generatedText.split('\n').map(l => l.trim()).filter(Boolean).slice(0, PANEL_COUNT);
  } else {
    const content = data.choices[0].message.content;
    return content.split('\n').map(l => l.trim()).filter(Boolean).slice(0, PANEL_COUNT);
  }
}

// === IMAGE MATCHING LOGIC ===
function matchImageToHighlight(highlight, usedImages) {
  const words = highlight
    .toLowerCase()
    .split(/\s+/)
    .map(w => w.replace(/[.,!?]/g, '')); // Remove common punctuation
  
  // Try to find a matching image based on keywords
  for (const [imageFile, keywords] of Object.entries(imageMap)) {
    if (usedImages.has(imageFile)) continue;
    
    // Check if any of the highlight words match any of the image's keywords
    if (keywords.some(keyword => words.includes(keyword))) {
      usedImages.add(imageFile);
      return `assets/${imageFile}`;
    }
  }
  
  // Fallback: pick a default image not used yet
  for (const file of defaultImages) {
    if (!usedImages.has(file)) {
      usedImages.add(file);
      return `assets/${file}`;
    }
  }
  
  // If all used, just pick the first default
  return `assets/${defaultImages[0]}`;
}

// === UI LOGIC ===
const panelsContainer = document.getElementById("comic-panels");
const loader = document.getElementById("loader");
const form = document.getElementById("question-form");
const errorMessage = document.getElementById("error-message");

async function showComicPanels(highlights) {
  console.log('Showing comic panels with highlights:', highlights); // Debug log
  panelsContainer.innerHTML = "";
  const usedImages = new Set();
  
  for (let i = 0; i < highlights.length; i++) {
    // Show loader
    loader.classList.remove("hidden");
    // Simulate panel-by-panel loading
    await new Promise((res) => setTimeout(res, 700 + Math.random() * 500));
    // Hide loader for this panel
    loader.classList.add("hidden");
    // Create panel
    const panel = document.createElement("div");
    panel.className = "comic-panel";
    // Image
    const img = document.createElement("img");
    img.className = "comic-image";
    const imagePath = matchImageToHighlight(highlights[i], usedImages);
    console.log(`Panel ${i + 1} image path:`, imagePath); // Debug log
    img.src = imagePath;
    img.alt = "Comic panel image";
    img.loading = "lazy";
    // Speech bubble
    const bubble = document.createElement("div");
    bubble.className = "speech-bubble";
    bubble.textContent = highlights[i];
    // Assemble
    panel.appendChild(img);
    panel.appendChild(bubble);
    panelsContainer.appendChild(panel);
    // Animate in
    setTimeout(() => panel.classList.add("visible"), 100);
  }
}

async function generatePanels(prompt) {
  console.log('Generating panels with prompt:', prompt); // Debug log
  errorMessage.classList.add("hidden");
  loader.classList.remove("hidden");
  form.classList.add("hidden");
  
  try {
    const highlights = await fetchHighlights(prompt);
    console.log('Received highlights:', highlights); // Debug log
    
    if (!highlights || highlights.length === 0) {
      throw new Error('No highlights received from the API');
    }
    
    await showComicPanels(highlights);
    form.classList.remove("hidden");
  } catch (err) {
    console.error('Error in generatePanels:', err); // Debug log
    errorMessage.textContent = `Error: ${err.message}`;
    errorMessage.classList.remove("hidden");
  } finally {
    loader.classList.add("hidden");
  }
}

// === FORM HANDLING ===
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const question = document.getElementById("user-question").value.trim();
  if (!question) return;
  await generatePanels(QUESTION_PROMPT(question));
  form.reset();
});

// === INITIAL LOAD ===
window.addEventListener("DOMContentLoaded", () => {
  generatePanels(HIGHLIGHT_PROMPT);
});