import React from 'react'
import Layout from '../components/Layout'

export default function about() {
  return (
    <Layout title="about">
      <div className='h-screen'>
      <div className="h-screen w-3/5 m-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-4xl font-bold text-[#4E632E] mb-3">
            re:ducing food wastage. re:growing the planet. re:imagining the future.
          </div>
          <div className="flex flex-col items-center justify-center">
            features in list
          </div>
        </div>
      </div>
    </Layout>
  )
}


