import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import List from '../List'
import Button from '../Button'
const Navbar = () => {
  return (
    <nav className='pt-[32px] pb-[97px]'>
        <Container>
            <Flex className="items-center">
                <div className="w-1/4">
                    <Image src={logo}/>
                </div>
                <div className="w-1/2">
                    <ul>
                        <Flex className="justify-between">
                        <List href="#" text="Home" />
                        <List href="#" text="About"/>
                        <List href="#" text="Service"/>
                        <List href="#" text="Portfolio"/>
                        <List href="#" text="Price"/>
                        <List href="#" text="Blog"/>
                        </Flex>
                    </ul>
                </div>
                <div className="w-1/4 text-right">
                    <Button text="Contact Us"/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar