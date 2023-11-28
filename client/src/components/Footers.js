import React from 'react'
import { Footer } from 'flowbite-react';

const Footers = () => {
  return (
    <>
    <Footer container className="bg-white">
      <Footer.Copyright
        by="Made with ❤️| All rights reserved"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/contact">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="/contact">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </>
  )
}

export default Footers