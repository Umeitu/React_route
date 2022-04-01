import React from 'react'
import withLayout from './withLayout'

function Home() {
  return (
    <div>
    <h1>Welcome to my Homepage</h1>
    <div>
    <p>Mahama was born into a politically active family. His father,
    Emmanuel Adama Mahama, served as a member of Parliament as well as a regional commissioner in the
     government of Ghana’s first president, Kwame Nkrumah. John Mahama attended primary school at the 
     Achimota School in Accra and attended the  Ghana Secondary School in Tamale. He received a bachelor’s 
     degree in history in 1981 from the University of Ghana, Legon, where he also completed postgraduate 
     studies in communication in 1986.</p>

    <p>Mahama was born into a politically active family. His father,
    Emmanuel Adama Mahama, served as a member of Parliament as well as a regional commissioner in the
     government of Ghana’s first president, Kwame Nkrumah. John Mahama attended primary school at the 
     Achimota School in Accra and attended the  Ghana Secondary School in Tamale.</p>

    </div>
    </div>
  )
}

export default withLayout(Home)