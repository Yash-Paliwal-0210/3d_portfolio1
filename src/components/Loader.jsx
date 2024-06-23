import React from 'react'
import { Html } from '@react-three/drei';

const  Loader = () => {
  return (
    <Html>
    {/* <div className='flex justify-center items-center'>
      <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'>

      </div>
    </div> */}
  
   <div className="spinner absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div></div>
<div></div>
</div>



    </Html>
  )
}

export default Loader
