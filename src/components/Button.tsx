import { button } from '../../styled-system/recipes'

function Button() {
  return (
    <button className={button({ shape: 'circle', visual: 'edgy' })}>Click Me</button>
  )
}

export default Button