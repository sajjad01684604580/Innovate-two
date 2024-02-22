import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import List from '../List'
import workone from '../../assets/workone.png'
import worktwo from '../../assets/worktwo.png'
import workthree from '../../assets/workthree.png'
import workfour from '../../assets/workfour.png'
import workfive from '../../assets/workfive.png'
import worksix from '../../assets/worksix.png'
const Work = () => {
  return (
    <section className='pt-[80px] pb-[100px]'>
        <Container>
            <div className="text-center">
                <Image src={banicon}/>
                <Heading className="pb-[47px] font-[800] text-[48px] font-opensans" text="Work Showcase" as="h2"/>
                
            </div>
            <div className="pb-[52px]">
                    <Flex>
                    <Heading className="font-opensans font-semibold text-2xl hover:text-btncolor text-[#6C7D93] pr-[24px]" text="All" as="h4"/>
                    <Heading className="font-opensans font-semibold text-2xl hover:text-btncolor text-[#6C7D93] pr-[24px]" text="Digital Mkt" as="h4"/>
                    <Heading className="font-opensans font-semibold text-2xl hover:text-btncolor text-[#6C7D93] pr-[24px]" text="Branding" as="h4"/>
                    <Heading className="font-opensans font-semibold text-2xl hover:text-btncolor text-[#6C7D93] pr-[24px]" text="Content Mkt" as="h4"/>
                    <Heading className="font-opensans font-semibold text-2xl hover:text-btncolor text-[#6C7D93] pr-[24px]" text="Social Media Mkt" as="h4"/>
                    </Flex>
                </div>
            <div className="pb-[30px]">
                <Flex className="justify-between">
                    <div className="">
                        <Image src={workone}/>
                    </div>
                    <div className="">
                        <Image src={worktwo}/>
                    </div>
                    <div className="">
                        <Image src={workthree}/>
                    </div>
                </Flex>
            </div>
            <div className="pb-[30px]">
                <Flex className="justify-between">
                    <div className="">
                        <Image src={workfour}/>
                    </div>
                    <div className="">
                        <Image src={workfive}/>
                    </div>
                    <div className="">
                        <Image src={worksix}/>
                    </div>
                </Flex>
            </div>
        </Container>
    </section>
  )
}

export default Work