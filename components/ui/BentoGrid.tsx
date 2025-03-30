"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import animationData from '@/data/confetti.json'
import StudyingMan from "./StudyingMan";
import { Span } from "next/dist/trace";
import EduTimeline from "./EduTimeline";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied,setCopied] = useState(false);
  const handleCopy=()=>{
    navigator.clipboard.writeText('aryan31424@gmail.com')
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background:'rgb(4,7,29)',
        backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className={`${id===6 &&'flex justify-center'} h-full'`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName,'object-cover , object-center')}
              />
            )}
          </div>
          <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover , object-center w-full h-full'}
              />
            )}
          </div>

          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold"/> */}
            </BackgroundGradientAnimation>
          )}

          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
              <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ${id===1 && 'relative bottom-3 '} ${id===2 && 'flex justify-center items-center'}  `}>
              <div className={`${id===2 && 'relative lg:bottom-4 lg:right-3'} `}>{title}</div>
              {id===5 && <br/>}
              {id===2 && 
                  <a href="https://github.com/Aryan3803" className=" z-10 h-[2.5rem] cursor-pointer ml-5 relative lg:left-8 lg:bottom-4">
                    <MagicButton
                      title="Github"
                      icon={<FaGithub />}
                      position="right"
                      otherClasses=" z-10 cursor-pointer w-full h-full  mt-0"
                    />
                  </a>
                }
              </div>
              <div className={ `flex  ${id===1 && "flex-col md:flex-row lg:items-start items-center"}  justify-start  font-sans font-base text-[#f8f9ff] text-sm md:text-sm lg:text-base z-10`}>
                {id!==5 && (
                  <div className={`${id===1 && "lg:w-[50%] h-[50%] w-[100%] lg:text-xl  lg:mt-8 md:whitespace-pre-line"} `}>
                    {description}
                  </div>
                )}
                
                { id===1 && (
                  <div className=" relative lg:bottom-8 lg:left-6 w-[50%] h-[50%] ">
                    <StudyingMan />
                  </div>
                )}
                
                <div className=" ">
                  {id===5 &&<EduTimeline/>}
                </div>
              </div>
           
           
          {id === 2  && <GlobeDemo/>}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 relative lg:top-4 right-10 mt-2">                
                  <a href="https://leetcode.com/u/Aryan3803/" className="flex my-2 py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] cursor-pointer">
                    <img src="\icons8-leetcode-24.png" alt="Leetcode" className="mx-1" />
                    Leetcode
                  </a>
                  <a href="https://www.codechef.com/users/aryan31424" className="flex z-10 py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] cursor-pointer">
                    <img src="\icons8-codechef-24 (1).png" alt="CodeChef" className="mx-1" />
                    Codechef
                  </a>
                  <a href="https://www.hackerrank.com/profile/aryan_22b0101064" className="flex my-2 py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] cursor-pointer">
                  <img src="\icons8-hackerrank-24.png" alt="CodeChef" className="mx-1" />
                    HackerRank
                  </a>                
              </div>
            </div>
          )}

          {id===6 &&(
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop:copied,
                  autoplay:copied,
                  animationData,
                  rendererSettings:{
                    preserveAspectRatio:'xMidYMid slice',
                  }
                }} />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline/>}
                position="left"
                otherClasses="!bg-[#161a31] md:w-60"
                handleClick={handleCopy}
              />

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
