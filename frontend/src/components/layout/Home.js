import React, { Fragment, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typed from 'react-typed';
import FileUpload from '../forms/FileUpload';

const Home = props => {
	const [opacity, setOpacity] = useState(0);
	const [uploadFile, setUploadFile] = useState('');
	const [transformL, setTransformL] = useState('-800');
	const [transformR, setTransformR] = useState('800');
	setTimeout(() => setOpacity(1), 50);
	setTimeout(() => setTransformL('0'), 50);
	setTimeout(() => setTransformR('0'), 50);
	let backgroundColor = '#080809';
	const redirectToUpload = () => {
		props.history.push('/uploadform');
	}
	return (
		<Fragment>
			<div style={{
				position: 'flexible',
				top: '8%',
				bottom: 0,
				left: 0,
				right: 0
			}}>
				<Typography
					align="center"
					variant="h2"
					style={{
						color: 'white',
						fontFamily: "Roboto",
						fontSize: "12.5vh",
						marginBottom: 15,
						paddingTop: "30vh",
						fontWeight: 'bold',
						letterSpacing: '0.03em'
					}}
				>
					<Typed
						strings={['codebin']}
						typeSpeed={150}
					/>
				</Typography>
				<Typography
					align="center"
					variant="h6"
					style={{ fontFamily: "Roboto", color: 'white', fontSize: "3vh", opacity, transition: 'opacity 1.5s cubic-bezier(0.55, 0.055, 0.675, 0.19)' }}
				>
					enjoy the ease of sharing
        </Typography>
				<Button
					onClick={redirectToUpload}
					size='large'
					style={{
						backgroundColor,
						color: 'white',
						fontSize: '2em',
						minHeight: '50px',
						minWidth: '120px',
						marginTop: '2%',
						marginLeft: "auto",
						marginRight: "auto",
						fontFamily: "Roboto",
						textTransform: "none",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						textAlign: "center",
						transform: 'translateX(' + transformL + 'px)',
						transition: 'transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 2.5s cubic-bezier(0.39, 0.575, 0.565, 1)',
						opacity
					}}
				>
					<CodeIcon />
					upload code
				</Button>
				<Button
					onClick={() => {
						console.log('a');
						setUploadFile(<FileUpload />)
					}}
					size='large'
					style={{
						backgroundColor,
						color: 'white',
						fontSize: '2em',
						minHeight: '50px',
						minWidth: '120px',
						marginLeft: "auto",
						marginRight: "auto",
						fontFamily: "Roboto",
						textTransform: "none",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						textAlign: "center",
						transform: 'translateX(' + transformR + 'px)',
						transition: 'transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 2.5s cubic-bezier(0.39, 0.575, 0.565, 1)',
						opacity
					}}
				>
					<AssignmentIcon />
					upload File
				</Button>
			</div>
			{uploadFile}
		</Fragment>
	);
}

export default Home;