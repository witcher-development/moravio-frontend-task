import { QueryClientProvider, QueryClient } from 'react-query';

import { HomePage } from '@home';


const queryClient = new QueryClient();

function App () {
	return (
		<QueryClientProvider client={queryClient}>
			<HomePage />
		</QueryClientProvider>
	);
}

export default App;
