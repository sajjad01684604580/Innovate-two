import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import whomain from '../../assets/whomain.png'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import whoone from '../../assets/whoone.png'
import whotwo from '../../assets/whotwo.png'
const Who = () => {
  return (
    <section className='pt-[100px] pb-[80px]'>
        <Container>
            <Flex>
                <div className="w-[50%]">
                    <Image src={whomain}/>
                </div>
                <div className="w-[50%] pl-[90px]">
                    <Image src={banicon}/>
                    <Heading text="Who We Are" as="h4" className="pb-[15px] font-[800] text-[48px] font-opensans"/>
                    <Paragraph className="pb-[23px] pr-[54px]" text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "/>
                    <Image src={whoone}/>
                    <Image src={whotwo}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Who