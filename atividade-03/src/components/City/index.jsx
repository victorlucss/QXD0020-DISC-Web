export const City = ({ name, onVote, count }) => {
  return (
    <>
      <h1>{name} {count}</h1>
      <button onClick={() => onVote(name)}>Vote in {name}</button>
    </>
  )
}

