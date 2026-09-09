import * as React from "react"

const Image = React.forwardRef(({ src, alt = "", onError, ...props }, ref) => (
  <img ref={ref} src={src} alt={alt} onError={onError} {...props} />
))

Image.displayName = "Image"

export { Image }
