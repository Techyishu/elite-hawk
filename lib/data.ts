// ─── Services ────────────────────────────────────────────────────────────────
export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  shortDesc: string
  description: string[]
  benefits: string[]
  documents: string[]
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'study-visa',
    icon: 'GraduationCap',
    title: 'Study Visa',
    shortDesc: 'Turn academic dreams into reality with our expert study visa guidance.',
    description: [
      'Our study visa services cover the complete journey from university selection to visa approval. We partner with leading institutions in USA, Canada, UK, Australia, and Europe to ensure you get the best placement.',
      'Our specialists help with SOP writing, financial documentation, and interview preparation. We have an exceptional track record of securing visas for students across all academic levels.',
      'Whether you\'re pursuing undergraduate, postgraduate, or doctoral studies, we provide personalized counseling tailored to your academic goals and budget.',
    ],
    benefits: [
      'University shortlisting based on profile and budget',
      'Complete SOP and LOR guidance',
      'Financial documentation and funds planning',
      'Pre-departure and post-arrival support',
    ],
    documents: [
      'Valid passport (6 months validity)',
      'Academic transcripts and certificates',
      'English proficiency test scores (IELTS/TOEFL)',
      'Statement of Purpose (SOP)',
      'Letter of Recommendation (LOR)',
      'Bank statements (last 6 months)',
      'University acceptance letter',
    ],
  },
  {
    id: '2',
    slug: 'work-visa',
    icon: 'Briefcase',
    title: 'Work Visa',
    shortDesc: 'Unlock global career opportunities with our skilled worker visa expertise.',
    description: [
      'We specialize in work visa processing for skilled professionals seeking international career growth. Our team has deep expertise in navigating complex employer-sponsored visa programs across multiple countries.',
      'From job offer validation to visa filing, we handle every step meticulously. We work closely with both applicants and employers to ensure smooth processing and compliance.',
      'Our success rate for work visas stands at an impressive 97%, backed by years of experience and deep knowledge of immigration policies across target countries.',
    ],
    benefits: [
      'Job offer and employer sponsorship guidance',
      'Skills assessment and credential evaluation',
      'Visa category selection (H-1B, Tier-2, TSS, etc.)',
      'Family dependent visa processing',
    ],
    documents: [
      'Valid passport',
      'Employment offer letter',
      'Educational qualifications and certificates',
      'Professional experience letters',
      'Skills assessment report',
      'Medical examination results',
      'Police clearance certificate',
    ],
  },
  {
    id: '3',
    slug: 'tourist-visa',
    icon: 'Plane',
    title: 'Tourist Visa',
    shortDesc: 'Explore the world hassle-free with our streamlined tourist visa service.',
    description: [
      'Our tourist visa service makes international travel accessible and stress-free. We handle applications for short-stay, multiple-entry, and e-visa categories across all major tourist destinations.',
      'We ensure your application is complete, accurate, and submitted with the right supporting documents to maximize approval chances. Same-day processing available for urgent travel.',
      'From Schengen visas to USA B2 visas, our team is well-versed in the requirements and nuances of tourist visa applications worldwide.',
    ],
    benefits: [
      'Quick turnaround — 3-5 business days for most countries',
      'Multiple entry visa assistance',
      'Schengen and multi-country itinerary planning',
      'Travel insurance guidance',
    ],
    documents: [
      'Valid passport (6 months validity)',
      'Confirmed flight tickets',
      'Hotel bookings or invitation letter',
      'Travel insurance certificate',
      'Bank statements (3 months)',
      'Photographs as per specifications',
      'Employment certificate or business proof',
    ],
  },
  {
    id: '4',
    slug: 'pr-immigration',
    icon: 'Home',
    title: 'PR & Immigration',
    shortDesc: 'Build a permanent future abroad with our comprehensive PR pathway guidance.',
    description: [
      'Permanent residency is a life-changing milestone, and we guide you through every step of this complex journey. We specialize in points-based systems including Canada Express Entry, Australia SkillSelect, and New Zealand Skilled Migrant.',
      'Our immigration lawyers and consultants work together to maximize your CRS score, prepare a flawless application, and respond to any government requests promptly.',
      'We provide end-to-end support from profile assessment to landing confirmation, ensuring your dream of permanent residency becomes reality.',
    ],
    benefits: [
      'CRS score optimization and improvement strategies',
      'Province/state nomination guidance (PNP, RNIP)',
      'Complete documentation and translation support',
      'Biometrics, medicals, and RCMP coordination',
    ],
    documents: [
      'Valid passport (all old passports)',
      'Educational credential assessment (ECA)',
      'IELTS/CELPIP/PTE scores',
      'Detailed work experience letters',
      'Proof of funds',
      'Marriage/birth certificates (if applicable)',
      'Police clearance certificates from all countries',
    ],
  },
  {
    id: '5',
    slug: 'business-visa',
    icon: 'Building2',
    title: 'Business Visa',
    shortDesc: 'Expand your business horizons with our investor and entrepreneur visa solutions.',
    description: [
      'Whether you\'re attending international conferences, exploring investment opportunities, or setting up business operations abroad, our business visa services cover all scenarios with precision.',
      'We handle B-1 visas, investor visas (E-2, EB-5), entrepreneur visas, and intracompany transfer visas. Our legal team ensures complete compliance with business immigration regulations.',
      'For long-term business immigration, we provide strategic guidance on the best visa pathway based on your business goals, investment capacity, and target market.',
    ],
    benefits: [
      'Investor and entrepreneur visa pathways',
      'Intracompany transfer (L-1) visa processing',
      'Business visitor visa for meetings and conferences',
      'Start-up and innovation visa guidance',
    ],
    documents: [
      'Valid passport',
      'Business registration documents',
      'Financial statements (2-3 years)',
      'Bank reference letters',
      'Business plan (for investor visas)',
      'Board resolution or authorization letter',
      'Meeting/conference invitations',
    ],
  },
  {
    id: '6',
    slug: 'dependent-family-visa',
    icon: 'Users',
    title: 'Dependent / Family Visa',
    shortDesc: 'Reunite with your loved ones abroad — we make family immigration seamless.',
    description: [
      'Family separation is one of the most emotionally challenging aspects of international immigration. Our family visa services are designed to reunite you with your spouse, children, and dependent relatives as quickly as possible.',
      'We handle spouse visas, dependent child visas, parent visas, and family sponsorship applications across all major immigration destinations. Our team understands the emotional urgency and treats every application with the utmost care.',
      'From relationship evidence compilation to biometrics coordination, we manage every detail so you can focus on your family\'s future.',
    ],
    benefits: [
      'Spouse and partner visa processing',
      'Dependent children visa applications',
      'Parent and elderly dependent visa guidance',
      'Family sponsorship and financial requirements',
    ],
    documents: [
      'Sponsor\'s valid visa and status documents',
      'Marriage certificate (apostilled)',
      'Birth certificates of dependents',
      'Proof of relationship (photos, communication records)',
      'Sponsor\'s financial proof',
      'Accommodation proof in destination country',
      'Medical examination results',
    ],
  },
]

// ─── Countries ───────────────────────────────────────────────────────────────
export interface Country {
  id: string
  name: string
  flag: string
  region: 'Europe' | 'Asia' | 'Americas' | 'Oceania' | 'Middle East'
  visaTypes: string[]
  processingTime: string
  difficulty: 'Easy' | 'Medium' | 'Complex'
  description: string
}

export const countries: Country[] = [
  {
    id: '1',
    name: 'USA',
    flag: '🇺🇸',
    region: 'Americas',
    visaTypes: ['Study', 'Work', 'Tourist', 'Business'],
    processingTime: '3–8 weeks',
    difficulty: 'Complex',
    description: 'The land of opportunity with world-class universities and diverse career prospects.',
  },
  {
    id: '2',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'Americas',
    visaTypes: ['Study', 'Work', 'PR', 'Tourist'],
    processingTime: '2–6 weeks',
    difficulty: 'Medium',
    description: 'Top-ranked for quality of life and one of the most immigration-friendly countries.',
  },
  {
    id: '3',
    name: 'UK',
    flag: '🇬🇧',
    region: 'Europe',
    visaTypes: ['Study', 'Work', 'Tourist', 'Family'],
    processingTime: '2–4 weeks',
    difficulty: 'Medium',
    description: 'Home to Oxford, Cambridge, and some of the world\'s most prestigious institutions.',
  },
  {
    id: '4',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    visaTypes: ['Study', 'Work', 'PR', 'Tourist'],
    processingTime: '4–8 weeks',
    difficulty: 'Medium',
    description: 'Exceptional quality of life with a clear pathway to permanent residency.',
  },
  {
    id: '5',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    visaTypes: ['Study', 'Work', 'Job Seeker', 'Tourist'],
    processingTime: '4–8 weeks',
    difficulty: 'Medium',
    description: 'Europe\'s economic powerhouse with tuition-free universities and strong job market.',
  },
  {
    id: '6',
    name: 'France',
    flag: '🇫🇷',
    region: 'Europe',
    visaTypes: ['Study', 'Work', 'Tourist', 'Business'],
    processingTime: '2–4 weeks',
    difficulty: 'Easy',
    description: 'Schengen hub with world-class culture, cuisine, and educational institutions.',
  },
  {
    id: '7',
    name: 'New Zealand',
    flag: '🇳🇿',
    region: 'Oceania',
    visaTypes: ['Study', 'Work', 'PR', 'Tourist'],
    processingTime: '3–6 weeks',
    difficulty: 'Easy',
    description: 'Breathtaking landscapes combined with excellent education and lifestyle opportunities.',
  },
  {
    id: '8',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia',
    visaTypes: ['Work', 'Business', 'Tourist', 'Study'],
    processingTime: '1–3 weeks',
    difficulty: 'Easy',
    description: 'Asia\'s financial hub with exceptional career opportunities and high living standards.',
  },
  {
    id: '9',
    name: 'UAE',
    flag: '🇦🇪',
    region: 'Middle East',
    visaTypes: ['Work', 'Business', 'Tourist', 'Golden Visa'],
    processingTime: '1–2 weeks',
    difficulty: 'Easy',
    description: 'Tax-free income and a gateway to global business with the prestigious Golden Visa.',
  },
  {
    id: '10',
    name: 'Japan',
    flag: '🇯🇵',
    region: 'Asia',
    visaTypes: ['Study', 'Work', 'Tourist', 'Business'],
    processingTime: '2–4 weeks',
    difficulty: 'Medium',
    description: 'A blend of ancient culture and cutting-edge technology with growing career opportunities.',
  },
  {
    id: '11',
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Europe',
    visaTypes: ['Study', 'Work', 'Tourist', 'Business'],
    processingTime: '3–6 weeks',
    difficulty: 'Medium',
    description: 'Innovation hub of Europe with a thriving tech ecosystem and English-friendly environment.',
  },
  {
    id: '12',
    name: 'Ireland',
    flag: '🇮🇪',
    region: 'Europe',
    visaTypes: ['Study', 'Work', 'Tourist', 'PR'],
    processingTime: '4–8 weeks',
    difficulty: 'Medium',
    description: 'English-speaking gateway to the EU with a booming tech and pharma industry.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  name: string
  visa: string
  country: string
  rating: number
  quote: string
  initial: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Mehta',
    visa: 'Study Visa',
    country: 'Canada',
    rating: 5,
    quote: 'Elite Hawk made my Canadian university dream a reality. Their team was incredibly thorough with my SOP and documents. I got my study visa in just 3 weeks! I couldn\'t have done this without them.',
    initial: 'AM',
  },
  {
    id: '2',
    name: 'Vikram Nair',
    visa: 'Work Visa',
    country: 'Germany',
    rating: 5,
    quote: 'I had been rejected once before approaching Elite Hawk. Their immigration experts identified the gaps in my application and we got the approval on the very next attempt. Truly the best in the business.',
    initial: 'VN',
  },
  {
    id: '3',
    name: 'Sunita Reddy',
    visa: 'PR Visa',
    country: 'Australia',
    rating: 5,
    quote: 'The entire PR process seemed overwhelming until the Elite Hawk team broke it down into simple steps. Rahul sir guided us through every document. We landed in Melbourne 8 months after starting the process!',
    initial: 'SR',
  },
  {
    id: '4',
    name: 'Arjun Kapoor',
    visa: 'Tourist Visa',
    country: 'Europe (Schengen)',
    rating: 5,
    quote: 'Applied for Schengen for our family trip. Elite Hawk handled everything — the travel insurance, hotel bookings, bank statements. Got approved in 5 days! Highly recommend for anyone planning European travel.',
    initial: 'AK',
  },
  {
    id: '5',
    name: 'Pooja Singh',
    visa: 'Dependent Visa',
    country: 'UK',
    rating: 5,
    quote: 'My husband was on a Tier-2 visa in London and I needed to join him. The UK spouse visa process is notoriously complex but the Elite Hawk team made it seamless. Reunited with my family in just 6 weeks!',
    initial: 'PS',
  },
  {
    id: '6',
    name: 'Rahul Bhatia',
    visa: 'Business Visa',
    country: 'UAE',
    rating: 5,
    quote: 'Needed a UAE Golden Visa for business expansion. Elite Hawk\'s knowledge of UAE immigration rules is exceptional. They handled everything professionally and I got my Golden Visa without a single hiccup.',
    initial: 'RB',
  },
]

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  featured?: boolean
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'canada-pr-2025-express-entry-changes',
    title: 'Canada PR 2025: Express Entry Changes You Must Know',
    excerpt: 'Canada\'s Express Entry system underwent a significant overhaul in 2024. Here\'s everything Indian applicants need to know about the new category-based draws, updated CRS cutoffs, and the fastest pathway to Canadian PR in 2025.',
    category: 'PR & Immigration',
    date: 'March 5, 2025',
    readTime: '8 min read',
    author: 'Rahul Sharma',
    featured: true,
    content: `Canada's Express Entry system has long been the gold standard for skilled immigration. In 2025, Immigration, Refugees and Citizenship Canada (IRCC) has introduced several pivotal changes that significantly impact Indian applicants.

## Category-Based Draws Are Here to Stay

The category-based selection draws introduced in late 2023 have become a permanent feature of Express Entry. These targeted draws invite candidates with experience in specific in-demand sectors: healthcare, STEM, trades, agriculture, French-language proficiency, and transportation.

> "Category-based draws have been a game-changer for candidates with strong STEM backgrounds who previously needed CRS scores of 490+ to get invited. Now, targeted draws are pulling candidates at scores as low as 440." — Amit Kapur, Immigration Lawyer, Elite Hawk

For Indian applicants — who historically dominate STEM fields — this is excellent news. IT professionals, engineers, and healthcare workers are seeing dramatically improved chances of receiving Invitations to Apply (ITAs).

## CRS Score Trends in 2025

The average CRS cutoff for No-Job-Offer draws has hovered between 485–510 in the first quarter of 2025. While this remains competitive, there are several proven strategies to boost your score:

### Boosting Your CRS Score
- **Language scores**: A CLB 10 vs CLB 9 in English can add 30+ points. Consider retaking IELTS or switching to CELPIP for potentially better scores.
- **Provincial Nominee Programs (PNPs)**: A provincial nomination adds 600 CRS points — virtually guaranteeing an ITA. Provinces like Alberta, Ontario, and BC are actively nominating in-demand workers.
- **Canadian education**: Completing a post-secondary program in Canada adds both education points and Canadian experience.
- **Sibling in Canada**: Having a sibling with Canadian citizenship or PR adds 15 points to your CRS score.

## New IRCC Processing Times

IRCC has committed to 6-month processing for 80% of Express Entry applications in 2025. This is a significant improvement over the 12-18 month delays seen during the pandemic years. Digital-first processing and AI-assisted application review are the key drivers of this improvement.

## What Indian Applicants Should Do Now

1. Create or update your Express Entry profile immediately
2. Submit the IELTS/CELPIP test if your scores are older than 2 years
3. Get your Educational Credential Assessment (ECA) from WES
4. Explore Provincial Nominee Programs aligned with your occupation
5. Work with a certified immigration consultant to maximize your CRS score

The Canadian government has announced an ambitious immigration target of 500,000 new permanent residents annually through 2025-2027. The opportunities for qualified Indian applicants have never been greater.`,
  },
  {
    id: '2',
    slug: 'top-10-countries-indian-students-2025',
    title: 'Top 10 Countries for Indian Students in 2025',
    excerpt: 'From tuition-free education in Germany to post-study work rights in Canada, discover which countries offer the best value and opportunities for Indian students planning to study abroad in 2025.',
    category: 'Study Visa',
    date: 'February 20, 2025',
    readTime: '6 min read',
    author: 'Priya Verma',
    content: `Choosing the right country for higher education is one of the most important decisions you\'ll make. With hundreds of destinations available, Indian students need a clear framework to evaluate their options.

## 1. Canada — Best Overall for Indian Students

Canada continues to be the #1 destination for Indian students. With Post-Graduate Work Permit (PGWP) allowing 1-3 years of work experience, a clear pathway to PR, and a large Indian community, Canada offers unmatched value.

## 2. Germany — Best for Budget-Conscious Students

Public universities in Germany charge minimal or no tuition fees — even for international students. Combined with a strong job market and the Job Seeker Visa option after graduation, Germany is an incredible value proposition.

## 3. UK — Prestigious Degrees, Strong ROI

The Graduate Route visa allows 2 years of post-study work in the UK. British degrees are globally recognized and many top 50 universities actively recruit Indian students.

> "The UK has become significantly more student-friendly since introducing the Graduate Route. It's now one of our most requested destinations." — Priya Verma, Study Abroad Specialist

## 4. Australia — Post-Study Work Rights Leader

Australia offers 2-4 years of post-study work rights, making it ideal for students who want to gain international experience before returning or pursuing PR.

## 5. USA — Highest Career Earnings Potential

Despite complex visa rules, a US degree commands the highest salary premium globally. Strong OPT and STEM OPT extensions (up to 3 years for STEM grads) make it viable for career-focused students.

## Making Your Decision

Consider these factors when choosing your study destination:

1. **Total cost** (tuition + living + visa)
2. **Post-study work rights** duration and eligibility
3. **PR pathway** availability and timeline
4. **Course quality** and global recognition
5. **Indian community** presence and cultural comfort

Contact Elite Hawk for a free profile evaluation to determine which country best matches your academic background, budget, and long-term goals.`,
  },
  {
    id: '3',
    slug: 'work-visa-vs-work-permit-key-differences',
    title: 'Work Visa vs Work Permit: Key Differences Explained',
    excerpt: 'Many applicants confuse work visas and work permits, but they are fundamentally different documents with different purposes. Understanding the distinction can save you time, money, and avoid legal complications.',
    category: 'Work Visa',
    date: 'February 10, 2025',
    readTime: '5 min read',
    author: 'Amit Kapur',
    content: `The terms "work visa" and "work permit" are often used interchangeably — but they refer to distinctly different documents with different functions in the immigration process.

## What Is a Work Visa?

A work visa is an entry document issued by a country that allows a foreign national to enter the country for employment purposes. It's typically stamped in your passport and specifies:

- The purpose of entry (work/employment)
- The duration you're allowed to stay
- Sometimes the specific employer or job category

## What Is a Work Permit?

A work permit (also called a work authorization) is an official document issued by the government that allows you to legally work within that country. It's the authorization to work, separate from the right to enter.

> "Think of it this way: the visa gets you through the border, the work permit gets you into the job. You need both." — Amit Kapur, Immigration Lawyer

## Country-Specific Terminology

Different countries use different terminologies:

- **Canada**: Temporary Work Permit (separate from entry visa for some nationalities)
- **UK**: The visa and work authorization are combined in the BRP (Biometric Residence Permit)
- **USA**: H-1B Visa contains both entry permission and work authorization
- **Australia**: The visa subclass itself typically authorizes work

## Common Mistakes to Avoid

1. **Assuming tourist visa allows work** — It doesn't, in virtually every country
2. **Forgetting to renew the work permit** even when your visa is still valid
3. **Changing employers** without updating authorization documents
4. **Starting work before** receiving proper authorization

Understanding these distinctions helps avoid serious legal consequences including deportation and future visa bans. Always consult an immigration expert before beginning employment abroad.`,
  },
  {
    id: '4',
    slug: 'germany-job-seeker-visa-complete-guide',
    title: 'Germany Job Seeker Visa: Complete Guide for Indians',
    excerpt: 'Germany\'s Job Seeker Visa allows qualified professionals to spend 6 months in Germany looking for employment. Here\'s everything you need to know about eligibility, application process, and tips to land a job.',
    category: 'Work Visa',
    date: 'January 28, 2025',
    readTime: '7 min read',
    author: 'Rahul Sharma',
    content: `Germany's Job Seeker Visa is one of Europe's most forward-thinking immigration innovations. It allows qualified foreign professionals to enter Germany for up to 6 months to search for a job matching their qualifications.

## Who Is Eligible?

To qualify for the German Job Seeker Visa, you must:

1. Hold a recognized university degree (or equivalent vocational qualification)
2. Have at least 5 years of relevant work experience
3. Have sufficient financial resources (approximately €1,000/month)
4. Have basic German language skills (A1-B1 recommended, not mandatory)
5. Have health insurance coverage for the entire stay

## The Application Process

**Step 1: Credential Recognition**
Your foreign qualification must be assessed through anabin (university degrees) or the BIBB portal (vocational qualifications). This process takes 4-8 weeks.

**Step 2: Gather Documents**
- Valid passport
- Biometric photographs
- Qualification certificates with certified translations
- Proof of financial means
- Health insurance policy
- CV in German format (Lebenslauf)
- Cover letter explaining your Germany job search plan

**Step 3: Apply at German Embassy**
Book an appointment at the German Embassy in New Delhi, Mumbai, or Chennai. Processing typically takes 4-8 weeks.

> "We have helped over 200 Indian professionals obtain the German Job Seeker Visa. The key is a strong, well-structured application and knowing which German industries are actively hiring Indians." — Rahul Sharma, Senior Visa Consultant

## In-Demand Sectors for Indians in Germany

- **IT & Software Development** (massive shortage)
- **Engineering** (mechanical, electrical, automotive)
- **Healthcare** (doctors, nurses, therapists)
- **Skilled Trades** (electricians, plumbers, carpenters)

Once you secure employment, you can convert your Job Seeker Visa to a Work Visa without returning to India. This is the single biggest advantage of this visa category.`,
  },
  {
    id: '5',
    slug: 'australia-pr-points-calculator-2025',
    title: 'Australia PR Points Calculator 2025: Maximize Your Score',
    excerpt: 'Australia\'s points-tested visa system rewards age, English proficiency, skills, and Australian experience. Learn how to calculate your score and strategies to reach the 65-point threshold for a SkillSelect invitation.',
    category: 'PR & Immigration',
    date: 'January 15, 2025',
    readTime: '9 min read',
    author: 'Priya Verma',
    content: `Australia's skilled migration program operates on a points-based system through SkillSelect. To receive an invitation to apply for a skilled visa (subclass 189, 190, or 491), you need a minimum of 65 points — but competitive scores typically range from 85-100 points.

## How Points Are Calculated

### Age (Max 30 points)
- 18-24 years: 25 points
- 25-32 years: 30 points (maximum)
- 33-39 years: 25 points
- 40-44 years: 15 points
- 45+ years: 0 points (ineligible for most visas)

### English Language (Max 20 points)
- Competent English (IELTS 6.0 overall): 0 bonus points (minimum requirement)
- Proficient English (IELTS 7.0 overall): 10 points
- Superior English (IELTS 8.0 overall): 20 points

### Skilled Employment (Max 20 points)
- Outside Australia: 1-3 years (5 pts), 3-5 years (10 pts), 5-8 years (15 pts), 8+ years (20 pts)
- In Australia: 1-3 years (5 pts), 3-5 years (10 pts), 5-8 years (15 pts), 8+ years (20 pts)

> "Most of our successful PR applicants focus first on maximizing their English score. Moving from Proficient (IELTS 7.0) to Superior (IELTS 8.0) gives 10 additional points that can be the difference between waiting 6 months and waiting 2 years." — Priya Verma

### Education (Max 20 points)
- PhD: 20 points
- Bachelor's or higher: 15 points
- Diploma or trade qualification: 10 points

### Other Points Available
- Australian study requirement: 5 points
- Specialist education qualification: 10 points
- Credentialed community language: 5 points
- Study in regional Australia: 5 points
- Partner skills: 5 points
- Professional Year in Australia: 5 points

## Your Action Plan

1. Get your qualifications assessed through the relevant assessing authority (VETASSESS, Engineers Australia, AHPRA, etc.)
2. Take IELTS/PTE Academic — aim for 8.0 overall for maximum points
3. File an Expression of Interest (EOI) in SkillSelect
4. Monitor invitation rounds in your occupation
5. Consider state/territory nomination (190 visa) for additional 5 points and potentially lower cutoffs`,
  },
  {
    id: '6',
    slug: 'uae-golden-visa-who-qualifies',
    title: 'UAE Golden Visa: Who Qualifies and How to Apply',
    excerpt: 'The UAE Golden Visa offers 5 or 10-year renewable residency to investors, entrepreneurs, exceptional talents, and outstanding students. Here\'s the complete eligibility guide and application process for 2025.',
    category: 'Business Visa',
    date: 'January 5, 2025',
    readTime: '6 min read',
    author: 'Amit Kapur',
    content: `The UAE Golden Visa program, introduced in 2019 and significantly expanded in 2022, represents one of the most attractive long-term residency options available globally. It offers 5 or 10-year renewable residency with no employer sponsorship required.

## Who Qualifies for the UAE Golden Visa?

### Investors (10-Year Visa)
- Real estate investment of at least AED 2 million (≈ ₹4.7 crore)
- Business investment of at least AED 2 million or partnership in a business paying AED 250,000+ in annual taxes
- Financial deposits of AED 2 million in UAE

### Entrepreneurs (5-Year Visa)
- Owner of a startup valued at AED 500,000+ with approval from an accredited business incubator
- Existing entrepreneurs with successful projects worth AED 1 million+
- Acceptance from a Ministry of Economy-approved business incubator

### Specialized Talents (10-Year Visa)
- Doctors and medical specialists with recognized specialization
- Scientists with research achievements (must have recommendation from Mohammed bin Rashid Academy of Scientists)
- Creative individuals in arts and culture with cultural ministry recommendation
- Inventors with patents of significant value

### Outstanding Students
- Students in UAE with GPA 3.75 and above in secondary school
- University students with GPA 3.5+ from UAE or top 100 world universities

> "The Golden Visa has transformed Dubai and Abu Dhabi into genuine long-term homes rather than temporary work postings. We're seeing tremendous interest from Indian professionals and business owners who want the stability of long-term residency with the tax advantages of the UAE." — Amit Kapur, Immigration Lawyer

## Key Benefits

1. **No employer sponsorship** required — complete independence
2. **10-year renewable** residency (or 5-year for some categories)
3. **Family sponsorship** — spouse, children, and parents can be included
4. **Multiple entry** — no minimum stay requirement
5. **Business setup** freedom — own 100% of UAE companies

## How Elite Hawk Can Help

Our team has processed over 50 UAE Golden Visa applications. We assist with document preparation, translation, attestation, and liaison with UAE authorities to ensure a smooth, successful application.`,
  },
]

// ─── Team Members ─────────────────────────────────────────────────────────────
export interface TeamMember {
  name: string
  role: string
  exp: string
  initial: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Visa Consultant',
    exp: '8 years',
    initial: 'RS',
    bio: 'Specialized in North American immigration with expertise in Canada Express Entry and USA H-1B processing.',
  },
  {
    name: 'Priya Verma',
    role: 'Study Abroad Specialist',
    exp: '5 years',
    initial: 'PV',
    bio: 'Helped 1,200+ students secure admissions to top universities across Canada, UK, Australia, and Europe.',
  },
  {
    name: 'Amit Kapur',
    role: 'Immigration Lawyer',
    exp: '10 years',
    initial: 'AK',
    bio: 'Licensed immigration attorney with deep expertise in PR pathways, appeals, and complex immigration cases.',
  },
  {
    name: 'Neha Singh',
    role: 'Document Specialist',
    exp: '4 years',
    initial: 'NS',
    bio: 'Expert in document attestation, translation, and compliance verification for over 30 countries.',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'How long does visa processing take?',
    answer: 'Processing times vary by country and visa type. Tourist visas typically take 3–10 business days, study visas 3–8 weeks, and work visas 4–12 weeks. We always provide an accurate timeline specific to your application during the free consultation.',
  },
  {
    question: 'What documents do I need for a study visa?',
    answer: 'Core documents include your valid passport, academic transcripts, English proficiency scores (IELTS/TOEFL/PTE), university acceptance letter, Statement of Purpose, bank statements showing sufficient funds, and financial sponsorship documents. Requirements vary by country — our specialists provide a precise checklist for your specific destination.',
  },
  {
    question: 'Do you guarantee visa approval?',
    answer: 'No legitimate consultant can guarantee visa approval as the final decision rests with the embassy or immigration authority. However, our 98% success rate reflects our expertise in building compelling, complete applications. We identify and address potential red flags before submission to maximize your approval chances.',
  },
  {
    question: 'What are your consultation and service fees?',
    answer: 'The initial consultation is completely free. Our service fees depend on the visa type and complexity — typically ranging from ₹15,000 for tourist visas to ₹75,000+ for PR applications. We provide a transparent fee structure upfront with no hidden charges. Payment plans are available.',
  },
  {
    question: 'Can you help if my visa was rejected before?',
    answer: 'Absolutely. Previous rejections are not a permanent barrier. Our immigration lawyers analyze the rejection reason, identify weaknesses in the original application, and build a stronger case addressing those specific concerns. Many of our successful clients came to us after a prior rejection.',
  },
  {
    question: 'Do you assist after visa approval?',
    answer: 'Yes, our support doesn\'t end at visa approval. We provide pre-departure orientation covering accommodation, banking, SIM card setup, and cultural adjustment. For study visa clients, we assist with university enrollment confirmation and airport pickup coordination through our partner network.',
  },
]
