import React from 'react'
import { BadgeUsageExample } from './Card'
import { ListUsageExample } from './List'
import { AreaChartUsageExample } from '@/AreaChart'
import { Card } from '@tremor/react'




function page() {
  return (
    <div className='container mx-auto p-10'>
      <h1 className=' text-2xl p-2 text-white'>Dashboard Tremor Next JS Tailwind CSS</h1>
    <div className='grid grid-cols-4 gap-2 m-2' >
      <BadgeUsageExample/>
      <BadgeUsageExample/>
      <BadgeUsageExample/>
      <BadgeUsageExample/>
    </div>
    <div className='grid grid-cols-4 mt-10'>
    <div className='col-span-2 px-2'>
      <ListUsageExample/>
    </div>
    <div className='col-span-2 px-2'>
    <Card>
     
    
    <AreaChartUsageExample/>
  
    </Card>
    </div>
    </div>
    
    </div>
  )
}

export default page