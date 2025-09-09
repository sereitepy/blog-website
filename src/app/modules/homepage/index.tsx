'use client'

import { useState } from 'react'
import { SearchInput } from './search'
import { SmallCards } from './small-cards'

export const HomePage = () => {
  const [searchInput, setSearchInput] = useState('')
  const news = [
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
      title:
        'iPhone 16 Pro Max Camera System Revolutionizes Mobile Photography',
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
  ]

  const video = [
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
  const data = news.filter(
    item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.toLowerCase())
  )

  const videoData = video.filter(
    item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.toLowerCase())
  )
  return (
    <div className='flex flex-col gap-10 items-center justify-center max-w-[2050px] mx-auto'>
      <SearchInput input={searchInput} setInput={setSearchInput} />
      <div className='flex flex-col gap-5 w-full'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit flex items-baseline'>
          Recent Articles
        </h3>
        <SmallCards data={data} />
      </div>
      <div className='flex flex-col gap-5 w-full'>
        <h3 className='font-bold text-xl hover:underline hover:underline-offset-4 cursor-pointer w-fit flex items-baseline'>
          Videography Articles
        </h3>
        <SmallCards data={videoData} />
      </div>
    </div>
  )
}
