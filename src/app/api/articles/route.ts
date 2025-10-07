import { useParams } from 'next/navigation'
import { NextRequest } from 'next/server'

const en = [
  {
    id: 1,
    title: 'Sony Unveils Revolutionary A7R VI with 61MP Full-Frame Sensor',
    description:
      'Sony announces its latest flagship mirrorless camera featuring a groundbreaking 61-megapixel back-illuminated sensor, 8K video recording at 30fps, and advanced AI-powered autofocus system. The A7R VI promises to set new standards for professional photography and videography with improved low-light performance and extended battery life.',
    date: '2025-09-02',
    image:
      'https://images.unsplash.com/photo-1617468264204-92588bd6485a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Canon Announces Major Firmware Update for EOS R5 Mark II',
    description:
      'Canon releases a significant firmware update for the EOS R5 Mark II, introducing new creative video modes, enhanced subject tracking, and improved overheating management. The update includes Log3 recording capabilities and advanced zebra patterns for professional filmmakers.',
    date: '2025-09-01',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'iPhone 16 Pro Max Camera System Revolutionizes Mobile Photography',
    description:
      "Apple's latest iPhone 16 Pro Max introduces a triple-camera system with computational photography breakthroughs. Features include 10x optical zoom, ProRAW Max format, and cinematic video stabilization that rivals professional equipment, making high-quality content creation accessible to everyone.",
    date: '2025-09-01',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'DJI Mavic 4 Pro Drone Sets New Standards for Aerial Videography',
    description:
      'DJI launches the Mavic 4 Pro with a Hasselblad camera capable of 6K video recording and 48MP stills. The drone features omnidirectional obstacle avoidance, 45-minute flight time, and advanced ActiveTrack 6.0 for seamless subject following in complex environments.',
    date: '2025-08-31',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Adobe Premiere Pro 2025 Introduces AI-Powered Editing Features',
    description:
      'Adobe unveils Premiere Pro 2025 with groundbreaking AI tools including automatic scene detection, intelligent color grading, and real-time object removal. The new Sensei-powered features promise to reduce editing time by up to 40% while maintaining professional quality standards.',
    date: '2025-08-30',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop',
  },

  {
    id: 'mastering-cinematic-shots',
    title: 'Mastering Cinematic Camera Movements',
    description:
      'Learn professional camera movement techniques including dolly shots, crane movements, and handheld stabilization to create compelling visual narratives.',
    date: '2025-09-02',
  },
  {
    id: 'color-grading-essentials',
    title: 'Color Grading Essentials for Filmmakers',
    date: '2025-09-01',
    description:
      'Master the art of color correction and grading using DaVinci Resolve and Adobe Premiere Pro to enhance your visual storytelling.',
  },
  {
    id: 'portrait-lighting-techniques',
    title: 'Professional Portrait Lighting Setups',
    date: '2025-09-01',
    description:
      'Explore advanced lighting techniques including key light, fill light, and rim lighting to create stunning professional portraits.',
  },
  {
    id: 'drone-cinematography-guide',
    title: 'Aerial Cinematography with Drones',
    date: '2025-08-31',
    description:
      'Complete guide to capturing breathtaking aerial footage, including flight planning, composition, and post-production techniques.',
  },
  {
    id: 'macro-photography-masterclass',
    title: 'Macro Photography: Capturing the Miniature World',
    date: '2025-08-30',
    description:
      'Dive into macro photography techniques, equipment selection, and creative approaches to photographing small subjects in extraordinary detail.',
  },
]

const km = [
  {
    id: 1,
    title:
      'Sony ប្រកាសចេញកាមេរ៉ា A7R VI បដិវត្តន៍ថ្មីជាមួយឧបករណ៍ចាប់រូបភាព Full-Frame 61MP',
    description:
      'Sony ប្រកាសពីកាមេរ៉ា mirrorless ចុងក្រោយបំផុតរបស់ខ្លួន ដែលមានឧបករណ៍ចាប់រូបភាព back-illuminated ទំហំ 61 មេហ្គាភិចសែល, ថតវីដេអូ 8K ក្នុងល្បឿន 30fps និងប្រព័ន្ធ autofocus ដែលប្រើបច្ចេកវិទ្យា AI ជឿនលឿន។ A7R VI សន្យាថានឹងបង្កើតស្តង់ដារថ្មីសម្រាប់ការថតរូបនិងថតវីដេអូអាជីព ជាមួយនឹងការកែលម្អការថតក្នុងពន្លឺតិច និងអាយុកាលថ្មកាន់តែយូរ។',
    date: '2025-09-02',
    image:
      'https://images.unsplash.com/photo-1617468264204-92588bd6485a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Canon ប្រកាសអំពីការអាប់ដេត Firmware សំខាន់សម្រាប់ EOS R5 Mark II',
    description:
      'Canon ចេញផ្សាយការអាប់ដេត firmware សំខាន់សម្រាប់ EOS R5 Mark II ដោយបន្ថែមមុខងារថតវីដេអូច្នៃប្រឌិតថ្មី, ការតាមដានវត្ថុប្រសើរឡើង និងការគ្រប់គ្រងកំដៅហួសកំណត់កាន់តែល្អ។ ការអាប់ដេតនេះរួមមានសមត្ថភាពថត Log3 និងលំនាំ zebra កម្រិតខ្ពស់សម្រាប់អ្នកផលិតភាពយន្តអាជីព។',
    date: '2025-09-01',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'ប្រព័ន្ធកាមេរ៉ា iPhone 16 Pro Max បង្កើតបដិវត្តន៍ការថតរូបទូរស័ព្ទ',
    description:
      'iPhone 16 Pro Max ចុងក្រោយបំផុតរបស់ Apple បង្ហាញប្រព័ន្ធកាមេរ៉ាបីគ្រឿងជាមួយនឹងការឈានមុខក្នុងការថតរូបតាមគណនា។ មុខងាររួមមាន zoom អុបទិក 10x, ទម្រង់ ProRAW Max និងការថតវីដេអូស្ថេរភាពបែប cinematic ដែលប្រៀបផ្ទឹមនឹងឧបករណ៍អាជីព ធ្វើឱ្យការបង្កើតខ្លឹមសារគុណភាពខ្ពស់អាចចូលដំណើរការបានសម្រាប់មនុស្សគ្រប់គ្នា។',
    date: '2025-09-01',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop',
  },
  {
    id: 4,
    title:
      'ដ្រូន DJI Mavic 4 Pro បង្កើតស្តង់ដារថ្មីសម្រាប់ការថតវីដេអូពីលើអាកាស',
    description:
      'DJI ចេញផ្សាយ Mavic 4 Pro ជាមួយកាមេរ៉ា Hasselblad ដែលអាចថតវីដេអូ 6K និងរូបថត 48MP។ ដ្រូននេះមានមុខងារចៀសវាងឧបសគ្គពីគ្រប់ទិស, រយៈពេលហោះហើរ 45 នាទី និង ActiveTrack 6.0 កម្រិតខ្ពស់សម្រាប់ការតាមដានវត្ថុយ៉ាងរលូននៅក្នុងបរិយាកាសស្មុគស្មាញ។',
    date: '2025-08-31',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Adobe Premiere Pro 2025 បង្ហាញមុខងារកែសម្រួលដោយប្រើ AI',
    description:
      'Adobe បង្ហាញ Premiere Pro 2025 ជាមួយឧបករណ៍ AI គួរឱ្យភ្ញាក់ផ្អើល រួមមានការរកឃើញឈុតឆាកដោយស្វ័យប្រវត្តិ, ការកែសម្រួលពណ៌ឆ្លាតវៃ និងការដកវត្ថុចេញជាក់ស្តែង។ មុខងារថ្មីដែលដំណើរការដោយ Sensei សន្យាថានឹងកាត់បន្ថយពេលវេលាកែសម្រួលរហូតដល់ 40% ខណៈពេលរក្សាស្តង់ដារគុណភាពអាជីព។',
    date: '2025-08-30',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop',
  },

  {
    id: 'mastering-cinematic-shots',
    title: 'ការស្ទាត់ជំនាញចលនាកាមេរ៉ាបែប Cinematic',
    description:
      'រៀនបច្ចេកទេសចលនាកាមេរ៉ាអាជីព រួមមាន dolly shots, ចលនា crane និងការថតដោយដៃដែលមានស្ថេរភាព ដើម្បីបង្កើតការនិទានរឿងដែលមានទស្សនៈទាក់ទាញ។',
    date: '2025-09-02',
  },
  {
    id: 'color-grading-essentials',
    title: 'មូលដ្ឋានគ្រឹះនៃការកែសម្រួលពណ៌សម្រាប់អ្នកផលិតភាពយន្ត',
    date: '2025-09-01',
    description:
      'ស្ទាត់ជំនាញក្នុងសិល្បៈនៃការកែតម្រូវពណ៌និងការកែសម្រួលពណ៌ដោយប្រើ DaVinci Resolve និង Adobe Premiere Pro ដើម្បីបង្កើនការនិទានរឿងតាមរូបភាពរបស់អ្នក។',
  },
  {
    id: 'portrait-lighting-techniques',
    title: 'ការរៀបចំពន្លឺថតរូបបុគ្គលអាជីព',
    date: '2025-09-01',
    description:
      'ស្វែងយល់បច្ចេកទេសពន្លឺកម្រិតខ្ពស់ រួមមាន key light, fill light និង rim lighting ដើម្បីបង្កើតរូបបុគ្គលអាជីពគួរឱ្យស្រលាញ់។',
  },
  {
    id: 'drone-cinematography-guide',
    title: 'ការថតភាពយន្តពីលើអាកាសជាមួយដ្រូន',
    date: '2025-08-31',
    description:
      'មគ្គុទ្ទេសក៍ពេញលេញក្នុងការថតរូបពីលើអាកាសគួរឱ្យស្រលាញ់ រួមមានការរៀបចំផែនការហោះហើរ, ការតែងនិពន្ធ និងបច្ចេកទេសក្រោយផលិតកម្ម។',
  },
  {
    id: 'macro-photography-masterclass',
    title: 'ការថតរូប Macro: ការថតពិភពលោកតូចៗ',
    date: '2025-08-30',
    description:
      'ជ្រាបជ្រៅក្នុងបច្ចេកទេសថតរូប macro, ការជ្រើសរើសឧបករណ៍ និងវិធីសាស្រ្តច្នៃប្រឌិតក្នុងការថតរូបវត្ថុតូចៗដោយលម្អិតពិសេស។',
  },
]

const params = useParams<{ id: string }>()
if (params.id) {
  const article =
    params.id === 'km'
      ? km.find(item => item.id.toString() === params.id)
      : en.find(item => item.id.toString() === params.id)
}

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query') // e.g. `/api/search?query=hello`

  return new Response(
    JSON.stringify({ result: `You searched for: ${query}` }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
}

export async function PUT(request: Request) {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json()
  const { name } = body

  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name }

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  })
}
