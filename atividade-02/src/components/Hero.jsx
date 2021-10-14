const Hero = ({ name, img, arena }) => {
  return (
    <div>
      {name} - {arena}
      <img src={img} alt={name} />
    </div>
  )
}

export { Hero };