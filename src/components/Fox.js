import React from 'react'

export const Fox = (props) => {
    
    return (
        <div className="content content--fox">
				<div className="fox">
					<div className="fox-body">
						<div className="fox-front-leg"></div>
						<div className="fox-front-leg"></div>
					</div>
					<div className="fox-head">
						<div className="fox-face">
							<div className="fox-ears">
								<div className="fox-ear"></div>
								<div className="fox-ear"></div>
							</div>
							<div className="fox-skull"></div>
							<div className="fox-front"></div>
							<div className="fox-eyes"></div>
							<div className="fox-nose"></div>
						</div>
					</div>
					<div className="fox-tail">
						<div className="fox-tail">
							<div className="fox-tail">
								<div className="fox-tail">
									<div className="fox-tail">
										<div className="fox-tail">
											<div className="fox-tail">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="squiggly-0">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
							<feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2" />
						</filter>
						<filter id="squiggly-1">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
						</filter>
						<filter id="squiggly-2">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
						</filter>
						<filter id="squiggly-3">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
						</filter>
						<filter id="squiggly-4">
							<feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
							<feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
						</filter>
					</defs>
				</svg>
		</div>
    )
}