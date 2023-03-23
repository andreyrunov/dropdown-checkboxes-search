import React from 'react'

interface Props {
	id: string;
	className?: string;
}

export const SvgSelector = ({ id }: Props) => {
	switch (id) {
		case 'arrow':
			return (<svg width="10" height="6" viewBox="0 0 10 6" fill="#333333" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.45442 4.81225C1.06285 5.11842 0.497225 5.0492 0.19105 4.65763C-0.115124 4.26607 -0.0459015 3.70044 0.345663 3.39427L4.4423 0.190996C4.76791 -0.0636034 5.22507 -0.0636926 5.55078 0.190779L9.65074 3.39405C10.0424 3.70007 10.1119 4.26567 9.80585 4.65735C9.49983 5.04904 8.93423 5.11848 8.54255 4.81246L4.99691 2.04228L1.45442 4.81225Z" />
			</svg>)
		case 'rus':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="#F5F5F5" />
				<mask id="mask0_1493_158" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
					<rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5" />
				</mask>
				<g mask="url(#mask0_1493_158)">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.5H22.5V9.5H1.5V14.5Z" fill="#0C47B7" />
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V14.5H1.5V19.5Z" fill="#E53B35" />
				</g>
			</svg>)
		case 'eng':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white" />
				<mask id="mask0_1493_267" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
					<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white" />
				</mask>
				<g mask="url(#mask0_1493_267)">
					<rect x="1.5" y="4.5" width="21" height="15" fill="#0A17A7" />
					<path fillRule="evenodd" clipRule="evenodd" d="M6.50535 14.5L-0.580192 19.2793L0.538193 20.9373L9.50004 14.8925V20.5H14.5V14.8925L23.4619 20.9373L24.5803 19.2793L17.4947 14.5H22.5V9.5H17.4947L24.5803 4.72074L23.4619 3.06267L14.5 9.10752V3.5H9.50004V9.10752L0.538185 3.06267L-0.5802 4.72075L6.50534 9.5H1.50004V14.5H6.50535Z" fill="white" />
					<path d="M15.501 9.24915L25 3" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
					<path d="M16.5096 14.7731L25.025 20.5128" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
					<path d="M7.50415 9.23285L-1.37811 3.24677" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
					<path d="M8.46753 14.7037L-1.37811 21.2328" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 13.5H10.5V19.5H13.5V13.5H22.5V10.5H13.5V4.5H10.5V10.5H1.5V13.5Z" fill="#E6273E" />
				</g>
			</svg>)
		case 'esp':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white" />
				<mask id="mask0_1493_182" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
					<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white" />
				</mask>
				<g mask="url(#mask0_1493_182)">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 8.5H22.5V4.5H1.5V8.5Z" fill="#DD172C" />
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V15.5H1.5V19.5Z" fill="#DD172C" />
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 15.5H22.5V8.5H1.5V15.5Z" fill="#FFD133" />
					<path fillRule="evenodd" clipRule="evenodd" d="M7 11.5H8V12H7V11.5Z" fill="#FFEDB1" />
					<path d="M6.14235 11.6943C6.12616 11.5 6.27952 11.3333 6.47453 11.3333H7.52547C7.72048 11.3333 7.87384 11.5 7.85765 11.6943L7.75086 12.9758C7.71832 13.3663 7.39187 13.6667 7 13.6667C6.60813 13.6667 6.28168 13.3663 6.24914 12.9758L6.14235 11.6943Z" stroke="#A41517" strokeWidth="0.666667" />
					<path fillRule="evenodd" clipRule="evenodd" d="M6 12H8V12.5H7.5L7 13.5L6.5 12.5H6V12Z" fill="#A41517" />
					<rect x="4.5" y="10.5" width="1" height="3.5" rx="0.5" fill="#A41517" />
					<rect x="8.5" y="10.5" width="1" height="3.5" rx="0.5" fill="#A41517" />
					<path d="M6 10.3C6 9.85817 6.35817 9.5 6.8 9.5H7.2C7.64183 9.5 8 9.85817 8 10.3C8 10.4105 7.91046 10.5 7.8 10.5H6.2C6.08954 10.5 6 10.4105 6 10.3Z" fill="#A41517" />
				</g>
			</svg>
			)
		case 'ger':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white" />
				<mask id="mask0_1493_225" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
					<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white" />
				</mask>
				<g mask="url(#mask0_1493_225)">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 9.5H22.5V4.5H1.5V9.5Z" fill="#262626" />
					<g filter="url(#filter0_d_1493_225)">
						<path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.5H22.5V9.5H1.5V14.5Z" fill="#F01515" />
					</g>
					<g filter="url(#filter1_d_1493_225)">
						<path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V14.5H1.5V19.5Z" fill="#FFD521" />
					</g>
				</g>
				<defs>
					<filter id="filter0_d_1493_225" x="1.5" y="9.5" width="21" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1493_225" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1493_225" result="shape" />
					</filter>
					<filter id="filter1_d_1493_225" x="1.5" y="14.5" width="21" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1493_225" />
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1493_225" result="shape" />
					</filter>
				</defs>
			</svg>
			)
		case 'ital':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="#F5F5F5" strokeWidth="0.5" />
				<mask id="mask0_1493_170" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
					<rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5" />
				</mask>
				<g mask="url(#mask0_1493_170)">
					<rect x="15.5" y="4.5" width="7.00001" height="15" fill="#E43D4C" />
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H8.5V4.5H1.5V19.5Z" fill="#1BB65D" />
				</g>
			</svg>
			)
		case 'pol':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="#F5F5F5" />
				<mask id="mask0_1493_201" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
					<rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5" />
				</mask>
				<g mask="url(#mask0_1493_201)">
					<path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V11.5H1.5V19.5Z" fill="#EB2A50" />
				</g>
			</svg>
			)
		case 'remove':
			return (<svg width="8" height="8" viewBox="0 0 8 8" fill="#333333" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.55231 0.447703C7.81591 0.711307 7.81591 1.13869 7.55231 1.4023L4.95475 4L7.55231 6.59771C7.79394 6.83935 7.81408 7.21861 7.61272 7.48318L7.55231 7.55231C7.2887 7.81591 6.86132 7.81591 6.59771 7.55231L4 4.95475L1.4023 7.55231C1.13869 7.81591 0.711307 7.81591 0.447703 7.55231C0.184099 7.2887 0.184099 6.86132 0.447703 6.59771L3.04525 4L0.447703 1.4023C0.206066 1.16066 0.18593 0.781401 0.387294 0.516826L0.447703 0.447703C0.711307 0.184099 1.13869 0.184099 1.4023 0.447703L4 3.04525L6.59771 0.447703C6.86132 0.184099 7.2887 0.184099 7.55231 0.447703Z" />
			</svg>)
		case 'checkbox':
			return (<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
				<rect x="1" y="1" width="22" height="22" rx="5" />
				<rect x="1" y="1" width="22" height="22" rx="5" stroke="#C1C1C1" strokeWidth="2" />
			</svg>
			)
		case 'check-icon':
			return (<svg width="12" height="9" viewBox="0 0 12 9" fill="white" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.93426 6.75766L1.58682 4.40797C1.22381 4.04461 0.635262 4.04461 0.272255 4.40797C-0.0907517 4.77132 -0.0907517 5.36044 0.272255 5.72379L3.2703 8.72472C3.63699 9.09176 4.23152 9.09176 4.59821 8.72472L11.7277 1.58834C12.0908 1.22499 12.0908 0.635872 11.7277 0.272516C11.3647 -0.0908388 10.7762 -0.0908388 10.4132 0.272516L3.93426 6.75766Z" />
			</svg>
			)
		case 'search':
			return (<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.50006 0C8.53765 0 11.0001 2.46256 11.0001 5.50029C11.0001 6.74868 10.5842 7.89993 9.88346 8.82304L13.7791 12.7233C14.0718 13.0164 14.0715 13.4913 13.7785 13.784C13.4854 14.0767 13.0105 14.0764 12.7178 13.7834L8.82266 9.88388C7.89959 10.5847 6.74839 11.0006 5.50006 11.0006C2.46246 11.0006 0 8.53802 0 5.50029C0 2.46256 2.46246 0 5.50006 0ZM5.50006 1.5C3.2909 1.5 1.5 3.29098 1.5 5.50029C1.5 7.70961 3.2909 9.50058 5.50006 9.50058C7.70921 9.50058 9.50011 7.70961 9.50011 5.50029C9.50011 3.29098 7.70921 1.5 5.50006 1.5Z" fill="#C1C1C1" />
			</svg>
			)
		default:
			return <svg></svg>
	}
}