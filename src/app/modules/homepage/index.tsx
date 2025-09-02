'use client'

import { useState } from 'react'
import { SearchInput } from './search'
import { SmallCards } from './small-cards'

export const HomePage = () => {
  const [searchInput, setSearchInput] = useState('')
  const news = [
    {
      id: 1,
      title:
        'Government refutes fabricated story of Sam Rainsy, who accused Samdech Techo Hun Sen of buying shares in Thai energy company',
      description:
        'On September 2, 2025, the Royal Government Spokesperson issued a statement denying false information posted on the Facebook account of Sam Rainsy, falsely alleging that Samdech Techo Hun Sen, President of the Senate, was involved in the purchase of 24% of shares in a major Thai energy company called Bangchak for billions of baht through a South African middleman, but that the Thai Social Security Fund refused to sell it.',
      date: '2025-09-02',
      image:
        'https://oslofreedomforum.com/wp-content/uploads/2024/02/Speaker-Sam-Rainsy-V1.png',
    },
    {
      id: 2,
      title: 'Cambodia and Laos to strengthen cooperation in border trade',
      description:
        'On September 1, 2025, Cambodian Prime Minister Samdech Techo Hun Sen and Lao Prime Minister Sonexay Siphandone held a bilateral meeting on the sidelines of the 78th UN General Assembly in New York, USA. They discussed enhancing cooperation in border trade and agreed to expedite the construction of the Vientiane-Vang Tao railway project to boost economic growth and connectivity between the two countries.',
      date: '2025-09-01',
      image:
        'https://www.aljazeera.com/wp-content/uploads/2017/08/262a18fdbc3145a69c1a88ccbc3bdea5_18.jpeg',
    },
    {
      id: 3,
      title:
        'Cambodia urges Thailand to release 18 captured soldiers amid ongoing tensions',
      description:
        'The Ministry of National Defence confirmed that the 18 Cambodian soldiers captured by Thai military forces after the ceasefire have not been released. Spokesperson Lt Gen Maly Socheata called on Thailand to promptly return the soldiers to Cambodia.',
      date: '2025-09-01',
      image:
        'https://s.france24.com/media/display/014b9f50-694a-11f0-9659-005056a97e36/w:1280/p:16x9/000-67NV49F-1.jpg',
    },
    {
      id: 4,
      title: 'Cambodia and Thailand agree to a ceasefire after border clashes',
      description:
        'On August 31, 2025, Cambodia and Thailand agreed to a ceasefire following border clashes that resulted in casualties on both sides. The agreement was reached after high-level talks between the two countries, with both sides committing to de-escalate tensions and work towards a peaceful resolution of their border disputes.',
      date: '2025-08-31',
      image:
        'https://i0.wp.com/fulcrum.sg/wp-content/uploads/AFP__20250820__69Z83T3__v1__HighRes__CambodiaThailandBorderConflict-e1756139812704.jpg?fit=1248%2C562&ssl=1',
    },
    {
      id: 5,
      title: 'Cambodia, China pledge to deepen trade, investment ties',
      description:
        'Both leaders agree on expanding bilateral trade and investment under the Cambodia-China Free Trade Agreement (CCFTA), citing the need to diversify supply chains and attract high-value industries.',
      date: '2025-09-2',
      image:
        'https://www.idcpc.gov.cn/english2023/ttxw_5749/202302/W020230728406753223084.png',
    },
  ]
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <SearchInput input={searchInput} setInput={setSearchInput} />
      <div className='flex flex-col gap-5'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit'>
          Recent Articles
        </h3>
        <SmallCards news={news} searchInput={searchInput} />
      </div>
    </div>
  )
}
