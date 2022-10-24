import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      charName: '',
      concept: '',
      playerName: '',
      image: '',
      // attributes
      brawn: 1,
      agility: 1,
      intellegence: 1,
      wit: 1,
      charm: 1,
      presence: 1,
      attributesTotal: 0,
      // vitals
      maxHealth: 0,
      currentHealth: 0,
      healthy: true,
      injured: false,
      unconscious: false,
      dead: false,
      // skills
      masteryOne: '',
      masteryTwo: '',
      proficiencyOne: '',
      proficiencyTwo: '',
      skills: [      
        'Athletics',
        'Biology',
        'Computers',
        'Empathy',
        'Engineering',
        'Explosives',
        'Firearms',
        'Investigation',
        'Lying',
        'Melee',
        'Perform',
        'Persuasion',
        'Piloting',
        'Sneaking',
        'Spacewise',
        'Survival',
        'Telekenesis',
        'Telepathy',
      ],
      // ultimates
      key: Date.now()
    }
  }

  preventDefault = (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState( {[event.target.name]: event.target.value})
  }

  selectSkill = (event) => {
    this.setState( {[event.target.name]: event.target.value})
    const n = this.state.skills.indexOf([event.target.value])
    this.state.skills.splice(n,1)
  }
  
  // if total attributes > 13, do not allow adding more points
  totalAttributes = () => {
    const total = this.state.brawn + this.state.agility + this.state.intellegence + this.state.wit + this.state.charm + this.state.presence
    this.setState({...this.state, attributesTotal: [total]}, () => {console.log(total)})
  }

  stepUp = (event) => {
    event.preventDefault()
    this.totalAttributes()
    let n = this.state[event.target.name]
    n++
    if (n <= 4) {
      this.setState( {...this.state, [event.target.name]: n} )
    }
  }
  
  stepDown = (event) => {
    event.preventDefault()
    let n = this.state[event.target.name]
    n--
    if (n >= 1) {
      this.setState({...this.state, [event.target.name]: n})
    }
  }
        
  submitPC = (event) => {
    event.preventDefault()
    this.props.addPC(this.state)
  }

  render() {
    return (
      <form>
        <div className="form-section border">
          <input type='text' placeholder="Player's Name" name="playerName" value={this.state.playerName} onChange={this.handleChange}></input>
          <input type='text' placeholder="Character's Name" name="charName" value={this.state.charName} onChange={this.handleChange}></input>
          <input type='text' placeholder="Character Concept" name="concept" value={this.state.concept} onChange={this.handleChange}></input>
          <span>Choose an emoji:</span>
          <select name="image" value={this.state.image} onChange={this.handleChange}>
            <option value='🤖'>🤖</option>
            <option value='👽'>👽</option>
            <option value='🐸'>🐸</option>
          </select>
        </div>

        <div className="form-section border">
          <span>Add seven points to Attributes:</span>
          <div className="stepper">
            {this.state.brawn > 1 ? 
              <button name='brawn' className="yes-click" onClick={this.stepDown}>➖</button> : 
              <button name='brawn' className="no-click" onClick={this.preventDefault} >➖</button>
              }            
            <span>Brawn: {this.state.brawn} </span>
            {this.state.brawn < 4 ? 
              <button name='brawn' className="yes-click" onClick={this.stepUp}>➕</button> : 
              <button name='brawn' className="no-click" onClick={this.preventDefault} >➕</button>
            }            
          </div>

          <div className="stepper">
            {this.state.agility > 1 ? 
              <button name='agility' className="yes-click" onClick={this.stepDown}>➖</button> : 
              <button name='agility' className="no-click" onClick={this.preventDefault} >➖</button>
              }            
            <span>Agility: {this.state.agility} </span>
            {this.state.agility < 4 ? 
              <button name='agility' className="yes-click" onClick={this.stepUp}>➕</button> : 
              <button name='agility' className="no-click" onClick={this.preventDefault} >➕</button>
            }            
          </div>

          <div className="stepper">
            {this.state.intellegence > 1 ? 
              <button name='intellegence' className="yes-click" onClick={this.stepDown}>➖</button> : 
              <button name='intellegence' className="no-click" onClick={this.preventDefault} >➖</button>
              }            
            <span>Intellegence: {this.state.intellegence} </span>
            {this.state.intellegence < 4 ? 
              <button name='intellegence' className="yes-click" onClick={this.stepUp}>➕</button> : 
              <button name='intellegence' className="no-click" onClick={this.preventDefault} >➕</button>
            }            
          </div>


          <div className="stepper">
            {this.state.wit > 1 ? 
              <button name='wit' className="yes-click" onClick={this.stepDown}>➖</button> : 
              <button name='wit' className="no-click" onClick={this.preventDefault} >➖</button>
              }            
            <span>Wit: {this.state.wit} </span>
            {this.state.wit < 4 ? 
              <button name='wit' className="yes-click" onClick={this.stepUp}>➕</button> : 
              <button name='wit' className="no-click" onClick={this.preventDefault} >➕</button>
            }            
          </div>

          <div className="stepper">
            {this.state.charm > 1 ? 
              <button name='charm' className="yes-click" onClick={this.stepDown}>➖</button> : 
              <button name='charm' className="no-click" onClick={this.preventDefault} >➖</button>
              }            
            <span>Charm: {this.state.charm} </span>
            {this.state.charm < 4 ? 
              <button name='charm' className="yes-click" onClick={this.stepUp}>➕</button> : 
              <button name='charm' className="no-click" onClick={this.preventDefault} >➕</button>
            }            
          </div>

          <div className="stepper">
            {this.state.presence > 1 ? 
              <button name='presence' className="yes-click" onClick={this.stepDown}>➖</button> : 
              <button name='presence' className="no-click" onClick={this.preventDefault} >➖</button>
              }            
            <span>Presence: {this.state.presence} </span>
            {this.state.presence < 4 ? 
              <button name='presence' className="yes-click" onClick={this.stepUp}>➕</button> : 
              <button name='presence' className="no-click" onClick={this.preventDefault} >➕</button>
            }            
          </div>
        </div>

        {/* remove chosen skills from subsequent lists */}

        <div className="form-section border">
          <div className="form-section">
            <span>Choose 2 Skill Masteries</span>
            <select name="masteryOne" onChange={this.selectSkill}>
              <option value="">Choose one</option>
              {this.state.skills.map(skill => {
                return <option value={skill}>{skill}</option>
              })}
            </select>
            <select name="masteryOne" onChange={this.selectSkill}>
              <option value="">Choose one</option>
              {this.state.skills.map(skill => {
                return <option value={skill}>{skill}</option>
              })}
            </select>

          <div className="form-section">
            <span>Choose 2 Skill Proficiencies</span>
            <select name="masteryOne" onChange={this.selectSkill}>
              <option value="">Choose one</option>
              {this.state.skills.map(skill => {
                return <option value={skill}>{skill}</option>
              })}
            </select>
          </div>
          <div className="form-section">
          <select name="masteryOne" onChange={this.selectSkill}>
              <option value="">Choose one</option>
              {this.state.skills.map(skill => {
                return <option value={skill}>{skill}</option>
              })}
            </select>
          </div>
          </div>      </div>






        <button onClick={event => this.submitPC(event)} >Submit</button>
      </form>
    )
  }
}

export default Form