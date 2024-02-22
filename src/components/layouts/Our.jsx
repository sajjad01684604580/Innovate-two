import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import marketing from '../../assets/marketing.png'
import ourbtn from '../../assets/ourbtn.png'
import social from '../../assets/social.png'
import content from '../../assets/content.png'
const Our = () => {
  return (
    <section className='pt-[60px] pb-[99px]'>
        <Container>
            <div className="text-center">
                <Image src={banicon}/>
                <Heading text="Our Services" className="pb-[15px] font-[800] text-[48px] font-opensans" as="h2"/>
                <Paragraph className="pb-[52px] px-[416px]" text="We have been providing great flooring solutions service."/>
            </div>
            <Flex className="justify-between">
                <div className="w-[370px] text-center bg-[#EBF7E9] py-[52px]  rounded-lg">
                    <Image src={marketing}/>
                    <Heading text="Marketing Strategy" className="font-opensans font-semibold text-[30px] pb-[20px] capitalize" as="h4"/>
                    <Paragraph className="pb-[20px] px-[60px]" text="Social Media has changed the way we interact & do business while creating"/>
                    <Image src={ourbtn}/>
                </div>
                <div className="w-[370px] text-center bg-[#D8EAFF] py-[52px]  rounded-lg">
                    <Image src={social}/>
                    <Heading text="Marketing Strategy" className="font-opensans font-semibold text-[30px] pb-[20px] capitalize" as="h4"/>
                    <Paragraph className="pb-[20px] px-[60px]" text="Social Media has changed the way we interact & do business while creating"/>
                    <Image src={ourbtn}/>
                </div>
                <div className="w-[370px] text-center bg-[#FBF1EC] py-[52px]  rounded-lg">
                    <Image src={content}/>
                    <Heading text="Marketing Strategy" className="font-opensans font-semibold text-[30px] pb-[20px] capitalize" as="h4"/>
                    <Paragraph className="pb-[20px] px-[60px]" text="Social Media has changed the way we interact & do business while creating"/>
                    <Image src={ourbtn}/>
                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Our