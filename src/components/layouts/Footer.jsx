import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import List from '../List'
const Footer = () => {
  return (
    <footer className="pt-[140px] pb-[57px]">
        <Container>
            <Flex>
                <div className="w-[535px]">
                    <Image src={logo}/>
                    <Paragraph className="font-nunito font-normal font-text-lg pt-[44px] pb-[189px] pr-[86px]" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."/>
                   
                </div>
                <div className="w-[200px]">
                    <Heading className="font-opensans font-semibold text-2xl pb-[48px]" text="Features" as="h4"/>
                    <ul>
                        <List href="#" className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Home"/>
                        <List href="#" className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="About"/>
                        <List href="#" className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Benifit"/>
                        <List href="#" className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Pricing"/>
                        <List href="#" className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Blog"/>
                    </ul>
                </div>
                <div className="w-[258px]">
                <Heading className="font-opensans font-semibold text-2xl pb-[48px]" text="Products" as="h4"/>
                <Paragraph className="font-nunito font-semibold text-[20px] text-[#6C7D93] pb-[30px]" text="Task Management"/>
                <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Company growth"/>
                <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[188px]" text="Time tracking"/>
               
                </div>
                <div className="w-[160px]">
                <Heading className="font-opensans font-semibold text-2xl pb-[48px]" text="Support" as="h4"/>
                <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Customer service"/>
                <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Accessibility"/>
                <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Contact us"/>
                </div>
            </Flex>
            <div className="">
                <Flex>
                    <div className="w-[35%]">
                    <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="@20201 Innovate.All rights reserved."/>
                    </div>
                    <div className="w-[50%] text-right">
                    <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px] pr-[60px]" text="Privacy policy"/>
                    
                    </div>
                    <div className="w-[15%] text-left">
                    <Paragraph className="font-nunito font-semibold text-xl text-[#6C7D93] pb-[30px]" text="Terms & condition"/>
                    </div>
                </Flex>
            </div>
        </Container>
    </footer>
  )
}

export default Footer