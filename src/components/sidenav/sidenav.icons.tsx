interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

// Create a Icons compound component for nav icons
export const Icons = {
  home: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="translate(-2 4)">
        <rect
          width="24"
          height="24"
          transform="translate(2 -4)"
          fill="rgba(255, 255, 255, 0)"
        />
        <g transform="translate(2 -4)">
          <path d="M23.5,14.772c0,.067,0,.133-.069.133a.149.149,0,0,1-.138-.133c-.207-.266-10.675-11.323-11.157-11.723-.207-.2-.275-.133-.482.067C11.588,3.182.707,14.639.569,14.838c-.069.067-.138.067-.138-.067a10.912,10.912,0,0,1-.413-3.663A10.341,10.341,0,0,1,1.533,6.046,11.451,11.451,0,0,1,9.384.318,11.829,11.829,0,0,1,20.61,3.582a10.907,10.907,0,0,1,3.237,6.261,8.818,8.818,0,0,1,.138,1.932A15.1,15.1,0,0,1,23.5,14.772Z" />
          <path
            d="M.08,9.109c-.069-.067-.138-.133,0-.266S8.275.25,8.482.05c.069-.067.138-.067.138,0,.275.333,8.2,8.726,8.4,8.859.069.067.069.133-.069.133a9.34,9.34,0,0,1-1.515,1.266,11.776,11.776,0,0,1-5.923,2.131,6.121,6.121,0,0,1-1.1.067A11.907,11.907,0,0,1,.08,9.109Z"
            transform="translate(3.451 10.925)"
          />
        </g>
      </g>
    </svg>
  ),
  cards: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="translate(-2.5 4)">
        <rect
          fill="rgba(255, 255, 255, 0)"
          width="24"
          height="24"
          transform="translate(2.5 -4)"
        />
        <g transform="translate(2.5 -91.333)">
          <g transform="translate(0 98.333)">
            <path
              d="M23.5,213.333H.5a.474.474,0,0,0-.5.5v7.053a2.485,2.485,0,0,0,2.5,2.519h19a2.485,2.485,0,0,0,2.5-2.519v-7.053A.474.474,0,0,0,23.5,213.333Zm-20,4.03h4a.5.5,0,0,1,0,1.008h-4a.5.5,0,0,1,0-1.008Zm7,3.023h-7a.5.5,0,0,1,0-1.008h7a.5.5,0,0,1,0,1.008Zm8.5,0a1.68,1.68,0,0,1-1-.3,1.68,1.68,0,0,1-1,.3,2.015,2.015,0,0,1,0-4.03,1.68,1.68,0,0,1,1,.3,1.68,1.68,0,0,1,1-.3,2.015,2.015,0,0,1,0,4.03Z"
              transform="translate(0 -213.333)"
            />
          </g>
          <g transform="translate(0 90.333)">
            <path
              d="M21.5,85.333H2.5c-1.4,0-2.5,1.378-2.5,3.132v1.253c0,.376.2.626.5.626h23c.3,0,.5-.251.5-.626V88.465C24,86.711,22.9,85.333,21.5,85.333Z"
              transform="translate(0 -85.333)"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  payments: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24.25"
      viewBox="0 0 24 24.25"
      {...props}
    >
      <g transform="translate(-2 4.125)">
        <rect
          width="24"
          height="24"
          transform="translate(2 -4)"
          fill="rgba(255, 255, 255, 0)"
        />
        <g transform="translate(-21.169 -14)">
          <path d="M35.169,10A11.837,11.837,0,0,0,23.5,22,11.838,11.838,0,0,0,35.167,34a11.33,11.33,0,0,0,6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075,1.075,0,0,0-1.06-1.09,1.026,1.026,0,0,0-.764.343,9.322,9.322,0,0,1-5.633,1.9,9.7,9.7,0,0,1-9.563-9.833,9.567,9.567,0,1,1,19.127,0,10.009,10.009,0,0,1-.921,4.19,9.724,9.724,0,0,0-.49,1.185l-.007.1a1.078,1.078,0,0,0,1.063,1.092,1.054,1.054,0,0,0,1-.776l0,0A12.189,12.189,0,0,0,46.836,22,11.835,11.835,0,0,0,35.169,10ZM28.653,20.7a1.045,1.045,0,0,0,.3.676,1.026,1.026,0,0,0,.676.3h0a.791.791,0,0,0,.108,0l10.8,0a1.033,1.033,0,1,0,0-2.067l-8.437.012,1.222-1.234a1,1,0,0,0-1.413-1.413l-2.956,2.983a.988.988,0,0,0-.289.632l-.007,0a.654.654,0,0,0,0,.11ZM36.9,27.591a1,1,0,0,0,1.416,0l2.958-2.978a1,1,0,0,0,.289-.629l.007,0s0-.073,0-.108h0a1.039,1.039,0,0,0-.3-.673,1.05,1.05,0,0,0-.676-.3h0a.791.791,0,0,0-.108,0l-10.8,0a1.031,1.031,0,1,0,0,2.062l8.439-.012-1.222,1.237A.987.987,0,0,0,36.9,27.591Z" />
        </g>
      </g>
    </svg>
  ),
  credit: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="translate(-1.5 4)">
        <rect
          width="24"
          height="24"
          transform="translate(1.5 -4)"
          fill="rgba(255, 255, 255, 0)"
        />
        <g transform="translate(1.5 -4.001)">
          <path d="M12,24A12,12,0,0,1,3.515,3.516,12,12,0,0,1,20.485,20.487,11.922,11.922,0,0,1,12,24ZM10.453,9.746v8.837a1.162,1.162,0,0,0,1.161,1.161h.775a1.162,1.162,0,0,0,1.161-1.161V9.746l3.5,3.652a1.159,1.159,0,0,0,1.659.021l.527-.533a1.161,1.161,0,0,0,.342-.827,1.142,1.142,0,0,0-.342-.812L12.823,4.825a1.159,1.159,0,0,0-1.64,0L4.757,11.247a1.155,1.155,0,0,0-.342.824,1.142,1.142,0,0,0,.342.815l.527.533a1.166,1.166,0,0,0,.823.339,1.151,1.151,0,0,0,.842-.36l3.5-3.65Z" />
        </g>
      </g>
    </svg>
  ),
  settings: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g transform="translate(-2 4)">
        <rect
          fill="rgba(255, 255, 255, 0)"
          width="24"
          height="24"
          transform="translate(2 -4)"
        />
        <g transform="translate(4 -4)">
          <path
            d="M92.817,11.547a5.6,5.6,0,0,0,4.091-1.691A5.58,5.58,0,0,0,98.6,5.773a5.581,5.581,0,0,0-1.7-4.082,5.793,5.793,0,0,0-8.181,0,5.581,5.581,0,0,0-1.7,4.082,5.58,5.58,0,0,0,1.7,4.082A5.605,5.605,0,0,0,92.817,11.547Zm0,0"
            transform="translate(-82.957)"
          />
          <path
            d="M19.975,254.17a14.244,14.244,0,0,0-.194-1.515,11.921,11.921,0,0,0-.373-1.523,7.517,7.517,0,0,0-.627-1.42,5.36,5.36,0,0,0-.945-1.23,4.168,4.168,0,0,0-1.358-.852,4.7,4.7,0,0,0-1.733-.313,1.76,1.76,0,0,0-.94.4c-.282.183-.611.4-.979.63a5.612,5.612,0,0,1-1.266.557,4.923,4.923,0,0,1-3.1,0,5.6,5.6,0,0,1-1.265-.557c-.364-.232-.694-.445-.98-.631a1.758,1.758,0,0,0-.939-.4,4.691,4.691,0,0,0-1.733.314,4.165,4.165,0,0,0-1.358.852,5.361,5.361,0,0,0-.945,1.23,7.532,7.532,0,0,0-.627,1.42,11.949,11.949,0,0,0-.373,1.523,14.193,14.193,0,0,0-.194,1.515c-.032.459-.048.935-.048,1.416A3.978,3.978,0,0,0,1.184,258.6a4.264,4.264,0,0,0,3.05,1.111H15.79a4.263,4.263,0,0,0,3.05-1.111,3.976,3.976,0,0,0,1.184-3.012C20.023,255.1,20.007,254.626,19.975,254.17Zm0,0"
            transform="translate(0 -235.708)"
          />
        </g>
      </g>
    </svg>
  ),
};
