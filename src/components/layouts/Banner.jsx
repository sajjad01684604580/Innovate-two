import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import banone from '../../assets/banone.png'
import bantwo from '../../assets/bantwo.png'
import banthree from '../../assets/banthree.png'
import Button from '../Button'
const Banner = () => {
  return (
    <section className='pb-[94px]'>
        <Container>
            <Flex>
                <div className="w-[60%]">
                    <Image src={banicon}/>
                    <Heading className="text-[72px] font-opensans font-extrabold pb-[20px]" text="We Are Digital Marketing Agency" as="h1"/>
                    <Paragraph className="pb-[64px] pr-[93px] text-[20px] text-pcolor"  text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "/>
                    <Button text="get free quoto" className="font-opensans font-bold text-[20px] capitalize"/>
                </div>
                <div className="w-[40%] relative">
                    <div className="">
                        <Image className="absolute bottom-[215px] left-[44px] z-[-1] inline-block" src={banone}/>
                    </div>
                    <div className="">
                    <Image className="absolute bottom-[-100px] left-[42px]  inline-block" src={bantwo}/>
                    </div>
                    <div className="">
                    <Image className="absolute bottom-[85px] left-[295px] z-[-1] inline-block" src={banthree}/>
                    </div>
                    
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner