import React, { Component } from "react"
import PcCard from "./PcCard"
import './PCs.css'

const PCs = ({pcs}) => {

  const exampleChar = {
    charName: '',
    concept: '',
    playerName: '',
    image: '',
    brawn: 1,
    agility: 1,
    intellegence: 1,
    wit: 1,
    charm: 1,
    presence: 1,
    maxHealth: 0, //this.brawn * 3
    currentHealth: 0, //this.brawn * 3
    healthy: true,
    injured: false,
    unconscious: false,
    key: Date.now()
  }

  // const list = [charName, concept, playerName, image, brawn, agility, intellegence, wit, charm, presence, maxHealth, currentHealth, healthy, injured, unconscious, key]

  const displayCards = pcs.map(char => {
    return (
      <PcCard
        charName={char.charName}
        playerName={char.playerName}
        concept={char.concept} 
        image={char.image}
        brawn={char.brawn}
        agility={char.agility}
        intellegence={char.intellegence}
        wit={char.wit}
        charm={char.charm}
        presence={char.presence}
        maxHealth={char.brawn * 3}
        currentHealth={char.brawn * 3}
        healthy={true}
        injured={false}
        unconscious={false}
        key={Date.now()}
      />
    )
  })
  
  return (
    <section>
      {displayCards}
    </section>
  )
}

export default PCs