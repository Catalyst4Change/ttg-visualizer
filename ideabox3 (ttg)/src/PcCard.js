import React from "react";
import './PcCard.css'

const PcCard = ({ charName, concept, playerName, image, brawn, agility, intellegence, wit, charm, presence, maxHealth, currentHealth, healthy, injured, unconscious, key }) => {

  const showAttributeEmojis = (att, emoji) => {
    let display = ''
    for (let i = 0; i < att; i++) {
      display += emoji
    }
    return display
  }  

  const displayHealthBar = (attributes) => {
    let red = ''
    let yellow = ''
    let green = ''
    for (let i = 0; i < brawn; i++) {
      red += '🔴'
      yellow += '🟡'
      green += '🟢'
    }
    return red + yellow + green
  }


  return(
    <article className="pc-card border">
      <h2>{charName}</h2>
      <div>{image}</div>
      <h3>{concept}</h3>
      <h3>played by: {playerName}</h3>


      <header>Attributes</header>
      <div className="card-section border">
        <div className="attribute">
          <div className="brawn">Brawn:</div>
          <div className="brawn-dots">{showAttributeEmojis(brawn, '💪')}</div>
        </div>
        <div className="attribute">
          <div className="agility">Agility:</div>
          <div className="agility-dots">{showAttributeEmojis(agility, '👟')}</div>
        </div>
        <div className="attribute">
          <div className="smarts">Smarts:</div>
          <div className="smarts-dots">{showAttributeEmojis(intellegence, '🧠')}</div>
        </div>
        <div className="attribute">
          <div className="wit">Wit:</div>
          <div className="wit-dots">{showAttributeEmojis(wit, '⚡️')}</div>
        </div>
        <div className="attribute">
          <div className="charm">Charm:</div>
          <div className="charm-dots">{showAttributeEmojis(charm, '✨')}</div>
        </div>
        <div className="attribute">
          <div className="presence">Presence:</div>
          <div className="presencedots">{showAttributeEmojis(presence, '👤')}</div>
        </div>
      </div>


      <header>Vitals</header>
      <div className="card-section border">
        <div className="vitals-health">
          <div>Max Health: {brawn * 3}</div>
          <div className="health-status center">Status: Healthy </div>
          <div className="health-bar">{displayHealthBar(brawn)}</div>        
        </div>
        <div className="vitals-badges row">
          <div className="badge initiative">❗️</div>
          {/* <div className="badge-info hidden">Initiative determines your turn order in battle. Your Presence and Agility on the battlefield  </div> */}
          <div className="badge dodge">👟</div>
          {/* <div className="badge-info hidden">Dodge lets you avoid damage.</div> */}
          <div className="badge drive">⏩</div>
          {/* <div className="badge-info hidden">Drive gives you an extra card to spend per point spent.</div> */}
          <div className="badge crit">♥️</div>
          {/* <div className="badge-info hidden">On flipping the Queen of Hearts, Crit gives you successes equal to your Charm stat.</div> */}
          <div className="badge anti-joker grey">🚫</div>
          <div className="badge-info hidden">When Jokers and Anti-Jokers meet, they obliterate each other. Use wisely to avoid the chaotic effects of flipping a Joker.</div>
        </div>
    </div>

    <div className="card-section border">
      <header>Skills</header>
      <div className="masteries">
        <div className="sub-header">Masteries (+4)</div>
        <div>
          <div>Melee</div>
          <div>⚫️⚫️⚫️⚫️</div>
          <div>Survival</div>
          <div >⚫️⚫️⚫️⚫️</div>
        </div>
      </div>
      <div className="proficiencies">
        <div className="sub-header">Proficiencies (+2)</div>
        <div>
          <div>Athletics</div>
          <div>⚫️⚫️</div>
          <div>Biology</div>
          <div >⚫️⚫️</div>
        </div>      </div>
    </div>
    <div className="card-section ultimates">
      <header>Ultimates</header>
      <div className="ultimate">
        <div className="ultimate-name">Skewer</div>
        <div className="ultimate-description">words words words</div>
      </div>
      <div className="ultimate">
        <div className="ultimate-name">Flambé</div>
        <div className="ultimate-description">words words words</div>
      </div>
    </div>
    <div className="card-section items">
      <header>Useful Items</header>
      <div className="inventory">🔫🔋</div>
    </div>
    <div className="card-section hero-points">
      <header>Hero Points</header>
      <div className="points">⚫️⚫️⚫️⚪️</div>
    </div>

    </article>
  )
}

export default PcCard