"use client"
import image_TargetSpawningSystem_teaser from "../../public/TargetSpawningSystem-teaser.png";
import image_Hero from "../../public/GAS_Diagram.png";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import React from "react";

const BlogPostsMain = () => {
  let router = useRouter();

  const handleClick = async (event, path) => {
    router.push(path);
  };

  return (
    <>
      <div className="flex-container-column">
        <div className="hero-container">
          <div className="hero">
            <h1>levdev Developer Blog</h1>
          </div>
        </div>
        <div className="flex-container-row padding-1rem gap-1rem flex-wrap">
          <div
            className="card-container gap-1rem padding-1rem"
            onClick={(event) => handleClick(event, `/devblog/target-spawning-system`)}
          >
            <div className="card">
              <p className="sub-heading">
                Article
                <time dateTime="2023-07-02">April 14, 2025 </time>
              </p>
              <Image src={image_TargetSpawningSystem_teaser} alt="TargetSpawningSystem-teaser" />
              <div className="card-label">
                <Link className="link" href="/devblog/target-spawning-system">
                  Test
                </Link>
              </div>
              <p className="card-sub-label">
                How are spawn locations decided for targets? How are targets managed? This article goes into detail
                about how this is accomplished in Unreal.
              </p>
            </div>
          </div>
          <div
            className="card-container gap-1rem padding-1rem"
            onClick={(event) => handleClick(event, `/devblog/gameplay-ability-system-overview`)}
          >
            <div className="card">
              <p className="sub-heading">
                Article
                <time dateTime="2023-09-10">September 15, 2023 </time>
              </p>
              <Image src={image_Hero} alt="TargetSpawningSystem-teaser" />
              <div className="card-label">
                <Link className="link" href="/devblog/target-spawning-system">
                An Overview of Unreal Engine
                </Link>
              </div>
              <p className="card-sub-label">
              How is the Gameplay Ability System used
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsMain;
