import React from 'react';
import GithubStarCount from './GithubStarCount';
import RadialBlur from './RadialBlur';
import HomescreenSvg from '../../static/homescreen.svg';
import Link from '@docusaurus/Link';

export default function Hero() {
	return (
		<div className="relative rounded-none mx-auto max-w-screen-2xl overflow-hidden 2xl:rounded-3xl pt-32">
			<RadialBlur />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-7xl px-8 mx-auto py-16">
				<div>
					<div className="flex flex-row items-end gap-8">
						<GithubStarCount />
					</div>
					<h1 className="mt-4 !text-4xl text-slate-750 !tracking-tight !font-semibold sm:!text-6xl">
						Open-source <span className="text-blue-500 dark:text-blue-450">developer</span> platform and workflow engine
					</h1>
					<div className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-100">
						Turn scripts into auto-generated UIs, APIs and cron jobs. <br />
						Compose them as workflows or data pipelines. <br />
						Build complex, data-intensive apps with ease.
						<br /><br />
						Write and deploy software 10x faster, and run it with the highest reliability and
						observability on the{' '}
						<a className="underline decoration-1 underline-offset-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 hover:text-slate-500" href="/docs/misc/benchmarks/competitors">
							fastest self-hostable job orchestrator
						</a>.
					</div>
					<div className="mt-10 flex items-center gap-x-6">
						<a
							href="https://app.windmill.dev/user/login"
							onClick={() => window.plausible('try-cloud')}
							data-analytics='"try-cloud"'
							className="rounded-md transition-all bg-blue-500 px-4 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800 hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 !no-underline"
							rel="nofollow"
						>
							Try Windmill cloud
						</a>

						<Link
							href="docs/advanced/self_host"
							onClick={() => window.plausible?.('self-host')}
							className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 text !no-underline"
						>
							Self-host in 3 mins <span aria-hidden="true">→</span>
						</Link>
					</div>
					<div className="w-full font-medium text-slate-400 text-left mt-16 flex-container">
						Backed by
						<a
							href="https://www.ycombinator.com/companies/windmill"
							target="_blank"
							title="Y-Combinator"
						>
							<img 
								src="/images/brands/yc_grey.svg"
								alt="Y Combinator logo"
								width="137"
								height="32"
								className="logo"
							/>
						</a>
						<a
							href="https://www.gradient.com/"
							target="_blank"
							title="Gradient Ventures"
						>
							<img 
								src="/images/brands/gradient.svg"
								alt="Gradient Ventures logo"
								width="160"
								height="40"
								className="logo"
							/>
						</a>
						<a
							href="https://www.bvp.com/"
							target="_blank"
							title="Bessemer Venture Partners"
							className="ml-4 -mt-1"
						>
							<img 
								src="/images/brands/bessemer.png"
								alt="Bessemer Venture Partners logo"
								width="90"
								height="27"
								className="logo"
								style={{ filter: 'grayscale(100%) brightness(2)' }}
							/>
						</a>
					</div>
				</div>
				<div>
					<div className="flex  justify-center !rounded-2xl overflow-hidden dark:bg-[#2e344033] bg-[#fbfbfb]">
						<HomescreenSvg className="scaled-svg" style={{ width: '90%', height: '90%' }} />
					</div>
				</div>
			</div>
		</div>
	);
}
