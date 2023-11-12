import React from 'react'

interface ISpanInCircle{
      color: boolean | null,
      children: React.ReactNode
}
const SpanInCircle = (props: ISpanInCircle) => {
      const { color, children } = props;

      if (color === true) {
            return (
                  <span className="inline-block w-[50px] h-[50px] text-center text-2xl p-2 m-1 bg-green-200 border border-green-400 rounded-full">
                        {children}
                  </span>
            )
      }
      else if (color === false) {
            return (
                  <span className="inline-block w-[50px] h-[50px] text-center text-2xl p-2 m-1 bg-red-200 border border-red-400 rounded-full">
                        {children}
                  </span>
            )
      }
      else {
            return (
                  <span className="inline-block w-[50px] h-[50px] text-center text-2xl p-2 m-1 bg-slate-200 border border-slate-400 rounded-full">
                        {children}
                  </span>
            )
      }
}

export default SpanInCircle