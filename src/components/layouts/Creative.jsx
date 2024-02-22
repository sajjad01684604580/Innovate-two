import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import creativeone from '../../assets/creativetwo.png'
import creativeicon from '../../assets/creativeicon.png'


const Creative = () => {
  return (
    <section className='pt-[80px] pb-[100px]'>
        <Container>
            <div className="text-center">
                <Image src={banicon}/>
                <Heading text="Our creative process." as="h2" className="font-[800] text-[48px] font-opensans"/>
                <Paragraph text="We provide digital experience services to startups and small businesses." className=" pt-[20px] pb-[52px] font-roboto text-[18px] font-normal px-[381px]"/>

            </div>
            <div className="">
                <Flex className="justify-between">
                    <div className="bg-creativeone border-box h-[207px] w-[465px] rounded-lg py-[24px] pl-[24px] mt-[60px]">
                        <Image className="pb-[18px]" src={creativeicon}/>
                        <Heading className="font-semibold font-opensans text-3xl pb-[20px] important!" text="Global SEO Research" as="h4"/>
                        <Paragraph className="font-roboto font-normal text-lg leading-8 pr-[87px]" text="Practical tools and features make it easier to build and manage your site."/>

                    </div>
                    <div className="">
                        <Image src={creativeone}/>
                    </div>
                </Flex>
            </div>
            <div className="">
                <Flex className="justify-between">
                    
                    <div className="">
                        <Image src={creativeone}/>
                    </div>
                    <div className="bg-creativetwo border-box h-[207px] w-[465px] rounded-lg py-[24px] pl-[24px] mt-[60px]">
                        <Image className="pb-[18px]" src={creativeicon}/>
                        <Heading className="font-semibold font-opensans text-3xl pb-[20px] important!" text="Global SEO Research" as="h4"/>
                        <Paragraph className="font-roboto font-normal text-lg leading-8 pr-[87px]" text="Practical tools and features make it easier to build and manage your site."/>

                    </div>
                </Flex>
            </div>
            <div className="">
                <Flex className="justify-between">
                    
                    
                    <div className="bg-creativethree border-box h-[207px] w-[465px] rounded-lg py-[24px] pl-[24px] mt-[60px]">
                        <Image className="pb-[18px]" src={creativeicon}/>
                        <Heading className="font-semibold font-opensans text-3xl pb-[20px] important!" text="Global SEO Research" as="h4"/>
                        <Paragraph className="font-roboto font-normal text-lg leading-8 pr-[87px]" text="Practical tools and features make it easier to build and manage your site."/>

                    </div>
                    <div className="">
                        <Image src={creativeone}/>
                    </div>
                </Flex>
            </div>
        </Container>
    </section>
  )
}

export default Creative