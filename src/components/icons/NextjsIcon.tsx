import convertFaSizeToPx from "../../utils/convertFaSizeToPx"
//Vectors and icons by <a href="https://github.com/vscode-icons/vscode-icons?ref=svgrepo.com" target="_blank">Vscode Icons</a> in MIT License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>
//https://www.svgrepo.com/svg/373770/light-next

const NextjsIcon = ({ size }:
  { size: string }) => {
  const pixelSize = convertFaSizeToPx(size)
  return (
    <svg
      fill="#ffffff"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width={pixelSize}
      height={pixelSize}>
      <title>Next.js</title>
      <g id="SVGRepo_bgCarrier"
        stroke-width="0">
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round">
      </g><g id="SVGRepo_iconCarrier">

        <path
          d="M29.874,13.964A14.058,14.058,0,0,0,20.3,2.653a14.74,14.74,0,0,0-2.915-.61c-.263-.027-2.072-.057-2.3-.035h0c-.06,0-.252.024-.424.038A14.034,14.034,0,0,0,4.6,7.848a13.855,13.855,0,0,0-2.471,6.116A10.731,10.731,0,0,0,2,16a10.737,10.737,0,0,0,.126,2.039A14.055,14.055,0,0,0,11.7,29.352a14.772,14.772,0,0,0,2.956.613,25.525,25.525,0,0,0,2.682,0,14.139,14.139,0,0,0,5.045-1.475c.24-.123.287-.156.254-.183s-1.048-1.393-2.28-3.057l-2.239-3.024-2.8-4.152c-1.544-2.282-2.814-4.148-2.825-4.148s-.022,1.841-.027,4.094a32.213,32.213,0,0,1-.06,4.2.5.5,0,0,1-.241.249c-.088.044-.165.052-.578.052h-.473l-.126-.079a.517.517,0,0,1-.184-.2l-.057-.123.005-5.487.009-5.49.084-.107a.768.768,0,0,1,.2-.167c.112-.054.156-.06.629-.06.559,0,.652.022.8.181.041.044,1.56,2.331,3.377,5.087s4.3,6.519,5.524,8.366L23.59,27.8l.112-.074A14.357,14.357,0,0,0,26.579,25.2a13.932,13.932,0,0,0,3.295-7.156A10.737,10.737,0,0,0,30,16,10.731,10.731,0,0,0,29.874,13.964Zm-8.761,1.855-.008,4.921-.868-1.33-.87-1.33V14.5c0-2.312.011-3.612.027-3.675a.558.558,0,0,1,.271-.345c.112-.058.153-.063.583-.063.4,0,.476.005.566.055a.546.546,0,0,1,.277.323C21.113,10.869,21.118,12.39,21.113,15.819Z">
        </path></g></svg>

  )
}

export default NextjsIcon