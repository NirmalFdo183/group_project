import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
         <div style={{ border: "solid 2px white", padding: "15px" }}>
        <h1>Team Members</h1>
        <p><Link to="/nirmal">Nirmal 2022/csc/076</Link></p>
        <p><Link to="/nipuna">Nipuna 2022/csc/017</Link></p>
        <p ><Link to="/anjula">Anjula 2022/csc/055</Link></p>
        <p><Link to="/bashitha">Bashitha 2022/csc/023</Link></p>
      </div>
    </div>
  )
}
