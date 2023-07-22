import React, { useState } from 'react';
import { Data } from './Datafaq';
import Faqcomponent from './Faqcomponent';


const Faq = () => {

    const [faqs,setfaqs]= useState(Data);
    
  return (
    <main>
        <section>
            <h1>FAQS</h1>
            {faqs.map((faq) => <Faqcomponent key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}

export default Faq