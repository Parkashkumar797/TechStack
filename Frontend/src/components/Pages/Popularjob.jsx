import React from 'react'
import { MdComputer } from "react-icons/md";
function Popularjob() {
  return (
<>
<h1>Popular Job Categories</h1>
<div className="card">
    <div className="card-body">
        <div><MdComputer /></div>
    <div>Developer</div>
    </div>
    <div className="card-body">
    <div>Designer</div>
    </div>
    <div className="card-body">
    <div>Marketing</div>
    </div>
    <div className="card-body">
    <div>sales</div>
    </div>
</div>
</>
  )
}

export default Popularjob