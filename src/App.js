import { Header } from './components/Header.jsx';
import { Table } from './components/Table.jsx';
import { Start } from './components/Start.jsx';
import { useState } from 'react';
function App() {
	const [start, setStart] = useState(false);
	return (
		<div className='App'>
			<Header />
			{start ? <Table /> : <Start setStart={setStart} />}
		</div>
	);
}

export default App;
