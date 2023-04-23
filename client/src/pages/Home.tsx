import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import { useSocket } from '../contexts/Socket';
import { useLocalList } from '../contexts/LocalList';
import RequestApprovalDialog from '../components/RequestApprovalDialog';
import TaskListView from '../components/TaskListView';

import './Home.css';

function Home() {
	const { auth, session } = useAuth();
	const { socket } = useSocket();
	const { taskList, clearTaskListLocal } = useLocalList();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			auth.signOut();
			socket.disconnect();
			clearTaskListLocal();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="home-container">
			{ <RequestApprovalDialog/> }
			<h1 className="home-header">task bud</h1>
			<div className="home-header-user-container">
				{ session && <p className="home-username">Current user: {session.user.email}</p> }
				{
					session
						? <button className="button-primary" onClick={handleLogout}>Log Out</button>
						: <button className="button-primary" onClick={() => navigate('/login')}>Log In</button>
				}
			</div>
			<TaskListView taskList={ taskList } />
			<button className="button-primary" onClick={() => navigate('/request-buddy')}>Request Buddy</button>
			<button className="button-primary" onClick={() => navigate('/add-task')}>Add Task</button>
		</div>
	)
};

export default Home;