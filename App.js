import Header from './components/Header'



function App() {


  
  return (
  

     
    
    <div className='App'>
      <Header />
      <div className="card text-center d-flex p-5">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="true" href="#">Overview</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="true" href="#logs">Logs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="true" href="#ranks">Ranks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" aria-current="true" href="#admin">Admin</a>
      </li>

      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
  </div>
  <div className="card-body">
    <div>

    </div >
    <h5 className="card-title">Look!</h5>
    <p className="card-text">With <light>supporting</light> text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>


  )
  
}

export default App;
