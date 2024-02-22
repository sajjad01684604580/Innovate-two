import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banicon from '../../assets/banicon.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import blog from '../../assets/blogone.png'
import btn from '../../assets/ourbtn.png'
const Blog = () => {
  return (
    <section className="pt-[80px] pb-[118px]">
        <Container>
            <div className="text-center">
                <Image className="pb-[20px]" src={banicon}/>
                <Heading className="font-worksans font-extrabold text-5xl pb-[25px]" text="Our Latest Blog" as="h2"/>
                <Paragraph className="font-roboto font-normal text-lg px-[380px] pb-[52px]" text="We provide digital experience services to startups and small businesses."/>
                
            </div>
            <Flex className="justify-between">
                <div className="w-[370px] shadow">
                    <Image src={blog}/>
                    <Heading className="font-worksans font-medium text-2xl pt-[30px] pl-[30px] pb-[16px] pr-[119px]" text="How to Be Ahead of Stock Changes" as="h4"/>
                    <Paragraph className="font-nunito font-normal text-lg pb-[30px] pl-[30px]" text="By John  - 5 Comments"/>
                    <Image className="pl-[30px] pb-[30px]" src={btn}/>
                </div>
                <div className="w-[370px] shadow">
                    <Image src={blog}/>
                    <Heading className="font-worksans font-medium text-2xl pt-[30px] pl-[30px] pb-[16px] pr-[119px]" text="How to Be Ahead of Stock Changes" as="h4"/>
                    <Paragraph className="font-nunito font-normal text-lg pb-[30px] pl-[30px]" text="By John  - 5 Comments"/>
                    <Image className="pl-[30px] pb-[30px]" src={btn}/>
                </div>
                <div className="w-[370px] shadow">
                    <Image src={blog}/>
                    <Heading className="font-worksans font-medium text-2xl pt-[30px] pl-[30px] pb-[16px] pr-[119px]" text="How to Be Ahead of Stock Changes" as="h4"/>
                    <Paragraph className="font-nunito font-normal text-lg pb-[30px] pl-[30px]" text="By John  - 5 Comments"/>
                    <Image className="pl-[30px] pb-[30px]" src={btn}/>
                </div>
                
            </Flex>
        </Container>
    </section>
  )
}

export default Blog