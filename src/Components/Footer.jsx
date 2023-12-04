import React from 'react'

const Footer = () => {
  const date = new Date();
let year = date.getFullYear();
// console.log(year)
  return (
    <footer class="bg-body-tertiary">
   <div class="text-center p-3" style={{ marginTop:"280px"}}>
    © {year} Copyright: All rights reserved by Hasin Anjum Pabon
    
  </div>
  
</footer>
  )
}

export default Footer