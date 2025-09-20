import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>This is a sample React project</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, ipsam magnam ea eos fugit adipisci architecto in aliquid facilis optio atque sunt id ut reprehenderit molestiae odit illo aperiam totam dolorem ducimus ullam neque. Nisi tempora similique, aliquam recusandae voluptas praesentium modi aliquid dolores labore reiciendis corrupti quod dolor quos aut doloremque fuga dicta iusto quidem cum sapiente quasi repellat optio. Molestiae, quis eius eaque maxime alias eveniet expedita! Eius ut aliquam autem officiis in. Quidem, ipsa. Optio maxime molestias saepe tempora ab sed? Quos officiis animi dolorum rerum totam aperiam culpa cumque, omnis iure natus maxime explicabo quas repellendus dolorem ab tenetur rem hic ex, earum esse quisquam beatae quis, iste id. Ea vero consequatur obcaecati dolores quam magni sequi tenetur accusamus libero repellat suscipit illum minus voluptatibus, fugit quas incidunt repellendus officia ratione sunt fugiat. Similique non eveniet minus iusto incidunt labore voluptatum modi quia iure repellendus esse odio quidem ex accusantium dolorem eaque, repellat cumque inventore nesciunt, voluptatem sapiente expedita sint! Architecto, aperiam! Repudiandae similique impedit consequatur eum. Quis porro animi est iure laudantium modi magni facere autem quas atque expedita consectetur itaque sapiente ipsam illum provident, aliquid ad unde quaerat accusamus. Exercitationem dolores facilis tempore consectetur!</p>
    </>
  )
}

export default App
