import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import clienticon from '../../assets/clienticon.png'
import clienttwo from '../../assets/clienttwo.png'
const Client = () => {
  return (
    <section className="py-[100px]">
        <Container>
            <Flex className="justify-between">
                <div className="w-[370px] bg-[#FFFFFF] shadow py-[10px] pl-[5px] rounded-lg">
                  <Image className="pb-[16px]" src={banicon}/>
                  <Heading className="font-opensans font-extrabold text-[48px] pb-[20px]" text="Client Review" as="h4"/>
                  <Paragraph className="font-paprika text-lg font-normal pb-[6px] pr-[36px]" text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "/>
                  <Image src={clienticon}/>
                </div>
                <div className="w-[370px] bg-[#FFFFFF] hover:bg-[#D8EAFF] shadow pt-[25px] pb-[40px] pl-[40px] pr-[51px] rounded-lg ">
                  <Paragraph className="font-paprika font-normal text-lg pb-[9px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>
                  <Flex>
                    <div className="">
                      <Image src={clienttwo}/>
                    </div>
                    <div className="">
                      <Paragraph className="font-opensans font-semibold  text-2xl text-black" text="Jane Cooper"/>
                      <Paragraph className="font-opensans font-normal text-lg" text="Fashion Designer"/>
                    </div>
                  </Flex>
                </div>
                <div className="w-[370px] bg-[#FFFFFF] hover:bg-[#D8EAFF] shadow pt-[25px] pb-[40px] pl-[40px] pr-[51px] rounded-lg ">
                  <Paragraph className="font-paprika font-normal text-lg pb-[9px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>
                  <Flex>
                    <div className="">
                      <Image src={clienttwo}/>
                    </div>
                    <div className="">
                      <Paragraph className="font-opensans font-semibold  text-2xl text-black" text="Eleanor Pena"/>
                      <Paragraph className="font-opensans font-normal text-lg" text="Architecture"/>
                    </div>
                  </Flex>
                </div>
              
            </Flex>
        </Container>
    </section>
  )
}

export default Client