import { useState, useEffect } from 'react';

import { City, Rewards } from '../components'

const CityVotingPage = () => {
  const [cities, setCities] = useState({});
  const [rewards, setRewards] = useState({
    mostVoted: { city: undefined, count: 0 },
    lessVoted: { city: undefined, count: 99 }
  })

  useEffect(() => {
    let lastLess = undefined
    Object.entries(cities).forEach(([city, count]) => {
      if (lastLess === undefined) {
        lastLess = {
          city,
          count
        }
      }

      if (count > rewards.mostVoted.count) {
        setRewards({
          ...rewards,
          mostVoted: {
            city,
            count
          }
        })
      }

      if (count < lastLess.count) {
        lastLess = {
          city,
          count
        }
      }
    })
    
    setRewards(oldRewards => ({
      ...oldRewards,
      lessVoted: lastLess
    }))
  }, [cities])

  const insertCity = (name) => {
    setCities((oldCities) => ({
      ...oldCities,
      [name]: 0
    }))
  }

  const handleVote = (cityName) => {
    setCities({
      ...cities,
      [cityName]: cities[cityName] + 1
    })

  }

  useEffect(() => {
    insertCity('Fortaleza')
    insertCity('Cascavel')
    insertCity('Quixada')
    insertCity('Baturité')
    insertCity('Quixeré')
  }, [])

  

  return (
    <>
      {Object.keys(cities).map(city => <City name={city} onVote={handleVote} count={cities[city]} />)}
      <br /><Rewards mostVoted={rewards?.mostVoted?.city} lessVoted={rewards?.lessVoted?.city} />
    </>
  )
}

export default CityVotingPage;