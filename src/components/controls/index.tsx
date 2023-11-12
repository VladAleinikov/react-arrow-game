import React from 'react'

interface IControlsProps {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Controls = (props: IControlsProps) => {
  const { isTimerActive, setIsTimerActive } = props;
  return (
    <div className='flex flex-row'>
      <button
        className='text-white text-lg flex bg-blue-700 disabled:bg-slate-500 disabled:hover:bg-slate-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        disabled={isTimerActive}
        onClick={e => setIsTimerActive(true)}>
        PLAY 
        <svg className='ml-3' fill="#fff" height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 210 210">
          <path d="M179.07,105L30.93,210V0L179.07,105z" />
        </svg>
      </button>
      <button
        className='text-white text-lg flex bg-blue-700 disabled:bg-slate-500 disabled:hover:bg-slate-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        disabled={!isTimerActive}
        onClick={e => setIsTimerActive(false)}>
        STOP
        <svg className='ml-3' fill="#fff" width="18px" height="18px" viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" >

          <title>pause [#1010]</title>
          <desc>Created with Sketch.</desc>
          <defs>

          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-67.000000, -3765.000000)" fill="#000000">
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path fill='#fff' d="M11,3613 L13,3613 L13,3605 L11,3605 L11,3613 Z M15,3613 L17,3613 L17,3605 L15,3605 L15,3613 Z" id="pause-[#1010]">

                </path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  )
}

export default Controls