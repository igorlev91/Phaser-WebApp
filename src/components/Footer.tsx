import logo from "public/logo.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faSteam, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import "@/styles/Footer.scss";

const Footer = () => {
	return (
		<div className="footer-container">
			<footer>
				<div className="footer-brand-container">
					<Image className="footer-logo" src={logo} alt="logo" />
					<h2 className="footer-logo-text">levdev</h2>
					<p className="footer-description-text">the rhythm-based aim trainer</p>
				</div>
				<ul className="footer-icon-list">
					<li className="footer-icon-item">
						<Link
							className="footer-icon-link link hover-blue"
							href=""
						>
							<FontAwesomeIcon icon={faSteam} />
						</Link>
					</li>
					<li className="footer-icon-item">
						<Link className="footer-icon-link link hover-blue" href="">
							<FontAwesomeIcon icon={faDiscord} />
						</Link>
					</li>
					<li className="footer-icon-item">
						<Link
							className="footer-icon-link link hover-blue"
							href="https://github.com/igorlev91"
						>
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
