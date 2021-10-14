
import { Arena, Hero, Enemy, World } from ".";
      
import { DOG_ENEMY, MEGAMAN_STAND_UP } from "../constants/sprites";

const Questao4 = () => {
  return (
    <World>
      <Arena arena="Mega8Bits">
        <Hero
          name="Megaman"
          img={MEGAMAN_STAND_UP}
          />

        <Enemy
          name="Dog Enemy"
          img={DOG_ENEMY}
          />
      </Arena>
    </World>
  )
}

export default Questao4;