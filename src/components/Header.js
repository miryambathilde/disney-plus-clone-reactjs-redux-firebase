/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import {
	selectUserName,
	selectUserPhoto,
	setUserLogin,
	setSignOut,
} from '../features/user/userSlice';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'firebase/auth';

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						photo: user.photoURL,
						email: user.email,
					})
				);
				history.push('/');
			}
		});
	}, [dispatch, history]);

	const singIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			console.log(result);
			let user = result.user;
			dispatch(
				setUserLogin({
					name: user.displayName,
					photo: user.photoURL,
					email: user.email,
				})
			);
			// una vez logueado le decimos que muestre la home //
			history.push('/');
		});
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			// una vez el usuario se desloguea, le decimos que muestre la pagina de inicio - home //
			history.push('/login');
		});
	};

	return (
		<Nav>
			<Logo src='/images/logo.svg' />

			{!userName ? (
				<LoginContainer>
					<Login onClick={singIn}>Login</Login>
				</LoginContainer>
			) : (
				<>
					<NavMenu>
						<a>
							<img src='/images/home-icon.svg' alt='Home'></img>
							<Link to={'/'}>
								<span>HOME</span>
							</Link>
						</a>
						<a>
							<img src='/images/search-icon.svg' alt='Search'></img>
							<span>SEARCH</span>
						</a>
						<a>
							<img src='/images/watchlist-icon.svg' alt='Home'></img>
							<span>WATCHLIST</span>
						</a>
						<a>
							<img src='/images/original-icon.svg' alt='Originals'></img>
							<span>ORIGINALS</span>
						</a>
						<a>
							<img src='/images/movie-icon.svg' alt='Movies'></img>
							<span>MOVIES</span>
						</a>
						<a>
							<img src='/images/series-icon.svg' alt='Series'></img>
							<span>SERIES</span>
						</a>
					</NavMenu>
					<UserImg onClick={signOut} src={userPhoto} />
				</>
			)}
		</Nav>
	);
};

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		text-decoration: none;
		color: white;
		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;
			margin-left: 5px;

			&:after {
				content: '';
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}
		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}

		@media only screen and (max-width: 470px) {
			display: none;
		}
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`;

const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.2s ease 0s;
	cursor: pointer;
	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

export default Header;
