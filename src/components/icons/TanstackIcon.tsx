import convertFaSizeToPx from "../../utils/convertFaSizeToPx"
//https://github.com/TanStack/tanstack.com/blob/main/public/favicons/favicon-32x32.png
import tanstack from "../../assets/tanstack-favicon-32x32.png"

const TanstackIcon = ({ size = "2xl" }:
  { size: string }) => {
  const pixelSize = convertFaSizeToPx(size)
  return (
    <div className="flex">
      <img
        width={pixelSize}
        height={pixelSize}
        src={tanstack}
        alt="TanStack"
      />
    </div>

  )
}

export default TanstackIcon