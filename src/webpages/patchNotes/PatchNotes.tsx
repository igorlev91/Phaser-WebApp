"use client";
import React, { useEffect, useState } from "react";

import { faCrosshairs, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "@/styles/PatchNotes.scss";

type PatchNotesData = {
	version: string;
	date: DateTime;
	link: string;
	content?: React.ReactNode;
};

const patchNotesData: PatchNotesData[] = [
	{
		version: "0.7.4",
		date: DateTime.fromFormat("May 24, 2025", "DDD"),
		link: "4252047773022064428",
		content: (
			<ul>
				<p className="fs-300"></p>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">Bug fixes</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Fixed a bug where the game would exit.</p>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
	{
		version: "0.7.3",
		date: DateTime.fromFormat("May 21, 2025", "DDD"),
		link: "4252047773011032145",
		content: (
			<ul>
				<p className="fs-300"></p>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">Bug fixes</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Fixed a bug where ......
							</p>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
	{
		version: "0.7.2",
		date: DateTime.fromFormat("May 4, 2025", "DDD"),
		link: "4246413199426288066",
		content: (
			<ul>
				<p className="fs-300"></p>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">General</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Updated engine to Unreal Engine 5.4.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Updated Nvidia DLSS to 3.7.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Added new video setting for Nvidia DLSS Ray Reconstitution.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Improved tooltips in the Custom Game Modes Menu.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Improved GameUserSettings initialization.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Created a more comprehensive validation system for custom game modes.</p>
						</li>
					</ul>
				</li>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">Bug Fixes</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Fixed a bug where the game could crash when failing to receive an HTTP response from the
								Phaser API after changing levels.
							</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Fixed a bug where the game would not quit to desktop after saving scores if &#34;Save
								and Quit&#34; was clicked from the Quit to Desktop pop-up in the Pause Menu.
							</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Fixed a bug where the setting storing if night mode was unlocked could have been
								overwritten. A fix is in place to restore this setting to its proper value.
							</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Fixed an issue where no text would show upon failing to retrieve an access token from
								the Phaser API when deleting scores from the database.
							</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Fixed an issue where GameUserSettings.ini config variables were not correctly inheriting
								from the base GameUserSettings class.
							</p>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
	{
		version: "0.7.1",
		date: DateTime.fromFormat("April 19, 2025", "DDD"),
		link: "6181831424325133094",
		content: (
			<ul>
				<p className="fs-300"></p>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">Audio</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Overhauled the audio system.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Added footstep sounds.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Updated the Audio Format pop-up window</p>
							<ul>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>
										Removed the Output Device option. This has been moved to the Video and Sound
										Settings menu.
									</p>
								</li>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>
										When selecting a previously played song title, the duration information is now
										automatically filled out.
									</p>
								</li>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>
										Small improvements to interaction with the Previously Played Song Title combo
										box and the New Song Title text box.
									</p>
								</li>
							</ul>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>The volume from an audio device should be much less quiet than previously.</p>
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>The menu music now continues playing during the loading screen at a reduced volume.</p>
						</li>
					</ul>
				</li>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">FAQ</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>Updated the Audio Analyzer section of the FAQ</p>
							<ul>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>Added information about how to use the Audio Device audio format.</p>
								</li>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>
										Added information about the differences between Audio File and Audio Device
										audio formats.
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<FontAwesomeIcon className="fs-300" icon={faCrosshairs} />
					<p className="fs-300">Settings</p>
					<ul>
						<li>
							<FontAwesomeIcon icon={faPlay} />
							<p>
								Moved Video and Sound settings from a save game slot to a .ini file, which is locally
								stored for each machine.
							</p>
							<ul>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>
										This way, you can have separate video and sound settings for different
										computers.
									</p>
								</li>
								<li>
									<FontAwesomeIcon icon={faPlay} />
									<p>
										The file is located in
										C:/Username/AppData/Local/Phaser/Saved/Config/Windows/GameUserSettings.ini.
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
];

const ITEMS_PER_PAGE = 5;

const PatchNotes = ({ initialPage }: { initialPage: number }) => {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(initialPage);

	useEffect(() => {
		setCurrentPage(initialPage);
	}, [initialPage]);

	const totalPages = Math.ceil(patchNotesData.length / ITEMS_PER_PAGE);

	const handleClick = (page: number) => {
		router.push(`/patchnotes/${page}`);
	};

	const renderPatchNotes = () => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const selectedNotes = patchNotesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

		return selectedNotes.map((note, index) => (
			<div key={index} className="centered-bordered-container-1000">
				<div className="pn-container">
					<div className="pn-version-date">
						<Link
							className="link hover-blue fw-semibold pn-version-number"
							href={
								"https://store.steampowered.com/news/app/2126580/view/" +
								note.link +
								"?utm_source=Phaserwebsite&utm_medium=web"
							}
						>
							{note.version}
						</Link>
						<p className="pn-date">{note.date.toFormat("DDD")}</p>
					</div>
					{note.content}
				</div>
			</div>
		));
	};

	const renderPagination = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => handleClick(i)}
					className={`pagination-button ${i === currentPage ? "active" : ""}`}
				>
					{i}
				</button>
			);
		}
		return pages;
	};

	return (
		<div className="flex-container-column gap-1rem padding-1rem">
			<h2 className="pn-title">Patch Notes</h2>
			{renderPatchNotes()}
			<div className="pn-page-container">{renderPagination()}</div>
		</div>
	);
};
export default PatchNotes;
