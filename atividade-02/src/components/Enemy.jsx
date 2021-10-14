const Enemy = ({ name, img, arena }) => {
  return (
    <div>
      {name} - {arena}
      <img src={img} alt={name} />
    </div>
  )
}

export { Enemy };