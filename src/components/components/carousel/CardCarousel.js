import React from 'react';
import './CardCarousel.css';

export const CardCarousel = () => {
	return (
		<div>
			<h2 className='section-title'>Reservas</h2>

			<div className='media-scroller snaps-inline'>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>Short title</p>
				</div>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>A longer title here</p>
				</div>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>An even longer title on this one</p>
				</div>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>A dog that is blinking?</p>
				</div>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>Chair</p>
				</div>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>Ut enim ad minim veniam</p>
				</div>
				<div className='media-element'>
					<img
						src='https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400'
						alt=''
					/>
					<p className='title'>Duis aute irure dolor</p>
				</div>
			</div>
		</div>
	);
};
