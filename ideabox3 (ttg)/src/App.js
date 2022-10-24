import React, {Component} from 'react'
import PCs from './PCs';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pcs: [],
      npcs: [],
      bads: []
    }
  }

  addPC = (newPC) => {
    this.setState({ pcs: [...this.state.pcs, newPC]})
  }

  render () {
    return (
      <main className="App">
        <nav>
          <Form addPC={this.addPC} />
        </nav>
        <section className="display">
          <div className='row'>
            <PCs pcs={this.state.pcs} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
