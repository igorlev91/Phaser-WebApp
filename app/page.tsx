import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Timing from "public/frontPage/PhaserTiming_large.png";
import StatsPreview from "public/frontPage/Stats_Preview.gif";
import Image from "next/image";
import Video from "@/components/Video";
import SteamSteamPurchaseLink from "@/components/SteamPurchaseLink";
import "@/styles/Home.scss";

const Home = () => {
	return (
		<>
			<div className="flex-container-column gap-1rem padding-1rem">
				<div className="home-top-container">
					<Video />
					<p className="fs-300 text-center">
						<p className="inline text-light">Phaser</p> is a next generation Web3 gaming ecosystem that
						fuses high quality gameplay with blockchain technology, true asset ownership, and a fair, sustanable
						monetization model. By blending gun, high quality gameplay with the groundbreaking features of blockchain technology to create
						a truly immersive experience thats not just about owning assets, but having fun while doing it.

						Build on Unreal Engine 5 with Ethereum Virtual Machine (EVM) integration Phaser
						provides a cross platform experience for players on PC, consoles & mobile to interact in a thriving 
						decentralized economy.
					</p>
					<SteamSteamPurchaseLink></SteamSteamPurchaseLink>
				</div>
		<div className="home-container">
					<h3 className="text-light text-center">Vision & Mission</h3>
					<div className="home-inner-container fs-200">
						<h4 className="text-light">Vision</h4>
						<p>
							Our goal is to break the barriers between traditional gaming and blockchain technology, making
							Web3 gaming accessible, fun, and rewarding for all.
						</p>
						<p>
							We aim to redefine Web3 gaming by creating a blend of engaging gameplay, true asset ownership
							and sustainable player-driven economies. Envisioning a gaming universe where players have full
							control over their digital assets while engaging in meaningful, skill-based experiences and benefit
							from a fair and transparent economy that rewards both time and skill.
						</p>

						<h4 className="text-light">Mission</h4>
						<p>
							Our mission is to build a high quality, cross compatible gaming ecosystem that prioritizes player
							enjoyment while leveraging blockchain's advantages by combining innovative technology with
							engaging game design. Phaser is set to become a leader in the next generation of
							blockchain gaming.
						</p>
						<p>We are committed to:</p>
						<ul>
							<li><b>Gameplay First Design:</b> Ensuring that fun and engaging gameplay remains at the core, avoiding exploitative mechanics often seen in Web3 titles.</li>
							<li><b>True Digital Ownership:</b> Utilizing Ethereum Virtual Machine (EVM) integration to grant players real ownership of in-game assets, which can be traded, sold, or used across multiple titles.</li>
							<li><b>True Cross Platform Accessibility:</b> Developing a robust infrastructure that allows multiplayer interactions across PC, console, and mobile through a custom matchmaking system.</li>
							<li><b>Sustainable Monetization:</b> Implementing fair revenue models such as cosmetic NFTs, optional subscriptions and cosmetic-only battle passes to ensure long-term growth without alienating players.</li>
							<li><b>Community Empowerment:</b> Giving players and NFT holders a say in the game's evolution through governance models, content creation tools, and interactive engagement.</li>
						</ul>
					</div>
				</div>
	<div className="home-container">
					<h3 className="text-light text-center">Games & Ecosystem</h3>
					<div className="home-inner-container fs-200">
						<p>
							At the heart of <b>Phaser</b>, a hero shooter designed for multiplayer
							battles and deep player customization. Built on Unreal Engine 5 and powered by our cross platform
							networking system, SugarShowdown delivers a gaming experience across PC, consoles & mobile devices.
						</p>
						<p>
							The game's success as a foundational project has accelerated the development of four additional games, all of which benefit
							from the same scalable cross platform technology and shared economy. This interconnected system
							ensures long term engagement, expanding opportunities for both players and investors alike.
						</p>

						<h4 className="text-light">Key Features:</h4>
						<ul>
							<li><b>True Cross Platform Play:</b> Our custom built matchmaking and networking system allows players from all supported platforms to compete, team up, and trade across PC, Console & Mobile.</li>
							<li><b>Multiplayer Battles:</b> Competitive & Cooperative Play.</li>
							<li><b>PvP Action:</b> Engage in intense, skill based combat across handcrafted arenas, featuring team based objectives, free for all battles, and tactical game modes.</li>
							<li><b>PvE Challenges:</b> Face off against AI controlled enemies in co op missions, raids, and seasonal events, providing varied gameplay for both casual and hardcore players.</li>
							<li><b>Customizable Characters & NFT Based Skins:</b></li>
							<ul>
								<li>Collect & Trade Skins: Players can buy, sell and trade unique NFT based skins, gear and emotes.</li>
								<li>Limited Edition Cosmetics: Seasonal drops and event exclusive items give players a chance to own rare, high value skins with increasing scarcity over time.</li>
							</ul>
							<li><b>Progression & Rewards:</b></li>
							<ul>
								<li>Skill Based Earnings: Players can earn in-game assets, rare cosmetics, and collectibles through challenges, ranked matches, and in-game achievements.</li>
								<li>Upgradeable Assets: Some items gain experience and rarity over time, increasing their utility and value within the in-game economy.</li>
								<li>Player Driven Marketplace: All earned items can be freely traded, sold, or upgraded, allowing players to take full ownership of their digital assets.</li>
							</ul>
							<li><b>Interoperability: Expanding the Candyland Universe</b></li>
							<ul>
								<li>Cross Collection NFT Support: Players can integrate third party NFT collections into Sugar Showdown, bringing their favorite digital assets into battle.</li>
								<li>Multi Game Compatibility: NFT characters, weapons, and cosmetics will carry across multiple Phaser games, ensuring lasting value beyond a single title.</li>
								<li>Real World Collaborations: Opportunities for partnerships with Web3 projects, brands, and artists to introduce exclusive crossover content.</li>
							</ul>
						</ul>
					</div>
				</div>
				<div className="home-container">
  <h3 className="text-light text-center">WEB3 INTEGRATION & ECONOMY</h3>

  <div className="home-inner-container fs-200">
    <p>
      Phaser is designed to integrate Web3 technology, ensuring that blockchain enhances
      gameplay rather than acting as a barrier to entry. By leveraging Ethereum Virtual Machine (EVM)
      compatibility, NFTs, and decentralized governance, we create a sustainable economy where players
      truly own their assets, participate in decision making, and engage in a thriving digital marketplace.
    </p>
  </div>

  <div className="home-inner-container fs-200">
    <h4 className="text-light">Key Features</h4>
    <h5>True Digital Ownership & Cross Game Utility</h5>
    <p>
      Every in-game asset exists as an NFT, to give players full ownership.
      Phaser enables NFT interoperability, allowing players to use, trade and sell their
      assets across multiple partner games and platforms.
      Items gain value over time based on rarity and player achievements, making progression more
      meaningful.
    </p>
  </div>

  <div className="home-inner-container fs-200">
    <h5>A sustainable, player first economy</h5>
    <p>
      Many Web3 games have suffered from unsustainable Play to Earn models, which rely on constant new
      player onboarding to sustain token value. We prioritise long term economic stability through:
    </p>
    <ul>
      <li>Balanced revenue streams including NFT sales, marketplace fees, battle passes, and premium subscriptions, preventing reliance on speculation driven tokenomics</li>
      <li>Fair monetization models that focus on cosmetic based purchases rather than pay to win mechanics, ensuring that gameplay remains competitive and fun</li>
      <li>A built in burning mechanism for NFT upgrades and in-game items, keeping supply balanced and preventing asset inflation</li>
    </ul>
  </div>

  <div className="home-inner-container fs-200">
    <h5>Easy Web3 Onboarding</h5>
    <p>
      To attract traditional gamers, Phaser eliminates the complexity of blockchain interactions:
    </p>
    <ul>
      <li>Simple wallet integration with custodial and non-custodial options</li>
      <li>FIAT & Crypto purchases for NFTs and in-game assets, lowering the barrier to entry for non crypto users</li>
      <li>Gas free transactions within the game, ensuring smooth and affordable gameplay experiences</li>
    </ul>
  </div>

  <div className="home-inner-container fs-200">
    <h5>Decentralised Governance & Community driven development</h5>
    <p>
      Phaser isn't just a game, it's a player led ecosystem where token holders and NFT owners
      have real influence over its development:
    </p>
    <ul>
      <li>Voting rights on major updates, in-game economy adjustments, and new feature rollouts</li>
      <li>Community created content such as maps, quests, and cosmetics, with the best submissions becoming part of the game</li>
      <li>A tiered governance system, allowing engaged players to have a say without overwhelming casual gamers with complex decision making</li>
    </ul>
  </div>
</div>
				<div className="home-container">
  <h3 className="text-light text-center">TECHNOLOGY STACK</h3>

  <div className="home-inner-container fs-200">
  	<h4 className="text-light">5.1 Unreal Engine 5 (UE5) & Performance Scaling</h4>
    <p>
      We are using UE5 for its high performance graphics across all platforms, auto adjusting visual fidelity
      for smooth gameplay, cinematic quality environments (without performance loss), real time lighting
      and reflections for enhanced immersion. Asset Streaming optimizes memory usage by efficiently
      loading assets. UE5’s continuous updates ensure long term viability, while modding support allows
      community driven content. Its advanced tools allow for easy Web3 integration, making it a standout
      in blockchain gaming.
    </p>
  </div>

  <div className="home-inner-container fs-200">
  	<h4 className="text-light">5.2 Custom Built Framework</h4>
    <p>
      Phaser has developed a scalable cross platform networking system, allowing rapid game
      development and deployment. This framework accelerates content creation by eliminating the need
      to rebuild multiplayer infrastructure, reducing development time and costs.
    </p>
    <p>
      New titles, expansions, and game modes can be quickly introduced while maintaining a consistent
      multiplayer experience across PC, consoles, and mobile. This system has already enabled the creation
      of four diverse games in a short time.
    </p>
  </div>

  <div className="home-inner-container fs-200">
  <h4 className="text-light">5.3 Blockchain Infrastructure</h4>
    <p>
      Phaser combines UE5 with Ethereum Virtual Machine (EVM) to deliver a fast, low cost
      gaming experience with a scalable infrastructure that supports a thriving community, ensuring access
      and growth for all players.
    </p>
    <p>
      <strong>Ethereum Layer 2 Scaling:</strong> Transactions are executed on low cost, high speed Layer 2 solutions
      such as Polygon & Arbitrum to reduce gas fees.
    </p>
    <p>
      <strong>Smart Contracts:</strong> Secure, transparent smart contracts govern the in-game economy, ensuring
      verifiable scarcity and fair distribution of assets.
    </p>
  </div>
</div>

			</div>
		</>
	);
};

export default Home;
